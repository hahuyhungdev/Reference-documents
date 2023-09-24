import { Button } from "@components";
import IconReset from "@components/Icons/IconReset";
import { EVENTS_PARAMS } from "@features/events/events.type";
import { useCheckMobileScreen } from "@hooks";
import { Drawer } from "antd";
import { FC } from "react";

import EventFilterSection, { coinFiltersLeft, coinFiltersRight } from "..";

interface Props {
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  params: EVENTS_PARAMS;
  onChangeParams?: (params: EVENTS_PARAMS) => void;
}

const filterHeadingClass =
  "text-[14px] font-medium opacity-[0.9] text-gray-900 cursor-default";

export const EventFilterSectionMobile: FC<Props> = ({
  isShow,
  setIsShow,
  params,
  onChangeParams,
}) => {
  const { isMobileScreen, windowDimensions } = useCheckMobileScreen();
  return (
    <Drawer
      placement={"right"}
      closable={true}
      onClose={() => setIsShow(false)}
      visible={isShow && windowDimensions.width <= 767}
      key={"right"}
      bodyStyle={{ paddingLeft: "25px", paddingRight: "25px" }}
      width={isMobileScreen ? "70%" : "50%"}
      className="hidden md:block relative overflow-hidden"
    >
      <EventFilterSection
        isShow
        setIsShow={setIsShow}
        disableOpacity
        params={params}
        onChangeParams={onChangeParams}
      />
    </Drawer>
  );
};
