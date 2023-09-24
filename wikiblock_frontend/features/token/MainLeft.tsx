import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { I18nActiveNamespaces } from "types/i18n";

import { Sidebar } from "./components";
import { SidebarContext } from "./page/token.page";
import { tokenConfig } from "./token.config";
import s from "./token.module.css";

export const MainLeft = () => {
  const { t } = useTranslation<
    I18nActiveNamespaces<"common" | "home" | "token">
  >(tokenConfig.i18nNamespaces);
  const menuItems = [
    {
      key: "overview",
      title: t("token:menu_item.over_view"),
      url: "/assets/uniswap#overview",
    },
    {
      key: "profile",
      title: t("token:menu_item.profile"),
      url: "/assets/uniswap#profile",
    },
    {
      key: "anylytis",
      title: t("token:menu_item.analytics"),
      url: "/assets/uniswap#anylytis",
    },
    {
      key: "networkSignals",
      title: t("token:menu_item.network_signals"),
      url: "/assets/uniswap#networkSignals",
    },
    {
      key: "compare",
      title: t("token:menu_item.compare"),
      url: "/assets/uniswap#compare",
    },
    {
      key: "howtobuy",
      title: t("token:menu_item.how_to_buy"),
      url: "/assets/uniswap#howtobuy",
    },
  ];
  return (
    <SidebarContext.Consumer>
      {({ selected }) => {
        return (
          <div
            className={clsx(
              "main-layout",
              s["menuleft"]
            )}
          >
            {menuItems.map((item) => {
              return (
                <Sidebar
                  key={item.key}
                  url={item.url}
                  title={item.title}
                  isBackground={item.key === selected}
                />
              );
            })}
          </div>
        );
      }}
    </SidebarContext.Consumer>
  );
};
