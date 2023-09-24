import { IconSliderLeft, IconSliderRight } from "@components/Icons";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import Slider, { CustomArrowProps, Settings } from "react-slick";

import s from "./banner.module.css";

function SampleNextArrow(props: CustomArrowProps) {
  const { style, onClick } = props;
  return (
    <div
      className={clsx(
        "absolute right-[10%] top-2/4 translate-y-[-50%] flex items-center cursor-pointer z-50 xl:right-[5%] lg:scale-[0.7] lg:right-[10%]"
      )}
      style={{ ...style }}
      onClick={onClick}
    >
      <IconSliderRight />
    </div>
  );
}

function SamplePrevArrow(props: CustomArrowProps) {
  const { style, onClick } = props;
  return (
    <div
      className={clsx(
        "absolute left-[10%] top-2/4 translate-y-[-50%] flex items-center cursor-pointer z-50 xl:left-[5%] lg:scale-[0.7] lg:left-[10%]"
      )}
      style={{ ...style }}
      onClick={onClick}
    >
      <IconSliderLeft />
    </div>
  );
}

const EventsBanner = () => {
  const slideItems = [
    "/images/events-banner-1.png",
    "/images/events-banner-1.png",
    "/images/events-banner-1.png",
    "/images/events-banner-1.png",
    "/images/events-banner-1.png",
    "/images/events-banner-1.png",
    "/images/events-banner-1.png",
    "/images/events-banner-1.png",
  ];
  const settings: Settings = {
    className: clsx("center gap-x-[40px]", s["event-banner"]),
    centerMode: true,
    infinite: true,
    centerPadding: "230px",
    slidesToShow: 1,
    speed: 500,
    dots: true,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="w-[10px] h-[10px] rounded-full bg-[#D9D9D9] mt-[21px] event-banner-dot"></div>
    ),
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          centerPadding: "150px",
          centerMode: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          centerPadding: "120px",
          centerMode: true,
        },
      },
      {
        breakpoint: 1180,
        settings: {
          centerPadding: "100px",
          centerMode: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerMode: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          centerMode: false,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="mt-[18px] w-full">
      <Slider {...settings}>
        {slideItems &&
          slideItems?.map((image, index) => (
            <div
              className="relative w-full h-full min-h-[320px] md:min-h-[220px] sm:min-h-[180px]"
              key={`banner-${index}`}
            >
              <Image
                src={image}
                alt={`banner-${index}`}
                layout="fill"
                objectFit="contain"
                // className="object-cover"
              />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default EventsBanner;
