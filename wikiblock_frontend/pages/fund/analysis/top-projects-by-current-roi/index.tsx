import { fundConfig } from "@features/fund/fund.config";
import TopCurrentRoiPage from "@features/fund/page/topCurrentRoi.page";
import customStaticProps from "@utils/staticProps";

const Detail = () => {
  return <TopCurrentRoiPage />;
};

export default Detail;

export const getStaticProps = customStaticProps(
  null,
  fundConfig.i18nNamespaces.slice()
);