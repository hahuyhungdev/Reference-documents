import { blockchainConfig } from "@features/blockchain-ecosystem/blockchain.config";
import BlockchainEcosystemPage from "@features/blockchain-ecosystem/pages/blockchain.page";
import customStaticProps from "@utils/staticProps";

const Sectors = () => {
  return <BlockchainEcosystemPage />;
};

export default Sectors;

export const getStaticProps = customStaticProps(
  null,
  blockchainConfig.i18nNamespaces.slice()
);
