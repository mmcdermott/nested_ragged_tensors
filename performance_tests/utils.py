import itertools
import sys

import numpy as np
import torch


def get_ragged_tensor_shape(vals: list) -> tuple[int]:
    """Gets the shape of a ragged tensor.

    Examples:
        >>> get_ragged_tensor_shape([[1, 2, 3], [1, 2]])
        (2, 3)
        >>> get_ragged_tensor_shape([1, 2, 2, 3])
        (4,)
        >>> get_ragged_tensor_shape([[[1, 2, 3], [1]], [[1, 3], [1, 2, 3], [1, 2, 3]]])
        (2, 3, 3)
    """

    v = vals
    final_shape = [len(v)]
    while type(v[0]) is list or isinstance(v[0], np.ndarray):
        final_shape.append(max(len(e) for e in v))
        v = list(itertools.chain(*v))
    return tuple(final_shape)


def ragged_to_dense(vals: list, dtype=torch.long) -> torch.Tensor:
    """Converts a list of lists into a single tensor.

    Examples:
        >>> ragged_to_dense([[1, 2, 3], [1, 2]])
        tensor([[1, 2, 3],
                [1, 2, 0]])
        >>> ragged_to_dense([1, 2, 2, 3])
        tensor([1, 2, 2, 3])
        >>> ragged_to_dense([[[1, 2, 3], [1]], [[1, 3], [1, 2, 3], [1, 2, 3]]])
        tensor([[[1, 2, 3],
                 [1, 0, 0],
                 [0, 0, 0]],
        <BLANKLINE>
                [[1, 3, 0],
                 [1, 2, 3],
                 [1, 2, 3]]])
    """
    final_shape = get_ragged_tensor_shape(vals)
    if len(final_shape) == 1:
        try:
            return torch.tensor(vals)
        except ValueError as e:
            raise ValueError(f"Cannot convert ragged tensor {vals} to dense tensor") from e

    out = torch.zeros(final_shape, dtype=dtype)

    for i, e in enumerate(vals):
        if type(e[0]) is list or isinstance(e[0], np.ndarray):
            T = ragged_to_dense(e)
        else:
            T = torch.tensor(e, dtype=dtype)

        if len(T.shape) == 1:
            out[i, : len(T)] = T
        elif len(T.shape) == 2:
            out[i, : len(T), : T.shape[1]] = T
        elif len(T.shape) == 3:
            out[i, : len(T), : T.shape[1], : T.shape[2]] = T

    return out


def tensor_size(a: torch.Tensor) -> int:
    return sys.getsizeof(a) + torch.numel(a) * a.element_size()
