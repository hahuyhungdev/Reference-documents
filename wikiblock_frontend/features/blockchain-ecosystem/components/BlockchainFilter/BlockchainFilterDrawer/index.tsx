import { useCheckMobileScreen } from "@hooks";
import { Drawer } from "antd";
import React, { FC } from "react";

import BlockchainFilterSection from "../BlockchainFilterSection";

interface Props {
  show: boolean;
  onClose: () => void;
}

const BlockchainFilterDrawer: FC<Props> = ({ show, onClose }) => {
  const { isMobileScreen, windowDimensions } = useCheckMobileScreen();
  return (
    <Drawer
      placement={"right"}
      closable={true}
      onClose={() => onClose()}
      visible={show && windowDimensions.width <= 549}
      key={"right"}
      bodyStyle={{ paddingLeft: "0", paddingRight: "0" }}
      width={windowDimensions.width < 500 ? "75%" : "60%"}
    >
      <BlockchainFilterSection show={show} onClose={onClose} isMobile />
    </Drawer>
  );
};

export default BlockchainFilterDrawer;
