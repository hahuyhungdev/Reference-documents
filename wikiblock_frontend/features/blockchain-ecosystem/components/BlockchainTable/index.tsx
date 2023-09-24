/* eslint-disable jsx-a11y/alt-text */
import "antd/dist/antd.css";

import { IconDropdownSort } from "@components/Icons";
import { blockchainConfig } from "@features/blockchain-ecosystem/blockchain.config";
import { Space, Table, Tooltip } from "antd";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoMdOpen } from "react-icons/io";

import { dataTrendingCoin } from "./data";

type Props = {};

const BlockchainTable = (props: Props) => {
  const { t } = useTranslation(blockchainConfig.i18nNamespaces);
  const [text, setText] = useState("copy");


  const columns = useMemo(
    () => [
      {
        title: (
          <div className="font-semibold text-center">{t("blockchain:table.name")}</div>
        ),
        dataIndex: "name",
        key: "name",
        render: (_: any, record: any) => (
          <Link href={`/assets/${record.name}`} passHref>
            <div className="flex items-center gap-[10px] w-[180px] font-medium">
              <div className="flex items-center gap-x-[15px]">
                <span>{record.symbol}</span>
                <div className="flex sm:flex-col gap-x-4">
                  <a className="">{record.name}</a>
                </div>
              </div>
              <div className="ml-auto cursor-pointer">
                <Tooltip placement="rightTop" title={record.name}>
                  <IoMdOpen />
                </Tooltip>
              </div>
            </div>
          </Link>
        ),
        width: 200,
      },
      {
        title: (
          <div className="font-semibold flex items-center gap-[3px] justify-center ">
            <span>{t("blockchain:table.founded")}</span>
            <IconDropdownSort />
          </div>
        ),
        dataIndex: "founded",
        key: "founded",
        render: (row: any) => (
          <div className="font-normal text-center">
            <span className="text-[#050F19]">{row}</span>
          </div>
        ),
      },
      {
        title: (
          <div className="font-semibold flex items-center gap-[3px] justify-center ">
            <span>{t("blockchain:table.stage")}</span>
            <IconDropdownSort />
          </div>
        ),
        dataIndex: "stage",
        key: "stage",
        render: (row: any) => (
          <div className="font-normal text-center">
            <span className="text-[#050F19]">{row}</span>
          </div>
        ),
      },
      // render priceChart
      {
        title: (
          <div className="font-semibold flex items-center gap-[3px] justify-center ">
            <span>{t("blockchain:table.eco_market_cap")}</span>
            <IconDropdownSort />
          </div>
        ),
        dataIndex: "volume",
        key: "volume",
        render: (_: any, record: any) => (
          <div className="text-center">
            <div className="text-[#050F19] text-[13px]">{record.volume}</div>
            <span
              className={clsx({
                "text-[#3ACC8A]": record.volumeVolatility > 0,
                "text-[#DF5F67]": record.volumeVolatility < 0,
              })}
            >{`${record.volumeVolatility > 0 ? "+" : ""}${record.volumeVolatility
              }%`}</span>
          </div>
        ),
        width: 150,
      },
      {
        title: (
          <div className="font-semibold flex items-center justify-center gap-[3px]">
            <span>{t("blockchain:table.dapp")}</span>
            <IconDropdownSort />
          </div>
        ),
        dataIndex: "dapp",
        key: "dapp",
        render: (row: any) => (
          <div className="text-center">
            <span className="text-[#050F19]">{row}</span>
          </div>
        ),
      },
      {
        title: (
          <div className="font-semibold flex items-center justify-center gap-[3px]">
            <span>{t("blockchain:table.avg_FDV")}</span>
            <IconDropdownSort />
          </div>
        ),
        dataIndex: "priceChart",
        key: "priceChart",
        render: (row: any) => <div className="text-center">{row}</div>,
      },
      {
        title: (
          <div className="font-semibold flex items-center justify-center gap-[3px]">
            <span>{t("blockchain:table.backer")}</span>
            <IconDropdownSort />
          </div>
        ),
        dataIndex: "backer",
        key: "backer",
        render: (row: any) => (
          <div className="text-center">
            <span>{row}</span>
          </div>
        ),
      },
      {
        title: (
          <div className="font-semibold flex items-center justify-center gap-x-[3px]">
            <span>{t("blockchain:table.fundraising")}</span>
            <IconDropdownSort />
          </div>
        ),
        dataIndex: "fundraising",
        key: "fundraising",
        render: (row: any) => (
          <div className="text-center">
            <span>{row}</span>
          </div>
        ),
      },
      {
        title: (
          <div className="font-semibold flex items-center gap-x-[3px] ">
            <span>{t("blockchain:table.community")}</span>
            <IconDropdownSort />
          </div>
        ),
        dataIndex: "vote",
        key: "vote",
        render: (row: any) => (
          <div className="flex items-center justify-center">
            <span>{row}</span>
          </div>
        ),
        width: 140,
      },
    ],
    []
  );

  return (
    <div className="mb:max-w-[360px] sm:max-w-[600px] md:max-w-[720px] lg:max-w-[970px] ">
      <Table
        scroll={{ x: 1000 }}
        sticky
        columns={columns as any} //eslint-disable-line
        dataSource={dataTrendingCoin}
        pagination={false}
        rowKey="id"
        className="crypto-categories-table"
      />
    </div>
  );
};

export default BlockchainTable;
