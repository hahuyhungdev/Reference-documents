/* eslint-disable jsx-a11y/alt-text */
import "antd/dist/antd.css";

import { homeConfig } from "@features/home/home.config";
import { Table } from "antd";
import clsx from "clsx";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { I18nActiveNamespaces } from "types/i18n";

import { dataTrendingCoin } from "../data/dataTrendingCoin";
import s from "./lookat.module.css";

type Props = {};

export const LookAtRecord = (props: Props) => {
  const { t } = useTranslation<I18nActiveNamespaces<"common" | "home">>(
    homeConfig.i18nNamespaces
  );
  const columns = [
    {
      title: <div className="text-center">#</div>,
      dataIndex: "key",
      key: "key",
      render: (row: any) => <div className="text-center">{row}</div>,
      width: 10,
    },
    {
      title: <div className="text-center">{t("common:table.fund")}</div>,
      dataIndex: "fund",
      key: "fund",
      render: (row: any) => (
        <Link href={`/assets/${row}`} passHref>
          <div className="font-normal text-center">
            <a className="text-[#050F19]">{row}</a>
          </div>
        </Link>
      ),
      width: 80,
    },
    {
      title: <div className="text-center">{t("common:table.current_roi")}</div>,
      dataIndex: "pairs",
      key: "pairs",
      render: (row: any) => (
        <div className="font-normal text-center">
          {row ? (
            <span className="text-[#050F19]">${row}</span>
          ) : (
            <span>NAN</span>
          )}
        </div>
      ),
      width: 40,
    },
    {
      title: <div className="text-center">{t("common:table.ath_roi")}</div>,
      dataIndex: "pairs",
      key: "pairs",
      render: (row: any) => (
        <div className="font-normal text-center">
          {row ? (
            <span className="text-[#050F19]">${row}</span>
          ) : (
            <span>NAN</span>
          )}
        </div>
      ),
      width: 40,
    },
    {
      title: <div className="text-center">{t("common:table.number_of_project")}</div>,
      dataIndex: "pairs",
      key: "pairs",
      render: (row: any) => (
        <div className="font-normal text-center">
          {row ? (
            <span className="text-[#050F19]">${row}</span>
          ) : (
            <span>NAN</span>
          )}
        </div>
      ),
      width: 70,
    },
    {
      title: <div className="text-center">{t("common:table.total_funding_amount")}</div>,
      dataIndex: "pairs",
      key: "pairs",
      render: (row: any) => (
        <div className="font-normal text-center">
          {row ? (
            <span className="text-[#050F19]">${row}</span>
          ) : (
            <span>NAN</span>
          )}
        </div>
      ),
      width: 70,
    },
    {
      title: <div className="text-center">{t("common:table.typical_project")}</div>,
      dataIndex: "name",
      key: "name",
      render: (_: any, record: any) => (
        <Link href={`/assets/${record.name}`} passHref>
          <div className={clsx(s["typecal"])}>
            <div>
              <div className="w-[20px] h-[20px] mx-auto">{record.symbol}</div>
              <a className="font-normal py-[2px] text-[12px] leading-3">{record.name}</a>
              <div>
                {record.change > 0 ? (
                  <div className="text-center text-[12px] text-[#3ACC8A]">{record.change}%</div>
                ) : (
                  <div className="text-center text-[12px] text-[#DF5F67]">{record.change}%</div>
                )}
              </div>
            </div>
            <div>
              <div className="w-[20px] h-[20px] mx-auto">{record.symbol}</div>
              <a className="font-normal py-[2px] text-[12px] leading-3">{record.name}</a>
              <div>
                {record.change > 0 ? (
                  <div className="text-center text-[12px] text-[#3ACC8A]">{record.change}%</div>
                ) : (
                  <div className="text-center text-[12px] text-[#DF5F67]">{record.change}%</div>
                )}
              </div>
            </div>
            <div>
              <div className="w-[20px] h-[20px] mx-auto">{record.symbol}</div>
              <a className="font-normal py-[2px] text-[12px] leading-3">{record.name}</a>
              <div>
                {record.change > 0 ? (
                  <div className="text-center text-[12px] text-[#3ACC8A]">{record.change}%</div>
                ) : (
                  <div className="text-center text-[12px] text-[#DF5F67]">{record.change}%</div>
                )}
              </div>
            </div>
          </div>
        </Link>
      ),
      width: 100,
    },
  ];
  return (
    <div className="mb:max-w-[360px] sm:max-w-[600px] md:max-w-[720px] lg:max-w-[970px] overflow-hidden">
      <Table
        scroll={{ x: "max-content" }}
        columns={columns as any}
        // get 4 rows
        dataSource={dataTrendingCoin.slice(0, 3)}
        pagination={false}
      />
    </div>
  );
};
