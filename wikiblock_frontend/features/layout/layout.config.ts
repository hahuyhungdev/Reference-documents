import { I18nActiveNamespaces } from "../../types/i18n";

export type LayoutConfig = {
  i18nNamespaces: Readonly<I18nActiveNamespaces<"common">>;
};

export const layoutConfig: LayoutConfig = {
  i18nNamespaces: ["common"],
} as const;
