import DefaultLayout from "@features/layout/components/DefaultLayout";
import { useTranslation } from "react-i18next";
import { I18nActiveNamespaces } from "types/i18n";

import TopFunds from "../components/Analysis/TopFunds";
import { useGetSidebarItems } from "../data/sidebar";
import { fundConfig } from "../fund.config";


const TopMarketCapPage = () => {
  const { t } = useTranslation<I18nActiveNamespaces<"common" | "fund">>(
    fundConfig.i18nNamespaces
  )
  const { dataFund } = useGetSidebarItems();
  return (
    <DefaultLayout withSidebar dataSidebar={dataFund as any}>
      <TopFunds namePage={t("fund:menu.top_funds_by_avg_market_cap")} description="Số liệu được tổng hợp và cập nhật liên tục bởi abcxyz" />
    </DefaultLayout>
  );
};

export default TopMarketCapPage;