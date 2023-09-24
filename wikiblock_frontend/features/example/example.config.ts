import { I18nActiveNamespaces } from "../../types/i18n";

export type OverviewConfig = {
  i18nNamespaces: Readonly<I18nActiveNamespaces<"common" | "home">>;
};

export const overviewConfig: OverviewConfig = {
  i18nNamespaces: ["common", "home"],
} as const;
