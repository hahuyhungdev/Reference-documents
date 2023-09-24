import Page from "@components/Pagination";
import DefaultLayout from "@features/layout/components/DefaultLayout";
import { useGetSidebarItems } from "@features/layout/hooks";
import { useTranslation } from "react-i18next";

import { blockchainConfig } from "../blockchain.config";
import BlockchainFilter from "../components/BlockchainFilter";
import BlockchainTable from "../components/BlockchainTable";

const BlockchainEcosystemPage = () => {
  const { t } = useTranslation(blockchainConfig.i18nNamespaces);
  const { menus } = useGetSidebarItems();

  return (
    <DefaultLayout withSidebar dataSidebar={menus}>
      <div className="w-full h-full pt-[24px] pb-[50px] pl-[10px]">
        <div className="w-full h-[45px] bg-[#D5EBFF] mb-[23px]"></div>
        <div>
          <h2 className="text-[20px] font-bold text-[#1F93FF] mb-0">
            {t("blockchain:heading")}
          </h2>
          <div className="flex items-center justify-between sm:flex-col sm:items-start">
            <p className="mt-[8px] mb-[18px] text-[13px] text-[#545454]">
              {t("blockchain:description")}
            </p>
            <BlockchainFilter />
          </div>
        </div>
        <div className="mt-[15px]">
          <BlockchainTable />
          <div className="w-full text-right mt-[15px]">
            <Page />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default BlockchainEcosystemPage;
