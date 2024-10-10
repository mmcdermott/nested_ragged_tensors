import pickle
from pathlib import Path

import numpy as np
import torch
from mixins import TimeableMixin
from torch.utils.data import default_collate

from nested_ragged_tensors.ragged_numpy import JointNestedRaggedTensorDict
from sample_dataset_builder import SAMPLE_DATASET_T

from .benchmarkable_dataset import BenchmarkableDataset


class NRTDataset(BenchmarkableDataset):
    @classmethod
    def _build(cls, data: SAMPLE_DATASET_T) -> tuple[dict, JointNestedRaggedTensorDict]:
        static_data = None
        static_keys = [k for k in data if k.startswith("static_")]
        for k in static_keys:
            S = data.pop(k)
            if static_data is None:
                static_data = [{} for _ in range(len(S))]
            for i in range(len(S)):
                static_data[i][k] = S[i]

        subject_indices = []
        for i, ts in enumerate(data["timedelta"]):
            subject_indices.append((i, 0, len(ts)))

        return ((static_data, subject_indices), JointNestedRaggedTensorDict(data))

    @TimeableMixin.TimeAs
    def read(self, read_dir: Path):
        self.dynamic_data = JointNestedRaggedTensorDict(tensors_fp=read_dir / "dynamics.nrt")
        with open(read_dir / "static_data.pkl", "rb") as f:
            self.static_data, self.index = pickle.load(f)
        self.N = len(self.index)

    @classmethod
    def write(cls, data: tuple[dict, JointNestedRaggedTensorDict], data_dir: Path):
        static_data, dynamic_data = data

        dynamics_fp = data_dir / "dynamics.nrt"
        dynamic_data.save(dynamics_fp)

        static_data_fp = data_dir / "static_data.pkl"
        with open(static_data_fp, "wb") as f:
            pickle.dump(static_data, f)

    @TimeableMixin.TimeAs
    def __getitem__(self, i):
        i, start, end = self.index[i]
        static_data = self.static_data[i]

        return (static_data, self._load_dynamic_data(i, start, end))

    @TimeableMixin.TimeAs
    def _load_dynamic_data(self, i, start=None, end=None) -> JointNestedRaggedTensorDict:
        if self.max_seq_len is None:
            return self.dynamic_data[i]

        L = end - start
        if L <= self.max_seq_len:
            return self.dynamic_data[i]

        start = np.random.randint(0, L - self.max_seq_len)
        return self.dynamic_data[i, start : start + self.max_seq_len]

    @TimeableMixin.TimeAs
    def collate(self, batch: list[tuple[dict, JointNestedRaggedTensorDict]]) -> dict:
        dynamics = [d for _, d in batch]
        collated_dynamics = JointNestedRaggedTensorDict.vstack(dynamics).to_dense()
        collated_dynamics = {k: torch.from_numpy(v) for k, v in collated_dynamics.items()}
        collated_static_data = default_collate([s for s, _ in batch])
        return {**collated_static_data, **collated_dynamics}
