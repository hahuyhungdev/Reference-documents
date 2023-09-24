import { SEOHead, SEOHeadProps } from "@components";
import { Menu } from "@features/layout/layout.type";
import { useAppDispatch, useAppSelector } from "@hooks/app";
import clsx from "clsx";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";

import { isWidthSidebarSelector } from "../common.selector";
import { setIsWidthSidebar } from "../common.slice";
import s from "./defaultlayout.module.css";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { NavBar } from "./NavBar";
import { Sidebar, SidebarDrawer } from "./Sidebar";

export type LayoutProps = {
  headProps?: SEOHeadProps;
  hideFooter?: boolean;
  loading?: boolean;
  withSidebar?: boolean;
  includeProgressBar?: boolean;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  dataSidebar?: Array<Menu>;
};
export const SidebarLayoutContext = React.createContext({});
export const DefaultLayout: FC<LayoutProps> = ({
  headProps,
  children,
  dataSidebar,
  withSidebar,
  includeProgressBar = false,
  searchValue,
  onSearchChange,
}) => {
  const [isShowSidebarDrawer, setIsShowSidebarDrawer] = useState(false);
  const isWidthSidebar = useAppSelector(isWidthSidebarSelector);
  const router = useRouter();
  const dispatch = useAppDispatch();

  // handle onClick show sidebar
  const handleClickShowSidebar = () => {
    dispatch(setIsWidthSidebar(!isWidthSidebar));
  };
  return (
    <div>
      <SEOHead {...headProps} />
      <Header />
      <NavBar
        searchValue={searchValue}
        onSearchChange={onSearchChange}
        includeProgressBar={includeProgressBar}
      />
      <div className="mx-auto h-full max-w-[1440px] xl:max-w-[1280px] px-[20px]">
        {isWidthSidebar && withSidebar ? (
          <>
            <div className={clsx("grid grid-cols-5 main-layout")}>
              <div
                className={clsx("col-span-1", s["custom_sidebar"], {
                  isPageExperience: router.pathname.includes(
                    "experience/[category]/[slug]"
                  ),
                })}
              >
                <Sidebar
                  onClick={handleClickShowSidebar}
                  dataSidebar={dataSidebar as any}
                />
              </div>
              <div
                className={clsx("maincontent", {
                  "ismaincontent-PageExperience": router.pathname.includes(
                    "experience/[category]/[slug]"
                  ),
                })}
              >
                {children}
              </div>
            </div>
          </>
        ) : (
          <div className="lg:px-[5px]">{children}</div>
        )}
        {isWidthSidebar && withSidebar && (
          <SidebarDrawer
            isShow={isShowSidebarDrawer}
            setIsShow={setIsShowSidebarDrawer}
          />
        )}
      </div>
      <Footer />
    </div>
  );
};
export default DefaultLayout;
