import { Typography } from "@components/Typography";
import { fundConfig } from "@features/fund/fund.config";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { I18nActiveNamespaces } from "types/i18n";

export const Category = () => {
    const { t } = useTranslation<I18nActiveNamespaces<"common" | "fund">>(
        fundConfig.i18nNamespaces
    )
    const router = useRouter();
    return (
        <div className="mt-5">
            <Typography className="font-semibold text-[20px] uppercase mb-[10px]" color="primary">
                Category
            </Typography>
            <p className="text-[#000000] text-[14px] font-nomal">
                Category
            </p>
            <div className="analysis my-5">

            </div>

        </div>
    )
}

export default Category