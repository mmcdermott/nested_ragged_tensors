import itertools
from collections.abc import Generator
from pathlib import Path

import numpy as np
from safetensors.numpy import load_file, save_file

from .utils import get_ragged_indices, is_ndim_list

NUM_T = int | float
NESTED_NUM_LIST = list["NESTED_NUM_LIST"] | NUM_T

class JointNestedRaggedTensorDict:
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

    @classmethod
    def _get_lengths_and_values(
        cls, T: NESTED_NUM_LIST, curr_lengths: list[list[int]] = None
    ) -> tuple[list[list[int]], list]:
        """Returns the lengths, bounds, and values of a nested list as flat, 1D tensors.

        Args:
            T: A nested list of values.
            curr_lengths: The running lengths of the nested list being constructed through recursion.
            curr_bound_diffs: The running bound differences of the nested list being constructed through
                recursion.

        Examples:
            >>> JointNestedRaggedTensorDict._get_lengths_and_values([1, 2, 3])
            ([], [1, 2, 3])
            >>> JointNestedRaggedTensorDict._get_lengths_and_values([[1, 2, 3], [3, 4]])
            ([[3, 2]], [1, 2, 3, 3, 4])
            >>> JointNestedRaggedTensorDict._get_lengths_and_values(
            ...     [[[1, 2, 3], [3, 4]], [[3], [3, 2, 2], [3, 5]]]
            ... )
            ([[2, 3], [3, 2, 1, 3, 2]], [1, 2, 3, 3, 4, 3, 3, 2, 2, 3, 5])
        """
        if curr_lengths is None:
            curr_lengths = []

        match T:
            case list() if is_ndim_list(T, dim=1):
                return curr_lengths, T
            case list() as Ts:
                return cls._get_lengths_and_values(
                    list(itertools.chain.from_iterable(Ts)), curr_lengths + [[len(T) for T in Ts]]
                )
            case _:
                raise TypeError(
                    f"T must be list of numbers or a nested list of lists. Got {type(T)}[{type(T[0])}]"
                )

    def __init__(
        self, tensors: dict[str, list[NESTED_NUM_LIST] | NESTED_NUM_LIST], pre_raggedified: bool = False
    ):
        if pre_raggedified:
            self.tensors = tensors
        else:
            self._initialize_tensors(tensors)

    def __repr__(self) -> str:
        return f"JointNestedRaggedTensorDict({self.tensors}, pre_raggedified=True)"

    def __str__(self) -> str:
        return self.__repr__()

    def _initialize_tensors(self, tensors: dict[str, list[NESTED_NUM_LIST] | NESTED_NUM_LIST]):
        """Initializes the tensors from lists of raw data entries."""
        self.tensors = {}
        for k, T in tensors.items():
            if not isinstance(T[0], (list, tuple)):
                dim_str = "dim0"
                self.tensors[f"{dim_str}/{k}"] = np.array(T)
                continue

            try:
                lengths, vals = self._get_lengths_and_values(T)
                lengths = [np.array(L, dtype=int) for L in lengths]
                vals = np.array(vals)
            except TypeError as e:
                raise ValueError(f"Failed to parse {k} as a nested list of numbers!") from e

            dim_str = f"dim0"
            for i, L in enumerate(lengths):
                dim_str = f"dim{i+1}"

                lengths_key = f"{dim_str}/lengths"
                if lengths_key in self.tensors:
                    if not np.array_equal(self.tensors[lengths_key], L):
                        raise ValueError(f"Inconsistent lengths tensors! {self.tensors[lengths_key]} vs. {L}")
                else:
                    self.tensors[lengths_key] = np.array(L)
                    self.tensors[f"{dim_str}/bounds"] = np.cumsum(L, axis=0)

            self.tensors[f"{dim_str}/{k}"] = vals

    def save(self, fp: Path):
        """Saves the tensor to a file. See `JointNestedRagggedTensorDict.load` for examples.

        Args:
            fp: The path to which the tensors will be saved.
        """
        save_file(self.tensors, fp)

    @classmethod
    def load(cls, fp: Path) -> "JointNestedRaggedTensorDict":
        """Loads the tensors saved at the given filepath. Does not validate tensor structure.

        Args:
            The path from which to load

        TODO(mmd): Look into using `safetensors.safe_open`

        Examples:
            >>> import tempfile
            >>> J = JointNestedRaggedTensorDict({
            ...     "T":   [[1,           2,        3       ], [4,   5          ]],
            ...     "id":  [[[1, 2,   3], [3,   4], [1, 2  ]], [[3], [3,   2, 2]]],
            ...     "val": [[[1, 0.2, 0], [3.1, 0], [1, 2.2]], [[3], [3.3, 2, 0]]],
            ... })
            >>> with tempfile.TemporaryDirectory() as dirpath:
            ...     fp = Path(dirpath) / "tensors.pt"
            ...     J.save(fp)
            ...     J2 = JointNestedRaggedTensorDict.load(fp)
            >>> assert J.keys() == J2.keys()
            >>> J = J.to_dense()
            >>> J2 = J2.to_dense()
            >>> for k in J.keys(): assert (J[k] == J2[k]).all()
        """
        return cls(load_file(fp), pre_raggedified=True)

    @property
    def max_n_dims(self) -> int:
        """Returns the maximum number of dimensions of any tensor in the dictionary.

        Examples:
            >>> J = JointNestedRaggedTensorDict({
            ...     "T":   [[1,           2,        3       ], [4,   5          ]],
            ...     "id":  [[[1, 2,   3], [3,   4], [1, 2  ]], [[3], [3,   2, 2]]],
            ...     "val": [[[1, 0.2, 0], [3.1, 0], [1, 2.2]], [[3], [3.3, 2, 0]]],
            ... })
            >>> J.max_n_dims
            3
        """
        return max(int(k.split("/")[0][3:]) for k in self.tensors.keys()) + 1

    @property
    def min_n_dims(self) -> int:
        """Returns the maximum number of dimensions of any tensor in the dictionary.

        Examples:
            >>> J = JointNestedRaggedTensorDict({
            ...     "T":   [[1,           2,        3       ], [4,   5          ]],
            ...     "id":  [[[1, 2,   3], [3,   4], [1, 2  ]], [[3], [3,   2, 2]]],
            ...     "val": [[[1, 0.2, 0], [3.1, 0], [1, 2.2]], [[3], [3.3, 2, 0]]],
            ... })
            >>> J.min_n_dims
            2
        """
        return min(int(k.split("/")[0][3:]) for k in self.tensors.keys()) + 1

    def keys(self) -> set[str]:
        """Returns the set of all keys for the stored tensors.

        Examples:
            >>> J = JointNestedRaggedTensorDict({
            ...     "T":   [[1,           2,        3       ], [4,   5          ]],
            ...     "id":  [[[1, 2,   3], [3,   4], [1, 2  ]], [[3], [3,   2, 2]]],
            ...     "val": [[[1, 0.2, 0], [3.1, 0], [1, 2.2]], [[3], [3.3, 2, 0]]],
            ... })
            >>> assert J.keys() == {'id', 'T', 'val'}
        """
        return {
            k.split("/")[1]
            for k in self.tensors.keys()
            if not (k.endswith("lengths") or k.endswith("bounds"))
        }

    def _get_dim(self, key: str) -> int:
        """Gets the dimensionality associated with this key.

        Examples:
            >>> J = JointNestedRaggedTensorDict({
            ...     "T":   [[1,           2,        3       ], [4,   5          ]],
            ...     "id":  [[[1, 2,   3], [3,   4], [1, 2  ]], [[3], [3,   2, 2]]],
            ...     "val": [[[1, 0.2, 0], [3.1, 0], [1, 2.2]], [[3], [3.3, 2, 0]]],
            ... })
            >>> J._get_dim("T")
            1
            >>> J._get_dim("id")
            2
        """
        for k in self.tensors.keys():
            if k.endswith(f"/{key}"):
                return int(k.split("/")[0][3:])

        raise KeyError(f"Key {key} not found in {', '.join(self.tensors.keys())}")

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

        Examples:
            >>> J = JointNestedRaggedTensorDict({
            ...     "T":   [[1,           2,        3       ], [4,   5          ]],
            ...     "id":  [[[1, 2,   3], [3,   4], [1, 2  ]], [[3], [3,   2, 2]]],
            ...     "val": [[[1, 0.2, 0], [3.1, 0], [1, 2.2]], [[3], [3.3, 2, 0]]],
            ... })
            >>> as_dense = J[1].to_dense()
            >>> assert as_dense.keys() == {'T', 'id', 'val'}
            >>> as_dense['T']
            array([4, 5])
            >>> as_dense['id']
            array([[3, 0, 0],
                   [3, 2, 2]])
            >>> as_dense['val']
            array([[3. , 0. , 0. ],
                   [3.3, 2. , 0. ]])
            >>> as_dense = J[0].to_dense()
            >>> assert as_dense.keys() == {'T', 'id', 'val'}
            >>> as_dense['T']
            array([1, 2, 3])
            >>> as_dense['id']
            array([[1, 2, 3],
                   [3, 4, 0],
                   [1, 2, 0]])
            >>> as_dense['val']
            array([[1. , 0.2, 0. ],
                   [3.1, 0. , 0. ],
                   [1. , 2.2, 0. ]])
        """
        match idx:
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

                return JointNestedRaggedTensorDict(out_tensors, pre_raggedified=True)
            case _:
                raise TypeError(f"{type(idx)} not supported for {self.__class__.__name__}.__getitem__")

    def to_dense(self) -> dict[str, np.array]:
        """Returns a dense view of these ragged tensors.

        Examples:
            >>> J = JointNestedRaggedTensorDict({
            ...     "T": [[1, 2, 3], [4, 5]],
            ...     "id": [[[1, 2, 3], [3, 4], [1, 2]], [[3], [3, 2, 2]]],
            ...     "val": [[[1.0, 0.2, 0.], [3.1, 0.], [1., 2.2]], [[3], [3.3, 2., 0]]],
            ... })
            >>> dense_dict = J.to_dense()
            >>> assert dense_dict.keys() == {'T', 'id', 'val'}
            >>> dense_dict['T']
            array([[1, 2, 3],
                   [4, 5, 0]])
            >>> dense_dict['id']
            array([[[1, 2, 3],
                    [3, 4, 0],
                    [1, 2, 0]],
            <BLANKLINE>
                   [[3, 0, 0],
                    [3, 2, 2],
                    [0, 0, 0]]])
            >>> dense_dict['val']
            array([[[1. , 0.2, 0. ],
                    [3.1, 0. , 0. ],
                    [1. , 2.2, 0. ]],
            <BLANKLINE>
                   [[3. , 0. , 0. ],
                    [3.3, 2. , 0. ],
                    [0. , 0. , 0. ]]])
        """
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

    def unsqueeze(self, dim: int) -> "JointNestedRaggedTensorDict":
        """Expands these tensors to have a new, singleton first dimension.

        Args:
            dim: This is added for compatibility with the PyTorch signature, but must be 0 here.

        Raises:
            ValueError: If dim != 0 or if the tensors are exclusively non-ragged 1D tensors.

        Examples:
            >>> J = JointNestedRaggedTensorDict({
            ...     "T": [[1, 2, 3], [4, 5]],
            ...     "id": [[[1, 2, 3], [3, 4], [1, 2]], [[3], [3, 2, 2]]],
            ...     "val": [[[1.0, 0.2, 0.], [3.1, 0.], [1., 2.2]], [[3], [3.3, 2., 0]]],
            ... })
            >>> dense_dict = J.unsqueeze(dim=0).to_dense()
            >>> assert dense_dict.keys() == {'T', 'id', 'val'}
            >>> dense_dict['T']
            array([[[1, 2, 3],
                    [4, 5, 0]]])
            >>> dense_dict['id']
            array([[[[1, 2, 3],
                     [3, 4, 0],
                     [1, 2, 0]],
            <BLANKLINE>
                    [[3, 0, 0],
                     [3, 2, 2],
                     [0, 0, 0]]]])
            >>> dense_dict['val']
            array([[[[1. , 0.2, 0. ],
                     [3.1, 0. , 0. ],
                     [1. , 2.2, 0. ]],
            <BLANKLINE>
                    [[3. , 0. , 0. ],
                     [3.3, 2. , 0. ],
                     [0. , 0. , 0. ]]]])
        """
        if dim != 0:
            raise ValueError(f"Only supports dim = 0 for now; got {dim}")
        if self.max_n_dims == 1:
            raise ValueError("Only supports max n_dims > 1 for now.")

        out_tensors = {}

        for dim in range(self.max_n_dims):
            new_dim = dim + 1
            if dim == 0:
                lengths = np.array([len(self.tensors["dim1/lengths"])])
                bounds = np.array([len(self.tensors["dim1/lengths"])])
            else:
                lengths = self.tensors[f"dim{dim}/lengths"]
                bounds = self.tensors[f"dim{dim}/bounds"]

            out_tensors[f"dim{new_dim}/lengths"] = lengths
            out_tensors[f"dim{new_dim}/bounds"] = bounds

            for key in self.keys_at_dim(dim):
                out_tensors[f"dim{new_dim}/{key}"] = self.tensors[f"dim{dim}/{key}"]
        return self.__class__(out_tensors, pre_raggedified=True)

    def __len__(self) -> int:
        """Returns the length (which is shared across all keys) of these tensors.

        Examples:
            >>> J = JointNestedRaggedTensorDict({
            ...     "T": [[1, 2, 3], [4, 5]],
            ...     "id": [[[1, 2, 3], [3, 4], [1, 2]], [[3], [3, 2, 2]]],
            ...     "val": [[[1.0, 0.2, 0.], [3.1, 0.], [1., 2.2]], [[3], [3.3, 2., 0]]],
            ... })
            >>> len(J)
            2
        """
        return len(self.tensors["dim1/lengths"])

    @classmethod
    def vstack(cls, tensor_dicts: list) -> "JointNestedRaggedTensorDict":
        """Vertically stacks the passed tensors into a new collection on an added 1st dim.

        Examples:
            >>> J = JointNestedRaggedTensorDict({
            ...     "T": [[1, 2, 3], [4, 5]],
            ...     "id": [[[1, 2, 3], [3, 4], [1, 2]], [[3], [3, 2, 2]]],
            ...     "val": [[[1.0, 0.2, 0.], [3.1, 0.], [1., 2.2]], [[3], [3.3, 2., 0]]],
            ... })
            >>> stacked = JointNestedRaggedTensorDict.vstack([J[0], J[1]])
            >>> dense_dict = stacked.to_dense()
            >>> assert dense_dict.keys() == {'T', 'id', 'val'}
            >>> dense_dict['T']
            array([[1, 2, 3],
                   [4, 5, 0]])
            >>> dense_dict['id']
            array([[[1, 2, 3],
                    [3, 4, 0],
                    [1, 2, 0]],
            <BLANKLINE>
                   [[3, 0, 0],
                    [3, 2, 2],
                    [0, 0, 0]]])
            >>> dense_dict['val']
            array([[[1. , 0.2, 0. ],
                    [3.1, 0. , 0. ],
                    [1. , 2.2, 0. ]],
            <BLANKLINE>
                   [[3. , 0. , 0. ],
                    [3.3, 2. , 0. ],
                    [0. , 0. , 0. ]]])
        """
        return cls.concatenate([T.unsqueeze(0) for T in tensor_dicts])

    @classmethod
    def concatenate(cls, tensors: list) -> "JointNestedRaggedTensorDict":
        """Concatenates these tensors with other identically keyed tensors along the existing first dim.

        Args:
            tensors: The tensors to concatenate.

        Examples:
            >>> J1 = JointNestedRaggedTensorDict({
            ...     "T": [[1, 2, 3], [4, 5]],
            ...     "id": [[[1, 2, 3], [3, 4], [1, 2]], [[3], [3, 2, 2]]],
            ...     "val": [[[1.0, 0.2, 0.], [3.1, 0.], [1., 2.2]], [[3], [3.3, 2., 0]]],
            ... })
            >>> J2 = JointNestedRaggedTensorDict({
            ...     "T": [[6, 7, 8, 9]],
            ...     "id": [[[3], [3, 2, 2], [1], [1]]],
            ...     "val": [[[3], [4., 2., 0], [0], [3.]]],
            ... })
            >>> concatenated = JointNestedRaggedTensorDict.concatenate([J1, J2])
            >>> dense_dict = concatenated.to_dense()
            >>> assert dense_dict.keys() == {'T', 'id', 'val'}
            >>> dense_dict['T']
            array([[1, 2, 3, 0],
                   [4, 5, 0, 0],
                   [6, 7, 8, 9]])
            >>> dense_dict['id']
            array([[[1, 2, 3],
                    [3, 4, 0],
                    [1, 2, 0],
                    [0, 0, 0]],
            <BLANKLINE>
                   [[3, 0, 0],
                    [3, 2, 2],
                    [0, 0, 0],
                    [0, 0, 0]],
            <BLANKLINE>
                   [[3, 0, 0],
                    [3, 2, 2],
                    [1, 0, 0],
                    [1, 0, 0]]])
            >>> dense_dict['val']
            array([[[1. , 0.2, 0. ],
                    [3.1, 0. , 0. ],
                    [1. , 2.2, 0. ],
                    [0. , 0. , 0. ]],
            <BLANKLINE>
                   [[3. , 0. , 0. ],
                    [3.3, 2. , 0. ],
                    [0. , 0. , 0. ],
                    [0. , 0. , 0. ]],
            <BLANKLINE>
                   [[3. , 0. , 0. ],
                    [4. , 2. , 0. ],
                    [0. , 0. , 0. ],
                    [3. , 0. , 0. ]]])
        """

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

                out_tensors[lengths_key] = np.concatenate((T1.tensors[lengths_key], T2.tensors[lengths_key]))
                out_tensors[bounds_key] = np.concatenate(
                    (T1.tensors[bounds_key], T2.tensors[bounds_key] + T1.tensors[bounds_key][-1])
                )

            for key in T1.keys_at_dim(dim):
                out_tensors[f"dim{dim}/{key}"] = np.concatenate(
                    (T1.tensors[f"dim{dim}/{key}"], T2.tensors[f"dim{dim}/{key}"])
                )
        return cls(out_tensors, pre_raggedified=True)
