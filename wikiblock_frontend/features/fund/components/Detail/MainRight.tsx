import { Typography } from '@components/Typography';
import { fundConfig } from '@features/fund/fund.config';
import { Fund } from '@features/fund/fund.type';
import clsx from 'clsx';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineMedium, AiOutlineTwitter } from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { IoIosPaperPlane } from 'react-icons/io';
import { I18nActiveNamespaces } from 'types/i18n';

import s from './detail.module.css';
import { tokenConfig } from './token.config';

export type Prop = {
  title?: string;
  icons?: JSX.Element[];
  description?: string;
  color?: string;
  showAds?: boolean;
};
type ulListProps = {
  title: string;
  content: JSX.Element[] | string;
};

type myNewsProps = {
  title: string;
  time_post?: number;
  time_read?: number;
};

const ulList: Array<ulListProps> = [
  {
    title: 'Website',
    content: 'https://www.binance.com/en',
  },
  {
    title: 'Links',
    content: [],
  },
];
const myNews: Array<myNewsProps> = [
  {
    title: 'Uniswap launches website integration in web 3 domination bid',
    time_post: 1,
    time_read: 10,
  },
  {
    title: 'Uniswap launches website integration in web 3 domination bid',
    time_post: 4,
    time_read: 3,
  },
  {
    title: 'Uniswap launches website integration in web 3 domination bid',
    time_post: 1,
    time_read: 10,
  },
  {
    title: 'Uniswap launches website integration in web 3 domination bid',
    time_post: 4,
    time_read: 3,
  },
  {
    title: 'Uniswap launches website integration in web 3 domination bid',
    time_post: 1,
    time_read: 10,
  },
  {
    title: 'Uniswap launches website integration in web 3 domination bid',
    time_post: 4,
    time_read: 3,
  },
];

export const MainRight: React.FC<any> = ({
  children,
  fund: { website, discord, telegram, twitter, medium } = {},
}: {
  children: React.ReactNode;
  fund: Fund;
}) => {
  const { t } = useTranslation(fundConfig.i18nNamespaces);
  const [openCom, setOpenCom] = React.useState(true);

  const handleClickCom = () => {
    setOpenCom(!openCom);
  };
  const [openEx, setOpenEx] = React.useState(true);

  const handleClickEx = () => {
    setOpenEx(!openEx);
  };

  return (
    <div className="float-right max-w-[280px] sticky z-10 top-[64px] mt-2">
      <div className="py-4 px-2 border-[1px] border-[#C6C6C6] mb-3">
        <div key="btn_Explorer">
          <button className="flex bg-[#EFF0F4] rounded-[5px] w-full p-2 justify-between" onClick={handleClickEx}>
            <span>More information</span>
            <div className="w-[17px] h-[17px] flex items-center justify-center bg-white">
              <span>{openEx ? <FiChevronDown /> : <FiChevronUp />}</span>
            </div>
          </button>
        </div>
        {openEx && (
          <ul>
            <li
              className={clsx('flex border-b-[1px] border-[#EFF0F4] items-center text-xs justify-between p-2 ')}
              key={'ulList_Explorer_website'}
            >
              <span className="pr-4">Website</span>
              <span className="flex gap-[10px]">
                <a href={website}></a>
                {website}
              </span>
            </li>
            <li
              className={clsx(
                'flex border-b-[1px] border-[#EFF0F4] items-center text-xs justify-between p-2 rounded-b-lg',
              )}
              key={'ulList_Explorer_social'}
            >
              <span className="pr-4">Links</span>
              <span className="flex gap-[10px]">
                {twitter && (
                  <a href={twitter}>
                    <AiOutlineTwitter key={'icon-twitter'} />
                  </a>
                )}
                {telegram && (
                  <a href={telegram}>
                    <IoIosPaperPlane key={'icon-plane'} />
                  </a>
                )}
                {medium && (
                  <a href={medium}>
                    <AiOutlineMedium key={'icon-medium'} />
                  </a>
                )}
                {discord && (
                  <a href={discord}>
                    <BsDiscord key={'icon-discord'} />
                  </a>
                )}
              </span>
            </li>
          </ul>
        )}
      </div>
      <div className="pt-4 px-2" key="news">
        <Typography
          key="btn_news"
          color="primary"
          size="medium"
          className="font-semibold uppercase"
        >
          {t("fund:detail_overview.news", { name: "Alameda Research" })}
        </Typography>
        {myNews.map((item, index) => {
          return (
            <div key={'menu_news' + index} className="border-b-[1px] border-[#EFF0F4] py-3.5">
              {/* <p className="font-semibold text-[#525252] text-[14px]">
                {item.title}
              </p>
              <span className="text-[#8F8F8F] text-[11px] font-normal">
                {item.time}
              </span> */}
              {item.title && <span className="post-date font-semibold text-[#525252] text-[14px]">{item.title}</span>}
              <div className={clsx(s['listpost_meta'])}>
                {item.time_post && <span className="post-date">{item.time_post} hours ago</span>}
                {item.time_read && <span className="post-time">{item.time_read} min read</span>}
              </div>
            </div>
          );
        })}
      </div>
      <div className="h-2/4 sticky z-10 top-[64px]">
        <img className="h-full w-full" src="/images/withBitcoin.jpg" alt="image" />
      </div>
    </div>
  );
};
