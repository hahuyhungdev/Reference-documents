import { fundConfig } from "@features/fund/fund.config";
import TopFundPage from "@features/fund/page/topFund.page";
import customStaticProps from "@utils/staticProps";

const Detail = () => {
  return <TopFundPage />;
};

export default Detail;

export const getStaticProps = customStaticProps(
  null,
  fundConfig.i18nNamespaces.slice()
);