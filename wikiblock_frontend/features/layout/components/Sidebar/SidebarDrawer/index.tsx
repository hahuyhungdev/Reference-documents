import { useGetSidebarItems } from "@features/layout/hooks";
import { useCheckMobileScreen } from "@hooks";
import { Drawer, Menu } from "antd";
import React, { FC } from "react";

interface Props {
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SidebarDrawer: FC<Props> = ({ isShow, setIsShow }) => {
  const { isMobileScreen, windowDimensions } = useCheckMobileScreen();
  const { menus } = useGetSidebarItems();
  const getItem = (item: any) => {
    if (!item.children) {
      return {
        label: (
          //   <Link href={item.url} passHref>
          <div>
            <span>{item.title}</span>
          </div>
          //   </Link>
        ),
        key: item.title,
        type: "link",
      };
    } else {
      return {
        label: item.title,
        key: item.title,
        children: item.children.map((item: any) => getItem(item)),
        type: "sub",
      };
    }
  };
  const items = menus.map((item: any) => getItem(item));
  return (
    <Drawer
      placement={"right"}
      closable={true}
      onClose={() => setIsShow(false)}
      visible={isShow && windowDimensions.width <= 767}
      key={"right"}
      bodyStyle={{ paddingLeft: "0", paddingRight: "0" }}
      width={windowDimensions.width <= 767 ? "70%" : "40%"}
    >
      <Menu items={items} mode="inline" style={{ border: "none" }} />
    </Drawer>
  );
};
