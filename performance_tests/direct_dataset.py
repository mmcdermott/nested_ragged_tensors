import pickle

import torch
from mixins import TimeableMixin
from torch.utils.data import Dataset

from performance_tests.utils import ragged_to_dense


class DirectPickleDataset(Dataset, TimeableMixin):
    def __init__(self, obj, bounds):
        super().__init__()
        self.obj = obj
        self.bounds = bounds
        self.dynamic_keys = {"dim_1", "dim_2_1", "dim_2_2"}
        self.static_keys = set(obj.keys()) - self.dynamic_keys

    @classmethod
    def read(cls, path, bounds):
        with open(path, "rb") as f:
            obj = pickle.load(f)
        return cls(obj, bounds)

    def write(self, path):
        with open(path, "wb") as f:
            pickle.dump(self.obj, f)

    def __len__(self) -> int:
        return len(list(self.obj.values())[0])

    @TimeableMixin.TimeAs
    def __getitem__(self, i):
        out = {}
        start, end = self.bounds[i]
        for key in self.obj.keys():
            if key in self.dynamic_keys:
                out[key] = self.obj[key][i][start:end]
            else:
                out[key] = self.obj[key][i]

        return out

    @TimeableMixin.TimeAs
    def collate(self, batch: list[dict]) -> dict:
        out = {k: [e[k] for e in batch] for k in self.obj.keys()}
        for key in self.static_keys:
            out[key] = torch.tensor(out[key])
        for key in self.dynamic_keys:
            try:
                out[key] = ragged_to_dense(out[key])
            except ValueError as e:
                raise ValueError(f"Failed to convert {key} to dense:\n{out[key]}") from e
        return out
