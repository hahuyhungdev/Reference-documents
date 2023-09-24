import { Typography } from "@components/Typography";
import main from "@features/exploration/components/main.module.css";
import { dataColumAnalysis } from "@features/exploration/data/analysis";
import { explorationConfig } from "@features/exploration/exploration.config";
import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { I18nActiveNamespaces } from "types/i18n";

import InfoItem from "./info-item";

export const ItemContent: FC<dataColumAnalysis> = ({
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
        <Link
            href={url}
            passHref
        >
            <div className={clsx(main["card-articles"])}>
                <div>
                    <img src={image_content} alt="news" />
                </div>
                <div className={clsx(main["card-title"])}>
                    <Typography className={clsx(main["card-title-text"])}>
                        {title}
                    </Typography>
                    <InfoItem title={title} url={url} author={author}
                        post_date={post_date} image_author={image_author} />
                </div>
            </div>
        </Link>
    )
}

export default ItemContent