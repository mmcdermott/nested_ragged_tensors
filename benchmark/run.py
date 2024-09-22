import rootutils

root = rootutils.setup_root(__file__, dotenv=True, pythonpath=True, cwd=False)

SAMPLE_DATASET_PATH = root / "sample_dataset" / "dataset.pkl"
OUTPUT_DIR = root / "benchmark" / "outputs"

import json
import pickle
from datetime import timedelta
from pathlib import Path
from typing import Any

import numpy as np
import pytest

from benchmark.nrt_dataset import NRTDataset


def to_val(k: str, v: Any) -> dict:
    CNT_PREFIX = "Count: "
    match v:
        case list() as samples:
            vs = [to_val(k, val) for val in samples]
            cnt = 0
            sum_val = 0
            sum_val_sq = 0

            for v in vs:
                if "value" not in v:
                    raise ValueError(f"Value not found in {v}")

                if "extra" in v and v["extra"].startswith(CNT_PREFIX):
                    new_cnt = int(v["extra"][len(CNT_PREFIX) :])
                    cnt += new_cnt
                    sum_val += new_cnt * v["value"]

                    if "range" not in v:
                        raise ValueError(f"Range not found in {v} but count is")
                    v_stdev = v["range"]
                    v_var = v_stdev**2
                    v_sum_sq = (v_var + (v["value"] ** 2)) * new_cnt
                    sum_val_sq += v_sum_sq
                else:
                    cnt += 1
                    sum_val += v["value"]
                    sum_val_sq += v["value"] ** 2

            mean_val = sum_val / cnt
            std_val = np.sqrt((sum_val_sq - (sum_val**2) / cnt) / (cnt - 1))
            return {"value": mean_val, "range": std_val, "extra": f"{CNT_PREFIX}{cnt}"}
        case tuple() as stats if len(stats) == 3:
            mean_val, cnt, std_val = stats
            return {"value": mean_val, "range": std_val, "extra": f"{CNT_PREFIX}{cnt}"}
        case dict() as mem_stats if "metadata" in mem_stats and "peak_memory" in mem_stats["metadata"]:
            return {"value": mem_stats["metadata"]["peak_memory"]}
        case int() | float() as val:
            return {"value": val}
        case timedelta() as duration:
            return {"value": duration.total_seconds()}
        case _:
            raise ValueError(f"Unsupported type for {k}: {v}")


def summarize_output(out: dict) -> list[dict]:
    """Summarizes the output into a minimal format suitable for monitoring with github-actions-benchmark."""

    summary = []

    for single_key, name, unit in [
        ("disk_size", "Preparation/InputDiskSize", "bytes"),
        ("epoch_durations", "Usage/Duration/Epoch", "seconds"),
    ]:
        summary.append({"name": name, "unit": unit, **to_val(single_key, out[single_key])})

    for nested_key, name, unit in [
        ("prep_mem_stats", "Preparation/Memory", "bytes"),
        ("memory_stats", "Usage/Memory", "bytes"),
        ("prep_times", "Preparation/Duration", "seconds"),
        ("duration_stats", "Usage/Duration", "seconds"),
        ("batch_sizes", "Outputs/BatchSize", "bytes"),
    ]:
        for k, v in out[nested_key].items():
            summary.append({"name": f"{name}/{k}", "unit": unit, **to_val(k, v)})

    return summary


@pytest.mark.parametrize("batch_size", [256])
@pytest.mark.parametrize("max_seq_len", [512])
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

        D = NRTDataset(**kwargs, max_seq_len=max_seq_len)
        batch_sizes, epoch_durations = D.benchmark(
            batch_size=batch_size,
            num_epochs=num_epochs,
        )

        out["batch_sizes"] = batch_sizes
        out["epoch_durations"] = epoch_durations
        out["memory_stats"] = D.memory_stats
        out["duration_stats"] = D._duration_stats

    final_json_output = summarize_output(out)

    output_fp = OUTPUT_DIR / f"output_{batch_size}_{max_seq_len}_{num_epochs}.json"
    output_fp.parent.mkdir(parents=True, exist_ok=True)
    output_fp.write_text(json.dumps(final_json_output))
