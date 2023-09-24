import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { I18nActiveNamespaces } from "types/i18n";

import { explorationConfig } from "../exploration.config";

export type typedataColum = {
  title: string;
  url: string;
};
export const useGetNavigation = () => {
  const { t } = useTranslation<I18nActiveNamespaces<"common" | "exploration">>(
    explorationConfig.i18nNamespaces
  );
  const navigationLeft: Array<typedataColum> = useMemo(
    () => [
      {
        title: t("exploration:analysis.coin_top"),
        url: "/exploration/analysis/coin-top",
      },
      {
        title: "Ecosystem",
        url: "/exploration/analysis/ecosystem",
      },
      {
        title: t("exploration:analysis.nft"),
        url: "/exploration/analysis/nft-web3",
      },
      {
        title: t("exploration:analysis.more"),
        url: "/exploration/analysis/more ",
      },
    ],
    [t]
  );
  const navigationRight: Array<typedataColum> = useMemo(
    () => [
      {
        title: t("exploration:analysis.market"),
        url: "/exploration/analysis/market",
      },
      {
        title: t("exploration:analysis.fund"),
        url: "/exploration/analysis/fund",
      },
      {
        title: t("exploration:analysis.launchpad"),
        url: "/exploration/analysis/exchange-launchpad",
      },
    ],
    [t]
  );
  const navigationGuidelines: Array<typedataColum> = useMemo(
    () => [
      {
        title: t("exploration:guidelines.exchange"),
        url: "/exploration/portal/guidelines/exchange",
      },
      {
        title: t("exploration:guidelines.tool_app"),
        url: "/exploration/portal/guidelines/tool-web",
      },
      {
        title: t("exploration:guidelines.web"),
        url: "/exploration/portal/guidelines/wallet",
      },
      {
        title: t("exploration:guidelines.basic_analysis"),
        url: "/exploration/portal/guidelines/basic-analysis",
      },
      {
        title: t("exploration:guidelines.candle_price_action"),
        url: "/exploration/portal/guidelines/candle-price-action",
      },
      {
        title: t("exploration:guidelines.chart"),
        url: "/exploration/portal/guidelines/chart",
      },
    ],
    [t]
  );
  const navigationExperience: Array<typedataColum> = useMemo(
    () => [
      {
        title: t("exploration:experience.hold"),
        url: "/exploration/portal/experience/hold",
      },
      {
        title: t("exploration:experience.trade"),
        url: "/exploration/portal/experience/trade",
      },
      {
        title: t("exploration:experience.invest"),
        url: "/exploration/portal/experience/invest",
      },
      {
        title: t("exploration:experience.earn"),
        url: "/exploration/portal/experience/earn",
      },
      {
        title: t("exploration:experience.research"),
        url: "/exploration/portal/experience/research",
      },
      {
        title: t("exploration:experience.learn"),
        url: "/exploration/portal/experience/learn",
      },
    ],
    [t]
  );
  const dataStep: Array<typedataColum> = useMemo(
    () => [
      {
        title: t("exploration:for_newbies.step_1_what_is_crypto"),
        url: "/exploration/for-newbies/how-to-crypto/step-1-what-is-crypto",
      },
      {
        title: t("exploration:for_newbies.step_2_how_to_earn_crypto"),
        url: "/exploration/for-newbies/how-to-crypto/step-2-how-to-earn-crypto",
      },
      {
        title: t("exploration:for_newbies.step_3how_to_trade"),
        url: "/exploration/for-newbies/how-to-crypto/step-3-how-to-trade",
      },
      {
        title: t("exploration:for_newbies.step_4_what_to_use"),
        url: "/exploration/for-newbies/how-to-crypto/step-4-what-to-use",
      },
      {
        title: t("exploration:for_newbies.step_5_what_to_read_follow"),
        url: "/exploration/for-newbies/how-to-crypto/step-5-what-to-read-follow",
      },
    ],
    [t]
  );
  return {
    navigationLeft,
    navigationRight,
    navigationGuidelines,
    navigationExperience,
    dataStep,
  };
};
