import { Button } from "@components";
import { Typography } from "@components/Typography";
import { overviewConfig } from "@features/example/example.config";
import { useGetMenuItems } from "@features/layout/hooks";
import clsx from "clsx";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { I18nActiveNamespaces } from "types/i18n";

import s from "./lookuprecords.module.css";
import { MainLeft } from "./MainLeft";
import { MainRight } from "./MainRight";

export const LookUpRecordsByRoi = () => {
  const { t } = useTranslation<I18nActiveNamespaces<"common" | "home">>(
    overviewConfig.i18nNamespaces
  );
  const { menuItems } = useGetMenuItems();
  return (
    <div className={clsx("px-1 border-t-2 boder-[#F5F5F5]", s["LookUpRedcordByRoi"])}>
      <Typography className="font-semibold text-[20px] uppercase mb-[10px]" color="primary">
        {t("home:reportother.lookuprecords")}
      </Typography>
      <p className="text-[#000000] text-[14px] font-nomal">
        {t("home:realtimereports.description")}
      </p>
      <div className="select-crypto flex items-center gap-[13px] flex-wrap my-[23px] md:justify-center ">
        {menuItems.map((item: any, index: number) => (
          <Button
            key={index}
            className="bg-[#7CB5EC] h-[30px] sm:truncate px-[10px] not-italic font-normal sm:col-span-1 "
          >
            <Link href={`/${item.url}`}>
              <a className="text-[#FFFFFF]">{item.title}</a>
            </Link>
          </Button>
        ))}
      </div>
      <div className={clsx(s["main"])}>
        <MainLeft />
        <MainRight />
      </div>
    </div>
  );
};
