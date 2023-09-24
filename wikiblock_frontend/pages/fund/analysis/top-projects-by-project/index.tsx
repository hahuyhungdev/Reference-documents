import { fundConfig } from "@features/fund/fund.config";
import TopProjectPage from "@features/fund/page/topProject.page";
import customStaticProps from "@utils/staticProps";

const Detail = () => {
  return <TopProjectPage />;
};

export default Detail;

export const getStaticProps = customStaticProps(
  null,
  fundConfig.i18nNamespaces.slice()
);