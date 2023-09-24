import { IconCalendar } from "@components/Icons";
import { Typography } from "@components/Typography";
import { News } from "@features/home/home.type";
import clsx from "clsx";
import dayjs from "dayjs";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { I18nActiveNamespaces } from "types/i18n";

import { dataColumAnalysis } from "../../data/analysis";
import { explorationConfig } from "../../exploration.config";
import main from "../main.module.css";

interface Props {
  news: News;
}

export const InfoItem: FC<Props> = ({ news }) => {
  const { t } = useTranslation<I18nActiveNamespaces<"common" | "exploration">>(
    explorationConfig.i18nNamespaces
  );
  return (
    <div className={clsx(main["info-item"], "px-3")}>
      {/* {image_author && (
        <img
          className={clsx(main["custom-img"])}
          src={image_author}
          alt="news"
        />
      )} */}
      <div className="author-datepost">
        {news.author && (
          <Typography className="text-[#000000] text-[14px] font-normal">
            <h3>
              {news.author.full_name}
            </h3>
          </Typography>
        )}
        {news.created_at && (
          <div className="flex gap-x-2 items-center">
            <IconCalendar />
            <Typography className="text-[#000000] text-[14px] font-nomal">
              <h3 className="font-[400]">
                {dayjs(news.created_at).format("DD/MM/YYYY")}
              </h3>
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoItem;
