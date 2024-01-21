# Nested Ragged Tensors

This package contains utilities for efficiently working with, saving, and loading, collections of connected
nested ragged tensors in numpy. Numpy was chosen as it proved to be significantly faster to work with than was
PyTorch. I make no guarantees about the absence of better solutions for the driving problem here. I have not
yet found any such better solutions, but that does not imply they do not exist.

## The Problem

The problem this package solves is how to work with tensors that contain nested collections of data of
different lengths that will eventually be padded to a dense shape. For example, suppose we are working with
patient level data in medicine. There are 2 patients total and patient 1 has 3 clinic visits while patient 2
has only 1 clinic visit. Patient 1's visits have 2, 4, and 1 diagnosis codes recorded, respectively, and
patient 2's visit has 3 codes recorded. If we were to record these diagnostic codes in a dense tensor, with
dimension 1 tracking which patient, dimension 2 tracking which visit, and dimension 3 tracking which code, our
data would look like this:

```python
tensor(
    [
        [[p111, p112, 0, 0], [p121, p122, p123, p124], [p131, 0, 0, 0]],
        [[p221, p222, p223, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
    ]
)
```

(here, `pijk` reflects code `k` for visit `j` for patient `i`, all 1 indexed).

When we record data densely like this, it is very inefficient. Here, to track the 10 total codes that actually
exist, we needed to store 24 numbers --- a significant amount of waste that impacts both disk storage, CPU
memory, GPU memory, and dataset iteration speed (through the increased memory cost).

If we try to avoid this waste by just storing our data as simple, python, plain old data types---e.g., as
nested list of lists: `[[[p111, p112], [p121, p122, p123, p124], [p131]], [[p221, p222, p223]]]`---this format
can be substantially slower to load from disk and slice with due to the lack of proportionate investment in
working with this kind of data rather than tensors in python.

Note that these kinds of data can also be mutually dependent on one another. For example, if we don't just
want to store a patient's diagnostic codes, but also want to store the timestamps of the clinic visits at
which these diagnoses were made as well as a priority ordering for the assigned codes as of each visit, those
two tensors will share the "ragged" shape as our diagnostic code structure up to the first or up to the
second level, respectively.

## This package

In this package, we aim to make it easy to do three things with data of this format:
1\. Store and load these tensors to/from disk with minimal disk space and store/load time.
2\. Store these data in memory with minimal memory footprint.
3\. Efficiently manipulate these tensors to facilitate rapidly slicing these tensors along the first axis
and iterating through these tensors along the first axis.
4\. Efficiently convert ragged sparse tensors to dense views.

To do this, we use the following data model. Suppose we have a set of these "ragged" tensors in a dictionary
stored as plain lists of lists (repeat "of lists" as necessary). This set of tensors must have the property
that for each level of nesting you descend into these lists, all tensors that extend to that level of nesting
in the set share the same lengths of the included sub-lists at each index. For example, the set

```python
data = {
    "tens_1": [0, 1, 2],
    "tens_2": [[1, 2], [3], [4, 5, 6]],
    "tens_3": [[[], [3, 0]], [[3, 4, 5]], [[], [], [2]]],
    "tens_4": [[[], [1, 2]], [[1, 8, 0]], [[], [], [1]]],
}
```

is valid because the nested lengths are `3` (for the first level of nesting), then `[2, 1, 3]` for the second,
then `[[0, 2], [3], [0, 0, 1]]` for the third across all four tensors in the batch.

In contrast,

```python
data = {
    "tens_1": [0, 1, 2],
    "tens_2": [[1, 2], [4, 5, 6]],
}
```

is invalid, because `'tens_1'` has an outer length of 3 but `'tens_2'` has an outer length of 2.

With this data model, we store data in the following manner:

### Storing values

First, we store the raw values in _flat lists of numpy tensors_. E.g., our "valid" example above will be
stored as

```python
data = {
    "tens_1": np.array([0, 1, 2]),
    "tens_2": [np.array([1, 2]), np.array([3]), np.array([4, 5, 6])],
    "tens_3": [
        np.array([]),
        np.array([3, 0]),
        np.array([3, 4, 5]),
        np.array([]),
        np.array([]),
        np.array([2]),
    ],
    "tens_4": [
        np.array([]),
        np.array([1, 2]),
        np.array([1, 8, 0]),
        np.array([]),
        np.array([]),
        np.array([1]),
    ],
}
```

This is motivated because (1) it permits easy slicing of the data to the target region, (2) storing the final
arrays as dense tensors permits us to efficiently produce dense views of the output, and (3) this storage
format allows efficient storage to/from disk (where data will be stored as flat tensors).

### Storing Metadata to Permit Efficient Usage

To efficiently process the view of data described above, we need to also know the relative lengths of the
various nesting levels that have been collapsed into the flat view.

In this package, we instead store these data (in memory) with a collection of several tensors. First, all
values (`pijk`) are stored in a plain list of one-dimensional tensors which correspond to the inner-most
layers of the respective nested tensors. To re-construct the multi-dimensional structure, we also store a list
of tensors corresponding to the lengths of each grouping of values at each level of nesting. E.g., the
patient's have `torch.LongTensor([3, 2])` events each, and the events have `torch.LongTensor([2, 4, 1, 3])`
codes each. In this way, we store the data in a reconstructable format that preserves only the values observed
and the metadata needed to (1) slice and (2) reconstruct the dense view in a set of flat tensors that we can
work with efficiently.
To make these data easier to slice, we also store the cumulative sums of these lengths tensors directly, such
that it is easy to slice down to a specific patient or a specific patient's events. Ultimately, if we have `N`
patients with a maximum of `M` events and a maximum of `C` codes per event, the dense storage would cost
`O(N*M*C)`. If in that dataset there are only `V1 << N*M` observed events and `V2 << V1*C` observed codes,
then this sparse format costs `O(N) + O(V1) + O(V2)` which is substantially less than the dense storage cost,
and it still has `O(1)` lookup speed to access an individual patient's data or an individual set of events
within a patient, though of course the constant factor on the lookup is larger.

## Performance Testing
Run `python performance_tests/test_times.py` for a comparison across several strategies of using these data.
