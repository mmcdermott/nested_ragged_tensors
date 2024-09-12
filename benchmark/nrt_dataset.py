import pickle
from functools import cached_property
from pathlib import Path

import numpy as np
from benchmarkable_dataset import BenchmarkableDataset
from mixins import TimeableMixin
from torch.utils.data import default_collate

from nested_ragged_tensors.ragged_numpy import JointNestedRaggedTensorDict
from sample_dataset_builder import SAMPLE_DATASET_T


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

        return (static_data, JointNestedRaggedTensorDict(data))

    @cached_property
    def index(self):
        if hasattr(self, "task_bounds") and self.task_bounds:
            return self.task_bounds
        else:
            return [(i, None, None) for i in range(len(self.dynamic_data))]

    @TimeableMixin.TimeAs
    def read(self, read_dir: Path):
        self.dynamic_data = JointNestedRaggedTensorDict.load(read_dir / "dynamics.nrt")
        with open(read_dir / "static_data.pkl", "rb") as f:
            self.static_data = pickle.load(f)
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
        dynamic_data = self.dynamic_data[i]
        static_data = self.static_data[i]

        if start is not None or end is not None:
            dynamic_data = dynamic_data[start:end]

        if self.max_seq_len is not None:
            L = len(dynamic_data)
            if L > self.max_seq_len:
                start = np.random.randint(0, L - self.max_seq_len)
                dynamic_data = dynamic_data[start : start + self.max_seq_len]

        return (static_data, dynamic_data)

    @TimeableMixin.TimeAs
    def collate(self, batch: list[tuple[dict, JointNestedRaggedTensorDict]]) -> dict:
        dynamics = [d for _, d in batch]
        collated_dynamics = JointNestedRaggedTensorDict.vstack(dynamics).to_dense()
        collated_static_data = default_collate([s for s, _ in batch])
        return {**collated_static_data, **collated_dynamics}
