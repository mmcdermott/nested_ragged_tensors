window.BENCHMARK_DATA = {
  "lastUpdate": 1730994849829,
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
      }
    ]
  }
}