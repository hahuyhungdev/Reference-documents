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

export const ItemArticles: FC<dataColumAnalysis> = ({
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
                <div className={clsx(main["item-articles"])}>
                    <h3>What is cryptocurrency?</h3>
                    <p>Learn what cryptocurrency is, what you can do with it  why it has value. Learn about Bitcoin  sound money.</p>
                </div>
                <div className="item-content my-2 px-3">
                    <Typography className="font-semibold text-[16px] h-[48px] overflow-hidden text-ellipsis">
                        {title}
                    </Typography>
                    <InfoItem title={title} url={url} author={author}
                        post_date={post_date} image_author={image_author} />

                </div>
            </div>
        </Link>
    )
}

export default ItemArticles