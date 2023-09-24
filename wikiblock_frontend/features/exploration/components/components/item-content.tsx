/* eslint-disable @next/next/no-img-element */
import { Typography } from "@components/Typography";
import main from "@features/exploration/components/main.module.css";
import { dataColumAnalysis } from "@features/exploration/data/analysis";
import { explorationConfig } from "@features/exploration/exploration.config";
import { News } from "@features/home/home.type";
import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { I18nActiveNamespaces } from "types/i18n";

import InfoItem from "./info-item";

interface Props {
  news: News;
}

export const ItemContent: FC<Props> = ({ news }) => {
  const { t } = useTranslation<I18nActiveNamespaces<"common" | "exploration">>(
    explorationConfig.i18nNamespaces
  );
  return (
    <Link href={`/news/${news.slug}`}>
      <a>
        <div className={clsx(main["card-articles"])}>
          <div>
            <img src={news.photos && news.photos[0]} alt="news" />
          </div>
          <div className={clsx(main["card-title"])}>
            <Typography className={clsx(main["card-title-text"], "px-3")}>
              {news.title}
            </Typography>
            <InfoItem news={news} />
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ItemContent;
