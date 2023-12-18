# Nested Ragged Tensors

This package contains utilities for efficiently working with, saving, and loading, collections of connected
nested ragged tensors in PyTorch.

I make no guarantees about the absence of better solutions for the driving problem here; this package was
largely built on a personal whim for a problem I was facing in some code in some downtime at NeurIPS.

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
can be substantially slower to load and work with due to the lack of proportionate investment in working with
this kind of data rather than tensors in python.

In this package, we instead store these data with a collection of several tensors. First, all values (`pijk`)
are stored in a isngle, one-dimensional tensor. To re-construct the multi-dimensional structure, we also store
a list of tensors corresponding to the lengths of each grouping of values at each level of nesting. E.g., the
patient's have `torch.LongTensor([3, 2])` events each, and the events have `torch.LongTensor([2, 4, 1, 3])`
codes each. In this way, we store the data in a reconstructable format that preserves only the values observed
and the metadata needed to reconstruct the dense view in a set of flat tensors that we can work with
efficiently. To make these data easier to slice, we also store the cumulative sums of these lengths tensors
directly, such that it is easy to slice down to a specific patient or a specific patient's events.

These kinds of data can also be mutually dependent on one another, which provide another way to save data and
costs here. For example, if we don't just want to store a patient's diagnostic codes, but also want to store
the timestamps of the clinic visits at which these diagnoses were made as well as a priority ordering for the
assigned codes as of each visit, those two tensors will share the nesting structure as our diagnostic code
structure up to the first or up to the second level, respectively, meaning that we need only store the lengths
and cumulative length sums once to cover all three of these tensors.
