# Nested Ragged Tensors

[![python](https://img.shields.io/badge/-Python_3.10-blue?logo=python&logoColor=white)](https://github.com/pre-commit/pre-commit)
[![tests](https://github.com/mmcdermott/nested_ragged_tensors/actions/workflows/tests.yaml/badge.svg)](https://github.com/mmcdermott/nested_ragged_tensors/actions/workflows/test.yaml)
[![codecov](https://codecov.io/gh/mmcdermott/nested_ragged_tensors/branch/main/graph/badge.svg?token=F9NYFEN5FX)](https://codecov.io/gh/mmcdermott/EventStreamML)
[![code-quality](https://github.com/mmcdermott/nested_ragged_tensors/actions/workflows/code-quality-main.yaml/badge.svg)](https://github.com/mmcdermott/nested_ragged_tensors/actions/workflows/code-quality-main.yaml)
[![license](https://img.shields.io/badge/License-MIT-green.svg?labelColor=gray)](https://github.com/mmcdermott/nested_ragged_tensors#license)
[![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/mmcdermott/nested_ragged_tensors/pulls)
[![contributors](https://img.shields.io/github/contributors/mmcdermott/nested_ragged_tensors.svg)](https://github.com/mmcdermott/nested_ragged_tensors/graphs/contributors)

Install with `pip install nested-ragged-tensors`

This package contains utilities for efficiently working with, saving, and loading, collections of connected
nested ragged tensors in numpy. For example:

```python
>>> from nested_ragged_tensors.ragged_numpy import *
>>> import tempfile
>>> J = JointNestedRaggedTensorDict({
...     "T":   [[1,           2,        3       ], [4,   5          ], [6,  7]],
...     "id":  [[[1, 2,   3], [3,   4], [1, 2  ]], [[3], [3,   2, 2]], [[], [8,  9]]],
...     "val": [[[1, 0.2, 0], [3.1, 0], [1, 2.2]], [[3], [3.3, 2, 0]], [[], [1., 0]]],
... }, schema={"T": int, "id": int, "val": float})
>>> len(J)
3
>>> as_dense = J[1].to_dense()
>>> assert as_dense.keys() == {'T', 'id', 'val', 'dim1/mask'}
>>> as_dense['T']
array([4, 5])
>>> as_dense['id']
array([[3, 0, 0],
       [3, 2, 2]])
>>> as_dense['val']
array([[3. , 0. , 0. ],
       [3.3, 2. , 0. ]])
>>> as_dense['dim1/mask']
array([[True, False, False],
       [True,  True,  True]])
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
>>> J = JointNestedRaggedTensorDict({
...     "T":   [1,                                      2],
...     "id":  [[[1,   2,   3],  [3,   4],  [1,  2]],   [[3], [3,   2, 2]]],
...     "val": [[[1.0, 0.2, 0.], [3.1, 0.], [1., 2.2]], [[3], [3.3, 2, 0]]],
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
>>> stacked = JointNestedRaggedTensorDict.vstack([J[0], J[1]])
>>> assert stacked.to_dense() == J.to_dense()
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
```

Numpy was chosen as it proved to be significantly faster to work with than was PyTorch. I make no guarantees
about the absence of better solutions for the driving problem here. I have not yet found any such better
solutions, but that does not imply they do not exist.

Tensors stored in this format on disk can also be partially loaded from disk using the `load_slice` method,
which relies on Hugging Face `safetensors` partial loading capability internally and is quite fast.

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

1. Store and load these tensors to/from disk with minimal disk space and store/load time.
2. Store these data in memory with minimal memory footprint.
3. Efficiently manipulate these tensors to facilitate rapidly slicing these tensors along the first axis
   and iterating through these tensors along the first axis.
4. Efficiently convert ragged sparse tensors to dense views.

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

First, we store the raw values in _flat lists of numpy tensors_ with keys prefixed by the dimensionality of
the nested subviews. E.g., our "valid" example above will be stored as

```python
data = {
    "dim0/tens_1": np.array([0, 1, 2]),
    "dim1/tens_2": [np.array([1, 2]), np.array([3]), np.array([4, 5, 6])],
    "dim2/tens_3": [
        np.array([]),
        np.array([3, 0]),
        np.array([3, 4, 5]),
        np.array([]),
        np.array([]),
        np.array([2]),
    ],
    "dim2/tens_4": [
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
various nesting levels that have been collapsed into the flat view. To do this, we store the set of relative
lengths of each level of the listing in separate, 1D tensors, like this:

```python
data = {
    "dim0/tens_1": np.array([0, 1, 2]),
    ...
    "dim2/tens_4": ...,
    "dim1/lengths": np.array([2, 1, 3]),
    "dim2/lengths": np.array([0, 2, 3, 0, 0, 1]),
}
```

We can make some of our later tasks easier if we also precompute the relative bounds for any sublist starting
at any level of nesting as well (which is just the cumulative sum of that levels respective lengths):

```python
data = {
    "dim0/tens_1": np.array([0, 1, 2]),
    ...
    "dim2/tens_4": ...,
    "dim1/lengths": np.array([2, 1, 3]),
    "dim1/bounds": np.array([2, 3, 6]),
    "dim2/lengths": np.array([0, 2, 3, 0, 0, 1]),
    "dim2/bounds": np.array([0, 2, 5, 0, 0, 6]),
}
```

These `bounds` tensors tell us that if we want to, for example, get the events corresponding to patients 1 and
2 (indexing from 0), then we need to take elements `3:6` of the respective `dim_1` list of subtensors to do
so.

Note that you can change the direction of padding (throughout all levels of nesting) when `to_dense` is called
by setting `padding_side` to either `"left"` or `"right"` (default is `"right"`).

### Computational Complexity Cost

Ultimately, if we have `N` patients with a maximum of `M` events and a maximum of `C` codes per event, the
dense storage would cost `O(N*M*C)`. If in that dataset there are only `V1 << N*M` observed events and `V2 << V1*C` observed codes, then this sparse format costs `O(N) + O(V1) + O(V2)` which is substantially less than
the dense storage cost, and it still has `O(1)` lookup speed to access an individual patient's data or an
individual set of events within a patient, though of course the constant factor on the lookup is larger.

### Reading and Writing to/from disk

Nested ragged tensor collections can be read from and written to disk with the `save` and `load` methods,
which leverage Hugging Face's `safetensors` library for internal manipulation.

## Performance Testing

Performance over time on various aspects of an approximate pytorch dataset using this repo can be seen at
[https://mmcdermott.github.io/nested_ragged_tensors/dev/bench/](https://mmcdermott.github.io/nested_ragged_tensors/dev/bench/)

In older commits (see the GitHub history for more details), you could also run `python performance_tests/test_times.py` for a comparison across several strategies of using these data. A
re-introduction of this feature in a more user-friendly format is planned for the future, in concert with the
tracking over time of the performance of this package documented at the above link.

```python
python performance_tests/test_times.py dataset_spec=mimic dataset_spec.num_patients=1250 dataset_spec.max_events_per_item=256 batch_size=64
...
...
{'dense': {'disk_size': '52.6 GB ± 18.3 GB (29.7 GB - 81.6 GB)',
           'sizes/dim_1': '128.1 kB ± 13.4 kB (128.1 kB - 131.2 kB)',
           'sizes/dim_2_1': '154.9 MB ± 42.5 MB (119.1 MB - 213.1 MB)',
           'sizes/dim_2_2': '154.9 MB ± 42.5 MB (119.1 MB - 213.1 MB)',
           'times/__getitem__': '21.3 μs ± 9.9 μs (18.4 μs - 28.4 μs)',
           'times/collate': '56.0 ms ± 13.9 ms (36.2 ms - 79.9 ms)',
           'total_iteration_time': '1.7 sec ± 273.8 ms (1.4 sec - 2.1 sec)'},
 'direct_pickle': {'disk_size': '186.3 MB ± 3.6 MB (181.7 MB - 191.7 MB)',
                   'sizes/dim_1': '128.1 kB ± 13.4 kB (128.1 kB - 131.2 kB)',
                   'sizes/dim_2_1': '62.7 MB ± 30.9 MB (36.2 MB - 123.7 MB)',
                   'sizes/dim_2_2': '62.7 MB ± 30.9 MB (36.2 MB - 123.7 MB)',
                   'times/__getitem__': '17.6 μs ± 14.9 μs (7.4 μs - 36.0 μs)',
                   'times/collate': '562.9 ms ± 73.2 ms (483.3 ms - 645.3 ms)',
                   'total_iteration_time': '11.6 sec ± 312.4 ms (11.1 sec - '
                                           '12.0 sec)'},
 'named_safetensors': {'disk_size': '215.2 MB ± 4.1 MB (209.9 MB - 221.5 MB)',
                       'sizes/dim_1': '128.1 kB ± 13.4 kB (128.1 kB - 131.2 '
                                      'kB)',
                       'sizes/dim_2_1': '62.7 MB ± 30.9 MB (36.2 MB - 123.7 '
                                        'MB)',
                       'sizes/dim_2_2': '62.7 MB ± 30.9 MB (36.2 MB - 123.7 '
                                        'MB)',
                       'times/__getitem__': '272.5 μs ± 150.4 μs (96.8 μs - '
                                            '503.1 μs)',
                       'times/collate': '592.6 ms ± 77.4 ms (506.8 ms - 679.0 '
                                        'ms)',
                       'total_iteration_time': '12.5 sec ± 291.2 ms (12.1 sec '
                                               '- 12.9 sec)'},
 'nested_ragged_tensors': {'disk_size': '173.0 MB ± 3.3 MB (168.8 MB - 178.1 '
                                        'MB)',
                           'sizes/dim1': '16.1 kB ± 1.7 kB (16.1 kB - 16.5 kB)',
                           'sizes/dim2': '7.8 MB ± 3.9 MB (4.5 MB - 15.5 MB)',
                           'sizes/dim_1': '128.1 kB ± 13.4 kB (128.1 kB - '
                                          '131.2 kB)',
                           'sizes/dim_2_1': '62.7 MB ± 30.9 MB (36.2 MB - '
                                            '123.7 MB)',
                           'sizes/dim_2_2': '62.7 MB ± 30.9 MB (36.2 MB - '
                                            '123.7 MB)',
                           'times/__getitem__': '115.1 μs ± 42.0 μs (89.9 μs - '
                                                '161.9 μs)',
                           'times/collate': '130.0 ms ± 36.9 ms (80.6 ms - '
                                            '191.0 ms)',
                           'total_iteration_time': '3.1 sec ± 226.0 ms (2.7 '
                                                   'sec - 3.4 sec)'}}
```

Doing so will generate output in the `performance_tests_outputs` folder with a log file detailing all of the
intermediate steps and timing as well as a raw and summarized json file of output timings.
