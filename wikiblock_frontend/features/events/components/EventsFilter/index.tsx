import { Button } from "@components";
import { IconRightArrow } from "@components/Icons";
import IconFilter from "@components/Icons/IconFilter";
import IconTriangleDown from "@components/Icons/IconTriangleDown";
import { eventsConfig } from "@features/events/events.config";
import { EVENTS_PARAMS } from "@features/events/events.type";
import { useCheckMobileScreen } from "@hooks";
import { Select } from "antd";
import clsx from "clsx";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { I18nActiveNamespaces } from "types/i18n";

import EventFilterDrawer from "./EventFilterDrawer";
import EventFilterSection from "./EventFilterSection";
import { EventFilterSectionMobile } from "./EventFilterSection/EventFilterSectionMobile";
import s from "./eventsFilter.module.css";

const regionOptions = [
  { label: "United States", value: "us" },
  { label: "Campuchia", value: "cn" },
  { label: "Laos", value: "la" },
  { label: "Vietnam", value: "vn" },
];

const { Option } = Select;

export type Filter = {
  value: string;
  label: string;
};

interface Props {
  items: Array<Filter>;
  params: EVENTS_PARAMS;
  onChangeParams?: (params: EVENTS_PARAMS) => void;
}

const EventsFilter: FC<Props> = ({ items, params, onChangeParams }) => {
  const router = useRouter();
  const { windowDimensions } = useCheckMobileScreen();
  const { t } = useTranslation<I18nActiveNamespaces<"common" | "events">>(
    eventsConfig.i18nNamespaces
  );
  const [isShowFilter, setIsShowFilter] = useState(false);
  const [isShowFilterMobileScreen, setIsShowFilterMobileScreen] =
    useState(false);
  const [isShowMenuFilter, setIsShowMenuFilter] = useState(false);

  const handleChange = (e: Filter) => {
    onChangeParams?.({ ...params, category: e.value });
  };

  const handleChangeCountry = (e: string) => {
    onChangeParams?.({ ...params, country: e });
  };

  const handleShowDrawer = () => {
    if (windowDimensions.width <= 1023) setIsShowMenuFilter(true);
    else router.push("/events");
  };

  return (
    <div className="mt-[26px] border-[1px] border-[#EEEEEE] py-[11px] px-[10px] relative ">
      <div className="flex items-center justify-between lg:justify-start">
        <div
          className="flex items-center gap-x-[5px] font-medium opacity-[0.85] relative z-[50]"
          onClick={handleShowDrawer}
        >
          <span className="text-[14px] cursor-pointer hover:text-btn-primary transition-all whitespace-nowrap">
            Event
          </span>
          <IconRightArrow />
        </div>

        {/* for desktop */}
        {items.map((event, index) => (
          <div key={event.label} onClick={() => handleChange(event)}>
            <div>
              <span
                className={clsx(
                  "text-[14px] font-medium opacity-[0.85] hover:text-btn-primary transition-all cursor-pointer whitespace-nowrap lg:hidden",
                  {
                    "text-btn-primary":
                      (!params.category && index === 0) ||
                      params.category === event.value,
                  }
                )}
              >
                {event.label}
              </span>
            </div>
          </div>
        ))}
        <div
          className={clsx(
            "relative before:content-[''] before:absolute before:w-[468px] before:h-[40px] before:top-[100%] before:right-0 before:hidden hover:before:block lg:ml-auto lg:mr-[20px]",
            s["filter-icon-wrapper"]
          )}
          onMouseEnter={() => setIsShowFilter(true)}
          onMouseLeave={() => setIsShowFilter(false)}
          onClick={() => setIsShowFilterMobileScreen(true)}
        >
          <IconFilter
            className={clsx(
              "transition-all, cursor-pointer",
              isShowFilter && s["filter-icon"]
            )}
            stroke={isShowFilter ? "#f4ac20" : "black"}
          />
          {/* for desktop */}
          <EventFilterSection
            isShow={isShowFilter}
            setIsShow={setIsShowFilter}
            params={params}
            onChangeParams={onChangeParams}
          />
          {/* */}
        </div>
        <div className="flex items-center gap-x-[20px] md:gap-x-[10px]">
          <Select
            style={{ width: 130 }}
            suffixIcon={<IconTriangleDown />}
            value={params.country || regionOptions[0].value}
            onChange={(e) => handleChangeCountry(e)}
            className={clsx(s["events-filter-region"])}
          >
            {regionOptions.map((option) => (
              <Option
                value={option.value}
                key={option.label}
                className={clsx(
                  s["option"],
                  option.label === params.country && s["selected"]
                )}
              >
                {option.label}
              </Option>
            ))}
          </Select>
          <Button className="bg-[#4992D6] px-[18px] py-[6px] lg:ml-[20px] md:ml-0">
            <span className="text-[13px] text-white whitespace-nowrap">
              {t("events:submit_event")}
            </span>
          </Button>
        </div>
      </div>
      {/* for mobile */}
      <EventFilterDrawer
        show={isShowMenuFilter}
        setIsShow={setIsShowMenuFilter}
        items={items}
        params={params}
        onChange={handleChange}
      />
      <EventFilterSectionMobile
        isShow={isShowFilterMobileScreen}
        setIsShow={setIsShowFilterMobileScreen}
        params={params}
        onChangeParams={onChangeParams}
      />
    </div>
  );
};

export default EventsFilter;
