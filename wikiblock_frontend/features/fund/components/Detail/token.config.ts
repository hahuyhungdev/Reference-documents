import { I18nActiveNamespaces } from "types/i18n";

export type TokenConfig = {
  i18nNamespaces: Readonly<I18nActiveNamespaces<"common" | "home" | "token">>;
};

export const tokenConfig: TokenConfig = {
  i18nNamespaces: ["common", "home", "token"],
} as const;
