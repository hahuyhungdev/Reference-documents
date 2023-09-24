import { explorationConfig } from "@features/exploration/exploration.config";
import AllExplorationPage from "@features/exploration/pages/exploration.page";
import GlossaryPage from "@features/exploration/pages/glossary.page";
import HowToCryptoPage from "@features/exploration/pages/howtocrypto.page";
import customStaticProps from "@utils/staticProps";
import { useRouter } from "next/router";

const Exploration = () => {
  const router = useRouter();
  if (router.query.category === "how_to_crypto")
    return <HowToCryptoPage />;
  if (router.query.category === "glossary")
    return <GlossaryPage />;
  //useEffect to performance optimization
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
