window.BENCHMARK_DATA = {
  "lastUpdate": 1726155466499,
  "repoUrl": "https://github.com/mmcdermott/nested_ragged_tensors",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "mmcdermott",
            "username": "mmcdermott"
          },
          "committer": {
            "name": "mmcdermott",
            "username": "mmcdermott"
          },
          "id": "b43cfe727310bac1dce6c6ade9ef9c21daff0c0e",
          "message": "Major revisions to the utility and generality of the benchmarking code.",
          "timestamp": "2024-09-11T17:12:56Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/29/commits/b43cfe727310bac1dce6c6ade9ef9c21daff0c0e"
        },
        "date": 1726155465698,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 27164656,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 0.6602849999999999,
            "unit": "seconds",
            "range": 0.006955874028486422,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 102464792,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 52477259,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 54278562,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 147720688,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 6.800015,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.092451,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.4335978031158447,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 3.6969778537750244,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.00009047040939331055,
            "unit": "seconds",
            "range": 0.000023532433624670375,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.03791009485721588,
            "unit": "seconds",
            "range": 0.0057666317357209,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 588,
            "unit": "bytes",
            "range": 46.769025777237424,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 15886.15,
            "unit": "bytes",
            "range": 1786.9159281223122,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 63280.6,
            "unit": "bytes",
            "range": 7147.663712489249,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 6882587.05,
            "unit": "bytes",
            "range": 2547512.934637053,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 27530084.2,
            "unit": "bytes",
            "range": 10190051.738548212,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 13765086.1,
            "unit": "bytes",
            "range": 5095025.869274106,
            "extra": "Count: 80"
          }
        ]
      }
    ]
  }
}