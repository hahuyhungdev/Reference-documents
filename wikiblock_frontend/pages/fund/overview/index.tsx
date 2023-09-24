import { fundConfig } from "@features/fund/fund.config";
import FundPage from "@features/fund/page/fund.page";
import customStaticProps from "@utils/staticProps";

const OverviewPage = () => {
  return <FundPage />;
};

export default OverviewPage;

export const getStaticProps = customStaticProps(
  null,
  fundConfig.i18nNamespaces.slice()
);
