import "antd/dist/antd.css";

import { Button, ProgressBar } from "@components";
import { SelectOptions } from "@components/select";
import { dataTrendingCoin } from "@components/Table/data/dataTrendingCoin";
import { homeConfig } from "@features/home/home.config";
import clsx from "clsx";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { TableColumn } from "types/common";
import { I18nActiveNamespaces } from "types/i18n";

import s from "./lookuprecords.module.css";
export const MainRight = () => {
  const { t } = useTranslation<I18nActiveNamespaces<"common" | "home">>(
    homeConfig.i18nNamespaces
  );
  return (
    <div className={clsx(s["mainRight"])}>
      <div className="sm:block flex gap-x-10 items-center mb-[20px] justify-between">
        <div>
          <div className="not-italic font-semibold text-base leading-5">
            {t("home:reportother.exchange")}{" "}
          </div>
        </div>
        <div className={clsx(s["options"])}>
          <SelectOptions
            className={clsx("w-[90px] rounded-[5px] bg-[#F0F3F5] select-coin")}
            options={dataTrendingCoin.map((item: TableColumn) => ({
              label: item.name,
              value: item.name,
            }))}
            placeholder="Coin"
            disabled={false}
          />
          <SelectOptions
            className={clsx("w-[90px] rounded-[5px] select-coin")}
            placeholder="Time"
            options={[
              {
                label: "1D",
                value: "1D",
              },
              {
                label: "2D",
                value: "2D",
              },
              {
                label: "1W",
                value: "1W",
              },
            ]}
            disabled={false}
          />
        </div>
      </div>
      <div className={clsx(s["datatable"])}>
        <div className={clsx(s["spacetable"])}>
          <div className={clsx("col-span-2 sm:col-span-3", s["longshort"])}>
            Exchange
            <div className="mt-[40px]">
              {dataTrendingCoin.map((item: TableColumn, index: number) => (
                <div
                  key={index}
                  className="flex items-center gap-3 w-full mb-[23px]"
                >
                  {item.symbol}
                  {item.name}
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-4 sm:col-span-3">
            <div className="flex justify-between w-full">
              <div className={clsx(s["longshort"])}>Long</div>
              <div className={clsx(s["longshort"])}>Short</div>
            </div>
            <div className="mt-[45px]">
              {dataTrendingCoin.map((item: TableColumn, index: number) => (
                <div key={index} className="flex items-center mb-[35px] w-full">
                  <ProgressBar
                    className="text-center w-full"
                    progress={item.progress as number}
                    colorMain="#EEEEEE"
                    widthsize="100%"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
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
