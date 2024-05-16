from __future__ import annotations

import itertools
from collections import defaultdict
from collections.abc import Sequence
from pathlib import Path

import numpy as np
from safetensors import safe_open
from safetensors.numpy import load_file, save_file

NP_FLOAT_TYPES = (np.float16, np.float32, np.float64)
NP_INT_TYPES = (np.int8, np.int16, np.int32, np.int64)
NP_UINT_TYPES = (np.uint8, np.uint16, np.uint32, np.uint64)

NUM_T = int | float
NESTED_NUM_LIST = list["NESTED_NUM_LIST"] | NUM_T


def is_ndim_list(L: Sequence | Sequence[int | float], dim: int = 1) -> bool:
    """Checks if ``L`` is a nested list of ``dim`` dimensions.

    Args:
        L: The list to be checked.
        dim: The target dimension of the list.

    Examples:
        >>> is_ndim_list([1, 2, 3], dim=1)
        True
        >>> is_ndim_list([[1, 2], [4]], dim=2)
        True
        >>> is_ndim_list([[1, 2], [4]], dim=1)
        False
        >>> is_ndim_list([[[1, 2], [4]], [np.array([1, 2, 3])]], dim=3)
        True
        >>> is_ndim_list([[[1, 2], np.array([4])]], dim=0)
        Traceback (most recent call last):
            ...
        ValueError: dim must be positive, but got 0
    """

    if dim <= 0:
        raise ValueError(f"dim must be positive, but got {dim}")

    match L:
        case np.ndarray():
            return L.ndim == dim
        case list() if dim == 1:
            return all(isinstance(x, (int, float)) for x in L)
        case list():
            return all(is_ndim_list(x, dim - 1) for x in L)
        case _:
            return False


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

    def __init__(
        self,
        tensors: dict[str, list[NESTED_NUM_LIST] | NESTED_NUM_LIST],
        schema: dict[str, np.dtype] | None = None,
        pre_raggedified: bool = False,
    ):
        self.schema = schema if schema is not None else {}
        if pre_raggedified:
            self.tensors = tensors
        else:
            self._initialize_tensors(tensors)

    def __repr__(self) -> str:
        return f"JointNestedRaggedTensorDict({self.tensors}, schema={self.schema}, pre_raggedified=True)"

    def __str__(self) -> str:
        return self.__repr__()

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
            (None, [1, 2, 3])
            >>> JointNestedRaggedTensorDict._get_lengths_and_values([[1, 2, 3], [3, 4]])
            ([[3, 2]], [[1, 2, 3], [3, 4]])
            >>> JointNestedRaggedTensorDict._get_lengths_and_values(
            ...     [[[1, 2, 3], [3, 4]], [[3], [3, 2, 2], [3, 5]]]
            ... )
            ([[2, 3], [3, 2, 1, 3, 2]], [[1, 2, 3], [3, 4], [3], [3, 2, 2], [3, 5]])
        """
        if curr_lengths is None:
            curr_lengths = []

        match T:
            case list() as Ts if is_ndim_list(Ts, dim=2):
                return curr_lengths + [[len(T) for T in Ts]], Ts
            case list() if is_ndim_list(T, dim=1):
                return None, T
            case list() as Ts:
                return cls._get_lengths_and_values(
                    list(itertools.chain.from_iterable(Ts)), curr_lengths + [[len(T) for T in Ts]]
                )
            case _:
                raise TypeError(
                    f"T must be list of numbers or a nested list of lists. Got {type(T)}[{type(T[0])}]"
                )

    @classmethod
    def _infer_dtype(cls, vals: Sequence[NUM_T]) -> np.dtype:
        mx, mn = max(vals), min(vals)

        if any(isinstance(v, (float,) + NP_FLOAT_TYPES) for v in vals):
            valid_Ts = [np.float32]  # We only support 32-bit floats at the moment to avoid loss of precision.
            tinfo_fn = np.finfo
        elif all(isinstance(v, (int,) + NP_INT_TYPES + NP_UINT_TYPES) for v in vals):
            tinfo_fn = np.iinfo
            if mn >= 0:
                valid_Ts = NP_UINT_TYPES
            else:
                valid_Ts = NP_INT_TYPES
        else:
            raise ValueError("Vals are neither all floats or all ints")

        for t in valid_Ts:
            if mx > tinfo_fn(t).max or mn < tinfo_fn(t).min:
                continue
            else:
                return t
        raise ValueError(f"No valid type available for {mn}-{mx}!")

    def _initialize_tensors(self, tensors: dict[str, list[NESTED_NUM_LIST] | NESTED_NUM_LIST]):
        """Initializes the tensors from lists of raw data entries."""
        self.tensors = {}
        for k, T in tensors.items():
            if not isinstance(T[0], (list, tuple, np.ndarray)):
                dim_str = "dim0"
                if k not in self.schema:
                    self.schema[k] = self._infer_dtype(T)
                self.tensors[f"{dim_str}/{k}"] = np.array(T, dtype=self.schema[k])
                continue

            try:
                lengths, vals = self._get_lengths_and_values(T)
                lengths = [np.array(L, dtype=int) for L in lengths]
            except TypeError as e:
                raise ValueError(f"Failed to parse {k} as a nested list of numbers!") from e

            if k not in self.schema:
                self.schema[k] = self._infer_dtype(list(itertools.chain.from_iterable(vals)))

            vals = [np.array(v, dtype=self.schema[k]) for v in vals]

            dim_str = "dim0"
            for i, L in enumerate(lengths):
                dim_str = f"dim{i+1}"

                lengths_key = f"{dim_str}/lengths"
                if lengths_key in self.tensors:
                    if not np.array_equal(self.tensors[lengths_key], L):
                        raise ValueError(f"Inconsistent lengths tensors! {self.tensors[lengths_key]} vs. {L}")
                else:
                    self.tensors[lengths_key] = L
                    self.tensors[f"{dim_str}/bounds"] = np.cumsum(L, axis=0)

            self.tensors[f"{dim_str}/{k}"] = vals

    def save(self, fp: Path):
        """Saves the tensor to a file. See `JointNestedRagggedTensorDict.load` for examples.

        Args:
            fp: The path to which the tensors will be saved.
        """
        save_file(self._tensors_with_flat_values, fp)

    @property
    def _tensors_with_flat_values(self) -> dict[str, np.ndarray]:
        """Returns the tensors with flat values."""
        return {k: v if isinstance(v, np.ndarray) else np.concatenate(v, 0) for k, v in self.tensors.items()}

    @classmethod
    def load(cls, fp: Path) -> JointNestedRaggedTensorDict:
        """Loads the tensors saved at the given filepath. Does not validate tensor structure.

        Note ``load_slice`` for a more efficient alternative if you only want to access part of the tensor
        dictionary.

        Args:
            The path from which to load

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
            >>> for k, v in J.tensors.items():
            ...     if k.endswith("/lengths") or k.endswith("/bounds"):
            ...         assert (J.tensors[k] == J2.tensors[k]).all(), f"Tensors at {k} unequal!"
            ...     else:
            ...         assert len(J.tensors[k]) == len(J2.tensors[k]), f"Tensors at {k} unequal!"
            ...         for i, (v1, v2) in enumerate(zip(J.tensors[k], J2.tensors[k])):
            ...             assert (v1 == v2).all(), f"Tensors at {k}[{i}] unequal!"
        """
        flat_vals_tensors = load_file(fp)
        tensors = {}
        schema = {}
        for k, v in flat_vals_tensors.items():
            if cls._is_meta_key(k):
                tensors[k] = v
            else:
                schema[k] = v.dtype
                dim_str = k.split("/")[0]
                if dim_str == "dim0":
                    tensors[k] = v
                else:
                    bounds = flat_vals_tensors[f"{dim_str}/bounds"]
                    tensors[k] = np.split(v, bounds[:-1])

        return cls(tensors, schema=schema, pre_raggedified=True)

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
        return {k.split("/")[1] for k in self.tensors.keys() if not self._is_meta_key(k)}

    @classmethod
    def _is_meta_key(cls, k: str) -> bool:
        """Returns `True` if and only if ``k`` is a meta-key, rather than a data-key.

        Examples:
            >>> JointNestedRaggedTensorDict._is_meta_key("dim1/T")
            False
            >>> JointNestedRaggedTensorDict._is_meta_key("dim1/lengths")
            True
            >>> JointNestedRaggedTensorDict._is_meta_key("dim1/bounds")
            True
            >>> JointNestedRaggedTensorDict._is_meta_key("dim1/mask")
            True
        """
        return k.endswith("/lengths") or k.endswith("/bounds") or k.endswith("/mask")

    @classmethod
    def _get_dim_from_key_str(self, full_key_str: str) -> int:
        """Gets the dimensionality associated with this key.

        Examples:
            >>> JointNestedRaggedTensorDict._get_dim_from_key_str("dim1/T")
            1
            >>> JointNestedRaggedTensorDict._get_dim_from_key_str("dim2/id")
            2
        """
        dim_part, key_part = full_key_str.split("/")
        return int(dim_part[3:])

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
                return self._get_dim_from_key_str(k)

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

    def __getitem__(self, idx: int | slice | np.ndarray):
        """Returns either a slice of the tensors in this collection or the tensor at the given key.

        Args:
            idx: The index at which to slice. Returns a ``JointNestedRaggedTensorDict`` whose contents reflect
                the contents of this object sliced according to ``idx``.

        Returns:
            * If ``idx`` is an `int` or a `slice` object, this returns a `JointNestedRaggedTensorDict`
              representing the source tensors as though they were sliced according to ``idx`` in the first
              dimension. With an `int` index, the resulting tensors will have their dimensionality reduced by
              one, and this cannot be called on a collection that already has some tensors that are of
              dimensionality 1 in it.
            * If ``idx`` is a numpy array of integers, this returns a `JointNestedRaggedTensorDict`
              that consists of the tensors in this collection sliced at the integer indices in ``idx`` and
              then re-stacked together. Dimensionality will not be reduced. This behavior is consistent with
              how the tensors would be sliced under ``idx`` were they dense numpy arrays.

        Raises:
            TypeError: if ``idx`` is not a supported type
            ValueError: if ``idx`` is misconfigured (e.g., a numpy array of floats).

        Examples:
            >>> J = JointNestedRaggedTensorDict({
            ...     "T":   [[1,           2,        3       ], [4,   5          ], [6,  7]],
            ...     "id":  [[[1, 2,   3], [3,   4], [1, 2  ]], [[3], [3,   2, 2]], [[], [8,  9]]],
            ...     "val": [[[1, 0.2, 0], [3.1, 0], [1, 2.2]], [[3], [3.3, 2, 0]], [[], [1., 0]]],
            ... }, schema={"T": int, "id": int, "val": float})
            >>> as_dense = J[1].to_dense()
            >>> as_dense['T']
            array([4, 5])
            >>> as_dense['id']
            array([[3, 0, 0],
                   [3, 2, 2]])
            >>> as_dense['val']
            array([[3. , 0. , 0. ],
                   [3.3, 2. , 0. ]])
            >>> as_dense = J[2].to_dense()
            >>> as_dense['T']
            array([6, 7])
            >>> as_dense['id']
            array([[0, 0],
                   [8, 9]])
            >>> as_dense['val']
            array([[0., 0.],
                   [1., 0.]])
            >>> J["T"]
            Traceback (most recent call last):
                ...
            TypeError: <class 'str'> not supported for JointNestedRaggedTensorDict.__getitem__
            >>> as_dense = J[np.array([0, 2])].to_dense()
            >>> as_dense['T']
            array([[1, 2, 3],
                   [6, 7, 0]])
            >>> as_dense['id']
            array([[[1, 2, 3],
                    [3, 4, 0],
                    [1, 2, 0]],
            <BLANKLINE>
                   [[0, 0, 0],
                    [8, 9, 0],
                    [0, 0, 0]]])
            >>> as_dense['val']
            array([[[1. , 0.2, 0. ],
                    [3.1, 0. , 0. ],
                    [1. , 2.2, 0. ]],
            <BLANKLINE>
                   [[0. , 0. , 0. ],
                    [1. , 0. , 0. ],
                    [0. , 0. , 0. ]]])
        """
        match idx:
            case np.ndarray() as arr if arr.dtype in (NP_INT_TYPES + NP_UINT_TYPES) and arr.ndim == 1:
                return self.__class__.vstack([self[int(i)] for i in arr])
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
                    if dim_int == 1:
                        out_tensors[new_key] = T[0]
                    else:
                        out_tensors[new_key] = T

                return self.__class__(out_tensors, schema=self.schema, pre_raggedified=True)
            case slice() as S:
                st_i = 0 if S.start is None else S.start
                end_i = S.stop

                if S.step not in (None, 1):
                    raise ValueError("Only slices with step size of None or 1 are supported; got {S.step}")

                out_tensors = {}
                for key in self.keys_at_dim(0):
                    out_tensors[f"dim0/{key}"] = self.tensors[f"dim0/{key}"][st_i:end_i]

                for dim in range(1, self.max_n_dims):
                    L = self.tensors[f"dim{dim}/lengths"]
                    out_tensors[f"dim{dim}/lengths"] = L[st_i:end_i]

                    for key in self.keys_at_dim(dim):
                        out_tensors[f"dim{dim}/{key}"] = self.tensors[f"dim{dim}/{key}"][st_i:end_i]

                    B = self.tensors[f"dim{dim}/bounds"]

                    if st_i == 0:
                        offset = 0
                    else:
                        offset = B[st_i - 1]

                    out_tensors[f"dim{dim}/bounds"] = B[st_i:end_i] - offset

                    st_i = 0 if st_i == 0 else B[st_i - 1]
                    end_i = B[end_i - 1] if end_i is not None else B[-1]

                return JointNestedRaggedTensorDict(out_tensors, schema=self.schema, pre_raggedified=True)
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
            >>> assert dense_dict.keys() == {'T', 'id', 'val', 'dim1/mask', 'dim2/mask'}
            >>> dense_dict['dim1/mask']
            array([[ True,  True,  True],
                   [ True,  True, False]])
            >>> dense_dict['T']
            array([[1, 2, 3],
                   [4, 5, 0]], dtype=uint8)
            >>> dense_dict['dim2/mask']
            array([[[ True,  True,  True],
                    [ True,  True, False],
                    [ True,  True, False]],
            <BLANKLINE>
                   [[ True, False, False],
                    [ True,  True,  True],
                    [False, False, False]]])
            >>> dense_dict['id']
            array([[[1, 2, 3],
                    [3, 4, 0],
                    [1, 2, 0]],
            <BLANKLINE>
                   [[3, 0, 0],
                    [3, 2, 2],
                    [0, 0, 0]]], dtype=uint8)
            >>> dense_dict['val']
            array([[[1. , 0.2, 0. ],
                    [3.1, 0. , 0. ],
                    [1. , 2.2, 0. ]],
            <BLANKLINE>
                   [[3. , 0. , 0. ],
                    [3.3, 2. , 0. ],
                    [0. , 0. , 0. ]]], dtype=float32)
            >>> J = JointNestedRaggedTensorDict({"T": [[1, 2, 3]]})
            >>> dense_dict = J.to_dense()
            >>> assert dense_dict.keys() == {'T', 'dim1/mask'}
            >>> dense_dict['dim1/mask']
            array([[ True,  True,  True]])
            >>> dense_dict['T']
            array([[1, 2, 3]], dtype=uint8)
        """
        out = {key: self.tensors[f"dim0/{key}"] for key in self.keys_at_dim(0)}

        shape = [len(self)]
        L = shape
        indices = [tuple([])]

        for dim in range(1, self.max_n_dims):
            indices = list(
                itertools.chain.from_iterable(
                    (base_idx + (j,) for j in range(ln)) for base_idx, ln in zip(indices, L)
                )
            )

            L = self.tensors[f"dim{dim}/lengths"]

            shape.append(max(L))

            if self.keys_at_dim(dim):
                out[f"dim{dim}/mask"] = np.zeros(shape=tuple(shape), dtype=bool)
                for idx, ln in zip(indices, L):
                    out[f"dim{dim}/mask"][idx + (slice(None, ln),)] = True

            for key in self.keys_at_dim(dim):
                slice_vals = self.tensors[f"dim{dim}/{key}"]
                if not slice_vals:
                    continue

                out[key] = np.zeros(shape=tuple(shape), dtype=slice_vals[0].dtype)
                for idx, ln, vs in zip(indices, L, slice_vals):
                    out[key][idx + (slice(None, ln),)] = vs

        return out

    def unsqueeze(self, dim: int) -> JointNestedRaggedTensorDict:
        """Expands these tensors to have a new, singleton first dimension.

        Args:
            dim: This is added for compatibility with the PyTorch signature, but must be 0 here.

        Raises:
            ValueError: If dim != 0 or if the tensors are exclusively non-ragged 1D tensors.

        Examples:
            >>> J = JointNestedRaggedTensorDict({
            ...     "T": [1, 2],
            ...     "id": [[[1, 2, 3], [3, 4], [1, 2]], [[3], [3, 2, 2]]],
            ...     "val": [[[1.0, 0.2, 0.], [3.1, 0.], [1., 2.2]], [[3], [3.3, 2., 0]]],
            ... }, schema={"T": int, "id": int, "val": float})
            >>> dense_dict = J.unsqueeze(dim=0).to_dense()
            >>> dense_dict['T']
            array([[1, 2]])
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
            >>> J = JointNestedRaggedTensorDict({"T": [1, 2, 3]}, schema={"T": int})
            >>> dense_dict = J.unsqueeze(dim=0).to_dense()
            >>> dense_dict['T']
            array([[1, 2, 3]])
        """
        if dim != 0:
            raise ValueError(f"Only supports dim = 0 for now; got {dim}")

        out_tensors = {}

        for key in self.keys_at_dim(0):
            out_tensors[f"dim1/{key}"] = [self.tensors[f"dim0/{key}"]]

        if self.keys_at_dim(0):
            lengths = np.array([len(self.tensors[f"dim0/{key}"])])
            bounds = lengths.copy()
        else:
            lengths = np.array([len(self.tensors["dim1/lengths"])])
            bounds = lengths.copy()

        out_tensors["dim1/lengths"] = lengths
        out_tensors["dim1/bounds"] = bounds

        for dim in range(1, self.max_n_dims):
            new_dim = dim + 1

            lengths = self.tensors[f"dim{dim}/lengths"]
            bounds = self.tensors[f"dim{dim}/bounds"]

            out_tensors[f"dim{new_dim}/lengths"] = lengths
            out_tensors[f"dim{new_dim}/bounds"] = bounds

            for key in self.keys_at_dim(dim):
                out_tensors[f"dim{new_dim}/{key}"] = self.tensors[f"dim{dim}/{key}"]

        return self.__class__(out_tensors, schema=self.schema, pre_raggedified=True)

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
    def vstack(cls, tensor_dicts: list) -> JointNestedRaggedTensorDict:
        """Vertically stacks the passed tensors into a new collection on an added 1st dim.

        Examples:
            >>> J = JointNestedRaggedTensorDict({
            ...     "T": [[1, 2, 3], [4, 5]],
            ...     "id": [[[1, 2, 3], [3, 4], [1, 2]], [[3], [3, 2, 2]]],
            ...     "val": [[[1.0, 0.2, 0.], [3.1, 0.], [1., 2.2]], [[3], [3.3, 2., 0]]],
            ... }, schema={"T": int, "id": int, "val": float})
            >>> stacked = JointNestedRaggedTensorDict.vstack([J[0], J[1]])
            >>> dense_dict = stacked.to_dense()
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
    def concatenate(cls, tensors: list) -> JointNestedRaggedTensorDict:
        """Concatenates these tensors with other identically keyed tensors along the existing first dim.

        Args:
            tensors: The tensors to concatenate.

        Examples:
            >>> J1 = JointNestedRaggedTensorDict({
            ...     "T": [[1, 2, 3], [4, 5]],
            ...     "id": [[[1, 2, 3], [3, 4], [1, 2]], [[3], [3, 2, 2]]],
            ...     "val": [[[1.0, 0.2, 0.], [3.1, 0.], [1., 2.2]], [[3], [3.3, 2., 0]]],
            ... }, schema={"T": int, "id": int, "val": float})
            >>> J2 = JointNestedRaggedTensorDict({
            ...     "T": [[6, 7, 8, 9]],
            ...     "id": [[[3], [3, 2, 2], [1], [1]]],
            ...     "val": [[[3], [4., 2., 0], [0], [3.]]],
            ... }, schema={"T": int, "id": int, "val": float})
            >>> concatenated = JointNestedRaggedTensorDict.concatenate([J1, J2])
            >>> dense_dict = concatenated.to_dense()
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

        out_keys = tensors[0].keys()
        out_max_n_dims = tensors[0].max_n_dims
        out_schema = tensors[0].schema
        out_tensors = tensors[0].tensors
        out_keys_at_dim = [tensors[0].keys_at_dim(i) for i in range(tensors[0].max_n_dims)]

        for T in tensors[1:]:
            if T.keys() != out_keys:
                raise ValueError(f"Keys inconsistent! {T.keys()} != {out_keys}")

            if T.max_n_dims != out_max_n_dims:
                raise ValueError(f"Max dims inconsistent! {T.max_n_dims} != {out_max_n_dims}")

            if T.schema != out_schema:
                raise ValueError(f"Schema inconsistent! {T.schema} != {out_schema}")

            for dim in range(T.max_n_dims):
                if T.keys_at_dim(dim) != out_keys_at_dim[dim]:
                    raise ValueError(
                        f"Keys inconsistent @ dim {dim}! {T.keys_at_dim(dim)} != {out_keys_at_dim[dim]}"
                    )

                if dim != 0:
                    # Here we need to handle lengths and bounds and such as well
                    lengths_key = f"dim{dim}/lengths"
                    bounds_key = f"dim{dim}/bounds"

                    out_tensors[lengths_key] = np.concatenate(
                        (out_tensors[lengths_key], T.tensors[lengths_key])
                    )
                    out_tensors[bounds_key] = np.concatenate(
                        (out_tensors[bounds_key], T.tensors[bounds_key] + out_tensors[bounds_key][-1])
                    )

                for key in out_keys_at_dim[dim]:
                    out_tensors[f"dim{dim}/{key}"] = (
                        out_tensors[f"dim{dim}/{key}"] + T.tensors[f"dim{dim}/{key}"]
                    )
        return cls(out_tensors, pre_raggedified=True, schema=out_schema)

    @classmethod
    def load_slice(cls, fp: Path, idx: int | slice | np.ndarray) -> JointNestedRaggedTensorDict:
        """Loads the specified slice of the tensors saved at the given filepath.

        This method uses ``safetensors`` to fetch only the requested slice from the underlying file in an
        efficient, optimized manner that significantly preserves the resources required to load the entire
        file.

        Args:
            fp: The path from which to load
            idx: The slice to read.

        Returns
            * If ``idx`` is an `int` or a `slice` object, this returns a `JointNestedRaggedTensorDict`
              representing the tensors saved at ``fp`` as though they were sliced according to ``idx`` in the
              first dimension. With an `int` index, the resulting tensors will have their dimensionality
              reduced by one, and this cannot be called on a collection that already has some tensors that are
              of dimensionality 1 in it.
            * If ``idx`` is a numpy array of integers, this returns a `JointNestedRaggedTensorDict`
              that consists of tensors saved at ``fp`` sliced at the integer indices in ``idx`` and
              then re-stacked together. Dimensionality will not be reduced. This behavior is consistent with
              how the tensors would be sliced under ``idx`` were they dense numpy arrays.

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
            ...     J2 = JointNestedRaggedTensorDict.load_slice(fp, slice(None, 1))
            >>> J = J[:1]
            >>> assert J.keys() == J2.keys(), f"Keys unequal: {J.keys()} != {J2.keys()}"
            >>> J_dense = J.to_dense()
            >>> J2_dense = J2.to_dense()
            >>> for k in J_dense.keys():
            ...     assert (J_dense[k] == J2_dense[k]).all(), f"Tensors at {k} unequal!"
            >>> J = JointNestedRaggedTensorDict({
            ...     "T":   [[1,           2,        3       ], [4,   5          ]],
            ...     "id":  [[[1, 2,   3], [3,   4], [1, 2  ]], [[3], [3,   2, 2]]],
            ...     "val": [[[1, 0.2, 0], [3.1, 0], [1, 2.2]], [[3], [3.3, 2, 0]]],
            ... })
            >>> with tempfile.TemporaryDirectory() as dirpath:
            ...     fp = Path(dirpath) / "tensors.pt"
            ...     J.save(fp)
            ...     J2 = JointNestedRaggedTensorDict.load_slice(fp, 1)
            >>> J = J[1]
            >>> assert J.keys() == J2.keys(), f"Keys unequal: {J.keys()} != {J2.keys()}"
            >>> J_dense = J.to_dense()
            >>> J2_dense = J2.to_dense()
            >>> for k in J_dense.keys():
            ...     assert (J_dense[k] == J2_dense[k]).all(), f"Tensors at {k} unequal!"
        """

        match idx:
            case np.ndarray() as arr if arr.dtype in (NP_INT_TYPES + NP_UINT_TYPES) and arr.ndim == 1:
                return cls.vstack([cls.load_slice(fp, int(i)) for i in arr])
            case int() as i:
                return cls.load_slice(fp, slice(i, i + 1))[0]
            case slice() as S:
                st_i = 0 if S.start is None else S.start
                end_i = S.stop

                if S.step not in (None, 1):
                    raise ValueError("Only slices with step size of None or 1 are supported; got {S.step}")

                tensors = {}
                schema = {}
                with safe_open(fp, framework="np") as f:
                    keys_by_dim = defaultdict(list)

                    for k in f.keys():
                        if cls._is_meta_key(k):
                            continue

                        keys_by_dim[cls._get_dim_from_key_str(k)].append(k)

                    max_n_dims = max(keys_by_dim.keys()) + 1

                    for key in keys_by_dim[0]:
                        v = f.get_slice(k)[st_i:end_i]
                        schema[k] = v.dtype
                        tensors[k] = v

                    for dim in range(1, max_n_dims):
                        try:
                            tensors[f"dim{dim}/lengths"] = f.get_slice(f"dim{dim}/lengths")[st_i:end_i]
                        except SystemError as e:
                            raise ValueError(
                                f"Error loading lengths for dim {dim} with st_i={st_i} and end_i={end_i}"
                            ) from e

                        if st_i == 0:
                            offset = 0
                            B = f.get_slice(f"dim{dim}/bounds")[st_i:end_i]
                        else:
                            B = f.get_slice(f"dim{dim}/bounds")[st_i - 1 : end_i]
                            offset = B[0]
                            B = B[1:] - offset

                        vals_start = offset
                        vals_end = B[-1] + offset

                        tensors[f"dim{dim}/bounds"] = B

                        for k in keys_by_dim[dim]:
                            v = f.get_slice(k)[vals_start:vals_end]
                            schema[k] = v.dtype
                            tensors[k] = np.split(v, B[:-1])

                        st_i = 0 if st_i == 0 else offset
                        end_i = B[-1] + offset

                return cls(tensors, schema=schema, pre_raggedified=True)
            case _:
                raise TypeError(f"{type(idx)} not supported for {cls.__name__}.load_slice")
