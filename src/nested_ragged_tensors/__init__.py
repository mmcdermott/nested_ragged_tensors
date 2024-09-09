from importlib.metadata import PackageNotFoundError, version

__package_name__ = "nested_ragged_tensors"
try:
    __version__ = version(__package_name__)
except PackageNotFoundError:  # pragma: no cover
    __version__ = "unknown"
