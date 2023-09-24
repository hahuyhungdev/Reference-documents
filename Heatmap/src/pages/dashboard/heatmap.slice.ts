import { createSlice } from '@reduxjs/toolkit'

interface HeatmapState {
  data: Array<{
    logs: Array<{
      x: number
      y: number
      value: number
    }>
    date: number
  }>
  loading: boolean
  error: string | null | any
}

const initialState: HeatmapState = {
  data: [
    {
      logs: [
        {
          x: 70,
          y: 70,
          value: 100
        },
        {
          x: 60,
          y: 60,
          value: 100
        },
        {
          x: 50,
          y: 50,
          value: 100
        },
        {
          x: 30,
          y: 30,
          value: 10
        },
        {
          x: 275,
          y: 100,
          value: 75
        }
      ],
      date: 1677549764
    },
    {
      logs: [
        {
          x: 3,
          y: 3,
          value: 10
        },
        {
          x: 175,
          y: 72,
          value: 75
        },
        {
          x: 1192,
          y: 72,
          value: 75
        },
        {
          x: 1,
          y: 648,
          value: 75
        }
      ],
      date: 1677486404
    },
    {
      logs: [
        {
          x: 1,
          y: 1,
          value: 95
        },
        {
          x: 175,
          y: 72,
          value: 75
        }
      ],
      date: 1675666993
    },
    {
      logs: [
        {
          x: 45,
          y: 42,
          value: 33
        }
      ],
      date: 1675391884
    },
    {
      logs: [
        {
          x: 12,
          y: 12,
          value: 93
        }
      ],
      date: 1675324907
    },
    {
      logs: [
        {
          x: 152,
          y: 202,
          value: 43
        }
      ],
      date: 1675305343
    },
    {
      logs: [
        {
          x: 513,
          y: 394,
          value: 29
        },
        {
          x: 513,
          y: 398,
          value: 16
        },
        {
          x: 512,
          y: 400,
          value: 4
        },
        {
          x: 512,
          y: 402,
          value: 13
        },
        {
          x: 512,
          y: 405,
          value: 35
        },
        {
          x: 512,
          y: 408,
          value: 59
        },
        {
          x: 511,
          y: 410,
          value: 39
        },
        {
          x: 511,
          y: 413,
          value: 33
        },
        {
          x: 511,
          y: 416,
          value: 1
        },
        {
          x: 511,
          y: 419,
          value: 83
        },
        {
          x: 511,
          y: 421,
          value: 85
        },
        {
          x: 509,
          y: 426,
          value: 58
        },
        {
          x: 509,
          y: 428,
          value: 89
        },
        {
          x: 509,
          y: 431,
          value: 46
        },
        {
          x: 509,
          y: 435,
          value: 18
        },
        {
          x: 509,
          y: 438,
          value: 14
        },
        {
          x: 509,
          y: 442,
          value: 36
        },
        {
          x: 509,
          y: 446,
          value: 7
        },
        {
          x: 509,
          y: 449,
          value: 46
        },
        {
          x: 509,
          y: 453,
          value: 27
        },
        {
          x: 509,
          y: 455,
          value: 77
        },
        {
          x: 509,
          y: 459,
          value: 56
        },
        {
          x: 509,
          y: 462,
          value: 43
        }
      ],
      date: 1672799107
    },
    {
      logs: [
        {
          x: 812,
          y: 802,
          value: 75
        }
      ],
      date: 1672539907
    }
  ],
  loading: false,
  error: null
}

const heatmapSlice = createSlice({
  name: 'heatmap',
  initialState,
  reducers: {}
})

export default heatmapSlice.reducer
