import clsx from "clsx";
import dayjs from "dayjs";
import Highcharts, { Options } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";
const ReactHighstock = require("react-highcharts/ReactHighstock.src");

const barOptions =
{
  chart: {
    type: 'column'
  },
  title: {
    text: 'Crypto-only Exchange Volume',
    style: {
      fontSize: '18px',
      fontFamily: 'SFProText',
    },
    align: 'center',
    x: 30
  },
  xAxis: [
    {
      labels: {
        formatter(this: any) {
          return `${dayjs(this.value).format("DD/MM/YYYY")}`;
        },
      },
    },
  ],
  yAxis: {
    min: 0,
    title: {
      text: 'Count trophies'
    },
    stackLabels: {
      enabled: true,
      style: {
        fontWeight: 'bold',
        color:
          'gray',
        textOutline: 'none'
      }
    }
  },
  legend: {
    align: 'left',
    x: 70,
    verticalAlign: 'top',
    y: 70,
    floating: true,
    backgroundColor:
      'white',
    borderColor: '#CCC',
    borderWidth: 1,
    shadow: false
  },
  tooltip: {
    headerFormat: '<b>{point.x}</b><br/>',
    pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
  },
  plotOptions: {
    column: {
      stacking: 'normal',
      dataLabels: {
        enabled: false,
      }
    }
  },
  credits: {
    enabled: false
  },
  color: {
    linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
    stops: [
      [0, '#7CB5EC'],
      [1, '#7EC17E']
    ]
  },
  colors: ['#29225C', "#EF4266", '#3BBCB2', "#B7B1E1", '#FCDD4E', "#00C3F2", '#006199'],
  rangeSelector: {
    buttons: [{
      type: 'day',
      count: 1,
      text: '1d',
    }, {
      type: 'day',
      count: 7,
      text: '7d'
    }, {
      type: 'month',
      count: 1,
      text: '1m'
    }, {
      type: 'month',
      count: 3,
      text: '3m'
    },
    {
      type: 'all',
      text: 'All'
    }],
    selected: 4
  },
  series: [
    {
      name: 'OKX',
      data: [14, 8, 8, 12, 3, 5, 6],
    }, {
      name: 'Huobi',
      data: [5, 2, 6, 3, 1, 5, 2]
    }, {
      name: 'Kucoin',
      data: [3, 5, 1, 13, 20, 3, 5]
    }, {
      name: 'Gate.io',
      data: [14, 8, 8, 12, 25, 1, 21]
    }, {
      name: 'Poloniex',
      data: [2, 2, 6, 3, 30, 10, 3]
    }, {
      name: 'Crypto.com',
      data: [2, 2, 6, 3, 10, 13, 15]
    },
    {
      name: 'Binance',
      data: [40, 50, 14, 30, 14, 33, 25]
    }
  ],
  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        chart: {
          type: 'bar',
          height: 400,
        },
      }
    }]
  }
}
// DataLabels on hover show the value of the data point

export const StackedColumn = () => (
  <div>
    <div className={clsx("w-full basicbar")}>
      <HighchartsReact
        highcharts={Highcharts}
        options={barOptions}
      />
    </div>
  </div>
);
