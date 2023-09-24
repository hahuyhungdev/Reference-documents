/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "@components";
import { IconRightTwoArrow } from "@components/Icons";
import { IconLeftTwoArrow } from "@components/Icons/IconLeftTwoArrow";
import DefaultLayout from "@features/layout/components/DefaultLayout";
import clsx from "clsx";
import { debounce, identity, isEmpty, pickBy } from "lodash";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { I18nActiveNamespaces } from "types/i18n";

import EventsBanner from "../components/Banner";
import EventsCard from "../components/Card";
import Event from "../components/Event";
import EventsFilter from "../components/EventsFilter";
import {
  useGetAllCategoriesMutation,
  useGetAllEventsMutation,
  useGetSignificantEventsMutation,
  useGetTrendingEventsMutation,
} from "../event.service";
import { eventsConfig } from "../events.config";
import { CATEGORIES_PARAMS, EVENTS_PARAMS } from "../events.type";
import s from "./events.module.css";

const EventsPage = () => {
  const { t } = useTranslation<I18nActiveNamespaces<"common" | "events">>(
    eventsConfig.i18nNamespaces
  );
  const router = useRouter();
  const { query } = router;
  const [params, setParams] = useState<EVENTS_PARAMS>(query);
  const [searchValue, setSearchValue] = useState("");
  const [getAllEvents, { data: eventsList }] = useGetAllEventsMutation();

  const [getTrendingEvents, { data: eventsTrending }] =
    useGetTrendingEventsMutation();

  const [getSignificantEvents, { data: eventsSignificant }] =
    useGetSignificantEventsMutation();

  const [getAllCategories, { data: categoriesData }] =
    useGetAllCategoriesMutation();

  const [categoriesParams, setCategoriesParams] = useState<CATEGORIES_PARAMS>({
    type: "event",
    per_page: 9,
  });

  useEffect(() => {
    getAllEvents(!isEmpty(query) ? query : { page: 1, per_page: 10 });
  }, [query]);

  useEffect(() => {
    if (query && isEmpty(params)) setParams(query);
  }, [params, query]);

  useEffect(() => {
    if (query.q && query.q !== searchValue) {
      setSearchValue(query.q as string);
    }
  }, [query]);

  useEffect(() => {
    if (!isEmpty(params))
      router.push({
        pathname: router.pathname,
        query: pickBy({ ...params }, identity),
      });
  }, [params]);

  useEffect(() => {
    getAllCategories(categoriesParams);
  }, [categoriesParams]);

  useEffect(() => {
    getTrendingEvents({ per_page: 3 });
    getSignificantEvents({ page: 1, per_page: 3 });
  }, []);

  const increasePage = () => {
    setParams({ ...params, page: params.page ? params.page + 1 : 1 });
  };

  const decreasePage = () => {
    setParams({ ...params, page: params.page ? params.page - 1 : 1 });
  };

  const onChangeParams = (params: EVENTS_PARAMS) => {
    setParams(params);
  };

  const handleSearch = useCallback(
    debounce((value: string) => {
      if (value && value.length > 0) setParams({ ...params, q: value });
      else setParams({ ...params, q: undefined });
    }, 300),
    [params]
  );

  useEffect(() => {
    return () => {
      handleSearch.cancel();
    };
  }, [handleSearch]);

  return (
    <DefaultLayout
      searchValue={searchValue}
      onSearchChange={(value: string) => {
        setSearchValue(value);
        handleSearch(value);
      }}
    >
      <div className="pb-[30px]">
        {categoriesData && (
          <EventsFilter
            items={[...categoriesData.items]
              .sort((a, b) => b.weight - a.weight)
              .map((item) => ({ value: item.id, label: item.title }))}
            params={params}
            onChangeParams={onChangeParams}
          />
        )}
        <EventsBanner />
        <div className="grid grid-cols-3 mt-[45px] lg:grid-cols-1">
          <div className="col-span-2">
            <h2 className="text-[20px] font-bold text-blue-600 mb-[10px]">
              Cryptocurrency events, blockchain events in “Location” ex: United
              States
            </h2>
            <p className="text-[14px] text-gray-900 mb-[26px]">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur
            </p>
            <div>
              <h3 className="text-[20px] font-bold mb-[20px] opacity-[0.85]">
                July 2022
              </h3>
              <div
                className={clsx(
                  s["event-card-wrapper"],
                  "grid gap-x-[26px] gap-y-[26px] grid-cols-3 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 mb:grid-cols-1"
                )}
              >
                {eventsList && eventsList.items.length > 0 ? (
                  eventsList?.items.map((event) => (
                    <EventsCard key={event.id} event={event} />
                  ))
                ) : (
                  <p>{t("events:no_events_found")}</p>
                )}
              </div>
              <div className="w-full flex items-center justify-between mt-[26px]">
                <Button
                  className="bg-white border-[0.8px] border-[#ADADAD] rounded-[5px] w-[143px] h-[40px] hover:bg-gray-100 transition-all flex items-center justify-center "
                  disabled={params.page === 1}
                  onClick={decreasePage}
                >
                  <div className="flex items-center gap-x-[5px]">
                    <IconLeftTwoArrow fill="#505050" />
                    <span className="font-semibold opacity-[0.85] text-[13px] text-gray-900">
                      {t("events:prev_button")}
                    </span>
                  </div>
                </Button>
                {eventsList &&
                  params.page &&
                  params.per_page &&
                  params.page <=
                    Math.ceil(eventsList.total_count / params.per_page) && (
                    <Button
                      className="bg-[#ADADAD] rounded-[5px] w-[143px] h-[40px] hover:bg-gray-500 transition-all flex items-center justify-center"
                      onClick={increasePage}
                    >
                      <div className="flex items-center gap-x-[5px]">
                        <IconRightTwoArrow fill="#ffffff" />
                        <span className="font-semibold opacity-[0.85] text-[13px] text-white">
                          {t("events:next_button")}
                        </span>
                      </div>
                    </Button>
                  )}
              </div>
            </div>
          </div>
          <div className="ml-[26px] lg:ml-0 lg:mb-[26px] 2xl:ml-[40px] xl:ml-[20px] lg:row-end-1 lg:flex lg:items-center lg:justify-between">
            <div>
              <h2 className="text-[16px] font-bold text-blue-600 mb-[20px] capitalize">
                {t("events:trending_events")}
              </h2>
              <div className="flex flex-col gap-[15px]">
                {eventsTrending &&
                  eventsTrending.items.length > 0 &&
                  eventsTrending.items.map((event) => (
                    <Event key={event.id} event={event} />
                  ))}
              </div>
            </div>
            <div className="w-full border-[1px] border-dotted my-[18px] lg:hidden"></div>
            <div className="w-[1px] h-full border-[1px] border-dotted hidden lg:block"></div>
            <div>
              <h2 className="text-[16px] font-bold text-blue-600 mb-[20px] capitalize">
                {t("events:significant_events")}
              </h2>
              <div className="flex flex-col gap-[15px]">
                {eventsSignificant &&
                  eventsSignificant.items.length > 0 &&
                  eventsSignificant.items.map((event) => (
                    <Event key={event.id} event={event} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default EventsPage;
