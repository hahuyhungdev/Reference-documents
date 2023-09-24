import { I18nActiveNamespaces } from "../../types/i18n";

export type CategoriesConfig = {
  i18nNamespaces: Readonly<I18nActiveNamespaces<"common" | "categories">>;
};

export const categoriesConfig: CategoriesConfig = {
  i18nNamespaces: ["common", "categories"],
} as const;
