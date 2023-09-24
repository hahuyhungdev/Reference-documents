import { fundConfig } from "@features/fund/fund.config";
import CreateChartPage from "@features/fund/page/createChart.page";
import customStaticProps from "@utils/staticProps";

const CreateChart = () => {
  return < CreateChartPage />;
};

export default CreateChart;

export const getStaticProps = customStaticProps(
  null,
  fundConfig.i18nNamespaces.slice()
);
