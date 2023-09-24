
import { newsConfig } from "@features/news/news.config";
import AllNewsPage from "@features/news/pages/news.page";
import customStaticProps from "@utils/staticProps";

const Token = () => {
  return <AllNewsPage />;
};
export default Token;

export const getStaticProps = customStaticProps(
  null,
  newsConfig.i18nNamespaces.slice()
);
