"""Micro-benchmarks for core NRT operations.

These benchmarks use synthetic data (no sample_dataset dependency) and measure individual operations in
isolation so regressions are directly attributable.

Output format is the same customSmallerIsBetter JSON consumed by github-action-benchmark, written to
``benchmark/outputs/micro.json``. Run via the dedicated benchmark workflow (which installs the
``benchmarks`` dependency group that provides ``rootutils``) or locally with
``uv run pytest benchmark/run_micro.py`` after installing that group. Like ``benchmark/run.py``, this
module is not collected by the main test suite (``tests.yaml`` uses ``--ignore=benchmark``) and is named
without the ``test_`` prefix so bare ``pytest`` in the repo root does not auto-collect it either.
"""

import json
import time
from pathlib import Path
from tempfile import TemporaryDirectory

import numpy as np
import rootutils

from nested_ragged_tensors.ragged_numpy import JointNestedRaggedTensorDict

root = rootutils.setup_root(__file__, dotenv=True, pythonpath=True, cwd=False)
OUTPUT_DIR = root / "benchmark" / "outputs"

# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

# Repeat count for timing stability
N_REPEATS = 5


def _time(fn, n_repeats=N_REPEATS):
    """Run *fn* several times and return (mean_seconds, std_seconds, count)."""
    times = []
    for _ in range(n_repeats):
        start = time.perf_counter()
        fn()
        times.append(time.perf_counter() - start)
    arr = np.array(times)
    return float(arr.mean()), float(arr.std(ddof=1)), len(times)


def _make_entry(name, unit, mean, std, count):
    return {"name": name, "unit": unit, "value": mean, "range": std, "extra": f"Count: {count}"}


# ---------------------------------------------------------------------------
# Synthetic data generators
# ---------------------------------------------------------------------------


def make_1d(n_elements):
    """Flat 1D tensor: ``{"val": [1, 2, ..., n]}``."""
    return JointNestedRaggedTensorDict({"val": list(range(n_elements))})


def make_2d(n_rows, row_len_range=(5, 50), seed=42):
    """2D ragged: each row has a random number of elements."""
    rng = np.random.default_rng(seed)
    lo, hi = row_len_range
    rows = [list(range(int(rng.integers(lo, hi)))) for _ in range(n_rows)]
    return JointNestedRaggedTensorDict({"val": rows})


def make_3d(n_outer, inner_range=(2, 10), leaf_range=(3, 20), seed=42):
    """3D ragged: outer → inner lists → leaf lists."""
    rng = np.random.default_rng(seed)
    data = []
    for _ in range(n_outer):
        n_inner = int(rng.integers(*inner_range))
        inner = [list(range(int(rng.integers(*leaf_range)))) for _ in range(n_inner)]
        data.append(inner)
    return JointNestedRaggedTensorDict({"val": data})


def make_multikey_2d(n_rows, n_keys=4, row_len_range=(5, 50), seed=42):
    """2D ragged with multiple keys sharing the same bounds."""
    rng = np.random.default_rng(seed)
    lo, hi = row_len_range
    lengths = [int(rng.integers(lo, hi)) for _ in range(n_rows)]
    raw = {}
    for k in range(n_keys):
        raw[f"key_{k}"] = [list(range(length)) for length in lengths]
    return JointNestedRaggedTensorDict(raw)


# ---------------------------------------------------------------------------
# Benchmark definitions
# ---------------------------------------------------------------------------

SCALE_CONFIGS = [
    ("small", 100),
    ("medium", 1_000),
    ("large", 10_000),
]


def bench_getitem_int(results):
    """Benchmark single-element integer indexing."""
    for label, n in SCALE_CONFIGS:
        J = make_2d(n)
        indices = list(range(min(n, 200)))  # index up to 200 elements

        def run(J=J, indices=indices):
            for i in indices:
                J[i]

        mean, std, count = _time(run)
        # Normalize to per-element time
        per_item = mean / len(indices)
        per_item_std = std / len(indices)
        results.append(_make_entry(f"CoreOps/GetItem_Int/{label}", "seconds", per_item, per_item_std, count))


def bench_getitem_slice(results):
    """Benchmark slice indexing."""
    for label, n in SCALE_CONFIGS:
        J = make_2d(n)
        slice_size = max(1, n // 10)

        def run(J=J, s=slice_size):
            J[0:s]

        mean, std, count = _time(run)
        results.append(_make_entry(f"CoreOps/GetItem_Slice/{label}", "seconds", mean, std, count))


def bench_to_dense_1d(results):
    """Benchmark to_dense on flat 1D tensors."""
    for label, n in SCALE_CONFIGS:
        J = make_1d(n)
        mean, std, count = _time(lambda J=J: J.to_dense())
        results.append(_make_entry(f"CoreOps/ToDense_1D/{label}", "seconds", mean, std, count))


def bench_to_dense_2d(results):
    """Benchmark to_dense on 2D ragged tensors."""
    for label, n in SCALE_CONFIGS:
        J = make_2d(n)
        mean, std, count = _time(lambda J=J: J.to_dense())
        results.append(_make_entry(f"CoreOps/ToDense_2D/{label}", "seconds", mean, std, count))


def bench_to_dense_3d(results):
    """Benchmark to_dense on 3D ragged tensors."""
    for label, n in SCALE_CONFIGS:
        J = make_3d(n)
        mean, std, count = _time(lambda J=J: J.to_dense())
        results.append(_make_entry(f"CoreOps/ToDense_3D/{label}", "seconds", mean, std, count))


COLLATE_BATCH_SIZES = [
    ("batch16", 16),
    ("batch64", 64),
    ("batch256", 256),
]


def bench_vstack_to_dense(results):
    """Benchmark the collation path: vstack individual items then to_dense."""
    J = make_2d(1000)
    for label, batch_size in COLLATE_BATCH_SIZES:
        items = [J[i % len(J)] for i in range(batch_size)]

        def run(items=items):
            stacked = JointNestedRaggedTensorDict.vstack(items)
            stacked.to_dense()

        mean, std, count = _time(run)
        results.append(_make_entry(f"CoreOps/Collate_VStack_ToDense/{label}", "seconds", mean, std, count))


def bench_concatenate(results):
    """Benchmark concatenation of multiple tensors."""
    for label, n in SCALE_CONFIGS:
        chunks = [make_2d(max(1, n // 4), row_len_range=(5, 20), seed=100 + i) for i in range(4)]

        def run(chunks=chunks):
            JointNestedRaggedTensorDict.concatenate(chunks)

        mean, std, count = _time(run)
        results.append(_make_entry(f"CoreOps/Concatenate/{label}", "seconds", mean, std, count))


def bench_save_load(results):
    """Benchmark save to disk and load from disk."""
    for label, n in SCALE_CONFIGS:
        J = make_2d(n)

        with TemporaryDirectory() as tmpdir:
            fp = Path(tmpdir) / "test.nrt"

            # Save benchmark
            mean, std, count = _time(lambda J=J, fp=fp: J.save(fp))
            results.append(_make_entry(f"CoreOps/Save/{label}", "seconds", mean, std, count))

            # Ensure file exists for load benchmark
            J.save(fp)

            # Load benchmark
            def load(fp=fp):
                loaded = JointNestedRaggedTensorDict(tensors_fp=fp)
                _ = loaded.tensors  # force lazy load

            mean, std, count = _time(load)
            results.append(_make_entry(f"CoreOps/Load/{label}", "seconds", mean, std, count))


def bench_multikey(results):
    """Benchmark to_dense with multiple keys sharing bounds."""
    for label, n in SCALE_CONFIGS:
        J = make_multikey_2d(n, n_keys=4)
        mean, std, count = _time(lambda J=J: J.to_dense())
        results.append(_make_entry(f"CoreOps/ToDense_MultiKey/{label}", "seconds", mean, std, count))


# ---------------------------------------------------------------------------
# Test entry point
# ---------------------------------------------------------------------------


def test_micro_benchmarks():
    """Run all micro-benchmarks and write the combined output."""
    results = []

    # Core NRT operations. The previous "Baseline" tier (naive numpy padded collate, pickle
    # round-trip, and a duplicate NRT round-trip) was removed after a pickle-timing alert made
    # it clear those entries measured pure stdlib/numpy work unaffected by any change in this
    # repo — they produced runner-variance false alerts without providing a useful signal.
    # Save/load regressions are still covered by bench_save_load.
    bench_getitem_int(results)
    bench_getitem_slice(results)
    bench_to_dense_1d(results)
    bench_to_dense_2d(results)
    bench_to_dense_3d(results)
    bench_vstack_to_dense(results)
    bench_concatenate(results)
    bench_save_load(results)
    bench_multikey(results)

    output_fp = OUTPUT_DIR / "micro.json"
    output_fp.parent.mkdir(parents=True, exist_ok=True)
    output_fp.write_text(json.dumps(results, indent=2))
