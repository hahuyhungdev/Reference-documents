import { dataTrendingCoin } from "@components/Table/data/dataTrendingCoin";
import { Typography } from "@components/Typography";
import { fundConfig } from "@features/fund/fund.config";
import clsx from "clsx";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import main from "../detail.module.css";
import s from "./index.module.css";

export const SimilarCompany = () => {

  const { t } = useTranslation(fundConfig.i18nNamespaces);
  return (
    <div className="my-[15px] border-b-[1px] border-[#CACACA] py-4 pb-5">
      <Typography
        className="font-semibold text-[20px] sm:text-[16px]"
        color="primary"
      >
        <div className="text-lg">
          {t("fund:detail_overview.similar_companies")}
        </div>
      </Typography>
      <div className={s["contain-items"]}>
        <div className={s["contain-custom-items"]}>
          {dataTrendingCoin.slice(0, 8).map((item: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "not-italic custom_button",
                main["buttonWallet"]
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