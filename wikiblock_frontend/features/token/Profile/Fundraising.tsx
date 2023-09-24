import "antd/dist/antd.css";

import { Typography } from "@components/Typography";
import { homeConfig } from "@features/home/home.config";
import { Table } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { I18nActiveNamespaces } from "types/i18n";

import { tokenConfig } from "../token.config";

type dataProps = {
  key: "number";
  fund: "string";
  fund_rank: "number";
  money: "number";
  time: "date";
};
const data = [
  {
    key: "1",
    Fun: "A16Z",
    Fund_Rank: 1,
    Money: "$450M",
    Time: "07/2021",
  },
  {
    key: "2",
    Fun: "Binance Labs",
    Fund_Rank: 3,
    Money: "$100M",
    Time: "01/2020",
  },
];

const Fundraising = () => {
  const { t } = useTranslation<
    I18nActiveNamespaces<"common" | "home" | "token">
  >(tokenConfig.i18nNamespaces);
  const columns = [
    {
      title: (
        <span className="text-[#0475F9] font-normal">
          {t("token:profile.fund")}
        </span>
      ),
      dataIndex: "Fun",
      key: "Fun",
      render: (row: any) => (
        <span className="text-[#0475F9] font-normal">{row}</span>
      ),
    },
    {
      title: (
        <span className="text-[#353535] font-normal">
          {t("token:profile.fund_rank")}
        </span>
      ),
      dataIndex: "Fund_Rank",
      key: "Fund_Rank",
      render: (row: any) => (
        <span className="text-[#353535] font-normal">#{row}</span>
      ),
    },
    {
      title: (
        <span className="text-[#353535] font-normal">
          {t("token:profile.money")}
        </span>
      ),
      dataIndex: "Money",
      key: "Money",
      render: (row: any) => (
        <span className="text-[#353535]">{row}</span>
      ),
    },
    {
      title: (
        <span className="text-[#353535] font-normal">
          {t("token:profile.time")}
        </span>
      ),
      dataIndex: "Time",
      key: "Time",
      render: (row: any) => (
        <span className="text-[#353535]">{row}</span>
      ),
    },
  ];
  return (
    <div className="py-3 table_fundraising">
      <Typography color="primary" size="large" className="font-bold">
        {t("token:profile.fundraising")}
      </Typography>
      <Table pagination={false} columns={columns} dataSource={data} />
    </div>
  );
};
export default Fundraising;
