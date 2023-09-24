import { IconSendMessage } from "@components/Icons";
import { eventsConfig } from "@features/events/events.config";
import { Event } from "@features/events/events.type";
import dayjs from "dayjs";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  event: Event;
}

const EventContact: FC<Props> = ({ event }) => {
  const { t } = useTranslation(eventsConfig.i18nNamespaces);
  return (
    <div className="mt-[24px] pt-[21px] pb-[30px] px-[22px] bg-white border-[1px] border-[#ADADAD] border-dashed rounded-[10px]">
      <h4 className="text-[16px] text-gray-900 font-semibold opacity-[0.9] mb-[10px]">
        {t("events:no_table")}
      </h4>
      <div className="flex flex-col gap-[10px]">
        <div className="flex items-center gap-x-[15px]">
          <h5 className="text-[14px] text-gray-900 font-semibold mb-0 opacity-[0.85]">
            From:
          </h5>
          <span className="text-[14px] text-[#ADADAD] font-medium capitalize">
            {event.type} Event
          </span>
        </div>
        <div className="flex items-center gap-x-[15px]">
          <h5 className="text-[14px] text-gray-900 font-semibold mb-0 opacity-[0.85]">
            Start:
          </h5>
          <span className="text-[14px] text-[#ADADAD] font-medium">
            {dayjs(event.start_date).format("DD MMM YYYY")}
          </span>
        </div>
        <div className="flex items-center gap-x-[15px]">
          <h5 className="text-[14px] text-gray-900 font-semibold mb-0 opacity-[0.85]">
            End:
          </h5>
          <span className="text-[14px] text-[#ADADAD] font-medium">
            {dayjs(event.end_date).format("DD MMM YYYY")}
          </span>
        </div>
      </div>
      <h4 className="text-[16px] text-gray-900 font-semibold opacity-[0.9] mb-[10px] mt-[16px]">
        {t("events:receive_the_recap")}
      </h4>
      <div className="border-[1px] border-[#ADADAD] rounded-[30px] h-[33px] flex items-center pr-[2px]">
        <input
          type="text"
          placeholder={t("events:leave_your_email")}
          className="text-[12px] placeholder:text-[#ADADAD] w-full h-full outline-0 border-0 py-[9px] pl-[21px] rounded-[30px]"
        />
        <div className="h-[90%] w-[89px] bg-[#ADADAD] flex items-center justify-center gap-x-[7px] pl-[16px] pr-[5px] rounded-[30px] cursor-pointer">
          <span className="text-[12px] text-white font-semibold">Send</span>
          <div className="w-[24px] h-[24px] rounded-full flex items-center justify-center bg-white">
            <IconSendMessage />
          </div>
        </div>
      </div>
      <h4 className="text-[16px] text-gray-900 font-semibold opacity-[0.9] mb-[10px] mt-[20px]">
        {t("events:contact")}
      </h4>
      <div className="flex flex-col gap-[10px]">
        <div className="flex items-center gap-x-[15px]">
          <h5 className="text-[14px] text-gray-900 font-semibold mb-0 opacity-[0.85]">
            Phone:
          </h5>
          <span className="text-[14px] text-[#ADADAD] font-medium">
            {event.tel ?? ""}
          </span>
        </div>
        <div className="flex items-center gap-x-[15px]">
          <h5 className="text-[14px] text-gray-900 font-semibold mb-0 opacity-[0.85]">
            Website:
          </h5>
          <span className="text-[14px] text-[#ADADAD] font-medium">
            {event.website ?? ""}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventContact;
