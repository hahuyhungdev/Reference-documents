import clsx from "clsx";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";

const barOptions =
{
  chart: {
    type: 'area'
  },
  title: {
    text: 'Liquid Supply Curve',
    style: {
      fontSize: '14px',
    },
    align: 'left',
    x: 30
  },
  xAxis: {
    categories: ['Jan 2021', 'Jan 2022', 'Jan 2023', 'Jan 2024', 'Jan 2025', 'Jan 2026', 'Jan 2027'],
    tickmarkPlacement: 'on',
    title: {
      enabled: false
    }
  },
  yAxis: {
    title: {
      text: 'Billions'
    },

    labels: {
      formatter: function () {
        return (this as any).value / 1000;
      }
    }
  },
  tooltip: {
    split: true,
    valueSuffix: ' millions'
  },
  plotOptions: {
    area: {
      stacking: 'normal',
      lineColor: '#666666',
      lineWidth: 1,
      marker: {
        lineWidth: 1,
        lineColor: '#666666'
      }
    }
  },
  credits: {
    enabled: false
  },
  series: [{
    name: 'ICO',
    data: [502, 635, 809, 947, 1402, 3634, 3268]
  }, {
    name: 'Binance Team',
    data: [106, 107, 111, 133, 221, 767, 1766]
  }, {
    name: 'Angle Investors',
    data: [163, 203, 276, 408, 547, 729, 628]
  }, {
    name: 'Angle Investors',
    data: [163, 203, 276, 408, 547, 729, 628]
  }]
  ,
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
export const StackedBar = () => (
  <div>
    <div className={clsx("w-full basicbar")}>
      <HighchartsReact
        highcharts={Highcharts}
        options={barOptions}
      />
    </div>
  </div>
);
