import torch
from mixins import TimeableMixin
from torch.utils.data import Dataset
from torch.utils.data._utils.collate import default_collate

from performance_tests.utils import ragged_to_dense


class DenseDataset(Dataset, TimeableMixin):
    def __init__(self, obj, bounds, is_dense: bool = False):
        super().__init__()
        if not is_dense:
            obj = {k: ragged_to_dense(v) for k, v in obj.items()}
        self.obj = obj
        self.bounds = bounds
        self.max_seq_len = max(end - start for start, end in bounds)
        self.dynamic_keys = {"dim_1", "dim_2_1", "dim_2_2"}
        self.static_keys = set(obj.keys()) - self.dynamic_keys

    @classmethod
    def read(cls, path, bounds):
        obj = torch.load(path)
        return cls(obj, bounds, is_dense=True)

    def write(self, path):
        torch.save(self.obj, path)

    def __len__(self) -> int:
        return len(list(self.obj.values())[0])

    @TimeableMixin.TimeAs
    def __getitem__(self, i):
        out = {}
        start, end = self.bounds[i]
        for key in self.obj.keys():
            if key in self.dynamic_keys:
                out[key] = self.obj[key][i, start : (start + self.max_seq_len)]
            else:
                out[key] = self.obj[key][i]

        return out

    @TimeableMixin.TimeAs
    def collate(self, batch: list[dict]) -> dict:
        try:
            return default_collate(batch)
        except RuntimeError as e:
            raise RuntimeError(f"Failed to collate batch: {batch}") from e
