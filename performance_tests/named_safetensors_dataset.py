import numpy as np
import torch
from mixins import TimeableMixin
from safetensors.numpy import load_file, save_file
from torch.utils.data import Dataset

from performance_tests.utils import ragged_to_dense


class NamedSafetensorsDataset(Dataset, TimeableMixin):
    def __init__(self, obj, bounds, is_dict: bool = False):
        super().__init__()
        if not is_dict:
            obj = self.lists_to_dict(obj)

        self.N = 0
        self._keys = set()
        for k in obj.keys():
            if "/" not in k:
                self._keys.add(k)
                continue
            i = int(k.split("/")[1])
            self.N = max(self.N, i + 1)

            key = k.split("/")[0]
            self._keys.add(key)

        self.obj = obj
        self.bounds = bounds
        self.dynamic_keys = {"dim_1", "dim_2_1", "dim_2_2"}
        self.static_keys = self._keys - self.dynamic_keys

    @classmethod
    def lists_to_dict(cls, lists: dict[str, list]) -> dict[str, np.ndarray]:
        out = {}
        for key, L in lists.items():
            if type(L[0]) is list or isinstance(L[0], np.ndarray):
                D = cls.lists_to_dict({f"{key}/{i}": L2 for i, L2 in enumerate(L)})
                out.update(D)
            else:
                out[key] = np.array(L)
        return out

    @classmethod
    def read(cls, path, bounds):
        obj = load_file(path)
        return cls(obj, bounds, is_dict=True)

    def write(self, path):
        save_file(self.obj, path)

    def __len__(self) -> int:
        return self.N

    @TimeableMixin.TimeAs
    def __getitem__(self, i):
        out = {}
        start, end = self.bounds[i]
        for key in self._keys:
            if key.startswith("dim_2"):
                out[key] = [self.obj[f"{key}/{i}/{j}"] for j in range(start, end)]
            elif key.startswith("dim_1"):
                out[key] = self.obj[f"{key}/{i}"][start:end]
            else:
                out[key] = self.obj[f"{key}"][i]

        return out

    @TimeableMixin.TimeAs
    def collate(self, batch: list[dict]) -> dict:
        out = {k: [e[k] for e in batch] for k in self._keys}
        for key in self.static_keys:
            out[key] = torch.tensor(out[key])
        for key in self.dynamic_keys:
            out[key] = ragged_to_dense(out[key])
        return out
