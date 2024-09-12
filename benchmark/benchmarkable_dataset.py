import logging
import os
import sys
from abc import ABC, abstractmethod
from collections import defaultdict
from contextlib import contextmanager
from datetime import datetime, timedelta
from pathlib import Path
from tempfile import TemporaryDirectory
from typing import Any

import torch
from memray import Tracker
from mixins import TimeableMixin
from torch.utils.data import DataLoader, Dataset

from sample_dataset_builder import SAMPLE_DATASET_T

logger = logging.getLogger(__name__)

import json
import subprocess


def get_memray_stats(memray_tracker_fp: Path, memray_stats_fp: Path) -> dict:
    memray_stats_cmd = f"memray stats {memray_tracker_fp} --json -o {memray_stats_fp} -f"
    subprocess.run(memray_stats_cmd, shell=True, check=True, capture_output=True)
    try:
        return json.loads(memray_stats_fp.read_text())
    except Exception as e:
        raise ValueError(f"Failed to parse memray stats file at {memray_stats_fp}") from e


@contextmanager
def TrackMemoryIn(memory_stats: dict):
    with TemporaryDirectory() as tmpdir:
        memray_fp = Path(tmpdir) / ".memray"
        memray_stats_fp = Path(tmpdir) / "memray_stats.json"

        try:
            with Tracker(memray_fp, follow_fork=True):
                yield memory_stats
        finally:
            memory_stats.update(get_memray_stats(memray_fp, memray_stats_fp))


class BenchmarkableDataset(Dataset, TimeableMixin, ABC):
    def __init__(
        self,
        data_dir: Path,
        max_seq_len: int | None = None,
        task_bounds: list[tuple[int, int, int]] | None = None,
    ):
        super().__init__()
        self.memory_stats = {}

        # TODO(mmd): Need to handle min seq length too.
        self.max_seq_len = max_seq_len
        self.task_bounds = task_bounds
        self.init_from_disk(data_dir)
        if not hasattr(self, "N"):
            raise AttributeError("Dataset must have attribute 'N' after reading data.")

    @classmethod
    @contextmanager
    def TemporaryDataset(cls, data: SAMPLE_DATASET_T, root_dir: Path):
        with TemporaryDirectory(prefix=str(root_dir.resolve())) as tmpdir:
            tmpdir = Path(tmpdir)

            cnstr_kwargs, prep_times, prep_mem_stats = cls._prep(data, tmpdir)

            disk_size = sum((Path(d) / f).stat().st_size for d, _, files in os.walk(tmpdir) for f in files)
            yield cnstr_kwargs, (prep_times, disk_size, prep_mem_stats)

    @classmethod
    @abstractmethod
    def _build(cls, data: SAMPLE_DATASET_T) -> Any:
        raise NotImplementedError

    @classmethod
    @abstractmethod
    def write(cls, data: Any, fp: Path):
        raise NotImplementedError

    def init_from_disk(self, data_dir: Path):
        self.memory_stats["read"] = {}
        with TrackMemoryIn(self.memory_stats["read"]):
            self.read(data_dir)

    @abstractmethod
    @TimeableMixin.TimeAs
    def read(self, fp: Path):
        raise NotImplementedError

    @classmethod
    def _prep(cls, data: SAMPLE_DATASET_T, data_dir: Path) -> tuple[dict[str, Any], dict[str, timedelta]]:
        """This should return keyword args to build a dataset leveraging the storage directory."""
        memory_stats = {"build": {}, "write": {}}
        with TrackMemoryIn(memory_stats["build"]):
            st = datetime.now()
            data_obj = cls._build(data)
            build_time = datetime.now() - st

        data_dir.mkdir(parents=True, exist_ok=True)
        with TrackMemoryIn(memory_stats["write"]):
            st = datetime.now()
            cls.write(data_obj, data_dir)
            write_time = datetime.now() - st

        return {"data_dir": data_dir}, {"build": build_time, "write": write_time}, memory_stats

    def __len__(self) -> int:
        return self.N

    @abstractmethod
    @TimeableMixin.TimeAs
    def __getitem__(self, i):
        raise NotImplementedError

    @abstractmethod
    @TimeableMixin.TimeAs
    def collate(self, batch: list[dict]) -> dict:
        raise NotImplementedError

    def dataloader(self, *args, **kwargs) -> DataLoader:
        return DataLoader(self, *args, collate_fn=self.collate, **kwargs)

    @staticmethod
    def tensor_size(a: torch.Tensor) -> int:
        return sys.getsizeof(a) + torch.numel(a) * a.element_size()

    @TimeableMixin.TimeAs
    def benchmark(self, batch_size: int, num_epochs: int = 1) -> tuple[dict[str, list[int]], list[timedelta]]:
        torch.manual_seed(1)

        dataloader = self.dataloader(batch_size=batch_size, shuffle=True)

        sizes = defaultdict(list)
        epoch_durations = []

        self.memory_stats["benchmark"] = {}
        with TrackMemoryIn(self.memory_stats["benchmark"]):
            for epoch in range(num_epochs):
                epoch_start = datetime.now()
                for B in dataloader:
                    for k, v in B.items():
                        sizes[k].append(BenchmarkableDataset.tensor_size(v))
                epoch_durations.append(datetime.now() - epoch_start)

        return sizes, epoch_durations
