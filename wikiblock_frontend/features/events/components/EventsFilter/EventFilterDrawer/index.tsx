import { EVENTS_PARAMS } from "@features/events/events.type";
import { useCheckMobileScreen } from "@hooks";
import { Drawer, Menu } from "antd";
import clsx from "clsx";
import React, { FC } from "react";

import { Filter } from "..";

interface Props {
  show: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;

  items: Array<Filter>;
  params: EVENTS_PARAMS;
  onChange: (e: Filter) => void;
}

const EventFilterDrawer: FC<Props> = ({
  show,
  setIsShow,
  items,
  params,
  onChange,
}) => {
  const { isMobileScreen, windowDimensions } = useCheckMobileScreen();

  const getItem = (item: Filter, index: number) => {
    return {
      label: (
        <div onClick={() => onChange(item)}>
          <div>
            <span
              className={clsx(
                "text-[14px] font-medium opacity-[0.85] hover:text-btn-primary transition-all cursor-pointer whitespace-nowrap",
                {
                  "text-btn-primary":
                    (!params.category && index === 0) ||
                    params.category === item.value,
                }
              )}
            >
              {item.label}
            </span>
          </div>
        </div>
      ),
      key: item.label,
      type: "link",
    };
  };

  const menus = items.map((item, index) => getItem(item, index));
  return (
    <Drawer
      placement={"left"}
      closable={true}
      onClose={() => setIsShow(false)}
      visible={show && windowDimensions.width <= 1023}
      key={"left"}
      bodyStyle={{ paddingLeft: "0", paddingRight: "0" }}
      width={isMobileScreen ? "70%" : "40%"}
      className="hidden lg:block"
    >
      <Menu items={menus} style={{ border: "none" }} mode="inline" />
    </Drawer>
  );
};

export default EventFilterDrawer;
