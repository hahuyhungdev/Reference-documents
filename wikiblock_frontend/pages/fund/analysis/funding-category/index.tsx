import { fundConfig } from "@features/fund/fund.config";
import FundingCategoryPage from "@features/fund/page/fundingCategory.page";
import customStaticProps from "@utils/staticProps";

const FundingCategory = () => {
  return < FundingCategoryPage />;
};

export default FundingCategory;

export const getStaticProps = customStaticProps(
  null,
  fundConfig.i18nNamespaces.slice()
);
