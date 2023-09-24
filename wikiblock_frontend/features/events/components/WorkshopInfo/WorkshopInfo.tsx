import { IconLocation, IconOClock } from "@components/Icons";
import { MAP_BOX_ACCESS_TOKEN, MAP_BOX_SEARCH_URL } from "@config/env";
import { eventsConfig } from "@features/events/events.config";
import { Event } from "@features/events/events.type";
import EventNoAvatar from "@public/images/event_no_avatar.png";
import axios from "axios";
import dayjs from "dayjs";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  event: Event;
}

const WorkshopInfo: FC<Props> = ({ event }) => {
  const { t } = useTranslation(eventsConfig.i18nNamespaces);
  const [address, setAddress] = useState<string | null>(null);
  useEffect(() => {
    const getAddress = async () => {
      const res = await axios({
        url: `${MAP_BOX_SEARCH_URL}/-73.989,40.733.json?types=address&access_token=${MAP_BOX_ACCESS_TOKEN}`,
        method: "GET",
      });
      const data = res.data;
      if (data.features) {
        setAddress(data.features[0]?.place_name || "");
      }
    };
    getAddress();
  }, []);
  return (
    <div>
      <div className="flex items-center gap-x-[40px] md:flex-col md:items-start md:gap-y-[10px]">
        <div className="w-[90px] h-[90px] relative xl:w-[80px] xl:h-[80px]">
          <Image
            src={event.avatar || EventNoAvatar}
            alt={`${event.name}`}
            layout="fill"
            className="rounded-full"
          />
        </div>
        <div>
          <div className="flex items-center gap-x-[23px] mb-[23px] md:mb-[10px] mb:flex-col mb:items-start">
            <h2 className="text-[20px] font-bold text-blue-600 mb-0 capitalize">
              {event.name}
            </h2>
            <span className="text-[14px] text-gray-900">
              Related projects{" "}
              {event.categories &&
                event.categories.map((cate) => (
                  <span className="text-blue-600 italic" key={cate.id}>
                    {`#${cate.title}`}
                  </span>
                ))}
            </span>
          </div>
          <div className="flex items-center gap-x-[12px] mb-[8px]">
            <IconOClock />
            <span className="text-[14px] text-gray-900">
              {dayjs(event.start_date).format("DD MMM YYYY")} -{" "}
              {dayjs(event.end_date).format("DD MMM YYYY")}
            </span>
          </div>
          <div className="flex items-center gap-x-[12px]">
            <IconLocation />
            {/* {event.location && (
              <span className="text-[14px] text-gray-900">
                {event.location}
              </span>
            )} */}
            {address && (
              <span className="text-[14px] text-gray-900">{address}</span>
            )}
          </div>
        </div>
      </div>
      <div className="mt-[50px] md:mt-[30px]">
        <h3 className="text-[20px] font-semibold opacity-[0.9] mb-[28px] text-gray-900 md:mb-[15px]">
          {t("events:introduction")}
        </h3>
        <p className="text-[14px] text-gray-900 font-medium opacity-[0.85] mb-[10px]">
          {event.introduction}
        </p>
      </div>
      <div className="mt-[23px] md:mt-[15px]">
        <h3 className="text-[20px] font-semibold opacity-[0.9] mb-[12px] text-gray-900">
          {t("events:agenda")}
        </h3>
        <div>
          {event.agendas &&
            event.agendas.map((agenda) => (
              <div
                className="flex items-center gap-x-[10px]"
                key={`${event.id}-agenda-${agenda.time}`}
              >
                <span className="text-[14px] text-gray-900">
                  {dayjs(agenda.time).format("DD MMM YYYY HH:MM")}
                </span>
                <span className="text-[14px] text-gray-900">
                  {agenda.description}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default WorkshopInfo;
