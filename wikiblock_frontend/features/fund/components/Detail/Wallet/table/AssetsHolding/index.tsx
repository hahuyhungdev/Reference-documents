/* eslint-disable jsx-a11y/alt-text */
import "antd/dist/antd.css";

import { fundConfig } from "@features/fund/fund.config";
import { Table } from "antd";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { I18nActiveNamespaces } from "types/i18n";

type dataAssetsHoldingProps = {
  [key: string]: number | string;
}
const dataAssetsHolding: Array<dataAssetsHoldingProps> = [
  {
    asset: "Matic",
    balance: 450.000,
    change1d: 450.000,
    chang7d: 500.000,
    chang30d: 500.000,
  },
  {
    asset: "ETH",
    balance: 450.000,
    change1d: 450.000,
    chang7d: 500.000,
    chang30d: 500.000,
  }
]

export const AssetsHolding = () => {
  const { t } = useTranslation<I18nActiveNamespaces<"common" | "fund">>(
    fundConfig.i18nNamespaces
  )
  const columns = [
    {
      title: <div className="text-center">{t("fund:wallet_activity.asset")}</div>,
      dataIndex: "asset",
      key: "asset",
      render: (row: any) => (
        <div className="text-center">
          <span className="text-[#050F19]">{row}</span>
        </div>
      ),
    },
    {
      title: <div className="text-center">{t("fund:wallet_activity.balance_token")}
      </div>,
      dataIndex: "balance",
      key: "balance",
      render: (row: any) => (
        <div className="text-center">
          <span className="text-[#050F19]">{row}</span>
        </div>
      ),
    },
    {
      title: <div className="text-center">{t("fund:wallet_activity.change_1d")}
      </div>,
      dataIndex: "change1d",
      key: "change1d",
      render: (row: any) => (
        <div className="text-center">
          <span className="text-[#050F19]">{row}</span>
        </div>
      ),
    },
    {
      title: <div className="text-center">{t("fund:wallet_activity.change_7d")}
      </div>,
      dataIndex: "chang7d",
      key: "chang7d",
      render: (row: any) => (
        <div className="text-center">
          <span className="text-[#050F19]">{row}</span>
        </div>
      ),
    },
    {
      title: <div className="text-center">{t("fund:wallet_activity.change_30d")}
      </div>,
      dataIndex: "chang30d",
      key: "chang30d",
      render: (row: any) => (
        <div className="text-center">
          <span className="text-[#050F19]">{row}</span>
        </div>
      ),
    },
  
  ];
  return (
    <div className="tablewiki mb:max-w-[360px] sm:max-w-[600px] md:max-w-[720px] lg:max-w-[970px] overflow-hidden">
      <Table
        scroll={{ x: "max-content" }}
        columns={columns as any}
        dataSource={dataAssetsHolding}
        pagination={false}
      />
    </div>
  );
};
