/* eslint-disable @next/next/no-img-element */
import { eventsConfig } from "@features/events/events.config";
import { Event } from "@features/events/events.type";
import BinanceLogo from "@public/images/binance.png";
import clsx from "clsx";
import Image from "next/image";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import s from "./index.module.css";

interface Props {
  event: Event;
}

const WorkshopSponsors: FC<Props> = ({ event }) => {
  const { t } = useTranslation(eventsConfig.i18nNamespaces);
  return (
    <div className="mt-[45px] md:mt-[25px]">
      <h3 className="text-[20px] font-semibold opacity-[0.9] mb-[34px] text-gray-900">
        {t("events:sponsors")}
      </h3>
      <div
        className={clsx(
          "grid grid-cols-3 gap-x-[48px] gap-y-[32px] xl:gap-x-[30px] xl:gap-y-[24px] sm:grid-cols-2 mb:grid-cols-1",
          s["event-sponsors-wrapper"]
        )}
      >
        {event.sponsors &&
          event.sponsors.map((sponsor) => (
            <div
              className={clsx(
                "pt-[25px] pb-[15px] w-full max-w-[300px] h-full bg-[#eeeeee] mb:max-w-[350px] flex flex-col justify-center",
                s["event-sponsors-item"]
              )}
              key={sponsor.id}
            >
              <div
                className={clsx(
                  "px-[38px] w-[225px] relative mx-auto xl:w-[175px] mb:w-[120px] flex justify-center",
                  s["event-sponsors-item-img"]
                )}
              >
                <img
                  src={sponsor?.avatar || "@public/images/binance.png"}
                  alt={sponsor.name}
                  className="object-contain w-[60px] h-[60px]"
                />
              </div>

              <hr className="mt-[15px] mb-[8px] border-[1px] border-[#CBCBCB]" />
              <p className="text-[16px] font-medium opacity-[0.85] text-black text-center">
                {sponsor?.name}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WorkshopSponsors;
