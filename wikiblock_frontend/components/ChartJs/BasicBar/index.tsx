import clsx from "clsx";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const data = [830, 26, 5, -30, -7, -8, -16].map((value) => ({
  y: value,
  color: value > 0 ? "#7EC17E" : "#ED7171",
}))
const barOptions = {
  chart: {
    type: 'bar',
    height: 550,
  },
  title: {
    text: 'Current and ATH Average Returns since IDO(ROI) by Platforms in USD',
    style: {
      fontFamily: 'SFProText',
    }
  },
  xAxis: {
    categories: ['DAO Maker (99)', 'TrustSwap (26)', 'Red Kite (67)', 'TrustPad (85)', 'Polkastarter (104)', 'GameFi (50)', 'Seedify (53)'],
  },
  yAxis: {
    min: -50,
    title: {
      text: 'Population (millions)',
      align: 'high'
    },
    labels: {
      overflow: 'justify'
    }
  },
  tooltip: {
    valueSuffix: ' millions'
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true
      }
    }
  },
  legend: {
    align: 'center',
    verticalAlign: 'bottom',
  },
  // values of series.data number > 0 ? "#7EC17E" : "#ED7171"
  colors: ["#7CB5EC", "#7EC17E"],
  credits: {
    enabled: false
  },
  series: [{
    name: 'AVG Current ROI',
    data: [4016, 4126, 2437, 1496, 3900, 3070, 3486]
  }, {
    name: 'AVG ATH ROI',
    data: data
  }],
  accessibility: {
    enabled: false
  },
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
export const BasicBar = () => (
  <div>
    <div className={clsx("w-full basicbar font-serif")}>
      <HighchartsReact
        highcharts={Highcharts}
        options={barOptions}
      />
    </div>
  </div>
);
