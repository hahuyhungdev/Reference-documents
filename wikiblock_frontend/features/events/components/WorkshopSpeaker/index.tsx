import { eventsConfig } from "@features/events/events.config";
import { Event } from "@features/events/events.type";
import clsx from "clsx";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import s from "./index.module.css";
import SpeakerCard from "./SpeakerCard";

interface Props {
  event: Event;
}

const WorkshopSpeaker: FC<Props> = ({ event }) => {
  const { t } = useTranslation(eventsConfig.i18nNamespaces);
  return (
    <div className="mt-[28px] md:mt-[15px]">
      <h3 className="text-[20px] font-semibold opacity-[0.9] mb-[30px] text-gray-900">
        {t("events:speakers")}
      </h3>
      <div
        className={clsx(
          "px-[80px] py-[53px] rounded-[10px] bg-[#EEF0F6] flex items-center flex-wrap justify-between gap-y-[20px]",
          s["speaker-wrapper"]
        )}
      >
        {event.speakers &&
          event.speakers.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
      </div>
    </div>
  );
};

export default WorkshopSpeaker;
