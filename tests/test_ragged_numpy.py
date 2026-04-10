"""Unit tests for JointNestedRaggedTensorDict.

These complement the existing doctests with multi-step behavioral tests that verify operations compose
correctly — e.g., squeeze then concatenate, or concatenate then re-use the original inputs.
"""

from __future__ import annotations

import numpy as np

from nested_ragged_tensors.ragged_numpy import JointNestedRaggedTensorDict

# ---------------------------------------------------------------------------
# squeeze() interoperability
# ---------------------------------------------------------------------------


class TestSqueezeInterop:
    """Squeezing a singleton outer dimension should produce an object that is interchangeable with one
    constructed directly from the equivalent flat data."""

    def test_squeezed_equals_directly_constructed(self):
        """Squeeze(0) on a single-element outer dim should produce an object equal to one built directly from
        the unwrapped data."""
        J_wrapped = JointNestedRaggedTensorDict(
            {"T": [[1, 2]], "id": [[[10, 20], [30, 40]]]},
        )
        J_squeezed = J_wrapped.squeeze(0)

        J_direct = JointNestedRaggedTensorDict(
            {"T": [1, 2], "id": [[10, 20], [30, 40]]},
        )

        assert J_squeezed == J_direct, (
            "A squeezed tensor should be equal to a directly-constructed " "tensor with the same data"
        )

    def test_squeezed_to_dense_matches_direct(self):
        """The dense representation of a squeezed tensor should match what you get by constructing the
        equivalent object directly."""
        J_wrapped = JointNestedRaggedTensorDict(
            {"T": [[1, 2]], "id": [[[10, 20], [30, 40]]]},
        )
        dense_squeezed = J_wrapped.squeeze(0).to_dense()

        J_direct = JointNestedRaggedTensorDict(
            {"T": [1, 2], "id": [[10, 20], [30, 40]]},
        )
        dense_direct = J_direct.to_dense()

        assert (
            dense_squeezed.keys() == dense_direct.keys()
        ), f"Key mismatch: {dense_squeezed.keys()} vs {dense_direct.keys()}"
        for key in dense_direct:
            np.testing.assert_array_equal(
                dense_squeezed[key],
                dense_direct[key],
                err_msg=f"Dense mismatch on key '{key}'",
            )

    def test_concatenate_squeezed_with_direct(self):
        """A squeezed tensor and a directly-constructed tensor of the same logical structure should be
        concatenatable."""
        J1 = JointNestedRaggedTensorDict({"T": [[1, 2, 3]]}, schema={"T": int}).squeeze(0)

        J2 = JointNestedRaggedTensorDict({"T": [4, 5]}, schema={"T": int})

        result = JointNestedRaggedTensorDict.concatenate([J1, J2])
        dense = result.to_dense()
        np.testing.assert_array_equal(dense["T"], np.array([1, 2, 3, 4, 5]))

    def test_vstack_after_index_round_trips(self):
        """Indexing individual elements and vstacking them back together should reproduce the original — this
        is the core dataloader collation pattern."""
        J = JointNestedRaggedTensorDict(
            {
                "T": [[1, 2, 3], [4, 5]],
                "id": [[[10, 20, 30], [40, 50], [60, 70]], [[80], [90, 100, 110]]],
            }
        )

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
# concatenate() correctness and return-value independence
# ---------------------------------------------------------------------------


class TestConcatenate:
    """Concatenate() should not modify its inputs and should return independent results."""

    def test_basic_correctness(self):
        """The concatenated result should contain all elements from both inputs."""
        J1 = JointNestedRaggedTensorDict({"T": [[1, 2, 3], [4, 5]]}, schema={"T": int})
        J2 = JointNestedRaggedTensorDict({"T": [[6, 7]]}, schema={"T": int})

        result = JointNestedRaggedTensorDict.concatenate([J1, J2])
        dense = result.to_dense()

        assert len(result) == 3
        np.testing.assert_array_equal(
            dense["T"],
            np.array([[1, 2, 3], [4, 5, 0], [6, 7, 0]]),
        )

    def test_basic_correctness_nested(self):
        """Concatenation should work correctly with deeper nesting."""
        J1 = JointNestedRaggedTensorDict(
            {
                "T": [[1, 2], [3]],
                "id": [[[10, 20], [30]], [[40]]],
            },
            schema={"T": int, "id": int},
        )
        J2 = JointNestedRaggedTensorDict(
            {
                "T": [[5, 6, 7]],
                "id": [[[50], [60, 70], [80]]],
            },
            schema={"T": int, "id": int},
        )

        result = JointNestedRaggedTensorDict.concatenate([J1, J2])
        assert len(result) == 3
        dense = result.to_dense()
        np.testing.assert_array_equal(dense["T"], np.array([[1, 2, 0], [3, 0, 0], [5, 6, 7]]))

    def test_second_input_not_modified(self):
        """Concatenate is documented as modifying the first input in place, but the second (and later) inputs
        should not be touched."""
        J1 = JointNestedRaggedTensorDict({"T": [[1, 2, 3], [4, 5]]}, schema={"T": int})
        data2 = {"T": [[6, 7]]}
        J2 = JointNestedRaggedTensorDict(data2, schema={"T": int})
        J2_copy = JointNestedRaggedTensorDict(data2, schema={"T": int})

        JointNestedRaggedTensorDict.concatenate([J1, J2])

        assert J2 == J2_copy, "J2 should not be modified by concatenate()"

    def test_return_value_independent_from_subsequent_concat(self):
        """If you call concatenate twice reusing J1, the first return value should not be corrupted by the
        second call."""
        J1 = JointNestedRaggedTensorDict({"T": [[1, 2]]}, schema={"T": int})
        J2 = JointNestedRaggedTensorDict({"T": [[3]]}, schema={"T": int})
        J3 = JointNestedRaggedTensorDict({"T": [[4, 5, 6]]}, schema={"T": int})

        result_a = JointNestedRaggedTensorDict.concatenate([J1, J2])
        result_b = JointNestedRaggedTensorDict.concatenate([J1, J3])

        dense_a = result_a.to_dense()
        dense_b = result_b.to_dense()

        # result_a should be [[1,2],[3]] regardless of the second concat call.
        np.testing.assert_array_equal(
            dense_a["T"],
            np.array([[1, 2], [3, 0]]),
            err_msg="result_a was corrupted by a subsequent concatenate call",
        )
        # result_b should be [[1,2],[4,5,6]] (J1 is not modified by the first concat).
        np.testing.assert_array_equal(
            dense_b["T"],
            np.array([[1, 2, 0], [4, 5, 6]]),
        )

    def test_return_value_independent_from_subsequent_concat_nested(self):
        """Same as above but with deeper nesting to exercise bounds sharing."""
        J1 = JointNestedRaggedTensorDict(
            {
                "id": [[[1, 2], [3]]],
            },
            schema={"id": int},
        )
        J2 = JointNestedRaggedTensorDict(
            {
                "id": [[[4]]],
            },
            schema={"id": int},
        )
        J3 = JointNestedRaggedTensorDict(
            {
                "id": [[[5, 6, 7], [8, 9]]],
            },
            schema={"id": int},
        )

        result_a = JointNestedRaggedTensorDict.concatenate([J1, J2])
        JointNestedRaggedTensorDict.concatenate([J1, J3])  # should not corrupt result_a

        # result_a should still reflect J1_original + J2, not J1_original + J2 + J3
        assert len(result_a) == 2, (
            f"result_a length should be 2, got {len(result_a)} " f"(corrupted by subsequent concatenate)"
        )


# ---------------------------------------------------------------------------
# _get_dim_from_key_str
# ---------------------------------------------------------------------------


class TestGetDimFromKeyStr:
    """_get_dim_from_key_str should be callable from both class and instance context and return the correct
    dimension number."""

    def test_returns_correct_dim_on_class(self):
        assert JointNestedRaggedTensorDict._get_dim_from_key_str("dim0/T") == 0
        assert JointNestedRaggedTensorDict._get_dim_from_key_str("dim3/val") == 3

    def test_returns_correct_dim_on_instance(self):
        J = JointNestedRaggedTensorDict({"T": [1, 2, 3]})
        assert J._get_dim_from_key_str("dim1/bounds") == 1
