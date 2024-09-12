import logging
import os
from abc import ABC, abstractmethod
from contextlib import contextmanager
from datetime import datetime, timedelta
from pathlib import Path
from tempfile import TemporaryDirectory
from typing import Any

from memray import Tracker
from mixins import TimeableMixin
from torch.utils.data import DataLoader, Dataset

from sample_dataset_builder import SAMPLE_DATASET_T

logger = logging.getLogger(__name__)

import json
import subprocess


def get_memray_stats(memray_tracker_fp: Path, memray_stats_fp: Path):
    memray_stats_cmd = f"memray stats {memray_tracker_fp} --json -o {memray_stats_fp} -f"
    subprocess.run(memray_stats_cmd, shell=True, check=True)
    try:
        json.loads(memray_stats_fp.read_text())
    except Exception as e:
        raise ValueError(f"Failed to parse memray stats file at {memray_stats_fp}") from e


class BenchmarkableDataset(Dataset, TimeableMixin, ABC):
    def __init__(
        self,
        data_dir: Path,
        memray_stats_fp: Path,
        max_seq_len: int | None = None,
        min_seq_len: int | None = None,
        task_bounds: list[tuple[int, int, int]] | None = None,
    ):
        super().__init__()
        self.max_seq_len = max_seq_len
        self.min_seq_len = min_seq_len
        self.task_bounds = task_bounds
        self.read(data_dir)
        if not hasattr(self, "N"):
            raise AttributeError("Dataset must have attribute 'N' after reading data.")

    @property
    def total_memory_stats(self) -> dict:
        if not self.memray_stats_fp.exists():
            raise FileNotFoundError(f"Memray stats file not found at {self.memray_stats_fp}")
        return json.loads(self.memray_stats_fp.read_text())

    @classmethod
    @contextmanager
    def TemporaryDataset(cls, data: SAMPLE_DATASET_T, root_dir: Path):
        memray_stats_fp = root_dir / "memray_stats.json"
        with TemporaryDirectory(prefix=str(root_dir.resolve())) as tmpdir:
            tmpdir = Path(tmpdir)
            memray_fp = tmpdir / ".memray"

            cnstr_kwargs, prep_times = cls._prep(data, tmpdir)
            cnstr_kwargs["memray_stats_fp"] = memray_stats_fp

            disk_size = sum((Path(d) / f).stat().st_size for d, _, files in os.walk(tmpdir) for f in files)

            try:
                if memray_fp.exists():
                    logger.warning(f"Memray tracker file already exists at {memray_fp}. Overwriting.")
                    memray_fp.unlink()

                with Tracker(memray_fp, follow_fork=True):
                    yield cnstr_kwargs, prep_times, disk_size
            finally:
                _ = get_memray_stats(memray_fp, memray_stats_fp)

    @classmethod
    @abstractmethod
    def _build(cls, data: SAMPLE_DATASET_T) -> Any:
        raise NotImplementedError

    @classmethod
    @abstractmethod
    def write(cls, data: Any, fp: Path):
        raise NotImplementedError

    @abstractmethod
    @TimeableMixin.TimeAs
    def read(self, fp: Path):
        raise NotImplementedError

    @classmethod
    def _prep(cls, data: SAMPLE_DATASET_T, data_dir: Path) -> tuple[dict[str, Any], dict[str, timedelta]]:
        """This should return keyword args to build a dataset leveraging the storage directory."""
        st = datetime.now()
        data_obj = cls._build(data)
        build_time = datetime.now() - st

        data_dir.mkdir(parents=True, exist_ok=True)
        st = datetime.now()
        cls.write(data_obj, data_dir)
        write_time = datetime.now() - st

        return {"data_dir": data_dir}, {"build_time": build_time, "write_time": write_time}

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
