from dataclasses import dataclass
from typing import Annotated, Any

import numpy as np
from annotated_types import Ge, Gt

SAMPLE_DATASET_T = dict[str, np.ndarray | list]
NUM = int | float
POSITIVE_INT = Annotated[int, Ge(0)]
NON_NEGATIVE_NUM = Annotated[NUM, Gt(-1)]


@dataclass
class DiscreteGenerator:
    """A class to generate random numbers from a list of options with given frequencies.

    This is largely just for type safety and to ease specification of the various things that need to be
    sampled to generate a dataset.

    Attributes:
        X: The list of options to sample from.
        freq: The frequency of each option. If None, all options are equally weighted.

    Raises:
        ValueError: If the frequencies are not all positive, the lengths of X and freq are not equal, or no
            options are provided.

    Examples:
        >>> x = DiscreteGenerator([1, 2, 3], [1, 2, 3])
        >>> rng = np.random.default_rng(1)
        >>> x.rvs(10, rng)
        array([3, 3, 1, 3, 2, 2, 3, 2, 3, 1])
        >>> rng = np.random.default_rng(1)
        >>> x.rvs(10, rng)
        array([3, 3, 1, 3, 2, 2, 3, 2, 3, 1])
        >>> x.rvs(10, rng)
        array([3, 3, 2, 3, 2, 2, 1, 2, 2, 2])
        >>> rng = np.random.default_rng(1)
        >>> DiscreteGenerator([1, 2, 3]).rvs(10, rng)
        array([2, 3, 1, 3, 1, 2, 3, 2, 2, 1])
        >>> rng = np.random.default_rng(1)
        >>> DiscreteGenerator(['a', 'b', 'c']).rvs(10, rng)
        array(['b', 'c', 'a', 'c', 'a', 'b', 'c', 'b', 'b', 'a'], dtype='<U1')
        >>> DiscreteGenerator([1, 2], [-1, 1])
        Traceback (most recent call last):
            ...
        ValueError: All frequencies should be positive.
        >>> DiscreteGenerator([1, 2], [1, 2, 3])
        Traceback (most recent call last):
            ...
        ValueError: Equal numbers of frequencies and options must be provided. Got 3 and 2.
        >>> DiscreteGenerator([])
        Traceback (most recent call last):
            ...
        ValueError: At least one option should be provided. Got length 0.
    """

    X: list[Any]
    freq: list[NON_NEGATIVE_NUM] | None = None

    def __post_init__(self):
        if self.freq is None:
            self.freq = [1] * len(self.X)
        if not all(f > 0 for f in self.freq):
            raise ValueError("All frequencies should be positive.")
        if len(self.freq) != len(self.X):
            raise ValueError(
                "Equal numbers of frequencies and options must be provided. "
                f"Got {len(self.freq)} and {len(self.X)}."
            )
        if len(self.freq) == 0:
            raise ValueError("At least one option should be provided. Got length 0.")

    @property
    def p(self) -> np.ndarray:
        return np.array(self.freq) / sum(self.freq)

    def rvs(self, size: int, rng: np.random.Generator) -> np.ndarray:
        return rng.choice(self.X, size=size, p=self.p, replace=True)


class ProportionGenerator(DiscreteGenerator):
    """A class to generate random proportions.

    This merely applies type-checking to the DiscreteGenerator class.

    Attributes:
        X: The list of proportions to sample from.
        freq: The frequency of each option. If None, all options are equally weighted.

    Raises:
        ValueError: In addition to the base class errors, if any of the proportions are not numbers between 0
            and 1.

    Examples:
        >>> rng = np.random.default_rng(1)
        >>> ProportionGenerator([0, 1, 0.3]).rvs(10, rng)
        array([1. , 0.3, 0. , 0.3, 0. , 1. , 0.3, 1. , 1. , 0. ])
        >>> ProportionGenerator([1, 2])
        Traceback (most recent call last):
            ...
        ValueError: All elements should be numbers between 0 and 1.
        >>> ProportionGenerator(["a"])
        Traceback (most recent call last):
            ...
        ValueError: All elements should be numbers between 0 and 1.
    """

    def __post_init__(self):
        if not all(isinstance(x, (int, float)) and 0 <= x <= 1 for x in self.X):
            raise ValueError("All elements should be numbers between 0 and 1.")
        super().__post_init__()


class PositiveNumGenerator(DiscreteGenerator):
    """A class to generate random positive numbers.

    This merely applies type-checking to the DiscreteGenerator class.

    Attributes:
        X: The list of positive numbers to sample from.
        freq: The frequency of each option. If None, all options are equally weighted.

    Raises:
        ValueError: In addition to the base class errors, if any of the options are not positive numbers.

    Examples:
        >>> rng = np.random.default_rng(1)
        >>> PositiveNumGenerator([1, 2, 3.0]).rvs(10, rng)
        array([2., 3., 1., 3., 1., 2., 3., 2., 2., 1.])
        >>> PositiveNumGenerator([1, -1, 2])
        Traceback (most recent call last):
            ...
        ValueError: All elements should be positive numbers.
        >>> PositiveNumGenerator([0])
        Traceback (most recent call last):
            ...
        ValueError: All elements should be positive numbers.
        >>> PositiveNumGenerator(["a"])
        Traceback (most recent call last):
            ...
        ValueError: All elements should be positive numbers.
    """

    def __post_init__(self):
        if not all(isinstance(x, (int, float)) and x > 0 for x in self.X):
            raise ValueError("All elements should be positive numbers.")
        super().__post_init__()


class PositiveIntGenerator(PositiveNumGenerator):
    """A class to generate random positive integers.

    This merely applies type-checking to the DiscreteGenerator class.

    Attributes:
        X: The list of positive integers to sample from.
        freq: The frequency of each option. If None, all options are equally weighted.

    Raises:
        ValueError: In addition to the base class errors, if any of the options are not positive integers.

    Examples:
        >>> rng = np.random.default_rng(1)
        >>> PositiveIntGenerator([1, 2, 3]).rvs(10, rng)
        array([2, 3, 1, 3, 1, 2, 3, 2, 2, 1])
        >>> PositiveIntGenerator([0.1])
        Traceback (most recent call last):
            ...
        ValueError: All elements should be integers.
    """

    def __post_init__(self):
        if not all(isinstance(x, int) for x in self.X):
            raise ValueError("All elements should be integers.")
        super().__post_init__()


@dataclass
class DatasetGenerator:
    """A class to generate whole dataset objects in the form of static and dynamic measurements.

    Attributes:
        num_events_per_subject: A random variable for the number of events (unique timestamps) per subject.
        num_measurements_per_event: A random variable for the number of measurements (codes and values) per
            event.
        num_static_measurements_per_subject: A random variable for the number of static measurements per
            subject.
        frac_code_occurrences_with_value: A random variable for the proportion of occurrences of codes that
            have a value.
        time_between_events_per_subj: A random variable for the time between events for each subject.
        vocab_size: The number of unique codes.
        static_vocab_size: The number of unique static codes.

    Raises:
        ValueError: Various validation errors for the input parameters will raise value errors.

    Examples:
        >>> rng = np.random.default_rng(1)
        >>> kwargs = dict(
        ...     num_events_per_subject=PositiveIntGenerator([1, 2, 3]),
        ...     num_measurements_per_event=PositiveIntGenerator([1, 2, 3]),
        ...     num_static_measurements_per_subject=PositiveIntGenerator([2]),
        ...     frac_code_occurrences_with_value=ProportionGenerator([0, 0, 0.9]),
        ...     time_between_events_per_subj=PositiveNumGenerator([1, 2.5, 3]),
        ... )
        >>> DG = DatasetGenerator(vocab_size=16, static_vocab_size=4, **kwargs)
        >>> X = DG.rvs(3, rng)
        >>> sorted(list(X.keys()))
        ['dynamic_code', 'dynamic_value', 'static_code', 'timedelta']
        >>> assert len(set(len(v) for v in X.values())) == 1, "All lengths are equal"
        >>> X["static_code"] # doctest: +NORMALIZE_WHITESPACE
        [array([1, 2]),
         array([3, 3]),
         array([1, 3])]
        >>> X["timedelta"] # doctest: +NORMALIZE_WHITESPACE
        [array([4.75562864, 0.79979315, 4.50311233]),
         array([0.44675213, 1.03395199]),
         array([0.27679474, 0.79441353])]
        >>> X["dynamic_code"] # doctest: +NORMALIZE_WHITESPACE
        [[array([10]), array([4, 9, 4]), array([14, 12])],
         [array([9]), array([ 7, 14, 17])],
         [array([15]), array([14, 18])]]
        >>> X["dynamic_value"] # doctest: +NORMALIZE_WHITESPACE
        [[array([nan]), array([nan, nan, nan]), array([       nan, 0.89116695])],
         [array([nan]), array([        nan,         nan, -0.98218812])],
         [array([nan]), array([nan, nan])]]
        >>> X = DG.rvs(3, rng)
        >>> X["static_code"] # doctest: +NORMALIZE_WHITESPACE
        [array([0, 1]),
         array([0, 2]),
         array([1, 3])]
        >>> X["timedelta"] # doctest: +NORMALIZE_WHITESPACE
        [array([0.96372513]),
         array([1.1178155, 0.3845494, 1.0638919]),
         array([7.96575692])]
        >>> X["dynamic_code"] # doctest: +NORMALIZE_WHITESPACE
        [[array([ 9, 17,  7])],
         [array([11]), array([14, 11, 17]), array([10])],
         [array([13, 18])]]
        >>> X["dynamic_value"] # doctest: +NORMALIZE_WHITESPACE
        [[array([       nan, 0.14425709,        nan])],
         [array([nan]), array([ 2.54789782,         nan, -1.25069576]), array([nan])],
         [array([nan, nan])]]
        >>> DatasetGenerator(vocab_size="foo", static_vocab_size=4, **kwargs)
        Traceback (most recent call last):
            ...
        ValueError: vocab_size must be an integer.
        >>> DatasetGenerator(vocab_size=0, static_vocab_size=4, **kwargs)
        Traceback (most recent call last):
            ...
        ValueError: vocab_size must be positive.
        >>> DatasetGenerator(vocab_size=1, static_vocab_size=3.0, **kwargs)
        Traceback (most recent call last):
            ...
        ValueError: static_vocab_size must be an integer.
        >>> DatasetGenerator(vocab_size=1, static_vocab_size=-1, **kwargs)
        Traceback (most recent call last):
            ...
        ValueError: static_vocab_size must be positive.
    """

    num_events_per_subject: PositiveIntGenerator
    num_measurements_per_event: PositiveIntGenerator
    num_static_measurements_per_subject: PositiveIntGenerator
    frac_code_occurrences_with_value: ProportionGenerator
    time_between_events_per_subj: PositiveNumGenerator
    vocab_size: POSITIVE_INT
    static_vocab_size: POSITIVE_INT

    def __post_init__(self):
        if not isinstance(self.vocab_size, int):
            raise ValueError("vocab_size must be an integer.")
        if not isinstance(self.static_vocab_size, int):
            raise ValueError("static_vocab_size must be an integer.")
        if self.vocab_size <= 0:
            raise ValueError("vocab_size must be positive.")
        if self.static_vocab_size <= 0:
            raise ValueError("static_vocab_size must be positive.")

    def rvs(self, N_subjects: int, rng: np.random.Generator) -> SAMPLE_DATASET_T:
        avg_time_between_events_per_subj = self.time_between_events_per_subj.rvs(N_subjects, rng)
        n_static_measurements_per_subject = self.num_static_measurements_per_subject.rvs(N_subjects, rng)
        n_events_per_subject = self.num_events_per_subject.rvs(N_subjects, rng)
        n_measurements_per_event_per_subject = np.split(
            self.num_measurements_per_event.rvs(sum(n_events_per_subject), rng),
            np.cumsum(n_events_per_subject),
        )[:-1]

        dataset = {}
        dataset["static_code"] = []
        dataset["timedelta"] = []
        dataset["dynamic_code"] = []
        dataset["dynamic_value"] = []

        codes_value_props = self.frac_code_occurrences_with_value.rvs(self.vocab_size, rng)

        for n_static_measurements, n_measurements_per_event, avg_time_between_events in zip(
            n_static_measurements_per_subject,
            n_measurements_per_event_per_subject,
            avg_time_between_events_per_subj,
        ):
            dataset["static_code"].append(rng.choice(self.static_vocab_size, size=n_static_measurements))

            n_events = len(n_measurements_per_event)
            dataset["timedelta"].append(rng.exponential(avg_time_between_events, size=n_events))

            codes_per_event, values_per_event = [], []
            for n in n_measurements_per_event:
                codes_obs = rng.choice(self.vocab_size, size=n)
                value_obs_p = codes_value_props[codes_obs]
                value_obs = rng.random(size=n) < value_obs_p
                value_num = rng.normal(size=n)

                values = np.where(value_obs, value_num, np.nan)

                codes_per_event.append(codes_obs + self.static_vocab_size)
                values_per_event.append(values)
            dataset["dynamic_code"].append(codes_per_event)
            dataset["dynamic_value"].append(values_per_event)

        return dataset
