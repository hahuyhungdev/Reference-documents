import { fundConfig } from "@features/fund/fund.config";
import FundPage from "@features/fund/page/fund.page";
import TopFundPage from "@features/fund/page/topFund.page";
import customStaticProps from "@utils/staticProps";

const Analysis = () => {
  return <TopFundPage />;
};

export default Analysis;

export const getStaticProps = customStaticProps(
  null,
  fundConfig.i18nNamespaces.slice()
);
