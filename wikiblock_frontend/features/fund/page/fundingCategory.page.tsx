import { Percentage } from "@components/ChartJs/Percentage";
import { Typography } from "@components/Typography";
import { isWidthSidebarSelector } from "@features/layout/common.selector";
import { setIsWidthSidebar } from "@features/layout/common.slice";
import DefaultLayout from "@features/layout/components/DefaultLayout";
import { useAppDispatch, useAppSelector } from "@hooks/app";
import { useTranslation } from "react-i18next";
import { AiOutlineExport, AiOutlineFullscreenExit } from "react-icons/ai";
import { BiExpand } from "react-icons/bi";
import { BsShareFill } from "react-icons/bs";
import { I18nActiveNamespaces } from "types/i18n";

import { useGetSidebarItems } from "../data/sidebar";
import { fundConfig } from "../fund.config";


const FundingCategoryPage = () => {
  const { dataFund } = useGetSidebarItems();
  const dispatch = useAppDispatch()
  const isWidthSidebar = useAppSelector(isWidthSidebarSelector)
  const handleClickShowSidebar = () => {
    dispatch(setIsWidthSidebar(!isWidthSidebar));
  }
  const { t } = useTranslation<I18nActiveNamespaces<"common" | "fund">>(
    fundConfig.i18nNamespaces
  )
  return (
    <DefaultLayout withSidebar dataSidebar={dataFund as any}>
      <div className="mt-5">
        <div className="flex justify-between items-center sm:flex-col">
          <div>  <Typography className="font-semibold text-[20px] uppercase mb-[10px]" color="primary">
            {t("fund:menu.funding_by_category")}
          </Typography>
            <p className="text-[#000000] text-[14px] font-nomal">
              Số liệu được tổng hợp và cập nhật liên tục bởi abcxyz
            </p>
          </div>
          <div className="flex gap-x-6 sm:mt-4">
            <div className="flex gap-x-2 cursor-pointer">
              <AiOutlineExport size={25} />
              <h3 className="opacity-50">
                Export
              </h3>
            </div>
            <div className="flex gap-x-2 cursor-pointer">
              <BsShareFill size={25} />
              <h3>
                Share
              </h3>
            </div>
            <div className="flex gap-x-2 cursor-pointer" onClick={handleClickShowSidebar} >
              {isWidthSidebar ?
                (<>
                  <BiExpand size={25} />
                  <h3>
                    Full
                  </h3></>) :
                (
                  <>
                    <AiOutlineFullscreenExit size={25} />
                    <h3>
                      EXIT
                    </h3></>)}
            </div>
          </div>

        </div>
        <div className="my-10">
          <Percentage />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default FundingCategoryPage;
