import Page from "@components/Pagination";
import { Typography } from "@components/Typography";
import ItemContent from "@features/exploration/components/components/item-content";
import main from "@features/exploration/components/main.module.css";
import { explorationConfig } from "@features/exploration/exploration.config";
import { News } from "@features/home/home.type";
import { Menu } from "@features/layout/layout.type";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { I18nActiveNamespaces } from "types/i18n";

interface Props {
  newsData?: Array<News>;
  totalCount?: number;
  onPageChange?: (page: number, pageSize: number) => void;
  pagination?: {
    current: number;
    pageSize: number;
  };
  categoryMenuLevel3?: Array<Menu>;
}

import s from "./index.module.css";

export const Analysis: FC<Props> = ({
  newsData = [],
  totalCount,
  onPageChange,
  pagination,
  categoryMenuLevel3 = [],
}) => {
  const { t } = useTranslation<I18nActiveNamespaces<"common" | "exploration">>(
    explorationConfig.i18nNamespaces
  );
  const router = useRouter();

  return (
    <div className="m-10">
      <Typography
        className="font-semibold text-[20px] uppercase mb-[10px]"
        color="primary"
      >
        {t(`common:navbar-exploration.${router.query.category}` as any)}
      </Typography>
      <p className="text-[#000000] text-[14px] font-nomal">
        {t(`exploration:${router.query.category}.description` as any)}
      </p>
      <div className="analysis my-5">
        <div className={clsx()}>
          <div className={clsx(main["nav"], s["analysis-nav"])}>
            {categoryMenuLevel3.map((item, index: number) => {
              return (
                <li
                  key={index}
                  className={clsx({
                    isActive_Navbar: item.url?.includes(
                      router.query.subcategory as string
                    ),
                  })}
                >
                  <Link href={item.url as string}>
                    <a>{item.title}</a>
                  </Link>
                </li>
              );
            })}
          </div>
        </div>
        <div className={clsx(main["maincontent"])}>
          {newsData &&
            newsData.map((item) => {
              return <ItemContent key={item.id} news={item} />;
            })}
        </div>
        <div className="text-center my-10">
          {newsData.length > 0 && (
            <Page total={totalCount} onChange={onPageChange} {...pagination} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Analysis;
