import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// <block:data:2>
const data = [];
const data2 = [];
let prev = 100;
let prev2 = 80;
for (let i = 0; i < 1000; i++) {
  prev += 5 - Math.random() * 10;
  data.push({ x: i, y: prev });
  prev2 += 5 - Math.random() * 10;
  data2.push({ x: i, y: prev2 });
}
const totalDuration = 1000;
const delayBetweenPoints = totalDuration / data.length;
const previousY = (ctx: any) =>
  ctx.index === 0
    ? ctx.chart.scales.y.getPixelForValue(100)
    : ctx.chart
        .getDatasetMeta(ctx.datasetIndex)
        .data[ctx.index - 1].getProps(["y"], true).y;
const animation = {
  x: {
    type: "number",
    easing: "linear",
    duration: delayBetweenPoints,
    from: NaN,
    delay(ctx: any) {
      if (ctx.type !== "data" || ctx.xStarted) {
        return 0;
      }
      ctx.xStarted = true;
      return ctx.index * delayBetweenPoints;
    },
  },
  y: {
    type: "number",
    easing: "linear",
    duration: delayBetweenPoints,
    from: previousY,
    delay(ctx: any) {
      if (ctx.type !== "data" || ctx.yStarted) {
        return 0;
      }
      ctx.yStarted = true;
      return ctx.index * delayBetweenPoints;
    },
  },
};
// </block:animation>

// <block:config:0>
const config = {
  data: {
    datasets: [
      {
        data: data,
        borderColor: "#ff0000",
        borderWidth: 1,
        radius: 0,
      },
      {
        borderColor: "#097AE3",
        borderWidth: 1,
        radius: 0,
        data: data2,
      }
    ],
  },
  // text color "#fff"
  Text: {
    style: {
      color: "#fff",
    },
  },
  options: {
    animation,
    interaction: {
      intersect: false,
    },
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        type: "linear",
        grid: {
          display: false,
          borderColor: "#fff",
        },
        ticks: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
          borderColor: "#fff",
        },
        ticks: {
          display: false,
        },
      },
    },
  },
};
// </block:config>

export default function TwoLine() {
  return (
    <Line
      height={50}
      width={100}
      options={config.options as any}
      data={config.data as any}
    />
  );
}
