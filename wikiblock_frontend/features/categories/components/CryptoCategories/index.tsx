/* eslint-disable jsx-a11y/alt-text */
import 'antd/dist/antd.css';

import { IconDropdownSort } from '@components/Icons';
import Page from '@components/Pagination';
import { categoriesConfig } from '@features/categories/categories.config';
import { useCheckMobileScreen } from '@hooks';
import { Avatar, Space, Table, Tooltip } from 'antd';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import GainLostBar from '../GainLostBar';
import { dataTrendingCoin } from './data';

type Props = {};

const CryptoCategories = (props: Props) => {
  const { isMobileScreen, windowDimensions } = useCheckMobileScreen();
  const { t } = useTranslation(categoriesConfig.i18nNamespaces);
  const [text, setText] = useState('copy');
  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
    setText('copied');
  }

  const columns = [
    {
      title: <div className="text-center">#</div>,
      key: 'key',
      dataIndex: 'key',
      render: (row: any) => (
        <div className="flex items-center gap-x-[10px]">
          <Image src="/images/save.png" width={10} height={11} className="cursor-pointer" />
          <span>{row}</span>
        </div>
      ),
      width: 35,
    },
    {
      title: (
        <div className="font-semibold text-center">
          <span>Name</span>
        </div>
      ),
      dataIndex: 'name',
      key: 'name',
      render: (_: any, record: any) => (
        <Link href={`/assets/${record.name}`} passHref>
          <div className="flex items-center gap-[10px] sm:gap-0 font-medium ">
            <Tooltip placement="rightTop" title={record.name}>
              <div className="flex items-center gap-x-[10px]">
                <Avatar.Group>
                  <Avatar style={{ backgroundColor: '#f56a00' }} size={25}>
                    K
                  </Avatar>
                  <Tooltip title="Ant User" placement="top">
                    <Avatar style={{ backgroundColor: '#87d068' }} size={25} />
                  </Tooltip>
                  <Avatar style={{ backgroundColor: '#1890ff' }} size={25} />
                </Avatar.Group>
                <Link href="/all-crypto-assets" passHref>
                  <a className="sm:truncate sm:max-w-[70px]">{record.name}</a>
                </Link>
              </div>
            </Tooltip>
            <div className="ml-auto ">
              <Tooltip title={record.name}>
                <Image src="/images/TwoSquare.png" width={11} height={11} className="cursor-pointer" />
              </Tooltip>
            </div>
          </div>
        </Link>
      ),
      width: windowDimensions.width < 500 ? 150 : 250,
    },
    //render price
    {
      title: (
        <div className="font-semibold flex items-center gap-[3px] justify-center ">
          <span>Market Cap</span>
          <IconDropdownSort />
        </div>
      ),
      key: 'price',
      render: (row: any) => (
        <div className="font-normal text-center flex flex-col items-center">
          <span style={{ color: '#050F19' }}>${row.price}</span>
          <span
            className={clsx({
              'text-[#3ACC8A]': row.marketCapPercent.includes('+'),
              'text-[#E0686F]': row.marketCapPercent.includes('-'),
            })}
          >
            {row.marketCapPercent}
          </span>
        </div>
      ),
      width: 110,
    },
    {
      title: (
        <div className="font-semibold flex items-center gap-[3px] justify-center ">
          <span>Avg.chg</span>
          <IconDropdownSort />
        </div>
      ),
      dataIndex: 'volatilityDay',
      key: 'volatilityDay',
      render: (row: any) => {
        if (row > 0) {
          return (
            <div style={{ color: '#3ACC8A' }} className="text-center">
              +{row}%
            </div>
          );
        } else {
          return (
            <div style={{ color: '#DF5F67' }} className="text-center">
              {row}%
            </div>
          );
        }
      },
      width: 100,
    },
    // render priceChart
    {
      title: (
        <div className="font-semibold flex items-center gap-[3px] justify-center ">
          <span>Volume</span>
          <IconDropdownSort />
        </div>
      ),
      key: 'priceChart',
      render: (row: any) => (
        <div className="font-normal text-center flex flex-col items-center">
          <span style={{ color: '#050F19' }}>${row.price}</span>
          <span
            className={clsx({
              'text-[#3ACC8A]': row.marketCapPercent.includes('+'),
              'text-[#E0686F]': row.marketCapPercent.includes('-'),
            })}
          >
            {row.marketCapPercent}
          </span>
        </div>
      ),
      width: 110,
    },
    //rnder marketCap
    {
      title: (
        <div className="font-semibold flex items-center justify-center gap-[3px] ">
          <span>Dominance</span>
          <IconDropdownSort />
        </div>
      ),
      dataIndex: 'marketCap',
      key: 'marketCap',
      render: (row: any) => (
        <div className="text-center">
          <span style={{ color: '#050F19' }}>${row}</span>
        </div>
      ),
      width: 110,
    },
    // render volume. if volumeVolatility > 0 render green else red
    {
      title: (
        <div className="font-semibold flex items-center gap-[3px] ">
          <span>Asset number</span>
          <IconDropdownSort />
        </div>
      ),
      dataIndex: 'volume',
      key: 'volume',
      render: (_: any, record: any) => (
        <div className="text-center">
          <div style={{ color: '#050F19' }}>{record.volume}</div>
        </div>
      ),
      width: 110,
    },
    // render Potential
    {
      title: (
        <div className="font-semibold flex items-center gap-[3px] ">
          <span>Gainer / Loser Number</span>
          <IconDropdownSort />
        </div>
      ),
      dataIndex: 'potential',
      key: 'potential',
      render: (row: any) => (
        <div className="text-center ">
          <GainLostBar />
        </div>
      ),
      width: 150,
    },
  ];

  return (
    <div className="mb:max-w-[360px] sm:max-w-[600px] md:max-w-[720px] lg:max-w-[970px] ">
      <Table
        scroll={{ x: 1000 }}
        columns={columns as any} //eslint-disable-line
        dataSource={dataTrendingCoin}
        pagination={false}
        rowKey="id"
        className="crypto-categories-table"
      />
      {/* <div className="w-full text-right mt-4">
        <Page />
      </div> */}
    </div>
  );
};

export default CryptoCategories;
