import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { I18nActiveNamespaces } from "types/i18n";

import { explorationConfig } from "../exploration.config";

export type SidebarProps = {
  title: string;
  url: string;
  children?: Array<SidebarProps>;
};
export const useGetSidebarItems = () => {
  const { t } = useTranslation<I18nActiveNamespaces<"common" | "exploration">>(
    explorationConfig.i18nNamespaces
  );

  const dataExploration: Array<SidebarProps> = useMemo(
    () => [
      {
        title: t("common:navbar-exploration.analysis"),
        url: "/exploration/analysis",
      },
      {
        title: t("common:navbar-exploration.portal"),
        url: "/exploration/portal",
        children: [
          {
            title: t("common:navbar-exploration.guidelines"),
            url: "/exploration/portal/guidelines",
          },
          {
            title: t("common:navbar-exploration.experience"),
            url: "/exploration/portal/experience",
          },
          {
            title: t("common:navbar-exploration.academy"),
            url: "/exploration/portal/academy",
          },
        ],
      },
      {
        title: t("common:navbar-exploration.for_newbies"),
        url: "/for-newbies",
        children: [
          {
            title: t("common:navbar-exploration.how_to_crypto"),
            url: "/exploration/for-newbies/how-to-crypto",
          },
          {
            title: t("common:navbar-exploration.glossary"),
            url: "/exploration/for-newbies/glossary",
          },
        ],
      },
      {
        title: t("common:navbar-exploration.opportunity"),
        url: "/exploration/opportunity",
        children: [
          {
            title: t("common:navbar-exploration.earn_money"),
            url: "/exploration/opportunity/earn-money",
          },
          {
            title: t("common:navbar-exploration.jobs"),
            url: "/exploration/opportunity/jobs",
          },
          {
            title: t("common:navbar-exploration.course"),
            url: "/exploration/opportunity/course",
          },
        ],
      },
    ],
    [t]
  );
  const dataFund: Array<SidebarProps> = useMemo(
    () => [
      {
        title: t("common:navbar-fund.overview"),
        url: "/fund/overview",
      },
      {
        title: t("common:navbar-fund.analysis"),
        url: "/fund/analysis/top-projects-by-fund",
      },
    ],
    [t]
  );
  return {
    dataExploration,
    dataFund,
  };
};
