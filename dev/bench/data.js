window.BENCHMARK_DATA = {
  "lastUpdate": 1776719906883,
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
          "id": "138200e9a8b610a32a056558c4bc6d49cb36c1ac",
          "message": "Allows loading a subset of keys and an equality checker that supports equals_nan",
          "timestamp": "2026-04-16T22:06:10Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/65/commits/138200e9a8b610a32a056558c4bc6d49cb36c1ac"
        },
        "date": 1776510804587,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.2592496,
            "range": "0.031913459265646225",
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
            "value": 1218254486,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 8.392712,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.01221,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0013723373413085938,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.179538726806641,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.000745963191986084,
            "range": "0.0011922839629343342",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007401374816894532,
            "range": "0.0011922576448381498",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.438769793510437,
            "range": "0.04101023332116173",
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
          "id": "d4a1f95277d237fd6f6228fd8b00bf10bc253f01",
          "message": "Allows loading a subset of keys and an equality checker that supports equals_nan",
          "timestamp": "2026-04-16T22:06:10Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/65/commits/d4a1f95277d237fd6f6228fd8b00bf10bc253f01"
        },
        "date": 1776511147159,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.2758212,
            "range": "0.03640142857361514",
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
            "value": 1227685911,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 8.426699,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.011513,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.001355886459350586,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.24539589881897,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007537948608398438,
            "range": "0.0013010275679811033",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007478711128234863,
            "range": "0.0013009970365747369",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.44511966705322265,
            "range": "0.04105299120223421",
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
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 336077691.2,
            "range": "15636902.460793726",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 168038881.6,
            "range": "7818451.230396863",
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
          "id": "92416c5936412f4bc58183f1f29e41df95656ef0",
          "message": "Allows loading a subset of keys and an equality checker that supports equals_nan",
          "timestamp": "2026-04-16T22:06:10Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/65/commits/92416c5936412f4bc58183f1f29e41df95656ef0"
        },
        "date": 1776512749655,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.3356128,
            "range": "0.03695191362703747",
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
            "value": 1227711447,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 8.3295,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.011877,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0014414787292480469,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.550607204437256,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007681971549987793,
            "range": "0.0015084450624701011",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007623356819152832,
            "range": "0.0015084026816030037",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.47114076614379885,
            "range": "0.05244592533081493",
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
          "id": "dfc10149d5ad21b0569189c70096e2e88e10c58a",
          "message": "Allows loading a subset of keys and an equality checker that supports equals_nan (#65)\n\n* Allow loading a subset of keys from a JNRT tensors_fp (#60) (#62)\n\n* Fix CI: pin pre-commit deps and emit coverage XML for Codecov (#61)\n\nPre-commit's mdformat hook was failing on main because the unpinned\nmdformat-mkdocs additional dependency resolved to a version that tried\nto import `zip_equal` from a newer more_itertools release that no\nlonger exports it. Pin all mdformat additional_dependencies to known\ncompatible versions and bump mdformat rev to 0.7.22.\n\nTests were running with `--cov=src` but never emitted a coverage.xml,\nso the codecov action reported \"Found 0 coverage files\" and marked the\nstatus unknown. Add `--cov-report=xml` and point the action at\ncoverage.xml.\n\nCo-authored-by: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Allow loading a subset of keys from a JNRT tensors_fp (#60)\n\nDownstream consumers frequently know up front which dynamic fields\nthey will actually use from a batch. Expose a `keys=` argument on\n`JointNestedRaggedTensorDict.__init__` that, when paired with\n`tensors_fp=`, restricts which user-level keys are read from the\nbacking safetensors archive. The per-dim `bounds` entries required\nfor slicing and dense reconstruction are always kept.\n\nMissing keys raise a KeyError listing what is actually available.\nPassing `keys=` without `tensors_fp=` raises ValueError. No changes\nto __getitem__, to_dense, vstack, concatenate, slicing, or the\nraw_tensors/processed_tensors construction paths.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Collapse split f-string to satisfy black\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Only load bounds up to the deepest requested dim\n\nPreviously `_load_subset` eagerly loaded every `dim*/bounds` entry in\nthe archive regardless of which user keys were requested. For deep\nragged structures this defeats the I/O savings the subset load is\nmeant to provide, since higher-dim bounds can be larger than the\nleaf data itself. Track the max requested key dim and only pull the\n`dim*/bounds` entries at or below that depth — the deeper bounds are\nnever referenced by operations that only touch the loaded keys.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Add .equals() with equal_nan support, keep __eq__ IEEE-faithful (#64)\n\nAdds a configurable JointNestedRaggedTensorDict.equals(other, equal_nan=...)\nmethod so callers can opt into treating NaN as equal to itself (useful for\nsave/load roundtrips where NaN is a sentinel value). __eq__ delegates to\n.equals() with equal_nan=False, preserving IEEE 754 semantics as the default\nbehavior of the == operator.\n\nCloses #63.\n\nCo-authored-by: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Add micro-benchmarks and baseline comparisons for core NRT operations (#58)\n\nMicro-benchmarks for individual operations with synthetic data:\n- __getitem__ (int index and slice) at 3 scales (100/1k/10k)\n- to_dense() for 1D, 2D, 3D ragged tensors at 3 scales\n- vstack() + to_dense() collation path at 3 batch sizes (16/64/256)\n- concatenate() at 3 scales\n- save/load round-trip at 3 scales\n- to_dense() with multiple keys sharing bounds at 3 scales\n\nBaseline comparisons:\n- NRT collation vs naive list-of-lists padding\n- NRT save/load round-trip vs pickle round-trip\n\nAll benchmarks use synthetic data (no sample_dataset dependency) and\noutput in the customSmallerIsBetter JSON format for github-action-benchmark.\n\nRef: #55\n\nCo-authored-by: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Make keys= subset load truly lazy (#66)\n\n* Make keys= subset load truly lazy\n\nPreviously, passing keys= to JointNestedRaggedTensorDict(tensors_fp=...) called\nf.get_tensor(k) for every selected key during __init__ and stashed the result\nas self._tensors. That made the subset strictly smaller than the full file,\nbut every selected tensor was still eagerly materialized into memory at\nconstruction time — defeating the main motivation of the feature for callers\nthat only iterate one subset key at a time.\n\nThis commit restores laziness:\n  - __init__ now calls _resolve_subset_keys, which opens the file only for\n    metadata (safe_open + .keys()) to validate requested keys and pick the\n    required dim*/bounds entries. No tensor values are read.\n  - The resolved set is stored on self._subset_keys; self._tensors stays None.\n  - _tensor_keys returns the subset when _subset_keys is set.\n  - _tensor_at_key (already lazy via safe_open) now reads only when callers\n    ask for a specific tensor.\n  - The .tensors property (the one materializer left) loads just the subset\n    via safe_open + get_tensor when _subset_keys is set, rather than\n    load_file'ing the whole archive.\n\nAlso addresses two Copilot review points on #60:\n  - keys=<str|bytes> now raises TypeError instead of silently iterating\n    character-by-character.\n  - keys=[] (or any empty iterable) now raises ValueError instead of\n    returning an object with no usable tensors.\n\nDoctests cover the new validation errors and the lazy-read path.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Cover subset branch of .tensors property with a doctest\n\nThe lazy subset load only hits the materialization path if something\neventually touches .tensors. The prior doctests all went through the\nlazy _tensor_at_key path, leaving the subset branch of the property\nuncovered (codecov/patch failure on #66).\n\nAdds a short doctest that forces materialization on a subset-loaded\ninstance and also documents the property's behavior.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Deterministic subset order + reject non-str/reserved keys\n\nAddresses PR #66 review feedback:\n\n  - (mmcdermott on Copilot's order comment) Subset materialization\n    previously iterated `self._subset_keys` as a `set`, making dict\n    insertion order depend on set-hash randomization. Now\n    `_resolve_subset_keys` returns a `list` in the archive's raw\n    storage order (as reported by `safe_open().keys()`), so\n    materializing a subset gives the same deterministic order on every\n    run. Doctest on `.tensors` pins the order.\n\n  - (Copilot) `_resolve_subset_keys` now rejects non-str elements with\n    a clear `TypeError` and rejects the reserved meta-names `bounds`\n    and `mask` (defined here as `_RESERVED_SUBSET_NAMES`) with a clear\n    `ValueError`, instead of silently producing an object with no\n    usable user tensors. Doctests cover both rejections.\n\nNote: the user asked whether the subset order could match a full\n`load_file` default. `safe_open().keys()` and `load_file()` actually\nreturn different orders on the same file (load_file groups meta keys\nfirst), and matching load_file order would require eagerly reading\nevery tensor, which defeats the lazy subset load. Using safe_open's\nfile-metadata order keeps the load lazy while still being deterministic\nand tied to the archive, which is the spirit of the ask.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Clarify subset order docstring and exclude mask from KeyError hint\n\nAddresses two further Copilot nits on PR #66:\n\n  - _resolve_subset_keys docstring previously said the returned list\n    \"produces the same iteration order as a full load_file\" — which is\n    not actually true on this file format (safe_open and load_file\n    return different orders). Rewritten to name safe_open().keys() as\n    the source of determinism and note the load_file divergence\n    explicitly.\n\n  - The KeyError raised for missing keys listed all user-visible names\n    but excluded only 'bounds', so a file with a 'mask' meta-key would\n    surface 'mask' as if it were selectable. Now filters using the\n    shared _RESERVED_SUBSET_NAMES tuple, so the hint matches what the\n    rejection logic above actually accepts.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Address PR #65 review feedback (validation order, subset guard, benchmark gating, baseline doctest) (#67)\n\n* Address PR #65 review feedback\n\nBatch of follow-ups on dev before it cuts a release to main:\n\n  - _resolve_subset_keys now materializes keys= into a list and\n    validates element types before set(...) construction. Fixes a case\n    where passing a non-hashable non-str (e.g. a list by mistake) would\n    surface a generic \"unhashable type\" TypeError instead of the\n    intended element-type validation error.\n\n  - _tensor_at_key now explicitly rejects any key that isn't in the\n    loaded subset when a subset is active. Previously the safe_open\n    path would silently return data for unselected keys, quietly\n    violating the subset contract. Now a caller that asks for a\n    non-selected key gets a KeyError pointing at the loaded subset.\n\n  - Add a baseline side-by-side doctest contrasting a default load\n    (all keys visible) with a subset load (only requested keys), so\n    the feature's effect is obvious at a glance from the docstring.\n\n  - benchmark/test_micro.py is now opt-in. Setting\n    NRT_RUN_BENCHMARKS=1 enables collection; otherwise the module\n    skips at import time. rootutils is now imported via\n    pytest.importorskip, and the output directory is configurable via\n    NRT_BENCHMARK_OUTPUT_DIR. Previously, running bare `pytest`\n    locally would collect test_micro_benchmarks(), which could fail at\n    import time on machines without rootutils installed or would run\n    the full benchmark suite and write into benchmark/outputs.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Wire micro benchmarks into the benchmark workflow\n\nRevert the env-var / importorskip gating added in the previous commit.\nThe real problem with test_micro.py was just that the file name started\nwith `test_`, which makes bare pytest auto-collect it. The existing\nbenchmark/run.py avoids that simply by not starting with `test_` — it's\nstill a pytest target when explicitly pointed at the file, just not\nauto-collected. Matching that convention is the right fix, not adding\nan opt-in env var.\n\n  - Renamed benchmark/test_micro.py -> benchmark/run_micro.py to match\n    benchmark/run.py's convention. The test function inside is\n    unchanged and is still discovered when the file is named on the\n    pytest command line, so the benchmark workflow can run it the\n    same way it runs run.py.\n\n  - Dropped the NRT_RUN_BENCHMARKS env-var skip and the\n    pytest.importorskip(\"rootutils\") — the benchmark workflow installs\n    the `benchmarks` dependency group which provides rootutils, just\n    like it does for run.py. Back to a plain top-level\n    `import rootutils`.\n\n  - .github/workflows/benchmark.yaml now runs both benchmark/run.py\n    and benchmark/run_micro.py in its pytest invocation, and posts\n    benchmark/outputs/micro.json as a second github-action-benchmark\n    chart (\"Micro-Benchmark\") so the micro results are actually\n    tracked over time instead of being written and discarded.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Drop noise-prone Baseline tier from micro benchmarks\n\nThe Baseline tier contained three entries that turned out to be either\nrunner-variance noise or redundant with better-structured core-op\nbenchmarks:\n\n  - Baseline/Roundtrip_Pickle — pure pickle.dump/load on Python lists,\n    no NRT code runs. Just tripped the 150% alert threshold in CI\n    (1.72x slower vs. prior run on small scale) with no NRT change\n    responsible. Any future alert here would be equally meaningless.\n\n  - Baseline/Collate_NaivePad — pure numpy.zeros + Python-loop\n    padding, no NRT code runs. Same class of false-alert risk as\n    pickle; its timings reflect runner load and numpy/Python version,\n    not anything in this repo.\n\n  - Baseline/Roundtrip_NRT — duplicates CoreOps/Save + CoreOps/Load\n    from bench_save_load, which already tracks save and load timings\n    separately across small/medium/large scales. No signal lost by\n    removing this entry.\n\nAlso drops the now-unused _naive_padded_collate helper, make_2d_raw\ngenerator, and the pickle import. test_micro_benchmarks now only\ndispatches the Core NRT ops. A comment in the dispatcher records why\nthe Baseline tier was removed so the next maintainer doesn't try to\nre-add it by reflex.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Pin numpy>=1.21 for np.array_equal(equal_nan=...) support\n\nJointNestedRaggedTensorDict.equals uses np.array_equal(..., equal_nan=...),\nwhich was added in NumPy 1.19 (June 2020). Without a floor on the numpy\ndep, installs on older NumPy would break at runtime with \"unexpected\nkeyword argument 'equal_nan'\". Since requires-python is >=3.10 and NumPy\n1.21 is the first release with Python 3.10 wheels (and also has the\nequal_nan feature), numpy>=1.21 is the loosest honest floor — pinning\nlower would be misleading because <1.21 can't install on 3.10 anyway.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Pin safetensors>=0.3.1 and refresh uv.lock\n\nFollow-up to the numpy floor pin: also records an honest floor for\nsafetensors. All safetensors APIs this package uses (safe_open with\nframework=\"np\", get_tensor, get_slice, keys, plus safetensors.numpy\nload_file / save_file) have been stable since the 0.3.x series, with\n0.3.1 being the first release where that surface was reliably usable.\nPinning >=0.3.1 makes the tested-against floor explicit — there's no\ngood reason to leave it unpinned, and a documented floor is strictly\nmore useful than an implicit one.\n\nAlso refreshes uv.lock so `uv sync --locked` in CI matches the updated\npyproject.toml (the numpy pin in the previous commit left the lockfile\nout of sync, which was the cause of the CI failure).\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.7 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-04-18T07:54:18-04:00",
          "tree_id": "8d2c09a1e9fa7d53a262700f973f793e2d78722a",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/commit/dfc10149d5ad21b0569189c70096e2e88e10c58a"
        },
        "date": 1776513318056,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.3348331999999998,
            "range": "0.02910371421657619",
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
            "value": 1227707787,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 8.494729,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.012108,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0014064311981201172,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.5453879833221436,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007669489860534668,
            "range": "0.0013407303787012121",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007609419822692871,
            "range": "0.0013407093127693372",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.47098207473754883,
            "range": "0.04471845695851415",
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
          "id": "2beee6c51e51832f6992211447ffdd9b0aacc796",
          "message": "Use enumerate in _slice_single squeeze-dim loop",
          "timestamp": "2026-04-18T11:54:23Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/71/commits/2beee6c51e51832f6992211447ffdd9b0aacc796"
        },
        "date": 1776657055776,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.3937516,
            "range": "0.03999910520623695",
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
            "value": 1227697151,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 8.037922,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.014826,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0013399124145507812,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.823433876037598,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0005701972961425782,
            "range": "0.0013763647363239377",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0005650852203369141,
            "range": "0.0013763230458070637",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.5508081436157226,
            "range": "0.04925846932241949",
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
          "id": "45185d97f1ebed340985f7a58d9da98a925b429b",
          "message": "Use enumerate in _slice_single squeeze-dim loop (closes #36) (#71)\n\nCosmetic refactor: replace manual index tracking with enumerate as\nflagged by ruff SIM113. No behavior change.\n\nCo-authored-by: Claude Opus 4.7 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-04-20T06:54:59-04:00",
          "tree_id": "2b51da7a0cd62e5c3cf64724b8bb596137a6ab96",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/commit/45185d97f1ebed340985f7a58d9da98a925b429b"
        },
        "date": 1776682565101,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.4113552,
            "range": "0.03903181033080782",
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
            "value": 1214274211,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 7.923672,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.015546,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0013947486877441406,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.920135498046875,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0005783501625061036,
            "range": "0.001409514224336955",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0005728023529052734,
            "range": "0.001409493383404885",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.5574004411697387,
            "range": "0.0529413895379812",
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
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 165465364.8,
            "range": "7323310.93512193",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 330930657.6,
            "range": "14646621.87024386",
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
          "id": "dedbbb979dc28b8693bfb1965dcc7b3bd69bed48",
          "message": "Make concatenate/vstack linear instead of O(N^2)",
          "timestamp": "2026-04-20T10:55:05Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/72/commits/dedbbb979dc28b8693bfb1965dcc7b3bd69bed48"
        },
        "date": 1776682677568,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.1690544,
            "range": "0.023703310524052515",
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
            "value": 1218302866,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 8.355653,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.011542,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.001439809799194336,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 6.714035272598267,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007572405815124512,
            "range": "0.0012659640125025626",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.000751438045501709,
            "range": "0.0012659262696668992",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.39084548950195314,
            "range": "0.040121652277348555",
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
            "value": 82876897.6,
            "range": "3839410.0457274537",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 331507374.4,
            "range": "15357640.182909815",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 165753723.2,
            "range": "7678820.091454907",
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
          "id": "29f056abc4ae7a85368f0c4a546620b41caa1313",
          "message": "Infer dtypes via np.asarray instead of Python-level isinstance",
          "timestamp": "2026-04-20T10:55:05Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/73/commits/29f056abc4ae7a85368f0c4a546620b41caa1313"
        },
        "date": 1776682742479,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.2682153999999999,
            "range": "0.03032295219466831",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259159942,
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
            "value": 1216022033,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 2.006834,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.010067,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0013871192932128906,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.205305099487305,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007461791038513184,
            "range": "0.0013007483064941916",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007403481483459472,
            "range": "0.001300723659531382",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.44318904876708987,
            "range": "0.04374955471172649",
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
          "id": "720e9d01d9794bfec031d54be8eeaee71b95d1c7",
          "message": "Make concatenate/vstack linear instead of O(N^2)",
          "timestamp": "2026-04-20T10:55:05Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/72/commits/720e9d01d9794bfec031d54be8eeaee71b95d1c7"
        },
        "date": 1776684429794,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.0768412,
            "range": "0.030441268726844325",
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
            "value": 1218300538,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 8.296346,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.01132,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0014133453369140625,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 6.269992828369141,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0006188217163085938,
            "range": "0.0013703533592119102",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0006136713027954102,
            "range": "0.0013703065106909777",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.3790452003479004,
            "range": "0.03938542707636449",
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
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 334128814.4,
            "range": "17034106.069999576",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 167064443.2,
            "range": "8517053.034999788",
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
          "id": "7547ca2bab8cfa87eb89c6b4d96e34614e77c167",
          "message": "Infer dtypes via np.asarray instead of Python-level isinstance",
          "timestamp": "2026-04-20T10:55:05Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/73/commits/7547ca2bab8cfa87eb89c6b4d96e34614e77c167"
        },
        "date": 1776684477302,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.351593,
            "range": "0.042508683577591036",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 258111366,
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
            "value": 1227691059,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 2.012806,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.01047,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0014674663543701172,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.654892683029175,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007848102569580079,
            "range": "0.0015035927264869747",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007788217544555665,
            "range": "0.0015035574929971253",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.47502803802490234,
            "range": "0.04816096846925328",
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
            "value": 83731118.4,
            "range": "3647096.566831088",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 334924257.6,
            "range": "14588386.267324353",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 167462164.8,
            "range": "7294193.133662176",
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
          "id": "9742b4bc6039213aa4330cb9204747976b2938ca",
          "message": "Make concatenate/vstack linear instead of O(N^2)",
          "timestamp": "2026-04-20T10:55:05Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/72/commits/9742b4bc6039213aa4330cb9204747976b2938ca"
        },
        "date": 1776692090905,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.2060154,
            "range": "0.03236109454730276",
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
            "value": 1214999003,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 8.387329,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.012986,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.001462697982788086,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 6.888734817504883,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007629542350769043,
            "range": "0.0013332639725820877",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007569293022155762,
            "range": "0.0013332282573478669",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.4077168941497803,
            "range": "0.043918655117967755",
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
          "id": "654ddcf1f66fd9d2b177a2990eab73594f3089c3",
          "message": "Infer dtypes via np.asarray instead of Python-level isinstance",
          "timestamp": "2026-04-20T10:55:05Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/73/commits/654ddcf1f66fd9d2b177a2990eab73594f3089c3"
        },
        "date": 1776692123591,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.2852042,
            "range": "0.02585825237134132",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 258242438,
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
            "value": 1218253814,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 2.028796,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.009998,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0013806819915771484,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.311063051223755,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007485605239868164,
            "range": "0.001293976424435879",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007426032066345214,
            "range": "0.001293940617583395",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.45109310150146487,
            "range": "0.046377244067596704",
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
          "id": "ba32dfabe9d83266c0210b5e0d98038e431e46c2",
          "message": "Make concatenate/vstack linear instead of O(N^2) (#72)\n\n* Make concatenate/vstack linear instead of O(N^2) (closes #68)\n\nThe previous implementation grew an accumulator by doing one\nnp.concatenate per input tensor, which allocates and copies the full\ncurrent result on every iteration — O(N^2) in the number of inputs.\nAt batch=256 this runs ~140x slower than a one-shot np.concatenate;\nat batch=1024, ~470x slower. Since vstack is the dataloader collation\nhot path, this dominates training iteration time.\n\nSeparate the validation loop (touches every tensor once) from the data\ngather loop (collects all per-key arrays into lists, then does a single\nnp.concatenate per key). Offsets for bounds keys are accumulated as\nPython ints during the gather pass, so only one allocation per output\nkey remains. Behavior is unchanged — same validation errors, same\noutput dict keys, dtypes, and bound semantics.\n\nMeasured on the issue's probe (100-row 2D items, best-of-3):\n  N=16:    0.35ms -> 0.17ms   (2.0x)\n  N=64:    2.36ms -> 0.62ms   (3.8x)\n  N=256:  10.76ms -> 2.50ms   (4.3x)\n  N=1024:141.88ms -> 9.86ms  (14.4x)\n\nScaling is now linear in N, matching the one-shot np.concatenate floor.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Address PR #72 review: preserve key order, improve concat error detail\n\n- Iterate tensors[0].tensors in insertion order instead of iterating a\n  set from keys_at_dim(). Set iteration of strings is hash-randomized\n  across runs (PYTHONHASHSEED), which would have broken byte-\n  reproducibility of save_file output. The previous implementation\n  preserved order via dict(tensors[0].tensors); this restores that\n  guarantee while keeping the linear concatenation structure.\n- Exception path now includes per-part shape+dtype instead of just\n  key+dim. The original dumped full arrays (unreadable for large\n  inputs); shapes+dtypes give actionable diagnostics without the\n  noise.\n- Add a doctest locking in the key-order invariant.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Preserve bounds dtype in concatenate offset accumulation\n\nAccumulate offset as a numpy scalar of the bounds' own dtype. A plain\nPython int offset triggers scalar-to-array dtype promotion on numpy\n< 2 — e.g., int32 bounds + large Python int could upcast to int64,\nbreaking byte-reproducibility of save_file output for disk-roundtripped\nJNRTs. Using `b[-1]` as the seed and `offset + b[-1]` as the update\nkeeps the offset's dtype bound to the input.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.7 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-04-20T10:17:22-04:00",
          "tree_id": "190685c17b8d9b5e1c1e6953175290c7d362225a",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/commit/ba32dfabe9d83266c0210b5e0d98038e431e46c2"
        },
        "date": 1776694738363,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.1898116,
            "range": "0.037095991411464364",
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
            "value": 1227728247,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 8.476255,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.012484,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0014684200286865234,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 6.812816381454468,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007627654075622559,
            "range": "0.0013566858489352839",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007568052291870118,
            "range": "0.0013566417480867774",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.39976370334625244,
            "range": "0.045176018319220634",
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
          "id": "6990469f56aa0121e7d6210f3c837ccc447e7887",
          "message": "Infer dtypes via np.asarray instead of Python-level isinstance",
          "timestamp": "2026-04-20T14:19:09Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/73/commits/6990469f56aa0121e7d6210f3c837ccc447e7887"
        },
        "date": 1776694948050,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.1700366,
            "range": "0.03290692976107059",
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
            "value": 1215000679,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 1.839534,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.01441,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0014209747314453125,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 6.717705726623535,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0005590571403503418,
            "range": "0.0013336115617480176",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0005538498878479004,
            "range": "0.0013335863960661101",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.44158480167388914,
            "range": "0.046511118047425186",
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
          "id": "85adcc1a3e0acb1b7422638993631ac169910a4f",
          "message": "Infer dtypes via np.asarray instead of Python-level isinstance",
          "timestamp": "2026-04-20T14:19:09Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/73/commits/85adcc1a3e0acb1b7422638993631ac169910a4f"
        },
        "date": 1776699200356,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.0875308,
            "range": "0.03290838929817577",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 258111391,
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
            "value": 1227748863,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 2.095749,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.009046,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.001440286636352539,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 6.318972110748291,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0006332409858703613,
            "range": "0.0014276256721334074",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0006278860092163086,
            "range": "0.0014275717276085078",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.38057913780212405,
            "range": "0.04151929634735609",
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
          "id": "9063c083ea10ddf72cd6f277b052650b4cd69582",
          "message": "Infer dtypes via np.asarray instead of Python-level isinstance",
          "timestamp": "2026-04-20T14:19:09Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/73/commits/9063c083ea10ddf72cd6f277b052650b4cd69582"
        },
        "date": 1776699392930,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.2076132000000002,
            "range": "0.03984674919236945",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 258111391,
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
            "value": 1218290602,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 2.013152,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.011053,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0015041828155517578,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 6.972605466842651,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.000778223991394043,
            "range": "0.0014965165887356436",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007720290184020996,
            "range": "0.0014964732762016357",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.40479121208190916,
            "range": "0.03657756897333231",
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
            "value": 82876897.6,
            "range": "3839410.0457274537",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 165753723.2,
            "range": "7678820.091454907",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 331507374.4,
            "range": "15357640.182909815",
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
          "id": "a2c2accc8a3529da1b65515d0920902de514e01d",
          "message": "Infer dtypes via np.asarray instead of Python-level isinstance",
          "timestamp": "2026-04-20T14:19:09Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/73/commits/a2c2accc8a3529da1b65515d0920902de514e01d"
        },
        "date": 1776699666850,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.1483382,
            "range": "0.026423247400734613",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259159967,
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
            "value": 1216076685,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 2.052028,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.009846,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0013217926025390625,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 6.59926438331604,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007484187126159668,
            "range": "0.0012408795678738246",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007426752090454101,
            "range": "0.0012408616277570963",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.382693886756897,
            "range": "0.03469731772980788",
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
          "id": "23a18f8d3ff49477b9618bd2157ec45e26d5a013",
          "message": "Infer dtypes via np.asarray instead of Python-level isinstance",
          "timestamp": "2026-04-20T14:19:09Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/73/commits/23a18f8d3ff49477b9618bd2157ec45e26d5a013"
        },
        "date": 1776701016723,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.2178784,
            "range": "0.037331812423191876",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259159967,
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
            "value": 1218297142,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 2.06871,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.010344,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0014047622680664062,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 6.96758246421814,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007734031677246094,
            "range": "0.0016449417626586973",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007673248291015625,
            "range": "0.0016448977705353417",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.41110413074493407,
            "range": "0.049944961414435364",
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
          "id": "9f28d2d1c04fd995658382cd5caa093406fc07a0",
          "message": "Infer dtypes via np.asarray instead of Python-level isinstance",
          "timestamp": "2026-04-20T14:19:09Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/73/commits/9f28d2d1c04fd995658382cd5caa093406fc07a0"
        },
        "date": 1776702241836,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.216037,
            "range": "0.041700661487560964",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 258111391,
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
            "value": 1216065045,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 2.039794,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.010305,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0014328956604003906,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 6.951881408691406,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.000773698616027832,
            "range": "0.001541790366399788",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007676165580749512,
            "range": "0.001541754042048975",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.4100841283798218,
            "range": "0.04622021525780391",
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
            "value": 82876897.6,
            "range": "3839410.0457274537",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 331507374.4,
            "range": "15357640.182909815",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 165753723.2,
            "range": "7678820.091454907",
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
          "id": "789b071c29f520e6b4f5fab673e6a4304d9cdb8a",
          "message": "Infer dtypes via np.asarray instead of Python-level isinstance",
          "timestamp": "2026-04-20T14:19:09Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/73/commits/789b071c29f520e6b4f5fab673e6a4304d9cdb8a"
        },
        "date": 1776703081790,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.1743957999999999,
            "range": "0.03486834201966561",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 258111391,
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
            "value": 1218305190,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 1.840206,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.013837,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0013353824615478516,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 6.729483127593994,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0005704357147216797,
            "range": "0.0012925615770552166",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0005650219917297363,
            "range": "0.0012925208079115917",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.44093539714813235,
            "range": "0.0420598344547764",
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
            "value": 83508296,
            "range": "3705223.408843251",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 167016520,
            "range": "7410446.817686502",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 334032968,
            "range": "14820893.635373004",
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
          "id": "73b27cabd9facf67b18d649aff4fbc702bc93e1f",
          "message": "Merge pull request #73 from mmcdermott/perf/infer-dtype-asarray\n\nInfer dtypes via np.asarray instead of Python-level isinstance",
          "timestamp": "2026-04-20T12:41:53-04:00",
          "tree_id": "6f2c2d8bc9d1628365f71b00c453e29c93698617",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/commit/73b27cabd9facf67b18d649aff4fbc702bc93e1f"
        },
        "date": 1776703371680,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.2133824,
            "range": "0.03904995250701167",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 258111391,
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
            "value": 1218304006,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 2.019048,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.010423,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0014574527740478516,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 6.931293249130249,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007801745414733887,
            "range": "0.0013602299478883183",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007742533683776856,
            "range": "0.0013602051799884872",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.4072242498397827,
            "range": "0.04543827840583342",
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
          "id": "23a9725caf7517ada63163dde25ddc5681719c2b",
          "message": "Reject reserved meta-names (bounds/mask) in raw-input constructor",
          "timestamp": "2026-04-20T16:42:25Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/77/commits/23a9725caf7517ada63163dde25ddc5681719c2b"
        },
        "date": 1776704038728,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 0.9322710000000001,
            "range": "0.038472035012458335",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259159967,
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
            "value": 1227734331,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 1.611572,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.008175,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0012679100036621094,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 5.451260328292847,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0004927387237548828,
            "range": "0.001533385044609174",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0004885333061218262,
            "range": "0.0015333316098677312",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.33885185718536376,
            "range": "0.04300404656415844",
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
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 336077691.2,
            "range": "15636902.460793726",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 168038881.6,
            "range": "7818451.230396863",
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
          "id": "6de2c1eecb239930863b2dc684dffc97e4b44e4c",
          "message": "Handle all-empty inner rows in flatten() (partial #46)",
          "timestamp": "2026-04-20T16:42:25Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/78/commits/6de2c1eecb239930863b2dc684dffc97e4b44e4c"
        },
        "date": 1776704149462,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.2194514,
            "range": "0.03450018407631833",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 258111391,
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
            "value": 1216082541,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 2.033114,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.01026,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0013957023620605469,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 6.970948696136475,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007820587158203125,
            "range": "0.0015667103669677349",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007757841110229493,
            "range": "0.0015666647900975303",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.4097338914871216,
            "range": "0.045327375160095267",
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
          "id": "0de48520101dd09d03ca3cee1034e5eb43fe7aa4",
          "message": "Raise IndexError on out-of-range dim-0 int indexing",
          "timestamp": "2026-04-20T16:42:25Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/79/commits/0de48520101dd09d03ca3cee1034e5eb43fe7aa4"
        },
        "date": 1776704277528,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.2679646,
            "range": "0.0445785727597867",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 257062815,
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
            "value": 1218310678,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 2.037722,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.010445,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.001447916030883789,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.271472454071045,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0008562954902648926,
            "range": "0.0017441932729437464",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0008501692771911621,
            "range": "0.0017441451551136185",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.4153960466384888,
            "range": "0.0493559533343591",
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
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 165067643.2,
            "range": "8438068.420512151",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 330135214.4,
            "range": "16876136.841024302",
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
          "id": "c8d493fc68d1a09ec858b2f3d6af091d81a31d68",
          "message": "Coalesce safe_open calls per __getitem__ (operation-scoped handle reuse)",
          "timestamp": "2026-04-20T16:42:25Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/80/commits/c8d493fc68d1a09ec858b2f3d6af091d81a31d68"
        },
        "date": 1776704606812,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 0.9610465999999999,
            "range": "0.0412361496359719",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259159967,
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
            "value": 1227723639,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 2.085435,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.009141,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0014264583587646484,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 5.4508349895477295,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0003459506034851074,
            "range": "0.0016441741370046188",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0003410965919494629,
            "range": "0.0016441218202852973",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.3893484592437744,
            "range": "0.04376237408861304",
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
          "id": "d9c470231538db055e9369a52359b36ce4359faa",
          "message": "Reject reserved meta-names (bounds/mask) in raw-input constructor",
          "timestamp": "2026-04-20T16:42:25Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/77/commits/d9c470231538db055e9369a52359b36ce4359faa"
        },
        "date": 1776704696232,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.246054,
            "range": "0.046625173243643125",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259159967,
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
            "value": 1216070649,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 2.030959,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.011235,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0014743804931640625,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 7.125255823135376,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007772696495056152,
            "range": "0.0016765717531543897",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007711909294128418,
            "range": "0.001676523839745388",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.42409257888793944,
            "range": "0.049532469396229024",
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
          "id": "8113c1e45dbd2192c2ab46b805b6145a3583d8d2",
          "message": "Handle all-empty inner rows in flatten() (partial #46)",
          "timestamp": "2026-04-20T16:42:25Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/78/commits/8113c1e45dbd2192c2ab46b805b6145a3583d8d2"
        },
        "date": 1776705762240,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.1673692,
            "range": "0.025635254703254198",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259159967,
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
            "value": 1218317302,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 2.017415,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.009968,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0013310909271240234,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 6.711488723754883,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0007616414070129395,
            "range": "0.0012170460345117407",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0007557278633117675,
            "range": "0.0012170105123054875",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.38877737522125244,
            "range": "0.03521678778536437",
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
          "id": "8eb89a246b01053c9e6010eae0730f77eff50a55",
          "message": "Reject reserved meta-names (bounds/mask) in raw-input constructor",
          "timestamp": "2026-04-20T16:42:25Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/77/commits/8eb89a246b01053c9e6010eae0730f77eff50a55"
        },
        "date": 1776706007828,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.1787198,
            "range": "0.03458764286128865",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259159967,
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
            "value": 1218294858,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 1.845211,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.013494,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0014040470123291016,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 6.772348642349243,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0005703656196594238,
            "range": "0.0014544818922923993",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0005651288986206055,
            "range": "0.0014544237248797392",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.44274702072143557,
            "range": "0.04552029684125489",
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
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 165067643.2,
            "range": "8438068.420512151",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 330135214.4,
            "range": "16876136.841024302",
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
          "id": "ae3d8731258a9a488e71b87e3e2f602a041953b9",
          "message": "Raise IndexError on out-of-range dim-0 int indexing",
          "timestamp": "2026-04-20T16:42:25Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/79/commits/ae3d8731258a9a488e71b87e3e2f602a041953b9"
        },
        "date": 1776706498340,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.2031186000000003,
            "range": "0.035646755228202244",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 258111391,
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
            "value": 1227726303,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 1.996691,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.009986,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0013737678527832031,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 6.934635877609253,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0008184974670410156,
            "range": "0.0013831185152454366",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0008125327110290527,
            "range": "0.0013830898180865147",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.3925422430038452,
            "range": "0.03898098709348381",
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
          "id": "641f8c6717b9cf85eb28fb35ea0198702afd5fa5",
          "message": "Coalesce safe_open calls per __getitem__ (operation-scoped handle reuse)",
          "timestamp": "2026-04-20T16:42:25Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/80/commits/641f8c6717b9cf85eb28fb35ea0198702afd5fa5"
        },
        "date": 1776706632708,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.010126,
            "range": "0.03768055169447704",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 258111391,
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
            "value": 1218309838,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 2.014903,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.010033,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0013959407806396484,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 5.6709723472595215,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.00040092802047729493,
            "range": "0.0013876153680158513",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0003951899528503418,
            "range": "0.00138758857403435",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.40044431686401366,
            "range": "0.04759055386193388",
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
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 332084091.2,
            "range": "16014105.520314215",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 166042081.6,
            "range": "8007052.760157107",
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
          "id": "e545bc61fa898078bdc2c4879340018eb05cc605",
          "message": "Coalesce safe_open calls per __getitem__ (operation-scoped handle reuse)",
          "timestamp": "2026-04-20T16:42:25Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/80/commits/e545bc61fa898078bdc2c4879340018eb05cc605"
        },
        "date": 1776706765125,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 0.9655616,
            "range": "0.028071123299574775",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259159967,
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
            "value": 1218303346,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 2.078697,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.010288,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.001361846923828125,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 5.43361759185791,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0003856863975524902,
            "range": "0.0012156558080782414",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.00038023929595947263,
            "range": "0.0012156227701466047",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.3821195840835571,
            "range": "0.0364850144078708",
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
          "id": "1c6b1dd962ba7094928b777c895b2e0ab410c19e",
          "message": "Raise IndexError on out-of-range int indexing (recursive across all dims)",
          "timestamp": "2026-04-20T16:42:25Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/79/commits/1c6b1dd962ba7094928b777c895b2e0ab410c19e"
        },
        "date": 1776708139205,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.1985542,
            "range": "0.07825081069356392",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259159967,
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
            "value": 1218305062,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 2.10757,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.009469,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0014495849609375,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 6.938812255859375,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0006877334594726563,
            "range": "0.0017654005951451735",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.000682300853729248,
            "range": "0.00176535001019507",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.422525954246521,
            "range": "0.052880852996799774",
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
          "id": "99983a029d610329dcdc4d716fb6ba0da1fe7825",
          "message": "Coalesce safe_open calls per __getitem__ (operation-scoped handle reuse)",
          "timestamp": "2026-04-20T16:42:25Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/80/commits/99983a029d610329dcdc4d716fb6ba0da1fe7825"
        },
        "date": 1776708194893,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.0395554,
            "range": "0.032333626378741535",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259159967,
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
            "value": 1227738563,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 1.860476,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.013847,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0013778209686279297,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 5.818788051605225,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0003393683433532715,
            "range": "0.0012602352781196054",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0003344602584838867,
            "range": "0.0012602084988258316",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.43141219615936277,
            "range": "0.03947263106559322",
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
          "id": "15f6384cae90db2f7e3ba0239833c6dbf90bb339",
          "message": "Raise IndexError on out-of-range int indexing (recursive across all dims)",
          "timestamp": "2026-04-20T16:42:25Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/79/commits/15f6384cae90db2f7e3ba0239833c6dbf90bb339"
        },
        "date": 1776709205329,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.1902918,
            "range": "0.04041207564206489",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259159967,
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
            "value": 1218312858,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 1.837092,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.013811,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0013778209686279297,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 6.8954548835754395,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0006200617790222168,
            "range": "0.0014353037362272514",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0006147075653076172,
            "range": "0.0014352616378922657",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.4365605115890503,
            "range": "0.04283195216921679",
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
          "id": "a5890df8d474128d67d38ff71a24633e65fe6751",
          "message": "Raise IndexError on out-of-range int indexing (recursive across all dims)",
          "timestamp": "2026-04-20T16:42:25Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/79/commits/a5890df8d474128d67d38ff71a24633e65fe6751"
        },
        "date": 1776709341501,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.1444502,
            "range": "0.048276271803028806",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 258111391,
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
            "value": 1227743511,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 2.082801,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.015192,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0014362335205078125,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 6.67296838760376,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0006953953742980957,
            "range": "0.001710729924970935",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0006901183128356933,
            "range": "0.0017106761323429894",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.3934206962585449,
            "range": "0.05317069715421736",
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
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 334128814.4,
            "range": "17034106.069999576",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 167064443.2,
            "range": "8517053.034999788",
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
          "id": "b45d8490b85a1123fa0b02dc1dfb94ae5db28f16",
          "message": "Coalesce safe_open calls per __getitem__ (operation-scoped handle reuse)",
          "timestamp": "2026-04-20T16:42:25Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/80/commits/b45d8490b85a1123fa0b02dc1dfb94ae5db28f16"
        },
        "date": 1776718033554,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.0267791999999998,
            "range": "0.039948191106735136",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259159967,
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
            "value": 1218322774,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 2.013706,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.010214,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0014390945434570312,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 5.767933368682861,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0004075681686401367,
            "range": "0.0014572704914142729",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.00040171308517456054,
            "range": "0.0014572544221375693",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.4070672273635864,
            "range": "0.04355000174935814",
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
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 334128814.4,
            "range": "17034106.069999576",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 167064443.2,
            "range": "8517053.034999788",
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
          "id": "c6175902760b79c7de2ed36d319e3c25e191919c",
          "message": "Coalesce safe_open calls per __getitem__ (operation-scoped handle reuse)",
          "timestamp": "2026-04-20T16:42:25Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/80/commits/c6175902760b79c7de2ed36d319e3c25e191919c"
        },
        "date": 1776718982039,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 0.9811471999999999,
            "range": "0.041049636974040425",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 258111391,
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
            "value": 1227744783,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 2.099746,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.009189,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0014858245849609375,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 5.5653276443481445,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.0003527682304382324,
            "range": "0.0016925232090099576",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0003479148864746094,
            "range": "0.0016924378795672933",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.3975722074508667,
            "range": "0.044097927412770424",
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
          "id": "eefdf37c4d237461670f9455578fc9bc12b3812f",
          "message": "Release candidate: 0.3.0 — correctness fixes + disk I/O perf",
          "timestamp": "2026-04-20T16:42:25Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/81/commits/eefdf37c4d237461670f9455578fc9bc12b3812f"
        },
        "date": 1776719194240,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 1.0440046,
            "range": "0.03386513760196449",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259159967,
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
            "value": 1227741603,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 2.019815,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.01023,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0015001296997070312,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 5.855666160583496,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.00041279773712158205,
            "range": "0.0014090761540958806",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0004070415496826172,
            "range": "0.0014090328606967955",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.41440274715423586,
            "range": "0.045005816948539584",
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
            "name": "Outputs/BatchSize/dynamic_value",
            "value": 334128814.4,
            "range": "17034106.069999576",
            "unit": "bytes",
            "extra": "Count: 10"
          },
          {
            "name": "Outputs/BatchSize/dynamic_code",
            "value": 167064443.2,
            "range": "8517053.034999788",
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
          "id": "50111b97ee3b004eb7a6ce15e0a52ad94e47b689",
          "message": "Release candidate: 0.3.0 — correctness fixes + disk I/O perf",
          "timestamp": "2026-04-20T16:42:25Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/81/commits/50111b97ee3b004eb7a6ce15e0a52ad94e47b689"
        },
        "date": 1776719906039,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Preparation/InputDiskSize",
            "value": 26263548,
            "unit": "bytes"
          },
          {
            "name": "Usage/Duration/Epoch",
            "value": 0.9894067999999999,
            "range": "0.040722514002698836",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Preparation/Memory/build",
            "value": 259159967,
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
            "value": 1216090173,
            "unit": "bytes"
          },
          {
            "name": "Preparation/Duration/build",
            "value": 2.102531,
            "unit": "seconds"
          },
          {
            "name": "Preparation/Duration/write",
            "value": 0.009104,
            "unit": "seconds"
          },
          {
            "name": "Usage/Duration/read",
            "value": 0.0014033317565917969,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/benchmark",
            "value": 5.598606586456299,
            "range": "null",
            "unit": "seconds",
            "extra": "Count: 1"
          },
          {
            "name": "Usage/Duration/__getitem__",
            "value": 0.00034402809143066406,
            "range": "0.0015591271015026954",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/_load_dynamic_data",
            "value": 0.0003389468193054199,
            "range": "0.0015590784810013537",
            "unit": "seconds",
            "extra": "Count: 2500"
          },
          {
            "name": "Usage/Duration/collate",
            "value": 0.403928279876709,
            "range": "0.04853128955029868",
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
      }
    ],
    "Micro-Benchmark": [
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
        "date": 1776509464013,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CoreOps/GetItem_Int/small",
            "value": 0.000022468647999971833,
            "range": "6.346722898626726e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/medium",
            "value": 0.0000223164260000317,
            "range": "1.787248557649695e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/large",
            "value": 0.000021934920999967745,
            "range": "3.05435474522263e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/small",
            "value": 0.000024576600003456407,
            "range": "0.000011982184552484179",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/medium",
            "value": 0.00002984660000038275,
            "range": "0.00001804225399793512",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/large",
            "value": 0.000035417200007259456,
            "range": "0.000029988652425371396",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/small",
            "value": 0.000015247200002477257,
            "range": "0.000011494942933215293",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/medium",
            "value": 0.000006423199988603301,
            "range": "0.0000025944021928036738",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/large",
            "value": 0.000007567400001562419,
            "range": "0.000004689448225952899",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/small",
            "value": 0.00025143819999584593,
            "range": "0.000027382739454023552",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/medium",
            "value": 0.0021194267999987914,
            "range": "0.00004987221874086444",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/large",
            "value": 0.03548946459998774,
            "range": "0.03043296142621068",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/small",
            "value": 0.0013244765999957052,
            "range": "0.00005477531677252149",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/medium",
            "value": 0.029378678599994146,
            "range": "0.034917719025072944",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/large",
            "value": 0.25939530980000425,
            "range": "0.033530228310992144",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch16",
            "value": 0.00039385859999470086,
            "range": "0.000047644701496763584",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch64",
            "value": 0.0014551632000006976,
            "range": "0.00010908765581781235",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch256",
            "value": 0.005730072800002972,
            "range": "0.00028964283559743603",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/small",
            "value": 0.00005079839999098112,
            "range": "0.0000122442000638399",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/medium",
            "value": 0.00005591219999701025,
            "range": "0.000015242585977863541",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/large",
            "value": 0.00009125919999632969,
            "range": "0.00004769191597355137",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/small",
            "value": 0.00019530359999748726,
            "range": "0.00007913799865720959",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/small",
            "value": 0.00006130839999514137,
            "range": "0.00005280327279396415",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/medium",
            "value": 0.00019135780000283374,
            "range": "0.00008036067219270804",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/medium",
            "value": 0.00007334020000371311,
            "range": "0.000014698689384505608",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/large",
            "value": 0.00051330420000113,
            "range": "0.0002746407487549232",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/large",
            "value": 0.00009280179999677784,
            "range": "0.00004466733716393735",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/small",
            "value": 0.0005337967999992088,
            "range": "0.00003650286771196375",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/medium",
            "value": 0.004791298400004962,
            "range": "0.00015088299854796293",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/large",
            "value": 0.060856629800002796,
            "range": "0.028355821287191125",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Collate_NaivePad/small",
            "value": 0.00007843959999718209,
            "range": "0.000010352888640672925",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Roundtrip_NRT/small",
            "value": 0.0020557649999943806,
            "range": "0.00012835216340394728",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Roundtrip_Pickle/small",
            "value": 0.00019257380000681223,
            "range": "0.000033168914308507104",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Collate_NaivePad/medium",
            "value": 0.00007213679999722445,
            "range": "0.000003303152682533861",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Roundtrip_NRT/medium",
            "value": 0.017878037799999903,
            "range": "0.00031042148103917227",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Roundtrip_Pickle/medium",
            "value": 0.0011778842000012447,
            "range": "0.00008341337803069274",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Collate_NaivePad/large",
            "value": 0.00007532700000183468,
            "range": "0.0000068503003202098894",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Roundtrip_NRT/large",
            "value": 0.37469860660000337,
            "range": "0.13549357898572786",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Roundtrip_Pickle/large",
            "value": 0.11235054500000388,
            "range": "0.2056460396180879",
            "unit": "seconds",
            "extra": "Count: 5"
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
          "id": "138200e9a8b610a32a056558c4bc6d49cb36c1ac",
          "message": "Allows loading a subset of keys and an equality checker that supports equals_nan",
          "timestamp": "2026-04-16T22:06:10Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/65/commits/138200e9a8b610a32a056558c4bc6d49cb36c1ac"
        },
        "date": 1776510806053,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CoreOps/GetItem_Int/small",
            "value": 0.000026246018000108507,
            "range": "0.0000011427388756949513",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/medium",
            "value": 0.000025750333999980057,
            "range": "2.4081757983513686e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/large",
            "value": 0.00002523267799998052,
            "range": "4.445514442318508e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/small",
            "value": 0.00002595280000150524,
            "range": "0.000009710988881367393",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/medium",
            "value": 0.00002606319999358675,
            "range": "0.00000901708105297509",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/large",
            "value": 0.00003337080000846982,
            "range": "0.00002398496172649272",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/small",
            "value": 0.00001445340000145734,
            "range": "0.00001667810838201976",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/medium",
            "value": 0.000007039199999780976,
            "range": "0.0000031204919133821654",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/large",
            "value": 0.000007668399990734543,
            "range": "0.000004047304080072441",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/small",
            "value": 0.00025662019999685983,
            "range": "0.00001796740300186108",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/medium",
            "value": 0.002217355599992743,
            "range": "0.000041038382658654094",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/large",
            "value": 0.03266562920000524,
            "range": "0.023152272365377848",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/small",
            "value": 0.001378962599994793,
            "range": "0.00003409513600413933",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/medium",
            "value": 0.024315260600002376,
            "range": "0.023223337135866814",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/large",
            "value": 0.23722915339999417,
            "range": "0.024323454395834162",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch16",
            "value": 0.00043293440000411463,
            "range": "0.00003864600856971389",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch64",
            "value": 0.0015246534000084467,
            "range": "0.00004543527063621671",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch256",
            "value": 0.006047215600000299,
            "range": "0.00020456352262300672",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/small",
            "value": 0.000060516000002053263,
            "range": "0.000012692903763286945",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/medium",
            "value": 0.00006102680000594773,
            "range": "0.000013815042313440948",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/large",
            "value": 0.00009543400000211477,
            "range": "0.000036067386153531845",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/small",
            "value": 0.000202515799998082,
            "range": "0.00008109493032536966",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/small",
            "value": 0.000058147600003621844,
            "range": "0.000029282976256982778",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/medium",
            "value": 0.0002490194000017709,
            "range": "0.00014442870079783938",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/medium",
            "value": 0.00005976279999799772,
            "range": "0.000014264923165187092",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/large",
            "value": 0.0004948472000023685,
            "range": "0.00021190081095914497",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/large",
            "value": 0.00010408040000129404,
            "range": "0.0000404886853287988",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/small",
            "value": 0.0005583307999927456,
            "range": "0.0000241990579394022",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/medium",
            "value": 0.004969345800009251,
            "range": "0.00007648172556621941",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/large",
            "value": 0.06021852579999063,
            "range": "0.024497604317509403",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Collate_NaivePad/small",
            "value": 0.00007214599999656457,
            "range": "0.000006103760657632751",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Roundtrip_NRT/small",
            "value": 0.001915456599999743,
            "range": "0.00007623918420385108",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Roundtrip_Pickle/small",
            "value": 0.0003306857999973545,
            "range": "0.00011700520190150822",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Collate_NaivePad/medium",
            "value": 0.00007323799999312542,
            "range": "0.0000111578746611675",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Roundtrip_NRT/medium",
            "value": 0.01684658080000645,
            "range": "0.0002808189053916364",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Roundtrip_Pickle/medium",
            "value": 0.0010930393999956322,
            "range": "0.000051307017810298716",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Collate_NaivePad/large",
            "value": 0.00007190559999799006,
            "range": "0.000005347935693607892",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Roundtrip_NRT/large",
            "value": 0.1640407648000007,
            "range": "0.002153281022673967",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "Baseline/Roundtrip_Pickle/large",
            "value": 0.01002701799999386,
            "range": "0.0005065434097336062",
            "unit": "seconds",
            "extra": "Count: 5"
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
          "id": "d4a1f95277d237fd6f6228fd8b00bf10bc253f01",
          "message": "Allows loading a subset of keys and an equality checker that supports equals_nan",
          "timestamp": "2026-04-16T22:06:10Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/65/commits/d4a1f95277d237fd6f6228fd8b00bf10bc253f01"
        },
        "date": 1776511148694,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CoreOps/GetItem_Int/small",
            "value": 0.000025656395999988036,
            "range": "8.619722452975765e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/medium",
            "value": 0.000025657029000029752,
            "range": "4.552549998932526e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/large",
            "value": 0.000026049961999973446,
            "range": "5.805294351411403e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/small",
            "value": 0.00002606060000971411,
            "range": "0.000009689127687637043",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/medium",
            "value": 0.00002662200000145276,
            "range": "0.000010288946325382614",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/large",
            "value": 0.00003404939999995804,
            "range": "0.000023854059223354765",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/small",
            "value": 0.000010639999999284555,
            "range": "0.000008924924763741159",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/medium",
            "value": 0.000007151400001248476,
            "range": "0.0000033226346928332448",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/large",
            "value": 0.000007916800001339652,
            "range": "0.0000048809443012607055",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/small",
            "value": 0.00026195400000119664,
            "range": "0.00001873412991352055",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/medium",
            "value": 0.0022620557999971425,
            "range": "0.000025999819617569008",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/large",
            "value": 0.034213282399997526,
            "range": "0.02550881805735278",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/small",
            "value": 0.0014116569999998775,
            "range": "0.000032978361922995264",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/medium",
            "value": 0.025213366200000566,
            "range": "0.02455937168900905",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/large",
            "value": 0.252470023799998,
            "range": "0.03177890481949544",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch16",
            "value": 0.0004555557999992743,
            "range": "0.00004338205522958042",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch64",
            "value": 0.0015681556000004093,
            "range": "0.00004610571977747174",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch256",
            "value": 0.006220848600003137,
            "range": "0.00019567986979375341",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/small",
            "value": 0.000057903999999098235,
            "range": "0.000013104483169922675",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/medium",
            "value": 0.0000636088000021573,
            "range": "0.00001601522454659518",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/large",
            "value": 0.00009462280000320789,
            "range": "0.00003232738368220576",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/small",
            "value": 0.0001903535999929318,
            "range": "0.00005792869103778176",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/small",
            "value": 0.00006622160000233635,
            "range": "0.00004231772493163342",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/medium",
            "value": 0.0002549540000018169,
            "range": "0.00012347890790549758",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/medium",
            "value": 0.000083682200011026,
            "range": "0.000021319618540039514",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/large",
            "value": 0.00040551879999384255,
            "range": "0.0000925700247786391",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/large",
            "value": 0.00010419640000236541,
            "range": "0.000033309209283577484",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/small",
            "value": 0.0005750432000013461,
            "range": "0.000031652171550953904",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/medium",
            "value": 0.005098083199999337,
            "range": "0.00007721550818955927",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/large",
            "value": 0.06228658560000895,
            "range": "0.02604333618387181",
            "unit": "seconds",
            "extra": "Count: 5"
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
          "id": "92416c5936412f4bc58183f1f29e41df95656ef0",
          "message": "Allows loading a subset of keys and an equality checker that supports equals_nan",
          "timestamp": "2026-04-16T22:06:10Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/65/commits/92416c5936412f4bc58183f1f29e41df95656ef0"
        },
        "date": 1776512751738,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CoreOps/GetItem_Int/small",
            "value": 0.00002642307200000005,
            "range": "9.145962930633958e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/medium",
            "value": 0.000027441476999996438,
            "range": "7.153366202810667e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/large",
            "value": 0.0000260597740000037,
            "range": "5.693376743442414e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/small",
            "value": 0.00002663939999933973,
            "range": "0.000010243465932306646",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/medium",
            "value": 0.000027525399997330168,
            "range": "0.000012351108993216498",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/large",
            "value": 0.000036381999996137894,
            "range": "0.000026404900816363506",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/small",
            "value": 0.000010672199994132826,
            "range": "0.000008528369522309265",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/medium",
            "value": 0.000007686199995760035,
            "range": "0.000004079508761196957",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/large",
            "value": 0.000008195200001637204,
            "range": "0.0000049283923011049195",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/small",
            "value": 0.000266722199984315,
            "range": "0.000021685518638584434",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/medium",
            "value": 0.0023042678000081197,
            "range": "0.00008473705050051466",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/large",
            "value": 0.03662581019999607,
            "range": "0.030421801933538134",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/small",
            "value": 0.0014399398000023212,
            "range": "0.00007158091234770414",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/medium",
            "value": 0.028684713600000578,
            "range": "0.03206048910350593",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/large",
            "value": 0.2717956776000051,
            "range": "0.03525345148271885",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch16",
            "value": 0.00044593280000526647,
            "range": "0.00003556952463596654",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch64",
            "value": 0.0016142609999974411,
            "range": "0.00006140929627350415",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch256",
            "value": 0.006253340000000662,
            "range": "0.00019210328845350812",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/small",
            "value": 0.0000649173999931918,
            "range": "0.000015210025276996715",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/medium",
            "value": 0.00006273699996199867,
            "range": "0.000015644142696868937",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/large",
            "value": 0.00010767720001467752,
            "range": "0.000054939546005845785",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/small",
            "value": 0.0002485819999947125,
            "range": "0.00011267051086332102",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/small",
            "value": 0.00006812299999410243,
            "range": "0.0000390863339533384",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/medium",
            "value": 0.00027368099999875995,
            "range": "0.0001406503320452461",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/medium",
            "value": 0.0000737697999966258,
            "range": "0.00001631072538249127",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/large",
            "value": 0.0005073575999972491,
            "range": "0.00022013743763480515",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/large",
            "value": 0.00010561920000782266,
            "range": "0.000035983335741967306",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/small",
            "value": 0.0005727920000026642,
            "range": "0.000031475385939114935",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/medium",
            "value": 0.005078591400013011,
            "range": "0.00009052037240130147",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/large",
            "value": 0.06549839820002035,
            "range": "0.031217274445632482",
            "unit": "seconds",
            "extra": "Count: 5"
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
          "id": "dfc10149d5ad21b0569189c70096e2e88e10c58a",
          "message": "Allows loading a subset of keys and an equality checker that supports equals_nan (#65)\n\n* Allow loading a subset of keys from a JNRT tensors_fp (#60) (#62)\n\n* Fix CI: pin pre-commit deps and emit coverage XML for Codecov (#61)\n\nPre-commit's mdformat hook was failing on main because the unpinned\nmdformat-mkdocs additional dependency resolved to a version that tried\nto import `zip_equal` from a newer more_itertools release that no\nlonger exports it. Pin all mdformat additional_dependencies to known\ncompatible versions and bump mdformat rev to 0.7.22.\n\nTests were running with `--cov=src` but never emitted a coverage.xml,\nso the codecov action reported \"Found 0 coverage files\" and marked the\nstatus unknown. Add `--cov-report=xml` and point the action at\ncoverage.xml.\n\nCo-authored-by: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Allow loading a subset of keys from a JNRT tensors_fp (#60)\n\nDownstream consumers frequently know up front which dynamic fields\nthey will actually use from a batch. Expose a `keys=` argument on\n`JointNestedRaggedTensorDict.__init__` that, when paired with\n`tensors_fp=`, restricts which user-level keys are read from the\nbacking safetensors archive. The per-dim `bounds` entries required\nfor slicing and dense reconstruction are always kept.\n\nMissing keys raise a KeyError listing what is actually available.\nPassing `keys=` without `tensors_fp=` raises ValueError. No changes\nto __getitem__, to_dense, vstack, concatenate, slicing, or the\nraw_tensors/processed_tensors construction paths.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Collapse split f-string to satisfy black\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Only load bounds up to the deepest requested dim\n\nPreviously `_load_subset` eagerly loaded every `dim*/bounds` entry in\nthe archive regardless of which user keys were requested. For deep\nragged structures this defeats the I/O savings the subset load is\nmeant to provide, since higher-dim bounds can be larger than the\nleaf data itself. Track the max requested key dim and only pull the\n`dim*/bounds` entries at or below that depth — the deeper bounds are\nnever referenced by operations that only touch the loaded keys.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Add .equals() with equal_nan support, keep __eq__ IEEE-faithful (#64)\n\nAdds a configurable JointNestedRaggedTensorDict.equals(other, equal_nan=...)\nmethod so callers can opt into treating NaN as equal to itself (useful for\nsave/load roundtrips where NaN is a sentinel value). __eq__ delegates to\n.equals() with equal_nan=False, preserving IEEE 754 semantics as the default\nbehavior of the == operator.\n\nCloses #63.\n\nCo-authored-by: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Add micro-benchmarks and baseline comparisons for core NRT operations (#58)\n\nMicro-benchmarks for individual operations with synthetic data:\n- __getitem__ (int index and slice) at 3 scales (100/1k/10k)\n- to_dense() for 1D, 2D, 3D ragged tensors at 3 scales\n- vstack() + to_dense() collation path at 3 batch sizes (16/64/256)\n- concatenate() at 3 scales\n- save/load round-trip at 3 scales\n- to_dense() with multiple keys sharing bounds at 3 scales\n\nBaseline comparisons:\n- NRT collation vs naive list-of-lists padding\n- NRT save/load round-trip vs pickle round-trip\n\nAll benchmarks use synthetic data (no sample_dataset dependency) and\noutput in the customSmallerIsBetter JSON format for github-action-benchmark.\n\nRef: #55\n\nCo-authored-by: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Make keys= subset load truly lazy (#66)\n\n* Make keys= subset load truly lazy\n\nPreviously, passing keys= to JointNestedRaggedTensorDict(tensors_fp=...) called\nf.get_tensor(k) for every selected key during __init__ and stashed the result\nas self._tensors. That made the subset strictly smaller than the full file,\nbut every selected tensor was still eagerly materialized into memory at\nconstruction time — defeating the main motivation of the feature for callers\nthat only iterate one subset key at a time.\n\nThis commit restores laziness:\n  - __init__ now calls _resolve_subset_keys, which opens the file only for\n    metadata (safe_open + .keys()) to validate requested keys and pick the\n    required dim*/bounds entries. No tensor values are read.\n  - The resolved set is stored on self._subset_keys; self._tensors stays None.\n  - _tensor_keys returns the subset when _subset_keys is set.\n  - _tensor_at_key (already lazy via safe_open) now reads only when callers\n    ask for a specific tensor.\n  - The .tensors property (the one materializer left) loads just the subset\n    via safe_open + get_tensor when _subset_keys is set, rather than\n    load_file'ing the whole archive.\n\nAlso addresses two Copilot review points on #60:\n  - keys=<str|bytes> now raises TypeError instead of silently iterating\n    character-by-character.\n  - keys=[] (or any empty iterable) now raises ValueError instead of\n    returning an object with no usable tensors.\n\nDoctests cover the new validation errors and the lazy-read path.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Cover subset branch of .tensors property with a doctest\n\nThe lazy subset load only hits the materialization path if something\neventually touches .tensors. The prior doctests all went through the\nlazy _tensor_at_key path, leaving the subset branch of the property\nuncovered (codecov/patch failure on #66).\n\nAdds a short doctest that forces materialization on a subset-loaded\ninstance and also documents the property's behavior.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Deterministic subset order + reject non-str/reserved keys\n\nAddresses PR #66 review feedback:\n\n  - (mmcdermott on Copilot's order comment) Subset materialization\n    previously iterated `self._subset_keys` as a `set`, making dict\n    insertion order depend on set-hash randomization. Now\n    `_resolve_subset_keys` returns a `list` in the archive's raw\n    storage order (as reported by `safe_open().keys()`), so\n    materializing a subset gives the same deterministic order on every\n    run. Doctest on `.tensors` pins the order.\n\n  - (Copilot) `_resolve_subset_keys` now rejects non-str elements with\n    a clear `TypeError` and rejects the reserved meta-names `bounds`\n    and `mask` (defined here as `_RESERVED_SUBSET_NAMES`) with a clear\n    `ValueError`, instead of silently producing an object with no\n    usable user tensors. Doctests cover both rejections.\n\nNote: the user asked whether the subset order could match a full\n`load_file` default. `safe_open().keys()` and `load_file()` actually\nreturn different orders on the same file (load_file groups meta keys\nfirst), and matching load_file order would require eagerly reading\nevery tensor, which defeats the lazy subset load. Using safe_open's\nfile-metadata order keeps the load lazy while still being deterministic\nand tied to the archive, which is the spirit of the ask.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Clarify subset order docstring and exclude mask from KeyError hint\n\nAddresses two further Copilot nits on PR #66:\n\n  - _resolve_subset_keys docstring previously said the returned list\n    \"produces the same iteration order as a full load_file\" — which is\n    not actually true on this file format (safe_open and load_file\n    return different orders). Rewritten to name safe_open().keys() as\n    the source of determinism and note the load_file divergence\n    explicitly.\n\n  - The KeyError raised for missing keys listed all user-visible names\n    but excluded only 'bounds', so a file with a 'mask' meta-key would\n    surface 'mask' as if it were selectable. Now filters using the\n    shared _RESERVED_SUBSET_NAMES tuple, so the hint matches what the\n    rejection logic above actually accepts.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Address PR #65 review feedback (validation order, subset guard, benchmark gating, baseline doctest) (#67)\n\n* Address PR #65 review feedback\n\nBatch of follow-ups on dev before it cuts a release to main:\n\n  - _resolve_subset_keys now materializes keys= into a list and\n    validates element types before set(...) construction. Fixes a case\n    where passing a non-hashable non-str (e.g. a list by mistake) would\n    surface a generic \"unhashable type\" TypeError instead of the\n    intended element-type validation error.\n\n  - _tensor_at_key now explicitly rejects any key that isn't in the\n    loaded subset when a subset is active. Previously the safe_open\n    path would silently return data for unselected keys, quietly\n    violating the subset contract. Now a caller that asks for a\n    non-selected key gets a KeyError pointing at the loaded subset.\n\n  - Add a baseline side-by-side doctest contrasting a default load\n    (all keys visible) with a subset load (only requested keys), so\n    the feature's effect is obvious at a glance from the docstring.\n\n  - benchmark/test_micro.py is now opt-in. Setting\n    NRT_RUN_BENCHMARKS=1 enables collection; otherwise the module\n    skips at import time. rootutils is now imported via\n    pytest.importorskip, and the output directory is configurable via\n    NRT_BENCHMARK_OUTPUT_DIR. Previously, running bare `pytest`\n    locally would collect test_micro_benchmarks(), which could fail at\n    import time on machines without rootutils installed or would run\n    the full benchmark suite and write into benchmark/outputs.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Wire micro benchmarks into the benchmark workflow\n\nRevert the env-var / importorskip gating added in the previous commit.\nThe real problem with test_micro.py was just that the file name started\nwith `test_`, which makes bare pytest auto-collect it. The existing\nbenchmark/run.py avoids that simply by not starting with `test_` — it's\nstill a pytest target when explicitly pointed at the file, just not\nauto-collected. Matching that convention is the right fix, not adding\nan opt-in env var.\n\n  - Renamed benchmark/test_micro.py -> benchmark/run_micro.py to match\n    benchmark/run.py's convention. The test function inside is\n    unchanged and is still discovered when the file is named on the\n    pytest command line, so the benchmark workflow can run it the\n    same way it runs run.py.\n\n  - Dropped the NRT_RUN_BENCHMARKS env-var skip and the\n    pytest.importorskip(\"rootutils\") — the benchmark workflow installs\n    the `benchmarks` dependency group which provides rootutils, just\n    like it does for run.py. Back to a plain top-level\n    `import rootutils`.\n\n  - .github/workflows/benchmark.yaml now runs both benchmark/run.py\n    and benchmark/run_micro.py in its pytest invocation, and posts\n    benchmark/outputs/micro.json as a second github-action-benchmark\n    chart (\"Micro-Benchmark\") so the micro results are actually\n    tracked over time instead of being written and discarded.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Drop noise-prone Baseline tier from micro benchmarks\n\nThe Baseline tier contained three entries that turned out to be either\nrunner-variance noise or redundant with better-structured core-op\nbenchmarks:\n\n  - Baseline/Roundtrip_Pickle — pure pickle.dump/load on Python lists,\n    no NRT code runs. Just tripped the 150% alert threshold in CI\n    (1.72x slower vs. prior run on small scale) with no NRT change\n    responsible. Any future alert here would be equally meaningless.\n\n  - Baseline/Collate_NaivePad — pure numpy.zeros + Python-loop\n    padding, no NRT code runs. Same class of false-alert risk as\n    pickle; its timings reflect runner load and numpy/Python version,\n    not anything in this repo.\n\n  - Baseline/Roundtrip_NRT — duplicates CoreOps/Save + CoreOps/Load\n    from bench_save_load, which already tracks save and load timings\n    separately across small/medium/large scales. No signal lost by\n    removing this entry.\n\nAlso drops the now-unused _naive_padded_collate helper, make_2d_raw\ngenerator, and the pickle import. test_micro_benchmarks now only\ndispatches the Core NRT ops. A comment in the dispatcher records why\nthe Baseline tier was removed so the next maintainer doesn't try to\nre-add it by reflex.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Pin numpy>=1.21 for np.array_equal(equal_nan=...) support\n\nJointNestedRaggedTensorDict.equals uses np.array_equal(..., equal_nan=...),\nwhich was added in NumPy 1.19 (June 2020). Without a floor on the numpy\ndep, installs on older NumPy would break at runtime with \"unexpected\nkeyword argument 'equal_nan'\". Since requires-python is >=3.10 and NumPy\n1.21 is the first release with Python 3.10 wheels (and also has the\nequal_nan feature), numpy>=1.21 is the loosest honest floor — pinning\nlower would be misleading because <1.21 can't install on 3.10 anyway.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Pin safetensors>=0.3.1 and refresh uv.lock\n\nFollow-up to the numpy floor pin: also records an honest floor for\nsafetensors. All safetensors APIs this package uses (safe_open with\nframework=\"np\", get_tensor, get_slice, keys, plus safetensors.numpy\nload_file / save_file) have been stable since the 0.3.x series, with\n0.3.1 being the first release where that surface was reliably usable.\nPinning >=0.3.1 makes the tested-against floor explicit — there's no\ngood reason to leave it unpinned, and a documented floor is strictly\nmore useful than an implicit one.\n\nAlso refreshes uv.lock so `uv sync --locked` in CI matches the updated\npyproject.toml (the numpy pin in the previous commit left the lockfile\nout of sync, which was the cause of the CI failure).\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.7 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-04-18T07:54:18-04:00",
          "tree_id": "8d2c09a1e9fa7d53a262700f973f793e2d78722a",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/commit/dfc10149d5ad21b0569189c70096e2e88e10c58a"
        },
        "date": 1776513319313,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CoreOps/GetItem_Int/small",
            "value": 0.000026683441999978188,
            "range": "0.0000010143656595096072",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/medium",
            "value": 0.00002568457199998875,
            "range": "4.4009147828628055e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/large",
            "value": 0.00002606716499997219,
            "range": "7.808402318312767e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/small",
            "value": 0.000027132600013146658,
            "range": "0.00001116951696892145",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/medium",
            "value": 0.000029733199994552706,
            "range": "0.00001706376108739452",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/large",
            "value": 0.0000359128000070541,
            "range": "0.000026166555396548186",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/small",
            "value": 0.000011058599994839824,
            "range": "0.000008931203685975719",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/medium",
            "value": 0.0000073236000048382264,
            "range": "0.000003484239205729256",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/large",
            "value": 0.000007710400001315066,
            "range": "0.000004056914873072054",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/small",
            "value": 0.0002699169999971218,
            "range": "0.000021420363450563247",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/medium",
            "value": 0.0023215847999949802,
            "range": "0.000036151188064344195",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/large",
            "value": 0.03491229560000875,
            "range": "0.025800788961448034",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/small",
            "value": 0.001446893000002092,
            "range": "0.00003646685652741091",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/medium",
            "value": 0.024853926599996613,
            "range": "0.023025509794855317",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/large",
            "value": 0.2470850606000056,
            "range": "0.024307111496345346",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch16",
            "value": 0.00044697260000248207,
            "range": "0.00004242979486474373",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch64",
            "value": 0.00159091120000312,
            "range": "0.00004974833022057258",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch256",
            "value": 0.006250759400001016,
            "range": "0.00015549118808567207",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/small",
            "value": 0.00005751680000116721,
            "range": "0.000012755870776327301",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/medium",
            "value": 0.00006307120000883514,
            "range": "0.000014283256995702755",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/large",
            "value": 0.00010268699999755881,
            "range": "0.000020092435744154924",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/small",
            "value": 0.00021587619999650088,
            "range": "0.0000855115803512322",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/small",
            "value": 0.00007364100000586404,
            "range": "0.00004971994533862808",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/medium",
            "value": 0.0002409926000041196,
            "range": "0.0001227894606495257",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/medium",
            "value": 0.00006986999999867294,
            "range": "0.000025599024613419613",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/large",
            "value": 0.00047475440000539494,
            "range": "0.0001751083401771506",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/large",
            "value": 0.00010218439999221118,
            "range": "0.000026318698067575188",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/small",
            "value": 0.0005815894000022581,
            "range": "0.00002758991828003111",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/medium",
            "value": 0.0051905159999932945,
            "range": "0.000050961277648396274",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/large",
            "value": 0.06374331500000494,
            "range": "0.02597791656850752",
            "unit": "seconds",
            "extra": "Count: 5"
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
          "id": "2beee6c51e51832f6992211447ffdd9b0aacc796",
          "message": "Use enumerate in _slice_single squeeze-dim loop",
          "timestamp": "2026-04-18T11:54:23Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/71/commits/2beee6c51e51832f6992211447ffdd9b0aacc796"
        },
        "date": 1776657057674,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CoreOps/GetItem_Int/small",
            "value": 0.000023078510000033248,
            "range": "4.5005530820716776e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/medium",
            "value": 0.000022805213999987476,
            "range": "4.2884659163952973e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/large",
            "value": 0.000022284121999987863,
            "range": "4.350665777781665e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/small",
            "value": 0.000023909600000138197,
            "range": "0.000010562214105850633",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/medium",
            "value": 0.000025479000004224873,
            "range": "0.000015036178638404406",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/large",
            "value": 0.00003510639999433351,
            "range": "0.000031622944167054764",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/small",
            "value": 0.00000980720000427482,
            "range": "0.000007834612127478786",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/medium",
            "value": 0.000005909199998654913,
            "range": "0.0000021720365323097414",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/large",
            "value": 0.000006500400002096285,
            "range": "0.0000029035550235516396",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/small",
            "value": 0.0002487895999990997,
            "range": "0.00002892547866810985",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/medium",
            "value": 0.002196299999999951,
            "range": "0.000069285429392975",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/large",
            "value": 0.03350879839999834,
            "range": "0.024811123784322146",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/small",
            "value": 0.0013570304000040778,
            "range": "0.00004284413337389599",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/medium",
            "value": 0.025635192199996482,
            "range": "0.025939360584693014",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/large",
            "value": 0.2517305168000007,
            "range": "0.02237207749059349",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch16",
            "value": 0.00038010000000099353,
            "range": "0.000031376163777714805",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch64",
            "value": 0.0013848608000017748,
            "range": "0.00004323573773460687",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch256",
            "value": 0.005598903400002087,
            "range": "0.00014343947891015695",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/small",
            "value": 0.000053356600002985036,
            "range": "0.00001536707302581324",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/medium",
            "value": 0.00005890599999816004,
            "range": "0.000015006185176946788",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/large",
            "value": 0.00008528499999727046,
            "range": "0.00004604394149753654",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/small",
            "value": 0.00032608740000057425,
            "range": "0.0002908074281701905",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/small",
            "value": 0.000047638800003824146,
            "range": "0.00003971076608594391",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/medium",
            "value": 0.00033267140000532437,
            "range": "0.00024228539335080306",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/medium",
            "value": 0.00006119380000200181,
            "range": "0.00004512541543127709",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/large",
            "value": 0.0004872253999991472,
            "range": "0.0003042621568292223",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/large",
            "value": 0.00007729739999717822,
            "range": "0.000037219710749663765",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/small",
            "value": 0.0005496616000016275,
            "range": "0.00003864709312723596",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/medium",
            "value": 0.004883808799999656,
            "range": "0.0000977153135355865",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/large",
            "value": 0.06119876000000204,
            "range": "0.025288601434538982",
            "unit": "seconds",
            "extra": "Count: 5"
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
          "id": "45185d97f1ebed340985f7a58d9da98a925b429b",
          "message": "Use enumerate in _slice_single squeeze-dim loop (closes #36) (#71)\n\nCosmetic refactor: replace manual index tracking with enumerate as\nflagged by ruff SIM113. No behavior change.\n\nCo-authored-by: Claude Opus 4.7 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-04-20T06:54:59-04:00",
          "tree_id": "2b51da7a0cd62e5c3cf64724b8bb596137a6ab96",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/commit/45185d97f1ebed340985f7a58d9da98a925b429b"
        },
        "date": 1776682568238,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CoreOps/GetItem_Int/small",
            "value": 0.000022251443999948608,
            "range": "7.455575829143638e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/medium",
            "value": 0.000021627095999974698,
            "range": "3.336255800754538e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/large",
            "value": 0.000021805436999954966,
            "range": "3.886548301055408e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/small",
            "value": 0.00002238800000213814,
            "range": "0.000009689437314920025",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/medium",
            "value": 0.00002521140000908417,
            "range": "0.000015605368517245427",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/large",
            "value": 0.00003422219999151821,
            "range": "0.000031263549319155805",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/small",
            "value": 0.000009924800002636402,
            "range": "0.00000866135091396154",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/medium",
            "value": 0.000006156200004170387,
            "range": "0.0000024765781266579915",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/large",
            "value": 0.00000632659999837415,
            "range": "0.000002680873976275284",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/small",
            "value": 0.0002463082000076611,
            "range": "0.000024213544421836067",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/medium",
            "value": 0.0021840570000051683,
            "range": "0.00011251658644366577",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/large",
            "value": 0.035287339199993537,
            "range": "0.02745763988052422",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/small",
            "value": 0.0013560916000017187,
            "range": "0.00005486852173665969",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/medium",
            "value": 0.026281879200001867,
            "range": "0.027197378214563674",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/large",
            "value": 0.2580173322000007,
            "range": "0.02688431924794177",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch16",
            "value": 0.0003835844000036559,
            "range": "0.00003927078537248618",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch64",
            "value": 0.0013916602000051625,
            "range": "0.000053947930967575366",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch256",
            "value": 0.005698396200000388,
            "range": "0.00022444743457584426",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/small",
            "value": 0.000050442399992789436,
            "range": "0.000011712464759519267",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/medium",
            "value": 0.00005327760000000126,
            "range": "0.00001216417503580955",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/large",
            "value": 0.00008341180000002169,
            "range": "0.00005164141829214864",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/small",
            "value": 0.00015315060001057644,
            "range": "0.00005689293667826604",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/small",
            "value": 0.00005408439999996517,
            "range": "0.000041479774853745796",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/medium",
            "value": 0.0002207827999939127,
            "range": "0.0001291045124921944",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/medium",
            "value": 0.000051812600003131595,
            "range": "0.000031176602860588396",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/large",
            "value": 0.0004306998000004114,
            "range": "0.00019560193369807323",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/large",
            "value": 0.00007765360000462351,
            "range": "0.0000352024737504912",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/small",
            "value": 0.0005434922000006282,
            "range": "0.00004385912466539813",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/medium",
            "value": 0.004866997200008427,
            "range": "0.00012459617130666917",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/large",
            "value": 0.06177183420001029,
            "range": "0.027320051115539642",
            "unit": "seconds",
            "extra": "Count: 5"
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
          "id": "dedbbb979dc28b8693bfb1965dcc7b3bd69bed48",
          "message": "Make concatenate/vstack linear instead of O(N^2)",
          "timestamp": "2026-04-20T10:55:05Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/72/commits/dedbbb979dc28b8693bfb1965dcc7b3bd69bed48"
        },
        "date": 1776682681346,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CoreOps/GetItem_Int/small",
            "value": 0.00002713613200000964,
            "range": "6.765999202853387e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/medium",
            "value": 0.000026123471999994764,
            "range": "4.628098151512241e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/large",
            "value": 0.000026012186000059502,
            "range": "4.0803093233232483e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/small",
            "value": 0.000026719599998159537,
            "range": "0.000008966090712135022",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/medium",
            "value": 0.0000308610000047338,
            "range": "0.00001007229426216545",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/large",
            "value": 0.00003481439999859503,
            "range": "0.000024689263483530858",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/small",
            "value": 0.000010966600001438565,
            "range": "0.000009321921653759878",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/medium",
            "value": 0.000006992999999511085,
            "range": "0.00000332265993530065",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/large",
            "value": 0.000007704399996555366,
            "range": "0.000004499152011140085",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/small",
            "value": 0.00025874819999103236,
            "range": "0.000022321091966069317",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/medium",
            "value": 0.002235860199999706,
            "range": "0.000043465741679366934",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/large",
            "value": 0.0352827456,
            "range": "0.02684957122115905",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/small",
            "value": 0.0013772243999994771,
            "range": "0.000042056954190349636",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/medium",
            "value": 0.02422189000000117,
            "range": "0.023128178561985555",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/large",
            "value": 0.24226741300000754,
            "range": "0.025736554675947734",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch16",
            "value": 0.0003919755999959307,
            "range": "0.000029904098067728085",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch64",
            "value": 0.0013279667999995582,
            "range": "0.000033994165877385124",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch256",
            "value": 0.005129359800008615,
            "range": "0.0001308133605699155",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/small",
            "value": 0.00005015919999777907,
            "range": "0.00001108800358412721",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/medium",
            "value": 0.00005733060000352452,
            "range": "0.00001801106973884199",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/large",
            "value": 0.00006933679999860942,
            "range": "0.000018343518555605123",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/small",
            "value": 0.0002382744000101411,
            "range": "0.00010422829044907058",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/small",
            "value": 0.00006932100000653919,
            "range": "0.000041479508590560854",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/medium",
            "value": 0.0002580969999996796,
            "range": "0.00014383836943422535",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/medium",
            "value": 0.0000676634000001286,
            "range": "0.000016792586008109396",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/large",
            "value": 0.0004408001999991029,
            "range": "0.00015704405261815794",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/large",
            "value": 0.00009858880000024328,
            "range": "0.00003053831108194937",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/small",
            "value": 0.000555505400001266,
            "range": "0.000015747207508695855",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/medium",
            "value": 0.004976087400001461,
            "range": "0.00007898284423340008",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/large",
            "value": 0.06085786859999871,
            "range": "0.02565586301842406",
            "unit": "seconds",
            "extra": "Count: 5"
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
          "id": "29f056abc4ae7a85368f0c4a546620b41caa1313",
          "message": "Infer dtypes via np.asarray instead of Python-level isinstance",
          "timestamp": "2026-04-20T10:55:05Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/73/commits/29f056abc4ae7a85368f0c4a546620b41caa1313"
        },
        "date": 1776682745064,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CoreOps/GetItem_Int/small",
            "value": 0.00002777147399996238,
            "range": "0.0000012702405052990179",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/medium",
            "value": 0.000026256998000008027,
            "range": "6.367314806793486e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/large",
            "value": 0.00002676265299999159,
            "range": "8.657298293682468e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/small",
            "value": 0.00002737000000365697,
            "range": "0.00001034240868526079",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/medium",
            "value": 0.00003225680000014108,
            "range": "0.000014399906261206786",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/large",
            "value": 0.000033895799998617807,
            "range": "0.000023134422268019544",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/small",
            "value": 0.000010772000007364112,
            "range": "0.00000887776022480292",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/medium",
            "value": 0.000007127399993578365,
            "range": "0.000003241469231004043",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/large",
            "value": 0.000008131200007710505,
            "range": "0.0000047908489482363764",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/small",
            "value": 0.000257886399998597,
            "range": "0.000020787136399612704",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/medium",
            "value": 0.002229761600000302,
            "range": "0.00004262467782630037",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/large",
            "value": 0.034331818599997635,
            "range": "0.026365338524621234",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/small",
            "value": 0.0014021372000001975,
            "range": "0.00004043950675407912",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/medium",
            "value": 0.025004214400007642,
            "range": "0.02470446691933082",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/large",
            "value": 0.2482633021999959,
            "range": "0.02984560403219454",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch16",
            "value": 0.00044406139999750847,
            "range": "0.000039899765255090116",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch64",
            "value": 0.0015689859999952205,
            "range": "0.000046948712044536924",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch256",
            "value": 0.006221254799993403,
            "range": "0.00017431556165449041",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/small",
            "value": 0.00005859279999640421,
            "range": "0.000013239838924575853",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/medium",
            "value": 0.00006765140000197789,
            "range": "0.000013652343196496129",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/large",
            "value": 0.00010368119999952796,
            "range": "0.00001819293411069398",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/small",
            "value": 0.00022848880000196913,
            "range": "0.0001112342416692393",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/small",
            "value": 0.00005775660000608696,
            "range": "0.000028643393036465383",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/medium",
            "value": 0.00037080499999433416,
            "range": "0.0003405601559450195",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/medium",
            "value": 0.00005798380000783254,
            "range": "0.00001270053127510182",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/large",
            "value": 0.0004606815999977698,
            "range": "0.00019276911844667044",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/large",
            "value": 0.00009938940000324692,
            "range": "0.00003469826479156389",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/small",
            "value": 0.0005532130000005964,
            "range": "0.000032330871343426025",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/medium",
            "value": 0.004986634400000867,
            "range": "0.00011304577712390814",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/large",
            "value": 0.06268121780001365,
            "range": "0.02907140700066601",
            "unit": "seconds",
            "extra": "Count: 5"
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
          "id": "720e9d01d9794bfec031d54be8eeaee71b95d1c7",
          "message": "Make concatenate/vstack linear instead of O(N^2)",
          "timestamp": "2026-04-20T10:55:05Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/72/commits/720e9d01d9794bfec031d54be8eeaee71b95d1c7"
        },
        "date": 1776684433469,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CoreOps/GetItem_Int/small",
            "value": 0.000023390796000001046,
            "range": "0.0000014557549508008476",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/medium",
            "value": 0.0000222903720000005,
            "range": "2.353878535789429e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/large",
            "value": 0.0000221076170000174,
            "range": "5.785298539722493e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/small",
            "value": 0.000023314999995704967,
            "range": "0.000010878804552468925",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/medium",
            "value": 0.000026305400001547242,
            "range": "0.00001534955080033255",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/large",
            "value": 0.00003628239999784455,
            "range": "0.000031653631050247434",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/small",
            "value": 0.000011431199996536635,
            "range": "0.000010563771188186097",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/medium",
            "value": 0.000006443799995281551,
            "range": "0.000002829713534793741",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/large",
            "value": 0.000007661399996550244,
            "range": "0.000004616346859557496",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/small",
            "value": 0.0002476068000106579,
            "range": "0.000028815170391406304",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/medium",
            "value": 0.0021570715999956747,
            "range": "0.0000666469445817326",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/large",
            "value": 0.033748873799999045,
            "range": "0.026643834253938303",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/small",
            "value": 0.0013117668000006688,
            "range": "0.000049329676838804806",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/medium",
            "value": 0.027803047999998397,
            "range": "0.028804073346086475",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/large",
            "value": 0.24203719380000166,
            "range": "0.02351863671908976",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch16",
            "value": 0.00035079179999399914,
            "range": "0.000039075124164482496",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch64",
            "value": 0.0012379609999982222,
            "range": "0.000042814846842085395",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch256",
            "value": 0.004866937399998506,
            "range": "0.0001373000840298486",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/small",
            "value": 0.00004508519999433247,
            "range": "0.000011145597105990914",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/medium",
            "value": 0.00004891740000232403,
            "range": "0.000014315988102546386",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/large",
            "value": 0.0000698747999990701,
            "range": "0.000033157735970374306",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/small",
            "value": 0.00017273859999988872,
            "range": "0.000041307640570464825",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/small",
            "value": 0.00006278020000252126,
            "range": "0.00004162876551611517",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/medium",
            "value": 0.000205457600006298,
            "range": "0.00010122000480242416",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/medium",
            "value": 0.00005594360000031884,
            "range": "0.000027291846951906266",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/large",
            "value": 0.00044730399999934887,
            "range": "0.0001637482637705528",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/large",
            "value": 0.00010482699999840861,
            "range": "0.00004496392864726774",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/small",
            "value": 0.0005335938000030182,
            "range": "0.000029790963447287974",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/medium",
            "value": 0.004744167000001198,
            "range": "0.00007866049671927182",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/large",
            "value": 0.05983313819999978,
            "range": "0.026353202605158103",
            "unit": "seconds",
            "extra": "Count: 5"
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
          "id": "7547ca2bab8cfa87eb89c6b4d96e34614e77c167",
          "message": "Infer dtypes via np.asarray instead of Python-level isinstance",
          "timestamp": "2026-04-20T10:55:05Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/73/commits/7547ca2bab8cfa87eb89c6b4d96e34614e77c167"
        },
        "date": 1776684480069,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CoreOps/GetItem_Int/small",
            "value": 0.00005018428800002539,
            "range": "0.0000026490823361826915",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/medium",
            "value": 0.000030337527999989787,
            "range": "0.000007288745771935622",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/large",
            "value": 0.000026337578000010354,
            "range": "7.010022601028697e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/small",
            "value": 0.00002700020000929726,
            "range": "0.000010142757245578095",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/medium",
            "value": 0.000039766000003282895,
            "range": "0.0000238399794842821",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/large",
            "value": 0.0000360693999994055,
            "range": "0.000025731182606764746",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/small",
            "value": 0.00001115480000066782,
            "range": "0.000009474641144842911",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/medium",
            "value": 0.000007640000012543169,
            "range": "0.0000039456855611055714",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/large",
            "value": 0.000007930599991823328,
            "range": "0.000004340615998428404",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/small",
            "value": 0.00026397699999733957,
            "range": "0.000017281599196457106",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/medium",
            "value": 0.002332654799994316,
            "range": "0.0001306004460999915",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/large",
            "value": 0.038433534800003596,
            "range": "0.033883097953892834",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/small",
            "value": 0.0014232961999994132,
            "range": "0.0000376901262122127",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/medium",
            "value": 0.029245392200010656,
            "range": "0.03315141163498233",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/large",
            "value": 0.27581716160000835,
            "range": "0.03435144287936548",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch16",
            "value": 0.0004425903999901948,
            "range": "0.00004465559691872411",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch64",
            "value": 0.0015804534000039895,
            "range": "0.000049611247682598975",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch256",
            "value": 0.006277570200001037,
            "range": "0.0001810666573902799",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/small",
            "value": 0.00006524979999653625,
            "range": "0.000017351118321461814",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/medium",
            "value": 0.00006483679999860214,
            "range": "0.00001417098489000295",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/large",
            "value": 0.00010450700000887991,
            "range": "0.00003323815640335506",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/small",
            "value": 0.00018510560000208897,
            "range": "0.00005733144782741364",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/small",
            "value": 0.00007263779999675535,
            "range": "0.00004132625052372319",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/medium",
            "value": 0.0002132562000042526,
            "range": "0.00010246607466464098",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/medium",
            "value": 0.00006800140000109422,
            "range": "0.00002540162288134202",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/large",
            "value": 0.00043929239998874436,
            "range": "0.0001386862821709509",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/large",
            "value": 0.000114072999997461,
            "range": "0.00003151314485642439",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/small",
            "value": 0.0005807186000026832,
            "range": "0.000025472018807371035",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/medium",
            "value": 0.005065428400013161,
            "range": "0.00007337751545259663",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/large",
            "value": 0.06574928620000264,
            "range": "0.032271725316811266",
            "unit": "seconds",
            "extra": "Count: 5"
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
          "id": "9742b4bc6039213aa4330cb9204747976b2938ca",
          "message": "Make concatenate/vstack linear instead of O(N^2)",
          "timestamp": "2026-04-20T10:55:05Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/72/commits/9742b4bc6039213aa4330cb9204747976b2938ca"
        },
        "date": 1776692095367,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CoreOps/GetItem_Int/small",
            "value": 0.000026660224000124797,
            "range": "0.000001211926307914748",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/medium",
            "value": 0.00002673963300003379,
            "range": "4.574249208720413e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/large",
            "value": 0.000026907553999990344,
            "range": "6.114736908866566e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/small",
            "value": 0.000027778399987710146,
            "range": "0.00001049128823409161",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/medium",
            "value": 0.000026475799995751003,
            "range": "0.000010921998340293643",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/large",
            "value": 0.00003991840000026059,
            "range": "0.000034011908904603494",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/small",
            "value": 0.000011132800000268617,
            "range": "0.00000920146517954991",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/medium",
            "value": 0.000007483999979740474,
            "range": "0.00000365596519268175",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/large",
            "value": 0.000007746599999336468,
            "range": "0.0000039169483482958595",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/small",
            "value": 0.00027109840000321127,
            "range": "0.000031008889174647417",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/medium",
            "value": 0.0023057213999891244,
            "range": "0.000059322780540839894",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/large",
            "value": 0.03589142079999874,
            "range": "0.028170006207821615",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/small",
            "value": 0.0014725808000093821,
            "range": "0.000060878510872968206",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/medium",
            "value": 0.026496260199996867,
            "range": "0.027277805394835732",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/large",
            "value": 0.26548416740000674,
            "range": "0.0311404900716008",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch16",
            "value": 0.00038859580000689676,
            "range": "0.00002919915443268467",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch64",
            "value": 0.0013168516000064301,
            "range": "0.00004222293558476989",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch256",
            "value": 0.005111560999989706,
            "range": "0.00014436904406903568",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/small",
            "value": 0.00004972319999296815,
            "range": "0.000010918051915678121",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/medium",
            "value": 0.00005141020000110075,
            "range": "0.000011992129027502566",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/large",
            "value": 0.0000733731999957854,
            "range": "0.00002292688825015696",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/small",
            "value": 0.00019647500001838126,
            "range": "0.00005457857474523094",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/small",
            "value": 0.00006745239999190744,
            "range": "0.00003172208685720708",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/medium",
            "value": 0.00021608180001067012,
            "range": "0.00010490674931935133",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/medium",
            "value": 0.00007239119998985189,
            "range": "0.000018319778904477316",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/large",
            "value": 0.0004320870000128707,
            "range": "0.00013554053312908647",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/large",
            "value": 0.00010914620000903596,
            "range": "0.000031820751373120213",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/small",
            "value": 0.000576908000016374,
            "range": "0.00003115440228247077",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/medium",
            "value": 0.005123100199989494,
            "range": "0.00005385839236829579",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/large",
            "value": 0.06556090460001088,
            "range": "0.03213463021822701",
            "unit": "seconds",
            "extra": "Count: 5"
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
          "id": "654ddcf1f66fd9d2b177a2990eab73594f3089c3",
          "message": "Infer dtypes via np.asarray instead of Python-level isinstance",
          "timestamp": "2026-04-20T10:55:05Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/73/commits/654ddcf1f66fd9d2b177a2990eab73594f3089c3"
        },
        "date": 1776692126320,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CoreOps/GetItem_Int/small",
            "value": 0.00002695785200012324,
            "range": "0.0000011430402095661172",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/medium",
            "value": 0.00002574406099989801,
            "range": "5.253022074261969e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/large",
            "value": 0.00002545848800002659,
            "range": "4.936226412913324e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/small",
            "value": 0.00002623080000603295,
            "range": "0.000010481839601564192",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/medium",
            "value": 0.00002739080000537797,
            "range": "0.0000115105155434531",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/large",
            "value": 0.00003475920000255428,
            "range": "0.000024686506924718806",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/small",
            "value": 0.000010918599991782685,
            "range": "0.000008763103947092798",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/medium",
            "value": 0.000007133600001907326,
            "range": "0.0000033061724587669964",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/large",
            "value": 0.00000753420001728955,
            "range": "0.000003985644814631565",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/small",
            "value": 0.0002603063999913502,
            "range": "0.000024630264931755966",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/medium",
            "value": 0.0022489324000048326,
            "range": "0.00004075483355922569",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/large",
            "value": 0.03578929460001064,
            "range": "0.029252802434406085",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/small",
            "value": 0.0013773264000064955,
            "range": "0.000045381068325117595",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/medium",
            "value": 0.027659359200015388,
            "range": "0.03052403777182938",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/large",
            "value": 0.2613828457999944,
            "range": "0.032805336193603075",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch16",
            "value": 0.0004452431999879991,
            "range": "0.00004247315420607695",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch64",
            "value": 0.001570591599988802,
            "range": "0.0000553798021655677",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch256",
            "value": 0.00624579679999897,
            "range": "0.00017526112900335977",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/small",
            "value": 0.00005776780002406667,
            "range": "0.000012150137563217316",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/medium",
            "value": 0.00006763820000514898,
            "range": "0.000013896013616608389",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/large",
            "value": 0.00009134660000427175,
            "range": "0.000030375215669604645",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/small",
            "value": 0.00022702979999849048,
            "range": "0.00011829763623202385",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/small",
            "value": 0.00006700139999793464,
            "range": "0.00004384299191426301",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/medium",
            "value": 0.00023602059999348058,
            "range": "0.00011837016641195885",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/medium",
            "value": 0.0000718384000037986,
            "range": "0.000013381553404345921",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/large",
            "value": 0.00044154060000209936,
            "range": "0.00016278865652630118",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/large",
            "value": 0.00010086420001016449,
            "range": "0.00003048555293352576",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/small",
            "value": 0.0005601199999887285,
            "range": "0.000031264333997426935",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/medium",
            "value": 0.004954992199998287,
            "range": "0.00006316884288414116",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/large",
            "value": 0.06271585080000933,
            "range": "0.028952641740853557",
            "unit": "seconds",
            "extra": "Count: 5"
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
          "id": "ba32dfabe9d83266c0210b5e0d98038e431e46c2",
          "message": "Make concatenate/vstack linear instead of O(N^2) (#72)\n\n* Make concatenate/vstack linear instead of O(N^2) (closes #68)\n\nThe previous implementation grew an accumulator by doing one\nnp.concatenate per input tensor, which allocates and copies the full\ncurrent result on every iteration — O(N^2) in the number of inputs.\nAt batch=256 this runs ~140x slower than a one-shot np.concatenate;\nat batch=1024, ~470x slower. Since vstack is the dataloader collation\nhot path, this dominates training iteration time.\n\nSeparate the validation loop (touches every tensor once) from the data\ngather loop (collects all per-key arrays into lists, then does a single\nnp.concatenate per key). Offsets for bounds keys are accumulated as\nPython ints during the gather pass, so only one allocation per output\nkey remains. Behavior is unchanged — same validation errors, same\noutput dict keys, dtypes, and bound semantics.\n\nMeasured on the issue's probe (100-row 2D items, best-of-3):\n  N=16:    0.35ms -> 0.17ms   (2.0x)\n  N=64:    2.36ms -> 0.62ms   (3.8x)\n  N=256:  10.76ms -> 2.50ms   (4.3x)\n  N=1024:141.88ms -> 9.86ms  (14.4x)\n\nScaling is now linear in N, matching the one-shot np.concatenate floor.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Address PR #72 review: preserve key order, improve concat error detail\n\n- Iterate tensors[0].tensors in insertion order instead of iterating a\n  set from keys_at_dim(). Set iteration of strings is hash-randomized\n  across runs (PYTHONHASHSEED), which would have broken byte-\n  reproducibility of save_file output. The previous implementation\n  preserved order via dict(tensors[0].tensors); this restores that\n  guarantee while keeping the linear concatenation structure.\n- Exception path now includes per-part shape+dtype instead of just\n  key+dim. The original dumped full arrays (unreadable for large\n  inputs); shapes+dtypes give actionable diagnostics without the\n  noise.\n- Add a doctest locking in the key-order invariant.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Preserve bounds dtype in concatenate offset accumulation\n\nAccumulate offset as a numpy scalar of the bounds' own dtype. A plain\nPython int offset triggers scalar-to-array dtype promotion on numpy\n< 2 — e.g., int32 bounds + large Python int could upcast to int64,\nbreaking byte-reproducibility of save_file output for disk-roundtripped\nJNRTs. Using `b[-1]` as the seed and `offset + b[-1]` as the update\nkeeps the offset's dtype bound to the input.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.7 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-04-20T10:17:22-04:00",
          "tree_id": "190685c17b8d9b5e1c1e6953175290c7d362225a",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/commit/ba32dfabe9d83266c0210b5e0d98038e431e46c2"
        },
        "date": 1776694740891,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CoreOps/GetItem_Int/small",
            "value": 0.000026557740000015427,
            "range": "7.087941308322399e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/medium",
            "value": 0.000026132364000005735,
            "range": "2.504370048725805e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/large",
            "value": 0.00002519295399997645,
            "range": "5.782391308652507e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/small",
            "value": 0.00003134039999963534,
            "range": "0.000010781603375797113",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/medium",
            "value": 0.00002858719999778714,
            "range": "0.000014644462481355996",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/large",
            "value": 0.00003959559999486828,
            "range": "0.00002384932525897518",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/small",
            "value": 0.000011551400004350398,
            "range": "0.000010806896237991209",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/medium",
            "value": 0.000007038999999053885,
            "range": "0.000003011095644141521",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/large",
            "value": 0.000007526000001689681,
            "range": "0.000004017769900512705",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/small",
            "value": 0.00025748199999782174,
            "range": "0.000022331844006648537",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/medium",
            "value": 0.0022494944000015947,
            "range": "0.000049694581446483445",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/large",
            "value": 0.03434316260000116,
            "range": "0.026402508599070257",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/small",
            "value": 0.0013767618000002813,
            "range": "0.000048442532445079706",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/medium",
            "value": 0.02601260639999623,
            "range": "0.027078680952255",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/large",
            "value": 0.272686896999997,
            "range": "0.03457638718349723",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch16",
            "value": 0.00039157760000136933,
            "range": "0.000037449339035502045",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch64",
            "value": 0.0013388793999979498,
            "range": "0.00004380891746744269",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch256",
            "value": 0.0051565551999971145,
            "range": "0.00017832958095330848",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/small",
            "value": 0.00005469180000261531,
            "range": "0.000012519359534698281",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/medium",
            "value": 0.00005407299999831139,
            "range": "0.000012827478391869981",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/large",
            "value": 0.00007639400000130081,
            "range": "0.00003030644033973597",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/small",
            "value": 0.00025222019999944224,
            "range": "0.00009986771311253853",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/small",
            "value": 0.00006341039999995246,
            "range": "0.00003485046364309609",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/medium",
            "value": 0.0002844084000003022,
            "range": "0.0001357743856931091",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/medium",
            "value": 0.00007757060000699312,
            "range": "0.000046013985406551965",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/large",
            "value": 0.0005338276000003362,
            "range": "0.00024355093005164435",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/large",
            "value": 0.00010930999999629876,
            "range": "0.000038419408580718045",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/small",
            "value": 0.000553912600000217,
            "range": "0.000025671942635163257",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/medium",
            "value": 0.004974613400003136,
            "range": "0.000053728704502064716",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/large",
            "value": 0.06447523839999576,
            "range": "0.03081338836868877",
            "unit": "seconds",
            "extra": "Count: 5"
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
          "id": "6990469f56aa0121e7d6210f3c837ccc447e7887",
          "message": "Infer dtypes via np.asarray instead of Python-level isinstance",
          "timestamp": "2026-04-20T14:19:09Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/73/commits/6990469f56aa0121e7d6210f3c837ccc447e7887"
        },
        "date": 1776694951070,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CoreOps/GetItem_Int/small",
            "value": 0.000022708598000065194,
            "range": "9.404748603230084e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/medium",
            "value": 0.000022264995000000455,
            "range": "4.1051337836963513e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/large",
            "value": 0.00002175857200001019,
            "range": "3.5968041467699015e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/small",
            "value": 0.00002340359999948305,
            "range": "0.000009831320426507923",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/medium",
            "value": 0.000025921599996081567,
            "range": "0.00001493733860573138",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/large",
            "value": 0.000030544200001259014,
            "range": "0.00002500987574595161",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/small",
            "value": 0.000009686399994279782,
            "range": "0.000007772226155734491",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/medium",
            "value": 0.00000645379999468787,
            "range": "0.000002410577251036896",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/large",
            "value": 0.000006450000006452683,
            "range": "0.000002778969946241582",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/small",
            "value": 0.0002557175999982064,
            "range": "0.00003152264743189837",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/medium",
            "value": 0.002169043399999282,
            "range": "0.00007882272719547499",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/large",
            "value": 0.03478016359999856,
            "range": "0.0272179974925164",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/small",
            "value": 0.0014121531999876425,
            "range": "0.00013211854564342123",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/medium",
            "value": 0.0264877762000026,
            "range": "0.02800586890456584",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/large",
            "value": 0.25462334180000423,
            "range": "0.027352212851671557",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch16",
            "value": 0.000342335999999932,
            "range": "0.00003831727513168661",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch64",
            "value": 0.001198360199992976,
            "range": "0.000034636820115454794",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch256",
            "value": 0.004736069800009091,
            "range": "0.00012875603869735386",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/small",
            "value": 0.00004693459999884908,
            "range": "0.000009363799197049998",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/medium",
            "value": 0.000048635000001695514,
            "range": "0.000012142785169425511",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/large",
            "value": 0.00006395480000946918,
            "range": "0.00003533058980567487",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/small",
            "value": 0.00022548580000716356,
            "range": "0.00016889669285543565",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/small",
            "value": 0.00005225120000318384,
            "range": "0.00004066634888508509",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/medium",
            "value": 0.0001944184000024052,
            "range": "0.0001238723495013049",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/medium",
            "value": 0.0000444869999967068,
            "range": "0.000021124923853434752",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/large",
            "value": 0.0004455079999956979,
            "range": "0.00028723757320613195",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/large",
            "value": 0.0000845223999931477,
            "range": "0.00003345816378229571",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/small",
            "value": 0.0005828588000099444,
            "range": "0.000014434679895159569",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/medium",
            "value": 0.004884023799991155,
            "range": "0.00008295769458449353",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/large",
            "value": 0.06066544339998927,
            "range": "0.025314437616545667",
            "unit": "seconds",
            "extra": "Count: 5"
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
          "id": "85adcc1a3e0acb1b7422638993631ac169910a4f",
          "message": "Infer dtypes via np.asarray instead of Python-level isinstance",
          "timestamp": "2026-04-20T14:19:09Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/73/commits/85adcc1a3e0acb1b7422638993631ac169910a4f"
        },
        "date": 1776699203776,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CoreOps/GetItem_Int/small",
            "value": 0.00002250205800001481,
            "range": "5.825748903251239e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/medium",
            "value": 0.000022623308000007114,
            "range": "2.8072371376882604e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/large",
            "value": 0.00002218611999998643,
            "range": "2.8993892164889406e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/small",
            "value": 0.000029009799996515538,
            "range": "0.00002314671793140973",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/medium",
            "value": 0.00002355760000511964,
            "range": "0.000011060416096340259",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/large",
            "value": 0.00003365080000321541,
            "range": "0.000027911721677891997",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/small",
            "value": 0.00001069400000233145,
            "range": "0.000008777207045486977",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/medium",
            "value": 0.0000063255999947386956,
            "range": "0.0000025356398192333902",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/large",
            "value": 0.000006986599998981546,
            "range": "0.000003637087406688606",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/small",
            "value": 0.00025305959999855077,
            "range": "0.000024870720577322885",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/medium",
            "value": 0.0021924322000018035,
            "range": "0.000037962211304569884",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/large",
            "value": 0.03456082999999808,
            "range": "0.027926548225425177",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/small",
            "value": 0.0013427139999976135,
            "range": "0.00005095648107446067",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/medium",
            "value": 0.026084011399998986,
            "range": "0.028148099213000197",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/large",
            "value": 0.24795957079999767,
            "range": "0.02725319678128011",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch16",
            "value": 0.000360951799999043,
            "range": "0.000033110143602920584",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch64",
            "value": 0.001267458600003124,
            "range": "0.00005004439707439291",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch256",
            "value": 0.004932478599999968,
            "range": "0.00018649435146451173",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/small",
            "value": 0.0000446854000017538,
            "range": "0.00001083094759466114",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/medium",
            "value": 0.00004660419999424903,
            "range": "0.000012716361890396949",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/large",
            "value": 0.00006686279999996713,
            "range": "0.000020803637703146346",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/small",
            "value": 0.00019488960000160204,
            "range": "0.00007734928110027155",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/small",
            "value": 0.00005362480000030701,
            "range": "0.00003697177731183438",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/medium",
            "value": 0.00017288680000433488,
            "range": "0.00006676032150599924",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/medium",
            "value": 0.00005157960000303774,
            "range": "0.000023079946359500344",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/large",
            "value": 0.0004114281999989089,
            "range": "0.00012490719123235341",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/large",
            "value": 0.00009163839999928313,
            "range": "0.000041554997207275226",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/small",
            "value": 0.0005414744000034943,
            "range": "0.00002471064873426741",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/medium",
            "value": 0.004829998399998203,
            "range": "0.00007523212361909078",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/large",
            "value": 0.06159873139999661,
            "range": "0.028496994457719943",
            "unit": "seconds",
            "extra": "Count: 5"
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
          "id": "9063c083ea10ddf72cd6f277b052650b4cd69582",
          "message": "Infer dtypes via np.asarray instead of Python-level isinstance",
          "timestamp": "2026-04-20T14:19:09Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/73/commits/9063c083ea10ddf72cd6f277b052650b4cd69582"
        },
        "date": 1776699395513,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CoreOps/GetItem_Int/small",
            "value": 0.00002741026400002511,
            "range": "0.0000010750361681625793",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/medium",
            "value": 0.0000266851220000035,
            "range": "5.586256767709184e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/large",
            "value": 0.000026917428000047038,
            "range": "4.154762022906846e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/small",
            "value": 0.000027371200013703854,
            "range": "0.000009600262437622257",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/medium",
            "value": 0.000026465199994163413,
            "range": "0.000009977519567298317",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/large",
            "value": 0.00003497919999517762,
            "range": "0.00002452409092711694",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/small",
            "value": 0.000010734400001410905,
            "range": "0.00000872589616738201",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/medium",
            "value": 0.000007554200004733503,
            "range": "0.0000036338266597771947",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/large",
            "value": 0.000007890800009136002,
            "range": "0.0000040504751195070675",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/small",
            "value": 0.0002730656000039744,
            "range": "0.000021143602821778657",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/medium",
            "value": 0.0023515395999993416,
            "range": "0.00004244195359484456",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/large",
            "value": 0.037307403200003364,
            "range": "0.029974597977098356",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/small",
            "value": 0.001466308400000571,
            "range": "0.00005245769813873945",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/medium",
            "value": 0.02737145059999193,
            "range": "0.028408034140793993",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/large",
            "value": 0.2521268573999976,
            "range": "0.025499062648291063",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch16",
            "value": 0.0003930643999979111,
            "range": "0.0000419084281622473",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch64",
            "value": 0.002188403000002381,
            "range": "0.0005208680099810229",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch256",
            "value": 0.00516017219999867,
            "range": "0.00015913166702833837",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/small",
            "value": 0.000048516799995468316,
            "range": "0.000010878643628480568",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/medium",
            "value": 0.000056385200002750936,
            "range": "0.000012792272508550002",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/large",
            "value": 0.00006898100000398699,
            "range": "0.00001692319764650588",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/small",
            "value": 0.00019642519999365504,
            "range": "0.00006857934590275943",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/small",
            "value": 0.00006698940001115261,
            "range": "0.000028971020958973856",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/medium",
            "value": 0.0006383772000049248,
            "range": "0.0008835845002400639",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/medium",
            "value": 0.00006134880000558951,
            "range": "0.000017125799289888033",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/large",
            "value": 0.00051575020000314,
            "range": "0.00022577659451575245",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/large",
            "value": 0.00010737279999943894,
            "range": "0.0000309939174792179",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/small",
            "value": 0.0005752495999956864,
            "range": "0.00002141990893673522",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/medium",
            "value": 0.005264263399999436,
            "range": "0.00004925234125571268",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/large",
            "value": 0.06364232700001367,
            "range": "0.0248624717694454",
            "unit": "seconds",
            "extra": "Count: 5"
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
          "id": "a2c2accc8a3529da1b65515d0920902de514e01d",
          "message": "Infer dtypes via np.asarray instead of Python-level isinstance",
          "timestamp": "2026-04-20T14:19:09Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/73/commits/a2c2accc8a3529da1b65515d0920902de514e01d"
        },
        "date": 1776699669179,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CoreOps/GetItem_Int/small",
            "value": 0.000026433952000047613,
            "range": "9.820090015790898e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/medium",
            "value": 0.00002698143599998559,
            "range": "6.67188816295492e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/large",
            "value": 0.00002606281099998853,
            "range": "4.7103795176111987e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/small",
            "value": 0.000025715999998965345,
            "range": "0.000008730453454351865",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/medium",
            "value": 0.00002586820000374246,
            "range": "0.000009432283588211954",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/large",
            "value": 0.000036882399999171864,
            "range": "0.00002042101200412435",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/small",
            "value": 0.000010810400002014831,
            "range": "0.000008434033364485056",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/medium",
            "value": 0.000007213600002842213,
            "range": "0.0000031210255222601936",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/large",
            "value": 0.00000769460000071831,
            "range": "0.000004164118613683248",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/small",
            "value": 0.0002643754000018816,
            "range": "0.000017558315302987777",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/medium",
            "value": 0.0022974379999993744,
            "range": "0.000027874166671386288",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/large",
            "value": 0.03322526659999596,
            "range": "0.022775408230178564",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/small",
            "value": 0.0014250252000010733,
            "range": "0.00003814382589907098",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/medium",
            "value": 0.02284802739999634,
            "range": "0.019146746803991074",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/large",
            "value": 0.2329665304000031,
            "range": "0.018541563208902122",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch16",
            "value": 0.00038679219999835366,
            "range": "0.00003668364904844566",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch64",
            "value": 0.0013452458000017486,
            "range": "0.00004750031712772896",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch256",
            "value": 0.00516888680000136,
            "range": "0.00015385309438137746",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/small",
            "value": 0.00004968659999917691,
            "range": "0.00001122858986239843",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/medium",
            "value": 0.00005262820000098145,
            "range": "0.000012091734499416581",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/large",
            "value": 0.00006650400000012269,
            "range": "0.000017245087345133108",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/small",
            "value": 0.00022461739999926066,
            "range": "0.00009690180049062821",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/small",
            "value": 0.00007712399999775244,
            "range": "0.00003229322638881986",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/medium",
            "value": 0.00021920319999537696,
            "range": "0.00010682568052123021",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/medium",
            "value": 0.00007206859999939753,
            "range": "0.000010198958933962479",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/large",
            "value": 0.00044267240000124276,
            "range": "0.00019548825301982927",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/large",
            "value": 0.00010410840000076859,
            "range": "0.00001660927630172821",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/small",
            "value": 0.0005654499999991458,
            "range": "0.000024450499093287618",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/medium",
            "value": 0.005056590800001004,
            "range": "0.00004945864487243692",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/large",
            "value": 0.06137636039999563,
            "range": "0.02320806105013851",
            "unit": "seconds",
            "extra": "Count: 5"
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
          "id": "23a18f8d3ff49477b9618bd2157ec45e26d5a013",
          "message": "Infer dtypes via np.asarray instead of Python-level isinstance",
          "timestamp": "2026-04-20T14:19:09Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/73/commits/23a18f8d3ff49477b9618bd2157ec45e26d5a013"
        },
        "date": 1776701020015,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CoreOps/GetItem_Int/small",
            "value": 0.000026976218000015704,
            "range": "0.0000012686012291961603",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/medium",
            "value": 0.000026969153000038656,
            "range": "4.999595678523265e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/large",
            "value": 0.00002638268999996285,
            "range": "3.939648026923823e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/small",
            "value": 0.00003109600000357204,
            "range": "0.000011385338484427338",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/medium",
            "value": 0.00002739520000432094,
            "range": "0.000011978089694101616",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/large",
            "value": 0.00003631359999758388,
            "range": "0.000026541831848524723",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/small",
            "value": 0.000010629600001266227,
            "range": "0.00000862624615572679",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/medium",
            "value": 0.000007015200003479549,
            "range": "0.0000032146823618854304",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/large",
            "value": 0.000007493999999041989,
            "range": "0.000004027929927180074",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/small",
            "value": 0.0002658073999953103,
            "range": "0.00002623909516814314",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/medium",
            "value": 0.0023200742000142327,
            "range": "0.000086050793083917",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/large",
            "value": 0.037641524200000734,
            "range": "0.030623137068408725",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/small",
            "value": 0.0014496597999936966,
            "range": "0.00008887493167070424",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/medium",
            "value": 0.027372819799995795,
            "range": "0.028943049498613482",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/large",
            "value": 0.27428149400000734,
            "range": "0.03403429381693414",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch16",
            "value": 0.0003927999999916665,
            "range": "0.00003535227215427693",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch64",
            "value": 0.0013407826000047863,
            "range": "0.00004524881685384347",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch256",
            "value": 0.005235973999992894,
            "range": "0.0002263367101729883",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/small",
            "value": 0.00005056999999624168,
            "range": "0.000011789651506065529",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/medium",
            "value": 0.00005177440000352363,
            "range": "0.000012178301439527542",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/large",
            "value": 0.00007712380001407837,
            "range": "0.000028228203688834098",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/small",
            "value": 0.00020097479999776625,
            "range": "0.00007317566722541972",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/small",
            "value": 0.00006644800001254225,
            "range": "0.00003552458280139386",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/medium",
            "value": 0.00025029060000179013,
            "range": "0.00008506875366226532",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/medium",
            "value": 0.00007924540000203706,
            "range": "0.00003654819188733424",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/large",
            "value": 0.0004690363999941383,
            "range": "0.00017004799569998936",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/large",
            "value": 0.00009737960000393287,
            "range": "0.000029733726271258016",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/small",
            "value": 0.000557236600008082,
            "range": "0.000021051720211420815",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/medium",
            "value": 0.0050633988000015505,
            "range": "0.00006634119058943605",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/large",
            "value": 0.0665363809999974,
            "range": "0.03273974527155154",
            "unit": "seconds",
            "extra": "Count: 5"
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
          "id": "9f28d2d1c04fd995658382cd5caa093406fc07a0",
          "message": "Infer dtypes via np.asarray instead of Python-level isinstance",
          "timestamp": "2026-04-20T14:19:09Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/73/commits/9f28d2d1c04fd995658382cd5caa093406fc07a0"
        },
        "date": 1776702243815,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CoreOps/GetItem_Int/small",
            "value": 0.00002679786400000239,
            "range": "0.0000013672570009605854",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/medium",
            "value": 0.00002616521199999511,
            "range": "3.556796074388936e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/large",
            "value": 0.00003015800800000079,
            "range": "7.059489013581202e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/small",
            "value": 0.000030157800000552016,
            "range": "0.00001006754642253815",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/medium",
            "value": 0.000029599599997709447,
            "range": "0.00001055898197381",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/large",
            "value": 0.0000363056000026063,
            "range": "0.000026713300649737118",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/small",
            "value": 0.000010774000003266337,
            "range": "0.000008718032994021152",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/medium",
            "value": 0.00000717340000733202,
            "range": "0.0000034809286496380793",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/large",
            "value": 0.000007443799989914623,
            "range": "0.000003923112752111238",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/small",
            "value": 0.0002586115999974936,
            "range": "0.000017895919179148527",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/medium",
            "value": 0.002200589800003172,
            "range": "0.00004520013085514595",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/large",
            "value": 0.037007446400008345,
            "range": "0.03231367061403249",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/small",
            "value": 0.0013831827999979396,
            "range": "0.00006029997999910719",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/medium",
            "value": 0.02668894479999153,
            "range": "0.028614858949257145",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/large",
            "value": 0.26870274600000243,
            "range": "0.031009588073678932",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch16",
            "value": 0.0003890186000035101,
            "range": "0.000029653096843839126",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch64",
            "value": 0.0013251126000000113,
            "range": "0.00004072285561809178",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch256",
            "value": 0.005108598000003894,
            "range": "0.0001775582311372406",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/small",
            "value": 0.0000498045999961505,
            "range": "0.000010632664082885039",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/medium",
            "value": 0.00005177859998752865,
            "range": "0.000010919243309819912",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/large",
            "value": 0.00007870880000382385,
            "range": "0.000018674295372773343",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/small",
            "value": 0.00024017560000402227,
            "range": "0.00013788070404571596",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/small",
            "value": 0.00006727780000232997,
            "range": "0.00003475517465437464",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/medium",
            "value": 0.0002098550000027899,
            "range": "0.00008313090545745143",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/medium",
            "value": 0.00006278099999690312,
            "range": "0.00002264866022742284",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/large",
            "value": 0.0004716770000015913,
            "range": "0.00016938887440877572",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/large",
            "value": 0.00010578320000718123,
            "range": "0.000030034104363553092",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/small",
            "value": 0.0005578753999998298,
            "range": "0.000032402920670411124",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/medium",
            "value": 0.00492134520000036,
            "range": "0.0000829592653532242",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/large",
            "value": 0.06283371200000261,
            "range": "0.029369997650346747",
            "unit": "seconds",
            "extra": "Count: 5"
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
          "id": "789b071c29f520e6b4f5fab673e6a4304d9cdb8a",
          "message": "Infer dtypes via np.asarray instead of Python-level isinstance",
          "timestamp": "2026-04-20T14:19:09Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/73/commits/789b071c29f520e6b4f5fab673e6a4304d9cdb8a"
        },
        "date": 1776703084941,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CoreOps/GetItem_Int/small",
            "value": 0.00002226915000002805,
            "range": "9.508036451935934e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/medium",
            "value": 0.000021716624000006844,
            "range": "5.352693386650224e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/large",
            "value": 0.000021653673000017193,
            "range": "5.083918221213089e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/small",
            "value": 0.000024449400001458343,
            "range": "0.000011833588903075715",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/medium",
            "value": 0.000027886599997373197,
            "range": "0.000011792664512359198",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/large",
            "value": 0.000032563600001367377,
            "range": "0.000028322759256550163",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/small",
            "value": 0.000009932800003298325,
            "range": "0.000008608448715172623",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/medium",
            "value": 0.00000644659999693431,
            "range": "0.0000026749680022348627",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/large",
            "value": 0.000006714000002716603,
            "range": "0.0000032934718045538864",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/small",
            "value": 0.0002652267999962987,
            "range": "0.000019179050569061326",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/medium",
            "value": 0.002209379399999989,
            "range": "0.00012748552725060918",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/large",
            "value": 0.03623589660000448,
            "range": "0.03043736221824261",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/small",
            "value": 0.0013637778000003208,
            "range": "0.00007838805834572454",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/medium",
            "value": 0.027442177200001083,
            "range": "0.02983478156965404",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/large",
            "value": 0.25592233159999866,
            "range": "0.032597055984539436",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch16",
            "value": 0.00034400199999709005,
            "range": "0.00003803568428716017",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch64",
            "value": 0.0012037402000004249,
            "range": "0.00003261979390719256",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch256",
            "value": 0.00474393380000322,
            "range": "0.00010612557924256433",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/small",
            "value": 0.000044966199999407765,
            "range": "0.00001129771013223137",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/medium",
            "value": 0.00004814400000157093,
            "range": "0.000013062042853780115",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/large",
            "value": 0.00006810919999793441,
            "range": "0.00003925223499638951",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/small",
            "value": 0.00020182020000163446,
            "range": "0.00009670505004186623",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/small",
            "value": 0.00005058240000153091,
            "range": "0.00003896675566724963",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/medium",
            "value": 0.00020037920000390841,
            "range": "0.00008674234817464915",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/medium",
            "value": 0.00005260679999423701,
            "range": "0.00003597741919641119",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/large",
            "value": 0.0005096303999977181,
            "range": "0.0002392521058216333",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/large",
            "value": 0.00008340019999764081,
            "range": "0.00004554764876595751",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/small",
            "value": 0.0005558935999999904,
            "range": "0.00004139958026994521",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/medium",
            "value": 0.004877795600000923,
            "range": "0.00009994301411759239",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/large",
            "value": 0.06302343060000055,
            "range": "0.02997332935820275",
            "unit": "seconds",
            "extra": "Count: 5"
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
          "id": "73b27cabd9facf67b18d649aff4fbc702bc93e1f",
          "message": "Merge pull request #73 from mmcdermott/perf/infer-dtype-asarray\n\nInfer dtypes via np.asarray instead of Python-level isinstance",
          "timestamp": "2026-04-20T12:41:53-04:00",
          "tree_id": "6f2c2d8bc9d1628365f71b00c453e29c93698617",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/commit/73b27cabd9facf67b18d649aff4fbc702bc93e1f"
        },
        "date": 1776703374351,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CoreOps/GetItem_Int/small",
            "value": 0.000027820665999996662,
            "range": "0.000001236285852489552",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/medium",
            "value": 0.0000265528679999818,
            "range": "5.71313188913019e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/large",
            "value": 0.000026217320000000652,
            "range": "5.122482672156794e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/small",
            "value": 0.000026812000004383663,
            "range": "0.000009850392759980615",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/medium",
            "value": 0.000027415000002406486,
            "range": "0.000010507091012816342",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/large",
            "value": 0.000035486199999468225,
            "range": "0.000024353816121118194",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/small",
            "value": 0.000011000600002830651,
            "range": "0.000008491324587708601",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/medium",
            "value": 0.000007666199994105228,
            "range": "0.0000034169052068574416",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/large",
            "value": 0.00000770460000580897,
            "range": "0.000003977595292625378",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/small",
            "value": 0.0002724928000020554,
            "range": "0.000023976670364721367",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/medium",
            "value": 0.0023567904000003637,
            "range": "0.00007463150767790714",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/large",
            "value": 0.03559917439999651,
            "range": "0.026935605695708954",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/small",
            "value": 0.0014577875999975732,
            "range": "0.00004878793159487606",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/medium",
            "value": 0.027345818399996346,
            "range": "0.02841653425285792",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/large",
            "value": 0.2672261787999986,
            "range": "0.028772813143680184",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch16",
            "value": 0.00038808559999949923,
            "range": "0.00003711471498543643",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch64",
            "value": 0.001338301600000591,
            "range": "0.00004170434515864846",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch256",
            "value": 0.00516527020000126,
            "range": "0.00015285488939169718",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/small",
            "value": 0.00005485860000362663,
            "range": "0.000012864472521470932",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/medium",
            "value": 0.000052444199997125904,
            "range": "0.000011358023826751472",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/large",
            "value": 0.00008065099999896575,
            "range": "0.000021383558649281384",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/small",
            "value": 0.0002449560000002293,
            "range": "0.00010218750573522464",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/small",
            "value": 0.00007871900000111509,
            "range": "0.00004071711710732279",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/medium",
            "value": 0.0002347428000007312,
            "range": "0.00010286786482072845",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/medium",
            "value": 0.00006513960000233964,
            "range": "0.000014401789620730675",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/large",
            "value": 0.0004921980000005988,
            "range": "0.00021259165177377334",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/large",
            "value": 0.00010980739999695288,
            "range": "0.000033671062054174404",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/small",
            "value": 0.0005926478000020552,
            "range": "0.00002778214454759151",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/medium",
            "value": 0.005274197400001413,
            "range": "0.00006205359761611989",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/large",
            "value": 0.06601311999999951,
            "range": "0.029330242547833656",
            "unit": "seconds",
            "extra": "Count: 5"
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
          "id": "23a9725caf7517ada63163dde25ddc5681719c2b",
          "message": "Reject reserved meta-names (bounds/mask) in raw-input constructor",
          "timestamp": "2026-04-20T16:42:25Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/77/commits/23a9725caf7517ada63163dde25ddc5681719c2b"
        },
        "date": 1776704041762,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CoreOps/GetItem_Int/small",
            "value": 0.00001783181199982664,
            "range": "6.077560776044072e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/medium",
            "value": 0.00001738251599999785,
            "range": "1.4847199193167587e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/large",
            "value": 0.000017198655999891344,
            "range": "2.937421510687807e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/small",
            "value": 0.000018000399995798945,
            "range": "0.00000796364389144915",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/medium",
            "value": 0.000021890400000756925,
            "range": "0.000015587831315541082",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/large",
            "value": 0.000029054799995265057,
            "range": "0.000027638230359224475",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/small",
            "value": 0.000008949000005031849,
            "range": "0.00000822974433622985",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/medium",
            "value": 0.000005133399997703236,
            "range": "0.000002262858651923117",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/large",
            "value": 0.000005061399997430272,
            "range": "0.0000022185020321543825",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/small",
            "value": 0.00019042639999042877,
            "range": "0.00002411304310909128",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/medium",
            "value": 0.0016359231999899747,
            "range": "0.00003102035248359552",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/large",
            "value": 0.033121911400007774,
            "range": "0.03605858157223001",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/small",
            "value": 0.0010283709999953316,
            "range": "0.000047621803700932944",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/medium",
            "value": 0.024612530800027344,
            "range": "0.031479388560142346",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/large",
            "value": 0.23121633199998542,
            "range": "0.03042235360262872",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch16",
            "value": 0.00027260539998223975,
            "range": "0.00003528330768336188",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch64",
            "value": 0.0009660989999929371,
            "range": "0.00004389382050171344",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch256",
            "value": 0.0037192843999832802,
            "range": "0.00013261379141107894",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/small",
            "value": 0.00003501140000707892,
            "range": "0.000008693996022321877",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/medium",
            "value": 0.00003979839999601609,
            "range": "0.000010730967670879963",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/large",
            "value": 0.00004667240001481332,
            "range": "0.000018519880866435163",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/small",
            "value": 0.08309959819999904,
            "range": "0.09191062209546709",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/small",
            "value": 0.00006966819997842322,
            "range": "0.00008790467704216375",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/medium",
            "value": 0.1427299620000099,
            "range": "0.07976329897045793",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/medium",
            "value": 0.00006424059999972087,
            "range": "0.00006469991506055651",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/large",
            "value": 0.0016484575999925256,
            "range": "0.0013650292166981774",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/large",
            "value": 0.00007342620000372335,
            "range": "0.00003803712192008726",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/small",
            "value": 0.00041715740001109226,
            "range": "0.000028977639636390383",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/medium",
            "value": 0.00367736100000684,
            "range": "0.00006229006130504989",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/large",
            "value": 0.05132092899999634,
            "range": "0.030837635161097797",
            "unit": "seconds",
            "extra": "Count: 5"
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
          "id": "6de2c1eecb239930863b2dc684dffc97e4b44e4c",
          "message": "Handle all-empty inner rows in flatten() (partial #46)",
          "timestamp": "2026-04-20T16:42:25Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/78/commits/6de2c1eecb239930863b2dc684dffc97e4b44e4c"
        },
        "date": 1776704153780,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CoreOps/GetItem_Int/small",
            "value": 0.000026407338000012717,
            "range": "9.486058866706897e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/medium",
            "value": 0.00002625105600009192,
            "range": "8.863445587495958e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/large",
            "value": 0.000025935412999956498,
            "range": "4.973156933081011e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/small",
            "value": 0.00002687879999712095,
            "range": "0.000011715637646967305",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/medium",
            "value": 0.000027391400010401412,
            "range": "0.000011571159813704391",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/large",
            "value": 0.000037672600001315004,
            "range": "0.00003069503822876697",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/small",
            "value": 0.000010716000008414995,
            "range": "0.00000880524735697722",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/medium",
            "value": 0.000007221600003504136,
            "range": "0.000003403151390331319",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/large",
            "value": 0.000007464000009349547,
            "range": "0.000003980273793545346",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/small",
            "value": 0.00026581280000073095,
            "range": "0.0000211411860733761",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/medium",
            "value": 0.0023093179999932544,
            "range": "0.00005361577749833479",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/large",
            "value": 0.035668552399999956,
            "range": "0.027998786051802206",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/small",
            "value": 0.0014104382000027726,
            "range": "0.00003235884379896626",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/medium",
            "value": 0.029709793999995782,
            "range": "0.03412578006609967",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/large",
            "value": 0.276162331799992,
            "range": "0.03462825741043738",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch16",
            "value": 0.00038075819999221493,
            "range": "0.00003981502103789875",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch64",
            "value": 0.0013127750000080595,
            "range": "0.000039895690442841474",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch256",
            "value": 0.005060685800003739,
            "range": "0.00014893733469751214",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/small",
            "value": 0.00004943479999610645,
            "range": "0.000010927169904815002",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/medium",
            "value": 0.000052342399999361075,
            "range": "0.000011511309355232153",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/large",
            "value": 0.00008165299999518538,
            "range": "0.0000306262723702312",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/small",
            "value": 0.0002029045999961454,
            "range": "0.00007000069117176633",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/small",
            "value": 0.00007509680000339358,
            "range": "0.000034332387526301294",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/medium",
            "value": 0.00022412839999788047,
            "range": "0.000083531275950307",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/medium",
            "value": 0.00007428160001836659,
            "range": "0.000032690687099558416",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/large",
            "value": 0.0004932172000053469,
            "range": "0.00019851820807892452",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/large",
            "value": 0.00010558639999089792,
            "range": "0.000029566880358732993",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/small",
            "value": 0.0005766881999875295,
            "range": "0.00002836027304445116",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/medium",
            "value": 0.0050615511999922095,
            "range": "0.00006003605230385821",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/large",
            "value": 0.06597019820002288,
            "range": "0.03337741200856265",
            "unit": "seconds",
            "extra": "Count: 5"
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
          "id": "0de48520101dd09d03ca3cee1034e5eb43fe7aa4",
          "message": "Raise IndexError on out-of-range dim-0 int indexing",
          "timestamp": "2026-04-20T16:42:25Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/79/commits/0de48520101dd09d03ca3cee1034e5eb43fe7aa4"
        },
        "date": 1776704279421,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CoreOps/GetItem_Int/small",
            "value": 0.000029901552000069386,
            "range": "0.0000012863759117648587",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/medium",
            "value": 0.000030071896999970704,
            "range": "4.2286320891875023e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/large",
            "value": 0.00002859161999992921,
            "range": "5.583201699142582e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/small",
            "value": 0.000027651799985051185,
            "range": "0.000011452559287064017",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/medium",
            "value": 0.00002850940001053459,
            "range": "0.00001590056518594648",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/large",
            "value": 0.00004160600000204795,
            "range": "0.00002485678271608398",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/small",
            "value": 0.000010692000000744883,
            "range": "0.000008770782077068726",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/medium",
            "value": 0.000007117199993444956,
            "range": "0.000003369594223068061",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/large",
            "value": 0.000007372000004579604,
            "range": "0.000003983309550768501",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/small",
            "value": 0.00026264859999400867,
            "range": "0.00001950557497664803",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/medium",
            "value": 0.002263129799996477,
            "range": "0.00004940931765756283",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/large",
            "value": 0.03791920519998939,
            "range": "0.031266131611250414",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/small",
            "value": 0.0014193089999935183,
            "range": "0.00004230424985297977",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/medium",
            "value": 0.028530733599995983,
            "range": "0.031594363422786924",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/large",
            "value": 0.2799601510000002,
            "range": "0.037261618585503295",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch16",
            "value": 0.00039385220001122436,
            "range": "0.0000337367863146639",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch64",
            "value": 0.0013333721999970293,
            "range": "0.000061507266227416",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch256",
            "value": 0.0051848908000010855,
            "range": "0.0001503552734875061",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/small",
            "value": 0.00005100940001057097,
            "range": "0.000012614037054215575",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/medium",
            "value": 0.0000560509999900205,
            "range": "0.000019508939190135057",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/large",
            "value": 0.00007100100001480313,
            "range": "0.000026090223201221238",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/small",
            "value": 0.00028759959998296835,
            "range": "0.00015322446578372578",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/small",
            "value": 0.00006207019999919794,
            "range": "0.00003432840109710733",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/medium",
            "value": 0.0002535882000074707,
            "range": "0.00012375480505539014",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/medium",
            "value": 0.0000639355999851432,
            "range": "0.00002144771905916771",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/large",
            "value": 0.0005295393999858788,
            "range": "0.00026081617693166965",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/large",
            "value": 0.00009750239998993493,
            "range": "0.000028475008807424233",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/small",
            "value": 0.0005706846000066434,
            "range": "0.000017373002538323685",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/medium",
            "value": 0.005083631399998012,
            "range": "0.00006705476760877048",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/large",
            "value": 0.06660461619999296,
            "range": "0.032569110516681404",
            "unit": "seconds",
            "extra": "Count: 5"
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
          "id": "c8d493fc68d1a09ec858b2f3d6af091d81a31d68",
          "message": "Coalesce safe_open calls per __getitem__ (operation-scoped handle reuse)",
          "timestamp": "2026-04-20T16:42:25Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/80/commits/c8d493fc68d1a09ec858b2f3d6af091d81a31d68"
        },
        "date": 1776704609773,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CoreOps/GetItem_Int/small",
            "value": 0.000025282561999802055,
            "range": "7.448874130226195e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/medium",
            "value": 0.000025279485000055504,
            "range": "2.2605109073242484e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/large",
            "value": 0.00002489771899990956,
            "range": "3.3771323259790335e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/small",
            "value": 0.000025328200035801273,
            "range": "0.00000985729921721891",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/medium",
            "value": 0.000026784599981510837,
            "range": "0.000012463784137046958",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/large",
            "value": 0.00004573480000544805,
            "range": "0.000031226563554035864",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/small",
            "value": 0.000011110800005553757,
            "range": "0.00000963727492077846",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/medium",
            "value": 0.0000062071999764157225,
            "range": "0.0000024202628125801855",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/large",
            "value": 0.000006862399982310308,
            "range": "0.0000035261861011608737",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/small",
            "value": 0.00024652540002989554,
            "range": "0.000022298415534534416",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/medium",
            "value": 0.002144766000014897,
            "range": "0.00003901588551302738",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/large",
            "value": 0.03450515200001973,
            "range": "0.028138953639685826",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/small",
            "value": 0.0013257218000035209,
            "range": "0.000048509616177908365",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/medium",
            "value": 0.026221779200000128,
            "range": "0.028033278464563795",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/large",
            "value": 0.264548425199996,
            "range": "0.03314810624012558",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch16",
            "value": 0.0003490322000516244,
            "range": "0.00004096524209679124",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch64",
            "value": 0.001236023000046771,
            "range": "0.00005204205693339899",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch256",
            "value": 0.004813828199985437,
            "range": "0.0001418331078718712",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/small",
            "value": 0.000044685400007438146,
            "range": "0.000010742447860877654",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/medium",
            "value": 0.000050392000002830176,
            "range": "0.000011584830352921117",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/large",
            "value": 0.00006159660001685552,
            "range": "0.00002516848480570252",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/small",
            "value": 0.00018764300000384537,
            "range": "0.00005286914102638051",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/small",
            "value": 0.000053811199995834615,
            "range": "0.000039910629899479814",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/medium",
            "value": 0.00020776499998191865,
            "range": "0.00010318253355671865",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/medium",
            "value": 0.00005657140002313099,
            "range": "0.00002389535963603602",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/large",
            "value": 0.00040305339998667475,
            "range": "0.00013962379486709864",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/large",
            "value": 0.00008861599999363535,
            "range": "0.00003672177408072834",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/small",
            "value": 0.0005380870000408322,
            "range": "0.00003324686409845295",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/medium",
            "value": 0.004798767599982057,
            "range": "0.00006983404673515079",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/large",
            "value": 0.06166707219997534,
            "range": "0.029553908256168264",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Disk/small",
            "value": 0.00007315838800013807,
            "range": "0.0000031092781502471813",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Disk/medium",
            "value": 0.00007769569600020533,
            "range": "5.338434261805809e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Disk/large",
            "value": 0.00008829404299990528,
            "range": "0.0000013889031632402388",
            "unit": "seconds",
            "extra": "Count: 5"
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
          "id": "d9c470231538db055e9369a52359b36ce4359faa",
          "message": "Reject reserved meta-names (bounds/mask) in raw-input constructor",
          "timestamp": "2026-04-20T16:42:25Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/77/commits/d9c470231538db055e9369a52359b36ce4359faa"
        },
        "date": 1776704699660,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CoreOps/GetItem_Int/small",
            "value": 0.00002630340800001818,
            "range": "6.158926096994884e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/medium",
            "value": 0.000026843775000017442,
            "range": "4.4137051279589793e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/large",
            "value": 0.000026874952000000008,
            "range": "4.593012308293532e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/small",
            "value": 0.000029066200002603183,
            "range": "0.00001092811160180974",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/medium",
            "value": 0.000029564999999820428,
            "range": "0.000015197622741433646",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/large",
            "value": 0.000037790199999676585,
            "range": "0.00003116024524451486",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/small",
            "value": 0.000010816200003205267,
            "range": "0.000009123934962612923",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/medium",
            "value": 0.000007185400002640563,
            "range": "0.0000033340427131879",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/large",
            "value": 0.000007458199999632598,
            "range": "0.000003942009096478445",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/small",
            "value": 0.00027126159999113497,
            "range": "0.00003141592680895545",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/medium",
            "value": 0.0023234710000025415,
            "range": "0.00008624872153900002",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/large",
            "value": 0.040924608000000265,
            "range": "0.03782067565528083",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/small",
            "value": 0.0014257386000025463,
            "range": "0.00005121728017311758",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/medium",
            "value": 0.0320557980000018,
            "range": "0.038347157036664366",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/large",
            "value": 0.30370778919999564,
            "range": "0.042855801188898854",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch16",
            "value": 0.00038672439999345445,
            "range": "0.000042514624052119415",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch64",
            "value": 0.0013440422000002173,
            "range": "0.00005470285945185448",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch256",
            "value": 0.0051022020000004885,
            "range": "0.00018586611812870143",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/small",
            "value": 0.000051261800004454015,
            "range": "0.000011675041099970596",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/medium",
            "value": 0.0000526104000016403,
            "range": "0.00001505798168449371",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/large",
            "value": 0.00009233199999982843,
            "range": "0.00003465824005013868",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/small",
            "value": 0.00020493960000180777,
            "range": "0.00005691233049582535",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/small",
            "value": 0.00008016739999732181,
            "range": "0.00004887776567304955",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/medium",
            "value": 0.00024357779999775175,
            "range": "0.00009179996572133033",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/medium",
            "value": 0.00007854020000195306,
            "range": "0.00004669920318039774",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/large",
            "value": 0.000431738400001791,
            "range": "0.00013456471724477813",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/large",
            "value": 0.00011680760000842838,
            "range": "0.00003746710281070473",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/small",
            "value": 0.0005718374000053927,
            "range": "0.00002391334056159614",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/medium",
            "value": 0.005087410600000908,
            "range": "0.00006879188931731646",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/large",
            "value": 0.07079551279999804,
            "range": "0.03818204039432561",
            "unit": "seconds",
            "extra": "Count: 5"
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
          "id": "8113c1e45dbd2192c2ab46b805b6145a3583d8d2",
          "message": "Handle all-empty inner rows in flatten() (partial #46)",
          "timestamp": "2026-04-20T16:42:25Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/78/commits/8113c1e45dbd2192c2ab46b805b6145a3583d8d2"
        },
        "date": 1776705764087,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CoreOps/GetItem_Int/small",
            "value": 0.0000285905459999185,
            "range": "9.805149633777857e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/medium",
            "value": 0.000028242336999994677,
            "range": "6.082634193865661e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/large",
            "value": 0.000027844152000000124,
            "range": "7.963513331434858e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/small",
            "value": 0.000027657399999725386,
            "range": "0.00000936091345930416",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/medium",
            "value": 0.000027870000002394592,
            "range": "0.000010592274668251456",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/large",
            "value": 0.000041238999995130146,
            "range": "0.000022376237688264894",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/small",
            "value": 0.000010714199999029005,
            "range": "0.000008723531086295683",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/medium",
            "value": 0.00000737159999744108,
            "range": "0.0000034580385024219904",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/large",
            "value": 0.000007892799993669542,
            "range": "0.000004099751365616",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/small",
            "value": 0.00027045019999718536,
            "range": "0.00002081062606032616",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/medium",
            "value": 0.002319289799993385,
            "range": "0.0000268024955663492",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/large",
            "value": 0.03360724260000438,
            "range": "0.02292670461507524",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/small",
            "value": 0.00145007259999943,
            "range": "0.000039171577648445104",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/medium",
            "value": 0.02355419640000491,
            "range": "0.02040363061555791",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/large",
            "value": 0.2336622515999977,
            "range": "0.014255234238998146",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch16",
            "value": 0.00039472639999189597,
            "range": "0.00002545503596281438",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch64",
            "value": 0.0013610208000045532,
            "range": "0.00003775421391289869",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch256",
            "value": 0.0052572296000050756,
            "range": "0.00013173173746196858",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/small",
            "value": 0.00005138980000083393,
            "range": "0.000011274395445151751",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/medium",
            "value": 0.000057433599999967554,
            "range": "0.000018417311156377584",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/large",
            "value": 0.00007353900000452995,
            "range": "0.00001661379046016894",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/small",
            "value": 0.00019292800000130227,
            "range": "0.00007461877330927403",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/small",
            "value": 0.00007013679999090527,
            "range": "0.00005224126523728592",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/medium",
            "value": 0.00021232619999977942,
            "range": "0.00010411024151598075",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/medium",
            "value": 0.00006697879999819633,
            "range": "0.00002246938796668967",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/large",
            "value": 0.00042389039999193303,
            "range": "0.00018334156047022018",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/large",
            "value": 0.00009026639999660801,
            "range": "0.000020415573813584085",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/small",
            "value": 0.0005813184000089677,
            "range": "0.00001416906863264135",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/medium",
            "value": 0.005263565600006359,
            "range": "0.000043723184928827325",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/large",
            "value": 0.06181166580000195,
            "range": "0.023961041996783367",
            "unit": "seconds",
            "extra": "Count: 5"
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
          "id": "8eb89a246b01053c9e6010eae0730f77eff50a55",
          "message": "Reject reserved meta-names (bounds/mask) in raw-input constructor",
          "timestamp": "2026-04-20T16:42:25Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/77/commits/8eb89a246b01053c9e6010eae0730f77eff50a55"
        },
        "date": 1776706010489,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CoreOps/GetItem_Int/small",
            "value": 0.000022883562000032497,
            "range": "0.0000014986310164293942",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/medium",
            "value": 0.000022653274000006716,
            "range": "2.1245173314326632e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/large",
            "value": 0.00002256215200002032,
            "range": "3.707130342278949e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/small",
            "value": 0.0000248909999982061,
            "range": "0.000011472373142746968",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/medium",
            "value": 0.00002786679999928765,
            "range": "0.00001660528467063389",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/large",
            "value": 0.00003785879999895769,
            "range": "0.000038252017394562894",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/small",
            "value": 0.000010118999998098844,
            "range": "0.000008401218573317269",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/medium",
            "value": 0.000006534799996416041,
            "range": "0.0000026353030534992064",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/large",
            "value": 0.000007126400004153766,
            "range": "0.00000374871008114726",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/small",
            "value": 0.0002586194000031128,
            "range": "0.000023534210662056317",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/medium",
            "value": 0.002218880800003831,
            "range": "0.00008121056907478304",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/large",
            "value": 0.03560106960000553,
            "range": "0.028479601344196998",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/small",
            "value": 0.001380095799999026,
            "range": "0.00010591239451897723",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/medium",
            "value": 0.027300377800006003,
            "range": "0.029238453237457416",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/large",
            "value": 0.2669448733999985,
            "range": "0.032231978845438526",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch16",
            "value": 0.00035325940000348056,
            "range": "0.000034733742915198294",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch64",
            "value": 0.0012560953999980029,
            "range": "0.00007126870043919738",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch256",
            "value": 0.004893377799999143,
            "range": "0.00013239924936029053",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/small",
            "value": 0.00004701539999700799,
            "range": "0.000011261696284561916",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/medium",
            "value": 0.000049768600004540534,
            "range": "0.000012950571023645164",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/large",
            "value": 0.00006883679999418746,
            "range": "0.00003615199548778681",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/small",
            "value": 0.00027914819999921294,
            "range": "0.00022701848534578833",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/small",
            "value": 0.00004784500000312164,
            "range": "0.00004010766928858152",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/medium",
            "value": 0.00023175860000037573,
            "range": "0.00013568821893998031",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/medium",
            "value": 0.0000533311999987518,
            "range": "0.000035607646173554056",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/large",
            "value": 0.0004968292000000929,
            "range": "0.00028052514868056493",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/large",
            "value": 0.00008730159999856824,
            "range": "0.000044524235897797325",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/small",
            "value": 0.0005563289999997778,
            "range": "0.00002969945835585653",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/medium",
            "value": 0.00490941919999841,
            "range": "0.00010802576334810933",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/large",
            "value": 0.06364488599999732,
            "range": "0.029902974797394954",
            "unit": "seconds",
            "extra": "Count: 5"
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
          "id": "ae3d8731258a9a488e71b87e3e2f602a041953b9",
          "message": "Raise IndexError on out-of-range dim-0 int indexing",
          "timestamp": "2026-04-20T16:42:25Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/79/commits/ae3d8731258a9a488e71b87e3e2f602a041953b9"
        },
        "date": 1776706500113,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CoreOps/GetItem_Int/small",
            "value": 0.00002877777799997716,
            "range": "0.0000010550974724569527",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/medium",
            "value": 0.00002871389699997451,
            "range": "4.596310213721007e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/large",
            "value": 0.000027902534000006084,
            "range": "5.4727241252957e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/small",
            "value": 0.000025407399996879575,
            "range": "0.000009853561093900995",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/medium",
            "value": 0.000026730199999747127,
            "range": "0.000011497861114082875",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/large",
            "value": 0.000032911600001739316,
            "range": "0.000022043683750844947",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/small",
            "value": 0.000014280999999982669,
            "range": "0.000009482214907647174",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/medium",
            "value": 0.00000729759999842372,
            "range": "0.000003417381570712586",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/large",
            "value": 0.000007396199998765951,
            "range": "0.0000038527044644006",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/small",
            "value": 0.00026164080000228295,
            "range": "0.000017770003070733674",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/medium",
            "value": 0.00234393799999566,
            "range": "0.00013418605430110656",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/large",
            "value": 0.03347497439999927,
            "range": "0.02402986877528095",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/small",
            "value": 0.0014049165999978186,
            "range": "0.000033403514511695075",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/medium",
            "value": 0.025940719399997647,
            "range": "0.02660214493267538",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/large",
            "value": 0.23720352740000408,
            "range": "0.024215362209678442",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch16",
            "value": 0.0003786668000003601,
            "range": "0.00003999470287346238",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch64",
            "value": 0.0013148467999997138,
            "range": "0.00005220378316807028",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch256",
            "value": 0.005075164600000903,
            "range": "0.00013084964819708836",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/small",
            "value": 0.000052921399998240304,
            "range": "0.000012374165841786817",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/medium",
            "value": 0.000050336399999650895,
            "range": "0.000011770585320007144",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/large",
            "value": 0.00006514020000167876,
            "range": "0.00001375771008028418",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/small",
            "value": 0.0002175361999945835,
            "range": "0.00010234517456204259",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/small",
            "value": 0.00006696580000493668,
            "range": "0.00003836456773675041",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/medium",
            "value": 0.0002324620000052846,
            "range": "0.0001232665372651103",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/medium",
            "value": 0.00006831179999835512,
            "range": "0.000009845886591495926",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/large",
            "value": 0.0004957579999995687,
            "range": "0.00020976791888667462",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/large",
            "value": 0.00011564520000035827,
            "range": "0.00003815774872852028",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/small",
            "value": 0.0005692941999996037,
            "range": "0.00002293193094605338",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/medium",
            "value": 0.005068346000001611,
            "range": "0.00006175906273526291",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/large",
            "value": 0.06020981979999931,
            "range": "0.021761405071506628",
            "unit": "seconds",
            "extra": "Count: 5"
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
          "id": "641f8c6717b9cf85eb28fb35ea0198702afd5fa5",
          "message": "Coalesce safe_open calls per __getitem__ (operation-scoped handle reuse)",
          "timestamp": "2026-04-20T16:42:25Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/80/commits/641f8c6717b9cf85eb28fb35ea0198702afd5fa5"
        },
        "date": 1776706635101,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CoreOps/GetItem_Int/small",
            "value": 0.000029338596000002327,
            "range": "9.156850841012228e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/medium",
            "value": 0.000029129429000022354,
            "range": "4.1017031443566896e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/large",
            "value": 0.000029207122999991953,
            "range": "2.637549671649557e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/small",
            "value": 0.000029352600000720487,
            "range": "0.00001089691700241446",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/medium",
            "value": 0.00002967739999917285,
            "range": "0.000011193503870007364",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/large",
            "value": 0.00003849759999638991,
            "range": "0.000027011958026397982",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/small",
            "value": 0.000010822400003007716,
            "range": "0.00000865728427444232",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/medium",
            "value": 0.0000070612000001801786,
            "range": "0.0000034553049257573374",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/large",
            "value": 0.000007301599998754682,
            "range": "0.000003736069228965317",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/small",
            "value": 0.0002685002000021086,
            "range": "0.000027851845898926397",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/medium",
            "value": 0.0023420085999930505,
            "range": "0.00011223624075247182",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/large",
            "value": 0.034805951000004144,
            "range": "0.026595994334168163",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/small",
            "value": 0.0014111897999953271,
            "range": "0.000039854241832722116",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/medium",
            "value": 0.02748639720000483,
            "range": "0.02924335037070562",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/large",
            "value": 0.2549787816000048,
            "range": "0.030125305654954082",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch16",
            "value": 0.0003836569999918993,
            "range": "0.00003860031272395769",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch64",
            "value": 0.0013190758000007463,
            "range": "0.0000443792902663756",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch256",
            "value": 0.005096116400011397,
            "range": "0.00018253844784641736",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/small",
            "value": 0.000048454400001674,
            "range": "0.000010911921808883007",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/medium",
            "value": 0.000051740400004973706,
            "range": "0.000010859759631770091",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/large",
            "value": 0.0000696298000036677,
            "range": "0.000019386944353861864",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/small",
            "value": 0.00023751700000502752,
            "range": "0.00011238327178341648",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/small",
            "value": 0.00007279380000113633,
            "range": "0.00003280642744538774",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/medium",
            "value": 0.000230335400004833,
            "range": "0.00010762687500334982",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/medium",
            "value": 0.00006994640000357322,
            "range": "0.000018416324266100605",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/large",
            "value": 0.0004996570000059819,
            "range": "0.0002158059448704585",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/large",
            "value": 0.00010716179999121777,
            "range": "0.000029935735322450726",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/small",
            "value": 0.0005655295999929422,
            "range": "0.000029780567438534968",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/medium",
            "value": 0.005143174199992018,
            "range": "0.0001880565409600934",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/large",
            "value": 0.06567548200000033,
            "range": "0.02927555973365919",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Disk/small",
            "value": 0.0001050446059999217,
            "range": "0.000005873452915518483",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Disk/medium",
            "value": 0.00011023729000004322,
            "range": "0.000002957624932239748",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Disk/large",
            "value": 0.00011924509600001443,
            "range": "0.0000011493006957075283",
            "unit": "seconds",
            "extra": "Count: 5"
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
          "id": "e545bc61fa898078bdc2c4879340018eb05cc605",
          "message": "Coalesce safe_open calls per __getitem__ (operation-scoped handle reuse)",
          "timestamp": "2026-04-20T16:42:25Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/80/commits/e545bc61fa898078bdc2c4879340018eb05cc605"
        },
        "date": 1776706768261,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CoreOps/GetItem_Int/small",
            "value": 0.000029575230000034477,
            "range": "0.0000010388791176399815",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/medium",
            "value": 0.00002919119699993189,
            "range": "3.5980728599697577e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/large",
            "value": 0.000028655510000021424,
            "range": "4.959440094061013e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/small",
            "value": 0.000032423999999764416,
            "range": "0.00001068319356659317",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/medium",
            "value": 0.00002891759999670285,
            "range": "0.000010307006268941661",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/large",
            "value": 0.00003595279999899503,
            "range": "0.00002109976799273123",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/small",
            "value": 0.000010411400006660188,
            "range": "0.000008145547420396408",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/medium",
            "value": 0.000007207399994513252,
            "range": "0.0000033492613691416974",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/large",
            "value": 0.000007670600007259054,
            "range": "0.000004138460445097722",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/small",
            "value": 0.0002651375999960237,
            "range": "0.000023778732839518275",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/medium",
            "value": 0.0022738262000018493,
            "range": "0.00003718345055954422",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/large",
            "value": 0.033344176800000014,
            "range": "0.023213708294785553",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/small",
            "value": 0.001417591599994239,
            "range": "0.00003646154088205312",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/medium",
            "value": 0.02439744980000569,
            "range": "0.02291449459840714",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/large",
            "value": 0.23885482599999933,
            "range": "0.023771123559370187",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch16",
            "value": 0.00039179180000701306,
            "range": "0.000025566483234416297",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch64",
            "value": 0.0013336551999998392,
            "range": "0.000038989400719880715",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch256",
            "value": 0.005082635399998025,
            "range": "0.00012764664771658848",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/small",
            "value": 0.00005448960000080661,
            "range": "0.000013307330262881167",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/medium",
            "value": 0.000052076999998007524,
            "range": "0.000010785077159515784",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/large",
            "value": 0.00006734979999123425,
            "range": "0.000015440528151529846",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/small",
            "value": 0.00019563860001312606,
            "range": "0.0001114340949436793",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/small",
            "value": 0.0000636265999958141,
            "range": "0.000030250556595724622",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/medium",
            "value": 0.0001999284000021362,
            "range": "0.00008895902156084164",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/medium",
            "value": 0.00008625039999401451,
            "range": "0.00005945679975594136",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/large",
            "value": 0.00041712679999932333,
            "range": "0.00014118223975387277",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/large",
            "value": 0.00010071140000604828,
            "range": "0.00002822776980583777",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/small",
            "value": 0.0005670296000005237,
            "range": "0.000030046295762408203",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/medium",
            "value": 0.0050396410000018935,
            "range": "0.000045544464827717485",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/large",
            "value": 0.06088248339999609,
            "range": "0.023738566498463877",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Disk/small",
            "value": 0.00010412877800001752,
            "range": "0.0000018220464036096788",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Disk/medium",
            "value": 0.00010639789900000095,
            "range": "0.000001277311967457112",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Disk/large",
            "value": 0.00011896148099998527,
            "range": "0.000001274957177962279",
            "unit": "seconds",
            "extra": "Count: 5"
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
          "id": "1c6b1dd962ba7094928b777c895b2e0ab410c19e",
          "message": "Raise IndexError on out-of-range int indexing (recursive across all dims)",
          "timestamp": "2026-04-20T16:42:25Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/79/commits/1c6b1dd962ba7094928b777c895b2e0ab410c19e"
        },
        "date": 1776708142698,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CoreOps/GetItem_Int/small",
            "value": 0.000024501216000032854,
            "range": "6.673678280785796e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/medium",
            "value": 0.000024927218999977184,
            "range": "4.0201010650194426e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/large",
            "value": 0.000024416631999969243,
            "range": "3.066633708815408e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/small",
            "value": 0.000024200400002882815,
            "range": "0.000010763548154862064",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/medium",
            "value": 0.000024036199994270647,
            "range": "0.000012999555383592338",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/large",
            "value": 0.000035123000003522975,
            "range": "0.00002995297135978912",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/small",
            "value": 0.000010383599999386206,
            "range": "0.000008615910328460399",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/medium",
            "value": 0.000006563999994568803,
            "range": "0.000002633967630757303",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/large",
            "value": 0.000006750000005695256,
            "range": "0.0000032420650053654992",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/small",
            "value": 0.00025332399999911104,
            "range": "0.000022373208627544474",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/medium",
            "value": 0.002229151000005913,
            "range": "0.00008540744208111997",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/large",
            "value": 0.038428107799995816,
            "range": "0.035072403508142995",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/small",
            "value": 0.0013711959999966438,
            "range": "0.000053446001112404395",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/medium",
            "value": 0.029696302399992193,
            "range": "0.03470005877159051",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/large",
            "value": 0.2841517947999989,
            "range": "0.037400116223936304",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch16",
            "value": 0.0003556878000040342,
            "range": "0.000048493512937725794",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch64",
            "value": 0.0012359539999977187,
            "range": "0.00004771869836705796",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch256",
            "value": 0.004903620800001817,
            "range": "0.00012571623519980156",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/small",
            "value": 0.00004827260000297429,
            "range": "0.000011105660039981802",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/medium",
            "value": 0.00004714100000455801,
            "range": "0.00001436028739074418",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/large",
            "value": 0.00006593920000455,
            "range": "0.000026566901366122864",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/small",
            "value": 0.00032001220000097417,
            "range": "0.00021452916777564082",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/small",
            "value": 0.000060743600005253026,
            "range": "0.0000411716255320952",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/medium",
            "value": 0.00019358599998895443,
            "range": "0.00008110355547496356",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/medium",
            "value": 0.000056024399998477745,
            "range": "0.000029586789354627815",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/large",
            "value": 0.00044137520000617767,
            "range": "0.0001519024838695063",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/large",
            "value": 0.00010037360000296758,
            "range": "0.00004421515291023814",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/small",
            "value": 0.0005644166000024597,
            "range": "0.000033676087884589465",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/medium",
            "value": 0.0049574256000028075,
            "range": "0.00009896379023520526",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/large",
            "value": 0.06694112739999696,
            "range": "0.03435032283158875",
            "unit": "seconds",
            "extra": "Count: 5"
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
          "id": "99983a029d610329dcdc4d716fb6ba0da1fe7825",
          "message": "Coalesce safe_open calls per __getitem__ (operation-scoped handle reuse)",
          "timestamp": "2026-04-20T16:42:25Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/80/commits/99983a029d610329dcdc4d716fb6ba0da1fe7825"
        },
        "date": 1776708197792,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CoreOps/GetItem_Int/small",
            "value": 0.0000249232980000329,
            "range": "0.0000012769681414194066",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/medium",
            "value": 0.000024506512000030513,
            "range": "5.46796167859212e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/large",
            "value": 0.00002510077499998431,
            "range": "5.340801496340427e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/small",
            "value": 0.00002684339999916574,
            "range": "0.000012753406437183437",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/medium",
            "value": 0.000027667599999858795,
            "range": "0.000012382864427214107",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/large",
            "value": 0.000035678599996913365,
            "range": "0.000029117906006864705",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/small",
            "value": 0.000009950000000458204,
            "range": "0.000008286494215602936",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/medium",
            "value": 0.0000063069999953313525,
            "range": "0.0000024048670462954846",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/large",
            "value": 0.000006838799998831746,
            "range": "0.0000035317592944536172",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/small",
            "value": 0.00025989479999850574,
            "range": "0.000024398643944218612",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/medium",
            "value": 0.0021856059999976196,
            "range": "0.00010199920442809561",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/large",
            "value": 0.03455898800000057,
            "range": "0.027043435241192265",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/small",
            "value": 0.001398982999998566,
            "range": "0.00009391370131673263",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/medium",
            "value": 0.02534630819999677,
            "range": "0.02568688250381194",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/large",
            "value": 0.24595739840000022,
            "range": "0.025681037380361933",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch16",
            "value": 0.00035038160000055996,
            "range": "0.000033176109943965955",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch64",
            "value": 0.0012225200000017366,
            "range": "0.000034193576424860754",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch256",
            "value": 0.004851412000004984,
            "range": "0.00012116502657728055",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/small",
            "value": 0.00004901520000544224,
            "range": "0.00001644535789323742",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/medium",
            "value": 0.00004766220000078647,
            "range": "0.00001061996895985808",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/large",
            "value": 0.0000656312000046455,
            "range": "0.0000297503137104014",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/small",
            "value": 0.00015574539999931857,
            "range": "0.000059836108332585464",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/small",
            "value": 0.00005394640000133677,
            "range": "0.000042030048392970325",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/medium",
            "value": 0.00016812679999986813,
            "range": "0.00008586053026008022",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/medium",
            "value": 0.00005200939999667753,
            "range": "0.00002013437510692351",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/large",
            "value": 0.0004442826000030209,
            "range": "0.00023138418792897",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/large",
            "value": 0.00009159280000119452,
            "range": "0.000029211458510909577",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/small",
            "value": 0.0005416667999952552,
            "range": "0.000037445507302828073",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/medium",
            "value": 0.0048990430000003474,
            "range": "0.00011836844747494202",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/large",
            "value": 0.05968273940000017,
            "range": "0.02343495960243451",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Disk/small",
            "value": 0.00008306489999992551,
            "range": "5.063266298744452e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Disk/medium",
            "value": 0.00008801645500000177,
            "range": "2.5985819878566994e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Disk/large",
            "value": 0.0000890360610000016,
            "range": "1.66175367627842e-7",
            "unit": "seconds",
            "extra": "Count: 5"
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
          "id": "15f6384cae90db2f7e3ba0239833c6dbf90bb339",
          "message": "Raise IndexError on out-of-range int indexing (recursive across all dims)",
          "timestamp": "2026-04-20T16:42:25Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/79/commits/15f6384cae90db2f7e3ba0239833c6dbf90bb339"
        },
        "date": 1776709209222,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CoreOps/GetItem_Int/small",
            "value": 0.000024605538000002982,
            "range": "9.77152491279241e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/medium",
            "value": 0.00002539899700002479,
            "range": "7.615110323855889e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/large",
            "value": 0.000025329429000009894,
            "range": "2.483132173036947e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/small",
            "value": 0.000024970399994117543,
            "range": "0.000013733277440151494",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/medium",
            "value": 0.000026772999996182988,
            "range": "0.000015732628101256178",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/large",
            "value": 0.00003373499998815532,
            "range": "0.000031052542349615935",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/small",
            "value": 0.000009480400001393718,
            "range": "0.000007156112370183033",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/medium",
            "value": 0.0000063544000056481306,
            "range": "0.0000021803772193232155",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/large",
            "value": 0.00000629840000101467,
            "range": "0.0000024109191743655934",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/small",
            "value": 0.00025640560000397274,
            "range": "0.000025082251166649316",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/medium",
            "value": 0.002232786199994052,
            "range": "0.00007267570917510706",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/large",
            "value": 0.035569349799988006,
            "range": "0.02892562364822748",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/small",
            "value": 0.0013573387999940678,
            "range": "0.00007447013210486708",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/medium",
            "value": 0.02671304899999427,
            "range": "0.028437879945230837",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/large",
            "value": 0.2621691417999955,
            "range": "0.030743304228980767",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch16",
            "value": 0.0003661227999998573,
            "range": "0.00003514053768567363",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch64",
            "value": 0.0012185608000038427,
            "range": "0.0000273848732231436",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch256",
            "value": 0.004779109399999015,
            "range": "0.00014895332134910394",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/small",
            "value": 0.00004606319999425068,
            "range": "0.000011678241387078397",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/medium",
            "value": 0.00005115980000027776,
            "range": "0.000014917245396748144",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/large",
            "value": 0.00007114200000160053,
            "range": "0.00003632192441935113",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/small",
            "value": 0.00021836920000168903,
            "range": "0.0001213280250640523",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/small",
            "value": 0.0000465845999940484,
            "range": "0.00003496183438095254",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/medium",
            "value": 0.00024276159999772062,
            "range": "0.00014851253205987557",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/medium",
            "value": 0.000048814600000923745,
            "range": "0.00003449949265016755",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/large",
            "value": 0.0003800220000073296,
            "range": "0.0001304105890522236",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/large",
            "value": 0.00008118179999883068,
            "range": "0.00003364986738366398",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/small",
            "value": 0.0005444260000047052,
            "range": "0.000043844569183632066",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/medium",
            "value": 0.004883258400002433,
            "range": "0.00012856930810107092",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/large",
            "value": 0.062080519399995635,
            "range": "0.027461013757074923",
            "unit": "seconds",
            "extra": "Count: 5"
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
          "id": "a5890df8d474128d67d38ff71a24633e65fe6751",
          "message": "Raise IndexError on out-of-range int indexing (recursive across all dims)",
          "timestamp": "2026-04-20T16:42:25Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/79/commits/a5890df8d474128d67d38ff71a24633e65fe6751"
        },
        "date": 1776709344309,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CoreOps/GetItem_Int/small",
            "value": 0.000024745961999997235,
            "range": "7.144080587280655e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/medium",
            "value": 0.0000240914339999847,
            "range": "2.9911989764526154e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/large",
            "value": 0.000024085314000018343,
            "range": "2.8600119363046677e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/small",
            "value": 0.000024489199995514353,
            "range": "0.00001108917452873249",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/medium",
            "value": 0.00002415220000102636,
            "range": "0.000010796510348124163",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/large",
            "value": 0.000035681600002135384,
            "range": "0.0000303481017779723",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/small",
            "value": 0.00001046579999979258,
            "range": "0.00000843392892990092",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/medium",
            "value": 0.000006483599997864076,
            "range": "0.0000023515021383569746",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/large",
            "value": 0.000006778400000939655,
            "range": "0.000003397643490779523",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/small",
            "value": 0.00024710499999969215,
            "range": "0.00002895196361816283",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/medium",
            "value": 0.0021282705999993825,
            "range": "0.00005400415053502159",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/large",
            "value": 0.036562787400001184,
            "range": "0.03288069312376296",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/small",
            "value": 0.0013229416000001492,
            "range": "0.00005170907306851087",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/medium",
            "value": 0.0328641618000006,
            "range": "0.04309553063959597",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/large",
            "value": 0.2743035346000028,
            "range": "0.029030402463750753",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch16",
            "value": 0.00035635340000226277,
            "range": "0.000039007222928990874",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch64",
            "value": 0.0012505459999999856,
            "range": "0.000053646487435350445",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch256",
            "value": 0.005356838800000219,
            "range": "0.00037961789070928325",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/small",
            "value": 0.00005252919999918504,
            "range": "0.000014401315654536836",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/medium",
            "value": 0.000047882400005505586,
            "range": "0.000012422239183135617",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/large",
            "value": 0.00006205359999569282,
            "range": "0.000023966455107420846",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/small",
            "value": 0.00017324959999882595,
            "range": "0.00004303233587257274",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/small",
            "value": 0.00006502819999809617,
            "range": "0.00005812967469270806",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/medium",
            "value": 0.00018525920000058704,
            "range": "0.00007288573660179126",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/medium",
            "value": 0.000054295800001114,
            "range": "0.000029826857252644063",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/large",
            "value": 0.00041064339999934417,
            "range": "0.00009421416247527715",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/large",
            "value": 0.00009395979999737847,
            "range": "0.000046130936667479426",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/small",
            "value": 0.0005337231999988035,
            "range": "0.000033724046789630734",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/medium",
            "value": 0.004743952800001239,
            "range": "0.00009636682501777669",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/large",
            "value": 0.06262803840000117,
            "range": "0.03285157941381618",
            "unit": "seconds",
            "extra": "Count: 5"
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
          "id": "b45d8490b85a1123fa0b02dc1dfb94ae5db28f16",
          "message": "Coalesce safe_open calls per __getitem__ (operation-scoped handle reuse)",
          "timestamp": "2026-04-20T16:42:25Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/80/commits/b45d8490b85a1123fa0b02dc1dfb94ae5db28f16"
        },
        "date": 1776718035812,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CoreOps/GetItem_Int/small",
            "value": 0.00003070346799995605,
            "range": "0.0000015033912137608536",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/medium",
            "value": 0.00003029320100000632,
            "range": "4.7143702900265266e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/large",
            "value": 0.000030541366000022666,
            "range": "6.010863795705641e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/small",
            "value": 0.000030020399998420542,
            "range": "0.000011766430114259891",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/medium",
            "value": 0.00003439240001057442,
            "range": "0.00001185037826787483",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/large",
            "value": 0.000041449399998327865,
            "range": "0.000029950352067738877",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/small",
            "value": 0.000009279200003220468,
            "range": "0.000008754153112108807",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/medium",
            "value": 0.000006592400006866228,
            "range": "0.000004460238077664176",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/large",
            "value": 0.0000067968000109885905,
            "range": "0.00000493891801552914",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/small",
            "value": 0.0002696994000075392,
            "range": "0.0000288332020385618",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/medium",
            "value": 0.0022674219999998966,
            "range": "0.00003544520935400307",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/large",
            "value": 0.03553735720000191,
            "range": "0.028066337639295114",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/small",
            "value": 0.0014193926000018564,
            "range": "0.00006255658521978363",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/medium",
            "value": 0.027577930199993262,
            "range": "0.02958729791126466",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/large",
            "value": 0.2681559531999994,
            "range": "0.03582726460859875",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch16",
            "value": 0.0003915177999942898,
            "range": "0.00003480505356386815",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch64",
            "value": 0.0013404567999998561,
            "range": "0.00005314660243064458",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch256",
            "value": 0.005169271399995523,
            "range": "0.0001465283858368695",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/small",
            "value": 0.00004924840000626318,
            "range": "0.000011078574224802632",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/medium",
            "value": 0.00005169299999465693,
            "range": "0.00001167760028555875",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/large",
            "value": 0.00007296059999930548,
            "range": "0.00002309692839638661",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/small",
            "value": 0.00026239540000005945,
            "range": "0.00015671642272924673",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/small",
            "value": 0.00007496260000152687,
            "range": "0.00003136886572662467",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/medium",
            "value": 0.0002608027999940532,
            "range": "0.00016346109164319973",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/medium",
            "value": 0.00006923580000375295,
            "range": "0.000019423081954848165",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/large",
            "value": 0.0004831293999870923,
            "range": "0.00017873228830570382",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/large",
            "value": 0.00011197979999337804,
            "range": "0.000034813999833876045",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/small",
            "value": 0.0005684112000096774,
            "range": "0.000027251271570198946",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/medium",
            "value": 0.005129626600000848,
            "range": "0.00009021568279571644",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/large",
            "value": 0.06565964819999977,
            "range": "0.031982357921639254",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Disk/small",
            "value": 0.00010320718800005579,
            "range": "0.000003096825840720213",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Disk/medium",
            "value": 0.00010907899099998985,
            "range": "2.357777097015873e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Disk/large",
            "value": 0.00011925789000005693,
            "range": "0.0000012907161459704152",
            "unit": "seconds",
            "extra": "Count: 5"
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
          "id": "c6175902760b79c7de2ed36d319e3c25e191919c",
          "message": "Coalesce safe_open calls per __getitem__ (operation-scoped handle reuse)",
          "timestamp": "2026-04-20T16:42:25Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/80/commits/c6175902760b79c7de2ed36d319e3c25e191919c"
        },
        "date": 1776718984494,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CoreOps/GetItem_Int/small",
            "value": 0.000025710295999971322,
            "range": "7.043988938829923e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/medium",
            "value": 0.00002603487999999743,
            "range": "4.866039084179791e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/large",
            "value": 0.000025281728999999585,
            "range": "3.6345173380314815e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/small",
            "value": 0.000025944799998001144,
            "range": "0.000011109514353410022",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/medium",
            "value": 0.000028015600003072903,
            "range": "0.00001478383231039453",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/large",
            "value": 0.00004199859999971522,
            "range": "0.00003283288066643067",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/small",
            "value": 0.000009714600000165775,
            "range": "0.000009972008263500267",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/medium",
            "value": 0.0000061370000025817715,
            "range": "0.000003890725121109593",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/large",
            "value": 0.000006573799998932372,
            "range": "0.000005088921517976571",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/small",
            "value": 0.00025087719999703493,
            "range": "0.000029713764415078072",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/medium",
            "value": 0.0021704855999985285,
            "range": "0.0000845355359954286",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/large",
            "value": 0.03755164120000245,
            "range": "0.034544811154026175",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/small",
            "value": 0.0013200694000033764,
            "range": "0.0000607098451433067",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/medium",
            "value": 0.030717386799997824,
            "range": "0.03841437795241257",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/large",
            "value": 0.26627186100000133,
            "range": "0.02805515894041312",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch16",
            "value": 0.0003562993999992159,
            "range": "0.00003922685339806651",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch64",
            "value": 0.001248982800004228,
            "range": "0.00004875032238158487",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch256",
            "value": 0.004908630799999969,
            "range": "0.00014408369224213735",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/small",
            "value": 0.000045605800002590514,
            "range": "0.000010956645824699122",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/medium",
            "value": 0.00004749320000030366,
            "range": "0.00001121993997995595",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/large",
            "value": 0.0000641780000023573,
            "range": "0.000023151972741459016",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/small",
            "value": 0.00018960780000440992,
            "range": "0.000054613013663861675",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/small",
            "value": 0.00005905040000016015,
            "range": "0.00004723326303561547",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/medium",
            "value": 0.0001877326000027324,
            "range": "0.00008164214232429279",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/medium",
            "value": 0.00005582959999514969,
            "range": "0.000022715925686582937",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/large",
            "value": 0.000492743199998813,
            "range": "0.00022099264181121804",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/large",
            "value": 0.00009808499999905962,
            "range": "0.00003852449819929938",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/small",
            "value": 0.0005336687999999868,
            "range": "0.00003078613826985706",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/medium",
            "value": 0.004763898200002359,
            "range": "0.00009707604429179833",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/large",
            "value": 0.06265899919999925,
            "range": "0.03182792483600197",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Disk/small",
            "value": 0.00007384557599999653,
            "range": "0.0000010928099457669135",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Disk/medium",
            "value": 0.00007828762299996583,
            "range": "8.565214410427856e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Disk/large",
            "value": 0.00008855845100002568,
            "range": "5.076280514448386e-7",
            "unit": "seconds",
            "extra": "Count: 5"
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
          "id": "eefdf37c4d237461670f9455578fc9bc12b3812f",
          "message": "Release candidate: 0.3.0 — correctness fixes + disk I/O perf",
          "timestamp": "2026-04-20T16:42:25Z",
          "url": "https://github.com/mmcdermott/nested_ragged_tensors/pull/81/commits/eefdf37c4d237461670f9455578fc9bc12b3812f"
        },
        "date": 1776719196697,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CoreOps/GetItem_Int/small",
            "value": 0.00003080175999997436,
            "range": "9.598002959614017e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/medium",
            "value": 0.00003109113600001478,
            "range": "3.490852159943749e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Int/large",
            "value": 0.00003137208600001884,
            "range": "9.167777611280057e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/small",
            "value": 0.000029901199999926577,
            "range": "0.000011248112359053374",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/medium",
            "value": 0.00003109580000000278,
            "range": "0.000012278908734715146",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Slice/large",
            "value": 0.000038639800004602874,
            "range": "0.000026867195549013907",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/small",
            "value": 0.000009541800000079093,
            "range": "0.000009171432314577309",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/medium",
            "value": 0.000006782400001270617,
            "range": "0.00000445448463298665",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_1D/large",
            "value": 0.000006952999999043641,
            "range": "0.000004834897775517766",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/small",
            "value": 0.00027850719999946707,
            "range": "0.000029814505687806506",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/medium",
            "value": 0.0024023507999999085,
            "range": "0.00005918745550015202",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_2D/large",
            "value": 0.03802982840000198,
            "range": "0.03116723879120492",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/small",
            "value": 0.0014777862000016739,
            "range": "0.000060117048973527965",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/medium",
            "value": 0.028355292800000598,
            "range": "0.030170512964284895",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_3D/large",
            "value": 0.2782843602000014,
            "range": "0.035281243964854714",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch16",
            "value": 0.000394350400000576,
            "range": "0.0000296591749883982",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch64",
            "value": 0.001375010999998949,
            "range": "0.00004336395652946885",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Collate_VStack_ToDense/batch256",
            "value": 0.005287988600002791,
            "range": "0.00021792071286942725",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/small",
            "value": 0.00005005899999730445,
            "range": "0.0000110464794147084",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/medium",
            "value": 0.000057006200000842,
            "range": "0.00001263311055390194",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Concatenate/large",
            "value": 0.00008016880000241144,
            "range": "0.00003313296940324129",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/small",
            "value": 0.00024407680000138043,
            "range": "0.00007085544066545794",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/small",
            "value": 0.00006586820000222814,
            "range": "0.00003807184501703634",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/medium",
            "value": 0.0002133079999993015,
            "range": "0.00009904056111819722",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/medium",
            "value": 0.00006857339999726264,
            "range": "0.000019128957077347395",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Save/large",
            "value": 0.00043725200000324096,
            "range": "0.00014721280945802966",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/Load/large",
            "value": 0.00010922079999886591,
            "range": "0.000028892867813980646",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/small",
            "value": 0.0006092496000007941,
            "range": "0.000042467741979763205",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/medium",
            "value": 0.005309120200004713,
            "range": "0.00010850279938934996",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/ToDense_MultiKey/large",
            "value": 0.06720841139999437,
            "range": "0.03164221845189983",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Disk/small",
            "value": 0.00010832964599998717,
            "range": "0.0000010100741169829188",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Disk/medium",
            "value": 0.00011475416600001154,
            "range": "0.0000028919963742673128",
            "unit": "seconds",
            "extra": "Count: 5"
          },
          {
            "name": "CoreOps/GetItem_Disk/large",
            "value": 0.00012593769199999372,
            "range": "3.8268310078750517e-7",
            "unit": "seconds",
            "extra": "Count: 5"
          }
        ]
      }
    ]
  }
}