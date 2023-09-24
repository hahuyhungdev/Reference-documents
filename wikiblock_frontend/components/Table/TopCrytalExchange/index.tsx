/* eslint-disable jsx-a11y/alt-text */
import "antd/dist/antd.css";

import { Button } from "@components/Button";
import { homeConfig } from "@features/home/home.config";
import { useCheckMobileScreen } from "@hooks/useCheckMobileScreen";
import { Table } from "antd";
import clsx from "clsx";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { I18nActiveNamespaces } from "types/i18n";

import { dataTrendingCoin } from "../data/dataTrendingCoin";
import s from "./topexchange.module.css";

type Props = {};

export const TopCrytalExchange = (props: Props) => {
  const { t } = useTranslation<I18nActiveNamespaces<"common" | "home">>(
    homeConfig.i18nNamespaces
  );
  const { windowDimensions } = useCheckMobileScreen();
  const columns = [
    {
      title: <div className="text-center">#</div>,
      dataIndex: "key",
      key: "key",
      // fixed: "left",
      width: 20,
    },
    {
      title: <div className="text-center">{t("common:table.exchange")}</div>,
      dataIndex: "name",
      key: "name",
      render: (_: any, record: any) => (
        // <div className="sm:w-[170px] font-medium text-center flex">
        <Link href={`/assets/${record.name}`} passHref>
          <div className={clsx(s["Exchange"])}>
            <div className={clsx(s["token"])}>
              <span>{record.symbol}</span>
              <a>{record.name}</a>
            </div>
          </div >
        </Link>
      ),
      width: windowDimensions.width > 500 ? 150 : 170,
      // fixed: "left",
    },
    {
      title: <div className="  text-center">{t("common:table.volume_24h")}</div>,
      dataIndex: "Volume24h",
      key: "Volume24h",
      render: (row: any) => (
        <div className="font-normal text-center">
          {row ? (
            <span
              className="text-[#050F19]">${row}</span>
          ) : (
            <span>NAN</span>
          )}
        </div>
      ),
      width: 90,
    },
    {
      title: <div className="  text-center">{t("common:table.market_share")}</div>,
      dataIndex: "marketShare",
      key: "marketShare",
      render: (row: any) => (
        <div className="font-normal text-center">
          {row ? (
            <span className="text-[#050F19]">${row}</span>
          ) : (
            <span>NAN</span>
          )}
        </div>
      ),
      width: 120,
    },
    {
      title: <div className="  text-center">{t("common:table.pairs")}</div>,
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
      width: 60,
    },
    {
      title: <div className="  text-center">{t("common:table.launched")}</div>,
      dataIndex: "launched",
      key: "launched",
      render: (row: any) => (
        <div className="font-normal text-center">
          {row ? (
            <span className="text-[#050F19]">{row}</span>
          ) : (
            <span>NAN</span>
          )}
        </div>
      ),
      width: 80,
    },
    {
      title: <div className="  text-center">{t("common:table.rating")}</div>,
      dataIndex: "rating",
      key: "rating",
      render: (row: any) => (
        <div className="font-normal text-center text-white">
          {/* if (row === "AAA")  then color 0EC182. else row ==='BBB' then color #4992D6 */}
          {row === "AAA" ? (
            <Button className="bg-[#0EC182] h-[25px] w-[45px] rounded-[10px]">
              {row}
            </Button>
          ) : row === "BBB" ? (
            <Button className="bg-[#4992D6] h-[25px] w-[45px] rounded-[10px]">
              {row}
            </Button>
          ) : (
            <span>NAN</span>
          )}
        </div>
      ),
      width: 70,
    },
    // render priceChart
    {
      title: <div className=" text-center">{t("common:table.price_chart")}</div>,
      dataIndex: "priceChart",
      key: "priceChart",
      render: (row: any) => (
        <div className="max-w-[100px] max-h-[20px]">{row}</div>
      ),
      width: 80,
    },
  ];
  return (
    <div className="CryptoManyInsights mb:max-w-[360px] sm:max-w-[600px] md:max-w-[720px] lg:max-w-[970px] ">
      <Table
        scroll={{ x: "max-content" }}
        columns={columns as any}
        dataSource={dataTrendingCoin}
        pagination={false}
      />
    </div>
  );
};
