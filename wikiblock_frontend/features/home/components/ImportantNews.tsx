import { Button } from '@components';
import { NewsList } from '@components/NewsList';
import { Typography } from '@components/Typography';
import { userSelector } from '@features/auth/auth.selector';
import { Category } from '@features/events/events.type';
import { useAppSelector } from '@hooks/app';
import clsx from 'clsx';
import { take } from 'lodash';
import Image from 'next/image';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { HiChevronDoubleRight } from 'react-icons/hi';
import { I18nActiveNamespaces } from 'types/i18n';

import { homeConfig } from '../home.config';
import { News } from '../home.type';
export type Props = {
  title: string;
  importantNews: Array<News>;
  importantNewsLoading?: boolean;
  relatedNews: Array<News>;
  relatedNewsLoading?: boolean;
  categories: Array<Category>;
  onClickCategory: (id: string) => void;
  handleShowModalCategory: () => void;
};

const myList = [
  {
    image: '/images/paypal.png',
    title: 'Paypal cho phép thanh toán bằng BTC',
    time: '1 Hour ago',
    tag: ['#ETH', '#stETH', '#MATIC'],
    star: 4,
  },
  {
    image: '/images/paypal.png',
    title: 'HAGL thắng trận thứ tư liên tiếp ở V-League',
    time: '30 second ago',
    tag: ['#HAGL', '#BONGDA'],
    star: 3,
  },
  {
    image: '/images/paypal.png',
    title: 'HLV Petrovic dự đoán HAGL vô địch V-League 2022',
    time: '2 Hour ago',
    tag: ['#HAGL', '#VLEAGUE'],
    star: 2,
  },
];
const reLatedList = [
  {
    image: '/images/paypal.png',
    title: 'TP HCM thua trận thứ tư liên tiếp tại V-League',
    time: '2 Hour ago',
    tag: ['#VLEAGUE', '#BONGDA'],
  },
  {
    image: '/images/paypal.png',
    title: 'Barca hạ Real',
    time: '20 second ago',
    tag: ['#BARCA', '#REAL'],
  },
];

export const ulList = [
  {
    title: 'MATIC notable wallets and apps',
    time: '2hs 01/03/2022',
  },
  {
    title: 'MATIC notable wallets and tools',
    time: '2hs 01/03/2022',
  },
  {
    title: 'MATIC notable accounts MATIC',
    time: '2hs 01/03/2022',
  },
];

export const ImportantNews: FC<Props> = ({
  title,
  importantNews,
  relatedNews,
  categories,
  onClickCategory,
  handleShowModalCategory,
  importantNewsLoading = false,
  relatedNewsLoading = false,
}) => {
  const { t } = useTranslation<I18nActiveNamespaces<'common' | 'home'>>(homeConfig.i18nNamespaces);

  const user = useAppSelector(userSelector);

  return (
    <div className="py-[30px]">
      <Typography className="font-semibold text-[20px] uppercase mb-[10px]" color="primary">
        {t('home:importantnews.title')}
      </Typography>
      <p className="text-[#000000] text-[14px] font-nomal">{t('home:importantnews.description')}</p>
      <div className="grid grid-cols-6 md:block mt-[20px] pt-[15px]">
        <div className="content col-span-5 gap-10 lg:col-span-6">
          <div className="grid grid-cols-2 md:block gap-4">
            <div className="border-r-[2px] md:border-0 border-[#F5F5F5] text-xl sm:text-lg">
              <NewsList title={t('home:importantnews.name')} newItems={importantNews} loading={importantNewsLoading} />
            </div>
            <div className="border-r-[2px] lg:border-0 border-[#F5F5F5] px-[26px] xl:pl-[0px] text-lg">
              <div className="sm:mt-3 text-xl sm:text-lg">
                <NewsList
                  title={t('home:importantnews.related.title')}
                  newItems={relatedNews}
                  loading={relatedNewsLoading}
                />
              </div>
              <div>
                <div className="flex items-start sm:mt-3">
                  <div className="md:scale-[1.3]">
                    <Image width={43} height={45} alt="logo" src="/images/logo.png" />
                  </div>
                  <p className="mb-0 pl-[10px] text-[#383838] text-[14px] font-semibold">
                    {t('home:importantnews.related.description')}
                  </p>
                </div>
                <div
                  className="grid grid-cols-3 lg:grid lg:grid-cols-3 lg:col-span-6 lg:border-0 
                sm:grid sm:grid-cols-2 sm:col-span-6 sm:border-0 otherReport
                border-[#F5F5F5] pl-[15px] mt-1 gap-3"
                >
                  {take(categories, 8).map((category) => (
                    <button
                      key={category.id}
                      className={clsx(
                        'col-span-1 md:col-span-1 md:w-full sm:gap-x-2 bg-[#EFF0F4] text-center p-2 rounded-[3px] text-[11px] md:text-[13px] text-[#010000] font-normal transition-all',
                        {
                          'bg-btn-primary text-white': user?.followings?.includes(category.id),
                        },
                      )}
                      onClick={() => onClickCategory(category.id)}
                    >
                      {category.title}
                    </button>
                  ))}
                  {/* <button
                    className="col-span-1 md:col-span-1 md:w-full sm:gap-x-2 bg-[#EFF0F4] text-center 
                     p-2 rounded-[3px] text-[11px] md:text-[13px] text-[#010000] font-normal"
                    onClick={handleShowModalCategory}
                  >
                    {t("common:buttons.show_more")}
                  </button> */}
                  <Button
                    className="col-span-1 md:col-span-1 md:w-full sm:gap-x-2 text-center 
                     p-2 rounded-[3px] text-[11px] md:text-[13px] text-[#010000] font-normal hover:bg-btn-primary hover:text-white"
                    variant="contained"
                    onClick={handleShowModalCategory}
                  >
                    {t('common:buttons.show_more')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pl-[15px] lg:p-0 md:mt-3 lg:grid lg:col-span-6 lg:grid-cols-2 lg:mt-2">
          <div className="sm:mt-2 text-xl sm:text-lg">
            <Typography className="font-[600] pb-5 text-xl text-[#505050]">
              <div className="flex items-center space-x-[8px] uppercase sm:whitespace-nowrap sm:text-xl">
                <span className="uppercase">{t('home:importantnews.article.title')}</span>
                <a className="text-[extra_small] inline-block">
                  <HiChevronDoubleRight />
                </a>
              </div>
            </Typography>
          </div>
          <div className="col-span-1 md:col-span-3 my-1">
            <h2 className="font-bold text-[#ADADAD] text-[20px] leading-4">INSIGHT</h2>
            <ul className="my-3 md:grid md:grid-cols-6 sm:block">
              {ulList.map((item, index) => {
                return (
                  <li key={index} className="md:col-span-3 my-1">
                    <Typography className="not-italic font-[600] text-sm md:text-base leading-4 text-[#343434]">
                      {item.title}
                    </Typography>
                    <p className="text-[12px] text-[#A0A0A0] font-nomal">{item.time}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-span-1 md:col-span-3 my-1">
            <h2 className="font-bold text-[#ADADAD] text-[20px] leading-4">REVIEW</h2>
            <ul className="my-3 md:grid md:grid-cols-2 sm:block">
              {ulList.map((item, index) => {
                return (
                  <li key={index} className="md:col-span-1">
                    <Typography color="secondary" className="font-[600] md:text-base">
                      {item.title}
                    </Typography>
                    <p className="text-[12px] text-[#A0A0A0] font-nomal">{item.time}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
