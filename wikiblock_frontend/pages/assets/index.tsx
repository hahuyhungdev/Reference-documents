import AllTokenPage from "@features/token/page/token.page";
import { tokenConfig } from "@features/token/token.config";
import customStaticProps from "@utils/staticProps";

const Token = () => {
  return <AllTokenPage />;
};
export default Token;

export const getStaticProps = customStaticProps(
  null,
  tokenConfig.i18nNamespaces.slice()
);