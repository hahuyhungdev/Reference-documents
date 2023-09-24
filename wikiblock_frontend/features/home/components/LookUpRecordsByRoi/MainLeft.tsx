import "antd/dist/antd.css";

import { Button, SearchInput, SearchInputValue } from "@components";
import { SelectOptions } from "@components/select";
import { LookAtRecord } from "@components/Table";
import { overviewConfig } from "@features/example/example.config";
import clsx from "clsx";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { I18nActiveNamespaces } from "types/i18n";

import s from "./lookuprecords.module.css";
export const MainLeft = () => {
  const { t } = useTranslation<I18nActiveNamespaces<"common" | "home">>(
    overviewConfig.i18nNamespaces
  );
  return (
    <div className={clsx(s["mainLeft"])}>
      <div className="not-italic font-semibold text-base leading-5 whitespace-nowrap">
        {t("home:reportother.top_exchanges_volumes")}
      </div>
      <div className="mt-[20px]">
        <div className={clsx(s["contai_input"])}>
          <div className="flex gap-[10px]">
            <SearchInput
              placeholder={t("home:look_up.research_project")}
              className="w-[180px] h-[40px] sm:mb-[10px]"
            />
            <SelectOptions
              options={[
                {
                  label: "All",
                  value: "all",
                },
                {
                  label: "BTC",
                  value: "btc",
                },
                {
                  label: "ETH",
                  value: "eth",
                },
              ]}
              placeholder={t("home:look_up.fund_type")}
              className="h-[42px] w-[115px] fundType md:w-2/4"
            />
          </div>
          <div className="">
            <SearchInput placeholder={t("home:look_up.search")} className="w-2/3 h-[42px] sm:w-full" />
          </div>
        </div>
        <div className={clsx("mt-[10px] sm:grid-cols-1", s["container_input"])}>
          <div>
            <div className="font-normal text-xs leading-4 text-[#000000]">
              {t("home:look_up.year_founded")}
            </div>
            <div className={clsx("my-[10px]", s["container_input_chirlden"])}>
              <SearchInputValue
                className={clsx(s["search_input"])}
                placeholder={t("home:look_up.from")}
              />
              <SearchInputValue
                className={clsx(s["search_input"])}
                placeholder={t("home:look_up.to")}
              />
            </div>
          </div>
          <div>
            <div className="font-normal text-xs leading-4 text-[#000000]">
              {t("home:look_up.number_of_investments")}
            </div>
            <div className={clsx("mt-[5px]", s["container_input_chirlden"])}>
              <SearchInputValue
                className={clsx(s["search_input"])}
                placeholder={t("home:look_up.from")}
              />
              <SearchInputValue
                className={clsx(s["search_input"])}
                placeholder={t("home:look_up.to")}
              />
            </div>
          </div>
          <div>
            <div className="font-normal text-xs leading-4 text-[#000000]">
              {t("home:look_up.total_funding_amount")}
            </div>
            <div className={clsx("mt-[5px]", s["container_input_chirlden"])}>
              <SearchInputValue
                className={clsx(s["search_input"])}
                placeholder={t("home:look_up.from")}
              />
              <SearchInputValue
                className={clsx(s["search_input"])}
                placeholder={t("home:look_up.to")}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[25px]">
        <LookAtRecord />
      </div>
      <div className="mt-[18px] flex">
        <Button
          size="normal"
          className="bg-[#EFF0F4] active:bg-[#f4ac20] h-[30px] rounded-[3px] ml-auto"
        >
          <Link href="all-crypto">
            <a className="text-[#010000] sm:truncate"> {t("home:look_up.view_all")}</a>
          </Link>
        </Button>
      </div>
    </div>
  );
};
