import { Button } from "@components";
import { IconReload } from "@components/Icons";
import IconReset from "@components/Icons/IconReset";
import { blockchainConfig } from "@features/blockchain-ecosystem/blockchain.config";
import { markOptions, marks } from "@features/fund/components/CreatChart/CreatChartSection";
import ChartFilterSlider from "@features/fund/components/CreatChart/CreatChartSlider";
import { DatePickerProps, Steps } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import clsx from "clsx";
import { FC, useRef } from "react";
import { useTranslation } from "react-i18next";

import BlockchainFilterBacker from "../BlockchainFilterBacker";
import BlockchainFilterFounded from "../BlockchainFilterFounded";
import BlockchainFilterStage from "../BlockchainFilterStage";
import s from "../index.module.css";
const { Step } = Steps;

const stageOptions = [
  {
    value: "early",
    label: "Early",
  },
  {
    value: "nearly",
    label: "Nearly",
  },
  {
    value: "developi",
    label: "Developi",
  },
  {
    value: "early",
    label: "Early",
  },
  {
    value: "nearly",
    label: "Nearly",
  },
  {
    value: "developi",
    label: "Developi",
  },
  {
    value: "nearly",
    label: "Nearly",
  },
  {
    value: "developi",
    label: "Developi",
  },
  {
    value: "developi",
    label: "Developi",
  },
  {
    value: "developi",
    label: "Developi",
  },
];

const backerOptions = [
  {
    value: "strong",
    label: "Strong",
  },
  {
    value: "neutral",
    label: "Neutral",
  },
  {
    value: "weak",
    label: "Weak",
  },
  {
    value: "early",
    label: "Early",
  },
];



interface Props {
  show: boolean;
  onClose: () => void;
  isMobile?: boolean;
}

const BlockchainFilterSection: FC<Props> = ({
  show,
  onClose,
  isMobile = false,
}) => {
  const { t } = useTranslation(blockchainConfig.i18nNamespaces);
  const ref = useRef(null);

  // useOnClickOutside(ref, onClose);

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  const onCheckBoxChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const onSliderChange = (value: number) => {
    console.log((marks as any)[value]);
  };
  return (
    <div
      className={clsx(
        "w-[450px] rounded-[5px] bg-white absolute top-0 right-0 translate-y-[6%] transition-all z-[999]",
        s["blockchain-filter-section"],
        show && !isMobile && s["show"],
        !show && !isMobile && s["hide"],
        isMobile && s["blockchain-filter-section-mobile"]
      )}
      ref={ref}
    >
      <div
        className={clsx(
          "py-[25px] px-[40px]",
          isMobile && s["blockchain-filter-wrapper-mobile"]
        )}
      >
        <div className={clsx("mb-[25px]")}>
          <div className="flex items-center gap-x-[10px] mb-[10px]">
            <IconReload />
            <h3 className="text-[13px] text-black font-medium mb-0">
              {t("blockchain:filter.founded")}
            </h3>
          </div>
          <BlockchainFilterFounded isMobile={isMobile} onChange={onChange} />
        </div>

        <div className="mb-[25px]">
          <div className="flex items-center gap-x-[10px] mb-[10px]">
            <IconReload />
            <h3 className="text-[13px] text-black font-medium mb-0">
              {t("blockchain:filter.stage")}
            </h3>
          </div>
          <BlockchainFilterStage
            isMobile={isMobile}
            onChange={onCheckBoxChange}
            options={stageOptions}
          />
        </div>
        <div className="mb-[25px]">
          <div className="flex items-center gap-x-[10px] mb-[10px]">
            <h3 className="text-[13px] text-black font-medium mb-0">
              {t("blockchain:filter.backer")}
            </h3>
          </div>
          <BlockchainFilterBacker
            isMobile={isMobile}
            onChange={onCheckBoxChange}
            options={backerOptions}
          />
        </div>
        <div
          className={clsx(
            "mb-[40px]",
            isMobile && s["blockchain-filter-slider-wrapper"]
          )}
        >
          <div className="flex items-center gap-x-[10px] mb-[10px]">
            <h3 className="text-[13px] text-black font-medium mb-0">
              {t("blockchain:filter.eco_market_cap")}
            </h3>
          </div>
          <ChartFilterSlider
            isMobile={isMobile}
            range={true}
            marks={marks}
            onSliderChange={onSliderChange}
            options={markOptions}
          />
        </div>
        <div
          className={clsx(
            "mb-[40px]",
            isMobile && s["blockchain-filter-slider-wrapper"]
          )}
        >
          <div className="flex items-center gap-x-[10px] mb-[10px]">
            <h3 className="text-[13px] text-black font-medium mb-0">
              {t("blockchain:filter.avg_FDV")}
            </h3>
          </div>
          <ChartFilterSlider
            isMobile={isMobile}
            range={true}
            marks={marks}
            onSliderChange={onSliderChange}
            options={markOptions}
          />
        </div>
        <div
          className={clsx(
            "mb-[40px]",
            isMobile && s["blockchain-filter-slider-wrapper"]
          )}
        >
          <div className="flex items-center gap-x-[10px] mb-[10px]">
            <h3 className="text-[13px] text-black font-medium mb-0">
              {t("blockchain:filter.community")}
            </h3>
          </div>
          <ChartFilterSlider
            isMobile={isMobile}
            range={true}
            marks={marks}
            onSliderChange={onSliderChange}
            options={markOptions}
          />
        </div>
      </div>
      <div
        className={clsx(
          "flex items-center justify-between md:block bg-[#FBFCFF] py-[25px] px-[40px]",
          isMobile && s["blockchain-filter-footer"]
        )}
      >
        <Button className="py-[6px] px-[20px] bg-[#FF8282] rounded-[2px] hover:opacity-[0.8] transition-all md:block md:w-full md:mb-[20px]">
          <div className="flex items-center gap-x-[5px] md:w-full md:justify-center">
            <IconReset />
            <span className="text-[12px] text-white font-medium">
              {t("blockchain:filter.reset_button")}
            </span>
          </div>
        </Button>
        <div className="flex items-center gap-x-[14px] md:justify-end">
          <Button
            className={clsx(
              "py-[8px] px-[23px] rounded-[3px] bg-white border-[1px] border-[#4992D6] transition-all hover:opacity-[0.8]",
              isMobile && s["blockchain-filter-footer-button"]
            )}
            onClick={() => {
              onClose();
            }}
          >
            <span className="text-black text-[13px] font-medium opacity-[0.7]">
              {t("blockchain:filter.cancel_button")}
            </span>
          </Button>
          <Button
            className={clsx(
              "py-[8px] px-[23px] rounded-[3px] bg-[#1F93FF] transition-all hover:opacity-[0.8]",
              isMobile && s["blockchain-filter-footer-button"]
            )}
          >
            <span className="text-white text-[13px] font-medium">
              {t("blockchain:filter.apply_button")}
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlockchainFilterSection;
