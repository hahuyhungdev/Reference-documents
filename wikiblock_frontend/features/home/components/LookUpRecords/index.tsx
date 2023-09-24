import { Button } from "@components";
import { TopCrytalExchange } from "@components/Table";
import { Typography } from "@components/Typography";
import { homeConfig } from "@features/home/home.config";
import { Menu } from "@features/layout/components/NavBar";
import { useGetMenuItems } from "@features/layout/hooks";
import clsx from "clsx";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { I18nActiveNamespaces } from "types/i18n";

import s from "./lookuprecords.module.css";
import { MainRight } from "./MainRight";

export const LookUpRecords = () => {
  const { t } = useTranslation<I18nActiveNamespaces<"common" | "home">>(
    homeConfig.i18nNamespaces
  );
  const { menuItems } = useGetMenuItems();
  return (
    <div className={clsx("px-1 border-t-2 boder-[#F5F5F5]", s["LookUpRedcord"])}>
      <Typography className="font-semibold text-[20px] uppercase mb-[10px]" color="primary">
        {t("home:reportother.lookuprecords")}
      </Typography>
      <p className="text-[#000000] text-[14px] font-nomal">
        {t("home:realtimereports.description")}
      </p>
      <div className="select-crypto flex items-center gap-[13px] flex-wrap my-[23px] md:justify-center">
        {menuItems.map((item: Menu, index: number) => (
          <Button
            key={index}
            className="bg-[#EFF0F4] sm:truncate h-[30px] px-[10px] not-italic font-normal sm:col-span-1 "
          >
            <Link href={`/${item.url}`}>
              <a className="text-[#010000] sm:truncate">{item.title}</a>
            </Link>
          </Button>
        ))}
      </div>
      <div className={clsx(s["main"])}>
        <div className={clsx(s["mainLeft"])}>
          <div className="not-italic font-semibold text-base leading-5">
            {t("home:reportother.top_exchanges_volumes")}
          </div>
          <div className="mt-[25px]">
            <TopCrytalExchange />
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
        <MainRight />
      </div>
    </div>
  );
};
