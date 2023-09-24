import { useGetCommonItems } from "@features/fund/data/common";
import { fundConfig } from "@features/fund/fund.config";
import { setisShowChart } from "@features/layout/common.slice";
import { Drawer } from "antd";
import type { SliderMarks } from "antd/es/slider";
import { useRouter } from "next/router";
import { FC, useRef } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";

import ChartFilterSection from "../CreatChartSection";

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
const CreatChartDesktop: FC<Props> = ({
  show,
  onClose,
  isMobile = false,
}) => {
  const { t } = useTranslation(fundConfig.i18nNamespaces);
  return (
    <Drawer
      placement={"left"}
      visible={show}
      closable={false}
      title={
        <h1 className="text-base">
          {t("fund:create_chart.create_a_new_chart")}
        </h1>
      }
      key={"left"}
      bodyStyle={{ paddingTop: "0px", paddingLeft: "10px", paddingRight: "10px" }}
      extra={
        <AiOutlineClose size={20} onClick={onClose} className="cursor-pointer" />
      }
      width={"25%"}
    >
      <ChartFilterSection show={show} onClose={onClose} />
    </Drawer>
  );
};

export default CreatChartDesktop;
