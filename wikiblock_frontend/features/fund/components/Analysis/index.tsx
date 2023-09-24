import { Percentage } from "@components/ChartJs/Percentage";
import { Typography } from "@components/Typography";
import { fundConfig } from "@features/fund/fund.config";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { I18nActiveNamespaces } from "types/i18n";

export const Analysis = () => {
    const { t } = useTranslation<I18nActiveNamespaces<"common" | "fund">>(
        fundConfig.i18nNamespaces
    )
    const router = useRouter();
    return (
        <div className="m-10">
            <Typography className="font-semibold text-[20px] uppercase mb-[10px]" color="primary">
                {t("common:navbar-exploration.analysis")}
            </Typography>
            <p className="text-[#000000] text-[14px] font-nomal">
                {t("common:navbar-exploration.analysis")}
            </p>
            <div className="my-10">
                <Percentage />
            </div>
        </div>
    )
}

export default Analysis