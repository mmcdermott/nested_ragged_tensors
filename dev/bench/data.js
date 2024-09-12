window.BENCHMARK_DATA = {
  "lastUpdate": 1726162824559,
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
      }
    ]
  }
}