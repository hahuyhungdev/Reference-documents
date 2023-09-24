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
