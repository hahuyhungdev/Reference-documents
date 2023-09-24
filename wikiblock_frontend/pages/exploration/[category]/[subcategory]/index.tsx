import { explorationConfig } from "@features/exploration/exploration.config";
import AllExplorationPage from "@features/exploration/pages/exploration.page";
import customStaticProps from "@utils/staticProps";

const Exploration = () => {
  return <AllExplorationPage />;
};

export default Exploration;

export const getStaticProps = customStaticProps(
  null,
  explorationConfig.i18nNamespaces.slice()
);
export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking", // can also be true or 'blocking'
  };
};
