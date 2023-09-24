import { I18nActiveNamespaces } from "../../types/i18n";

export type FundConfig = {
  i18nNamespaces: Readonly<I18nActiveNamespaces<"common" | "fund">>;
};

export const fundConfig: FundConfig = {
  i18nNamespaces: ["common", "fund"],
} as const;
