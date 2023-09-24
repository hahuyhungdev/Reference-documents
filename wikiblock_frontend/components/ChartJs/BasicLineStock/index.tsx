import dayjs from "dayjs";
import Highcharts, { Options } from "highcharts";
import React from "react";
const ReactHighstock = require("react-highcharts/ReactHighstock.src");


import { priceData } from "./data";
const options = { style: 'currency', currency: 'USD' };
const numberFormat = new Intl.NumberFormat('en-US', options);
const config: Options = {
  yAxis: [{
    offset: 20,

    labels: {
      formatter(this) {
        return `${dayjs(this.value).format("DD/MM/YYYY")}`;
      },
      x: -15,
      style: {
        "color": "#000", "position": "absolute"

      },
      align: 'left'
    },
  },

  ],
  tooltip: {
    shared: true,
    formatter: function (this) {
      // @ts-ignore
      return numberFormat.format(this.y, 0) + '</b><br/>' + dayjs(this.x).format('MMMM Do YYYY, h:mm')
    }
  },
  plotOptions: {
    series: {
    }
  },
  title: {
    text: `Bitcoin stock price`,
    style: {
      fontFamily: 'SFProText',
    }
  },
  chart: {
    height: 600,
  },

  credits: {
    enabled: false
  },

  legend: {
    enabled: true
  },
  xAxis: {
    type: 'datetime',
  },
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
  series: [{
    name: 'Price',
    type: 'spline',
    color: '#fcc833',
    data: priceData as any,

  }
  ],
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          chart: {
            height: 400,
          },
          subtitle: {
            text: undefined,
          },
        },
      },
    ],
  },
};

const BasicLineStock = () => {
  return (
    <div className="w-full h-full">
      <ReactHighstock config={config} />
    </div>
  );
};

export default BasicLineStock;
