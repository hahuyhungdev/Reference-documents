import { Rowtable } from "@components/Table";
import { dataTrendingCoin } from "@components/Table/data/dataTrendingCoin";
import { Typography } from "@components/Typography";
import { useTranslation } from "react-i18next";
import { I18nActiveNamespaces } from "types/i18n";

import { tokenConfig } from "./token.config";

export const Compare = () => {
  const { t } = useTranslation<
    I18nActiveNamespaces<"common" | "home" | "token">
  >(tokenConfig.i18nNamespaces);
  return (
    <div className="mt-[26px]">
      <Typography
        className="font-semibold text-[20px] sm:text-[16px]"
        color="primary"
      >
        {t("token:compare.title")}
      </Typography>
      <div className="maintale">
        <Rowtable
          title={t("token:compare.compare")}
          className="font-semibold"
          colorName1="#FF7A00"
          colorName2="#097AE3"
          openIconFilter
          name1={dataTrendingCoin[0].name}
          name2={dataTrendingCoin[1].name}
        />
        <Rowtable
          title={t("token:compare.to_ath")}
          name1={dataTrendingCoin[0].pairs}
          name2={dataTrendingCoin[1].pairs}
        />
        <Rowtable title={t("token:compare.market_cap")} openTwoLine />
        <Rowtable
          title={t("token:compare.revenue")}
          tooltip={t("token:compare.tooltip.revenue")}
          openTwoLine
          openIconInfo
        />
        <Rowtable
          title={t("token:compare.community_token")}
          name1={dataTrendingCoin[0].pairs}
          name2={dataTrendingCoin[1].pairs}
        />
        <Rowtable
          title={t("token:compare.total_user")}
          tooltip={t("token:compare.tooltip.total_user")}
          openIconInfo
          name1={dataTrendingCoin[0].pairs}
          name2={dataTrendingCoin[1].pairs}
        />
        <Rowtable
          title={t("token:compare.holders")}
          tooltip={t("token:compare.tooltip.holders")}
          openIconInfo
          name1={dataTrendingCoin[0].pairs}
          name2={dataTrendingCoin[1].pairs}
        />
        <Rowtable
          title={t("token:compare.reliability")}
          className="text-[#1F93FF]"
          tooltip={t("token:compare.tooltip.reliability")}
          openIconInfo
          name1={dataTrendingCoin[0].pairs}
          name2={dataTrendingCoin[1].pairs}
        />
        <Rowtable
          title={t("token:compare.investment_potential")}
          className="text-[#1F93FF]"
          tooltip={t("token:compare.tooltip.investment_potential")}
          openIconInfo
          name1={dataTrendingCoin[0].pairs}
          name2={dataTrendingCoin[1].pairs}
        />
        <Rowtable
          title={t("token:compare.backer_ranking")}
          className="text-[#1F93FF]"
          tooltip={t("token:compare.tooltip.backer_ranking")}
          openIconInfo
          name1={dataTrendingCoin[0].pairs}
          name2={dataTrendingCoin[1].pairs}
        />
        <Rowtable
          title={t("token:compare.sector_rank")}
          className="text-[#1F93FF]"
          tooltip={t("token:compare.tooltip.sector_rank")}
          openIconInfo
          name1={dataTrendingCoin[0].pairs}
          name2={dataTrendingCoin[1].pairs}
        />
      </div>
    </div>
  );
};
