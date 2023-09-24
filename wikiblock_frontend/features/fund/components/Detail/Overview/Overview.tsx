import { ProgressBarDynamic } from '@components/ProgressBar/dynamic';
import { dataFunds } from '@components/Table/data/dataFunds';
import { Typography } from '@components/Typography';
import { useGetCommonItems } from '@features/fund/data/common';
import { fundConfig } from '@features/fund/fund.config';
import { Fund } from '@features/fund/fund.type';
import clsx from 'clsx';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import s from '../detail.module.css';
export type Prop = {
  title?: string;
  icons?: JSX.Element[];
  description?: string;
  color?: string;
};

export const Overview = ({ fund }: { fund: Fund }) => {
  const { t } = useTranslation(fundConfig.i18nNamespaces);
  const Uniswap = [
    {
      name: t('fund:detail_overview.gainer_loser_projects'),
    },
    {
      name: t('fund:detail_overview.reliability'),
    },
    {
      name: '?',
    },
  ];
  const { dataHighlights } = useGetCommonItems();
  return (
    <div className="overview border-b-[1px] border-[#CACACA] pb-5">
      <div className="border-b-[1px] border-[#CACACA] pt-4">
        <div>
          <Typography key="uniswap-highlight" color="primary" size="large" className="font-bold">
            {t('fund:detail_overview.introduction', { name: fund?.name })}
          </Typography>
          <div className={clsx(s['intro'])}>
            <p>{fund?.about}</p>
            <div>
              <div className={clsx(s['fields'])}>
                {t('fund:detail_overview.launched')}: <h3> {fund?.launched}</h3>
              </div>
              <div className={clsx(s['fields'])}>
                {t('fund:detail_overview.fund_type')}: <h3> {fund?.type}</h3>
              </div>
            </div>
          </div>
          <div className={clsx(s['highlights'])}>
            <div className="flex gap-x-1">
              <h3>{fund?.name}</h3>
            </div>
            <div className="flex sm:block">
              {Uniswap.map((btn, index) => {
                return (
                  <div className="w-1/3 sm:w-full px-2.5 text-center sm:mt-4 sm:first:mt-1" key={'uniswap_highlights' + index}>
                    <ProgressBarDynamic
                      colors={['#F4AC20']}
                      dataProgress={[
                        {
                          name: 'WETH',
                          value: 40,
                        },
                      ]}
                      widthsize="col-span-2"
                    />
                    {btn.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={clsx('py-10 sm:py-5', s['highlights'])}>
        <div>
          <h3> {t('fund:detail_overview.investmentOf', { name: fund?.name })}</h3>
        </div>
        <div className={s['contain-investment']}>
          {dataHighlights.map((ul_keymetric, index) => {
            return (
              <ul key={'ul_key' + index} className={s['children-investment']}>
                {ul_keymetric.items.map((li_keymetric, index) => {
                  return (
                    <li key={'ul_keymetric' + index} className="flex gap-x-1">
                      <div className={clsx(s['keymetric-content'], s['keymetric-content-left'])}>
                        <span>{li_keymetric.other}</span>
                        <span className={clsx('mx-[2px] whitespace-nowrap', index === 0 && 'font-medium')}>
                          {li_keymetric.name}
                        </span>
                      </div>
                      <div className={clsx(s['keymetric-content'], s['keymetric-content-right'])}>
                        <span style={{ color: li_keymetric.value_color, marginRight: '4px' }}>
                          {li_keymetric.value}
                        </span>
                        {li_keymetric.note && (
                          <span style={{ color: li_keymetric.note_color }}>{li_keymetric.note}</span>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};
