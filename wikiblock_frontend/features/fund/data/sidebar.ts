import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { I18nActiveNamespaces } from "types/i18n";

import { fundConfig } from "../fund.config";

export type SidebarProps = {
  title: string;
  url: string;
  children?: Array<SidebarProps>;
};
export const useGetSidebarItems = () => {
  const { t } = useTranslation<I18nActiveNamespaces<"common" | "fund">>(
    fundConfig.i18nNamespaces
  );

  const dataFund: Array<SidebarProps> = useMemo(
    () => [
      {
        title: t("fund:menu.overview"),
        url: "/fund/overview",
      },
      {
        title: t("fund:menu.analysis"),
        url: "/fund/analysis",
        children: [
          {
            title: t("fund:menu.top_projects_by_fund"),
            url: "/fund/analysis/top-projects-by-fund",
          },
          {
            title: t("fund:menu.top_funds_by_project"),
            url: "/fund/analysis/top-projects-by-project",
          },
          {
            title: t("fund:menu.top_funds_by_ath_roi"),
            url: "/fund/analysis/top-projects-by-ath-roi",
          },
          {
            title: t("fund:menu.top_funds_by_current_roi"),
            url: "/fund/analysis/top-projects-by-current-roi",
          },
          {
            title: t("fund:menu.top_funds_by_avg_market_cap"),
            url: "/fund/analysis/top-projects-by-avg-market-cap",
          },
          {
            title: t("fund:menu.funding_by_category"),
            url: "/fund/analysis/funding-category",
          },
          {
            title: t("fund:menu.create_a_new_chart"),
            url: "/fund/analysis/create-chart",
          },
        ],
      },
    ],
    [t]
  );
  return {
    dataFund,
  };
};
