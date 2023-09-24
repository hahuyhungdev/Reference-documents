import { eventsConfig } from "@features/events/events.config";
import EventsPage from "@features/events/pages/events.page";
import customStaticProps from "@utils/staticProps";
import React from "react";

const Events = () => {
  return <EventsPage />;
};

export default Events;

export const getStaticProps = customStaticProps(
  null,
  eventsConfig.i18nNamespaces.slice()
);
