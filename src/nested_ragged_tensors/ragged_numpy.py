from __future__ import annotations

import itertools
from collections.abc import Sequence
from contextlib import contextmanager
from functools import cached_property
from pathlib import Path

import numpy as np
from safetensors import safe_open
from safetensors.numpy import load_file, save_file

NP_FLOAT_TYPES = (np.float16, np.float32, np.float64)
NP_INT_TYPES = (np.int8, np.int16, np.int32, np.int64)
NP_UINT_TYPES = (np.uint8, np.uint16, np.uint32, np.uint64)

NUM_T = int | float
NUM_LIST_T = list[NUM_T]
NESTED_NUM_LIST_T = NUM_LIST_T
NESTED_NUM_LIST_T = list[NESTED_NUM_LIST_T] | NESTED_NUM_LIST_T


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
    """Stores tensors internally in the following dictionary structure:
    {
        "dim0/vals": {vals_tensor} # A true 1D tensor in raw tensor form. No associated bounds.
        "dim1/bounds": 1D_bounds,
        "dim1/{vals_key}": {vals_tensor}, # A variety of 2D ragged values tensors governed by the 1D bounds.
        ...
    }
    """

    def __init__(
        self,
        raw_tensors: dict[str, NESTED_NUM_LIST_T] | None = None,
        processed_tensors: dict[str, np.ndarray] | None = None,
        tensors_fp: Path | None = None,
        schema: dict[str, np.dtype] | None = None,
    ):
        """Initializes JointNestedRaggedTensorDict with the given tensors.

        Args:
            raw_tensors: A raw dictionary from strings to lists of lists to store in this manner.
            processed_tensors: The tensors to be stored, in pre-processed format.
            tensors_fp: The filepath from which to load the pre-processed tensors in seafetensors formatt.
            schema: The schema for the tensors, if known.

        Examples:
            >>> import tempfile
            >>> J = JointNestedRaggedTensorDict({
            ...     "A": [[1, 2, 3], [4, 5]],
            ...     "B": [1, 2],
            ... })
            >>> print(J) # doctest: +NORMALIZE_WHITESPACE
            JointNestedRaggedTensorDict(processed_tensors={'dim1/bounds': array([3, 5]),
                                         'dim1/A': array([1, 2, 3, 4, 5], dtype=uint8),
                                         'dim0/B': array([1, 2], dtype=uint8)},
                                        schema={'A': <class 'numpy.uint8'>, 'B': <class 'numpy.uint8'>})
            >>> J2 = JointNestedRaggedTensorDict(processed_tensors=J.tensors, schema=J.schema)
            >>> assert J == J2
            >>> with tempfile.TemporaryDirectory() as dirpath:
            ...     fp = Path(dirpath) / "tensors.nrt"
            ...     J.save(fp)
            ...     J3 = JointNestedRaggedTensorDict(tensors_fp=fp)
            ...     assert J == J3
            >>> JointNestedRaggedTensorDict({"S": []})
            Traceback (most recent call last):
                ...
            ValueError: Empty list found for key S! Nested Ragged Tensors does not support empty tensors.
            >>> JointNestedRaggedTensorDict(
            ...     tensors_fp="foo", raw_tensors={"a": [1, 2, 3]}
            ... ) # doctest: +NORMALIZE_WHITESPACE
            Traceback (most recent call last):
                ...
            ValueError: Exactly one of `raw_tensors`, `processed_tensors`, `tensors_fp` must be non-null!
                        Got raw_tensors={'a': [1, 2, 3]} processed_tensors=None tensors_fp=foo
            >>> JointNestedRaggedTensorDict() # doctest: +NORMALIZE_WHITESPACE
            Traceback (most recent call last):
                ...
            ValueError: Exactly one of `raw_tensors`, `processed_tensors`, `tensors_fp` must be non-null!
                        Got raw_tensors=None processed_tensors=None tensors_fp=None
            >>> with tempfile.TemporaryDirectory() as dirpath:
            ...     fp = Path(dirpath) / "tensors.nrt"
            ...     JointNestedRaggedTensorDict(tensors_fp=fp)
            Traceback (most recent call last):
                ...
            FileNotFoundError: Tensors filepath must exist, got ...
        """
        args = [
            ("raw_tensors", raw_tensors),
            ("processed_tensors", processed_tensors),
            ("tensors_fp", tensors_fp),
        ]
        if len([a for a, v in args if v is not None]) != 1:
            args_str = " ".join(f"{n}={v}" for n, v in args)
            raise ValueError(
                "Exactly one of `raw_tensors`, `processed_tensors`, `tensors_fp` must be non-null! Got "
                f"{args_str}"
            )

        self._schema = schema if schema is not None else {}
        if raw_tensors is not None:
            self._initialize_tensors(raw_tensors)
        elif processed_tensors is not None:
            self._tensors = processed_tensors
        elif tensors_fp is not None:
            if not tensors_fp.is_file():
                raise FileNotFoundError(f"Tensors filepath must exist, got {tensors_fp}")
            self._tensors = None
            self._tensors_fp = tensors_fp

    def __eq__(self, other: object) -> bool:
        """Checks if this JointNestedRaggedTensorDict is equal to another object."""

        if not isinstance(other, JointNestedRaggedTensorDict):
            return False

        if self._tensor_keys != other._tensor_keys:
            return False

        for k in self._tensor_keys:
            if not np.array_equal(self.tensors[k], other.tensors[k]):
                return False

        return True

    def __repr__(self) -> str:
        prefix = "JointNestedRaggedTensorDict("
        schema_arg = f"schema={self.schema}"
        if self._tensors is not None:
            return f"{prefix}processed_tensors={self._tensors}, {schema_arg})"
        elif self._tensors_fp is not None:
            return f"{prefix}tensors_fp={str(self._tensors_fp)}, {schema_arg})"
        else:
            raise ValueError("No tensors found!")

    def __str__(self) -> str:
        return self.__repr__()

    @property
    def schema(self) -> dict[str, np.dtype]:
        if not self._schema:
            if self._schema is None:
                self._schema = {}

            for k in self._tensor_keys:
                dim, key = k.split("/")
                with self._tensor_at_key(k) as T:
                    self._schema[key] = T[:1].dtype
        return self._schema

    @property
    def tensors(self) -> dict[str, np.ndarray]:
        if self._tensors is None:
            self._tensors = load_file(self._tensors_fp)
        return self._tensors

    @cached_property
    def _tensor_keys(self) -> set[str]:
        if self._tensors is None:
            with safe_open(self._tensors_fp, framework="np") as f:
                return set(f.keys())
        else:
            return set(self._tensors.keys())

    @contextmanager
    def _tensor_at_key(self, key: str):
        if self._tensors is None:
            with safe_open(self._tensors_fp, framework="np") as f:
                yield f.get_slice(key)
        else:
            yield self._tensors[key]

    @classmethod
    def _get_lengths_and_values(
        cls, T: NESTED_NUM_LIST_T, curr_lengths: list[list[int]] = None
    ) -> tuple[list[list[int]], list]:
        """Checks of T is a nested list of lists of a viable shape and returns the nested lengths and values.

        Args:
            T: A nested list of values.
            curr_lengths: The running lengths of the nested list being constructed through recursion.
            curr_bound_diffs: The running bound differences of the nested list being constructed through
                recursion.

        Returns: The nested lengths and the passed input (unmodified).

        Examples:
            >>> JointNestedRaggedTensorDict._get_lengths_and_values([1, 2, 3])
            (None, [1, 2, 3])
            >>> JointNestedRaggedTensorDict._get_lengths_and_values([[1, 2, 3], [3, 4]])
            ([[3, 2]], [[1, 2, 3], [3, 4]])
            >>> JointNestedRaggedTensorDict._get_lengths_and_values(
            ...     [[[1, 2, 3], [3, 4]], [[3], [3, 2, 2], [3, 5]]]
            ... )
            ([[2, 3], [3, 2, 1, 3, 2]], [[1, 2, 3], [3, 4], [3], [3, 2, 2], [3, 5]])
            >>> JointNestedRaggedTensorDict._get_lengths_and_values([[1, 2], ["foo", "bar"]])
            Traceback (most recent call last):
                ...
            TypeError: T must be list of numbers or a nested list of lists. Got list[int, str]
            >>> JointNestedRaggedTensorDict._get_lengths_and_values("foo")
            Traceback (most recent call last):
                ...
            TypeError: T must be list of numbers or a nested list of lists. Got str
        """
        if curr_lengths is None:
            curr_lengths = []

        match T:
            case list() as Ts if is_ndim_list(Ts, dim=2):
                return curr_lengths + [[len(T) for T in Ts]], Ts
            case list() if is_ndim_list(T, dim=1):
                return None, T
            case list() as Ts if all(isinstance(T, (list, tuple, np.ndarray)) for T in Ts):
                return cls._get_lengths_and_values(
                    list(itertools.chain.from_iterable(Ts)), curr_lengths + [[len(T) for T in Ts]]
                )
            case list() as Ts:
                types = ", ".join(sorted(list({type(T).__name__ for T in Ts})))
                T_type = type(Ts).__name__
                raise TypeError(f"T must be list of numbers or a nested list of lists. Got {T_type}[{types}]")
            case _:
                T_type = type(T).__name__
                raise TypeError(f"T must be list of numbers or a nested list of lists. Got {T_type}")

    @classmethod
    def _infer_dtype(cls, vals: Sequence[NUM_T]) -> np.dtype:
        """Infers the minimal necessary dtype for storing the input data. Inputs must be ints or floats.

        Args:
            vals: The sequence of values to type.

        Returns: The minimal possible numpy dtype to store the inputs. If any of the inputs are floats,
            returns `np.float32`; otherwise returns the minimal possible either signed or unsigned integral
            dtype given the extent of the data.

        Raises:
            ValueError: If the inputs are not all ints or floats or if there are no valid types available.

        Examples:
            >>> JointNestedRaggedTensorDict._infer_dtype([1, 2, 3.2, 4])
            <class 'numpy.float32'>
            >>> JointNestedRaggedTensorDict._infer_dtype([1, 2, 3, 4])
            <class 'numpy.uint8'>
            >>> JointNestedRaggedTensorDict._infer_dtype([1, 2, 256])
            <class 'numpy.uint16'>
            >>> JointNestedRaggedTensorDict._infer_dtype([1, 2, 66000])
            <class 'numpy.uint32'>
            >>> JointNestedRaggedTensorDict._infer_dtype([1, 2, 40000000000])
            <class 'numpy.uint64'>
            >>> JointNestedRaggedTensorDict._infer_dtype([1, 2, 66000, -66000])
            <class 'numpy.int32'>
            >>> JointNestedRaggedTensorDict._infer_dtype([1, 2, 128, -128])
            <class 'numpy.int16'>
            >>> JointNestedRaggedTensorDict._infer_dtype([1, 2, 128, -128, "foo"])
            Traceback (most recent call last):
                ...
            ValueError: Vals are neither all floats or all ints
            >>> JointNestedRaggedTensorDict._infer_dtype([1, 2, 40000000000000000000, -40000000000000000000])
            Traceback (most recent call last):
                ...
            ValueError: No valid type available for -40000000000000000000 - 40000000000000000000!
        """
        valid_possible_Ts = (
            (
                float,
                int,
            )
            + NP_FLOAT_TYPES
            + NP_INT_TYPES
            + NP_UINT_TYPES
        )
        if not all(isinstance(v, valid_possible_Ts) for v in vals):
            raise ValueError("Vals are neither all floats or all ints")

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

        for t in valid_Ts:
            if mx > tinfo_fn(t).max or mn < tinfo_fn(t).min:
                continue
            else:
                return t
        raise ValueError(f"No valid type available for {mn} - {mx}!")

    def _initialize_tensors(self, tensors: dict[str, list[NESTED_NUM_LIST_T] | NESTED_NUM_LIST_T]):
        """Initializes the tensors from lists of raw data entries."""
        self._tensors = {}
        for k, T in tensors.items():
            if len(T) == 0:
                raise ValueError(
                    f"Empty list found for key {k}! Nested Ragged Tensors does not support empty tensors."
                )

            if not isinstance(T[0], (list, tuple, np.ndarray)):
                dim_str = "dim0"
                if k not in self._schema:
                    self._schema[k] = self._infer_dtype(T)
                self._tensors[f"{dim_str}/{k}"] = np.array(T, dtype=self._schema[k])
                continue

            try:
                lengths, vals = self._get_lengths_and_values(T)
                lengths = [np.array(L, dtype=int) for L in lengths]
            except TypeError as e:
                raise ValueError(f"Failed to parse {k} as a nested list of numbers!") from e

            flat_vals = list(itertools.chain.from_iterable(vals))
            if k not in self._schema:
                self._schema[k] = self._infer_dtype(flat_vals)

            dim_str = "dim0"
            for i, L in enumerate(lengths):
                dim_str = f"dim{i+1}"

                bounds_key = f"{dim_str}/bounds"
                B = np.cumsum(L, axis=0)
                if bounds_key in self._tensors:
                    if not np.array_equal(self._tensors[bounds_key], B):
                        raise ValueError(f"Inconsistent bounds tensors! {self._tensors[bounds_key]} vs. {B}")
                else:
                    self._tensors[bounds_key] = B

            self._tensors[f"{dim_str}/{k}"] = np.array(flat_vals, dtype=self._schema[k])

    def save(self, fp: Path):
        """Saves the tensor to a file. See `JointNestedRaggedTensorDict.load` for examples.

        Args:
            fp: The path to which the tensors will be saved.

        Examples:
            >>> import tempfile
            >>> J = JointNestedRaggedTensorDict({
            ...     "T":   [[1,           2,        3       ], [4,   5          ]],
            ...     "id":  [[[1, 2,   3], [3,   4], [1, 2  ]], [[3], [3,   2, 2]]],
            ...     "val": [[[1, 0.2, 0], [3.1, 0], [1, 2.2]], [[3], [3.3, 2, 0]]],
            ... })
            >>> with tempfile.TemporaryDirectory() as dirpath:
            ...     fp = Path(dirpath) / "tensors.nrt"
            ...     J.save(fp)
            ...     J2 = JointNestedRaggedTensorDict(tensors_fp=fp)
            ...     assert J == J2
        """
        if self._tensors is None:
            raise ValueError(f"Already saved to {self._tensors_fp}!")
        save_file(self.tensors, fp)

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
        return max(int(k.split("/")[0][3:]) for k in self._tensor_keys) + 1

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
        return min(int(k.split("/")[0][3:]) for k in self._tensor_keys) + 1

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
        return {k.split("/")[1] for k in self._tensor_keys if not self._is_meta_key(k)}

    @classmethod
    def _is_meta_key(cls, k: str) -> bool:
        """Returns `True` if and only if ``k`` is a meta-key, rather than a data-key.

        Examples:
            >>> JointNestedRaggedTensorDict._is_meta_key("dim1/T")
            False
            >>> JointNestedRaggedTensorDict._is_meta_key("dim1/bounds")
            True
            >>> JointNestedRaggedTensorDict._is_meta_key("dim1/mask")
            True
        """
        return k.endswith("/bounds") or k.endswith("/mask")

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
        for k in self._tensor_keys:
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

        If we drop all values from a tensor, it is omitted from the resulting tensor. This is likely not
        ideal. TODO(mmd): Fix this behavior.
            >>> as_dense = J[2][0:1].to_dense()
            >>> assert as_dense.keys() == {'T', 'dim1/mask'}
            >>> as_dense['T']
            array([6])
            >>> J["T"]
            Traceback (most recent call last):
                ...
            TypeError: <class 'str'> not supported for JointNestedRaggedTensorDict slicing
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
            >>> J = JointNestedRaggedTensorDict({
            ...     "T":   [[1,           2,        3       ], [4,   5          ], [6,  7]],
            ...     "id":  [[[1, 2,   3], [3,   4], [1, 2  ]], [[3], [3,   2, 2]], [[], [8,  9]]],
            ...     "val": [[[1, 0.2, 0], [3.1, 0], [1, 2.2]], [[3], [3.3, 2, 0]], [[], [1., 0]]],
            ... }, schema={"T": int, "id": int, "val": float})
            >>> as_dense = J[0, :2].to_dense()
            >>> as_dense['T']
            array([1, 2])
            >>> as_dense['id']
            array([[1, 2, 3],
                   [3, 4, 0]])
            >>> as_dense['val']
            array([[1. , 0.2, 0. ],
                   [3.1, 0. , 0. ]])
            >>> as_dense = J[0, 1].to_dense()
            >>> assert as_dense.keys() == {'id', 'val'} # We drop the non-tensorized T key.
            >>> as_dense['id']
            array([3, 4])
            >>> as_dense['val']
            array([3.1, 0. ])
            >>> as_dense = J[2, :1].to_dense()
            >>> as_dense['T']
            array([6])
            >>> assert as_dense.keys() == {'T', 'dim1/mask'}
            >>> as_dense = J[1, 1:].to_dense()
            >>> as_dense['T']
            array([5])
            >>> as_dense['id']
            array([[3, 2, 2]])
            >>> as_dense['val']
            array([[3.3, 2. , 0. ]])
            >>> as_dense = J[1:2, 1:].to_dense()
            Traceback (most recent call last):
                ...
            ValueError: Multi-level non-int slicing is not supported.
        """
        return self._slice(self._get_slice_indices(idx))

    def to_dense(self, padding_side: str = "right") -> dict[str, np.array]:
        """Returns a dense view of these ragged tensors.

        Args:
            seq_padding_side: The side on which to pad sequences. Must be either "left" or "right".

        Raises:
            ValueError: If ``seq_padding_side`` is not "left" or "right".

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
            >>> dense_dict = J.to_dense(padding_side="left")
            >>> assert dense_dict.keys() == {'T', 'id', 'val', 'dim1/mask', 'dim2/mask'}
            >>> dense_dict['dim1/mask']
            array([[ True,  True,  True],
                   [False,  True,  True]])
            >>> dense_dict['T']
            array([[1, 2, 3],
                   [0, 4, 5]], dtype=uint8)
            >>> dense_dict['dim2/mask']
            array([[[ True,  True,  True],
                    [False,  True,  True],
                    [False,  True,  True]],
            <BLANKLINE>
                   [[False, False, False],
                    [False, False,  True],
                    [ True,  True,  True]]])
            >>> dense_dict['id']
            array([[[1, 2, 3],
                    [0, 3, 4],
                    [0, 1, 2]],
            <BLANKLINE>
                   [[0, 0, 0],
                    [0, 0, 3],
                    [3, 2, 2]]], dtype=uint8)
            >>> dense_dict['val']
            array([[[1. , 0.2, 0. ],
                    [0. , 3.1, 0. ],
                    [0. , 1. , 2.2]],
            <BLANKLINE>
                   [[0. , 0. , 0. ],
                    [0. , 0. , 3. ],
                    [3.3, 2. , 0. ]]], dtype=float32)
            >>> J = JointNestedRaggedTensorDict({"T": [[1, 2, 3]]})
            >>> dense_dict = J.to_dense()
            >>> assert dense_dict.keys() == {'T', 'dim1/mask'}
            >>> dense_dict['dim1/mask']
            array([[ True,  True,  True]])
            >>> dense_dict['T']
            array([[1, 2, 3]], dtype=uint8)
            >>> J.to_dense(padding_side="up")
            Traceback (most recent call last):
                ...
            ValueError: padding_side must be 'left' or 'right'; got 'up'
        """

        out = {key: self.tensors[f"dim0/{key}"] for key in self.keys_at_dim(0)}

        shape = [len(self)]
        L = shape
        indices = [tuple([])]

        match padding_side:
            case "left":

                def offset_fn(ln: int, max_ln: int) -> int:
                    return max_ln - ln

            case "right":

                def offset_fn(ln: int, max_ln: int) -> int:
                    return 0

            case _:
                raise ValueError(f"padding_side must be 'left' or 'right'; got '{padding_side}'")

        def pad_slice(ln: int, max_ln: int) -> slice:
            offset = offset_fn(ln, max_ln)
            return slice(offset, offset + ln)

        for dim in range(1, self.max_n_dims):
            old_max_ln = max(L)
            indices = list(
                itertools.chain.from_iterable(
                    (base_idx + (offset_fn(ln, old_max_ln) + j,) for j in range(ln))
                    for base_idx, ln in zip(indices, L)
                )
            )

            B = self.tensors[f"dim{dim}/bounds"]
            if len(B) > 0:
                L = np.concatenate([[B[0]], np.diff(B, axis=0)], axis=0)
                max_ln = max(L)
            else:
                L = []
                max_ln = 0

            shape.append(max_ln)

            slice_indices = [idx + (pad_slice(ln, max_ln),) for idx, ln in zip(indices, L)]

            if self.keys_at_dim(dim):
                out[f"dim{dim}/mask"] = np.zeros(shape=tuple(shape), dtype=bool)
                for idx in slice_indices:
                    out[f"dim{dim}/mask"][idx] = True

            for key in self.keys_at_dim(dim):
                if len(self.tensors[f"dim{dim}/{key}"]) == 0:
                    continue

                out[key] = np.zeros(shape=tuple(shape), dtype=self.tensors[f"dim{dim}/{key}"].dtype)
                st = 0
                for idx, b in zip(slice_indices, B):
                    out[key][idx] = self.tensors[f"dim{dim}/{key}"][st:b]
                    st = b

        return out

    def squeeze(self, dim: int) -> JointNestedRaggedTensorDict:
        """Squeeze these tensors to remove an existing, singleton first dimension.

        Args:
            dim: This is added for compatibility with the PyTorch signature, but must be 0 here.

        Raises:
            ValueError: If dim != 0 or if the tensors do not have a singleton dimension at the specified
                level.

        Examples:
            >>> J = JointNestedRaggedTensorDict({
            ...     "T": [[1, 2]],
            ...     "id": [[[[1, 2, 3], [3, 4], [1, 2]], [[3], [3, 2, 2]]]],
            ...     "val": [[[[1.0, 0.2, 0.], [3.1, 0.], [1., 2.2]], [[3], [3.3, 2., 0]]]],
            ... }, schema={"T": int, "id": int, "val": float})
            >>> dense_dict = J.squeeze(dim=0).to_dense()
            >>> dense_dict['T']
            array([1, 2])
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
        if dim != 0:
            raise ValueError(f"Only supports dim = 0 for now; got {dim}")

        out_tensors = {}
        out_schema = {}
        for k, T in self.tensors.items():
            dim, key = k.split("/")
            dim_int = int(dim[3:])

            if dim_int == 1 and key == "bounds":
                # These keys will be dropped as this tensor will become a 1D tensor in truth.
                continue

            new_key = f"dim{dim_int - 1}/{key}"
            out_tensors[new_key] = T
            out_schema[new_key] = T.dtype

        return self.__class__(processed_tensors=out_tensors, schema=out_schema)

    def unsqueeze(self, dim: int) -> JointNestedRaggedTensorDict:
        """Expands these tensors to have a new, singleton first dimension.

        Args:
            dim: This is added for compatibility with the PyTorch signature, but must be 0 here.

        Raises:
            ValueError: If dim != 0 or if the tensors are exclusively non-ragged 1D tensors.

        Examples:
            >>> J = JointNestedRaggedTensorDict({"T": [1, 2, 3]}, schema={"T": int})
            >>> dense_dict = J.unsqueeze(dim=0).to_dense()
            >>> dense_dict['T']
            array([[1, 2, 3]])
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
        """
        if dim != 0:
            raise ValueError(f"Only supports dim = 0 for now; got {dim}")

        out_tensors = {}

        for key in self.keys_at_dim(0):
            out_tensors[f"dim1/{key}"] = self.tensors[f"dim0/{key}"]

        if self.keys_at_dim(0):
            out_tensors["dim1/bounds"] = np.array([len(self.tensors[f"dim0/{key}"])])
        else:
            out_tensors["dim1/bounds"] = np.array([len(self)])

        for dim in range(1, self.max_n_dims):
            new_dim = dim + 1

            out_tensors[f"dim{new_dim}/bounds"] = self.tensors[f"dim{dim}/bounds"]

            for key in self.keys_at_dim(dim):
                out_tensors[f"dim{new_dim}/{key}"] = self.tensors[f"dim{dim}/{key}"]

        return self.__class__(processed_tensors=out_tensors, schema=self.schema)

    def flatten(self, dim: int = -1) -> JointNestedRaggedTensorDict:
        """Flattens these tensors along the specified dimension. Currently, only supports dim = -1.

        If a tensor exists at the dimension that greater dimensions will be flattened into, it will be filled
        with zeros at all added positions.
        TODO(mmd): Consider supporting other modes, such as duplicating the value.

        Args:
            dim: The dimension along which to flatten the tensors. Must be -1 currently.
            expand_strategy:

        Raises:
            ValueError: If dim != -1.

        Examples:
            >>> J = JointNestedRaggedTensorDict({
            ...     "S": [1, 2],
            ...     "id": [[[1, 2, 3], [3, 4], [1, 2]], [[3], [3, 2, 2]]],
            ...     "val": [[[1.0, 0.2, 0.], [3.1, 0.], [1., 2.2]], [[3], [3.3, 2., 0]]],
            ... })
            >>> dense_dict = J.flatten().to_dense()
            >>> dense_dict['S']
            array([1, 2], dtype=uint8)
            >>> dense_dict['id']
            array([[1, 2, 3, 3, 4, 1, 2],
                   [3, 3, 2, 2, 0, 0, 0]], dtype=uint8)
            >>> dense_dict['val']
            array([[1. , 0.2, 0. , 3.1, 0. , 1. , 2.2],
                   [3. , 3.3, 2. , 0. , 0. , 0. , 0. ]], dtype=float32)
            >>> dense_dict['dim1/mask']
            array([[ True,  True,  True,  True,  True,  True,  True],
                   [ True,  True,  True,  True, False, False, False]])
            >>> J = JointNestedRaggedTensorDict({
            ...     "S": [1, 2],
            ...     "ts": [[1,         2,      3],      [4,   5]],
            ...     "id": [[[1, 2, 3], [3, 4], [1, 2]], [[3], [3, 2, 2]]],
            ...     "val": [[[1.0, 0.2, 0.], [3.1, 0.], [1., 2.2]], [[3], [3.3, 2., 0]]],
            ... })
            >>> dense_dict = J.to_dense()
            >>> dense_dict['S']
            array([1, 2], dtype=uint8)
            >>> dense_dict['ts']
            array([[1, 2, 3],
                   [4, 5, 0]], dtype=uint8)
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
            >>> dense_dict = J.flatten().to_dense()
            >>> dense_dict['S']
            array([1, 2], dtype=uint8)
            >>> dense_dict['ts']
            array([[1, 0, 0, 2, 0, 3, 0],
                   [4, 5, 0, 0, 0, 0, 0]], dtype=uint8)
            >>> dense_dict['id']
            array([[1, 2, 3, 3, 4, 1, 2],
                   [3, 3, 2, 2, 0, 0, 0]], dtype=uint8)
            >>> dense_dict['val']
            array([[1. , 0.2, 0. , 3.1, 0. , 1. , 2.2],
                   [3. , 3.3, 2. , 0. , 0. , 0. , 0. ]], dtype=float32)
            >>> J.flatten(dim=0)
            Traceback (most recent call last):
                ...
            ValueError: Only supports dim = -1 or 2 for now; got 0
        """
        if dim < 0:
            target_dim = self.max_n_dims + dim
        else:
            target_dim = dim

        if target_dim != self.max_n_dims - 1:
            raise ValueError(f"Only supports dim = -1 or {self.max_n_dims - 1} for now; got {dim}")

        out_tensors = {}

        for d in range(0, target_dim - 1):
            if d > 0:
                out_tensors[f"dim{d}/bounds"] = self.tensors[f"dim{d}/bounds"]
            for k in self.keys_at_dim(d):
                out_tensors[f"dim{d}/{k}"] = self.tensors[f"dim{d}/{k}"]

        prev_bounds = self.tensors[f"dim{target_dim-1}/bounds"]
        for d in range(target_dim, self.max_n_dims):
            curr_bounds = self.tensors[f"dim{d}/bounds"]
            st = np.concatenate([[0], curr_bounds[prev_bounds[:-1] - 1]])
            end = curr_bounds[prev_bounds - 1]

            new_bounds = np.cumsum(end - st)
            prev_bounds = curr_bounds
            out_tensors[f"dim{d-1}/bounds"] = new_bounds

            for k in self.keys_at_dim(d):
                out_tensors[f"dim{d - 1}/{k}"] = self.tensors[f"dim{d}/{k}"]

        if len(self.keys_at_dim(target_dim - 1)) > 0:
            B = self.tensors[f"dim{target_dim}/bounds"]
            L = B[-1]
            indices = np.concatenate([[0], B[:-1]])
            for k in self.keys_at_dim(target_dim - 1):
                old_T = self.tensors[f"dim{target_dim-1}/{k}"]
                new_T = np.zeros(shape=(L,), dtype=old_T.dtype)
                new_T[indices] = old_T
                out_tensors[f"dim{target_dim-1}/{k}"] = new_T

        return self.__class__(processed_tensors=out_tensors, schema=self.schema)

    def __len__(self) -> int:
        """Returns the length (which is shared across all keys) of these tensors.

        Examples:
            >>> import tempfile
            >>> J = JointNestedRaggedTensorDict({
            ...     "T": [[1, 2, 3], [4, 5]],
            ...     "id": [[[1, 2, 3], [3, 4], [1, 2]], [[3], [3, 2, 2]]],
            ...     "val": [[[1.0, 0.2, 0.], [3.1, 0.], [1., 2.2]], [[3], [3.3, 2., 0]]],
            ... })
            >>> len(J)
            2
            >>> with tempfile.NamedTemporaryFile() as f:
            ...     fp = Path(f.name)
            ...     J.save(fp)
            ...     J2 = JointNestedRaggedTensorDict(tensors_fp=fp)
            ...     len(J2)
            2
        """
        if self._tensors is None:
            with safe_open(self._tensors_fp, framework="np") as f:
                if self.max_n_dims == 1:
                    k = next(iter(self._tensor_keys))
                    return f.get_slice(k).get_shape()[0]
                else:
                    return f.get_slice("dim1/bounds").get_shape()[0]
        elif self.max_n_dims == 1:
            k = next(iter(self._tensor_keys))
            return len(self.tensors[k])
        else:
            return len(self.tensors["dim1/bounds"])

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

        Critically, this function **modifies** the input tensors in place.

        Args:
            tensors: The tensors to concatenate.

        Examples:
            >>> JointNestedRaggedTensorDict.concatenate([])
            Traceback (most recent call last):
                ...
            ValueError: Can't concatenate an empty list!
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
            >>> J1 = JointNestedRaggedTensorDict(
            ...     {"T": [1, 2, 3], "id": [[1, 2, 3], [3, 4], [1, 2]]},
            ...     schema={"T": int, "id": int, "val": float}
            ... )
            >>> concatenated = JointNestedRaggedTensorDict.concatenate([J1])
            >>> dense_dict = concatenated.to_dense()
            >>> dense_dict['T']
            array([1, 2, 3])
            >>> J2 = JointNestedRaggedTensorDict(
            ...     {"T": [6, 7, 8, 9], "id": [[3], [3, 2, 2], [1], [1]]},
            ...     schema={"T": int, "id": int, "val": float}
            ... )
            >>> concatenated = JointNestedRaggedTensorDict.concatenate([J1, J2])
            >>> dense_dict = concatenated.to_dense()
            >>> dense_dict['T']
            array([1, 2, 3, 6, 7, 8, 9])
            >>> dense_dict['id']
            array([[1, 2, 3],
                   [3, 4, 0],
                   [1, 2, 0],
                   [3, 0, 0],
                   [3, 2, 2],
                   [1, 0, 0],
                   [1, 0, 0]])
            >>> J1 = JointNestedRaggedTensorDict(
            ...     {"T": [1, 2, 3], "id": [[1, 2, 3], [3, 4], [1, 2]]},
            ...     schema={"T": int, "id": int, "val": float}
            ... )
            >>> J2 = JointNestedRaggedTensorDict(
            ...     {"T": [6, 7, 8, 9], "id": [[3], [3, 2, 2], [1], [1]]},
            ...     schema={"T": int, "id": int, "val": float}
            ... )
            >>> concatenated = JointNestedRaggedTensorDict.concatenate([J1[3:], J2[3:]])
            >>> dense_dict = concatenated.to_dense()
            >>> dense_dict['T']
            array([9])
            >>> dense_dict['id']
            array([[1]])
            >>> concatenated = JointNestedRaggedTensorDict.concatenate([J2[3:], J1[3:]])
            >>> dense_dict = concatenated.to_dense()
            >>> dense_dict['T']
            array([9])
            >>> dense_dict['id']
            array([[1]])
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
                    # Here we need to handle bounds and such as well
                    bounds_key = f"dim{dim}/bounds"

                    last_bound = out_tensors[bounds_key][-1] if len(out_tensors[bounds_key]) > 0 else 0
                    out_tensors[bounds_key] = np.concatenate(
                        (out_tensors[bounds_key], T.tensors[bounds_key] + last_bound)
                    )
                for key in out_keys_at_dim[dim]:
                    k_str = f"dim{dim}/{key}"
                    try:
                        out_tensors[k_str] = np.concatenate((out_tensors[k_str], T.tensors[k_str]), axis=0)
                    except Exception as e:
                        raise ValueError(
                            f"Failed to concatenate {key} at dim {dim} with args "
                            f"{out_tensors[k_str]} and {T.tensors[k_str]}"
                        ) from e
        return cls(processed_tensors=out_tensors, schema=out_schema)

    def _slice_single(
        self,
        indices: dict[str, slice | np.ndarray],
        squeeze_dims: list[int] | None = None,
    ) -> JointNestedRaggedTensorDict:
        """Slices this collection of tensors by the given indices."""

        tensors = {}
        schema = {}

        for k, idx in indices.items():
            old_dim, key = k.split("/")

            new_key = k

            match idx:
                case slice() as S:
                    with self._tensor_at_key(k) as T:
                        if key == "bounds" and S.start is not None and S.start > 0:
                            try:
                                L = T.get_shape()[0]
                            except Exception:
                                L = len(T)
                            if S.start >= L:
                                tensors[new_key] = np.array([], dtype=T.dtype)
                            else:
                                tensors[new_key] = T[S] - T[S.start - 1]
                        else:
                            tensors[new_key] = T[S]
                case _:
                    raise TypeError(f"{type(idx)} not supported for {self.__class__.__name__} slicing")

            schema[new_key] = tensors[new_key].dtype

        out = self.__class__(processed_tensors=tensors, schema=schema)
        if squeeze_dims is not None:
            i = 0
            for dim in sorted(squeeze_dims):
                out = out.squeeze(dim - i)
                i += 1
        return out

    def _slice(
        self,
        indices: tuple[dict[str, slice | np.ndarray], bool]
        | list[tuple[dict[str, slice | np.ndarray], bool]],
    ) -> JointNestedRaggedTensorDict:
        """Returns a new JointNestedRaggedTensorDict that is a slice of this one.

        Args:
            indices: The indices to slice by.

        Returns:
            A new JointNestedRaggedTensorDict that is a slice of this one.

        Examples:
        """
        match indices:
            case tuple() as T:
                return self._slice_single(*T)
            case dict():
                return self._slice_single(indices)
            case list():
                return self.__class__.vstack([self._slice_single(idx, squeeze_dims=[0]) for idx in indices])
            case _:
                raise TypeError(f"{type(indices)} not supported for {self.__class__.__name__} slicing")

    def _get_slice_indices(
        self, idx: int | slice | tuple | np.ndarray
    ) -> tuple[dict[str, slice], bool] | list[dict[str, slice]] | dict[str, slice]:
        """Returns the start and end indices for each dimension of self after slicing by idx."""

        match idx:
            case np.ndarray() as arr if arr.dtype in (NP_INT_TYPES + NP_UINT_TYPES) and arr.ndim == 1:
                return [self._get_slice_indices(slice(i, i + 1)) for i in arr]
            case int() as i:
                return (self._get_slice_indices(slice(i, i + 1)), [0])
            case tuple() as T:
                squeeze_dims = []
                out_indices = {}
                seen_non_int = False
                for dim, idx in enumerate(T):
                    if seen_non_int:
                        raise ValueError("Multi-level non-int slicing is not supported.")

                    if isinstance(idx, int):
                        idx = slice(idx, idx + 1)
                        squeeze_dims.append(dim)
                    else:
                        seen_non_int = True

                    if not isinstance(idx, slice):
                        raise TypeError(
                            f"{type(idx)} at index {dim} not supported for "
                            f"{self.__class__.__name__} tuple slicing"
                        )
                    out_indices = self._get_slice_indices_internal(idx, dim, out_indices)
                return (out_indices, squeeze_dims)
            case slice() as S:
                return self._get_slice_indices_internal(S, 0, {})
            case _:
                raise TypeError(f"{type(idx)} not supported for {self.__class__.__name__} slicing")

    def _get_slice_indices_internal(
        self, idx: slice, starting_dim: int, curr_indices: dict[str, slice]
    ) -> dict[str, slice]:
        """Returns the start and end indices for each dimension of self after slicing by idx."""

        st_i = 0 if idx.start is None else idx.start
        end_i = idx.stop

        if idx.step not in (None, 1):
            raise ValueError("Only slices with step size of None or 1 are supported; got {idx.step}")

        out = {**curr_indices}

        adjusted = False
        for key in self.keys_at_dim(starting_dim):
            if f"dim{starting_dim}/{key}" in out and not adjusted:
                S = out[f"dim{starting_dim}/{key}"]
                curr_st = S.start
                curr_end = S.stop

                if curr_st is not None:
                    st_i += curr_st
                    if end_i is not None:
                        end_i += curr_st
                if curr_end is not None:
                    if end_i is None:
                        end_i = curr_end
                    else:
                        end_i = min(end_i, curr_end)
                adjusted = True

            out[f"dim{starting_dim}/{key}"] = slice(st_i, end_i)

        for dim in range(max(starting_dim + 1, 1), self.max_n_dims):
            out[f"dim{dim}/bounds"] = slice(st_i, end_i)

            with self._tensor_at_key(f"dim{dim}/bounds") as bounds:
                try:
                    L = bounds.get_shape()[0]
                except Exception:
                    L = len(bounds)

                if st_i != 0:
                    if st_i <= L:
                        new_st_i = bounds[st_i - 1]
                    else:
                        new_st_i = bounds[-1]
                else:
                    new_st_i = 0

                if end_i is None:
                    new_end_i = bounds[-1]
                elif end_i > st_i and end_i <= L:
                    new_end_i = bounds[end_i - 1]
                else:
                    new_end_i = new_st_i

            st_i = new_st_i
            end_i = new_end_i

            for key in self.keys_at_dim(dim):
                out[f"dim{dim}/{key}"] = slice(st_i, end_i)

        return out
