import { fundConfig } from "@features/fund/fund.config";
import TopAthRoiPage from "@features/fund/page/topAthRoi.page";
import customStaticProps from "@utils/staticProps";

const Detail = () => {
  return <TopAthRoiPage />;
};

export default Detail;

export const getStaticProps = customStaticProps(
  null,
  fundConfig.i18nNamespaces.slice()
);