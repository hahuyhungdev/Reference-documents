import { API_BASE_URL } from "@config/env";
import { eventsConfig } from "@features/events/events.config";
import { Event } from "@features/events/events.type";
import EventDetailPage from "@features/events/pages/eventDetail.page";
import { fetchAPI } from "@utils/axiosBaseQuery";
import customStaticProps from "@utils/staticProps";
import React from "react";

const EventDetail = ({ event }: { event: Event }) => {
  return <EventDetailPage event={event} />;
};

export default EventDetail;

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps = customStaticProps(async (context) => {
  const { id } = context.params as any;

  if (id) {
    const event = await fetchAPI({
      url: `${API_BASE_URL}/events/${id}`,
      method: "GET",
    });
    return {
      props: {
        event: event.data,
      },
    };
  }
  return {
    props: {},
  };
}, eventsConfig.i18nNamespaces.slice());
