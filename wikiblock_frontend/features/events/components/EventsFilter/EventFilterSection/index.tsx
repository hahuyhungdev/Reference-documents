import { Button } from "@components";
import IconReset from "@components/Icons/IconReset";
import { eventsConfig } from "@features/events/events.config";
import { EVENT_TYPE, EVENTS_PARAMS } from "@features/events/events.type";
import clsx from "clsx";
import React, { FC, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import s from "../eventsFilter.module.css";

interface Props {
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  disableOpacity?: boolean;
  params: EVENTS_PARAMS;
  onChangeParams?: (params: EVENTS_PARAMS) => void;
}

export const coinFiltersLeft = [
  "NFT",
  "DEX",
  "CEX",
  "Stablecoin",
  "Metaverse",
  "Defi",
  "Privacy",
  "Oracle",
];

export const coinFiltersRight = [
  "Web 3",
  "AMM",
  "Smart Contract",
  "Yiel Faming",
  "Avalanche Eco",
  "Cosmos Eco",
  "Polkadot Eco",
];

const filterHeadingClass =
  "text-[14px] font-medium opacity-[0.9] text-gray-900 cursor-default md:text-[16px] md:font-semibold whitespace-nowrap";

const EventFilterSection: FC<Props> = ({
  isShow,
  disableOpacity = false,
  params,
  onChangeParams,
}) => {
  const { t } = useTranslation(eventsConfig.i18nNamespaces);
  const [paramsCopy, setParamsCopy] = useState({ ...params });
  const [hashtag, setHashtag] = useState<Array<string>>([]);
  const eventFilters = useMemo(
    () => [
      {
        value: undefined,
        label: "All",
      },
      {
        value: "offline",
        label: t("events:type.office"),
      },
      {
        value: "online",
        label: t("events:type.online"),
      },
      {
        value: "virtual",
        label: t("events:type.virtual"),
      },
    ],
    []
  );

  useEffect(() => {
    if (params) setParamsCopy({ ...params });
    if (params.hashtag) setHashtag(params.hashtag);
  }, [params]);

  const changeTypeParam = (type: EVENT_TYPE) => {
    // dispatch(setParams({ ...params, type }));
    setParamsCopy({ ...paramsCopy, type });
  };

  const changeHashtagParams = (tag: string) => {
    if (tag === "all") {
      setHashtag([]);
    } else {
      if (hashtag.includes(tag)) {
        setHashtag(hashtag.filter((item) => item !== tag));
      } else {
        setHashtag([...hashtag, tag]);
      }
    }
  };

  const onApply = () => {
    onChangeParams?.({ ...paramsCopy, hashtag });
  };

  const onReset = () => {
    onChangeParams?.({ ...params, hashtag: [], type: undefined });
    setParamsCopy({ ...params, hashtag: [], type: undefined });
    setHashtag([]);
  };

  return (
    <div
      className={clsx(
        "absolute min-w-[468px] min-h-[532px] px-[26px] py-[27px] z-[100] right-0 top-0 translate-y-[10%] transition-all md:relative md:min-w-fit md:px-[0] md:py-[0]",
        !disableOpacity && s["filter-box"],
        !disableOpacity && isShow && s["filter-box-show"],
        disableOpacity && ""
      )}
    >
      <div className="flex flex-col gap-[40px] md:gap-[20px]">
        {/* top */}
        <div className="flex gap-x-[70px] md:gap-x-0 md:justify-between md:flex-col md:gap-y-[10px]">
          <span className={filterHeadingClass}>Type:</span>
          <div className="flex items-center gap-x-[40px]">
            {eventFilters.map((e) => (
              <span
                className={clsx(
                  "text-[14px] font-medium opacity-[0.7] text-black cursor-pointer transition-all hover:text-btn-primary",
                  {
                    "text-btn-primary": e.value === paramsCopy.type,
                  }
                )}
                key={e.value}
                onClick={() => changeTypeParam(e.value as EVENT_TYPE)}
              >
                {e.label}
              </span>
            ))}
          </div>
        </div>
        {/* <div className="flex gap-x-[70px]">
        <span className={filterHeadingClass}>Province</span>
        <div className="flex items-center gap-x-[10px]">
          <div className="cursor-pointer">
            <IconTriangleDown />
          </div>
          <span className="text-[14px] font-medium opacity-[0.7] text-black cursor-pointer transition-all hover:text-btn-primary">
            All
          </span>
        </div>
      </div> */}
        {/* for desktop */}
        <div className="flex gap-x-[70px] md:hidden">
          <span className={filterHeadingClass}>{t("events:hashtag")}:</span>
          <div className="flex flex-col w-full ">
            <span
              className={clsx(
                "text-[14px] font-medium opacity-[0.7] text-black cursor-pointer transition-all hover:text-btn-primary"
              )}
              style={{
                color: hashtag.length === 0 ? "#f4ac20" : "#030303",
              }}
              onClick={() => changeHashtagParams("all")}
            >
              All
            </span>
            <div className="flex  justify-between mt-[10px]">
              <div className="flex flex-col gap-[8px]">
                {coinFiltersLeft.map((coin) => (
                  <span
                    key={`desktop-${coin}`}
                    className={clsx(
                      "text-[14px] font-medium opacity-[0.7] cursor-pointer transition-all hover:text-btn-primary"
                    )}
                    style={{
                      color: hashtag.includes(coin) ? "#f4ac20" : "#030303",
                    }}
                    onClick={() => changeHashtagParams(coin)}
                  >
                    {coin}
                  </span>
                ))}
              </div>
              <div className="w-[1px] h-full border-l-[1px] border-[#ADADAD]"></div>
              <div className="flex flex-col gap-[8px]">
                {coinFiltersRight.map((coin) => (
                  <span
                    key={`desktop-${coin}`}
                    className={clsx(
                      "text-[14px] font-medium opacity-[0.7] text-[#030303] cursor-pointer transition-all hover:text-btn-primary"
                    )}
                    style={{
                      color: hashtag.includes(coin) ? "#f4ac20" : "#030303",
                    }}
                    onClick={() => changeHashtagParams(coin)}
                  >
                    {coin}
                  </span>
                ))}
              </div>
              <div className="w-[1px] h-full border-l-[1px] border-[#ADADAD]"></div>
            </div>
          </div>
        </div>
        {/* for mobile */}
        <div className="w-full h-[1px] border-t-[1px] border-[#ADADAD] hidden md:block"></div>

        <div className="hidden md:flex justify-between flex-col gap-y-[10px]">
          <span className={filterHeadingClass}>{t("events:hashtag")}:</span>
          <div className="flex items-center gap-[20px] flex-wrap">
            <span
              className={clsx(
                "text-[14px] font-medium opacity-[0.7] text-black cursor-pointer transition-all hover:text-btn-primary"
              )}
              style={{
                color: hashtag.length === 0 ? "#f4ac20" : "#030303",
              }}
              onClick={() => changeHashtagParams("all")}
            >
              All
            </span>
            {coinFiltersLeft.concat(coinFiltersRight).map((coin) => (
              <span
                key={`mobile-${coin}`}
                className={clsx(
                  "text-[14px] font-medium opacity-[0.7] text-[#030303] cursor-pointer transition-all hover:text-btn-primary"
                )}
                style={{
                  color: hashtag.includes(coin) ? "#f4ac20" : "#030303",
                }}
                onClick={() => changeHashtagParams(coin)}
              >
                {coin}
              </span>
            ))}
          </div>
        </div>
        <div className="w-full h-[1px] border-t-[1px] border-[#ADADAD] mt-[-20px] md:mt-[0]"></div>
      </div>
      <div className="flex items-center justify-between border-b-[1px] border-[#ADADAD] py-[12px] md:block">
        <Button
          className="py-[6px] px-[20px] bg-[#FF8282] rounded-[2px] hover:opacity-[0.8] transition-all md:block md:w-full md:mb-[20px]"
          onClick={onReset}
        >
          <div className="flex items-center gap-x-[5px] md:w-full md:justify-center">
            <IconReset />
            <span className="text-[12px] text-white font-medium">
              {t("events:reset_filter_button")}
            </span>
          </div>
        </Button>
        <div className="flex items-center gap-x-[14px] md:justify-end">
          <Button className="py-[8px] px-[23px] rounded-[3px] bg-white border-[1px] border-[#4992D6] transition-all hover:opacity-[0.8]">
            <span className="text-black text-[13px] font-medium opacity-[0.7]">
              {t("events:cancel_button")}
            </span>
          </Button>
          <Button
            className="py-[8px] px-[23px] rounded-[3px] bg-[#1F93FF] transition-all hover:opacity-[0.8]"
            onClick={onApply}
          >
            <span className="text-white text-[13px] font-medium">
              {t("events:apply_button")}
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventFilterSection;
