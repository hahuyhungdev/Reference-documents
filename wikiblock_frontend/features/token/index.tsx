import { Button } from "@components/Button";
import { IconLove, IconRightArrow, IconStarYellow } from "@components/Icons";
import { SEOHeadProps } from "@components/SEOHead";
import { dataTrendingCoin } from "@components/Table/data/dataTrendingCoin";
import clsx from "clsx";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { I18nActiveNamespaces } from "types/i18n";

import { MainLeft } from "./MainLeft";
import { MainRight } from "./MainRight";
import { tokenConfig } from "./token.config";
import s from "./token.module.css";

type InformationItemProps = {
  title: string;
  value: any;
  icon?: any;
  rate?: number;
  className?: string;
}
export type LayoutProps = {
  headProps?: SEOHeadProps;
  hideFooter?: boolean;
  loading?: boolean;
  withSidebar?: boolean;

};
const InformationItem: FC<InformationItemProps> = ({
  title,
  value,
  icon,
  className,
  rate
}) => {
  return (
    <div className={clsx(s["header-item"], className)}>
      <span className={clsx(s['header-small'])}>{title} </span>
      <div className={clsx(s["header-item-value"])}> {value}</div>
    </div>
    // )
  );
};
export const Token: FC<LayoutProps> = ({ headProps, children }) => {
  const hashtag = [
    "Blockchain",
    "Ethereum",
    "Sectors",
    "AMM",
    "DeFi",
    "DEX",
    "Exchange",
    "Token",
  ];
  const { t } = useTranslation<
    I18nActiveNamespaces<"common" | "home" | "token">
  >(tokenConfig.i18nNamespaces);
  const data = dataTrendingCoin[0];
  return (
    <>
      <div className={clsx(s["asset-information"])}>
        <div className={clsx(s['header'])}>
          <div className={clsx(s['header-name-logo'])}>
            <div className={clsx(s['logo-container'])}>
              <img className={clsx(s['header-logo'])} src={data.symbol} alt="" />
            </div>
            <div className="block">  <div className="flex gap-x-2 items-center">
              <div className={clsx(s["information-item-name"])}>{data.name as any}</div>
              <h1> {data.rank}</h1>
              <IconStarYellow />
            </div>
              <div className="flex gap-x-2 items-center">
                <h3 className="font-semibold text-xs text-[#5b5b5b]"> {data.name as any}</h3>
                <IconLove />
              </div>
            </div>
          </div>
          <div className={clsx(s['stack-items'])}>
            <InformationItem title="UNI PRICE" value={data.price} />
            <InformationItem title="24H PRICE CHART" value={data.priceChart} />
            <InformationItem title="Rank #" value={data.rank} />
            <InformationItem title="MARKET CAP" value={data.marketCap} />
            <InformationItem title="24H VOLUME" value={data.Volume24h} />
            <InformationItem title="CIRC SUPPLY" value={data.marketCap} />
          </div>
        </div>
      </div>
      <div className={clsx(s["main"])}>
        <div className={clsx("col-span-1", s["mainLeft"])}>
          <MainLeft />
        </div>
        <div className={clsx("col-span-3 px-[24px] sm:px-3", s["mainContent"])}>
          <div className="hashtag flex items-center gap-[13px] sm:grid sm:grid-cols-4 my-[23px] md:justify-center">
            {hashtag.map((item: any, index: number) => (
              <Button
                key={index}
                className={clsx("not-italic sm:col-span-1 custom_button")}
              >
                <a className="text-[#010000] sm:truncate">{item}</a>
              </Button>
            ))}
          </div>
          {children}
        </div>
        <div className={clsx("col-span-1", s["mainRight"])}>
          <MainRight />
        </div>
      </div>
    </>
  );
};
