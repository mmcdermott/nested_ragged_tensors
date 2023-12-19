import copy
import itertools
from pathlib import Path

import torch
from safetensors.torch import load_file, save_file

NUM_T = int | float
NESTED_NUM_LIST = list["NESTED_NUM_LIST"] | NUM_T


class RaggedTensor:
    def __init__(
        self,
        lengths: list[torch.LongTensor],
        bounds: list[torch.LongTensor],
        vals: torch.LongTensor,
        bound_offsets: torch.LongTensor | None = None,
    ):
        self.lengths = lengths
        self.bounds = bounds
        self.vals = vals

        self.dtype = vals.dtype
        self.device = vals.device

        self.n_dims = len(lengths) + 1
        if len(bounds) != (self.n_dims - 1):
            raise ValueError(f"Tensor dim inconsistent! {self.n_dims - 1} != {len(bounds)}")

        if bound_offsets is None:
            bound_offsets = torch.zeros((self.n_dims - 1,), device=self.device, dtype=torch.int64)
        self.bound_offsets = bound_offsets

    def __repr__(self) -> str:
        return f"RaggedTensor({self.lengths}, {self.bounds}, {self.vals}, {self.bound_offsets})"

    def __str__(self) -> str:
        return self.__repr__()

    def __getitem__(self, idx: slice | int):
        """Returns a new RaggedTensor view of the underlying data sliced accordingly.

        Examples:
            >>> lengths = [torch.LongTensor([2, 3, 1]), torch.LongTensor([1, 2, 3, 4, 1, 1])]
            >>> bounds = [torch.LongTensor([2, 5, 6]), torch.LongTensor([1, 3, 6, 10, 11, 12])]
            >>> vals = torch.LongTensor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
            >>> x = RaggedTensor(lengths, bounds, vals)
            >>> x[0]
            RaggedTensor([tensor([1, 2])], [tensor([1, 3])], tensor([1, 2, 3]), tensor([0]))
            >>> x[0].to_dense()
            tensor([[1, 0],
                    [2, 3]])
            >>> x[0][1]
            tensor([2, 3])
            >>> lengths = [torch.LongTensor([1, 2, 1, 1])]
            >>> bounds = [torch.LongTensor([1, 3, 4, 5])]
            >>> vals = torch.LongTensor([1, 2, 3, 4, 5])
            >>> x = RaggedTensor(lengths, bounds, vals)
            >>> x[1:3].to_dense()
            tensor([[2, 3],
                    [4, 0]])
            >>> x[:3].to_dense()
            tensor([[1, 0],
                    [2, 3],
                    [4, 0]])
            >>> x[1:].to_dense()
            tensor([[2, 3],
                    [4, 0],
                    [5, 0]])
            >>> x[:2, :1]
            Traceback (most recent call last):
                ...
            TypeError: <class 'tuple'> not supported for RaggedTensor.__getitem__
        """
        match idx:
            case int() as i:
                out = self[slice(i, i + 1)]
                if out.n_dims == 2:
                    return out.vals
                else:
                    return RaggedTensor(out.lengths[1:], out.bounds[1:], out.vals, out.bound_offsets[1:])
            case slice() as S:
                st_i = 0 if S.start is None else S.start
                end_i = S.stop

                if S.step not in (None, 1):
                    raise ValueError("Only slices with step size of None or 1 are supported; got {S.step}")

                offset = 0
                new_lengths = []
                new_bounds = []
                new_bound_offsets = self.bound_offsets.clone()
                for j, (L, B) in enumerate(zip(self.lengths, self.bounds)):
                    new_lengths.append(L[st_i:end_i])
                    new_bounds.append(B[st_i:end_i])  # Could track the offset rather than subbing
                    new_bound_offsets[j] += offset

                    st_i = 0 if st_i == 0 else B[st_i - 1] - self.bound_offsets[j]
                    end_i = (B[end_i - 1] if end_i is not None else B[-1]) - self.bound_offsets[j]
                    offset = self.bound_offsets[j] + st_i

                new_vals = self.vals[st_i:end_i]

                return RaggedTensor(new_lengths, new_bounds, new_vals, new_bound_offsets)
            case _:
                raise TypeError(f"{type(idx)} not supported for RaggedTensor.__getitem__")

    @property
    def n_values(self) -> int:
        """Returns the number of non-padded values this nested ragged tensor has.

        Examples:
            >>> lengths = [torch.LongTensor([2, 3, 1]), torch.LongTensor([1, 2, 3, 4, 1, 1])]
            >>> bounds = [torch.LongTensor([2, 5, 6]), torch.LongTensor([1, 3, 6, 10, 11, 12])]
            >>> vals = torch.LongTensor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
            >>> x = RaggedTensor(lengths, bounds, vals)
            >>> x.n_values
            12
            >>> lengths = [torch.LongTensor([1, 2, 1])]
            >>> bounds = [torch.LongTensor([1, 3, 4])]
            >>> vals = torch.LongTensor([1, 2, 3, 4])
            >>> x = RaggedTensor(lengths, bounds, vals)
            >>> x.n_values
            4
        """
        return len(self.vals)

    def __len__(self) -> int:
        """Returns the length (dim 0 shape) of this ragged tensor.

        Examples:
            >>> lengths = [torch.LongTensor([2, 3, 1]), torch.LongTensor([1, 2, 3, 4, 1, 1])]
            >>> bounds = [torch.LongTensor([2, 5, 6]), torch.LongTensor([1, 3, 6, 10, 11, 12])]
            >>> vals = torch.LongTensor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
            >>> x = RaggedTensor(lengths, bounds, vals)
            >>> len(x)
            3
            >>> lengths = [torch.LongTensor([1, 2])]
            >>> bounds = [torch.LongTensor([1, 3])]
            >>> vals = torch.LongTensor([1, 2, 3])
            >>> x = RaggedTensor(lengths, bounds, vals)
            >>> len(x)
            2
        """
        return len(self.lengths[0])

    @property
    def shape(self) -> tuple[int]:
        """Returns the shape a dense view of this nested ragged tensor would have.

        Examples:
            >>> lengths = [torch.LongTensor([2, 3, 1]), torch.LongTensor([1, 2, 3, 4, 1, 1])]
            >>> bounds = [torch.LongTensor([2, 5, 6]), torch.LongTensor([1, 3, 6, 10, 11, 12])]
            >>> vals = torch.LongTensor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
            >>> x = RaggedTensor(lengths, bounds, vals)
            >>> x.shape
            (3, 3, 4)
            >>> lengths = [torch.LongTensor([1, 2, 1])]
            >>> bounds = [torch.LongTensor([1, 3, 4])]
            >>> vals = torch.LongTensor([1, 2, 3, 4])
            >>> x = RaggedTensor(lengths, bounds, vals)
            >>> x.shape
            (3, 2)
        """
        out_shape = [len(self.lengths[0])]
        for L in self.lengths:
            out_shape.append(L.max().item())
        return tuple(out_shape)

    @property
    def indices(self) -> list[tuple[int]]:
        """Returns the indices the values of this tensor would occupy in a dense view.

        Examples:
            >>> lengths = [torch.LongTensor([2, 3, 1]), torch.LongTensor([1, 2, 3, 4, 1, 1])]
            >>> bounds = [torch.LongTensor([2, 5, 6]), torch.LongTensor([1, 3, 6, 10, 11, 12])]
            >>> vals = torch.LongTensor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
            >>> x = RaggedTensor(lengths, bounds, vals)
            >>> x.indices # doctest: +NORMALIZE_WHITESPACE
            [(0, 0, 0), (0, 1, 0), (0, 1, 1),
             (1, 0, 0), (1, 0, 1), (1, 0, 2), (1, 1, 0), (1, 1, 1), (1, 1, 2), (1, 1, 3), (1, 2, 0),
             (2, 0, 0)]
        """
        indices = []
        running_idx = [0] + [0 for _ in range(self.n_dims - 1)]

        lengths = copy.deepcopy([[len(self.lengths)]] + self.lengths)

        slice_els_left = [L[0] for L in lengths]
        Ls_index = [0 for _ in lengths]
        for val_idx in range(self.n_values - 1):
            slice_idx = self.n_dims - 1

            indices.append(tuple(running_idx))

            while slice_els_left[slice_idx] == 1 and slice_idx != 0:
                running_idx[slice_idx] = 0
                Ls_index[slice_idx] = Ls_index[slice_idx] + 1
                try:
                    slice_els_left[slice_idx] = lengths[slice_idx][Ls_index[slice_idx]]
                except Exception as e:
                    raise ValueError(f"{slice_els_left}, {slice_idx}, {Ls_index}, {lengths}") from e
                slice_idx -= 1

            slice_els_left[slice_idx] = slice_els_left[slice_idx] - 1
            running_idx[slice_idx] = running_idx[slice_idx] + 1

        # The last element
        indices.append(tuple(running_idx))

        return indices

    def to_dense(self) -> torch.Tensor:
        """Returns a dense view of this nested ragged tensor.

        Examples:
            >>> lengths = [torch.LongTensor([2, 3, 1]), torch.LongTensor([1, 2, 3, 4, 1, 1])]
            >>> bounds = [torch.LongTensor([2, 5, 6]), torch.LongTensor([1, 3, 6, 10, 11, 12])]
            >>> vals = torch.LongTensor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
            >>> x = RaggedTensor(lengths, bounds, vals)
            >>> x.to_dense()
            tensor([[[ 1,  0,  0,  0],
                     [ 2,  3,  0,  0],
                     [ 0,  0,  0,  0]],
            <BLANKLINE>
                    [[ 4,  5,  6,  0],
                     [ 7,  8,  9, 10],
                     [11,  0,  0,  0]],
            <BLANKLINE>
                    [[12,  0,  0,  0],
                     [ 0,  0,  0,  0],
                     [ 0,  0,  0,  0]]])
            >>> lengths = [torch.LongTensor([1, 2, 1])]
            >>> bounds = [torch.LongTensor([1, 3, 4])]
            >>> vals = torch.LongTensor([1, 2, 3, 4])
            >>> x = RaggedTensor(lengths, bounds, vals)
            >>> x.to_dense()
            tensor([[1, 0],
                    [2, 3],
                    [4, 0]])
        """
        out = torch.zeros(self.shape, device=self.device, dtype=self.dtype)
        indices = tuple(zip(*self.indices))

        out[indices] = self.vals
        return out

    def _reset_offset(self):
        """Resets the stored bounds offset to zero and adjusts the bounds variable appropriately."""

        for i in range(self.n_dims - 1):
            self.bounds[i] = self.bounds[i] - self.bound_offsets[i]
            self.bound_offsets[i] = 0

    @classmethod
    def concatenate(cls, tensors: list) -> "RaggedTensor":
        """Concatenates the passed tensors along the first dimension.

        Args:
            tensors: The other tensors to concatenate with. Must be sequence like.

        Examples:
            >>> lengths1 = [torch.LongTensor([2, 3, 2]), torch.LongTensor([1, 2, 3, 4,  1,  1,  2])]
            >>> bounds1  = [torch.LongTensor([2, 5, 7]), torch.LongTensor([1, 3, 6, 10, 11, 12, 14])]
            >>> vals1 = torch.LongTensor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14])
            >>> x1 = RaggedTensor(lengths1, bounds1, vals1)
            >>> x1.to_dense()
            tensor([[[ 1,  0,  0,  0],
                     [ 2,  3,  0,  0],
                     [ 0,  0,  0,  0]],
            <BLANKLINE>
                    [[ 4,  5,  6,  0],
                     [ 7,  8,  9, 10],
                     [11,  0,  0,  0]],
            <BLANKLINE>
                    [[12,  0,  0,  0],
                     [13, 14,  0,  0],
                     [ 0,  0,  0,  0]]])
            >>> lengths2 = [torch.LongTensor([1, 4]), torch.LongTensor([1, 2, 2, 1, 2])]
            >>> bounds2  = [torch.LongTensor([1, 5]), torch.LongTensor([1, 3, 5, 6, 8])]
            >>> vals2 = torch.LongTensor([15, 16, 17, 18, 19, 20, 21, 22])
            >>> x2 = RaggedTensor(lengths2, bounds2, vals2)
            >>> x2.to_dense()
            tensor([[[15,  0],
                     [ 0,  0],
                     [ 0,  0],
                     [ 0,  0]],
            <BLANKLINE>
                    [[16, 17],
                     [18, 19],
                     [20,  0],
                     [21, 22]]])
            >>> RaggedTensor.concatenate([x1, x2]).to_dense()
            tensor([[[ 1,  0,  0,  0],
                     [ 2,  3,  0,  0],
                     [ 0,  0,  0,  0],
                     [ 0,  0,  0,  0]],
            <BLANKLINE>
                    [[ 4,  5,  6,  0],
                     [ 7,  8,  9, 10],
                     [11,  0,  0,  0],
                     [ 0,  0,  0,  0]],
            <BLANKLINE>
                    [[12,  0,  0,  0],
                     [13, 14,  0,  0],
                     [ 0,  0,  0,  0],
                     [ 0,  0,  0,  0]],
            <BLANKLINE>
                    [[15,  0,  0,  0],
                     [ 0,  0,  0,  0],
                     [ 0,  0,  0,  0],
                     [ 0,  0,  0,  0]],
            <BLANKLINE>
                    [[16, 17,  0,  0],
                     [18, 19,  0,  0],
                     [20,  0,  0,  0],
                     [21, 22,  0,  0]]])
            >>> RaggedTensor.concatenate([x1, x2])[2:].to_dense()
            tensor([[[12,  0],
                     [13, 14],
                     [ 0,  0],
                     [ 0,  0]],
            <BLANKLINE>
                    [[15,  0],
                     [ 0,  0],
                     [ 0,  0],
                     [ 0,  0]],
            <BLANKLINE>
                    [[16, 17],
                     [18, 19],
                     [20,  0],
                     [21, 22]]])
        """

        if len(tensors) == 1:
            return tensors[0]
        elif len(tensors) == 0:
            raise ValueError("Can't concatenate an empty list!")

        T1 = tensors[0]
        T2 = cls.concatenate(tensors[1:])

        if T1.n_dims != T2.n_dims:
            raise ValueError(f"Tensor dim inconsistent! {T1.n_dims} != {T2.n_dims}")

        T1._reset_offset()
        T2._reset_offset()

        new_lengths = [torch.cat((t1, t2), dim=0) for t1, t2 in zip(T1.lengths, T2.lengths)]
        new_bounds = [torch.cat((t1, t2 + t1[-1]), dim=0) for t1, t2 in zip(T1.bounds, T2.bounds)]
        new_vals = torch.cat((T1.vals, T2.vals), dim=0)
        return RaggedTensor(new_lengths, new_bounds, new_vals)

    @staticmethod
    def _get_lengths_and_values(
        T: NESTED_NUM_LIST, curr_lengths: list[list[int]] = None
    ) -> tuple[list[list[int]], list]:
        """Returns the lengths, bounds, and values of a nested list as flat, 1D tensors.

        Args:
            T: A nested list of values.
            curr_lengths: The running lengths of the nested list being constructed through recursion.
            curr_bound_diffs: The running bound differences of the nested list being constructed through
                recursion.

        Examples:
            >>> RaggedTensor._get_lengths_and_values([1, 2, 3])
            ([], [1, 2, 3])
            >>> RaggedTensor._get_lengths_and_values([[1, 2, 3], [3, 4]])
            ([[3, 2]], [1, 2, 3, 3, 4])
            >>> RaggedTensor._get_lengths_and_values([[[1, 2, 3], [3, 4]], [[3], [3, 2, 2], [3, 5]]])
            ([[2, 3], [3, 2, 1, 3, 2]], [1, 2, 3, 3, 4, 3, 3, 2, 2, 3, 5])
        """
        if curr_lengths is None:
            curr_lengths = []

        match T:
            case list() as Ts if all(isinstance(T, (list, torch.Tensor)) for T in Ts):
                return RaggedTensor._get_lengths_and_values(
                    list(itertools.chain.from_iterable(Ts)), curr_lengths + [[len(T) for T in Ts]]
                )
            case list() as Ts if all(isinstance(T, (int, float)) for T in Ts):
                return curr_lengths, Ts
            case torch.Tensor() as len(T.shape) == 1:
                return curr_lengths, T
            case _:
                raise TypeError(
                    f"T must be list of numbers or a nested list of lists. Got {type(T)}[{type(T[0])}]"
                )

    @classmethod
    def from_nested_list(cls, T: NESTED_NUM_LIST) -> "RaggedTensor":
        """Returns a RaggedTensor from a nested list of values.

        Args:
            T: A nested list of values.

        Examples:
            >>> RaggedTensor.from_nested_list([[1, 2, 3], [3, 4]])
            RaggedTensor([tensor([3, 2])], [tensor([3, 5])], tensor([1., 2., 3., 3., 4.]), tensor([0]))
            >>> RaggedTensor.from_nested_list([1, 2, 3])
            Traceback (most recent call last):
                ...
            ValueError: Passed values are 1D; a ragged tensor is not needed!
            >>> RaggedTensor.from_nested_list([[[1, 2, 3], [3, 4]], [[3], [3, 2, 2], [3, 5]]]).to_dense()
            tensor([[[1., 2., 3.],
                     [3., 4., 0.],
                     [0., 0., 0.]],
            <BLANKLINE>
                    [[3., 0., 0.],
                     [3., 2., 2.],
                     [3., 5., 0.]]])
        """

        lengths, vals = cls._get_lengths_and_values(T)
        if lengths == []:
            raise ValueError("Passed values are 1D; a ragged tensor is not needed!")

        lengths = [torch.LongTensor(L) for L in lengths]
        bounds = [torch.cumsum(L, dim=0) for L in lengths]
        vals = torch.Tensor(vals)

        return cls(lengths, bounds, vals)


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
                self.tensors[f"{dim_str}/{k}"] = torch.Tensor(T)
                continue

            ragged_T = RaggedTensor.from_nested_list(T)
            lengths, bounds, vals = ragged_T.lengths, ragged_T.bounds, ragged_T.vals

            for i, (L, B) in enumerate(zip(lengths, bounds)):
                dim_str = f"dim{i+1}"

                lengths_key = f"{dim_str}/lengths"
                if lengths_key in self.tensors and not torch.equal(self.tensors[lengths_key], L):
                    raise ValueError(f"Inconsistent lengths tensors! {self.tensors[lengths_key]} vs. {L}")

                self.tensors[lengths_key] = torch.Tensor(L)

                bounds_key = f"{dim_str}/bounds"
                if bounds_key in self.tensors and not torch.equal(self.tensors[bounds_key], B):
                    raise ValueError(f"Inconsistent bounds tensors! {self.tensors[bounds_key]} vs. {L}")

                self.tensors[bounds_key] = torch.Tensor(B)

            self.tensors[f"dim{ragged_T.n_dims - 1}/{k}"] = vals

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
            ...     "T": [[1, 2, 3], [4, 5]],
            ...     "id": [[[1, 2, 3], [3, 4], [1, 2]], [[3], [3, 2, 2]]],
            ...     "val": [[[1.0, 0.2, 0.], [3.1, 0.], [1., 2.2]], [[3], [3.3, 2., 0]]],
            ... })
            >>> with tempfile.TemporaryDirectory() as dirpath:
            ...     fp = Path(dirpath) / "tensors.pt"
            ...     J.save(fp)
            ...     J2 = JointNestedRaggedTensorDict.load(fp)
            >>> assert J.keys() == J2.keys()
            >>> for k in J.keys(): assert (J[k].to_dense() == J2[k].to_dense()).all()
        """
        return cls(load_file(fp), pre_raggedified=True)

    @property
    def max_n_dims(self) -> int:
        """Returns the maximum number of dimensions of any tensor in the dictionary.

        Examples:
            >>> J = JointNestedRaggedTensorDict({
            ...     "T": [[1, 2, 3], [4, 5]],
            ...     "id": [[[1, 2, 3], [3, 4], [1, 2]], [[3], [3, 2, 2]]],
            ...     "val": [[[1.0, 0.2, 0.], [3.1, 0.], [1., 2.2]], [[3], [3.3, 2., 0]]],
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
            ...     "T": [[1, 2, 3], [4, 5]],
            ...     "id": [[[1, 2, 3], [3, 4], [1, 2]], [[3], [3, 2, 2]]],
            ...     "val": [[[1.0, 0.2, 0.], [3.1, 0.], [1., 2.2]], [[3], [3.3, 2., 0]]],
            ... })
            >>> J.min_n_dims
            2
        """
        return min(int(k.split("/")[0][3:]) for k in self.tensors.keys()) + 1

    def keys(self) -> set[str]:
        """Returns the set of all keys for the stored tensors.

        Examples:
            >>> J = JointNestedRaggedTensorDict({
            ...     "T": [[1, 2, 3], [4, 5]],
            ...     "id": [[[1, 2, 3], [3, 4], [1, 2]], [[3], [3, 2, 2]]],
            ...     "val": [[[1.0, 0.2, 0.], [3.1, 0.], [1., 2.2]], [[3], [3.3, 2., 0]]],
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
            ...     "T": [[1, 2, 3], [4, 5]],
            ...     "id": [[[1, 2, 3], [3, 4], [1, 2]], [[3], [3, 2, 2]]],
            ...     "val": [[[1.0, 0.2, 0.], [3.1, 0.], [1., 2.2]], [[3], [3.3, 2., 0]]],
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

    def _get_key(self, key: str) -> RaggedTensor | torch.Tensor:
        """Returns a RaggedTensor corresponding to the given key.

        Examples:
            >>> J = JointNestedRaggedTensorDict({
            ...     "T": [[1, 2, 3], [4, 5]],
            ...     "id": [[[1, 2, 3], [3, 4], [1, 2]], [[3], [3, 2, 2]]],
            ...     "val": [[[1.0, 0.2, 0.], [3.1, 0.], [1., 2.2]], [[3], [3.3, 2., 0]]],
            ... })
            >>> J._get_key("T")
            RaggedTensor([tensor([3, 2])], [tensor([3, 5])], tensor([1., 2., 3., 4., 5.]), tensor([0]))
            >>> J._get_key("id") # doctest: +NORMALIZE_WHITESPACE
            RaggedTensor([tensor([3, 2]), tensor([3, 2, 2, 1, 3])],
                         [tensor([3, 5]), tensor([ 3,  5,  7,  8,  11])],
                         tensor([1., 2., 3., 3., 4., 1., 2., 3., 3., 2., 2.]),
                         tensor([0, 0]))
        """
        dim = self._get_dim(key)

        if dim == 0:
            # This is a naturally 1D tensor so we return it directly.
            return self.tensors[f"dim0/{key}"]
        else:
            lengths = [self.tensors[f"dim{i}/lengths"] for i in range(1, dim + 1)]
            bounds = [self.tensors[f"dim{i}/bounds"] for i in range(1, dim + 1)]
            vals = self.tensors[f"dim{dim}/{key}"]
            return RaggedTensor(lengths, bounds, vals)

    def keys_at_dim(self, dim: int) -> set[str]:
        """Returns the keys for tensors that are at that dimensionality.

        Examples:
            >>> J = JointNestedRaggedTensorDict({
            ...     "T": [[1, 2, 3], [4, 5]],
            ...     "id": [[[1, 2, 3], [3, 4], [1, 2]], [[3], [3, 2, 2]]],
            ...     "val": [[[1.0, 0.2, 0.], [3.1, 0.], [1., 2.2]], [[3], [3.3, 2., 0]]],
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
            ...     "T": [[1, 2, 3], [4, 5]],
            ...     "id": [[[1, 2, 3], [3, 4], [1, 2]], [[3], [3, 2, 2]]],
            ...     "val": [[[1.0, 0.2, 0.], [3.1, 0.], [1., 2.2]], [[3], [3.3, 2., 0]]],
            ... })
            >>> J["T"]
            RaggedTensor([tensor([3, 2])], [tensor([3, 5])], tensor([1., 2., 3., 4., 5.]), tensor([0]))
            >>> as_dense = J[0].to_dense()
            >>> assert as_dense.keys() == {'T', 'id', 'val'}
            >>> as_dense['T']
            tensor([1., 2., 3.])
            >>> as_dense['id']
            tensor([[1., 2., 3.],
                    [3., 4., 0.],
                    [1., 2., 0.]])
            >>> as_dense['val']
            tensor([[1.0000, 0.2000, 0.0000],
                    [3.1000, 0.0000, 0.0000],
                    [1.0000, 2.2000, 0.0000]])
            >>> as_dense = J[1].to_dense()
            >>> assert as_dense.keys() == {'T', 'id', 'val'}
            >>> as_dense['T']
            tensor([4., 5.])
            >>> as_dense['id']
            tensor([[3., 0., 0.],
                    [3., 2., 2.]])
            >>> as_dense['val']
            tensor([[3.0000, 0.0000, 0.0000],
                    [3.3000, 2.0000, 0.0000]])
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

                offset = 0
                out_tensors = {}
                for dim in range(self.max_n_dims):
                    if dim != 0:
                        L = self.tensors[f"dim{dim}/lengths"]
                        B = self.tensors[f"dim{dim}/bounds"]

                        out_tensors[f"dim{dim}/lengths"] = L[st_i:end_i]
                        out_tensors[f"dim{dim}/bounds"] = B[st_i:end_i] - offset

                        st_i = 0 if st_i == 0 else B[st_i - 1]
                        end_i = B[end_i - 1] if end_i is not None else B[-1]
                        offset += st_i

                    for key in self.keys_at_dim(dim):
                        out_tensors[f"dim{dim}/{key}"] = self.tensors[f"dim{dim}/{key}"][st_i:end_i]

                return JointNestedRaggedTensorDict(out_tensors, pre_raggedified=True)
            case _:
                raise TypeError(f"{type(idx)} not supported for RaggedTensor.__getitem__")

    def to_dense(self) -> dict[str, torch.Tensor]:
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
            tensor([[1., 2., 3.],
                    [4., 5., 0.]])
            >>> dense_dict['id']
            tensor([[[1., 2., 3.],
                     [3., 4., 0.],
                     [1., 2., 0.]],
            <BLANKLINE>
                    [[3., 0., 0.],
                     [3., 2., 2.],
                     [0., 0., 0.]]])
            >>> dense_dict['val']
            tensor([[[1.0000, 0.2000, 0.0000],
                     [3.1000, 0.0000, 0.0000],
                     [1.0000, 2.2000, 0.0000]],
            <BLANKLINE>
                    [[3.0000, 0.0000, 0.0000],
                     [3.3000, 2.0000, 0.0000],
                     [0.0000, 0.0000, 0.0000]]])
        """
        out = {}
        for key in self.keys():
            T = self._get_key(key)
            if isinstance(T, RaggedTensor):
                T = T.to_dense()
            out[key] = T

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
            tensor([[[1., 2., 3.],
                     [4., 5., 0.]]])
            >>> dense_dict['id']
            tensor([[[[1., 2., 3.],
                      [3., 4., 0.],
                      [1., 2., 0.]],
            <BLANKLINE>
                     [[3., 0., 0.],
                      [3., 2., 2.],
                      [0., 0., 0.]]]])
            >>> dense_dict['val']
            tensor([[[[1.0000, 0.2000, 0.0000],
                      [3.1000, 0.0000, 0.0000],
                      [1.0000, 2.2000, 0.0000]],
            <BLANKLINE>
                     [[3.0000, 0.0000, 0.0000],
                      [3.3000, 2.0000, 0.0000],
                      [0.0000, 0.0000, 0.0000]]]])
        """
        if dim != 0:
            raise ValueError(f"Only supports dim = 0 for now; got {dim}")
        if self.max_n_dims == 1:
            raise ValueError("Only supports max n_dims > 1 for now.")

        out_tensors = {}

        for dim in range(self.max_n_dims):
            new_dim = dim + 1
            if dim == 0:
                lengths = torch.LongTensor([len(self.tensors["dim1/lengths"])])
                bounds = torch.LongTensor([len(self.tensors["dim1/lengths"])])
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
        """Returns a dictionary from the stored keys to the dense shapes those tensors would take.

        Examples:
            >>> J = JointNestedRaggedTensorDict({
            ...     "T": [[1, 2, 3], [4, 5]],
            ...     "id": [[[1, 2, 3], [3, 4], [1, 2]], [[3], [3, 2, 2]]],
            ...     "val": [[[1.0, 0.2, 0.], [3.1, 0.], [1., 2.2]], [[3], [3.3, 2., 0]]],
            ... })
            >>> shape_dict = J.shape
            >>> assert shape_dict.keys() == {'T', 'id', 'val'}
            >>> shape_dict['T']
            (2, 3)
            >>> shape_dict['id']
            (2, 3, 3)
            >>> shape_dict['val']
            (2, 3, 3)
        """
        return {k: self._get_key(k).shape for k in self.keys()}

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
            tensor([[1., 2., 3.],
                    [4., 5., 0.]])
            >>> dense_dict['id']
            tensor([[[1., 2., 3.],
                     [3., 4., 0.],
                     [1., 2., 0.]],
            <BLANKLINE>
                    [[3., 0., 0.],
                     [3., 2., 2.],
                     [0., 0., 0.]]])
            >>> dense_dict['val']
            tensor([[[1.0000, 0.2000, 0.0000],
                     [3.1000, 0.0000, 0.0000],
                     [1.0000, 2.2000, 0.0000]],
            <BLANKLINE>
                    [[3.0000, 0.0000, 0.0000],
                     [3.3000, 2.0000, 0.0000],
                     [0.0000, 0.0000, 0.0000]]])
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
            tensor([[1., 2., 3., 0.],
                    [4., 5., 0., 0.],
                    [6., 7., 8., 9.]])
            >>> dense_dict['id']
            tensor([[[1., 2., 3.],
                     [3., 4., 0.],
                     [1., 2., 0.],
                     [0., 0., 0.]],
            <BLANKLINE>
                    [[3., 0., 0.],
                     [3., 2., 2.],
                     [0., 0., 0.],
                     [0., 0., 0.]],
            <BLANKLINE>
                    [[3., 0., 0.],
                     [3., 2., 2.],
                     [1., 0., 0.],
                     [1., 0., 0.]]])
            >>> dense_dict['val']
            tensor([[[1.0000, 0.2000, 0.0000],
                     [3.1000, 0.0000, 0.0000],
                     [1.0000, 2.2000, 0.0000],
                     [0.0000, 0.0000, 0.0000]],
            <BLANKLINE>
                    [[3.0000, 0.0000, 0.0000],
                     [3.3000, 2.0000, 0.0000],
                     [0.0000, 0.0000, 0.0000],
                     [0.0000, 0.0000, 0.0000]],
            <BLANKLINE>
                    [[3.0000, 0.0000, 0.0000],
                     [4.0000, 2.0000, 0.0000],
                     [0.0000, 0.0000, 0.0000],
                     [3.0000, 0.0000, 0.0000]]])
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

                out_tensors[lengths_key] = torch.cat((T1.tensors[lengths_key], T2.tensors[lengths_key]))
                out_tensors[bounds_key] = torch.cat(
                    (T1.tensors[bounds_key], T2.tensors[bounds_key] + T1.tensors[bounds_key][-1])
                )

            for key in T1.keys_at_dim(dim):
                out_tensors[f"dim{dim}/{key}"] = torch.cat(
                    (T1.tensors[f"dim{dim}/{key}"], T2.tensors[f"dim{dim}/{key}"])
                )
        return cls(out_tensors, pre_raggedified=True)
