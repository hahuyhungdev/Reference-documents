import { I18nActiveNamespaces } from "../../types/i18n";

export type CryptoAssetsConfig = {
  i18nNamespaces: Readonly<I18nActiveNamespaces<"common" | "cryptoAssets">>;
};

export const cryptoAssetsConfig: CryptoAssetsConfig = {
  i18nNamespaces: ["common", "cryptoAssets"],
} as const;
