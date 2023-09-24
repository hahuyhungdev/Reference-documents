import { I18nActiveNamespaces } from "../../types/i18n";

export type TokenConfig = {
  i18nNamespaces: Readonly<I18nActiveNamespaces<"common" | "events" | "news">>;
};

export const newsConfig: TokenConfig = {
  i18nNamespaces: ["common", "events", "news"],
} as const;
