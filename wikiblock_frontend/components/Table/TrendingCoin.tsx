import "antd/dist/antd.css";

import { IconBronze, IconGold, IconTheSilver } from "@components/Icons";
import { Typography } from "@components/Typography";
import { homeConfig } from "@features/home/home.config";
import { Avatar, Table } from "antd";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { HiChevronDoubleRight } from "react-icons/hi";
import { I18nActiveNamespaces } from "types/i18n";

import { dataTrendingCoin } from "./data/dataTrendingCoin";

// format number to string with data.price
const formatNumber = (number: number) => {
  return (+number.toFixed(2)).toLocaleString("en-US");
};
export const TrendingCoin = () => {
  const { t } = useTranslation<I18nActiveNamespaces<"common" | "home">>(
    homeConfig.i18nNamespaces
  );

  const columns = [
    // if rank 1,2,3 render icon gold,iconthesilver,iconbronze. else if rank >3 render text
    {
      title: "",
      dataIndex: "rank",
      key: "rank",
      render: (rank: number) => {
        if (rank === 1) {
          return (
            <div className="flex items-center justify-center">
              <IconGold />
            </div>
          );
        } else if (rank === 2) {
          return (
            <div className="flex items-center justify-center">
              <IconTheSilver />
            </div>
          );
        } else if (rank === 3) {
          return (
            <div className="flex items-center justify-center">
              <IconBronze />
            </div>
          );
        } else {
          return <div className="flex items-center justify-center text-[#050F19]">
            {rank}
          </div>
        }
      },
    },
    {
      title: <div className="">
        Name
      </div>,
      dataIndex: "name",
      key: "name",
      render: (_: any, record: any) => (
        <Link href={`/assets/${record.name}`} passHref>
          <div className="flex items-center sm:block sm:max-w-[130px] cursor-auto">
            <div className="flex items-center gap-x-[15px] ">
              {/* <span>{record.symbol}</span> */}
              <Avatar src={record.symbol} />
              <div className="flex sm:flex-col gap-x-4">
                <a className="text-[#050F19]">{record.name}</a>
                <a
                  className="text-[rgba(17,51,83,0.6)]"
                >
                  {record.shorten}
                </a>
              </div>
            </div>
          </div>
        </Link>
      ),
      // width: 150,
    },
    //render price
    {
      title: <div className="text-center">
        Price
      </div>,
      dataIndex: "price",
      key: "price",
      render: (row: any) => (
        <div className="text-center">
          <span className="text-[#050F19]">{formatNumber(row)}</span>
        </div>
      ),
      width: 120,
    },
    //render change. if value change > 0, render green, else render red
    {
      title: <div className=" text-center">
        Change
      </div>,
      dataIndex: "change",
      key: "change",
      render: (row: any) => {
        // DF5F67
        if (row > 0) {
          return <div className="text-center text-[#3ACC8A]">
            +{row}%</div>;
        } else {
          return <div className="text-center text-[#DF5F67]">
            {row}%</div>;
        }
      },
      width: 150,
    }
  ];
  return (
    <div className="border-r-2 boder-[#F5F5F5] pr-[20px] md:border-0 md:pr-0">
      <Typography size="large" className="font-medium mb-[18px] ">
        <div className="flex items-center space-x-[8px]">
          <span className="not-italic font-bold text-xl leading-4 uppercase text-[#505050] whitespace-nowrap">
            TREDING COIN
          </span>
          <a className="text-[extra_small] inline-block">
            <HiChevronDoubleRight />
          </a>
        </div>
      </Typography>
      <Table
        columns={columns}
        dataSource={dataTrendingCoin}
        pagination={false}
      />
    </div>
  );
};
