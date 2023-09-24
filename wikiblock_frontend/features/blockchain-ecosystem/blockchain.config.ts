import { I18nActiveNamespaces } from "../../types/i18n";

export type BlockchainConfig = {
  i18nNamespaces: Readonly<I18nActiveNamespaces<"common" | "blockchain">>;
};

export const blockchainConfig: BlockchainConfig = {
  i18nNamespaces: ["common", "blockchain"],
} as const;
