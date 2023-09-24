import { Typography } from "@components/Typography";
import main from "@features/exploration/components/main.module.css";
import { explorationConfig } from "@features/exploration/exploration.config";
import { useGetNavigation } from "@features/exploration/hooks/navigation";
import { ulList } from "@features/home/components/ImportantNews";
import NewsDetail from "@features/news/components/NewDetail/newsDetail";
import clsx from "clsx";
import Link from "next/link";
import router from "next/router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineHeart } from "react-icons/ai"
import { BsBookmark } from "react-icons/bs"
import { IoShareOutline } from "react-icons/io5"
import { I18nActiveNamespaces } from "types/i18n";

import s from "../index.module.css";
export const DetailExperience = () => {
  const { t } = useTranslation<I18nActiveNamespaces<"common" | "exploration">>(
    explorationConfig.i18nNamespaces
  );
  const { navigationExperience } = useGetNavigation();
  const [isLove, setIsLove] = useState(false);
  return (
    <div className="m-10">
      <div className="nav">
        <Typography className="font-semibold text-[20px] uppercase mb-[10px]" color="primary">
          {t("common:navbar-exploration.experience")}
        </Typography>
        <p className="text-[#000000] text-[14px] font-nomal">
          {t("exploration:experience.description")}
        </p>
        <div className="my-5">
          <div className={clsx(main["contain-nav"])}>
            <div className={clsx(main["nav"], s["nav-item"])}>
              {
                navigationExperience.map((item, index) => {
                  return (
                    <li key={index}
                      className={clsx({ "isActive_Navbar": item.url?.includes(router.query.category as string) })}>

                      <Link href={item.url}>
                        <a>{item.title}</a>
                      </Link>
                    </li>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      <div className={clsx(s["maincontent"])}>
        <div className={clsx(s["content"])}>blala</div>
        <div className={clsx(s["tab-content"])}>
          <div className="p-2 float-right sticky z-10 top-[64px]"><div className={clsx(s["tool"])}>
            <AiOutlineHeart
              className="cursor-pointer"
              onClick={() => {
                setIsLove(true)
                console.log(!isLove)
              }}
              stroke={
                isLove ? "#f4ac20" : "#000000"
              } size={25} style={{ color: "#f4ac20" }} />
            <IoShareOutline size={25} />
            <BsBookmark size={22} />
          </div>
            <div className={clsx(s["list-category"])}>
              <Typography className="font-semibold text-[20px] uppercase mb-[10px]" color="primary">
                {t("common:navbar-exploration.experience")}
              </Typography>
              <div className="flex gap-1">
                <h3>
                  Cách 1:
                </h3>
                <h3>
                  vxxxx
                </h3>
              </div>
              <h3 className="mt-2">
                Lưu ý đối tượng hold coin
              </h3>
            </div>

            <div className={clsx(s["articles"])}>
              <h2 className="font-bold text-[#ADADAD] text-[20px] leading-4">
                RELATED ARTICLES
              </h2>
              <ul className="my-3 md:grid md:grid-cols-6 sm:block p-1">
                {ulList.map((item, index) => {
                  return (
                    <li key={index} className="md:col-span-3 my-1">
                      <Typography className="not-italic font-[600] text-sm md:text-base leading-4 text-[#343434]">
                        {item.title}
                      </Typography>
                      <p className="text-[12px] text-[#A0A0A0] font-nomal">
                        {item.time}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
};
