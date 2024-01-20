import torch
from mixins import TimeableMixin
from torch.utils.data import Dataset

from nested_ragged_tensors.ragged_numpy import JointNestedRaggedTensorDict


class NRTDataset(Dataset, TimeableMixin):
    def __init__(self, obj, bounds, is_converted: bool = False):
        super().__init__()
        if not is_converted:
            obj = JointNestedRaggedTensorDict(obj, schema={k: int for k in obj.keys()})
        self.obj = obj
        self.bounds = bounds
        self.dynamic_keys = {"dim_1", "dim_2_1", "dim_2_2"}
        self.static_keys = set(obj.keys()) - self.dynamic_keys

    @classmethod
    def read(cls, path, bounds):
        obj = JointNestedRaggedTensorDict.load(path)
        return cls(obj, bounds, is_converted=True)

    def write(self, path):
        self.obj.save(path)

    def __len__(self) -> int:
        return len(self.obj)

    @TimeableMixin.TimeAs
    def __getitem__(self, i):
        start, end = self.bounds[i]
        return self.obj[i][start:end]

    @TimeableMixin.TimeAs
    def collate(self, batch: list[dict]) -> dict:
        return {k: torch.tensor(v) for k, v in JointNestedRaggedTensorDict.vstack(batch).to_dense().items()}
