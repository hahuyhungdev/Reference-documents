import { Button } from "@components/Button";
import { dataTrendingCoin } from "@components/Table/data/dataTrendingCoin";
import { Typography } from "@components/Typography";
import clsx from "clsx";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { I18nActiveNamespaces } from "types/i18n";

import { tokenConfig } from "./token.config";
import s from "./token.module.css";
export const BuyUse = () => {
  const { t } = useTranslation<
    I18nActiveNamespaces<"common" | "home" | "token">
  >(tokenConfig.i18nNamespaces);
  return (
    <div className="mt-[26px]">
      <Typography
        className="font-semibold text-[20px] sm:text-[16px]"
        color="primary"
      >
        <div className="text-lg">{t("token:buyuse.title")}</div>
      </Typography>
      <div className={clsx(s["wallets"])}>
        <div className="text-base font-semibold">
          {t("token:buyuse.wallets")}
        </div>
        <div className="flex items-center gap-[13px] sm:grid sm:grid-cols-2 my-[23px] md:justify-center">
          {dataTrendingCoin.slice(0, 4).map((item: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "not-italic sm:col-span-1 custom_button",
                s["buttonWallet"]
              )}
            >
              <div className="h-[25px] w-[25px]">{item.symbol}</div>
              <a className="text-[#010000] sm:truncate">{item.name}</a>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <div className="text-base font-semibold">
          {t("token:buyuse.exchanges")}
        </div>
        <div className="grid grid-cols-5 gap-[13px] sm:grid sm:grid-cols-2 my-[23px] md:justify-center">
          {dataTrendingCoin.slice(0, 8).map((item: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "not-italic sm:col-span-1 custom_button",
                s["buttonWallet"]
              )}
            >
              <div className="h-[25px] w-[25px]">{item.symbol}</div>
              <a className="text-[#010000] sm:truncate">{item.name}</a>
            </div>
          ))}
          <div
            className={clsx(
              "not-italic sm:col-span-1 custom_button",
              s["buttonWallet"]
            )}
          >
            <Link href="/crypto-assets">{t("token:show_more")}</Link>
          </div>
        </div>
      </div>
      <div className="">
        <div className="text-base font-semibold">
          {t("token:buyuse.related_products")}
        </div>
        <div className="w-full  my-[23px] md:justify-center">
          {dataTrendingCoin.slice(0, 1).map((item: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "not-italic sm:col-span-1 custom_button",
                s["buttonWallet"]
              )}
            >
              <div className="h-[25px] w-[25px]">{item.symbol}</div>
              <a className="text-[#010000] sm:truncate">{item.name}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};