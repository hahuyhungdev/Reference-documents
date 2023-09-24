import { BasicBar } from "@components/ChartJs";
import { Typography } from "@components/Typography";
import { dataTier, dataType } from "@features/fund/data/overview";
import { useGetSidebarItems } from "@features/fund/data/sidebar";
import { fundConfig } from "@features/fund/fund.config";
import { CategoryItem } from "@features/fund/page/createChart.page";
import { isWidthSidebarSelector } from "@features/layout/common.selector";
import { setIsWidthSidebar } from "@features/layout/common.slice";
import { useAppDispatch, useAppSelector } from "@hooks/app";
import { useCheckMobileScreen } from "@hooks/useCheckMobileScreen";
import { useRouter } from "next/router";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineExport, AiOutlineFullscreenExit } from "react-icons/ai";
import { BiExpand } from "react-icons/bi";
import { BsShareFill } from "react-icons/bs";
import { I18nActiveNamespaces } from "types/i18n";

type TopFundsProps = {
    namePage: string;
    description: string;
}

export const TopFunds: FC<TopFundsProps> = ({
    namePage,
    description,
}) => {
    const { t } = useTranslation<I18nActiveNamespaces<"common" | "fund">>(
        fundConfig.i18nNamespaces
    )
    type selectValueProps = {
        label: string;
        data: Array<{
            label: string;
            value: string;
        }>
    }
    const selectValue: Array<selectValueProps> = [
        {
            label: t("fund:filter.type"),
            data: dataType
        },
        {
            label: t("fund:filter.category"),
            data: dataType
        },
        {
            label: t("fund:filter.tier"),
            data: dataTier
        },
        {
            label: t("fund:filter.top"),
            data: dataType
        }
    ]
    const router = useRouter();
    const dispatch = useAppDispatch()
    const isWidthSidebar = useAppSelector(isWidthSidebarSelector)
    const handleClickShowSidebar = () => {
        dispatch(setIsWidthSidebar(!isWidthSidebar));
    }
    const { windowDimensions } = useCheckMobileScreen();
    const { dataFund } = useGetSidebarItems();
    const titlePage = dataFund?.find(item => item.url.includes("/fund/analysis"))?.children?.find(item => item.url === router.asPath)?.title
    return (
        <div className="mt-5">
            <div className="flex justify-between items-center sm:flex-col">
                <div>  <Typography className="font-semibold text-[20px] uppercase mb-[10px]" color="primary">
                    {namePage}
                </Typography>
                    <p className="text-[#000000] text-[14px] font-nomal">
                        {description}
                    </p>
                </div>
                <div className="flex gap-x-6 sm:mt-4">
                    <div className="flex gap-x-2 cursor-pointer">
                        <AiOutlineExport size={25} />
                        <h3 className="opacity-50">
                            {t("fund:create_chart.export")}
                        </h3>
                    </div>
                    <div className="flex gap-x-2 cursor-pointer">
                        <BsShareFill size={25} />
                        <h3>
                            {t("fund:create_chart.share")}
                        </h3>
                    </div>
                    <div className="flex gap-x-2 cursor-pointer" onClick={handleClickShowSidebar} >
                        {isWidthSidebar ?
                            (<>
                                <BiExpand size={25} />
                                <h3>
                                    {t("fund:create_chart.full")}
                                </h3></>) :
                            (
                                <>
                                    <AiOutlineFullscreenExit size={25} />
                                    <h3>
                                        {t("fund:create_chart.exit")}
                                    </h3></>)}
                    </div>
                </div>
            </div>
            <div className="analysis my-5">
                {/* <div className="flex max-w-[55%] sm:max-w-full bg-[#EFF0F4] justify-around mb-2 rounded-[30px]">
                    {
                        windowDimensions.width > 639 ? (
                            <>
                                <CategoryItem label={selectValue[0].label} data={selectValue[0].data} />
                                <CategoryItem label={selectValue[1].label} data={selectValue[1].data} />
                                <CategoryItem label={selectValue[2].label} data={selectValue[2].data} />
                                <CategoryItem label={selectValue[3].label} data={selectValue[3].data} />
                            </>
                        ) : (
                            <>
                                {selectValue.slice(0, 4).map((item, index) => (
                                    <CategoryItem key={index} label={item.label} data={item.data} />
                                ))}
                            </>
                        )
                    }
                </div> */}
                {
                    windowDimensions.width > 639 ? (
                        <div className="flex max-w-[55%] sm:max-w-full bg-[#EFF0F4] justify-around mb-2 rounded-[30px]">
                            {
                                selectValue.map((item, index) => (
                                    <CategoryItem key={index} label={item.label} data={item.data} />
                                ))
                            }
                        </div>
                    ) : (
                        <div>
                            <div className="flex max-w-full bg-[#EFF0F4] justify-around mb-2 rounded-[30px]">
                                <CategoryItem label={selectValue[0].label} data={selectValue[0].data} />
                                <CategoryItem label={selectValue[1].label} data={selectValue[1].data} />
                            </div>
                            <div className="flex max-w-full bg-[#EFF0F4] justify-around mb-2 rounded-[30px]">
                                <CategoryItem label={selectValue[2].label} data={selectValue[2].data} />
                                <CategoryItem label={selectValue[3].label} data={selectValue[3].data} />
                            </div>
                        </div>
                    )
                }

                <div className="mt-5">
                    <BasicBar />
                </div>
            </div>
        </div >
    )
}

export default TopFunds