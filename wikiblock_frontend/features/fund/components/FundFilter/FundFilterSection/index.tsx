import { Button } from "@components";
import { IconReload } from "@components/Icons";
import IconReset from "@components/Icons/IconReset";
import { SelectOptions } from "@components/select";
import { markOptions, marks } from "@features/fund/components/CreatChart/CreatChartSection";
import ChartFilterSlider from "@features/fund/components/CreatChart/CreatChartSlider";
import { dataCategories, dataTier, dataType } from "@features/fund/data/overview";
import { fundConfig } from "@features/fund/fund.config";
import useOnClickOutside from "@hooks/useOnClickOutside";
import { DatePickerProps } from "antd";
import clsx from "clsx";
import { FC, useRef } from "react";
import { useTranslation } from "react-i18next";
import { MdArrowDropDown } from "react-icons/md";

import FundFilterFounded from "../FundFilterFounded";
import s from "../index.module.css";

interface Props {
  show: boolean;
  onClose: () => void;
  isMobile?: boolean;
}
const FundFilterSection: FC<Props> = ({
  show,
  onClose,
  isMobile = false,
}) => {
  const { t } = useTranslation(fundConfig.i18nNamespaces);
  const ref = useRef(null);
  // useOnClickOutside(ref, onClose);
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    // console.log(date, dateString);
  };
  const onSliderChange = (value: number) => {
    console.log((marks as any)[value]);
  };
  return (
    <div
      className={clsx(
        "w-[450px] left-3 rounded-[5px] bg-white absolute top-[20px] right-0 translate-y-[6%] transition-all z-[999]",
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
          <h3>
            {t("fund:filter.launched")}
          </h3>
          <div className={s["filter-row"]}>
            <FundFilterFounded isMobile={isMobile} onChange={onChange} />
            <div className={clsx(s["icon"])}> <IconReload /></div>
          </div>

        </div>
        <div className="mb-[25px]">
          <div className={s["filter-row"]}>
            <h3>
              {t("fund:filter.type")}
            </h3>
            <SelectOptions
              className={clsx("rounded-[5px] select-coin")}
              suffixIcon={<MdArrowDropDown size={20} color="black" />}
              bordered={false}
              options={dataType}
              disabled={false}
              placeholder={t("fund:filter.all")}
            />
          </div>
        </div>
        <div className={clsx("mb-[25px]")}>
          <h3>
            {t("fund:filter.investment")}
          </h3>
          <div className={s["filter-row"]}>
            <FundFilterFounded isMobile={isMobile} onChange={onChange} />
            <div className={clsx(s["icon"])}> <IconReload /></div>
          </div>
        </div>
        {/* Typical Category */}
        <div className="mb-[25px]">
          <div className={s["filter-row"]}>
            <h3>
              {t("fund:filter.typical_category")}
            </h3>
            <SelectOptions
              className={clsx("rounded-[5px] select-coin")}
              suffixIcon={<MdArrowDropDown size={20} color="black" />}
              bordered={false}
              placeholder={t("fund:filter.all")}
              options={dataCategories.map((item) => ({
                label: item.label,
                value: item.value,
              }))}
              disabled={false}
            />
          </div>
        </div>
        {/*End Typical Category */}

        {/* Typical Tier */}
        <div className="mb-[25px]">
          <div className={s["filter-row"]}>
            <h3>
              {t("fund:filter.tier")}
            </h3>
            <SelectOptions
              className={clsx("rounded-[5px] select-coin")}
              suffixIcon={<MdArrowDropDown size={20} color="black" />}
              bordered={false}
              placeholder={t("fund:filter.all")}
              options={dataTier}
              disabled={false}
            />
          </div>
        </div>
        {/*End Typical Tier */}
        <div
          className={clsx(
            "mb-[40px]",
            isMobile && s["blockchain-filter-slider-wrapper"]
          )}
        >
          <div className={clsx(s["filter-row"], s["filter-row-market"])}>
            <h3>
              {t("fund:filter.funding")}
            </h3>
            <ChartFilterSlider
              range={true}
              isMobile={isMobile}
              marks={marks}
              onSliderChange={onSliderChange}
              options={markOptions}
            />
          </div>

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
              {t("fund:filter.reset_all_filters")}
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
              {t("fund:filter.cancel")}
            </span>
          </Button>
          <Button
            onClick={() => {
              onClose();
            }}
            className={clsx(
              "py-[8px] px-[23px] rounded-[3px] bg-[#1F93FF] transition-all hover:opacity-[0.8]",
              isMobile && s["blockchain-filter-footer-button"]
            )}
          >
            <span className="text-white text-[13px] font-medium">
              {t("fund:filter.apply")}
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FundFilterSection;
