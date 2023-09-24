import BasicLineStock from "@components/ChartJs/BasicLineStock";
import { Typography } from "@components/Typography";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { I18nActiveNamespaces } from "types/i18n";

import { tokenConfig } from "../token.config";
import s from "../token.module.css";
export type Prop = {
  title?: string;
  value?: string;
  note?: string;
  name?: string;
};
type ulistkeyProps = {
  items: Array<{
    name: string;
    value?: string;
    value_color?: string;
    note?: string;
    note_color?: string;
    other?: string;
  }
  >
}
export const KeyMetrics = () => {
  const { t } = useTranslation<
    I18nActiveNamespaces<"common" | "home" | "token">
  >(tokenConfig.i18nNamespaces);
  const ulistkey: Array<ulistkeyProps> = [
    {
      items: [
        {
          name: t("token:overview.price_roi"),
        },
        {
          name: t("token:overview.seed_sales"),
          value: "$1,0",
          value_color: "#353535",
          note: "(x5100%)",
          note_color: "#353535",
        },
        {
          name: "Private sales:",
          value: "$2,1 ",
          value_color: "#353535",
          note: "(x2500%)",
          note_color: "#353535",
        },

        {
          name: "Public sales:",
          value: "5,1",
          note: "(x1%)",
          value_color: "#000000",
        },
      ],
    },
    {
      items: [
        {
          name: t("token:overview.supply"),
        },
        {
          name: t("token:overview.circulating"),
          value: "19,060,556",
          value_color: "#353535",
          note: "(90.76%)",
          note_color: "#353535",
        },
        {
          name: t("token:overview.total"),
          value: "21,000,000",
          value_color: "#353535",
        },

        {
          name: t("token:overview.max"),
          value: "21,000,000",
          value_color: "#000000",
        },
      ],
    },
    {
      items: [
        {
          name: t("token:overview.market_cap_ranks"),
        },
        {
          name: t("token:overview.category"),
          value: "#1",
          value_color: "#000000",
          note: "(AMM)",
          note_color: "#0000ff",
        },
        {
          name: t("token:overview.sector"),
          value: "#4",
          value_color: "#000000",
          note: "(AMM)",
          note_color: "#0000ff",
        },

        {
          name: t("token:overview.ecosystem"),
          value: "#3",
          value_color: "#000000",
          note: "(AMM)",
          note_color: "#0000ff",
        },
      ],
    },
    {
      items: [
        {
          name: t("token:overview.growth"),
        },
        {
          name: t("token:overview.wallets"),
          value: "1M",
          value_color: "#353535",
          note: "(+34%)",
          note_color: "#353535",
        },
        {
          name: t("token:overview.revenue"),
          value: "$10B",
          value_color: "#353535",
          note: "(-20%)",
          note_color: "#DE1826",
        },

        {
          name: t("token:overview.tvl"),
          value: "23M",
          value_color: "#353535",
          note: "(-78%)",
          note_color: "#DE1826",
        },
      ],
    },
    {
      items: [
        {
          other: t("token:overview.other"),
          name: t("token:overview.telegram_active_member"),
          value: "10%",
          value_color: "#353535",
          note: "(low)",
          note_color: "#353535",
        },
        {
          name: t("token:overview.community_token_allocation"),
          value: "4%",
          value_color: "#DE1826",
          note: "(high)",
          note_color: "#DE1826",
        },
        {
          name: t("token:overview.team/_backer_rank"),
        },
      ],
    },
  ];
  return (
    <div className="pt-11 border-b-[1px] border-[#CACACA]">
      <div>
        <Typography color="primary" size="large" className="font-bold">
          {t("token:overview.key_metrics")}
        </Typography>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-2 gap-9 sm:grid-cols-1">
        {ulistkey.map((ul_keymetric, index) => {
          return (
            <ul key={"ul_key" + index} >
              {ul_keymetric.items.map((li_keymetric, index) => {
                return (
                  <li
                    key={"ul_keymetric" + index}
                    className="flex justify-between"
                  >
                    <div className={clsx(s["keymetric-content"], s["keymetric-content-left"])}>
                      <span>{li_keymetric.other}</span>
                      <span className="mx-[2px] whitespace-nowrap">{li_keymetric.name}</span>
                    </div>
                    <div className={clsx(s["keymetric-content"], s["keymetric-content-right"])}>
                      <span style={{ color: li_keymetric.value_color }}>
                        {li_keymetric.value}
                      </span>
                      <span style={{ color: li_keymetric.note_color }}>
                        {li_keymetric.note}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
      <div className="my-7">
        <BasicLineStock />
      </div>
    </div>
  );
};
