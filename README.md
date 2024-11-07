# Nested Ragged Tensors

[![python](https://img.shields.io/badge/-Python_3.10-blue?logo=python&logoColor=white)](https://github.com/pre-commit/pre-commit)
[![docs](https://readthedocs.org/projects/nested-ragged-tensors/badge/?version=latest&style=flat)](https://nested-ragged-tensors.readthedocs.io/)
[![tests](https://github.com/mmcdermott/nested_ragged_tensors/actions/workflows/tests.yaml/badge.svg)](https://github.com/mmcdermott/nested_ragged_tensors/actions/workflows/test.yaml)
[![codecov](https://codecov.io/gh/mmcdermott/nested_ragged_tensors/branch/main/graph/badge.svg?token=F9NYFEN5FX)](https://codecov.io/gh/mmcdermott/nested_ragged_tensors)
[![code-quality](https://github.com/mmcdermott/nested_ragged_tensors/actions/workflows/code-quality-main.yaml/badge.svg)](https://github.com/mmcdermott/nested_ragged_tensors/actions/workflows/code-quality-main.yaml)
[![license](https://img.shields.io/badge/License-MIT-green.svg?labelColor=gray)](https://github.com/mmcdermott/nested_ragged_tensors#license)
[![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/mmcdermott/nested_ragged_tensors/pulls)
[![contributors](https://img.shields.io/github/contributors/mmcdermott/nested_ragged_tensors.svg)](https://github.com/mmcdermott/nested_ragged_tensors/graphs/contributors)

Install with `pip install nested-ragged-tensors`

This package contains utilities for efficiently working with joint collections of nested ragged tensors.

Some terminology:

1. A "_tensor_" is a multi-dimensional array of values. Typically, tensors are stored as dense arrays, such
    that, when viewed as lists of lists of ... lists, all lists at a given level of nesting have the same
    length. E.g., a 2D tensor might be stored as `[[1, 2], [3, 4], [5, 6]]`.
2. A "_ragged_ tensor" is a tensor where the lists at a given level of nesting do _not_ all have the same
    length. E.g., a ragged 2D tensor might be stored as `[[1, 2], [3], [4, 5, 6]]`.
3. A "_nested_ ragged tensor" is a set of ragged tensors whose sub-list lengths are hierarchically
    connected. E.g., we might have a collection of patients, each of whom has a collection of clinic visits,
    each of which has a collection of laboratory test codes. In this case, while the number of visits and
    codes per visit are ragged, the codes are still "per-visit", and thus their second level of "raggedness"
    is identical to the first level of "raggedness" for the visits.
4. A collection of "_joint_ nested ragged tensors" is a set of nested ragged tensors that are further
    connected beyond the (shared) hierarchical connections, such that multiple tensors at a given level of
    the hierarchy further share the same lengths of their sublists. E.g., we might have a collection of
    patients, each of whom has a collection of clinic visits, each of which has a collection of laboratory
    test codes and numeric values. In this case, we have a collection of ragged tensors that are connected in
    a tree-like structure, where the number of visits and codes per visit can vary across patients and
    visits, respectively, but the number of codes is the same as the number of values for any given visit.

This package helps you work with joint nested ragged tensors in a way that is similar to how you might work
with dense tensors but dramatically more efficient in terms of memory, time, and disk usage than if you
actually densified the ragged tensors. In addition to the generic speed-ups obtained by using ragged tensors,
further (minor) speed-ups are obtained by the fact that the ragged offsets for these tensors can be shared
across levels of the hierarchy given the joint, nested nature of the tensors.

## Usage

### The `JointNestedRaggedTensorDict` Class

The main class in this package is `JointNestedRaggedTensorDict`, which is a dictionary-like object that stores
a collection of joint nested ragged tensors. You can create this from either (a) a dictionary of raw lists of
... lists of values, (b) a filepath storing a `JointNestedRaggedTensorDict` on disk in the HuggingFace
safetensors format, or (c) a pre-processed set of tensors (this is likely not useful, but is used internally).

```python
>>> from nested_ragged_tensors.ragged_numpy import JointNestedRaggedTensorDict, pprint_dense
>>> J = JointNestedRaggedTensorDict({
...     "T":   [[1,           2,        3       ], [4,   5          ], [6,  7]],
...     "id":  [[[1, 2,   3], [3,   4], [1, 2  ]], [[3], [3,   2, 2]], [[], [8,  9]]],
...     "val": [[[1, 0.2, 0], [3.1, 0], [1, 2.2]], [[3], [3.3, 2, 0]], [[], [1., 0]]],
... })

```

Here, `J` is a `JointNestedRaggedTensorDict` with three tensors: `T`, `id`, and `val`. To see how these data
would look were you to densify the data, you can call `to_dense()` on the object. Note that, just to make
things easier to read, we'll use the `pprint_dense` function to print the densified data. This is defined in
the `nested_ragged_tensors.ragged_numpy` module, and is not part of the `JointNestedRaggedTensorDict` object.
It does not modify the data, it merely prints things nicely (and replaces empty lines with a `'.'` character
so we can use [`doctest`](https://docs.python.org/3/library/doctest.html) to test the python code in this file
to ensure it stays correct without needing a bunch of `<BLANKLINE>`s).

```python
>>> pprint_dense(J.to_dense())
dim1/mask
[[ True  True  True]
 [ True  True False]
 [ True  True False]]
.
T
[[1 2 3]
 [4 5 0]
 [6 7 0]]
.
---
.
dim2/mask
[[[ True  True  True]
  [ True  True False]
  [ True  True False]]
.
 [[ True False False]
  [ True  True  True]
  [False False False]]
.
 [[False False False]
  [ True  True False]
  [False False False]]]
.
id
[[[1 2 3]
  [3 4 0]
  [1 2 0]]
.
 [[3 0 0]
  [3 2 2]
  [0 0 0]]
.
 [[0 0 0]
  [8 9 0]
  [0 0 0]]]
.
val
[[[1.  0.2 0. ]
  [3.1 0.  0. ]
  [1.  2.2 0. ]]
.
 [[3.  0.  0. ]
  [3.3 2.  0. ]
  [0.  0.  0. ]]
.
 [[0.  0.  0. ]
  [1.  0.  0. ]
  [0.  0.  0. ]]]

```

Note a few things:

1. The densified result contains a `mask` tensor, that indicates what values within a given level are true
    data elements and which are padding (`True` indicates the data exists, `False` indicates padding).
2. Padding is added to the right by default, but can be added to the left by setting `padding_side="left"`
    in the `to_dense` call. The padding value is `0`.
3. Each level is only densified to that level of nesting.

### Slicing and Operating

We can also perform certain operations on the `JointNestedRaggedTensorDict` object that act like operations on
the densified view, without actually densifying the data. For example:

```python
>>> len(J) # this is the first dimension of the shape of the densified data
3
>>> J1 = J[1]
>>> pprint_dense(J1.to_dense())
T
[4 5]
.
---
.
dim1/mask
[[ True False False]
 [ True  True  True]]
.
id
[[3 0 0]
 [3 2 2]]
.
val
[[3.  0.  0. ]
 [3.3 2.  0. ]]

```

Note that the `__getitem__` method on the `JointNestedRaggedTensorDict` object returns a new tensor that is
the _sliced_ version of the object on which it is called --- _this is not the same as accessing a key of the
dictionary or of doing a raw slice on the densified object_. In particular, note that the shape of the output
can differ, if we no longer need to include an empty dimension of padding, as in the example above for `val`
and `id`. Only valid slice keys are accepted; not strings:

```python
>>> J["T"]
Traceback (most recent call last):
    ...
TypeError: <class 'str'> not supported for JointNestedRaggedTensorDict slicing

```

In addition to slicing, we can perform a bevy of other operations on the data, such as concatenation,
stacking, squeezing, unsqueezing, and flattening over selected dimensions.

### Tensors on Disk

One of the most powerful aspects of this class is the ability to naturally work with these data from disk in a
fast, scalable fashion (powered by [HuggingFace Safetensors](https://huggingface.co/docs/safetensors/index)).
Tensors can be saved to disk via the `save` method, then used straight from disk, while only loading the data
that is needed in a lazy fashion, by constructing the object straight from the saved file path:

```python
>>> import tempfile
>>> from pathlib import Path
>>> with tempfile.NamedTemporaryFile(suffix="nrt") as f:
...     fp = Path(f.name)
...     J.save(fp)
...     J2 = JointNestedRaggedTensorDict(tensors_fp=fp)
...     J2 = J2[2,1:]
>>> pprint_dense(J2.to_dense())
T
[7]
.
---
.
dim1/mask
[[ True  True]]
.
id
[[8 9]]
.
val
[[1. 0.]]

```

In this call, only a fraction of the data stored in the file is actually loaded from disk to materialize the
final tensor (in this case, it is quite a large fraction, because our tensor is so small overall, but in a
larger tensor this is more significant).

## Performance

Performance over time on various aspects of an approximate pytorch dataset using this repo can be seen at
[https://mmcdermott.github.io/nested_ragged_tensors/dev/bench/](https://mmcdermott.github.io/nested_ragged_tensors/dev/bench/)

In older commits (see the GitHub history for more details), you could also run `python performance_tests/test_times.py` for a comparison across several strategies of using these data. A
re-introduction of this feature in a more user-friendly format is planned for the future, in concert with the
tracking over time of the performance of this package documented at the above link.
