from collections.abc import Generator, Sequence


def get_ragged_indices(
    num_values: int, nested_lengths: list[Sequence[int]]
) -> Generator[tuple[int], None, None]:
    """Yields indices that the first ``num_values`` values would occupy in slices of ``nested_lengths`` len.

    Args:
        num_values: The number of values to be sliced.
        nested_lengths: The nested ragged lengths of the slices.

    Examples:
            >>> list(get_ragged_indices(3, [])) # doctest: +NORMALIZE_WHITESPACE
            [(0,), (1,), (2,)]
            >>> list(get_ragged_indices(6, [[2, 3, 1]])) # doctest: +NORMALIZE_WHITESPACE
            [(0, 0), (0, 1),
             (1, 0), (1, 1), (1, 2),
             (2, 0)]
            >>> lengths = [[2, 3, 1], [1, 2, 3, 4, 1, 1]]
            >>> list(get_ragged_indices(12, lengths)) # doctest: +NORMALIZE_WHITESPACE
            [(0, 0, 0), (0, 1, 0), (0, 1, 1),
             (1, 0, 0), (1, 0, 1), (1, 0, 2), (1, 1, 0), (1, 1, 1), (1, 1, 2), (1, 1, 3), (1, 2, 0),
             (2, 0, 0)]
    """
    running_idx = [0 for _ in range(len(nested_lengths) + 1)]

    lengths = [[len(nested_lengths)]] + nested_lengths

    slice_els_left = [L[0] for L in lengths]
    Ls_index = [0 for _ in lengths]
    for _ in range(num_values - 1):
        slice_idx = len(lengths) - 1

        yield tuple(running_idx)

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
    yield tuple(running_idx)
