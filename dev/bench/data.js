window.BENCHMARK_DATA = {
  "lastUpdate": 1776509463123,
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
      },
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
          "id": "448d1979fe185ebd746ee65ef54ec7443bfe26f0",
          "message": "Major revisions to the utility and generality of the benchmarking code.",
          "timestamp": "2024-09-11T17:12:56Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/29/commits/448d1979fe185ebd746ee65ef54ec7443bfe26f0"
        },
        "date": 1726155655487,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 27164656,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 0.6577531999999999,
            "unit": "seconds",
            "range": 0.004094995750924405,
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
            "value": 147475152,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 6.61729,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.090435,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.42792510986328125,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 3.7188827991485596,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.00008980684280395508,
            "unit": "seconds",
            "range": 0.000023894844542305764,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.03779172599315643,
            "unit": "seconds",
            "range": 0.005636893677929987,
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
            "value": 6751105.45,
            "unit": "bytes",
            "range": 2460072.763886817,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 13502122.9,
            "unit": "bytes",
            "range": 4920145.527773634,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 27004157.8,
            "unit": "bytes",
            "range": 9840291.055547267,
            "extra": "Count: 80"
          }
        ]
      },
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
          "id": "0f1dbb5e8236a9d83e13ea933d5f2cc66f60e954",
          "message": "Major revisions to the utility and generality of the benchmarking code.",
          "timestamp": "2024-09-11T17:12:56Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/29/commits/0f1dbb5e8236a9d83e13ea933d5f2cc66f60e954"
        },
        "date": 1726156000677,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 27164656,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 0.6662082,
            "unit": "seconds",
            "range": 0.0066806029443390955,
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
            "value": 152865488,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 6.679679,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.092128,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.42759013175964355,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 3.735602855682373,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.00009235372543334961,
            "unit": "seconds",
            "range": 0.00002561325179122908,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.038206851482391356,
            "unit": "seconds",
            "range": 0.005606816969068995,
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
            "value": 6789403.05,
            "unit": "bytes",
            "range": 2505556.934694267,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 13578718.1,
            "unit": "bytes",
            "range": 5011113.869388534,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 27157348.2,
            "unit": "bytes",
            "range": 10022227.738777068,
            "extra": "Count: 80"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mattmcdermott8@gmail.com",
            "name": "Matthew McDermott",
            "username": "mmcdermott"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1b41e1bfe90b7042c1f8a61652cc8140acb8b7b0",
          "message": "Merge pull request #29 from mmcdermott/23_repeatable_benchmark\n\nMajor revisions to the utility and generality of the benchmarking code.",
          "timestamp": "2024-09-12T11:52:33-04:00",
          "tree_id": "56fc798ca88f48c088220bb7323f9ece753d5130",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/commit/1b41e1bfe90b7042c1f8a61652cc8140acb8b7b0"
        },
        "date": 1726157146958,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 27164656,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 0.6431542,
            "unit": "seconds",
            "range": 0.008629262871182113,
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
            "value": 152865488,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 6.791857,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.084605,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.43651747703552246,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 3.6110124588012695,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.00008960542678833008,
            "unit": "seconds",
            "range": 0.000022627486654070935,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.036908313632011414,
            "unit": "seconds",
            "range": 0.005503413608398913,
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
            "value": 6843265.45,
            "unit": "bytes",
            "range": 2531978.464219351,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 27372797.8,
            "unit": "bytes",
            "range": 10127913.856877403,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 13686442.9,
            "unit": "bytes",
            "range": 5063956.928438702,
            "extra": "Count: 80"
          }
        ]
      },
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
          "id": "b8df7c0211509541fb1088fbe3a9d0048e75ca53",
          "message": "Made splitting only happen at densification.",
          "timestamp": "2024-09-12T15:52:40Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/30/commits/b8df7c0211509541fb1088fbe3a9d0048e75ca53"
        },
        "date": 1726161618705,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 27164656,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.117218,
            "unit": "seconds",
            "range": 0.015901739983409813,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 258116928,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 27149493,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 54278562,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 149175672,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.485932,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.032811,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.00993204116821289,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 6.3527445793151855,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0000877939224243164,
            "unit": "seconds",
            "range": 0.00002211678618776949,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.06657310724258422,
            "unit": "seconds",
            "range": 0.010101045138422773,
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
            "value": 6607131.05,
            "unit": "bytes",
            "range": 2398501.25440796,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 13214174.1,
            "unit": "bytes",
            "range": 4797002.50881592,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 26428260.2,
            "unit": "bytes",
            "range": 9594005.01763184,
            "extra": "Count: 80"
          }
        ]
      },
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
          "id": "b8df7c0211509541fb1088fbe3a9d0048e75ca53",
          "message": "Made splitting only happen at densification.",
          "timestamp": "2024-09-12T15:52:40Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/30/commits/b8df7c0211509541fb1088fbe3a9d0048e75ca53"
        },
        "date": 1726161829477,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 27164656,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.0885408,
            "unit": "seconds",
            "range": 0.010151599514346982,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 258116928,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 27149493,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 54278562,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 154563626,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.47528,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.031937,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.009908199310302734,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 6.202221393585205,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.00008512210845947266,
            "unit": "seconds",
            "range": 0.000019630488768294603,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.06488552093505859,
            "unit": "seconds",
            "range": 0.00961071520103875,
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
            "value": 6897947.05,
            "unit": "bytes",
            "range": 2556388.3851566743,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 27591524.2,
            "unit": "bytes",
            "range": 10225553.540626697,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 13795806.1,
            "unit": "bytes",
            "range": 5112776.770313349,
            "extra": "Count: 80"
          }
        ]
      },
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
          "id": "5d320553ccceaef293fb6f0c2bc47173bcf57100",
          "message": "Made splitting only happen at densification.",
          "timestamp": "2024-09-12T15:52:40Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/30/commits/5d320553ccceaef293fb6f0c2bc47173bcf57100"
        },
        "date": 1726162011928,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 27164656,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.1145821999999999,
            "unit": "seconds",
            "range": 0.011448513427525614,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 258116928,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 27149493,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 54278562,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 149428094,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.476395,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.032421,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.00930476188659668,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 6.344056606292725,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.00008595895767211914,
            "unit": "seconds",
            "range": 0.00002121824272298433,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.06646126806735993,
            "unit": "seconds",
            "range": 0.009690038738099517,
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
            "value": 6818484.65,
            "unit": "bytes",
            "range": 2505485.104376583,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 13636881.3,
            "unit": "bytes",
            "range": 5010970.208753166,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 27273674.6,
            "unit": "bytes",
            "range": 10021940.417506332,
            "extra": "Count: 80"
          }
        ]
      },
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
          "id": "52b11e51550931b15a06c2292ae865d965eba1dc",
          "message": "Made splitting only happen at densification.",
          "timestamp": "2024-09-12T15:52:40Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/30/commits/52b11e51550931b15a06c2292ae865d965eba1dc"
        },
        "date": 1726162824208,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 27164656,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 0.7839799999999999,
            "unit": "seconds",
            "range": 0.014136127970563742,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 258116928,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 27149493,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 54278562,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 154392714,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.436127,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.031801,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.009555578231811523,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 4.326756715774536,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.00008682270050048828,
            "unit": "seconds",
            "range": 0.00002263089616669326,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.04584051370620727,
            "unit": "seconds",
            "range": 0.006372582631777364,
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
            "value": 6882996.65,
            "unit": "bytes",
            "range": 2540333.3169962936,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 27531722.6,
            "unit": "bytes",
            "range": 10161333.267985174,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 13765905.3,
            "unit": "bytes",
            "range": 5080666.633992587,
            "extra": "Count: 80"
          }
        ]
      },
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
          "id": "b5f3c4487f6c24c78d85f27de1f1be5dd53d0198",
          "message": "Made splitting only happen at densification.",
          "timestamp": "2024-09-12T15:52:40Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/30/commits/b5f3c4487f6c24c78d85f27de1f1be5dd53d0198"
        },
        "date": 1726165892614,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 27164656,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 4.8478464,
            "unit": "seconds",
            "range": 0.06205743328811196,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 258116928,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 27149493,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 54278562,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 151395454,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.459424,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.031815,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.009690284729003906,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 24.650482177734375,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.00008818016052246094,
            "unit": "seconds",
            "range": 0.000024337354215544954,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.299677312374115,
            "unit": "seconds",
            "range": 0.060153639143884365,
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
            "value": 6814388.65,
            "unit": "bytes",
            "range": 2508142.83076756,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 27257290.6,
            "unit": "bytes",
            "range": 10032571.32307024,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 13628689.3,
            "unit": "bytes",
            "range": 5016285.66153512,
            "extra": "Count: 80"
          }
        ]
      },
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
          "id": "b5f3c4487f6c24c78d85f27de1f1be5dd53d0198",
          "message": "Made splitting only happen at densification.",
          "timestamp": "2024-09-12T15:52:40Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/30/commits/b5f3c4487f6c24c78d85f27de1f1be5dd53d0198"
        },
        "date": 1726166524169,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 27164656,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 4.4177146,
            "unit": "seconds",
            "range": 0.038096785675393145,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 258116928,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 27149493,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 54278562,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 151934574,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.410513,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.031061,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.008982419967651367,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 22.49971318244934,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.00008795852661132813,
            "unit": "seconds",
            "range": 0.000024444138667887216,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.27284621000289916,
            "unit": "seconds",
            "range": 0.048189608585938244,
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
            "value": 6798414.25,
            "unit": "bytes",
            "range": 2493515.0312510193,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 13596740.5,
            "unit": "bytes",
            "range": 4987030.062502039,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 27193393,
            "unit": "bytes",
            "range": 9974060.125004077,
            "extra": "Count: 80"
          }
        ]
      },
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
          "id": "f687e9e2c8edcfd1b7a1d9d0eaf01da54da17ea3",
          "message": "Made splitting only happen at densification.",
          "timestamp": "2024-09-12T15:52:40Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/30/commits/f687e9e2c8edcfd1b7a1d9d0eaf01da54da17ea3"
        },
        "date": 1726166816957,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 27164656,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 4.6719712,
            "unit": "seconds",
            "range": 0.051171805935509816,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 258116928,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 27149493,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 54278562,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 156525050,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.396515,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.031477,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.010481595993041992,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 23.781798362731934,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.00008729467391967773,
            "unit": "seconds",
            "range": 0.000022634831434268097,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.2887433856725693,
            "unit": "seconds",
            "range": 0.06012233389595973,
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
            "value": 6681063.85,
            "unit": "bytes",
            "range": 2441093.1465039244,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 26723991.4,
            "unit": "bytes",
            "range": 9764372.586015698,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 13362039.7,
            "unit": "bytes",
            "range": 4882186.293007849,
            "extra": "Count: 80"
          }
        ]
      },
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
          "id": "f2e0466beeeb03ba476903d3dc020d229e3f6425",
          "message": "Made splitting only happen at densification.",
          "timestamp": "2024-09-12T15:52:40Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/30/commits/f2e0466beeeb03ba476903d3dc020d229e3f6425"
        },
        "date": 1726167126881,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 27164656,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 0.7833302,
            "unit": "seconds",
            "range": 0.009280003593751236,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 258116928,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 27149493,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 54278562,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 149247120,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.494141,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.032,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.009792327880859375,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 4.370981454849243,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.00008727617263793945,
            "unit": "seconds",
            "range": 0.00002168420798459285,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.0457333505153656,
            "unit": "seconds",
            "range": 0.006682786923409701,
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
            "value": 6744142.25,
            "unit": "bytes",
            "range": 2491015.7742212466,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 13488196.5,
            "unit": "bytes",
            "range": 4982031.548442493,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 26976305,
            "unit": "bytes",
            "range": 9964063.096884986,
            "extra": "Count: 80"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mattmcdermott8@gmail.com",
            "name": "Matthew McDermott",
            "username": "mmcdermott"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3f0ed977558158c95631a81f46a5655459fe0198",
          "message": "Merge pull request #30 from mmcdermott/21_split_later\n\nMade splitting only happen at densification.",
          "timestamp": "2024-09-12T15:00:19-04:00",
          "tree_id": "bc3e47374e91d883b908722fc059800f3be9dfb2",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/commit/3f0ed977558158c95631a81f46a5655459fe0198"
        },
        "date": 1726168296960,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 27164656,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 0.758652,
            "unit": "seconds",
            "range": 0.005045795477413006,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 258116928,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 27149493,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 54278562,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 150019658,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.505347,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.031736,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.010990142822265625,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 4.198720693588257,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.00008674221038818359,
            "unit": "seconds",
            "range": 0.000020344584596845952,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.04418715834617615,
            "unit": "seconds",
            "range": 0.006615394937985937,
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
            "value": 6955700.65,
            "unit": "bytes",
            "range": 2579780.868493414,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 27822538.6,
            "unit": "bytes",
            "range": 10319123.473973656,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 13911313.3,
            "unit": "bytes",
            "range": 5159561.736986828,
            "extra": "Count: 80"
          }
        ]
      },
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
          "id": "57b3bb73fc21fdf37446cd45bf5334df113f7abb",
          "message": "Making tensors from file paths or dictionaries share file paths for ease of development.",
          "timestamp": "2024-09-15T19:34:27Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/32/commits/57b3bb73fc21fdf37446cd45bf5334df113f7abb"
        },
        "date": 1726948487649,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 27164656,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.0921022,
            "unit": "seconds",
            "range": 0.011034467078193869,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 257068352,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 27149493,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 27164619,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 150889242,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.216564,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.0234,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0012700557708740234,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 6.194907188415527,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0005851689338684082,
            "unit": "seconds",
            "range": 0.0000773038922325768,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.04932686984539032,
            "unit": "seconds",
            "range": 0.007464325065432299,
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
            "value": 6744347.05,
            "unit": "bytes",
            "range": 2470379.0517869,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 26977124.2,
            "unit": "bytes",
            "range": 9881516.2071476,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 13488606.1,
            "unit": "bytes",
            "range": 4940758.1035738,
            "extra": "Count: 80"
          }
        ]
      },
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
          "id": "f67ea3526af91ff88e77160226f09ebf9ce11b43",
          "message": "Making tensors from file paths or dictionaries share file paths for ease of development.",
          "timestamp": "2024-09-15T19:34:27Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/32/commits/f67ea3526af91ff88e77160226f09ebf9ce11b43"
        },
        "date": 1726949333966,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 27164656,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.1039276,
            "unit": "seconds",
            "range": 0.010091499754740791,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259165504,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 27149493,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 27164619,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 156283274,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.349456,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.024263,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.00115966796875,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 6.25528883934021,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0006010157585144043,
            "unit": "seconds",
            "range": 0.00030766168062867043,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.049584072828292844,
            "unit": "seconds",
            "range": 0.007248634151692684,
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
            "value": 6827086.25,
            "unit": "bytes",
            "range": 2522274.34187568,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 13654084.5,
            "unit": "bytes",
            "range": 5044548.68375136,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 27308081,
            "unit": "bytes",
            "range": 10089097.36750272,
            "extra": "Count: 80"
          }
        ]
      },
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
          "id": "97684e23cd7af0fc9b0cdc16ef5f5a36de7caaa1",
          "message": "Making tensors from file paths or dictionaries share file paths for ease of development.",
          "timestamp": "2024-09-15T19:34:27Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/32/commits/97684e23cd7af0fc9b0cdc16ef5f5a36de7caaa1"
        },
        "date": 1726949984859,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 27164656,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.0731272,
            "unit": "seconds",
            "range": 0.006400544640894625,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 258116928,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 27149493,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 27164619,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 156281534,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.172678,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.023759,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0012302398681640625,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 6.107484817504883,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0005870329856872559,
            "unit": "seconds",
            "range": 0.0002829916616849432,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.04806070923805237,
            "unit": "seconds",
            "range": 0.006849768260835093,
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
            "value": 6832820.65,
            "unit": "bytes",
            "range": 2517144.3335171593,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 13665553.3,
            "unit": "bytes",
            "range": 5034288.667034319,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 27331018.6,
            "unit": "bytes",
            "range": 10068577.334068637,
            "extra": "Count: 80"
          }
        ]
      },
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
          "id": "17dceadf711211e6d6e46246bb6fb58577f4a5a4",
          "message": "Making tensors from file paths or dictionaries share file paths for ease of development.",
          "timestamp": "2024-09-15T19:34:27Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/32/commits/17dceadf711211e6d6e46246bb6fb58577f4a5a4"
        },
        "date": 1726951993222,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 27164656,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.0959458,
            "unit": "seconds",
            "range": 0.00794632296727395,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259165504,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 27149493,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 27164619,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 156284048,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.324748,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.023469,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0012316703796386719,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 6.215243577957153,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0005901888847351074,
            "unit": "seconds",
            "range": 0.0002762106255403547,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.049457624554634094,
            "unit": "seconds",
            "range": 0.0069765503753266385,
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
            "value": 6829134.25,
            "unit": "bytes",
            "range": 2514861.464256947,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 13658180.5,
            "unit": "bytes",
            "range": 5029722.928513894,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 27316273,
            "unit": "bytes",
            "range": 10059445.857027788,
            "extra": "Count: 80"
          }
        ]
      },
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
          "id": "16fb02e12009841cd90192f98a510eecbdcf31d0",
          "message": "Making tensors from file paths or dictionaries share file paths for ease of development.",
          "timestamp": "2024-09-15T19:34:27Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/32/commits/16fb02e12009841cd90192f98a510eecbdcf31d0"
        },
        "date": 1726966447817,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 27164656,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.1088518,
            "unit": "seconds",
            "range": 0.004279592352034311,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 257068352,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 27149493,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 27164619,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 156283196,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.258377,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.02348,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0012583732604980469,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 6.294206380844116,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0006067605018615723,
            "unit": "seconds",
            "range": 0.0002625465831014366,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.04964888989925385,
            "unit": "seconds",
            "range": 0.007281829937351457,
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
            "value": 6902657.45,
            "unit": "bytes",
            "range": 2553401.1803409946,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 13805226.9,
            "unit": "bytes",
            "range": 5106802.360681989,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 27610365.8,
            "unit": "bytes",
            "range": 10213604.721363978,
            "extra": "Count: 80"
          }
        ]
      },
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
          "id": "6ed3239e1b86eb06220441798c2dd4fa57fb5641",
          "message": "Making tensors from file paths or dictionaries share file paths for ease of development.",
          "timestamp": "2024-09-15T19:34:27Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/32/commits/6ed3239e1b86eb06220441798c2dd4fa57fb5641"
        },
        "date": 1726969566414,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 27164656,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.2541612,
            "unit": "seconds",
            "range": 0.009301383940035764,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259165504,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 27149493,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 27164619,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 151167753,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.309654,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.023308,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0012307167053222656,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.222203969955444,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0008951322555541992,
            "unit": "seconds",
            "range": 0.0002825568095593857,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.04985794425010681,
            "unit": "seconds",
            "range": 0.007336440020493463,
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
            "value": 6818484.65,
            "unit": "bytes",
            "range": 2505485.104376583,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 27273674.6,
            "unit": "bytes",
            "range": 10021940.417506332,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 13636881.3,
            "unit": "bytes",
            "range": 5010970.208753166,
            "extra": "Count: 80"
          }
        ]
      },
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
          "id": "4c266be0edaad9eb206b49c483df45379748ab62",
          "message": "Making tensors from file paths or dictionaries share file paths for ease of development.",
          "timestamp": "2024-09-15T19:34:27Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/32/commits/4c266be0edaad9eb206b49c483df45379748ab62"
        },
        "date": 1727022721601,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 27164656,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.2493638,
            "unit": "seconds",
            "range": 0.009988330826523022,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259165504,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 27149493,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 27164619,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 156282546,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.182104,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.023527,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0013222694396972656,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.253964900970459,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0009085243225097656,
            "unit": "seconds",
            "range": 0.0003888698162993746,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.04907504320144653,
            "unit": "seconds",
            "range": 0.007231911377356969,
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
            "value": 6832820.65,
            "unit": "bytes",
            "range": 2517144.3335171593,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 13665553.3,
            "unit": "bytes",
            "range": 5034288.667034319,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 27331018.6,
            "unit": "bytes",
            "range": 10068577.334068637,
            "extra": "Count: 80"
          }
        ]
      },
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
          "id": "aa49184d08323e9298b9cbbefb3854e1d912c729",
          "message": "Making tensors from file paths or dictionaries share file paths for ease of development.",
          "timestamp": "2024-09-15T19:34:27Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/32/commits/aa49184d08323e9298b9cbbefb3854e1d912c729"
        },
        "date": 1727023390289,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 27164656,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.2785978,
            "unit": "seconds",
            "range": 0.011741069508358425,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259165504,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 27149493,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 27164619,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 151768801,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.140893,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.023266,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0013360977172851562,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.384196758270264,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0009398171424865723,
            "unit": "seconds",
            "range": 0.0003661632796868997,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.04986805021762848,
            "unit": "seconds",
            "range": 0.007256351561749593,
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
            "value": 6833435.05,
            "unit": "bytes",
            "range": 2519207.9488798343,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 27333476.2,
            "unit": "bytes",
            "range": 10076831.795519337,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 13666782.1,
            "unit": "bytes",
            "range": 5038415.8977596685,
            "extra": "Count: 80"
          }
        ]
      },
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
          "id": "f35e9136d55dae031a147bcbd4dbef0b2e7cb49c",
          "message": "Making tensors from file paths or dictionaries share file paths for ease of development.",
          "timestamp": "2024-09-15T19:34:27Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/32/commits/f35e9136d55dae031a147bcbd4dbef0b2e7cb49c"
        },
        "date": 1727024118144,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26259152,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.1432090000000001,
            "unit": "seconds",
            "range": 0.0063828734516452,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259292538,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26243507,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 26258099,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 156213191,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.173087,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.025278,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0012295246124267578,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 6.475326061248779,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007138606071472168,
            "unit": "seconds",
            "range": 0.0002645717051265483,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.048549461364746097,
            "unit": "seconds",
            "range": 0.007368164117843952,
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
            "value": 6896923.05,
            "unit": "bytes",
            "range": 2558616.9956679353,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 27587428.2,
            "unit": "bytes",
            "range": 10234467.982671741,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 13793758.1,
            "unit": "bytes",
            "range": 5117233.991335871,
            "extra": "Count: 80"
          }
        ]
      },
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
          "id": "96b7b76ca101ca54d2735ef427a46c05dc659ad6",
          "message": "Making tensors from file paths or dictionaries share file paths for ease of development.",
          "timestamp": "2024-09-15T19:34:27Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/32/commits/96b7b76ca101ca54d2735ef427a46c05dc659ad6"
        },
        "date": 1727024930658,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26259152,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.1846128,
            "unit": "seconds",
            "range": 0.01177270279927102,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259161466,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26243507,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 26258099,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 156272961,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.219407,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.022093,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0012824535369873047,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 6.687995433807373,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007210290908813477,
            "unit": "seconds",
            "range": 0.000253823090150918,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.050875940918922426,
            "unit": "seconds",
            "range": 0.022956877034809236,
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
            "value": 6755611.05,
            "unit": "bytes",
            "range": 2482984.0559706492,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 13511134.1,
            "unit": "bytes",
            "range": 4965968.1119412985,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 27022180.2,
            "unit": "bytes",
            "range": 9931936.223882597,
            "extra": "Count: 80"
          }
        ]
      },
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
          "id": "c26100fa0d855a88e9a58d17a824cc17f66e3a6f",
          "message": "Updated benchmark to have a better way to subselect sequences.",
          "timestamp": "2024-09-15T19:34:27Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/33/commits/c26100fa0d855a88e9a58d17a824cc17f66e3a6f"
        },
        "date": 1727025446422,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 27169052,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 0.7878426000000001,
            "unit": "seconds",
            "range": 0.00761942247154598,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 257072512,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 27149493,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 54278562,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 148828582,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.210749,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.023612,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.009499788284301758,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 4.346415758132935,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.00009607582092285156,
            "unit": "seconds",
            "range": 0.000029295602912405547,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.00009207658767700196,
            "unit": "seconds",
            "range": 0.000028567622478854282,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.04574049413204193,
            "unit": "seconds",
            "range": 0.006609894649116847,
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
            "value": 6677172.65,
            "unit": "bytes",
            "range": 2420509.6158048036,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 13354257.3,
            "unit": "bytes",
            "range": 4841019.231609607,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 26708426.6,
            "unit": "bytes",
            "range": 9682038.463219214,
            "extra": "Count: 80"
          }
        ]
      },
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
          "id": "fc0659e017e25ce8ad6f7a698496fb7d167ef1d6",
          "message": "Making tensors from file paths or dictionaries share file paths for ease of development.",
          "timestamp": "2024-09-15T19:34:27Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/32/commits/fc0659e017e25ce8ad6f7a698496fb7d167ef1d6"
        },
        "date": 1727026046862,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.149696,
            "unit": "seconds",
            "range": 0.022420411949829647,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259165626,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26243507,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 156292063,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.213462,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.022074,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0010409355163574219,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 6.499081134796143,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.000713295841217041,
            "unit": "seconds",
            "range": 0.0001406519200930403,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007072457313537598,
            "unit": "seconds",
            "range": 0.00014039945364010555,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.04886397123336792,
            "unit": "seconds",
            "range": 0.02199952372102675,
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
            "value": 6897947.05,
            "unit": "bytes",
            "range": 2556388.3851566743,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 27591524.2,
            "unit": "bytes",
            "range": 10225553.540626697,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 13795806.1,
            "unit": "bytes",
            "range": 5112776.770313349,
            "extra": "Count: 80"
          }
        ]
      },
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
          "id": "a4bc7ceee67c1319c4a70e8a46772b13ee218706",
          "message": "Making tensors from file paths or dictionaries share file paths for ease of development.",
          "timestamp": "2024-09-15T19:34:27Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/32/commits/a4bc7ceee67c1319c4a70e8a46772b13ee218706"
        },
        "date": 1727029044501,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.108514,
            "unit": "seconds",
            "range": 0.02369811931355478,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 258117050,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26243507,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 151764398,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.104049,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.022526,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.001028299331665039,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 6.288156032562256,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0006938800811767578,
            "unit": "seconds",
            "range": 0.00018923897059537804,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0006882957458496094,
            "unit": "seconds",
            "range": 0.0001891143067469018,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.04708929359912872,
            "unit": "seconds",
            "range": 0.020056385459106468,
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
            "value": 6769332.65,
            "unit": "bytes",
            "range": 2475411.2501510032,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 27077066.6,
            "unit": "bytes",
            "range": 9901645.000604013,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 13538577.3,
            "unit": "bytes",
            "range": 4950822.5003020065,
            "extra": "Count: 80"
          }
        ]
      },
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
          "id": "347dd6008e3407f517b171b0db09073642772a05",
          "message": "Making tensors from file paths or dictionaries share file paths for ease of development.",
          "timestamp": "2024-09-15T19:34:27Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/32/commits/347dd6008e3407f517b171b0db09073642772a05"
        },
        "date": 1727030050547,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.1773897999999998,
            "unit": "seconds",
            "range": 0.02535146017885873,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 257068474,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26243507,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 151175114,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.318648,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.022694,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0011444091796875,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 6.65569543838501,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007315288543701171,
            "unit": "seconds",
            "range": 0.0002792829132122908,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007257091522216797,
            "unit": "seconds",
            "range": 0.00027919523268372915,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.05011270344257355,
            "unit": "seconds",
            "range": 0.02329872239492514,
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
            "value": 6837326.25,
            "unit": "bytes",
            "range": 2536799.4430961027,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 27349041,
            "unit": "bytes",
            "range": 10147197.77238441,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 13674564.5,
            "unit": "bytes",
            "range": 5073598.886192205,
            "extra": "Count: 80"
          }
        ]
      },
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
          "id": "54515dc668e30806f9dd8ec65c95cadc344735a0",
          "message": "Making tensors from file paths or dictionaries share file paths for ease of development.",
          "timestamp": "2024-09-15T19:34:27Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/32/commits/54515dc668e30806f9dd8ec65c95cadc344735a0"
        },
        "date": 1727036803777,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.115698,
            "unit": "seconds",
            "range": 0.023081672458895648,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259165626,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26243507,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 156289851,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.225469,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.021806,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0009789466857910156,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 6.3358845710754395,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007066563606262207,
            "unit": "seconds",
            "range": 0.00006280317623218145,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.000701094627380371,
            "unit": "seconds",
            "range": 0.00006245926029889227,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.04707149863243103,
            "unit": "seconds",
            "range": 0.01971173990126127,
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
            "value": 6882996.65,
            "unit": "bytes",
            "range": 2540333.3169962936,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 13765905.3,
            "unit": "bytes",
            "range": 5080666.633992587,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 27531722.6,
            "unit": "bytes",
            "range": 10161333.267985174,
            "extra": "Count: 80"
          }
        ]
      },
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
          "id": "aefcf8eb6ec6e3506806bce4838d246324e96bb5",
          "message": "Making tensors from file paths or dictionaries share file paths for ease of development.",
          "timestamp": "2024-09-15T19:34:27Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/32/commits/aefcf8eb6ec6e3506806bce4838d246324e96bb5"
        },
        "date": 1727037450066,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.15971,
            "unit": "seconds",
            "range": 0.026973385707022974,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259165626,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26243507,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 156285729,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.32256,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.022178,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0011386871337890625,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 6.58449387550354,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007194963455200195,
            "unit": "seconds",
            "range": 0.0002611158448791281,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007134918212890625,
            "unit": "seconds",
            "range": 0.0002610225596058122,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.04938608109951019,
            "unit": "seconds",
            "range": 0.021944974526127634,
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
            "value": 6699905.45,
            "unit": "bytes",
            "range": 2477277.5525189703,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 13399722.9,
            "unit": "bytes",
            "range": 4954555.105037941,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 26799357.8,
            "unit": "bytes",
            "range": 9909110.210075881,
            "extra": "Count: 80"
          }
        ]
      },
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
          "id": "1e7f1b6d7dd17921bed0a7812a3ea5c413dc935b",
          "message": "Making tensors from file paths or dictionaries share file paths for ease of development.",
          "timestamp": "2024-09-15T19:34:27Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/32/commits/1e7f1b6d7dd17921bed0a7812a3ea5c413dc935b"
        },
        "date": 1727038242707,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.1440388000000001,
            "unit": "seconds",
            "range": 0.023046020908172794,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259165626,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26243507,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 151763334,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.164373,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.022192,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0011267662048339844,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 6.4929704666137695,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007344206809997559,
            "unit": "seconds",
            "range": 0.0003428474557258302,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007286949157714844,
            "unit": "seconds",
            "range": 0.000342731524572603,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.04796440303325653,
            "unit": "seconds",
            "range": 0.021270800421668512,
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
            "value": 6818484.65,
            "unit": "bytes",
            "range": 2502524.1452874755,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 13636881.3,
            "unit": "bytes",
            "range": 5005048.290574951,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 27273674.6,
            "unit": "bytes",
            "range": 10010096.581149902,
            "extra": "Count: 80"
          }
        ]
      },
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
          "id": "c580476d64a4abc2a12074c241f6182b9442c63e",
          "message": "Making tensors from file paths or dictionaries share file paths for ease of development.",
          "timestamp": "2024-09-15T19:34:27Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/32/commits/c580476d64a4abc2a12074c241f6182b9442c63e"
        },
        "date": 1727038355596,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.1736984,
            "unit": "seconds",
            "range": 0.021015399908166997,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 257068474,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26243507,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 151180920,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.212089,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.022316,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0011093616485595703,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 6.633853197097778,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.000738919734954834,
            "unit": "seconds",
            "range": 0.0003768150373446955,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007330670356750489,
            "unit": "seconds",
            "range": 0.000376714525925375,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.04965150654315949,
            "unit": "seconds",
            "range": 0.022374847240293858,
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
            "value": 6888321.45,
            "unit": "bytes",
            "range": 2542307.0836014533,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 27553021.8,
            "unit": "bytes",
            "range": 10169228.334405813,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 13776554.9,
            "unit": "bytes",
            "range": 5084614.167202907,
            "extra": "Count: 80"
          }
        ]
      },
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
          "id": "dcddff5e63fa315296ce093c262e18507f234437",
          "message": "Making tensors from file paths or dictionaries share file paths for ease of development.",
          "timestamp": "2024-09-15T19:34:27Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/32/commits/dcddff5e63fa315296ce093c262e18507f234437"
        },
        "date": 1727038736112,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.2062902000000002,
            "unit": "seconds",
            "range": 0.04169401451287276,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 258117050,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26243507,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 151527578,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.308061,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.022868,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0011587142944335938,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 6.865447282791138,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.000741988468170166,
            "unit": "seconds",
            "range": 0.00036282166944639886,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007363472938537597,
            "unit": "seconds",
            "range": 0.0003626260458543376,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.05159921944141388,
            "unit": "seconds",
            "range": 0.02456818399164353,
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
            "value": 6887502.25,
            "unit": "bytes",
            "range": 2542897.231819102,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 27549745,
            "unit": "bytes",
            "range": 10171588.927276408,
            "extra": "Count: 80"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 13774916.5,
            "unit": "bytes",
            "range": 5085794.463638204,
            "extra": "Count: 80"
          }
        ]
      },
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
          "id": "e9204e798ca46ce12142bf1d11d5b9d32c3e22b5",
          "message": "Making tensors from file paths or dictionaries share file paths for ease of development.",
          "timestamp": "2024-09-15T19:34:27Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/32/commits/e9204e798ca46ce12142bf1d11d5b9d32c3e22b5"
        },
        "date": 1727039878812,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.3932262000000002,
            "unit": "seconds",
            "range": 0.005642072021829256,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259165626,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26243508,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1227701459,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.177331,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.021916,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0010178089141845703,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.716966152191162,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007409635543823242,
            "unit": "seconds",
            "range": 0.001006749533538612,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007353705406188965,
            "unit": "seconds",
            "range": 0.0010067030404217509,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.5070075750350952,
            "unit": "seconds",
            "range": 0.03269954462876951,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4088,
            "unit": "bytes",
            "range": 101.19288512538814,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128088,
            "unit": "bytes",
            "range": 3238.1723240124206,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512088,
            "unit": "bytes",
            "range": 12952.689296049683,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 83388094.4,
            "unit": "bytes",
            "range": 4124521.2501636543,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 333552113.6,
            "unit": "bytes",
            "range": 16498085.000654617,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 166776100.8,
            "unit": "bytes",
            "range": 8249042.500327309,
            "extra": "Count: 10"
          }
        ]
      },
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
          "id": "121b2ce6d61d7e1765ab527bb48166fa6c781415",
          "message": "Making tensors from file paths or dictionaries share file paths for ease of development.",
          "timestamp": "2024-09-15T19:34:27Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/32/commits/121b2ce6d61d7e1765ab527bb48166fa6c781415"
        },
        "date": 1728568299001,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.3909908000000002,
            "unit": "seconds",
            "range": 0.008103815903598124,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 258117050,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26243508,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1227709655,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.258043,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.022344,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0010864734649658203,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.741216659545898,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007595491409301758,
            "unit": "seconds",
            "range": 0.0010865506619708518,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007539264678955079,
            "unit": "seconds",
            "range": 0.0010864810832542612,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.4965174198150635,
            "unit": "seconds",
            "range": 0.03602931140553843,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4088,
            "unit": "bytes",
            "range": 101.19288512538814,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128088,
            "unit": "bytes",
            "range": 3238.1723240124206,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512088,
            "unit": "bytes",
            "range": 12952.689296049683,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 84019492.8,
            "unit": "bytes",
            "range": 3909225.6151984315,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 336077707.2,
            "unit": "bytes",
            "range": 15636902.460793726,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 168038897.6,
            "unit": "bytes",
            "range": 7818451.230396863,
            "extra": "Count: 10"
          }
        ]
      },
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
          "id": "75aabb2b15eb01f1b00e1732dc32aefbb7fbcfb7",
          "message": "Making tensors from file paths or dictionaries share file paths for ease of development.",
          "timestamp": "2024-09-15T19:34:27Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/32/commits/75aabb2b15eb01f1b00e1732dc32aefbb7fbcfb7"
        },
        "date": 1728569174907,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.4237574000000002,
            "unit": "seconds",
            "range": 0.008351531284699471,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259165626,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26243508,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1216038873,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.283638,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.022975,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.001176595687866211,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.918097972869873,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007669693946838379,
            "unit": "seconds",
            "range": 0.0011961814456108544,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007614744186401367,
            "unit": "seconds",
            "range": 0.001196105108932147,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.5127926349639893,
            "unit": "seconds",
            "range": 0.03654228680493935,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4088,
            "unit": "bytes",
            "range": 101.19288512538814,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128088,
            "unit": "bytes",
            "range": 3238.1723240124206,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512088,
            "unit": "bytes",
            "range": 12952.689296049683,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 82732734.4,
            "unit": "bytes",
            "range": 3661655.467560965,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 165465380.8,
            "unit": "bytes",
            "range": 7323310.93512193,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 330930673.6,
            "unit": "bytes",
            "range": 14646621.87024386,
            "extra": "Count: 10"
          }
        ]
      },
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
          "id": "136c81205cd5f06cdb6e677940455078c2f7b3dd",
          "message": "Making tensors from file paths or dictionaries share file paths for ease of development.",
          "timestamp": "2024-09-15T19:34:27Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/32/commits/136c81205cd5f06cdb6e677940455078c2f7b3dd"
        },
        "date": 1728569846639,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.4006664,
            "unit": "seconds",
            "range": 0.014880284096745891,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 257068474,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26243508,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1216058829,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.171745,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.022081,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.00110626220703125,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.7860777378082275,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.000763873291015625,
            "unit": "seconds",
            "range": 0.001087908542851435,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007582058906555176,
            "unit": "seconds",
            "range": 0.0010878362494705712,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.5000527143478394,
            "unit": "seconds",
            "range": 0.038863698831842264,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4088,
            "unit": "bytes",
            "range": 101.19288512538814,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128088,
            "unit": "bytes",
            "range": 3238.1723240124206,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512088,
            "unit": "bytes",
            "range": 12952.689296049683,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 83219953.6,
            "unit": "bytes",
            "range": 3379406.179730266,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 332879550.4,
            "unit": "bytes",
            "range": 13517624.718921063,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 166439819.2,
            "unit": "bytes",
            "range": 6758812.359460532,
            "extra": "Count: 10"
          }
        ]
      },
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
          "id": "53d97545912dd28843a598b5253eed210a049cb2",
          "message": "Making tensors from file paths or dictionaries share file paths for ease of development.",
          "timestamp": "2024-09-15T19:34:27Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/32/commits/53d97545912dd28843a598b5253eed210a049cb2"
        },
        "date": 1728570558368,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.3685596,
            "unit": "seconds",
            "range": 0.03417459129675119,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 257068474,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26243508,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1218278146,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.475313,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.020936,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0010669231414794922,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.615977048873901,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007551548957824707,
            "unit": "seconds",
            "range": 0.0011106363834130434,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007497847557067872,
            "unit": "seconds",
            "range": 0.00111056287323415,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.48685691356658933,
            "unit": "seconds",
            "range": 0.0351507441564293,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4088,
            "unit": "bytes",
            "range": 101.19288512538814,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128088,
            "unit": "bytes",
            "range": 3238.1723240124206,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512088,
            "unit": "bytes",
            "range": 12952.689296049683,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 83508312,
            "unit": "bytes",
            "range": 3705223.408843251,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 167016536,
            "unit": "bytes",
            "range": 7410446.817686502,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 334032984,
            "unit": "bytes",
            "range": 14820893.635373004,
            "extra": "Count: 10"
          }
        ]
      },
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
          "id": "eaaa6bbc36e0148304be61d60c27e73ccc50b396",
          "message": "Release Candidate",
          "timestamp": "2024-09-15T19:34:27Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/35/commits/eaaa6bbc36e0148304be61d60c27e73ccc50b396"
        },
        "date": 1728590882118,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.4981026,
            "unit": "seconds",
            "range": 0.01645603601417903,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259165626,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26243508,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1227696647,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.34894,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.022255,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0011608600616455078,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 8.285417318344116,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007785066604614258,
            "unit": "seconds",
            "range": 0.0012327540299832643,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007727673530578613,
            "unit": "seconds",
            "range": 0.0012326791064871231,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.5460890293121338,
            "unit": "seconds",
            "range": 0.043818343043700386,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4088,
            "unit": "bytes",
            "range": 101.19288512538814,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128088,
            "unit": "bytes",
            "range": 3238.1723240124206,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512088,
            "unit": "bytes",
            "range": 12952.689296049683,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 83388094.4,
            "unit": "bytes",
            "range": 4124521.2501636543,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 333552113.6,
            "unit": "bytes",
            "range": 16498085.000654617,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 166776100.8,
            "unit": "bytes",
            "range": 8249042.500327309,
            "extra": "Count: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mattmcdermott8@gmail.com",
            "name": "Matthew McDermott",
            "username": "mmcdermott"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2bbfdb02b60cf35e323d2dba154f695392e9559b",
          "message": "Merge pull request #35 from mmcdermott/dev\n\nRelease Candidate",
          "timestamp": "2024-10-11T08:49:16-04:00",
          "tree_id": "17d36c2e55106ac4671cba7f47c5f3c864513508",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/commit/2bbfdb02b60cf35e323d2dba154f695392e9559b"
        },
        "date": 1728651075770,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.4345968,
            "unit": "seconds",
            "range": 0.015236375592629598,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259165626,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26243508,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1227720863,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.334906,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.022388,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0011196136474609375,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.997540235519409,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007718223571777344,
            "unit": "seconds",
            "range": 0.0011300355686292415,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007660462379455566,
            "unit": "seconds",
            "range": 0.0011299462201611022,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.5144896984100342,
            "unit": "seconds",
            "range": 0.04436692926560983,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4088,
            "unit": "bytes",
            "range": 101.19288512538814,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128088,
            "unit": "bytes",
            "range": 3238.1723240124206,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512088,
            "unit": "bytes",
            "range": 12952.689296049683,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 83875313.6,
            "unit": "bytes",
            "range": 3783487.3488407787,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 167750539.2,
            "unit": "bytes",
            "range": 7566974.697681557,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 335500990.4,
            "unit": "bytes",
            "range": 15133949.395363115,
            "extra": "Count: 10"
          }
        ]
      },
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
          "id": "cb55c2f02fcd24bc7fca698fa7a8295a4530dc99",
          "message": "Fixes flatten on dim=1",
          "timestamp": "2024-10-11T12:49:24Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/40/commits/cb55c2f02fcd24bc7fca698fa7a8295a4530dc99"
        },
        "date": 1729038185145,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.2760478,
            "unit": "seconds",
            "range": 0.019387265735534683,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 257068474,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26243508,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1218277786,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.360822,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.021346,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0010707378387451172,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.144200801849365,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007335205078125,
            "unit": "seconds",
            "range": 0.00020831027211323596,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007277897834777833,
            "unit": "seconds",
            "range": 0.00020819173486311102,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.44993979930877687,
            "unit": "seconds",
            "range": 0.028655739487393566,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4088,
            "unit": "bytes",
            "range": 101.19288512538814,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128088,
            "unit": "bytes",
            "range": 3238.1723240124206,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512088,
            "unit": "bytes",
            "range": 12952.689296049683,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 82900875.2,
            "unit": "bytes",
            "range": 4379618.452793043,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 331603236.8,
            "unit": "bytes",
            "range": 17518473.811172172,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 165801662.4,
            "unit": "bytes",
            "range": 8759236.905586086,
            "extra": "Count: 10"
          }
        ]
      },
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
          "id": "5cc85690e0bdc37443dda587f7218adc0b5e09c4",
          "message": "Fixes flatten on dim=1",
          "timestamp": "2024-10-11T12:49:24Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/40/commits/5cc85690e0bdc37443dda587f7218adc0b5e09c4"
        },
        "date": 1729038338230,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.3705865999999998,
            "unit": "seconds",
            "range": 0.03290224487478987,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 257068474,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26243508,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1218285406,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.334118,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.021989,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0011417865753173828,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.616016387939453,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007445625305175782,
            "unit": "seconds",
            "range": 0.0003353613121791473,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.000738736629486084,
            "unit": "seconds",
            "range": 0.0003352790075817541,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.49072976112365724,
            "unit": "seconds",
            "range": 0.03855894324353518,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4088,
            "unit": "bytes",
            "range": 101.19288512538814,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128088,
            "unit": "bytes",
            "range": 3238.1723240124206,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512088,
            "unit": "bytes",
            "range": 12952.689296049683,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 83021092.8,
            "unit": "bytes",
            "range": 4003526.3800785537,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 332084107.2,
            "unit": "bytes",
            "range": 16014105.520314215,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 166042097.6,
            "unit": "bytes",
            "range": 8007052.760157107,
            "extra": "Count: 10"
          }
        ]
      },
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
          "id": "ca70f5ec8721580d525c3c554b51ca76bcaa4ec5",
          "message": "Hotfix 0.0.8 release for flatten at dim=1",
          "timestamp": "2024-10-11T12:49:24Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/41/commits/ca70f5ec8721580d525c3c554b51ca76bcaa4ec5"
        },
        "date": 1729038434163,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.4130236000000003,
            "unit": "seconds",
            "range": 0.03351748017526149,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 257068474,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26243508,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1218257698,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.322029,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.024851,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0012049674987792969,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.837775945663452,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007541220664978027,
            "unit": "seconds",
            "range": 0.0002968354353634916,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007484176635742187,
            "unit": "seconds",
            "range": 0.00029670428592326777,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.510109257698059,
            "unit": "seconds",
            "range": 0.040206015534402666,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4088,
            "unit": "bytes",
            "range": 101.19288512538814,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128088,
            "unit": "bytes",
            "range": 3238.1723240124206,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512088,
            "unit": "bytes",
            "range": 12952.689296049683,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 82533873.6,
            "unit": "bytes",
            "range": 4219034.2102560755,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 330135230.4,
            "unit": "bytes",
            "range": 16876136.841024302,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 165067659.2,
            "unit": "bytes",
            "range": 8438068.420512151,
            "extra": "Count: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mattmcdermott8@gmail.com",
            "name": "Matthew McDermott",
            "username": "mmcdermott"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3ea58ae83fc9c5d430d6d46cb2c8641b54df4f5b",
          "message": "Merge pull request #41 from mmcdermott/dev\n\nHotfix 0.0.8 release for flatten at dim=1",
          "timestamp": "2024-10-15T20:27:30-04:00",
          "tree_id": "5d1c8249c03264c7441a30285f2bfba0d7455772",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/commit/3ea58ae83fc9c5d430d6d46cb2c8641b54df4f5b"
        },
        "date": 1729038589730,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.4138382,
            "unit": "seconds",
            "range": 0.02442676366611075,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 257068474,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26243508,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1227696311,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.234507,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.02211,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.001111745834350586,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.854092359542847,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007557234764099121,
            "unit": "seconds",
            "range": 0.0002816787855308472,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007497471809387208,
            "unit": "seconds",
            "range": 0.0002816371704515494,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.5086037635803222,
            "unit": "seconds",
            "range": 0.04122496095993435,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4088,
            "unit": "bytes",
            "range": 101.19288512538814,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128088,
            "unit": "bytes",
            "range": 3238.1723240124206,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512088,
            "unit": "bytes",
            "range": 12952.689296049683,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 84019492.8,
            "unit": "bytes",
            "range": 3909225.6151984315,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 168038897.6,
            "unit": "bytes",
            "range": 7818451.230396863,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 336077707.2,
            "unit": "bytes",
            "range": 15636902.460793726,
            "extra": "Count: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mattmcdermott8@gmail.com",
            "name": "Matthew McDermott",
            "username": "mmcdermott"
          },
          "committer": {
            "email": "mattmcdermott8@gmail.com",
            "name": "Matthew McDermott",
            "username": "mmcdermott"
          },
          "distinct": true,
          "id": "84faf1c419727440648c437d164ff21bfc6946d6",
          "message": "Updated README.",
          "timestamp": "2024-11-06T16:24:05-05:00",
          "tree_id": "c1997ab237f1cd15100f15270e634fd9e3449d66",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/commit/84faf1c419727440648c437d164ff21bfc6946d6"
        },
        "date": 1730928381079,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.5057288,
            "unit": "seconds",
            "range": 0.007382492546565578,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 258117050,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26243508,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1218270580,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.192965,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.030252,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0011744499206542969,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 8.310503959655762,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.000757252311706543,
            "unit": "seconds",
            "range": 0.00020341963665068355,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007515407562255859,
            "unit": "seconds",
            "range": 0.00020334162355958974,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.5589217424392701,
            "unit": "seconds",
            "range": 0.03736985616050072,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4088,
            "unit": "bytes",
            "range": 101.19288512538814,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128088,
            "unit": "bytes",
            "range": 3238.1723240124206,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512088,
            "unit": "bytes",
            "range": 12952.689296049683,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 83021092.8,
            "unit": "bytes",
            "range": 4003526.3800785537,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 332084107.2,
            "unit": "bytes",
            "range": 16014105.520314215,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 166042097.6,
            "unit": "bytes",
            "range": 8007052.760157107,
            "extra": "Count: 10"
          }
        ]
      },
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
          "id": "16fef8f942b1c224d5123365633991770fd2d6e4",
          "message": "Improve test coverage towards 100%",
          "timestamp": "2024-11-06T21:24:11Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/45/commits/16fef8f942b1c224d5123365633991770fd2d6e4"
        },
        "date": 1730929498650,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.4072454,
            "unit": "seconds",
            "range": 0.01668442296874266,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 258117050,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26243508,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1216040451,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.263771,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.030751,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0011219978332519531,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.788678169250488,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.000729949951171875,
            "unit": "seconds",
            "range": 0.00019344077799314987,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007245785713195801,
            "unit": "seconds",
            "range": 0.0001934143953082506,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.5167685985565186,
            "unit": "seconds",
            "range": 0.035480040872023486,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4088,
            "unit": "bytes",
            "range": 101.19288512538814,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128088,
            "unit": "bytes",
            "range": 3238.1723240124206,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512088,
            "unit": "bytes",
            "range": 12952.689296049683,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 83364132.8,
            "unit": "bytes",
            "range": 3549314.116586471,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 166728177.6,
            "unit": "bytes",
            "range": 7098628.233172942,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 333456267.2,
            "unit": "bytes",
            "range": 14197256.466345884,
            "extra": "Count: 10"
          }
        ]
      },
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
          "id": "30662bd72849d396676d2fa4fce7bfbb6788e532",
          "message": "Improve test coverage towards 100%",
          "timestamp": "2024-11-06T21:24:11Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/45/commits/30662bd72849d396676d2fa4fce7bfbb6788e532"
        },
        "date": 1730980801009,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.3333288,
            "unit": "seconds",
            "range": 0.02357131695937076,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 258117050,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26243508,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1227708473,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 6.849764,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.028312,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0009677410125732422,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.41304874420166,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0006957798957824707,
            "unit": "seconds",
            "range": 0.00016931623821257266,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0006905072212219238,
            "unit": "seconds",
            "range": 0.0001691884604652964,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.4877685308456421,
            "unit": "seconds",
            "range": 0.024797883150922233,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4088,
            "unit": "bytes",
            "range": 101.19288512538814,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128088,
            "unit": "bytes",
            "range": 3238.1723240124206,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512088,
            "unit": "bytes",
            "range": 12952.689296049683,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 83731134.4,
            "unit": "bytes",
            "range": 3647096.566831088,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 167462180.8,
            "unit": "bytes",
            "range": 7294193.133662176,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 334924273.6,
            "unit": "bytes",
            "range": 14588386.267324353,
            "extra": "Count: 10"
          }
        ]
      },
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
          "id": "e168dd78901ff9a2956d3bcd58a47d8b0a804894",
          "message": "Improve test coverage towards 100%",
          "timestamp": "2024-11-06T21:24:11Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/45/commits/e168dd78901ff9a2956d3bcd58a47d8b0a804894"
        },
        "date": 1730994516521,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.4468628,
            "unit": "seconds",
            "range": 0.013824237002451159,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 258117050,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26243508,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1218287900,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.348999,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.030699,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0011622905731201172,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 8.0199875831604,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007530344009399414,
            "unit": "seconds",
            "range": 0.0001454276035930033,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007476037979125977,
            "unit": "seconds",
            "range": 0.00014523222468450477,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.5305677652359009,
            "unit": "seconds",
            "range": 0.04036473708097619,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4088,
            "unit": "bytes",
            "range": 101.19288512538814,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128088,
            "unit": "bytes",
            "range": 3238.1723240124206,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512088,
            "unit": "bytes",
            "range": 12952.689296049683,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 83045054.4,
            "unit": "bytes",
            "range": 4523332.235725831,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 166090020.8,
            "unit": "bytes",
            "range": 9046664.471451662,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 332179953.6,
            "unit": "bytes",
            "range": 18093328.942903325,
            "extra": "Count: 10"
          }
        ]
      },
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
          "id": "d9157006faff7d630dd0c62d541bc62d1afd8dcd",
          "message": "Added tests to get to 100%",
          "timestamp": "2024-11-06T21:24:11Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/47/commits/d9157006faff7d630dd0c62d541bc62d1afd8dcd"
        },
        "date": 1730994712392,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.4074877999999997,
            "unit": "seconds",
            "range": 0.019727817459124147,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 258117050,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26243508,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1227689913,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.122531,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.030189,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0010883808135986328,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.828057765960693,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007373736381530762,
            "unit": "seconds",
            "range": 0.00018749442006198402,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007319791793823242,
            "unit": "seconds",
            "range": 0.0001874483378385452,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.5150732278823853,
            "unit": "seconds",
            "range": 0.03123764006949295,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4088,
            "unit": "bytes",
            "range": 101.19288512538814,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128088,
            "unit": "bytes",
            "range": 3238.1723240124206,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512088,
            "unit": "bytes",
            "range": 12952.689296049683,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 83532273.6,
            "unit": "bytes",
            "range": 4258526.517499894,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 334128830.4,
            "unit": "bytes",
            "range": 17034106.069999576,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 167064459.2,
            "unit": "bytes",
            "range": 8517053.034999788,
            "extra": "Count: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mattmcdermott8@gmail.com",
            "name": "Matthew McDermott",
            "username": "mmcdermott"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7a669fab2e40bcf864a9a1ab8ce0d007dfab852b",
          "message": "Merge pull request #47 from mmcdermott/dev\n\nAdded tests to get to 100%",
          "timestamp": "2024-11-07T10:52:03-05:00",
          "tree_id": "1689738e5e31971d44d9559baa56b912185bcbe1",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/commit/7a669fab2e40bcf864a9a1ab8ce0d007dfab852b"
        },
        "date": 1730994848726,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.3921595999999998,
            "unit": "seconds",
            "range": 0.02433498631189427,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 258117050,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26243508,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1227711741,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.135895,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.029988,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.00099945068359375,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.739241361618042,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007347334861755371,
            "unit": "seconds",
            "range": 0.0000668435283388219,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007289532661437988,
            "unit": "seconds",
            "range": 0.00006641366390397905,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.5078175306320191,
            "unit": "seconds",
            "range": 0.03360163095424209,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4088,
            "unit": "bytes",
            "range": 101.19288512538814,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128088,
            "unit": "bytes",
            "range": 3238.1723240124206,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512088,
            "unit": "bytes",
            "range": 12952.689296049683,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 84019492.8,
            "unit": "bytes",
            "range": 3909225.6151984315,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 168038897.6,
            "unit": "bytes",
            "range": 7818451.230396863,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 336077707.2,
            "unit": "bytes",
            "range": 15636902.460793726,
            "extra": "Count: 10"
          }
        ]
      },
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
          "id": "939764bf5ea8565fc6d4ee5c7672c36bd30e5cca",
          "message": "Improve README docs and ensure that included code snippets run successfully.",
          "timestamp": "2024-11-07T15:52:08Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/49/commits/939764bf5ea8565fc6d4ee5c7672c36bd30e5cca"
        },
        "date": 1731007022209,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.4496416,
            "unit": "seconds",
            "range": 0.018887631794375394,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 258117050,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26243508,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1227725961,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.177947,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.030776,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0010869503021240234,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 8.011728525161743,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007387047767639161,
            "unit": "seconds",
            "range": 0.00021973278326053015,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007328404426574707,
            "unit": "seconds",
            "range": 0.0002196638496541306,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.5357175827026367,
            "unit": "seconds",
            "range": 0.03575126589725938,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4088,
            "unit": "bytes",
            "range": 101.19288512538814,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128088,
            "unit": "bytes",
            "range": 3238.1723240124206,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512088,
            "unit": "bytes",
            "range": 12952.689296049683,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 83731134.4,
            "unit": "bytes",
            "range": 3647096.566831088,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 334924273.6,
            "unit": "bytes",
            "range": 14588386.267324353,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 167462180.8,
            "unit": "bytes",
            "range": 7294193.133662176,
            "extra": "Count: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mattmcdermott8@gmail.com",
            "name": "Matthew McDermott",
            "username": "mmcdermott"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eef9fea47ee54fa953d86a5769edb267ae5e41f7",
          "message": "Merge pull request #49 from mmcdermott/improve_docs\n\nImprove README docs and ensure that included code snippets run successfully.",
          "timestamp": "2024-11-07T14:19:38-05:00",
          "tree_id": "b0c24ffb38794d7f78a39a5e90ce34478bf95258",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/commit/eef9fea47ee54fa953d86a5769edb267ae5e41f7"
        },
        "date": 1731007304047,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.3995876,
            "unit": "seconds",
            "range": 0.010741388076004086,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 258117050,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26243508,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1218288632,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.353079,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.030303,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0010759830474853516,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.7663257122039795,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007400636672973633,
            "unit": "seconds",
            "range": 0.00019312333627580916,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007337823867797852,
            "unit": "seconds",
            "range": 0.00019296497041155266,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.5099907636642456,
            "unit": "seconds",
            "range": 0.028955269229101584,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4088,
            "unit": "bytes",
            "range": 101.19288512538814,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128088,
            "unit": "bytes",
            "range": 3238.1723240124206,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512088,
            "unit": "bytes",
            "range": 12952.689296049683,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 83021092.8,
            "unit": "bytes",
            "range": 4003526.3800785537,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 332084107.2,
            "unit": "bytes",
            "range": 16014105.520314215,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 166042097.6,
            "unit": "bytes",
            "range": 8007052.760157107,
            "extra": "Count: 10"
          }
        ]
      },
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
          "id": "702a83d12c73cdc9fccf087dd809f8d96f555fd2",
          "message": "Add mkdocs and readthedocs",
          "timestamp": "2024-11-07T19:19:42Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/50/commits/702a83d12c73cdc9fccf087dd809f8d96f555fd2"
        },
        "date": 1731013015450,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.4474228000000002,
            "unit": "seconds",
            "range": 0.012332276703837474,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 258117050,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26243508,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1227696225,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.250144,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.030023,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0011529922485351562,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 8.005708456039429,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007463315963745118,
            "unit": "seconds",
            "range": 0.00025279054298640977,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007408589363098145,
            "unit": "seconds",
            "range": 0.0002526521312147889,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.5326650619506836,
            "unit": "seconds",
            "range": 0.03088081923107177,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4088,
            "unit": "bytes",
            "range": 101.19288512538814,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128088,
            "unit": "bytes",
            "range": 3238.1723240124206,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512088,
            "unit": "bytes",
            "range": 12952.689296049683,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 83388094.4,
            "unit": "bytes",
            "range": 4124521.2501636543,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 333552113.6,
            "unit": "bytes",
            "range": 16498085.000654617,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 166776100.8,
            "unit": "bytes",
            "range": 8249042.500327309,
            "extra": "Count: 10"
          }
        ]
      },
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
          "id": "774215769346d79ac7cf7365d666ef17c5fd5df9",
          "message": "Add mkdocs and readthedocs",
          "timestamp": "2024-11-07T19:19:42Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/50/commits/774215769346d79ac7cf7365d666ef17c5fd5df9"
        },
        "date": 1731013102241,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.4651964,
            "unit": "seconds",
            "range": 0.024033052049215225,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 258117050,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26243508,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1227718677,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.226773,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.030746,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0011005401611328125,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 8.105401754379272,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007551131248474121,
            "unit": "seconds",
            "range": 0.0002214713752905016,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007495034217834472,
            "unit": "seconds",
            "range": 0.00022133409530226847,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.5391138553619385,
            "unit": "seconds",
            "range": 0.03634756027299836,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4088,
            "unit": "bytes",
            "range": 101.19288512538814,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128088,
            "unit": "bytes",
            "range": 3238.1723240124206,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512088,
            "unit": "bytes",
            "range": 12952.689296049683,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 83875313.6,
            "unit": "bytes",
            "range": 3783487.3488407787,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 167750539.2,
            "unit": "bytes",
            "range": 7566974.697681557,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 335500990.4,
            "unit": "bytes",
            "range": 15133949.395363115,
            "extra": "Count: 10"
          }
        ]
      },
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
          "id": "9c291acb027040b6d15fa63f7ff470f1f4ea836e",
          "message": "Add mkdocs and readthedocs",
          "timestamp": "2024-11-07T19:19:42Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/50/commits/9c291acb027040b6d15fa63f7ff470f1f4ea836e"
        },
        "date": 1731013391825,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.4691318,
            "unit": "seconds",
            "range": 0.01069690727267541,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 258117050,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26243508,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1227719721,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.214923,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.031126,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.001165628433227539,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 8.119641304016113,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007652599334716797,
            "unit": "seconds",
            "range": 0.00020097750619979914,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007593389511108399,
            "unit": "seconds",
            "range": 0.00020086829081774197,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.5386712312698364,
            "unit": "seconds",
            "range": 0.03759060095914135,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4088,
            "unit": "bytes",
            "range": 101.19288512538814,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128088,
            "unit": "bytes",
            "range": 3238.1723240124206,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512088,
            "unit": "bytes",
            "range": 12952.689296049683,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 83875313.6,
            "unit": "bytes",
            "range": 3783487.3488407787,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 335500990.4,
            "unit": "bytes",
            "range": 15133949.395363115,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 167750539.2,
            "unit": "bytes",
            "range": 7566974.697681557,
            "extra": "Count: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mattmcdermott8@gmail.com",
            "name": "Matthew McDermott",
            "username": "mmcdermott"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1a55a06d9e5670e72fe0f4772fa2c67591b75e0f",
          "message": "Merge pull request #50 from mmcdermott/add_mkdocs\n\nAdd mkdocs and readthedocs",
          "timestamp": "2024-11-07T16:01:52-05:00",
          "tree_id": "2bb42fd3f7c755f2091a2f0a7adb2617020c378c",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/commit/1a55a06d9e5670e72fe0f4772fa2c67591b75e0f"
        },
        "date": 1731013448613,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.4094942,
            "unit": "seconds",
            "range": 0.014273725186530875,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 258117050,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26243508,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1218279956,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.229483,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.030515,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.00101470947265625,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.8048717975616455,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007390994071960449,
            "unit": "seconds",
            "range": 0.0001943184995636473,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007331089019775391,
            "unit": "seconds",
            "range": 0.0001940512276768824,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.5155763149261474,
            "unit": "seconds",
            "range": 0.030936112973246558,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4088,
            "unit": "bytes",
            "range": 101.19288512538814,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128088,
            "unit": "bytes",
            "range": 3238.1723240124206,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512088,
            "unit": "bytes",
            "range": 12952.689296049683,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 82900875.2,
            "unit": "bytes",
            "range": 4379618.452793043,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 165801662.4,
            "unit": "bytes",
            "range": 8759236.905586086,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 331603236.8,
            "unit": "bytes",
            "range": 17518473.811172172,
            "extra": "Count: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mattmcdermott8@gmail.com",
            "name": "Matthew McDermott",
            "username": "mmcdermott"
          },
          "committer": {
            "email": "mattmcdermott8@gmail.com",
            "name": "Matthew McDermott",
            "username": "mmcdermott"
          },
          "distinct": true,
          "id": "336feae714fe9be4c49779cd8b3d3ca35a763bb1",
          "message": "Fixed some docs issues and added a badge.",
          "timestamp": "2024-11-07T16:06:33-05:00",
          "tree_id": "f9d552208981952f5318d765e9022f38471b88d6",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/commit/336feae714fe9be4c49779cd8b3d3ca35a763bb1"
        },
        "date": 1731013725311,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.4827283999999998,
            "unit": "seconds",
            "range": 0.043254571114512384,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259296698,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26243508,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1227693885,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.273707,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.036308,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0011951923370361328,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 8.199075698852539,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007669061660766602,
            "unit": "seconds",
            "range": 0.00022908231328127055,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007610866546630859,
            "unit": "seconds",
            "range": 0.00022872986452698415,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.5450400590896607,
            "unit": "seconds",
            "range": 0.041747022126431145,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4088,
            "unit": "bytes",
            "range": 101.19288512538814,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128088,
            "unit": "bytes",
            "range": 3238.1723240124206,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512088,
            "unit": "bytes",
            "range": 12952.689296049683,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 83731134.4,
            "unit": "bytes",
            "range": 3647096.566831088,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 334924273.6,
            "unit": "bytes",
            "range": 14588386.267324353,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 167462180.8,
            "unit": "bytes",
            "range": 7294193.133662176,
            "extra": "Count: 10"
          }
        ]
      },
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
          "id": "ed47b970848d16e7ae6ec9a6f90fb0e27421e467",
          "message": "Fixes the issue with the unneeded bounds key being retained after flattening to a 1D tensor.",
          "timestamp": "2024-11-07T21:06:39Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/51/commits/ed47b970848d16e7ae6ec9a6f90fb0e27421e467"
        },
        "date": 1731014358779,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.4647577999999999,
            "unit": "seconds",
            "range": 0.05250025992983806,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 258117050,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26243508,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1216038343,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.286162,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.030198,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0010738372802734375,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 8.08823561668396,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007689923286437988,
            "unit": "seconds",
            "range": 0.00020254502665680577,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007632822990417481,
            "unit": "seconds",
            "range": 0.0002023415871466294,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.5357231855392456,
            "unit": "seconds",
            "range": 0.039745536170793384,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4088,
            "unit": "bytes",
            "range": 101.19288512538814,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128088,
            "unit": "bytes",
            "range": 3238.1723240124206,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512088,
            "unit": "bytes",
            "range": 12952.689296049683,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 82876913.6,
            "unit": "bytes",
            "range": 3839410.0457274537,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 331507390.4,
            "unit": "bytes",
            "range": 15357640.182909815,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 165753739.2,
            "unit": "bytes",
            "range": 7678820.091454907,
            "extra": "Count: 10"
          }
        ]
      },
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
          "id": "9e305c4da091b51ab6196df4662d847a2b623daf",
          "message": "Fixes the issue with the unneeded bounds key being retained after flattening to a 1D tensor.",
          "timestamp": "2024-11-07T21:06:39Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/51/commits/9e305c4da091b51ab6196df4662d847a2b623daf"
        },
        "date": 1731014474293,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.3820136,
            "unit": "seconds",
            "range": 0.01190225091316343,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 258117050,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26243508,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1227685005,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.175625,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.030052,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.000997304916381836,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.739313364028931,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007320220947265625,
            "unit": "seconds",
            "range": 0.00013277110422230543,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007263391494750977,
            "unit": "seconds",
            "range": 0.00013272164089508332,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.503622031211853,
            "unit": "seconds",
            "range": 0.02951077275560108,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4088,
            "unit": "bytes",
            "range": 101.19288512538814,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128088,
            "unit": "bytes",
            "range": 3238.1723240124206,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512088,
            "unit": "bytes",
            "range": 12952.689296049683,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 83875313.6,
            "unit": "bytes",
            "range": 3783487.3488407787,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 335500990.4,
            "unit": "bytes",
            "range": 15133949.395363115,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 167750539.2,
            "unit": "bytes",
            "range": 7566974.697681557,
            "extra": "Count: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mattmcdermott8@gmail.com",
            "name": "Matthew McDermott",
            "username": "mmcdermott"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6be9ea32d57476977d93957607e39b431e3ebe2",
          "message": "Merge pull request #51 from mmcdermott/48_flatten_length\n\nFixes the issue with the unneeded bounds key being retained after flattening to a 1D tensor.",
          "timestamp": "2024-11-07T16:20:59-05:00",
          "tree_id": "c16b0f9416951694e340b5136fd1be96733838a1",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/commit/d6be9ea32d57476977d93957607e39b431e3ebe2"
        },
        "date": 1731014583355,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.4340297999999998,
            "unit": "seconds",
            "range": 0.019243045930948388,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 258117050,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26243508,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1218275780,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.164108,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.030818,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.001085519790649414,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.9385294914245605,
            "unit": "seconds",
            "range": 0,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007459902763366699,
            "unit": "seconds",
            "range": 0.0001958155807644853,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007404179573059082,
            "unit": "seconds",
            "range": 0.0001957516314202948,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.5261358976364136,
            "unit": "seconds",
            "range": 0.03305956833530457,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4088,
            "unit": "bytes",
            "range": 101.19288512538814,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128088,
            "unit": "bytes",
            "range": 3238.1723240124206,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512088,
            "unit": "bytes",
            "range": 12952.689296049683,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 83532273.6,
            "unit": "bytes",
            "range": 4258526.517499894,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 334128830.4,
            "unit": "bytes",
            "range": 17034106.069999576,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 167064459.2,
            "unit": "bytes",
            "range": 8517053.034999788,
            "extra": "Count: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mattmcdermott8@gmail.com",
            "name": "Matthew McDermott",
            "username": "mmcdermott"
          },
          "committer": {
            "email": "mattmcdermott8@gmail.com",
            "name": "Matthew McDermott",
            "username": "mmcdermott"
          },
          "distinct": true,
          "id": "6a6eea4c80558ab3dd5784c8d0f85ba2b08a20be",
          "message": "Corrected github workflow issues.",
          "timestamp": "2025-02-28T13:01:21-05:00",
          "tree_id": "a46b871c171bc2732fa941228a8041cc66a52e3b",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/commit/6a6eea4c80558ab3dd5784c8d0f85ba2b08a20be"
        },
        "date": 1740765858824,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.4080952,
            "unit": "seconds",
            "range": 0.07241732272529933,
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 258117050,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26243508,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1216042219,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.311591,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.023013,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0011949539184570312,
            "unit": "seconds",
            "range": null,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.879128932952881,
            "unit": "seconds",
            "range": null,
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007889852523803711,
            "unit": "seconds",
            "range": 0.0003842189531312452,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007829759597778321,
            "unit": "seconds",
            "range": 0.0003840986759861757,
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.502176570892334,
            "unit": "seconds",
            "range": 0.06047278849178064,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4088,
            "unit": "bytes",
            "range": 101.19288512538814,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128088,
            "unit": "bytes",
            "range": 3238.1723240124206,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512088,
            "unit": "bytes",
            "range": 12952.689296049683,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 82876913.6,
            "unit": "bytes",
            "range": 3839410.0457274537,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 331507390.4,
            "unit": "bytes",
            "range": 15357640.182909815,
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 165753739.2,
            "unit": "bytes",
            "range": 7678820.091454907,
            "extra": "Count: 10"
          }
        ]
      },
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
          "id": "6c73d7985c109408d460489ecfa8ed2b70b2e049",
          "message": "Fix bugs, improve docs, and set up uv for development",
          "timestamp": "2026-03-12T14:44:29Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/54/commits/6c73d7985c109408d460489ecfa8ed2b70b2e049"
        },
        "date": 1775856360592,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.361554,
            "range": "0.04701686429357163",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 260208542,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26242798,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1227696723,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 8.429433,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.011437,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0014476776123046875,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.7647669315338135,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.000747349739074707,
            "range": "0.00007891638223336424",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007413745880126953,
            "range": "0.00007878994548476487",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.48946142196655273,
            "range": "0.052065762448057176",
            "unit": "seconds",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4072,
            "range": "101.19288512538814",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128072,
            "range": "3238.1723240124206",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512072,
            "range": "12952.689296049683",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 83532257.6,
            "range": "4258526.517499894",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 167064443.2,
            "range": "8517053.034999788",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 334128814.4,
            "range": "17034106.069999576",
            "unit": "bytes",
            "extra": "Count: 10"
          }
        ]
      },
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
          "id": "fed875e0e2f805b7457bf79adf5f4da2704f5ee4",
          "message": "Fix bugs, improve docs, and set up uv for development",
          "timestamp": "2026-03-12T14:44:29Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/54/commits/fed875e0e2f805b7457bf79adf5f4da2704f5ee4"
        },
        "date": 1775861630206,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.3595608000000001,
            "range": "0.043017452774425924",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 260208542,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26242798,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1214974035,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 8.423058,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.012262,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0014996528625488281,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.751404047012329,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007422937393188477,
            "range": "0.00006856137357254125",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007361353874206543,
            "range": "0.00006837651795218454",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.48957338333129885,
            "range": "0.05332833080774956",
            "unit": "seconds",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4072,
            "range": "101.19288512538814",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128072,
            "range": "3238.1723240124206",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512072,
            "range": "12952.689296049683",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 82900859.2,
            "range": "4379618.452793043",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 165801646.4,
            "range": "8759236.905586086",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 331603220.8,
            "range": "17518473.811172172",
            "unit": "bytes",
            "extra": "Count: 10"
          }
        ]
      },
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
          "id": "eb706bf7177aa6baabad1fbf4dfe1ccf0c344246",
          "message": "Fix bugs, improve docs, and set up uv for development",
          "timestamp": "2026-03-12T14:44:29Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/54/commits/eb706bf7177aa6baabad1fbf4dfe1ccf0c344246"
        },
        "date": 1775930509112,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CoreOps/GetItem_Int/small",
            "value": 0.000029447254000018576,
            "range": "0.000007105046028616132",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/medium",
            "value": 0.00002621793299998387,
            "range": "3.6748742827634503e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/large",
            "value": 0.000027094245000000683,
            "range": "0.0000014366228833724258",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/small",
            "value": 0.00005572979999897143,
            "range": "0.000016343815423906456",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/medium",
            "value": 0.00003421799999898667,
            "range": "0.000023770438639377497",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/large",
            "value": 0.00003687100000036025,
            "range": "0.00002813564819864811",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/small",
            "value": 0.000010984200002894795,
            "range": "0.000008334254984577508",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/medium",
            "value": 0.00000840179999954671,
            "range": "0.000005803159455609248",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/large",
            "value": 0.000009127000001285524,
            "range": "0.000006819263376624687",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/small",
            "value": 0.0002761970000022984,
            "range": "0.00003299200125429436",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/medium",
            "value": 0.0023262939999938227,
            "range": "0.00007064507585039533",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/large",
            "value": 0.026353419800003053,
            "range": "0.006334388531234246",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/small",
            "value": 0.0014479901999976618,
            "range": "0.00005005143139496728",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/medium",
            "value": 0.017648871800000167,
            "range": "0.006966196642650537",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/large",
            "value": 0.1857091660000009,
            "range": "0.003424320508406479",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/small",
            "value": 0.0016724783999990222,
            "range": "0.00012883867923918434",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/medium",
            "value": 0.0016414222000037172,
            "range": "0.0000539363534635225",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/large",
            "value": 0.0016172311999980594,
            "range": "0.00005957709896398726",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/small",
            "value": 0.0000655239999986179,
            "range": "0.000024930482347549303",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/medium",
            "value": 0.00007138099999792757,
            "range": "0.000019238849886027895",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/large",
            "value": 0.00010180379999837896,
            "range": "0.000032054385616556964",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/small",
            "value": 0.001216597599994884,
            "range": "0.0022954063725787745",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/small",
            "value": 0.0001009343999982093,
            "range": "0.00004402779706053088",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/medium",
            "value": 0.0002717790000019704,
            "range": "0.00011276887988712228",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/medium",
            "value": 0.00007706199999972796,
            "range": "0.000029626178495550433",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/large",
            "value": 0.0005268040000004249,
            "range": "0.0002456804137458125",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/large",
            "value": 0.0001220873999983496,
            "range": "0.00002622890181242654",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/small",
            "value": 0.0005908376000036241,
            "range": "0.000044463355809963596",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/medium",
            "value": 0.005242748800000641,
            "range": "0.000036422551336470535",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/large",
            "value": 0.056144389799996475,
            "range": "0.0066264626297156985",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Collate_NRT/small",
            "value": 0.004449491799999805,
            "range": "0.006275324495365901",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Collate_NaivePad/small",
            "value": 0.0000750038000035147,
            "range": "0.000005396207068851246",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Roundtrip_NRT/small",
            "value": 0.0019750056000020777,
            "range": "0.00006913388018443017",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Roundtrip_Pickle/small",
            "value": 0.0002366169999959311,
            "range": "0.00001986885111216889",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Collate_NRT/medium",
            "value": 0.0016572195999998486,
            "range": "0.00012943709009402918",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Collate_NaivePad/medium",
            "value": 0.00007763860000125078,
            "range": "0.000007739229692707496",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Roundtrip_NRT/medium",
            "value": 0.01656920199999945,
            "range": "0.00017512930474389006",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Roundtrip_Pickle/medium",
            "value": 0.0011183549999998377,
            "range": "0.000057203173005950224",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Collate_NRT/large",
            "value": 0.001657836800001178,
            "range": "0.0000615660048535059",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Collate_NaivePad/large",
            "value": 0.00007473500000401145,
            "range": "0.000007988882623287054",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Roundtrip_NRT/large",
            "value": 0.1603722181999956,
            "range": "0.002336859424194297",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Roundtrip_Pickle/large",
            "value": 0.01034959780000122,
            "range": "0.00035110723140567703",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.4133928,
            "range": "0.0472326557235561",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 260208542,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26242798,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1227699807,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 8.4582,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.01203,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.001527547836303711,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 8.064083576202393,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.000780300235748291,
            "range": "0.00007952497602217961",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007741083145141602,
            "range": "0.00007943840674986509",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.5068095207214356,
            "range": "0.058576971873826586",
            "unit": "seconds",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4072,
            "range": "101.19288512538814",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128072,
            "range": "3238.1723240124206",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512072,
            "range": "12952.689296049683",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 83875297.6,
            "range": "3783487.3488407787",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 167750523.2,
            "range": "7566974.697681557",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 335500974.4,
            "range": "15133949.395363115",
            "unit": "bytes",
            "extra": "Count: 10"
          }
        ]
      },
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
          "id": "515499d58011dda765216dd5a320219c108193a0",
          "message": "Fix bugs, improve docs, and set up uv for development",
          "timestamp": "2026-03-12T14:44:29Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/54/commits/515499d58011dda765216dd5a320219c108193a0"
        },
        "date": 1775932467447,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CoreOps/GetItem_Int/small",
            "value": 0.000030038734000015664,
            "range": "0.0000010812448354610295",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/medium",
            "value": 0.000021654637000011688,
            "range": "3.361244904648983e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/large",
            "value": 0.00002146683499998403,
            "range": "3.7153540834919555e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/small",
            "value": 0.000023380999996902575,
            "range": "0.00001140630113028075",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/medium",
            "value": 0.000024498999999877923,
            "range": "0.000013926351333309312",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/large",
            "value": 0.00003226059999690278,
            "range": "0.000027182124168455443",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/small",
            "value": 0.000009698799996726847,
            "range": "0.000006488663940366134",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/medium",
            "value": 0.000006461599997464873,
            "range": "0.0000028782641986321644",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/large",
            "value": 0.0000075134000013576955,
            "range": "0.000004356215189522947",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/small",
            "value": 0.00024535479999769904,
            "range": "0.000025855918254340077",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/medium",
            "value": 0.0021554997999942314,
            "range": "0.000046098055492173124",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/large",
            "value": 0.023862028200002782,
            "range": "0.005052850214600468",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/small",
            "value": 0.0013326521999999842,
            "range": "0.00006260316499520939",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/medium",
            "value": 0.015602744800000323,
            "range": "0.004869259408599816",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/large",
            "value": 0.16200811360000103,
            "range": "0.0024830817275185357",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch16",
            "value": 0.00040667060000316725,
            "range": "0.00006923939095499753",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch64",
            "value": 0.0014616157999967072,
            "range": "0.000049342405047903925",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch256",
            "value": 0.005664969399998654,
            "range": "0.00011347965918995443",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/small",
            "value": 0.000050478199997883164,
            "range": "0.000011402590434190374",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/medium",
            "value": 0.00005464660000029653,
            "range": "0.000013414647525099108",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/large",
            "value": 0.0000788550000009991,
            "range": "0.000024394592008444336",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/small",
            "value": 0.002431432599999539,
            "range": "0.00510196557478903",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/small",
            "value": 0.0000733202000020583,
            "range": "0.00004509800601296918",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/medium",
            "value": 0.00019190299999536365,
            "range": "0.00007669111960395296",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/medium",
            "value": 0.00005829179999921053,
            "range": "0.00002210968250290222",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/large",
            "value": 0.0004042530000020861,
            "range": "0.00011407824268647743",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/large",
            "value": 0.00009494300000199019,
            "range": "0.00004368204187257895",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/small",
            "value": 0.0005450612000032606,
            "range": "0.000028092895469610763",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/medium",
            "value": 0.004828721999999175,
            "range": "0.000043893720518510945",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/large",
            "value": 0.05054015660000175,
            "range": "0.005312093179136481",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Collate_NaivePad/small",
            "value": 0.00007604259999993701,
            "range": "0.000006612837232146553",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Roundtrip_NRT/small",
            "value": 0.0020420882000053097,
            "range": "0.00007636944943778906",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Roundtrip_Pickle/small",
            "value": 0.00023405860000025314,
            "range": "0.000023305811546727675",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Collate_NaivePad/medium",
            "value": 0.00007182840000439228,
            "range": "0.0000031603804061568266",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Roundtrip_NRT/medium",
            "value": 0.018294975199998474,
            "range": "0.0003208331179286589",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Roundtrip_Pickle/medium",
            "value": 0.0011501946000009866,
            "range": "0.00007367928991993428",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Collate_NaivePad/large",
            "value": 0.00007562640000458032,
            "range": "0.000011273563223535105",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Roundtrip_NRT/large",
            "value": 0.16746874659999947,
            "range": "0.000839526344771924",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Roundtrip_Pickle/large",
            "value": 0.010549411200000237,
            "range": "0.0005775890691230281",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.1842476,
            "range": "0.03767910605760418",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 260208542,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26242798,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1227699207,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 8.158873,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.010647,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0014100074768066406,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 6.877880334854126,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0005842005729675293,
            "range": "0.00006599943418657371",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.000578922176361084,
            "range": "0.00006570882580832696",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.44136662483215333,
            "range": "0.0450832501634918",
            "unit": "seconds",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4072,
            "range": "101.19288512538814",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128072,
            "range": "3238.1723240124206",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512072,
            "range": "12952.689296049683",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 83875297.6,
            "range": "3783487.3488407787",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 167750523.2,
            "range": "7566974.697681557",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 335500974.4,
            "range": "15133949.395363115",
            "unit": "bytes",
            "extra": "Count: 10"
          }
        ]
      },
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
          "id": "ac3a0269745f22fe608b73e4c0e28d5889d42ac4",
          "message": "Fix bugs, improve docs, and set up uv for development",
          "timestamp": "2026-03-12T14:44:29Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/54/commits/ac3a0269745f22fe608b73e4c0e28d5889d42ac4"
        },
        "date": 1775937481109,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CoreOps/GetItem_Int/small",
            "value": 0.000032157337999990434,
            "range": "0.0000073269858058841715",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/medium",
            "value": 0.00002899046400001737,
            "range": "7.967604359876826e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/large",
            "value": 0.000029651929999999992,
            "range": "7.558850495166691e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/small",
            "value": 0.000028994399997372966,
            "range": "0.000011206088849210748",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/medium",
            "value": 0.00003306000000122822,
            "range": "0.000017918409319528443",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/large",
            "value": 0.00003773059999900852,
            "range": "0.000026142058780114966",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/small",
            "value": 0.00001038159999779964,
            "range": "0.000006997612617282024",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/medium",
            "value": 0.000007514199995739545,
            "range": "0.00000361890400994793",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/large",
            "value": 0.000008524199995463277,
            "range": "0.000004983691570898067",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/small",
            "value": 0.00026521179999861033,
            "range": "0.000017641430173813213",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/medium",
            "value": 0.0022571024000001215,
            "range": "0.000039038046162532694",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/large",
            "value": 0.02464438419999908,
            "range": "0.005226290582997172",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/small",
            "value": 0.0013719489999971302,
            "range": "0.000045271711544356585",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/medium",
            "value": 0.01659698999999648,
            "range": "0.006307033503326128",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/large",
            "value": 0.17206755139999927,
            "range": "0.001978149473683383",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch16",
            "value": 0.000471574200000191,
            "range": "0.00006120661270413211",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch64",
            "value": 0.0016175597999989577,
            "range": "0.00006086721911027555",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch256",
            "value": 0.006246008599998731,
            "range": "0.00011314570088839618",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/small",
            "value": 0.00006067139999856863,
            "range": "0.000013812869339189846",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/medium",
            "value": 0.00006909319999977015,
            "range": "0.000014899824167608516",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/large",
            "value": 0.00009246140000129799,
            "range": "0.000023389529482545867",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/small",
            "value": 0.00025634359999457954,
            "range": "0.0001401559213996758",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/small",
            "value": 0.00007779359999915414,
            "range": "0.000032210682046997424",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/medium",
            "value": 0.00024962500000071943,
            "range": "0.00011141900420387542",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/medium",
            "value": 0.00007189479999851756,
            "range": "0.00002831157558018026",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/large",
            "value": 0.0005715111999990086,
            "range": "0.0002860933795229248",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/large",
            "value": 0.0001035637999990513,
            "range": "0.000023799240863514836",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/small",
            "value": 0.0005549021999968317,
            "range": "0.000020153659067405802",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/medium",
            "value": 0.004926874800000291,
            "range": "0.000053606205688401093",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/large",
            "value": 0.053187516599999186,
            "range": "0.006133338491061625",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Collate_NaivePad/small",
            "value": 0.0000754268000008551,
            "range": "0.000008098185888850351",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Roundtrip_NRT/small",
            "value": 0.0019365330000027825,
            "range": "0.00006851208032113543",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Roundtrip_Pickle/small",
            "value": 0.0003269116000041095,
            "range": "0.00020373013000822923",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Collate_NaivePad/medium",
            "value": 0.00007089460000315739,
            "range": "0.0000033926102527800685",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Roundtrip_NRT/medium",
            "value": 0.01706586240000263,
            "range": "0.00023147831213648576",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Roundtrip_Pickle/medium",
            "value": 0.0010971903999973166,
            "range": "0.00006850035845649734",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Collate_NaivePad/large",
            "value": 0.00007370979999734572,
            "range": "0.000008391504552734237",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Roundtrip_NRT/large",
            "value": 0.17112211920000106,
            "range": "0.010034760687457676",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Roundtrip_Pickle/large",
            "value": 0.00984843539999929,
            "range": "0.0005350062944758693",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.3042394000000002,
            "range": "0.040880427826763384",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 260208542,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26242798,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1227681195,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 8.507627,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.011729,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0014293193817138672,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.4595537185668945,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007372112274169922,
            "range": "0.00007185372395681395",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007313556671142578,
            "range": "0.00007160218571047098",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.4633394002914429,
            "range": "0.046206663097666086",
            "unit": "seconds",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4072,
            "range": "101.19288512538814",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128072,
            "range": "3238.1723240124206",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512072,
            "range": "12952.689296049683",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 84019476.8,
            "range": "3909225.6151984315",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 168038881.6,
            "range": "7818451.230396863",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 336077691.2,
            "range": "15636902.460793726",
            "unit": "bytes",
            "extra": "Count: 10"
          }
        ]
      },
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
          "id": "8a4714ed8bea556c55264b1231737aa9f79678cb",
          "message": "Set up repo to use uv and fix CI/RTD",
          "timestamp": "2026-03-12T14:44:29Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/56/commits/8a4714ed8bea556c55264b1231737aa9f79678cb"
        },
        "date": 1775938605072,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.3562394,
            "range": "0.039063599857155566",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259159966,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26242798,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1214978931,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 8.501774,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.012511,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0013790130615234375,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.728322744369507,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007518815994262695,
            "range": "0.00007378317098126338",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007457112312316894,
            "range": "0.00007360941612658244",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.4854527473449707,
            "range": "0.05010158507425084",
            "unit": "seconds",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4072,
            "range": "101.19288512538814",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128072,
            "range": "3238.1723240124206",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512072,
            "range": "12952.689296049683",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 82756680,
            "range": "4225563.431067309",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 165513288,
            "range": "8451126.862134619",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 331026504,
            "range": "16902253.724269237",
            "unit": "bytes",
            "extra": "Count: 10"
          }
        ]
      },
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
          "id": "98b611e90e6e74cdb1fb4bbc9c9fe7a8d2995e46",
          "message": "Fix docstrings, type annotations, and two bugs in ragged_numpy",
          "timestamp": "2026-03-12T14:44:29Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/57/commits/98b611e90e6e74cdb1fb4bbc9c9fe7a8d2995e46"
        },
        "date": 1775950611570,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.2671486,
            "range": "0.027239152442759727",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259159966,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26242798,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1227705675,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 8.392966,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.011124,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0012714862823486328,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.194732189178467,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007331253051757813,
            "range": "0.00006800551512210705",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.000727259635925293,
            "range": "0.00006789227707467343",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.44597229957580564,
            "range": "0.039092025971237794",
            "unit": "seconds",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4072,
            "range": "101.19288512538814",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128072,
            "range": "3238.1723240124206",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512072,
            "range": "12952.689296049683",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 83388078.4,
            "range": "4124521.2501636543",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 333552097.6,
            "range": "16498085.000654617",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 166776084.8,
            "range": "8249042.500327309",
            "unit": "bytes",
            "extra": "Count: 10"
          }
        ]
      },
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
          "id": "6f64684d5bdf4267690add390cea5ddc440dbd6d",
          "message": "Add micro-benchmarks for core NRT operations",
          "timestamp": "2026-03-12T14:44:29Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/58/commits/6f64684d5bdf4267690add390cea5ddc440dbd6d"
        },
        "date": 1775950617552,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.2972696,
            "range": "0.03393541122928011",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259159966,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26242798,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1227689007,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 8.447725,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.011505,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0013577938079833984,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.351003170013428,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007353899955749512,
            "range": "0.00006440168846845654",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007295151710510254,
            "range": "0.00006435753799134152",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.46024906635284424,
            "range": "0.043430297908231205",
            "unit": "seconds",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4072,
            "range": "101.19288512538814",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128072,
            "range": "3238.1723240124206",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512072,
            "range": "12952.689296049683",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 83875297.6,
            "range": "3783487.3488407787",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 335500974.4,
            "range": "15133949.395363115",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 167750523.2,
            "range": "7566974.697681557",
            "unit": "bytes",
            "extra": "Count: 10"
          }
        ]
      },
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
          "id": "3f3cf8540832dd24a6c850bc8f7607ac0d11623c",
          "message": "Fix docstrings, type annotations, and two bugs in ragged_numpy",
          "timestamp": "2026-03-12T14:44:29Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/57/commits/3f3cf8540832dd24a6c850bc8f7607ac0d11623c"
        },
        "date": 1775955086251,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.2038418,
            "range": "0.043200738410352664",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259159966,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26242798,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1216020329,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 8.345595,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.0099,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0013856887817382812,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 6.948690414428711,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0005890192031860351,
            "range": "0.00006374484997818742",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0005835981369018555,
            "range": "0.00006357783175861225",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.449973464012146,
            "range": "0.0557105684456946",
            "unit": "seconds",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4072,
            "range": "101.19288512538814",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128072,
            "range": "3238.1723240124206",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512072,
            "range": "12952.689296049683",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 82732718.4,
            "range": "3661655.467560965",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 330930657.6,
            "range": "14646621.87024386",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 165465364.8,
            "range": "7323310.93512193",
            "unit": "bytes",
            "extra": "Count: 10"
          }
        ]
      },
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
          "id": "4b076f4a50e5932970f8b450c8970a299690e6a0",
          "message": "Add micro-benchmarks for core NRT operations",
          "timestamp": "2026-03-12T14:44:29Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/58/commits/4b076f4a50e5932970f8b450c8970a299690e6a0"
        },
        "date": 1775955121245,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.2250877999999998,
            "range": "0.04129406199080536",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259159966,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26242798,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1216019201,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 8.468333,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.011153,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0014944076538085938,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.015756607055664,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0005969244003295899,
            "range": "0.00006584187126931532",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.000591504955291748,
            "range": "0.00006565470333238935",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.45852108001708985,
            "range": "0.0542971776959528",
            "unit": "seconds",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4072,
            "range": "101.19288512538814",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128072,
            "range": "3238.1723240124206",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512072,
            "range": "12952.689296049683",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 83388078.4,
            "range": "4124521.2501636543",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 166776084.8,
            "range": "8249042.500327309",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 333552097.6,
            "range": "16498085.000654617",
            "unit": "bytes",
            "extra": "Count: 10"
          }
        ]
      },
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
          "id": "3a5466bd73adcdd6ba6d7eea26cdbcbd086d2f81",
          "message": "Fix docstrings, type annotations, and two bugs in ragged_numpy",
          "timestamp": "2026-03-12T14:44:29Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/57/commits/3a5466bd73adcdd6ba6d7eea26cdbcbd086d2f81"
        },
        "date": 1775955910711,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.3567700000000003,
            "range": "0.03562701939538854",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259159966,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26242798,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1218286358,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 8.423315,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.012266,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0013670921325683594,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.666187286376953,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007601334571838378,
            "range": "0.0000709338712289144",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007539861679077149,
            "range": "0.00007080939482244464",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.48376247882843015,
            "range": "0.05425245650410895",
            "unit": "seconds",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4072,
            "range": "101.19288512538814",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128072,
            "range": "3238.1723240124206",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512072,
            "range": "12952.689296049683",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 83021076.8,
            "range": "4003526.3800785537",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 166042081.6,
            "range": "8007052.760157107",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 332084091.2,
            "range": "16014105.520314215",
            "unit": "bytes",
            "extra": "Count: 10"
          }
        ]
      },
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
          "id": "80fcc81bfa07171b79e8846c92414540795ad974",
          "message": "Add micro-benchmarks for core NRT operations",
          "timestamp": "2026-03-12T14:44:29Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/58/commits/80fcc81bfa07171b79e8846c92414540795ad974"
        },
        "date": 1775956549705,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.208553,
            "range": "0.042861241378425514",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259159966,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26242798,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1218250538,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 8.304831,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.01042,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0014452934265136719,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 6.941434860229492,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0006043079376220703,
            "range": "0.00006622783442779688",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0005987173080444336,
            "range": "0.00006608012531267085",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.4484450340270996,
            "range": "0.05014923411645473",
            "unit": "seconds",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4072,
            "range": "101.19288512538814",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128072,
            "range": "3238.1723240124206",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512072,
            "range": "12952.689296049683",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 83045038.4,
            "range": "4523332.235725831",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 332179937.6,
            "range": "18093328.942903325",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 166090004.8,
            "range": "9046664.471451662",
            "unit": "bytes",
            "extra": "Count: 10"
          }
        ]
      },
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
          "id": "a7938ff86edda4b8d66f6baf73bb499e5f731cba",
          "message": "Updates to dev environment, tests, and some bug fixes.",
          "timestamp": "2026-03-12T14:44:29Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/59/commits/a7938ff86edda4b8d66f6baf73bb499e5f731cba"
        },
        "date": 1775956821026,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.2895302000000002,
            "range": "0.03511768390283752",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259159966,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26242798,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1227688575,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 8.394953,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.011892,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.001373291015625,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.310856103897095,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007367537498474121,
            "range": "0.00006364994348048382",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007308241844177246,
            "range": "0.00006358969828747194",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.4561791896820068,
            "range": "0.0409381176499228",
            "unit": "seconds",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4072,
            "range": "101.19288512538814",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128072,
            "range": "3238.1723240124206",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512072,
            "range": "12952.689296049683",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 83388078.4,
            "range": "4124521.2501636543",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 333552097.6,
            "range": "16498085.000654617",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 166776084.8,
            "range": "8249042.500327309",
            "unit": "bytes",
            "extra": "Count: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mattmcdermott8@gmail.com",
            "name": "Matthew McDermott",
            "username": "mmcdermott"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "15fdcfa322f8971231692956118d1492d6961613",
          "message": "Merge pull request #59 from mmcdermott/dev\n\nUpdates to dev environment, tests, and some bug fixes.",
          "timestamp": "2026-04-11T21:28:11-04:00",
          "tree_id": "00c0a9118f5818f549bc493981ad653e7edb10e3",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/commit/15fdcfa322f8971231692956118d1492d6961613"
        },
        "date": 1775957346067,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.4071248,
            "range": "0.039742592733736974",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259159966,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26242798,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1216001485,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.920832,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.015467,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0012977123260498047,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.906081438064575,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0005487935066223144,
            "range": "0.00017406956544287918",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0005435066223144531,
            "range": "0.00017395295262242797",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.5627898931503296,
            "range": "0.05024209443553621",
            "unit": "seconds",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4072,
            "range": "101.19288512538814",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128072,
            "range": "3238.1723240124206",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512072,
            "range": "12952.689296049683",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 83388078.4,
            "range": "4124521.2501636543",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 333552097.6,
            "range": "16498085.000654617",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 166776084.8,
            "range": "8249042.500327309",
            "unit": "bytes",
            "extra": "Count: 10"
          }
        ]
      },
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
          "id": "dfc6df72931c5c747f0efc21b07fb3a79523d64a",
          "message": "Fix CI: pin pre-commit deps and emit coverage XML for Codecov",
          "timestamp": "2026-04-12T01:28:19Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/61/commits/dfc6df72931c5c747f0efc21b07fb3a79523d64a"
        },
        "date": 1776373324009,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.2490942,
            "range": "0.029325236473040632",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259159966,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26242798,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1218266402,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 8.34973,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.011145,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.001302480697631836,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.106601238250732,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007223509788513183,
            "range": "0.00006262596444135479",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007165457725524903,
            "range": "0.00006259299527301205",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.43965587615966795,
            "range": "0.04039031715906001",
            "unit": "seconds",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4072,
            "range": "101.19288512538814",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128072,
            "range": "3238.1723240124206",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512072,
            "range": "12952.689296049683",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 83388078.4,
            "range": "4124521.2501636543",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 166776084.8,
            "range": "8249042.500327309",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 333552097.6,
            "range": "16498085.000654617",
            "unit": "bytes",
            "extra": "Count: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mattmcdermott8@gmail.com",
            "name": "Matthew McDermott",
            "username": "mmcdermott"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f923b80ea459581a3159b239f070659f611becd9",
          "message": "Fix CI: pin pre-commit deps and emit coverage XML for Codecov (#61)\n\nPre-commit's mdformat hook was failing on main because the unpinned\nmdformat-mkdocs additional dependency resolved to a version that tried\nto import `zip_equal` from a newer more_itertools release that no\nlonger exports it. Pin all mdformat additional_dependencies to known\ncompatible versions and bump mdformat rev to 0.7.22.\n\nTests were running with `--cov=src` but never emitted a coverage.xml,\nso the codecov action reported \"Found 0 coverage files\" and marked the\nstatus unknown. Add `--cov-report=xml` and point the action at\ncoverage.xml.\n\nCo-authored-by: Claude Opus 4.7 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-04-16T18:06:05-04:00",
          "tree_id": "9f9249f957d22d2b486e8e165fbc55b8d221a1a2",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/commit/f923b80ea459581a3159b239f070659f611becd9"
        },
        "date": 1776377221536,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.1891436,
            "range": "0.037935119530586515",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259159966,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26242798,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1216032569,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 8.195042,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.010794,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0013680458068847656,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 6.824451923370361,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0005929151535034179,
            "range": "0.00006562196613688373",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0005876729965209961,
            "range": "0.0000654562624939479",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.4416262149810791,
            "range": "0.04884453913178747",
            "unit": "seconds",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4072,
            "range": "101.19288512538814",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128072,
            "range": "3238.1723240124206",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512072,
            "range": "12952.689296049683",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 83219937.6,
            "range": "3379406.179730266",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 166439803.2,
            "range": "6758812.359460532",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 332879534.4,
            "range": "13517624.718921063",
            "unit": "bytes",
            "extra": "Count: 10"
          }
        ]
      },
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
          "id": "97f176a16ef50aa2839a84ff59b0fdf999f72e35",
          "message": "Allow loading a subset of keys from a JNRT tensors_fp (#60)",
          "timestamp": "2026-04-16T22:06:10Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/62/commits/97f176a16ef50aa2839a84ff59b0fdf999f72e35"
        },
        "date": 1776377271772,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.299879,
            "range": "0.09811467189722257",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259159966,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26242798,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1227694347,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 8.29855,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.011146,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0014729499816894531,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.395509243011475,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0006092245101928711,
            "range": "0.00007233608530472237",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0006037640571594238,
            "range": "0.00007205165365736332",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.4922982931137085,
            "range": "0.0808037339294146",
            "unit": "seconds",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4072,
            "range": "101.19288512538814",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128072,
            "range": "3238.1723240124206",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512072,
            "range": "12952.689296049683",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 83875297.6,
            "range": "3783487.3488407787",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 167750523.2,
            "range": "7566974.697681557",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 335500974.4,
            "range": "15133949.395363115",
            "unit": "bytes",
            "extra": "Count: 10"
          }
        ]
      },
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
          "id": "b8f0952bf72d75124c8b313c2a97a595d7a9a591",
          "message": "Allow loading a subset of keys from a JNRT tensors_fp (#60)",
          "timestamp": "2026-04-16T22:06:10Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/62/commits/b8f0952bf72d75124c8b313c2a97a595d7a9a591"
        },
        "date": 1776377953978,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.3132188,
            "range": "0.028675134405962473",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259159966,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26242798,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1218268730,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 8.411026,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.011598,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0013756752014160156,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.431346416473389,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007461544990539551,
            "range": "0.00006537209495637047",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007402762413024902,
            "range": "0.00006532349631713726",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.4654428243637085,
            "range": "0.04535035678692412",
            "unit": "seconds",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4072,
            "range": "101.19288512538814",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128072,
            "range": "3238.1723240124206",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512072,
            "range": "12952.689296049683",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 82900859.2,
            "range": "4379618.452793043",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 165801646.4,
            "range": "8759236.905586086",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 331603220.8,
            "range": "17518473.811172172",
            "unit": "bytes",
            "extra": "Count: 10"
          }
        ]
      },
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
          "id": "9b31abdb1519bafd236df905fe835827a261526e",
          "message": "Allow loading a subset of keys from a JNRT tensors_fp (#60)",
          "timestamp": "2026-04-16T22:06:10Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/62/commits/9b31abdb1519bafd236df905fe835827a261526e"
        },
        "date": 1776379351036,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.2786138,
            "range": "0.027519407500880513",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259159966,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26242798,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1227686379,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 8.389533,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.011377,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0012962818145751953,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.260300636291504,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007319110870361328,
            "range": "0.00006441052850405346",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007258435249328613,
            "range": "0.0000643155272215614",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.4519228219985962,
            "range": "0.0429899733336084",
            "unit": "seconds",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4072,
            "range": "101.19288512538814",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128072,
            "range": "3238.1723240124206",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512072,
            "range": "12952.689296049683",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 83243899.2,
            "range": "3980214.5955327027",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 332975380.8,
            "range": "15920858.382130811",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 166487726.4,
            "range": "7960429.1910654055",
            "unit": "bytes",
            "extra": "Count: 10"
          }
        ]
      },
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
          "id": "7680d0caded57a5be4efc222f45829f8227b9429",
          "message": "Treat NaN values as equal in __eq__ (closes #63)",
          "timestamp": "2026-04-16T22:06:10Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/64/commits/7680d0caded57a5be4efc222f45829f8227b9429"
        },
        "date": 1776451591858,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.0263976,
            "range": "0.04416559330859435",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 258111390,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26242798,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1218270998,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 6.468872,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.009108,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0012083053588867188,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 5.848914861679077,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.00047009191513061523,
            "range": "0.00005530904484137882",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.00046575775146484377,
            "range": "0.0000550506805347928",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.39171130657196046,
            "range": "0.053181618104798274",
            "unit": "seconds",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4072,
            "range": "101.19288512538814",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128072,
            "range": "3238.1723240124206",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512072,
            "range": "12952.689296049683",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 83045038.4,
            "range": "4523332.235725831",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 166090004.8,
            "range": "9046664.471451662",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 332179937.6,
            "range": "18093328.942903325",
            "unit": "bytes",
            "extra": "Count: 10"
          }
        ]
      },
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
          "id": "07243ebcbcefe1df580c460b8b9f951ccb1bccdb",
          "message": "Treat NaN values as equal in __eq__ (closes #63)",
          "timestamp": "2026-04-16T22:06:10Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/64/commits/07243ebcbcefe1df580c460b8b9f951ccb1bccdb"
        },
        "date": 1776452266148,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.3610072,
            "range": "0.04646464426528879",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 258242462,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26242798,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1227679359,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 8.446554,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.01278,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.001451730728149414,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.720820665359497,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.000758149242401123,
            "range": "0.0000708647130544261",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007520124435424804,
            "range": "0.00007081910293466699",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.4863729953765869,
            "range": "0.05478955291800681",
            "unit": "seconds",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4072,
            "range": "101.19288512538814",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128072,
            "range": "3238.1723240124206",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512072,
            "range": "12952.689296049683",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 83243899.2,
            "range": "3980214.5955327027",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 166487726.4,
            "range": "7960429.1910654055",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 332975380.8,
            "range": "15920858.382130811",
            "unit": "bytes",
            "extra": "Count: 10"
          }
        ]
      },
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
          "id": "6ede1b9e5fb0e78795cb1f7c0712f022c25dddad",
          "message": "Allows loading a subset of keys and an equality checker that supports equals_nan",
          "timestamp": "2026-04-16T22:06:10Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/65/commits/6ede1b9e5fb0e78795cb1f7c0712f022c25dddad"
        },
        "date": 1776453869006,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.3305142,
            "range": "0.045277905855947584",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259291038,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26242798,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1218257618,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 8.375474,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.012502,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0015909671783447266,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.565493822097778,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007415186882019042,
            "range": "0.00006714340064148717",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007354945182800293,
            "range": "0.00006709242330092551",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.4755057096481323,
            "range": "0.046646028275932026",
            "unit": "seconds",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4072,
            "range": "101.19288512538814",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128072,
            "range": "3238.1723240124206",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512072,
            "range": "12952.689296049683",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 82533857.6,
            "range": "4219034.2102560755",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 330135214.4,
            "range": "16876136.841024302",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 165067643.2,
            "range": "8438068.420512151",
            "unit": "bytes",
            "extra": "Count: 10"
          }
        ]
      },
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
          "id": "a2db2df073cdecdac86b7d48a6e83c2a5dbfbfb7",
          "message": "Make keys= subset load truly lazy",
          "timestamp": "2026-04-16T22:06:10Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/66/commits/a2db2df073cdecdac86b7d48a6e83c2a5dbfbfb7"
        },
        "date": 1776454703332,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.2537536,
            "range": "0.05123099734828632",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259159966,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26242798,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1216035005,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 8.341956,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.011144,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0014519691467285156,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.205725431442261,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0006109989166259766,
            "range": "0.00007979166597437139",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0006054410934448242,
            "range": "0.00007960466704236671",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.46935076713562013,
            "range": "0.05491520122200761",
            "unit": "seconds",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4072,
            "range": "101.19288512538814",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128072,
            "range": "3238.1723240124206",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512072,
            "range": "12952.689296049683",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 83364116.8,
            "range": "3549314.116586471",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 166728161.6,
            "range": "7098628.233172942",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 333456251.2,
            "range": "14197256.466345884",
            "unit": "bytes",
            "extra": "Count: 10"
          }
        ]
      },
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
          "id": "e52ef41881ce805f05db9de8ec90b0ce9aa0e250",
          "message": "Make keys= subset load truly lazy",
          "timestamp": "2026-04-16T22:06:10Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/66/commits/e52ef41881ce805f05db9de8ec90b0ce9aa0e250"
        },
        "date": 1776456114928,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.4051658,
            "range": "0.01959384698572809",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259159966,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26242798,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1218275474,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 8.607485,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.013935,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0013761520385742188,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.937008619308472,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007537654876708984,
            "range": "0.00006727268681341326",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007476137161254883,
            "range": "0.00006716348566090745",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.5088451147079468,
            "range": "0.04920245992453104",
            "unit": "seconds",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4072,
            "range": "101.19288512538814",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128072,
            "range": "3238.1723240124206",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512072,
            "range": "12952.689296049683",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 82900859.2,
            "range": "4379618.452793043",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 165801646.4,
            "range": "8759236.905586086",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 331603220.8,
            "range": "17518473.811172172",
            "unit": "bytes",
            "extra": "Count: 10"
          }
        ]
      },
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
          "id": "a181c5338576f3a2b35ae8466168f8dbefd29b87",
          "message": "Make keys= subset load truly lazy",
          "timestamp": "2026-04-16T22:06:10Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/66/commits/a181c5338576f3a2b35ae8466168f8dbefd29b87"
        },
        "date": 1776457984745,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.4010034,
            "range": "0.03335692296660377",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259159966,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26242798,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1227705395,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.919281,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.014813,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0013644695281982422,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.8772711753845215,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0005367908477783203,
            "range": "0.000054808058271812825",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0005312882423400879,
            "range": "0.00005466635117780024",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.5627183437347412,
            "range": "0.04972206436650943",
            "unit": "seconds",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4072,
            "range": "101.19288512538814",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128072,
            "range": "3238.1723240124206",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512072,
            "range": "12952.689296049683",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 83532257.6,
            "range": "4258526.517499894",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 167064443.2,
            "range": "8517053.034999788",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 334128814.4,
            "range": "17034106.069999576",
            "unit": "bytes",
            "extra": "Count: 10"
          }
        ]
      },
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
          "id": "bc06957205b400c09e4946e933bc3495821b2620",
          "message": "Make keys= subset load truly lazy",
          "timestamp": "2026-04-16T22:06:10Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/66/commits/bc06957205b400c09e4946e933bc3495821b2620"
        },
        "date": 1776458589448,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.4032836,
            "range": "0.046349046309497446",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259159966,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26242798,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1218269314,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.883991,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.015974,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.001332998275756836,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.904881715774536,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0005389666557312012,
            "range": "0.000057473345622739484",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0005337170600891114,
            "range": "0.000057277484568509864",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.5632538080215455,
            "range": "0.0515340420264406",
            "unit": "seconds",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4072,
            "range": "101.19288512538814",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128072,
            "range": "3238.1723240124206",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512072,
            "range": "12952.689296049683",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 83388078.4,
            "range": "4124521.2501636543",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 166776084.8,
            "range": "8249042.500327309",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 333552097.6,
            "range": "16498085.000654617",
            "unit": "bytes",
            "extra": "Count: 10"
          }
        ]
      },
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
          "id": "4ad3a9239e78bf38fc05749edd66c01e5fc165f9",
          "message": "Allows loading a subset of keys and an equality checker that supports equals_nan",
          "timestamp": "2026-04-16T22:06:10Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/65/commits/4ad3a9239e78bf38fc05749edd66c01e5fc165f9"
        },
        "date": 1776458885698,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.2845744,
            "range": "0.050501930777943266",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259159966,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26242798,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1216024565,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 8.620803,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.011281,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.001500844955444336,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.392122745513916,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0006158565521240234,
            "range": "0.00007406566572307879",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0006101234436035156,
            "range": "0.00007386230996564537",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.4834126472473145,
            "range": "0.06178729785477718",
            "unit": "seconds",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4072,
            "range": "101.19288512538814",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128072,
            "range": "3238.1723240124206",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512072,
            "range": "12952.689296049683",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 83219937.6,
            "range": "3379406.179730266",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 332879534.4,
            "range": "13517624.718921063",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 166439803.2,
            "range": "6758812.359460532",
            "unit": "bytes",
            "extra": "Count: 10"
          }
        ]
      },
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
          "id": "13ad6cf85c02208ecd9ba66d0bf868e7cd9599ab",
          "message": "Address PR #65 review feedback (validation order, subset guard, benchmark gating, baseline doctest)",
          "timestamp": "2026-04-16T22:06:10Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/67/commits/13ad6cf85c02208ecd9ba66d0bf868e7cd9599ab"
        },
        "date": 1776459611197,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.2252554,
            "range": "0.03745412659908269",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259159966,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26242798,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1227680259,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 8.410925,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.010478,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0014331340789794922,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.027226448059082,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0006132197380065918,
            "range": "0.00006691416250347036",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0006076637268066406,
            "range": "0.00006674859993851745",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.4544083118438721,
            "range": "0.05280141946776434",
            "unit": "seconds",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4072,
            "range": "101.19288512538814",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128072,
            "range": "3238.1723240124206",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512072,
            "range": "12952.689296049683",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 83875297.6,
            "range": "3783487.3488407787",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 167750523.2,
            "range": "7566974.697681557",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 335500974.4,
            "range": "15133949.395363115",
            "unit": "bytes",
            "extra": "Count: 10"
          }
        ]
      },
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
          "id": "8c2299a88c548254d746b170344f2d4e3e509102",
          "message": "Address PR #65 review feedback (validation order, subset guard, benchmark gating, baseline doctest)",
          "timestamp": "2026-04-16T22:06:10Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/67/commits/8c2299a88c548254d746b170344f2d4e3e509102"
        },
        "date": 1776509462754,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.2701006,
            "range": "0.020859885169858594",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259159966,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Memory/write",
            "value": 26242798,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/read",
            "value": 99332,
            "unit": "bytes"
          },
          {
            "name": "Usage/Memory/benchmark",
            "value": 1218264506,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 8.328389,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.010744,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0014393329620361328,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.279208421707153,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.000659151554107666,
            "range": "0.001929397609807335",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0006535355567932129,
            "range": "0.0019293231193966015",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.4654038190841675,
            "range": "0.05256012518602728",
            "unit": "seconds",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/static_code",
            "value": 4072,
            "range": "101.19288512538814",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim1/mask",
            "value": 128072,
            "range": "3238.1723240124206",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/timedelta",
            "value": 512072,
            "range": "12952.689296049683",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dim2/mask",
            "value": 82900859.2,
            "range": "4379618.452793043",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 331603220.8,
            "range": "17518473.811172172",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 165801646.4,
            "range": "8759236.905586086",
            "unit": "bytes",
            "extra": "Count: 10"
          }
        ]
      }
    ]
  }
}