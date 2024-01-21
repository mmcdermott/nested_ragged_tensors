"""In this file, we will test the computational profiles of various strategies of loading and manipulating
data of this type. We will use the following fixed data object: ```python {"dim_0": [1, 2, 2, 1, ..., 4],
"dim_1": [[1, 2, 1, 1], [22, 2, 1], ..., [3]], "dim_2_1": [[[1, 2, 3], [1]], [[1, 3], [1, 2, 3], [1, 2, 3]],
..., [[2, 3]]], "dim_2_2": [[[1, 2, 3], [1]], [[1, 3], [1, 2, 3], [1, 2, 3]], ..., [[2, 3]]], } ```

These correspond to, for example, a medical dataset, where each patient has a variable `dim_0` that is a
scalar (e.g., their race), then has a sequence of medical visits whose times are recorded in `dim_1` (as
variable length lists), and each visit has a sequence of laboratory test codes (`dim_2_1`) and their
associated numerical values (`dim_2_2`), both of which are recorded as nested variable length lists.

We want to test various ways to serialize this data to disk, load the data from disk into memory, then iterate
through each patient's data, slicing down to a specific subsequence for each patient, then materializing the
data in a dictionary of dense, collated tensors.

Our interest is in how expensive each of these operations are in terms of computational resources.
"""

import rootutils

root = rootutils.setup_root(__file__, dotenv=True, pythonpath=True, cwd=False)

import json
from collections import defaultdict
from collections.abc import Callable
from datetime import datetime
from pprint import pformat
from tempfile import TemporaryDirectory

import humanize
import hydra
import torch
from loguru import logger
from mixins import TimeableMixin
from omegaconf import DictConfig
from torch.utils.data import DataLoader

from nested_ragged_tensors.ragged_numpy import Path, np
from performance_tests.dense_dataset import DenseDataset
from performance_tests.direct_dataset import DirectPickleDataset
from performance_tests.named_safetensors_dataset import NamedSafetensorsDataset
from performance_tests.nrt_dataset import NRTDataset
from performance_tests.utils import tensor_size


def generate_dataset(cfg: DictConfig, rng: np.random.Generator) -> dict:
    """Generate a dataset of the specified size."""
    dataset = {}

    # dataset["dim_0"] = list(rng.choice(100, size=cfg.num_patients))

    n_events_per_patient = rng.choice(
        cfg.num_events.N,
        size=cfg.num_patients,
        replace=True,
        p=np.array(cfg.num_events.freq) / sum(cfg.num_events.freq),
    )
    n_codes_per_event_per_patient = np.split(
        rng.choice(
            cfg.num_codes_per_event.N,
            size=sum(n_events_per_patient),
            replace=True,
            p=np.array(cfg.num_codes_per_event.freq) / sum(cfg.num_codes_per_event.freq),
        ),
        np.cumsum(n_events_per_patient),
    )[:-1]

    dataset["dim_1"] = [rng.choice(100, size=n) for n in n_events_per_patient]

    dataset["dim_2_1"] = [
        [rng.choice(100, size=n) for n in n_codes_per_event]
        for n_codes_per_event in n_codes_per_event_per_patient
    ]
    dataset["dim_2_2"] = [
        [rng.choice(100, size=n) for n in n_codes_per_event]
        for n_codes_per_event in n_codes_per_event_per_patient
    ]

    bounds = []
    for n_events in n_events_per_patient:
        if n_events > cfg.max_events_per_item:
            st = rng.choice(n_events - cfg.max_events_per_item)
            end = st + cfg.max_events_per_item
        else:
            st = 0
            end = n_events

        bounds.append((st, end))

    return dataset, bounds


def strify(stats: tuple[float], fn: Callable | None = None) -> str:
    if fn is None:
        fn = str

    mean, std, q25, q75, q05, q95 = stats
    return f"{fn(mean)} ± {fn(std)} ({fn(q05)} - {fn(q95)})"


def summarize_results(results_dict: dict) -> tuple[dict, dict]:
    """Summarize the results of a test run."""
    out = defaultdict(lambda: defaultdict(list))
    for k, v in results_dict.items():
        k_parts = k.split("/")
        seed, dataset = k_parts[:2]

        match k_parts[2]:
            case "disk_size":
                out[dataset]["disk_size"].append(v)
            case "total_iteration_time":
                out[dataset]["total_iteration_time"].append(v)
            case "sizes":
                out[dataset][f"sizes/{k_parts[3]}"].extend(v)
            case "times":
                out[dataset][f"times/{k_parts[3]}"].extend(v)

    summary_dict = defaultdict(dict)
    for dataset, dataset_dict in out.items():
        for k, v in dataset_dict.items():
            summary_dict[dataset][k] = (
                np.mean(v),
                np.std(v),
                np.quantile(v, 0.25),
                np.quantile(v, 0.75),
                np.quantile(v, 0.05),
                np.quantile(v, 0.95),
            )

    strings_dict = defaultdict(dict)
    for dataset, dataset_dict in summary_dict.items():
        strings_dict[dataset]["disk_size"] = strify(dataset_dict["disk_size"], humanize.naturalsize)
        strings_dict[dataset]["total_iteration_time"] = strify(
            dataset_dict["total_iteration_time"], TimeableMixin._pprint_duration
        )
        for k, v in dataset_dict.items():
            if k.startswith("sizes/"):
                strings_dict[dataset][k] = strify(v, humanize.naturalsize)
            elif k.startswith("times/"):
                strings_dict[dataset][k] = strify(v, TimeableMixin._pprint_duration)

    return {**summary_dict}, {**strings_dict}


@hydra.main(config_path="configs", config_name="config")
def main(cfg: DictConfig):
    logger.info("Starting test")

    out = {}
    for seed in range(cfg.seeds):
        logger.info(f"Starting seed {seed}")
        rng = np.random.default_rng(seed)

        logger.info("Generating raw data")
        raw_data, bounds = generate_dataset(cfg.dataset_spec, rng)

        for dataset in cfg.datasets:
            logger.info(f"Generating {dataset} dataset")
            match dataset:
                case "direct_pickle":
                    cls = DirectPickleDataset
                case "nested_ragged_tensors":
                    cls = NRTDataset
                case "dense":
                    cls = DenseDataset
                case "named_safetensors":
                    cls = NamedSafetensorsDataset

            st = datetime.now()
            D = cls(raw_data, bounds=bounds)
            elapsed = datetime.now() - st
            out[f"{seed}/{dataset}/creation_time"] = elapsed.total_seconds()
            logger.info(f"Creation took {TimeableMixin._pprint_duration(elapsed.total_seconds())}")

            with TemporaryDirectory() as tempdir:
                data_file = Path(f"{tempdir}/dataset.file")
                logger.info(f"Writing {dataset} dataset to disk @ {data_file}")
                st = datetime.now()
                D.write(data_file)
                elapsed = datetime.now() - st
                out[f"{seed}/{dataset}/write_time"] = elapsed.total_seconds()
                logger.info(f"Writing took {TimeableMixin._pprint_duration(elapsed.total_seconds())}")
                size = data_file.stat().st_size
                logger.info(f"Dataset takes up {humanize.naturalsize(size)}")
                out[f"{seed}/{dataset}/disk_size"] = size

                logger.info(f"Deleting original {dataset} dataset.")
                del D

                logger.info(f"Reading {dataset} dataset from disk @ {data_file}")
                st = datetime.now()
                D_read = cls.read(data_file, bounds=bounds)
                elapsed = datetime.now() - st
                out[f"{seed}/{dataset}/read_time"] = elapsed.total_seconds()
                logger.info(f"Reading took {TimeableMixin._pprint_duration(elapsed.total_seconds())}")

                logger.info(f"Building {dataset} dataloader")

                dataloader = DataLoader(
                    D_read,
                    batch_size=cfg.batch_size,
                    shuffle=True,
                    collate_fn=D_read.collate,
                )

                torch.manual_seed(seed)
                logger.info(f"Starting {dataset} iteration")
                start = datetime.now()
                sizes = defaultdict(list)
                for B in dataloader:
                    for k, v in B.items():
                        sizes[k].append(tensor_size(v))
                elapsed = datetime.now() - start
                logger.info(f"Finished {dataset} iteration in {TimeableMixin._pprint_duration(elapsed.total_seconds())}")
                out[f"{seed}/{dataset}/total_iteration_time"] = elapsed.total_seconds()
                for k, v in sizes.items():
                    out[f"{seed}/{dataset}/sizes/{k}/values"] = v

                for k in D_read._duration_stats.keys():
                    out[f"{seed}/{dataset}/times/{k}/values"] = D_read._times_for(k)
            logger.info(f"Finished {dataset} dataset. Times:\n{D_read._profile_durations()}")
        logger.info(f"Finished seed {seed}")

    logger.info(f"Finished test. Writing results to {cfg.output_file}")
    output_fp = Path(cfg.output_file)
    output_fp.parent.mkdir(parents=True, exist_ok=True)
    with open(cfg.output_file, "w") as f:
        json.dump(out, f)

    logger.info("Summarizing results")
    summary_dict, strings_dict = summarize_results(out)
    with open(output_fp.with_suffix(".summary.json"), "w") as f:
        json.dump(summary_dict, f)

    logger.info(f"Summary results:\n{pformat(strings_dict)}")

    return out


if __name__ == "__main__":
    main()
