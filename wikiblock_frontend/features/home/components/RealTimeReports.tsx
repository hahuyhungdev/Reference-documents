/* eslint-disable jsx-a11y/alt-text */
import { CopyToClipboard } from '@components';
import { TrendingCoin, TrendingSoon } from '@components/Table';
import { dataOtherReport } from '@components/Table/data/dataOtherReport';
import { Typography } from '@components/Typography';
import { Tooltip } from 'antd';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HiChevronDoubleRight } from 'react-icons/hi';
import { IoMdOpen } from 'react-icons/io';
import { I18nActiveNamespaces } from 'types/i18n';

import { homeConfig } from '../home.config';
import s from './index.module.css';

// type Props = {}
export const RealTime = (props: any) => {
  const [text, setText] = useState('copy');
  const { t } = useTranslation<I18nActiveNamespaces<'common' | 'home'>>(homeConfig.i18nNamespaces);
  return (
    <div className="create-real-time-reports border-t-2 boder-[#F5F5F5] py-[30px] ">
      <Typography className="font-semibold text-[20px] uppercase mb-[10px]" color="primary">
        {t('home:realtimereports.title')}
      </Typography>
      <p className="text-[#000000] text-[14px] font-nomal">{t('home:realtimereports.description')}</p>

      <div className="grid grid-cols-6 mt-[40px] gap-[15px]">
        <div className="content col-span-5 md:col-span-6 gap-10 lg:col-span-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1 ">
            <div className="lg:col-span-1">
              <TrendingCoin />
            </div>
            <div className="lg:col-span-1">
              <TrendingSoon />
            </div>
          </div>
        </div>
        <div className="lg:col-span-6">
          <Typography size="large" className="font-medium mb-[18px]">
            <div className="flex items-center space-x-[8px]">
              <div className="not-italic font-bold text-xl leading-4 uppercase text-[#505050] whitespace-nowrap">
                {t('home:reportother.other')}
              </div>
              <a className="text-[extra_small] inline-block">
                <HiChevronDoubleRight />
              </a>
            </div>
          </Typography>
          <div
            className="
                        lg:grid lg:grid-cols-3 lg:col-span-6 lg:border-0
                        sm:grid sm:grid-cols-2 sm:col-span-6 sm:border-0
        otherRepost mt-1 gap-3 "
          >
            {dataOtherReport.map((item: any, index: number) => {
              return (
                <div
                  key={index}
                  className="lg:col-span-1 rounded-lg mb-[5px] h-[34px] bg-[#EBF0F9] 
                flex items-center justify-between gap-2 sm:text-center sm:w-full"
                >
                  <Tooltip title={item.title}>
                    <div className={s.content_title}>
                      <h3 className="truncate">{item.title}</h3>
                    </div>
                  </Tooltip>
                  <span className="ml-auto mr-[10px] cursor-pointer">
                    <IoMdOpen />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
