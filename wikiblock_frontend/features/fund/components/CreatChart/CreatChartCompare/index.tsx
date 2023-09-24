import { SelectOptions } from "@components/select";
import { fundConfig } from "@features/fund/fund.config";
import clsx from "clsx";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { MdArrowDropDown } from "react-icons/md";

import s from "../index.module.css";

interface Props {
  isMobile: boolean;
  dataType: Array<{
    label: string | number;
    value: string | number;
  }>
}

const CreatChartCompare: FC<Props> = ({ isMobile, dataType }) => {
  const { t } = useTranslation(fundConfig.i18nNamespaces);
  return (
    <div
      className={clsx(
        "flex items-center flex-col gap-x-[10px]",
        isMobile && s["blockchain-filter-date-wrapper"]
      )}
    >
      <SelectOptions
        className={clsx("rounded-[5px] select-coin mr-auto")}
        suffixIcon={<MdArrowDropDown size={20} color="black" />}
        bordered={false}
        options={dataType}
        disabled={false}
        placeholder={"Fund 1"}
      />

      <SelectOptions
        className={clsx("rounded-[5px] select-coin mr-auto")}
        suffixIcon={<MdArrowDropDown size={20} color="black" />}
        bordered={false}
        options={dataType}
        disabled={false}
        placeholder={"Fund 2"}
      />
      <SelectOptions
        className={clsx("rounded-[5px] select-coin mr-auto")}
        suffixIcon={<MdArrowDropDown size={20} color="black" />}
        bordered={false}
        options={dataType}
        disabled={false}
        placeholder={t("fund:create_chart.add_more")}
      />
    </div>
  );
};

export default CreatChartCompare;