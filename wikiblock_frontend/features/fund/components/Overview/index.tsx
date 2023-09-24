import { Button } from "@components";
import { IconOpen } from "@components/Icons";
import { SearchSelect } from "@components/Input/SearchSelect";
import { InvestmentFund } from "@components/Table";
import { Typography } from "@components/Typography";
import { fundConfig } from "@features/fund/fund.config";
import { isWidthSidebarSelector } from "@features/layout/common.selector";
import { setIsWidthSidebar } from "@features/layout/common.slice";
import { useCheckMobileScreen } from "@hooks";
import { useAppDispatch, useAppSelector } from "@hooks/app";
import clsx from "clsx";
import router from "next/router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BiFilterAlt } from "react-icons/bi";
import { I18nActiveNamespaces } from "types/i18n";

import FundFilterDrawer from "../FundFilter/FundFilterDrawer";
import FundFilterSection from "../FundFilter/FundFilterSection";
import s from "./index.module.css";
const dataWeb = [
    {
        title: "web3",
        url: "web3",
    },
    {
        title: "web3",
        url: "web3",
    },
    {
        title: "gameFi",
        url: "gameFi",
    }
]
const dataTiers = [
    {
        title: "Tier 1",
        url: "Tier1",
    },
    {
        title: "Tier 2",
        url: "Tier2",
    },
    {
        title: "Tier 3",
        url: "Tier3",
    }
]

export const Overview = () => {
    const { t } = useTranslation<I18nActiveNamespaces<"common" | "fund">>(
        fundConfig.i18nNamespaces
    )
    const dispatch = useAppDispatch()
    const isWidthSidebar = useAppSelector(isWidthSidebarSelector)
    const [isShowFilter, setIsShowFilter] = useState(false);
    const [highlightIcon, setHighlightIcon] = useState(false);
    const { windowDimensions } = useCheckMobileScreen();
    const { pathname, asPath, query } = router;
    const handleClickShowSidebar = () => {
        dispatch(setIsWidthSidebar(!isWidthSidebar));
    }
    const dataFilterOption = [
        {
            value: "web3",
            label: "Web3",
        },
        {
            value: "web1",
            label: "Web1",
        },
        {
            value: "bitcoin",
            label: "Bitcoin",
        },
        {
            value: "ethereum",
            label: "Ethereum",
        }
    ]
    return (
        <div className="m-6">
            <div className="flex gap-x-2 mb-[10px]">
                {
                    !isWidthSidebar &&
                    <Button onClick={handleClickShowSidebar} className=" active:bg-[#E5E7EE]" >
                        <IconOpen />
                    </Button>
                }
                <Typography className="font-semibold text-[20px] uppercase" color="primary">
                    {t("fund:overview.overview_of_funds")}
                </Typography>
            </div>
            <p className="text-[#000000] text-[14px] font-nomal">
                {t("fund:overview.description")}
            </p>
            <div className="my-5">
                {/* research, filter and update flow trend   */}
                <div className={clsx(s["research-trend"])}>
                    <div className={clsx(s["research"])}>
                        <SearchSelect options={dataFilterOption} placeholder={t("fund:menu.search_fund")}
                            className="w-[100px] sm:mb-[10px] h-[40px]"
                        />
                        <div className="relative">
                            <Button
                                className={clsx(
                                    "bg-[#EFF0F4] h-[40px] px-[12px] py-[6px] hover:bg-[#F4AC20] text-black hover:text-white transition-all"
                                )}
                                onClick={() => setIsShowFilter(true)}
                                onMouseEnter={() => setHighlightIcon(true)}
                                onMouseLeave={() => setHighlightIcon(false)}
                            >
                                <div className="w-full flex items-center gap-x-[15px]">
                                    <span className="text-[14px]">{t("fund:filter.filter")}</span>
                                    <div>
                                        {/* <IconFilterNoBackground
                                            stroke={highlightIcon ? "#fff" : undefined}
                                        /> */}
                                        <BiFilterAlt
                                            className={highlightIcon ? "text-white" : "text-black"}
                                        />
                                    </div>
                                </div>
                            </Button>
                            {windowDimensions.width >= 550 ? (
                                <FundFilterSection
                                    show={isShowFilter}
                                    onClose={() => {
                                        setIsShowFilter(false);
                                    }}
                                />
                            ) : (
                                <FundFilterDrawer
                                    show={isShowFilter}
                                    onClose={() => {
                                        setIsShowFilter(false);
                                    }}
                                />
                            )}
                        </div>
                    </div>
                    <div className={clsx(s["trend"])}>
                        <div className="h-full text-sm sm:justify-around flex items-center gap-[13px]">
                            {dataWeb.map((item: any, index: number) => (
                                <Button
                                    onClick={() => {
                                        router.push(`${router.pathname}?${item.url}`)
                                    }}
                                    key={index}
                                    className="bg-[#EFF0F4] h-[40px] w-[70px] sm:truncate px-[15px] not-italic font-normal sm:col-span-1 "
                                >
                                    <a className="text-[#010000] sm:truncate">{item.title}</a>
                                </Button>
                            ))}
                        </div>
                        <div className="h-full sm:justify-around flex items-center gap-[13px]">
                            {dataTiers.map((item: any, index: number) => (

                                <Button
                                    onClick={() => {
                                        router.push(`${router.pathname}?${item.url}`)
                                    }}
                                    key={index}
                                    className="bg-[#EFF0F4] text-sm h-[40px] w-[70px] sm:truncate px-[10px] not-italic font-normal sm:col-span-1 "
                                >
                                    <a className="text-[#010000] sm:truncate">{item.title}</a>
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
                {/* end research, filter and update flow trend   */}
                <InvestmentFund />
            </div>

        </div>
    )
}

export default Overview