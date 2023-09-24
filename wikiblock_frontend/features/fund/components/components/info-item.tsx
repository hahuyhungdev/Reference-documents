import { IconCalendar } from "@components/Icons";
import { Typography } from "@components/Typography";
import { explorationConfig } from "@features/exploration/exploration.config";
import clsx from "clsx";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { I18nActiveNamespaces } from "types/i18n";

import { dataColumAnalysis } from "../../data/analysis";
import main from "../main.module.css";

export const InfoItem: FC<dataColumAnalysis> = ({
    image_content,
    title,
    author,
    post_date,
    image_author,
    url
}) => {
    const { t } = useTranslation<I18nActiveNamespaces<"common" | "exploration">>(
        explorationConfig.i18nNamespaces
    )
    return (
        <div className={clsx(main["info-item"])}>
            {
                // eslint-disable-next-line @next/next/no-img-element
                image_author && <img className={clsx(main["custom-img"])} src={image_author} alt="news" />
            }
            <div className="author-datepost">
                {
                    author && <Typography className="text-[#000000] text-[14px] font-nomal">{author}</Typography>
                }
                {
                    post_date &&
                    <div className="flex gap-x-2 items-center">
                        <IconCalendar />
                        <Typography className="text-[#000000] text-[14px] font-nomal">
                            {post_date}</Typography>
                    </div>
                }
            </div>
        </div>
    )
}

export default InfoItem