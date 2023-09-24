import { Typography } from "@components/Typography";
import ItemContent from "@features/exploration/components/components/item-content";
import main from "@features/exploration/components/main.module.css";
import { menuAnalysis } from "@features/exploration/data/analysis";
import { explorationConfig } from "@features/exploration/exploration.config";
import clsx from "clsx";
import { omit } from "lodash";
import Link from "next/link";
import router from "next/router";
import { useTranslation } from "react-i18next";
import { I18nActiveNamespaces } from "types/i18n";

import s from "./index.module.css";
export const Academy = () => {
    const { t } = useTranslation<I18nActiveNamespaces<"common" | "exploration">>(
        explorationConfig.i18nNamespaces
    )
    return (
        <div className="m-10">
            <Typography className="font-semibold text-[20px] uppercase mb-[10px]" color="primary">
                {t(`common:navbar-exploration.${router.query.category}` as any)}
            </Typography>
            <p className="text-[#000000] text-[14px] font-nomal">
                {t(`exploration:${router.query.category}.description` as any)}
            </p>
        </div>
    )
}

export default Academy