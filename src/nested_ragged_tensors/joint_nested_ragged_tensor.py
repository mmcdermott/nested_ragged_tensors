from __future__ import annotations

import itertools
from collections.abc import Generator, Sequence
from pathlib import Path
from abc import ABC, abstractmethod

import numpy as np
from safetensors.numpy import load_file, save_file
from typing import TypeVar

from .utils import get_ragged_indices, is_ndim_list
from .ragged_base import RaggedTensorBase, TENSOR_T, NESTED_NUM_LIST_T

class JointNestedRaggedTensorBaseDict(ABC, Generic[TENSOR_T]):
    """
    Stores tensors internally in the following dictionary structure:
    {
        "dim0/vals": {vals_tensor} # A true 1D tensor in raw tensor form. No associated lengths/bounds.
        "dim1/lengths": 1D_lengths, # lengths at the 1st dimensionality level
        "dim1/bounds": 1D_bounds,
        "dim1/{vals_key}": {vals_tensor}, # A variety of 2D ragged values tensors governed by the 1D lengths.
        "dim2/lengths": 2D_lengths, # lengths at the 2nd dimensionality level
        ...
    }
    """

    BASE_TENSOR_CLS = RaggedTensorBase

    SAVE_FN = None # Must be overwritten in derived class
    LOAD_FN = None # Must be overwritten in derived class

    def __init__(
        self,
        tensors: dict[str, NESTED_NUM_LIST_T | TENSOR_T],
        pre_raggedified: bool = False
    ):
        if pre_raggedified:
            self.tensors = tensors
        else:
            self._initialize_tensors(tensors)

    def __repr__(self) -> str:
        return f"{self.__clas__.__name__}({self.tensors}, pre_raggedified=True)"

    def __str__(self) -> str:
        return self.__repr__()

    def _initialize_tensors(self, tensors: dict[str, list[NESTED_NUM_LIST_T] | NESTED_NUM_LIST_T]):
        """Initializes the tensors from lists of raw data entries."""
        self.tensors = {}
        for k, T in tensors.items():
            if not isinstance(T[0], (list, tuple)):
                dim_str = "dim0"
                self.tensors[f"{dim_str}/{k}"] = np.array(T)
                continue

            try:
                ragged_T = cls.BASE_TENSOR_CLS.from_nested_list(T)
            except TypeError as e:
                raise ValueError(f"Failed to parse {k} as a nested list of numbers!") from e

            lengths, bounds, vals = ragged_T.lengths, ragged_T.bounds, ragged_T.vals

            for i, (L, B) in enumerate(zip(lengths, bounds)):
                dim_str = f"dim{i+1}"

                lengths_key = f"{dim_str}/lengths"
                if (
                    lengths_key in self.tensors
                    and not cls.BASE_TENSOR_CLS._tensor_eq(self.tensors[lengths_key], L)
                ):
                    raise ValueError(f"Inconsistent lengths tensors! {self.tensors[lengths_key]} vs. {L}")

                self.tensors[lengths_key] = np.array(L)

                bounds_key = f"{dim_str}/bounds"
                if (
                    bounds_key in self.tensors
                    and not cls.BASE_TENSOR_CLS._tensor_eq(self.tensors[bounds_key], L)
                ):
                    raise ValueError(f"Inconsistent bounds tensors! {self.tensors[bounds_key]} vs. {L}")

                self.tensors[bounds_key] = np.array(B)

            self.tensors[f"dim{ragged_T.n_dims - 1}/{k}"] = vals

    def save(self, fp: Path):
        """Saves the tensor to a file. See `JointNestedRagggedTensorDict.load` for examples.

        Args:
            fp: The path to which the tensors will be saved.
        """
        self.SAVE_FN(self.tensors, fp)

    @classmethod
    def load(cls, fp: Path) -> JointNestedRaggedTensorBaseDict:
        """Loads the tensors saved at the given filepath. Does not validate tensor structure.

        Args:
            The path from which to load
        """
        return cls(cls.LOAD_FN(fp), pre_raggedified=True)

    @property
    def max_n_dims(self) -> int:
        """Returns the maximum number of dimensions of any tensor in the dictionary."""
        return max(int(k.split("/")[0][3:]) for k in self.tensors.keys()) + 1

    @property
    def min_n_dims(self) -> int:
        """Returns the maximum number of dimensions of any tensor in the dictionary."""
        return min(int(k.split("/")[0][3:]) for k in self.tensors.keys()) + 1

    def keys(self) -> set[str]:
        """Returns the set of all keys for the stored tensors."""
        return {
            k.split("/")[1]
            for k in self.tensors.keys()
            if not (k.endswith("lengths") or k.endswith("bounds"))
        }

    def _get_dim(self, key: str) -> int:
        """Gets the dimensionality associated with this key."""
        for k in self.tensors.keys():
            if k.endswith(f"/{key}"):
                return int(k.split("/")[0][3:])

        raise KeyError(f"Key {key} not found in {', '.join(self.tensors.keys())}")

    def _get_key(self, key: str) -> RaggedTensorBase | np.ndarray:
        """Returns a RaggedTensor corresponding to the given key. """
        dim = self._get_dim(key)

        if dim == 0:
            # This is a naturally 1D tensor so we return it directly.
            return self.tensors[f"dim0/{key}"]
        else:
            lengths = [self.tensors[f"dim{i}/lengths"] for i in range(1, dim + 1)]
            bounds = [self.tensors[f"dim{i}/bounds"] for i in range(1, dim + 1)]
            vals = self.tensors[f"dim{dim}/{key}"]
            return BASE_TENSOR_CLS(lengths, bounds, vals)

    def keys_at_dim(self, dim: int) -> set[str]:
        """Returns the keys for tensors that are at that dimensionality.

        Examples:
            >>> J = JointNestedRaggedTensorDict({
            ...     "T":   [[1,           2,        3       ], [4,   5          ]],
            ...     "id":  [[[1, 2,   3], [3,   4], [1, 2  ]], [[3], [3,   2, 2]]],
            ...     "val": [[[1, 0.2, 0], [3.1, 0], [1, 2.2]], [[3], [3.3, 2, 0]]],
            ... })
            >>> assert J.keys_at_dim(1) == {'T'}
            >>> assert J.keys_at_dim(2) == {'id', 'val'}
            >>> J.keys_at_dim(0)
            set()
        """
        return {k for k in self.keys() if self._get_dim(k) == dim}

    def __getitem__(self, idx: str | int | slice):
        """Returns either a slice of the tensors in this collection or the tensor at the given key.

        Args:
            idx: The index at which to slice. If a string, returns the (ragged) tensor at that key. If an int
                or a slice, slices the tensors in this collection accordingly and returns a new collection.
        """
        match idx:
            case str() as key:
                return self._get_key(key)
            case int() as i:
                if self.min_n_dims == 1:
                    raise ValueError(
                        "Cannot index into a tensor collection with a 1D tensor with an integer."
                    )

                with_dim = self[slice(i, i + 1)]
                out_tensors = {}
                for k, T in with_dim.tensors.items():
                    dim, key = k.split("/")
                    dim_int = int(dim[3:])

                    if dim_int == 1 and key in ("lengths", "bounds"):
                        # These keys will be dropped as this tensor will become a 1D tensor in truth.
                        continue

                    new_key = f"dim{dim_int - 1}/{key}"
                    out_tensors[new_key] = T

                return JointNestedRaggedTensorDict(out_tensors, pre_raggedified=True)
            case slice() as S:
                st_i = 0 if S.start is None else S.start
                end_i = S.stop

                if S.step not in (None, 1):
                    raise ValueError("Only slices with step size of None or 1 are supported; got {S.step}")

                out_tensors = {}
                for dim in range(self.max_n_dims):
                    if dim != 0:
                        L = self.tensors[f"dim{dim}/lengths"]
                        B = self.tensors[f"dim{dim}/bounds"]

                        if st_i == 0:
                            offset = 0
                        else:
                            offset = B[st_i - 1]

                        out_tensors[f"dim{dim}/lengths"] = L[st_i:end_i]
                        out_tensors[f"dim{dim}/bounds"] = B[st_i:end_i] - offset

                        st_i = 0 if st_i == 0 else B[st_i - 1]
                        end_i = B[end_i - 1] if end_i is not None else B[-1]

                    for key in self.keys_at_dim(dim):
                        out_tensors[f"dim{dim}/{key}"] = self.tensors[f"dim{dim}/{key}"][st_i:end_i]

                return JointNestedRaggedTensorBaseDict(out_tensors, pre_raggedified=True)
            case _:
                raise TypeError(f"{type(idx)} not supported for JointNestedRaggedTensorBaseDict.__getitem__")

    def to_dense(self) -> dict[str, np.array]:
        """Returns a dense view of these ragged tensors. """
        out = {}

        shape = [len(self)]
        indices = [(i,) for i in range(len(self))]

        for dim in range(self.max_n_dims):
            if dim == 0:
                for key in self.keys_at_dim(dim):
                    out[key] = self.tensors[f"dim{dim}/{key}"]
                continue

            L = self.tensors[f"dim{dim}/lengths"]
            B = np.concatenate(([0], self.tensors[f"dim{dim}/bounds"]), 0)

            shape.append(max(L))

            for key in self.keys_at_dim(dim):
                vals = self.tensors[f"dim{dim}/{key}"]
                slice_vals = (vals[b:e] for b, e in zip(B[:-1], B[1:]))

                out[key] = np.zeros(shape=tuple(shape), dtype=vals.dtype)
                for sl, ln, vs in zip(indices, L, slice_vals):
                    out[key][sl + (slice(None, ln),)] = vs

            indices = list(
                itertools.chain.from_iterable(
                    (base_idx + (j,) for j in range(ln)) for base_idx, ln in zip(indices, L)
                )
            )

        return out

    def unsqueeze(self, dim: int) -> JointNestedRaggedTensorBaseDict:
        """Expands these tensors to have a new, singleton first dimension.

        Args:
            dim: This is added for compatibility with the PyTorch signature, but must be 0 here.

        Raises:
            ValueError: If dim != 0 or if the tensors are exclusively non-ragged 1D tensors.
        """
        if dim != 0:
            raise ValueError(f"Only supports dim = 0 for now; got {dim}")
        if self.max_n_dims == 1:
            raise ValueError("Only supports max n_dims > 1 for now.")

        out_tensors = {}

        for dim in range(self.max_n_dims):
            new_dim = dim + 1
            if dim == 0:
                lengths = self.BASE_TENSOR_CLS._tensor([len(self.tensors["dim1/lengths"])])
                bounds = self.BASE_TENSOR_CLS._tensor([len(self.tensors["dim1/lengths"])])
            else:
                lengths = self.tensors[f"dim{dim}/lengths"]
                bounds = self.tensors[f"dim{dim}/bounds"]

            out_tensors[f"dim{new_dim}/lengths"] = lengths
            out_tensors[f"dim{new_dim}/bounds"] = bounds

            for key in self.keys_at_dim(dim):
                out_tensors[f"dim{new_dim}/{key}"] = self.tensors[f"dim{dim}/{key}"]
        return self.__class__(out_tensors, pre_raggedified=True)

    @property
    def shape(self) -> dict[str, int]:
        """Returns a dictionary from the stored keys to the dense shapes those tensors would take."""
        return {k: self._get_key(k).shape for k in self.keys()}

    def __len__(self) -> int:
        """Returns the length (which is shared across all keys) of these tensors."""
        return len(self.tensors["dim1/lengths"])

    @classmethod
    def vstack(cls, tensor_dicts: list) -> JointNestedRaggedTensorBaseDict:
        """Vertically stacks the passed tensors into a new collection on an added 1st dim."""
        return cls.concatenate([T.unsqueeze(0) for T in tensor_dicts])

    @classmethod
    def concatenate(cls, tensors: list) -> JointNestedRaggedTensorBaseDict:
        """Concatenates these tensors with other identically keyed tensors along the existing first dim."""

        if len(tensors) == 1:
            return tensors[0]
        elif len(tensors) == 0:
            raise ValueError("Can't concatenate an empty list!")

        T1 = tensors[0]
        T2 = cls.concatenate(tensors[1:])

        if T1.keys() != T2.keys():
            raise ValueError(f"Keys inconsistent! {T1.keys()} != {T2.keys()}")

        if T1.max_n_dims != T2.max_n_dims:
            raise ValueError(f"Max dims inconsistent! {T1.max_n_dims} != {T2.max_n_dims}")

        out_tensors = {}

        for dim in range(T1.max_n_dims):
            if T1.keys_at_dim(dim) != T2.keys_at_dim(dim):
                raise ValueError(
                    f"Keys inconsistent @ dim {dim}! {T1.keys_at_dim(dim)} != {T2.keys_at_dim(dim)}"
                )

            if dim != 0:
                # Here we need to handle lengths and bounds and such as well
                lengths_key = f"dim{dim}/lengths"
                bounds_key = f"dim{dim}/bounds"

                out_tensors[lengths_key] = T1.BASE_TENSOR_CLS._tensor_0dim_concatenate(
                    (T1.tensors[lengths_key], T2.tensors[lengths_key])
                )
                out_tensors[bounds_key] = T1.BASE_TENSOR_CLS._tensor_0dim_concatenate(
                    (T1.tensors[bounds_key], T2.tensors[bounds_key] + T1.tensors[bounds_key][-1])
                )

            for key in T1.keys_at_dim(dim):
                out_tensors[f"dim{dim}/{key}"] = T1.BASE_TENSOR_CLS._tensor_0dim_concatenate(
                    (T1.tensors[f"dim{dim}/{key}"], T2.tensors[f"dim{dim}/{key}"])
                )
        return cls(out_tensors, pre_raggedified=True)
