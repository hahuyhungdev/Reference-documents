import { Button } from "@components";
import { IconFilterNoBackground } from "@components/Icons";
import { blockchainConfig } from "@features/blockchain-ecosystem/blockchain.config";
import { useCheckMobileScreen } from "@hooks";
import clsx from "clsx";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import FundFilterDrawer from "./FundFilterDrawer";
import FundFilterSection from "./FundFilterSection";

const FundFilter = () => {
  const { t } = useTranslation(blockchainConfig.i18nNamespaces);
  const [isShowFilter, setIsShowFilter] = useState(false);
  const [highlightIcon, setHighlightIcon] = useState(false);
  const { windowDimensions } = useCheckMobileScreen();

  return (
    <div className="flex items-center gap-x-[10px] sm:ml-auto">
      <Button className="bg-[#F4AC20] px-[12px] py-[6px] hover:opacity-[0.8] transition-all">
        <span className="text-[11px] text-white">
          {t("blockchain:filter.overview")}
        </span>
      </Button>
      <Button className="bg-[#EFF0F4] px-[12px] py-[6px] hover:bg-[#F4AC20] text-black hover:text-white transition-all">
        <span className="text-[11px]">{t("blockchain:filter.growth")}</span>
      </Button>
      <Button className="bg-[#EFF0F4] px-[12px] py-[6px] hover:bg-[#F4AC20] text-black hover:text-white transition-all">
        <span className="text-[11px]">{t("blockchain:filter.technology")}</span>
      </Button>
      <div className="relative">
        <Button
          className={clsx(
            "bg-[#EFF0F4] px-[12px] py-[6px] hover:bg-[#F4AC20] text-black hover:text-white transition-all"
          )}
          onClick={() => setIsShowFilter(true)}
          onMouseEnter={() => setHighlightIcon(true)}
          onMouseLeave={() => setHighlightIcon(false)}
        >
          <div className="w-full flex items-center gap-x-[15px]">
            <span className="text-[11px]">{t("blockchain:filter.filter")}</span>
            <div>
              <IconFilterNoBackground
                stroke={highlightIcon ? "#fff" : undefined}
              />
            </div>
          </div>
        </Button>
        {windowDimensions.width >= 550 ? (
          <FundFilterSection
            show={isShowFilter}
            onClose={() => {
              setIsShowFilter(false);
            }}
          />
        ) : (
          <FundFilterDrawer
            show={isShowFilter}
            onClose={() => {
              setIsShowFilter(false);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default FundFilter;
