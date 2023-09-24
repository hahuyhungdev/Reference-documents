/* eslint-disable jsx-a11y/alt-text */
import "antd/dist/antd.css";

import { homeConfig } from "@features/home/home.config";
import { Table } from "antd";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { I18nActiveNamespaces } from "types/i18n";

import { dataResearchPortfolio } from "../data/dataResearchPortfolio";

type Props = {};
export const RecentInvestment = (props: Props) => {
  const { t } = useTranslation<I18nActiveNamespaces<"common" | "home">>(
    homeConfig.i18nNamespaces
  );
  const columns = [
    {
      title: <div className="text-center">{t("common:table.no")}</div>,
      dataIndex: "key",
      key: "key",
      render: (row: any) => (
        <div className="text-center">
          <span className="text-[#050F19]">{row}</span>
        </div>
      ),
      width: 20,
    },
    {
      title: <div className="text-center">{t("common:table.project")}</div>,
      dataIndex: "project",
      key: "project",
      render: (_: any, record: any) => (
        <Link href={`/assets/${record.name}`} passHref>
          <div className="cursor-pointer">
            <div className="text-center mx-auto h-[20px] w-[20px]">{record.symbol}</div>
            <div className="text-center">{record.name}</div>
          </div>
        </Link>
      ),
      width: 50,
    },
    {
      title: <div className="text-center">{t("common:table.amount")} ($) </div>,
      dataIndex: "amount",
      key: "amount",
      render: (row: any) => (
        <div className="text-center">
          {row ? (
            <span className="text-[#050F19]">{row}</span>
          ) : (
            <span>NAN</span>
          )}
        </div>
      ),
      width: 70,
    },
    {
      title: <div className="text-center">{t("common:table.timing")}</div>,
      dataIndex: "timeming",
      key: "timeming",
      render: (row: any) => (
        <div className="text-center">
          {row ? (
            <span className="text-[#050F19]">{row}</span>
          ) : (
            <span>NAN</span>
          )}
        </div>
      ),
      width: 50,
    },
    {
      title: <div className="text-center">{t("common:table.price")}</div>,
      dataIndex: "price",
      key: "price",
      render: (row: any) => (
        <div className="text-center">
          {row ? (
            <span className="text-[#050F19]">{row}</span>
          ) : (
            <span>NAN</span>
          )}
        </div>
      ),
      width: 30,
    },
    {
      title: <div className="text-center">{t("common:table.description")}</div>,
      dataIndex: "description",
      key: "description",
      render: (row: any) => (
        <div className="text-center">
          {row ? (
            <span className="text-[#050F19]">{row}</span>
          ) : (
            <span>NAN</span>
          )}
        </div>
      ),
      width: 50,
    },
    {
      title: <div className="text-center">{t("common:table.round")}</div>,
      dataIndex: "round",
      key: "round",
      render: (row: any) => (
        <div className="text-center">
          {row ? (
            <span className="text-[#050F19]">{row}</span>
          ) : (
            <span>NAN</span>
          )}
        </div>
      ),
      width: 50,
    },
    {
      title: <div className="text-center">{t("common:table.category")}</div>,
      dataIndex: "category",
      key: "category",
      render: (row: any) => (
        <div className="text-center">
          {row ? (
            <span className="text-[#050F19]">{row}</span>
          ) : (
            <span>NAN</span>
          )}
        </div>
      ),
      width: 50,
    },

  ];
  return (
    <div className="tablewiki mb:max-w-[360px] sm:max-w-[600px] md:max-w-[720px] lg:max-w-[970px] overflow-hidden">
      <Table
        scroll={{ x: "max-content" }}
        columns={columns as any}
        dataSource={dataResearchPortfolio}
        pagination={false}
      />
    </div>
  );
};
