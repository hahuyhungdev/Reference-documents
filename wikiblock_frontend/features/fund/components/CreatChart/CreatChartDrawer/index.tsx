import { fundConfig } from "@features/fund/fund.config";
import { useCheckMobileScreen } from "@hooks";
import { Drawer } from "antd";
import { FC } from "react";
import { useTranslation } from "react-i18next";

import ChartFilterSection from "../CreatChartSection";

interface Props {
  show: boolean;
  onClose: () => void;
}

const ChartFilterDrawer: FC<Props> = ({ show, onClose }) => {
  const { t } = useTranslation(fundConfig.i18nNamespaces);
  return (
    <Drawer
      placement={"left"}
      closable={true}
      onClose={() => onClose()}
      visible={show}
      title={
        <h1 className="text-base">
          {t("fund:create_chart.create_a_new_chart")}
        </h1>
      }
      key={"left"}
      bodyStyle={{ paddingTop: "0px", paddingLeft: "10px", paddingRight: "10px" }}
      // width={windowDimensions.width < 500 ? "75%" : "60%"}
      width={"80%"}
    >
      <ChartFilterSection show={show} onClose={onClose} />
    </Drawer>
  );
};

export default ChartFilterDrawer;
