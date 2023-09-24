import { fundConfig } from "@features/fund/fund.config";
import TopMarketCapPage from "@features/fund/page/topMarketCap.page";
import customStaticProps from "@utils/staticProps";

const Detail = () => {
  return <TopMarketCapPage />;
};

export default Detail;

export const getStaticProps = customStaticProps(
  null,
  fundConfig.i18nNamespaces.slice()
);