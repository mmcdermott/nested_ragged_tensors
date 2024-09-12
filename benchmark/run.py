import rootutils

root = rootutils.setup_root(__file__, dotenv=True, pythonpath=True, cwd=False)

SAMPLE_DATASET_PATH = root / "sample_dataset" / "dataset.pkl"

import pickle
from pathlib import Path

import humanize
import numpy as np
import pytest

from benchmark.nrt_dataset import NRTDataset


@pytest.mark.parametrize("batch_size", [32])
@pytest.mark.parametrize("max_seq_len", [128, 256, 512])
@pytest.mark.parametrize("num_epochs", [5])
def test_profile(tmp_path: Path, batch_size: int, max_seq_len: int, num_epochs: int):
    with open(SAMPLE_DATASET_PATH, mode="rb") as f:
        raw_D = pickle.load(f)

    out = {}
    with NRTDataset.TemporaryDataset(raw_D, tmp_path) as (kwargs, stats):
        prep_times, disk_size, prep_mem_stats = stats
        out["prep_mem_stats"] = prep_mem_stats
        out["prep_times"] = prep_times
        out["disk_size"] = disk_size
        print(f"Dataset takes up {humanize.naturalsize(disk_size)}")
        print(f"Preparation times: {prep_times}")
        prep_mem_stats_summ = {
            k: humanize.naturalsize(v["metadata"]["peak_memory"]) for k, v in prep_mem_stats.items()
        }
        print(f"Preparation memory stats: {prep_mem_stats_summ}")

        D = NRTDataset(**kwargs, max_seq_len=max_seq_len)
        batch_sizes, epoch_durations = D.benchmark(
            batch_size=batch_size,
            num_epochs=num_epochs,
        )

        out["batch_sizes"] = batch_sizes
        out["epoch_durations"] = epoch_durations
        out["memory_stats"] = D.memory_stats
        out["peak_memory_read"] = D.memory_stats["read"]["metadata"]["peak_memory"]
        out["peak_memory_benchmark"] = D.memory_stats["benchmark"]["metadata"]["peak_memory"]

        print(D._profile_durations())
        print(f"Peak reading memory: {humanize.naturalsize(out['peak_memory_read'])}")
        print(f"Peak benchmarking memory: {humanize.naturalsize(out['peak_memory_benchmark'])}")

    average_epoch_duration = np.mean(epoch_durations)
    print(f"Average epoch duration: {average_epoch_duration} seconds")
