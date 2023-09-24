import { I18nActiveNamespaces } from "../../types/i18n";

export type HomeConfig = {
  i18nNamespaces: Readonly<I18nActiveNamespaces<"common" | "home">>;
};

export const homeConfig: HomeConfig = {
  i18nNamespaces: ["common", "home"],
} as const;
