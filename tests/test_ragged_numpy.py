"""Unit tests for JointNestedRaggedTensorDict.

These complement the existing doctests with multi-step behavioral tests that
verify operations compose correctly — e.g., squeeze then concatenate, or
concatenate then re-use the original inputs.
"""

from __future__ import annotations

import numpy as np

from nested_ragged_tensors.ragged_numpy import JointNestedRaggedTensorDict


# ---------------------------------------------------------------------------
# squeeze() interoperability
# ---------------------------------------------------------------------------


class TestSqueezeInterop:
    """Squeezing a singleton outer dimension should produce an object that is
    interchangeable with one constructed directly from the equivalent flat data."""

    def test_squeezed_equals_directly_constructed(self):
        """squeeze(0) on a single-element outer dim should produce an object
        equal to one built directly from the unwrapped data."""
        J_wrapped = JointNestedRaggedTensorDict(
            {"T": [[1, 2]], "id": [[[10, 20], [30, 40]]]},
        )
        J_squeezed = J_wrapped.squeeze(0)

        J_direct = JointNestedRaggedTensorDict(
            {"T": [1, 2], "id": [[10, 20], [30, 40]]},
        )

        assert J_squeezed == J_direct, (
            "A squeezed tensor should be equal to a directly-constructed "
            "tensor with the same data"
        )

    def test_squeezed_to_dense_matches_direct(self):
        """The dense representation of a squeezed tensor should match what you
        get by constructing the equivalent object directly."""
        J_wrapped = JointNestedRaggedTensorDict(
            {"T": [[1, 2]], "id": [[[10, 20], [30, 40]]]},
        )
        dense_squeezed = J_wrapped.squeeze(0).to_dense()

        J_direct = JointNestedRaggedTensorDict(
            {"T": [1, 2], "id": [[10, 20], [30, 40]]},
        )
        dense_direct = J_direct.to_dense()

        assert dense_squeezed.keys() == dense_direct.keys(), (
            f"Key mismatch: {dense_squeezed.keys()} vs {dense_direct.keys()}"
        )
        for key in dense_direct:
            np.testing.assert_array_equal(
                dense_squeezed[key],
                dense_direct[key],
                err_msg=f"Dense mismatch on key '{key}'",
            )

    def test_concatenate_squeezed_with_direct(self):
        """A squeezed tensor and a directly-constructed tensor of the same
        logical structure should be concatenatable."""
        J1 = JointNestedRaggedTensorDict(
            {"T": [[1, 2, 3]]}, schema={"T": int}
        ).squeeze(0)

        J2 = JointNestedRaggedTensorDict({"T": [4, 5]}, schema={"T": int})

        result = JointNestedRaggedTensorDict.concatenate([J1, J2])
        dense = result.to_dense()
        np.testing.assert_array_equal(dense["T"], np.array([1, 2, 3, 4, 5]))

    def test_vstack_after_index_round_trips(self):
        """Indexing individual elements and vstacking them back together should
        reproduce the original — this is the core dataloader collation pattern."""
        J = JointNestedRaggedTensorDict({
            "T": [[1, 2, 3], [4, 5]],
            "id": [[[10, 20, 30], [40, 50], [60, 70]], [[80], [90, 100, 110]]],
        })

        items = [J[i] for i in range(len(J))]
        reconstructed = JointNestedRaggedTensorDict.vstack(items)

        dense_original = J.to_dense()
        dense_reconstructed = reconstructed.to_dense()

        for key in dense_original:
            np.testing.assert_array_equal(
                dense_original[key],
                dense_reconstructed[key],
                err_msg=f"Round-trip via index+vstack failed on key '{key}'",
            )


# ---------------------------------------------------------------------------
# concatenate() should not mutate its inputs
# ---------------------------------------------------------------------------


class TestConcatenatePreservesInputs:
    """After calling concatenate([J1, J2]), both J1 and J2 should still behave
    exactly as they did before the call."""

    def test_len_unchanged_after_concatenate(self):
        """len(J1) should be the same before and after concatenate."""
        J1 = JointNestedRaggedTensorDict(
            {"T": [[1, 2], [3]]}, schema={"T": int}
        )
        J2 = JointNestedRaggedTensorDict(
            {"T": [[4, 5, 6]]}, schema={"T": int}
        )

        len_before = len(J1)
        JointNestedRaggedTensorDict.concatenate([J1, J2])

        assert len(J1) == len_before, (
            f"len(J1) changed from {len_before} to {len(J1)} after concatenate()"
        )

    def test_to_dense_unchanged_after_concatenate(self):
        """J1.to_dense() should return the same arrays before and after concatenate."""
        J1 = JointNestedRaggedTensorDict(
            {"T": [[1, 2, 3], [4, 5]]}, schema={"T": int}
        )
        J2 = JointNestedRaggedTensorDict(
            {"T": [[6, 7]]}, schema={"T": int}
        )

        dense_before = {k: v.copy() for k, v in J1.to_dense().items()}
        JointNestedRaggedTensorDict.concatenate([J1, J2])
        dense_after = J1.to_dense()

        assert dense_before.keys() == dense_after.keys()
        for key in dense_before:
            np.testing.assert_array_equal(
                dense_before[key],
                dense_after[key],
                err_msg=f"J1.to_dense()['{key}'] changed after concatenate()",
            )

    def test_slicing_unchanged_after_concatenate(self):
        """Slicing J1 should return the same data before and after concatenate."""
        J1 = JointNestedRaggedTensorDict(
            {"T": [[1, 2, 3], [4, 5]]}, schema={"T": int}
        )
        J2 = JointNestedRaggedTensorDict(
            {"T": [[6, 7]]}, schema={"T": int}
        )

        slice_dense_before = J1[0].to_dense()
        JointNestedRaggedTensorDict.concatenate([J1, J2])
        slice_dense_after = J1[0].to_dense()

        for key in slice_dense_before:
            np.testing.assert_array_equal(
                slice_dense_before[key],
                slice_dense_after[key],
                err_msg=f"J1[0].to_dense()['{key}'] changed after concatenate()",
            )

    def test_equality_unchanged_after_concatenate(self):
        """J1 should still be equal to a fresh copy of itself after concatenate."""
        data = {"T": [[1, 2, 3], [4, 5]]}
        J1 = JointNestedRaggedTensorDict(data, schema={"T": int})
        J1_copy = JointNestedRaggedTensorDict(data, schema={"T": int})
        J2 = JointNestedRaggedTensorDict({"T": [[6, 7]]}, schema={"T": int})

        JointNestedRaggedTensorDict.concatenate([J1, J2])

        assert J1 == J1_copy, (
            "J1 is no longer equal to a fresh copy of its original data "
            "after being passed as the first argument to concatenate()"
        )

    def test_nested_data_unchanged_after_concatenate(self):
        """concatenate should not corrupt inputs with deeper nesting either."""
        data1 = {
            "T": [[1, 2], [3]],
            "id": [[[10, 20], [30]], [[40]]],
        }
        J1 = JointNestedRaggedTensorDict(data1, schema={"T": int, "id": int})
        J1_copy = JointNestedRaggedTensorDict(data1, schema={"T": int, "id": int})
        J2 = JointNestedRaggedTensorDict({
            "T": [[5, 6, 7]],
            "id": [[[50], [60, 70], [80]]],
        }, schema={"T": int, "id": int})

        JointNestedRaggedTensorDict.concatenate([J1, J2])

        assert J1 == J1_copy, (
            "J1 with nested data is no longer equal to a fresh copy after concatenate()"
        )

    def test_second_input_also_unchanged(self):
        """concatenate should not corrupt the second input either."""
        J1 = JointNestedRaggedTensorDict(
            {"T": [[1, 2, 3], [4, 5]]}, schema={"T": int}
        )
        data2 = {"T": [[6, 7]]}
        J2 = JointNestedRaggedTensorDict(data2, schema={"T": int})
        J2_copy = JointNestedRaggedTensorDict(data2, schema={"T": int})

        JointNestedRaggedTensorDict.concatenate([J1, J2])

        assert J2 == J2_copy, (
            "J2 is no longer equal to a fresh copy after concatenate()"
        )

    def test_repeated_concatenate_gives_correct_results(self):
        """Reusing J1 across two concatenate calls should produce two
        independent, correct results."""
        J1 = JointNestedRaggedTensorDict({"T": [[1, 2]]}, schema={"T": int})
        J2 = JointNestedRaggedTensorDict({"T": [[3]]}, schema={"T": int})
        J3 = JointNestedRaggedTensorDict({"T": [[4, 5, 6]]}, schema={"T": int})

        result_a = JointNestedRaggedTensorDict.concatenate([J1, J2])
        result_b = JointNestedRaggedTensorDict.concatenate([J1, J3])

        dense_a = result_a.to_dense()
        dense_b = result_b.to_dense()

        np.testing.assert_array_equal(dense_a["T"], np.array([[1, 2, 0], [3, 0, 0]]))
        np.testing.assert_array_equal(dense_b["T"], np.array([[1, 2, 0], [4, 5, 6]]))


# ---------------------------------------------------------------------------
# _get_dim_from_key_str
# ---------------------------------------------------------------------------


class TestGetDimFromKeyStr:
    """_get_dim_from_key_str should be callable from both class and instance
    context and return the correct dimension number."""

    def test_returns_correct_dim_on_class(self):
        assert JointNestedRaggedTensorDict._get_dim_from_key_str("dim0/T") == 0
        assert JointNestedRaggedTensorDict._get_dim_from_key_str("dim3/val") == 3

    def test_returns_correct_dim_on_instance(self):
        J = JointNestedRaggedTensorDict({"T": [1, 2, 3]})
        assert J._get_dim_from_key_str("dim1/bounds") == 1
