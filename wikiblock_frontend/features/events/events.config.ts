import { I18nActiveNamespaces } from "../../types/i18n";

export type EventsConfig = {
  i18nNamespaces: Readonly<I18nActiveNamespaces<"common" | "events">>;
};

export const eventsConfig: EventsConfig = {
  i18nNamespaces: ["common", "events"],
} as const;
