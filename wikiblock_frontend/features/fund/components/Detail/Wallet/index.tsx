import { colorsProgress, dataWallet, ProgressBarDynamic } from "@components/ProgressBar/dynamic";
import { Typography } from "@components/Typography";
import { fundConfig } from "@features/fund/fund.config";
import clsx from "clsx";
import { FC } from "react";
import { useTranslation } from "react-i18next";

import s from "./index.module.css";
import { AssetsHolding } from "./table/AssetsHolding";
import { Behaviour } from "./table/Behaviour";
export const Wallet = () => {
  const { t } = useTranslation(fundConfig.i18nNamespaces);

  const infoAllocation = [
    {
      title: t("fund:wallet_activity.wallet_1"),
      value: "0x0dc345tkk78gst",
    },
    {
      title: t("fund:wallet_activity.wallet_2"),
      value: "0x0dc345tkk78",
    }
  ]
  type AllocationItemsProps = {
    title: string;
    value: string;
  }
  const AllocationItems: FC<AllocationItemsProps> = ({ title, value }) => {
    return (
      <div className="grid grid-cols-3 my-4">
        <div className="col-span-1 sm:col-span-3">
          <h3> {title}: {value}</h3>
        </div>
        <ProgressBarDynamic colors={colorsProgress} dataProgress={dataWallet} widthsize="col-span-2 sm:col-span-3" />
        <div className="col-span-3 my-1 assets flex justify-around items-center text-xs flex-wrap gap-x-1">
          {
            dataWallet.map((item, index) => {
              return (
                <div key={index} className="col-span-3 flex justify-center items-center">
                  <div style={{ backgroundColor: colorsProgress[index] }} className={clsx(s["assets-item"])} />
                  <span>
                    {item.name}
                  </span>
                </div>
              );
            })
          }

          <div className="flex justify-center items-center">
            <div style={{ backgroundColor: "#CBD5E1" }} className={clsx(s["assets-item"])} />
            <span >
              {t("fund:wallet_activity.remaining")}
            </span>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="mt-[10px] sm:mt-3 border-b-[1px] border-[#CACACA] py-4 pb-7">
      <Typography
        className="font-semibold text-[20px] sm:text-[16px]"
        color="primary"
      >
        {t("fund:wallet_activity.wallet_activityOf", { name: "Alameda Research" })}
      </Typography>
      <div className="mt-[20px]">
        <div className="allocations">
          <div className="text-base font-semibold my-2">
            {t("fund:wallet_activity.asset_allocation")}
          </div>
          <div className="row">
            {/* map start with AllocationItems */}
            {
              infoAllocation.map((item, index) => {
                return (
                  <AllocationItems key={item.title} title={item.title} value={item.value} />
                );
              })
            }
          </div>
        </div>
        <div className="mt-[20px]">
          <div className="text-base font-semibold my-2">
            {t("fund:wallet_activity.asset_holding")}
          </div>
          <AssetsHolding />
        </div>
        <div className="mt-[20px]">
          <div className="text-base font-semibold my-2">
            {t("fund:wallet_activity.behaviour")}
          </div>
          <Behaviour />
        </div>
      </div>
    </div>
  );
};
