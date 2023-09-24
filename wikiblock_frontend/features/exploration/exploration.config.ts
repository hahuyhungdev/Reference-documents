import { I18nActiveNamespaces } from "../../types/i18n";

export type ExplorationConfig = {
  i18nNamespaces: Readonly<I18nActiveNamespaces<"common" | "exploration">>;
};

export const explorationConfig: ExplorationConfig = {
  i18nNamespaces: ["common", "exploration"],
} as const;
