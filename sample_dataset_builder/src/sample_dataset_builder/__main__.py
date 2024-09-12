#!/usr/bin/env python

import logging

from . import CONFIG_YAML

logger = logging.getLogger(__name__)

import pickle
from pathlib import Path

import hydra
import numpy as np
from omegaconf import DictConfig


@hydra.main(config_path=str(CONFIG_YAML.parent), config_name=CONFIG_YAML.stem)
def main(cfg: DictConfig):
    """Generate a dataset of the specified size."""
    output_filepath = Path(cfg.output_filepath)

    if output_filepath.suffix != ".pkl":
        raise ValueError("Output file must be a pickle file.")
    if output_filepath.exists() and not cfg.do_overwrite:
        raise ValueError("Output file already exists.")

    output_filepath.parent.mkdir(parents=True, exist_ok=True)

    G = hydra.utils.instantiate(cfg.dataset_spec)
    rng = np.random.default_rng(cfg.seed)

    logger.info(f"Generating dataset with {cfg.N_subjects} subjects.")
    dataset = G.rvs(cfg.N_subjects, rng)

    logger.info(f"Saving dataset to {str(output_filepath.resolve())}.")
    with open(output_filepath, "wb") as f:
        pickle.dump(dataset, f)

    logger.info("Done.")


if __name__ == "__main__":
    main()
