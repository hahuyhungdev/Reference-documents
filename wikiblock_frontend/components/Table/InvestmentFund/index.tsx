/* eslint-disable jsx-a11y/alt-text */
import { IconDropdownSort } from "@components/Icons";
import { fundConfig } from "@features/fund/fund.config";
import { Table } from "antd";
import clsx from "clsx";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { I18nActiveNamespaces } from "types/i18n";

import { dataFunds } from "../data/dataFunds";
import s from "./index.module.css";

type Props = {};

export const InvestmentFund = (props: Props) => {
  const { t } = useTranslation<I18nActiveNamespaces<"common" | "fund">>(
    fundConfig.i18nNamespaces
  )
  const columns = [
    {
      title: <div className="text-center">
        #</div>,
      dataIndex: "key",
      key: "key",
      render: (row: any) => <div className="text-center">{row}</div>,
      width: 20,
    },
    {
      title: <div className="text-center">  {t("fund:overview.fund")}</div>,
      dataIndex: "funds",
      key: "funds",
      render: (row: any) => (
        <div className="text-center">
          <Link href={`/fund/${row}`} passHref>
            <a className="text-[#050F19]">{row}</a>
          </Link>
        </div>
      ),
      width: 50,
    },
    {
      title: <div className="text-center">{t("fund:overview.type")}</div>,
      dataIndex: "type",
      key: "type",
      render: (row: any) => (
        <div className="text-center">
          <span className="text-[#050F19]">{row}</span>
        </div>
      ),
      width: 30,
    },
    {

      title:
        <div className=" flex items-baseline gap-[3px] justify-center ">
          <span>{t("fund:overview.launched")}</span>
          <IconDropdownSort />
        </div>
      ,
      dataIndex: "launched",
      key: "launched",
      render: (row: any) => (
        <div className="text-center">
          <span className="text-[#050F19]">{row}</span>
        </div>
      ),
      width: 30,
    },
    {
      title:
        <div className="flex items-baseline gap-[3px] justify-center">
          <span>{t("fund:overview.current_roi")}</span>
          <IconDropdownSort />
        </div>,
      dataIndex: "current_roi",
      key: "current_roi",
      render: (row: any) => (
        <div className="text-center">
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
      title: <div className="flex items-baseline gap-[3px] justify-center">
        <span>{t("fund:overview.ath_roi")}</span>
        <IconDropdownSort />
      </div>,
      dataIndex: "ath_roi",
      key: "ath_roi",
      render: (row: any) => (
        <div className="text-center">
          {row ? (
            <span className="text-[#050F19]">${row}</span>
          ) : (
            <span>NAN</span>
          )}
        </div>
      ),
      width: 50,
    }, {
      title: <div className="flex items-baseline gap-[3px] justify-center">
        <span>{t("fund:overview.projects")}</span>
        <IconDropdownSort />
      </div>,
      dataIndex: "projects",
      key: "projects",
      render: (row: any) => (
        <div className="text-center">
          {row ? (
            <span className="text-[#050F19]">{row}B</span>
          ) : (
            <span>NAN</span>
          )}
        </div>
      ),
      width: 50,
    },
    {
      title: <div className="flex items-baseline gap-[3px] justify-center">
        <span>{t("fund:overview.funding")}</span>
        <IconDropdownSort />
      </div>,
      dataIndex: "funding",
      key: "funding",
      render: (row: any) => (
        <div className="text-center">
          {row ? (
            <span className="text-[#050F19]">{row}B</span>
          ) : (
            <span>NAN</span>
          )}
        </div>
      ),
      width: 50,
    },
    {
      title: <div className="text-center">{t("fund:overview.typical_project")}</div>,
      dataIndex: "typical_project",
      key: "typical_project",
      render: (_: any, record: any) => (
        <div className={clsx(s["typecal"])}>
          {record.typical_project.map((item: any, index: any) => (
            <Link key={index} href={`/assets/${item.key}`} passHref>
              <a className="w-[20px] h-[20px] cursor-pointer">
                <span className="text-center">{item}</span>
              </a>
            </Link>
          ))}
        </div>
      ),
      width: 100,
    },
    {
      title: <div className="text-center">{t("fund:overview.typical_category")}
      </div>,
      dataIndex: "typical_category",
      key: "typical_category",
      render: (row: any) => (
        <div className="text-center">
          <div className="text-[#050F19]">{row.name}</div>
          <div className="text-[#FF9900]">{row.value}%</div>
        </div>
      ),
      width: 100,
    },
    {
      title: <div className="text-center">{t("fund:overview.tier")}</div>,
      dataIndex: "tier",
      key: "tier",
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
    <div className="table-custom mb:max-w-[360px] sm:max-w-[600px] md:max-w-[720px] lg:max-w-[970px] overflow-hidden">
      <Table
        scroll={
          { x: "max-content" }
        }
        columns={columns as any}
        dataSource={dataFunds}
        pagination={false}
      />
    </div>
  );
};
