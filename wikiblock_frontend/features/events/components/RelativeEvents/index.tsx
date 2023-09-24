import "swiper/css";

import { eventsConfig } from "@features/events/events.config";
import { Event } from "@features/events/events.type";
import BitCoinLogo from "@public/images/bitcoin.png";
import EventNoAvatar from "@public/images/event_no_avatar.png";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import Slider, { Settings } from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import { I18nActiveNamespaces } from "types/i18n";

interface Props {
  events: Array<Event>;
}

const DEFAULT_SCREEN_PER_VIEW = 3;
const DEFAULT_SCREEN_PER_VIEW_SMALL = 2;

const RelativeEvents: FC<Props> = ({ events }) => {
  const { t } = useTranslation<I18nActiveNamespaces<"common" | "events">>(
    eventsConfig.i18nNamespaces
  );
  // const settings: Settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   centerMode: true,
  //   slidesToScroll: 3,
  //   centerPadding: "50px",
  // };
  const getSlidesPerView = (slidesPerView: number) => {
    return events.length > slidesPerView ? slidesPerView : events.length;
  };
  return (
    <div className="mt-[42px] md:mt-[27px]">
      <h3 className="text-[20px] font-semibold opacity-[0.9] mb-[33px] text-gray-900">
        {t("events:related_events")}
      </h3>
      <div className="flex items-center gap-x-[50px] flex-nowrap">
        <Swiper
          slidesPerView={getSlidesPerView(3)}
          spaceBetween={20}
          autoplay={true}
          breakpoints={{
            500: {
              slidesPerView: getSlidesPerView(DEFAULT_SCREEN_PER_VIEW_SMALL),
              spaceBetween: 20,
            },
            767: {
              slidesPerView: getSlidesPerView(DEFAULT_SCREEN_PER_VIEW_SMALL),
              spaceBetween: 20,
            },
            797: {
              slidesPerView: getSlidesPerView(DEFAULT_SCREEN_PER_VIEW),
              spaceBetween: 20,
            },
            806: {
              slidesPerView: getSlidesPerView(DEFAULT_SCREEN_PER_VIEW_SMALL),
              spaceBetween: 20,
            },
            1023: {
              slidesPerView: getSlidesPerView(DEFAULT_SCREEN_PER_VIEW_SMALL),
              spaceBetween: 20,
            },
            1279: {
              slidesPerView: getSlidesPerView(DEFAULT_SCREEN_PER_VIEW),
              spaceBetween: 20,
            },
            1300: {
              slidesPerView: getSlidesPerView(DEFAULT_SCREEN_PER_VIEW),
              spaceBetween: 80,
            },
          }}
        >
          {/* {new Array(6).fill(0).map((_, index) => (
            <SwiperSlide key={`event-${index}`}>
              <div className="w-full max-w-[300px] md:max-w-[400px] sm:max-w-[400px]">
                <div className="w-[300px] h-[168px] relative mb-[19px] xl:w-[270px] xl:h-[150px] lg:w-full md:w-full md:h-[200px] sm:h-[100px] sm:w-full">
                  <Image src={BitCoinLogo} alt="bitcoin" layout="fill" />
                </div>
                <h4 className="text-[14px] font-semibold text-gray-900 mb-[9px]">
                  Gwei 2022 singapore
                </h4>
                <span className="text-[#ADADAD] text-[14px]">
                  Jul 14 - Jul 15, 2022
                </span>
              </div>
            </SwiperSlide>
          ))} */}
          {events.map((event) => (
            <SwiperSlide key={event.id}>
              <div className="w-full  max-w-[300px] md:max-w-[400px] sm:max-w-[400px]">
                <div className="w-full h-[168px] relative mb-[19px] xl:w-[270px] xl:h-[150px] lg:w-full md:w-full md:h-[200px] sm:h-[100px] sm:w-full">
                  <Image
                    src={event.avatar || EventNoAvatar}
                    alt="bitcoin"
                    layout="fill"
                  />
                </div>
                <Link href={`/events/${event.id}`}>
                  <a>
                    <h4 className="text-[14px] font-semibold text-gray-900 mb-[9px] text-center cursor-pointer transition-all hover:text-btn-primary">
                      {event.name ?? ""}
                    </h4>
                  </a>
                </Link>
                <span className="text-[#ADADAD] text-[14px] block text-center">
                  {moment(event.start_date).format("DD MMM YYYY")} -{" "}
                  {moment(event.end_date).format("DD MMM YYYY")}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <Slider {...settings}>
          {new Array(6).fill(0).map((_, index) => (
            <div
              className="w-full max-w-[300px] md:max-w-[400px] sm:max-w-[400px]"
              key={index}
            >
              <div className="w-[300px] h-[168px] relative mb-[19px] xl:w-[270px] xl:h-[150px] lg:w-full md:w-full md:h-[200px] sm:h-[100px] sm:w-full">
                <Image src={BitCoinLogo} alt="bitcoin" layout="fill" />
              </div>
              <h4 className="text-[14px] font-semibold text-gray-900 mb-[9px]">
                Gwei 2022 singapore
              </h4>
              <span className="text-[#ADADAD] text-[14px]">
                Jul 14 - Jul 15, 2022
              </span>
            </div>
          ))}
        </Slider> */}
      </div>
    </div>
  );
};

export default RelativeEvents;
