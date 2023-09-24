import { CopyToClipboard } from "@components/CopyToClipboard";
import { IconLink } from "@components/Icons/IconLink";
import { Typography } from "@components/Typography";
import clsx from "clsx";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineMedium, AiOutlineTwitter } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { IoIosPaperPlane } from "react-icons/io";
import { MdRssFeed } from "react-icons/md";
import { I18nActiveNamespaces } from "types/i18n";

import { tokenConfig } from "./token.config";

export type Prop = {
  title?: string;
  icons?: JSX.Element[];
  description?: string;
  color?: string;
  showAds?: boolean;
};
const ulList = [
  {
    icons: <AiOutlineTwitter key={"icon-twitter"} />,
    description: "@solana",
  },
  {
    icons: <AiOutlineMedium key={"icon-medium"} />,
    description: "Medium.com/solana-labs",
  },
  {
    icons: <MdRssFeed key={"icon-feed"} />,
    description: "Forums.solana.com",
  },
  {
    icons: <IoIosPaperPlane key={"icon-plane"} />,
    description: "t.me/solanaio",
  },
  {
    icons: <BsDiscord key={"icon-discord"} />,
    description: " Discord",
  },
];
const myNews = [
  {
    title: "Uniswap launches website integration in web 3 domination bid",
    time: "2 months ago - 2 min read",
  },
  {
    title: "Uniswap launches website integration in web 3 domination bid",
    time: "2 months ago - 2 min read",
  },
];

export const MainRight: React.FC<Prop> = ({ children }) => {
  const { t } = useTranslation<
    I18nActiveNamespaces<"common" | "home" | "token">
  >(tokenConfig.i18nNamespaces);
  const MyUniMarketStatsList = [
    {
      title: "PRICE",
      number: "$5.11133",
      color: "#000000",
    },
    {
      title: t("token:market_stats.one_hour_change"),
      number: "+0.61%",
      color: "#2DCBA2",
    },
    {
      title: t("token:market_stats.hour_change_24"),
      number: "-3.46%",
      color: "#DE1826",
    },
    {
      title: t("token:market_stats.change_7day"),
      number: "-8.58%",
      color: "#DE1826",
    },
    {
      title: t("token:market_stats.month_change"),
      number: "-26.75%",
      color: "#DE1826",
    },
    {
      title: t("token:market_stats.year_change"),
      number: "-78.1%",
      color: "#DE1826",
    },
    {
      title: t("token:market_stats.all_time_high"),
      number: "$45.0125",
    },
    {
      title: t("token:market_stats.from_ath"),
      number: "-89%",
    },
    {
      title: t("token:market_stats.ath_date"),
      number: "May 3, 2021",
    },
  ];
  const MybuttonUni = [
    {
      name: t("token:asset_resources.whitepaper"),
      icon: [<IconLink key={"icon-link"} />],
    },
    {
      name: "Uniswap.org/",
      icon: [<IconLink key={"icon-link"} />],
    },
  ];
  const MybuttonCommunity = [
    {
      name: "Community",
      icons: [
        <FiChevronDown key={"icon-fichevrondown"} />,
        <FiChevronUp key={"icon-fichevronup"} />,
      ],
    },
  ];
  const [openCom, setOpenCom] = React.useState(true);

  const handleClickCom = () => {
    setOpenCom(!openCom);
  };
  const [openEx, setOpenEx] = React.useState(true);

  const handleClickEx = () => {
    setOpenEx(!openEx);
  };

  return (
    <div className="float-right sticky z-10 top-[64px]">
      <Typography
        key="uni_market_stats"
        color="primary"
        size="medium"
        className="font-semibold pb-5"
      >
        UNI MARKET STATS
      </Typography>
      {MyUniMarketStatsList.map((item, index) => {
        return (
          <div
            key={"menu_uniMarket_stats" + index}
            className={clsx(
              "basis-full border-dashed border-b-[1px] border-[#C6C6C6] py-3"
            )}
          >
            <span className={"basis-2/4 text-[#616161] text-[13px] font-nomal"}>
              {item.title}
            </span>
            <span
              style={{ color: item.color }}
              className={clsx(
                "basis-2/4 float-right text-[13px] font-semibold"
              )}
            >
              {item.number}
            </span>
          </div>
        );
      })}
      <div className="border-b-[1px] border-[#C6C6C6] pb-2">
        <Typography
          key="uni_resources"
          color="primary"
          size="medium"
          className="font-semibold py-5 "
        >
          {t("token:asset_resources.resources")}
        </Typography>
        {MybuttonUni.map((btn, index) => {
          return (
            <CopyToClipboard
              title={btn.name}
              key={"btn_uniresources" + index}
            />
          );
        })}
      </div>
      <div className="pt-4">
        <div key="btn_community">
          <div>
            <button
              className="flex bg-[#EFF0F4] rounded-[5px] w-full p-2 justify-between"
              onClick={handleClickCom}
            >
              <span>{t("token:asset_resources.community")}</span>
              <div className="w-[17px] h-[17px] flex items-center justify-center bg-[#E4E7F0]">
                <span>{openCom ? <FiChevronDown /> : <FiChevronUp />}</span>
              </div>
            </button>
          </div>
        </div>
        {openCom ? (
          <ul className="rounded-b-lg">
            {ulList.map((item, index) => {
              return (
                <li
                  className={clsx(
                    "flex border-[1px] border-[#EFF0F4] items-center p-2",
                    { "rounded-b-lg": index === ulList.length - 1 }
                  )}
                  key={"ul_community" + index}
                >
                  <span className="pr-4">{item.icons}</span>
                  <span>{item.description}</span>
                </li>
              );
            })}
          </ul>
        ) : (
          ""
        )}
      </div>

      <div className="pt-4">
        <div key="btn_Explorer">
          <div>
            <button
              className="flex bg-[#EFF0F4] rounded-[5px] w-full p-2 justify-between"
              onClick={handleClickEx}
            >
              <span>{t("token:asset_resources.explore")}</span>
              <div className="w-[17px] h-[17px] flex items-center justify-center bg-white">
                <span>{openEx ? <FiChevronDown /> : <FiChevronUp />}</span>
              </div>
            </button>
          </div>
        </div>
        {openEx ? (
          <ul>
            {ulList.map((item, index) => {
              return (
                <li
                  className={clsx(
                    "flex border-[1px] border-[#EFF0F4] items-center p-2",
                    { "rounded-b-lg": index === ulList.length - 1 }
                  )}
                  key={"ulList_Explorer" + index}
                >
                  <span className="pr-4">{item.icons}</span>
                  <span>{item.description}</span>
                </li>
              );
            })}
          </ul>
        ) : (
          ""
        )}
      </div>
      <div className="pt-4" key="news">
        <Typography
          key="btn_news"
          color="primary"
          size="medium"
          className="font-semibold"
        >
          NEWS
        </Typography>
        {myNews.map((item, index) => {
          return (
            <div
              key={"menu_news" + index}
              className="border-b-[1px] border-[#C6C6C6] py-3.5"
            >
              <p className="font-semibold text-[#525252] text-[14px]">
                {item.title}
              </p>
              <span className="text-[#8F8F8F] text-[11px] font-normal">
                {item.time}
              </span>
            </div>
          );
        })}
      </div>
      <div className="h-2/4 sticky z-10 top-[64px]">
        <img
          className="h-full w-full"
          src="/images/withBitcoin.jpg"
          alt="image"
        />
      </div>
    </div>
  );
};
