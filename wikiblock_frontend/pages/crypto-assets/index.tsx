import { cryptoAssetsConfig } from "@features/all-crypto-assets/crypto-assets.config";
import AllCryptoAssetsPage from "@features/all-crypto-assets/pages/crypto-assets.page";
import customStaticProps from "@utils/staticProps";
import React from "react";

const AllCryptoAssets = () => {
  return <AllCryptoAssetsPage />;
};

export default AllCryptoAssets;

export const getStaticProps = customStaticProps(
  null,
  cryptoAssetsConfig.i18nNamespaces.slice()
);
