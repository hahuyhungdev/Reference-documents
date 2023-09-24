/* eslint-disable jsx-a11y/alt-text */
import 'antd/dist/antd.css';

import ProgressiveLineChart from '@components/ChartJs/ProgressiveLine';
import { IconDropdownSort } from '@components/Icons';
import { Coin, Price } from '@features/coin/coin.type';
import { homeConfig } from '@features/home/home.config';
import { numberFormat, numberToPercent, numberToUSD } from '@utils/number';
import { Avatar, Table, Tooltip } from 'antd';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoMdOpen } from 'react-icons/io';
import { I18nActiveNamespaces } from 'types/i18n';

import { dataTrendingCoin } from '../data/dataTrendingCoin';

export interface PropsManyInsights {
  coins?: Array<Coin>;
  loading?: boolean;
}

const NUMBER_FIXED = 3;

export const CryptoManyInsights = ({ coins = [], loading = false }: PropsManyInsights) => {
  const { t } = useTranslation<I18nActiveNamespaces<'common' | 'home'>>(homeConfig.i18nNamespaces);

  const columns = [
    {
      title: <div className="">{t('common:table.name')}</div>,
      dataIndex: 'name',
      key: 'name',
      render: (_: any, { avatar, name = '', slug, token_id, market_data }: Coin = {}) => (
        <Link href={`/assets/${slug}`} passHref>
          <div className="flex items-center gap-[10px] sm:w-[170px]  ">
            <div className="flex items-center gap-x-[15px] ">
              <Avatar src={avatar} />
              <div className="flex sm:flex-col gap-x-4">
                <span>{name}</span>
                <span className="text-[rgba(17,51,83,0.6)]">{token_id}</span>
              </div>
            </div>
            <div className="ml-auto cursor-pointer">
              <IoMdOpen />
            </div>
          </div>
        </Link>
      ),
      width: 120,
    },
    //render price
    {
      title: <div className="text-center">{t('common:table.price')}</div>,
      key: 'price',
      render: (
        _: any,
        {
          avatar,
          name = '',
          slug,
          token_id,
          market_data: {
            USD: { price = 0 } = {
              price: 0,
            },
          } = {
            USD: { price: 0 },
          },
        }: Coin,
      ) => {
        return (
          <div className="font-normal text-center">
            <span className="text-[#050F19]">
              {numberToUSD(price, {
                maximumFractionDigits: price > 100 ? 0 : 5,
              })}
            </span>
          </div>
        );
      },
      width: 120,
    },
    //render volatilityDay. if volatilityDay > 0 render green else red
    {
      title: (
        <div className=" flex items-center gap-[3px] justify-center ">
          <span>{t('common:table.1d')}</span>
          <IconDropdownSort />
        </div>
      ),
      key: 'volatilityDay',
      render: (
        _: any,
        {
          market_data: {
            USD: { percent_change_24h = 0 } = {
              percent_change_24h: 0,
            },
          } = {
            USD: { price: 0 },
          },
        }: Coin,
      ) => {
        return (
          <div className={clsx(percent_change_24h < 0 ? 'text-[#DF5F67]' : 'text-[#3ACC8A]')}>
            {numberToPercent(percent_change_24h / 100)}
          </div>
        );
      },
      width: 120,
    },
    // render priceChart
    {
      title: <div className=" text-center">{t('common:table.price_chart')}</div>,
      dataIndex: 'priceChart',
      key: 'priceChart',
      render: (
        _: any,
        {
          market_data: {
            USD: { list_price = [] } = {
              list_price: [],
            },
          } = {
            USD: {
              list_price: [],
            },
          },
        }: Coin,
      ) => {
        // const row = record.market_data && Object.values(record.market_data)[0]?.list_price;
        // const chartData = row.map((price) => ({ x: price.value, y: new Date(price.date).getTime() }));
        const chartData = list_price.map(({ value, date }: Price, index) =>
          index == 0
            ? { x: value, y: 0 }
            : {
                x: value,
                y: list_price[index - 1].value,
              },
        );
        return (
          <div className="max-w-[100px] max-h-[20px]">
            <ProgressiveLineChart data={chartData} />
          </div>
        );
        // <div className="max-w-[100px] max-h-[20px]">{row}</div>
      },
      width: 120,
    },
    //render marketCap
    {
      title: (
        <div className=" flex items-center gap-[3px] ">
          <span>{t('common:table.market_cap')}</span>
          <IconDropdownSort />
        </div>
      ),
      key: 'marketCap',
      render: (
        _: any,
        {
          market_data: {
            USD: { market_cap = 0 } = {
              market_cap: 0,
            },
          } = {
            USD: { market_cap: 0 },
          },
        }: Coin,
      ) => {
        return (
          <div className="text-center">
            <span className="text-[#050F19]">
              {numberToUSD(market_cap, {
                maximumFractionDigits: 0,
                minimumFractionDigits: 0,
              })}
            </span>
          </div>
        );
      },
      width: 120,
    },
    // render volume. if volumeVolatility > 0 render green else red
    {
      title: (
        <div className=" flex items-center gap-[3px] ">
          <span>{t('common:table.volume')} </span>
          <IconDropdownSort />
        </div>
      ),
      key: 'volume',
      render: (
        _: any,
        {
          market_data: {
            USD: { volume_24h = 0, volume_change_24h = 0 } = {
              volume_24h: 0,
              volume_change_24h: 0,
            },
          } = {
            USD: { volume_24h: 0, volume_change_24h: 0 },
          },
        }: Coin,
      ) => {
        return (
          <div className="volume">
            <div className="text-[#050F19]">
              {numberFormat(volume_24h, {
                maximumFractionDigits: 0,
              })}
            </div>
            <div className={clsx(volume_change_24h < 0 ? 'text-[#DF5F67]' : 'text-[#3ACC8A]')}>
              {numberToPercent(volume_change_24h / 100)}
            </div>
          </div>
        );
      },
      width: 100,
    },
    // render Potential
    {
      title: (
        <div className=" flex items-center gap-[3px] ">
          <span>{t('common:table.potential')}</span>
          <IconDropdownSort />
        </div>
      ),
      dataIndex: 'potential',
      key: 'potential',
      render: (row: any) => (
        <div className="text-center ">
          <span>{row}</span>
        </div>
      ),
      width: 100,
    },
    // render reliability
    {
      title: (
        <div className=" flex items-center gap-x-[3px] ">
          <span>{t('common:table.reliability')}</span>
          <IconDropdownSort />
        </div>
      ),
      dataIndex: 'reliability',
      key: 'reliability',
      render: (row: any) => (
        <div className="text-center ">
          <span>{row}</span>
        </div>
      ),
      width: 100,
    },
  ];

  return (
    <div className="CryptoManyInsights tablewiki mb:max-w-[360px] sm:max-w-[600px] md:max-w-[720px] lg:max-w-[970px] overflow-hidden">
      <Table
        scroll={{ x: 'max-content' }}
        // sticky left
        sticky
        columns={columns as any} //eslint-disable-line
        dataSource={coins}
        pagination={false}
        className="table-crypto-many-insights"
        loading={loading}
      />
    </div>
  );
};
