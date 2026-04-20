"""Regression test for #70: disk-backed __getitem__ should make at most one ``safe_open`` call per logical
operation.

Wall-clock timings alone don't catch a regression here (filesystem mmap is cheap
enough that an extra syscall or two is lost in noise), so we instrument the
module-level ``safe_open`` binding with a counter.
"""

import tempfile
from pathlib import Path
from unittest.mock import patch

import numpy as np
import pytest

import nested_ragged_tensors.ragged_numpy as rn
from nested_ragged_tensors.ragged_numpy import JointNestedRaggedTensorDict


@pytest.fixture
def disk_jnrt():
    rng = np.random.default_rng(0)
    rows = [list(range(int(rng.integers(10, 50)))) for _ in range(20)]
    J = JointNestedRaggedTensorDict({"val_a": rows, "val_b": rows})
    with tempfile.TemporaryDirectory() as td:
        fp = Path(td) / "t.nrt"
        J.save(fp)
        yield fp


def _count_safe_open(fn):
    """Run ``fn`` with ``safe_open`` patched to count calls; return the count."""
    n = [0]
    orig = rn.safe_open

    def counting(*a, **k):
        n[0] += 1
        return orig(*a, **k)

    with patch.object(rn, "safe_open", counting):
        fn()
    return n[0]


@pytest.mark.parametrize(
    "access_desc,access_fn",
    [
        ("int_index", lambda J: J[0]),
        ("slice", lambda J: J[0:3]),
        ("ndarray", lambda J: J[np.array([0, 1, 2])]),
        ("tuple", lambda J: J[0, :5]),
    ],
)
def test_getitem_opens_archive_at_most_once(disk_jnrt, access_desc, access_fn):
    """Every access style should coalesce to <=1 safe_open call."""
    J = JointNestedRaggedTensorDict(tensors_fp=disk_jnrt)
    # Warm any one-time caches by running the access once before measuring.
    access_fn(J)
    count = _count_safe_open(lambda: access_fn(J))
    assert count <= 1, f"{access_desc} made {count} safe_open calls, expected <= 1"


def test_in_memory_access_makes_no_safe_open_call(disk_jnrt):
    """After forcing .tensors to load, __getitem__ should never touch the filesystem."""
    J = JointNestedRaggedTensorDict(tensors_fp=disk_jnrt)
    _ = J.tensors
    count = _count_safe_open(lambda: J[0])
    assert count == 0


def test_subset_load_access_coalesces_safe_open(disk_jnrt):
    """Subset-loaded instances also honor the one-open-per-access contract."""
    J = JointNestedRaggedTensorDict(tensors_fp=disk_jnrt, keys={"val_a"})
    J[0]  # warm caches
    count = _count_safe_open(lambda: J[0])
    assert count <= 1
