import {
  ArcElement,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  Tooltip,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import React from "react";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Other"],
  datasets: [
    {
      label: "# of Votes",
      data: [25, 25, 14, 15, 13, 4.66],
      backgroundColor: [
        "rgb(31, 147, 255)",
        "rgb(7, 82, 150)",
        "rgb(141, 200, 255)",
        "rgb(9, 106, 195)",
        "rgb(19, 50, 79)",
        "rgb(51, 51, 51)",
      ],
      hoverOffset: 4,
      borderWidth: 1,
    },
  ],
  legend: {
    align: "center",
    verticalAlign: "bottom",
  },
};
const options: ChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      align: "center",
      display: true,
      position: "right",
    },
    datalabels: {
      align: "right",
      color: "#ffffff",
      formatter(value) {
        return `${value}%`;
      },
    },
  },
};

const CircleChart = () => {
  return (
    <div className="w-full h-full max-w-[284px] max-h-[284px]">
      <div>
        <Doughnut
          data={data}
          updateMode="reset"
          options={options}
          plugins={[ChartDataLabels]}
        />
      </div>
    </div>
  );
};

export default CircleChart;
