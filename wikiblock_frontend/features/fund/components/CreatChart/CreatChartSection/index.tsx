import { Button } from "@components";
import { SelectOptions } from "@components/select";
import { useGetCommonItems } from "@features/fund/data/common";
import { dataCategories, dataType } from "@features/fund/data/overview";
import { fundConfig } from "@features/fund/fund.config";
import { setisShowChart } from "@features/layout/common.slice";
import { Drawer } from "antd";
import type { SliderMarks } from "antd/es/slider";
import clsx from "clsx";
import { useRouter } from "next/router";
import { FC, useRef } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineClose } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";
import { useDispatch } from "react-redux";

import CreatChartCheckbox from "../CreatChartCheckbox";
import CreatChartCompare from "../CreatChartCompare";
import CreatChartRadio from "../CreatChartRadio";
import ChartFilterSlider from "../CreatChartSlider";
import s from "../index.module.css";

export const marks: SliderMarks = {
  0: "<1M",
  25: "1M",
  50: "10M",
  75: "100M",
  100: ">1B",
};

export const markOptions = [
  {
    value: "0",
    label: "<1M",
  },
  {
    value: "25",
    label: "1M",
  },
  {
    value: "50",
    label: "10M",
  },
  {
    value: "75",
    label: "100M",
  },
  {
    value: "100",
    label: ">1B",
  },
];

interface Props {
  show: boolean;
  onClose: () => void;
  isMobile?: boolean;
}
const ChartFilterSection: FC<Props> = ({
  show,
  onClose,
  isMobile = false,
}) => {
  const { t } = useTranslation(fundConfig.i18nNamespaces);
  const ref = useRef(null);
  const router = useRouter()
  const dispatch = useDispatch();
  const onSliderChange = (value: number) => {
    console.log(marks[value]);
  };
  const handleAddChart = () => {
    dispatch(setisShowChart(true))
  }
  const { dataRadio, dataOptionsCheckBox } = useGetCommonItems()
  return (
    <div
      className={clsx(
        "w-full left-0 rounded-[5px] absolute transition-all z-[999]",
        s["blockchain-filter-section"],
        show && !isMobile && s["show"],
        !show && !isMobile && s["hide"],
        isMobile && s["blockchain-filter-section-mobile"]
      )}
      ref={ref}>
      <div
        className={clsx(
          "py-[10px] px-[20px] overflow-hidden",
          isMobile && s["blockchain-filter-wrapper-mobile"]
        )}
      >
        <div className={clsx(s["filter-row"], s["filter-row-compare"])}>
          <div className={clsx(s["filter-row-compare-item"])}>
            <h3>
              {t("fund:create_chart.analysis")}
            </h3>
          </div>
          <div className={clsx(s["filter-row-analysis-item"])}>
            <CreatChartRadio dataRadio={dataRadio} isMobile={isMobile} />
          </div>
        </div>
        <div className={clsx(s["filter-row"], s["filter-row-compare"])}>
          <div className={clsx(s["filter-row-compare-item"])}>
            <h3>
              {t("fund:create_chart.fund_type")}
            </h3>
          </div>
          <div className={clsx(s["filter-row-compare-item"])}>
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
        {/*  Category */}
        <div className={clsx(s["filter-row"], s["filter-row-compare"])}>
          <div className={clsx(s["filter-row-compare-item"])}>
            <h3>
              {t("fund:create_chart.category")}
            </h3>
          </div>
          <div className={clsx(s["filter-row-compare-item"])}>
            <SelectOptions
              className={clsx("rounded-[5px] select-coin")}
              suffixIcon={<MdArrowDropDown size={20} color="black" />}
              bordered={false}
              placeholder={t("fund:filter.all")}
              // get first data of menuItems.submenu
              options={dataCategories.map((item) => ({
                label: item.label,
                value: item.value,
              }))}
              disabled={false}
            />
          </div>
        </div>
        {/*End Category */}
        <div
          className={clsx(
            isMobile && s["blockchain-filter-slider-wrapper"]
          )}
        >
          <div className={clsx(s["filter-row"], s["filter-row-market"])}>
            <h3>
              {t("fund:create_chart.funding")}
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
        <div className={clsx(s["filter-row"], s["filter-row-compare"])}>
          <div className={clsx(s["filter-row-compare-item"])}>
            <h3>
              {t("fund:create_chart.compare")}
            </h3>
          </div>
          <div className={clsx(s["filter-row-compare-item"])}>
            <CreatChartCompare isMobile={isMobile} dataType={dataType} />
          </div>
        </div>

        <div className={clsx(s["filter-row"], s["filter-row-compare"])}>
          <div className={clsx(s["filter-row-compare-item"])}>
            <h3>
              {t("fund:create_chart.key_metric")}
            </h3>
          </div>
          <div className={clsx(s["filter-row-compare-item"])}>
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
        <div className={clsx(s["filter-row"], s["filter-row-compare"])}>
          <div className={clsx(s["filter-row-compare-item"])}>
            <h3>
              {t("fund:create_chart.sub_metric")}
            </h3>
          </div>
          <div>
            <CreatChartCheckbox dataOptions={dataOptionsCheckBox} isMobile={isMobile} />
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "flex justify-end pr-3 items-center gap-x-2 bg-[#FBFCFF] py-[25px]",
          isMobile && s["blockchain-filter-footer"]
        )}
      >
        <Button className="py-[6px] px-[10px] bg-white border-[1px] border-[#4992D6] rounded-[2px] hover:opacity-[0.8] transition-all"
          onClick={() => {
            onClose();
          }}
        >
          <div className="gap-x-[5px] md:w-full">
            <span className="text-[12px] text-black font-medium">
              {t("fund:filter.cancel")}
            </span>
          </div>
        </Button>
        <Button
          className={clsx(
            "py-[6px] px-[10px] rounded-[2px] bg-[#1F93FF]  border-[1px] border-[#4992D6] transition-all hover:opacity-[0.8]",
            isMobile && s["blockchain-filter-footer-button"]
          )}
          // onClick={handleAddChart}
          onClick={() => {
            handleAddChart();
            onClose();
            router.push("/fund/analysis/create-chart");
          }}
        >
          <span className="text-white  text-[13px] font-medium">
            {t("fund:filter.apply")}
          </span>
        </Button>
      </div>
    </div>
  );
};

export default ChartFilterSection;
