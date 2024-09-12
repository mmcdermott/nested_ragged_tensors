# Sample Dataset Builder

Builds a sample MEDS dataset in the form of a dictionary of time deltas between events (as floats), code
vocabulary indices per time delta, numeric values (or NaNs) per time delta, and static codes per subject.

To install, clone this directory and run `pip install sample_dataset_builder/` from the root directory of the
repository (one directory up from where this file is located).

After installation, a dataset can be generated using

```bash
gen_sample_MEDS_data dataset_spec=mimic N_subjects=500
```

You can use `dataset_spec=sample` for a dataset with fewer events per subject or `dataset_spec=mimic` for a
MIMIC-IV MEDS cohort like dataset. Add `do_overwrite=True` to overwrite an existing dataset. You can see the
full configuration options by running `gen_sample_MEDS_data --help`.
