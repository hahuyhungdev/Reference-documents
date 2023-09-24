/* eslint-disable jsx-a11y/alt-text */
import "antd/dist/antd.css";

import { fundConfig } from "@features/fund/fund.config";
import { Table } from "antd";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { I18nActiveNamespaces } from "types/i18n";

type dataBehaviourProps = {
  [key: string]: number | string;
}
const dataAssetsHolding: Array<dataBehaviourProps> = [
  {
    asset: "Matic",
    last_vesting: "16/8/2022",
    behaviour: "Buy",
    tokens: "500.000",
    next_vesting: "31/09/2022",
    prediction: "Sell"
  },
  {
    asset: "Matic",
    last_vesting: "16/8/2022",
    behaviour: "Buy",
    tokens: "500.000",
    next_vesting: "31/09/2022",
    prediction: "Sell"
  }
]

export const Behaviour = () => {
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
      title: <div className="text-center">{t("fund:wallet_activity.last_vesting")}
      </div>,
      dataIndex: "last_vesting",
      key: "last_vesting",
      render: (row: any) => (
        <div className="text-center">
          <span className="text-[#050F19]">{row}</span>
        </div>
      ),
    },
    {
      title: <div className="text-center">{t("fund:wallet_activity.behaviour")}
      </div>,
      dataIndex: "behaviour",
      key: "behaviour",
      render: (row: any) => (
        <div className="text-center">
          <span className="text-[#050F19]">{row}</span>
        </div>
      ),
    },
    {
      title: <div className="text-center">Token
      </div>,
      dataIndex: "tokens",
      key: "tokens",
      render: (row: any) => (
        <div className="text-center">
          <span className="text-[#050F19]">{row}</span>
        </div>
      ),
    },
    {
      title: <div className="text-center">{t("fund:wallet_activity.next_vesting")}
      </div>,
      dataIndex: "next_vesting",
      key: "next_vesting",
      render: (row: any) => (
        <div className="text-center">
          <span className="text-[#050F19]">{row}</span>
        </div>
      ),
    }, {
      title: <div className="text-center">{t("fund:wallet_activity.prediction")}
      </div>,
      dataIndex: "prediction",
      key: "prediction",
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
