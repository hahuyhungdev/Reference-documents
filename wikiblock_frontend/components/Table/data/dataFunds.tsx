/* eslint-disable jsx-a11y/alt-text */
import ProgressiveLineChart from "@components/ChartJs/ProgressiveLine";
import Image from "next/image";
import { type } from "os";
export interface TableFundsProps {
  key: string;
  name: string;
  symbol: any;
  rank?: number;
  price: number;
  shorten: string;
  change: number;
  volatilityDay?: number;
  priceChart?: any;
  marketCap?: number;
  volume?: number;
  volumeVolatility?: number;
  Volume24h?: number;
  potential?: string;
  reliability?: string;
  marketShare?: number;
  pairs?: number;
  launched?: number;
  rating?: string;
  progress?: number;
  funds?: string;
  type?: string;
  current_roi?: number;
  ath_roi?: number;
  investment?: number;
  funding?: number;
  typical_project?: Array<JSX.Element>;
  typical_category?: {
    name: string;
    value: number;
  }
  tier?: number;
  fundType?: string;
}
export const dataFunds: TableFundsProps[] = [
  {
    key: "1",
    name: "Bitcoin",
    shorten: "BTC",
    rank: 1,
    symbol: <Image src="/images/Symbols/BTC.png" width={42} height={42} />,
    priceChart: <ProgressiveLineChart />,
    price: 37552.63,
    change: 0.85,
    volatilityDay: 3.03,
    marketCap: 694.228,
    volume: 60.228,
    volumeVolatility: -1.03,
    Volume24h: 60.228,
    potential: "AAA",
    reliability: "AAA",
    marketShare: 22.6,
    pairs: 1115,
    launched: 1,
    rating: "AAA",
    progress: 60,
    funds: "Alameda Research",
    fundType: "Crypto",
    type: "Exchange",
    current_roi: 1000,
    ath_roi: 2000,
    investment: 128,
    funding: 7.2,
    typical_project: [
      <Image key="BTC" src='/images/Symbols/BTC.png' width={28} height={28} />,
      <Image key="ETH" src="/images/Symbols/ETH.png" width={28} height={28} />,
      <Image key="BTC" src='/images/Symbols/BTC.png' width={28} height={28} />,
    ],
    typical_category:
    {
      name: "Gamefi",
      value: 15
    },
    tier: 1
  },
  {
    key: "2",
    name: "Etherium",
    shorten: "ETH",
    rank: 2,
    symbol: <Image src="/images/Symbols/ETH.png" width={28} height={32} />,
    price: 29134.2,
    change: 1.03,
    volatilityDay: 1.03,
    priceChart: <ProgressiveLineChart />,
    marketCap: 102.228,
    volume: 702.22,
    volumeVolatility: 1.03,
    Volume24h: 104.231,
    potential: "AAA",
    reliability: "AAA",
    marketShare: 25.6,
    pairs: 515,
    launched: 5,
    rating: "BBB",
    progress: 60,
    funds: "Alameda Research",
    type: "Exchange",
    current_roi: 1000,
    ath_roi: 2000,
    investment: 128,
    funding: 7.2,
    typical_project: [
      <Image key="BTC" src='/images/Symbols/BTC.png' width={28} height={32} />,
      <Image key="BTC" src='/images/Symbols/BTC.png' width={28} height={32} />,
      <Image key="BTC" src='/images/Symbols/BTC.png' width={28} height={32} />,
    ],
    typical_category:
    {
      name: "Gamefi",
      value: 15
    },
    tier: 1
  },
  {
    key: "3",
    name: "Etherium 2",
    shorten: "ETH2",
    rank: 3,
    symbol: <Image src="/images/Symbols/ETH.png" width={28} height={32} />,
    price: 29134.2,
    change: 1.03,
    volatilityDay: 1.03,
    priceChart: <ProgressiveLineChart />,
    marketCap: 202.228,
    volume: 132.228,
    volumeVolatility: -1.03,
    potential: "AAA",
    reliability: "AAA",
    marketShare: 25.6,
    pairs: 515,
    launched: 5,
    rating: "AAA",
    progress: 60,
    funds: "Alameda Research",
    type: "Exchange",
    current_roi: 1000,
    ath_roi: 2000,
    investment: 128,
    funding: 7.2,
    typical_project: [
      <Image key="BTC" src='/images/Symbols/BTC.png' width={28} height={32} />,
      <Image key="BTC" src='/images/Symbols/BTC.png' width={28} height={32} />,
      <Image key="BTC" src='/images/Symbols/BTC.png' width={28} height={32} />,
    ],
    typical_category:
    {
      name: "Gamefi",
      value: 15
    },
    tier: 1
  },
  {
    key: "4",
    name: "Binance Coin2",
    shorten: "BNB",
    rank: 4,
    symbol: <Image src="/images/Symbols/BNB.png" width={28} height={32} />,
    price: 4470.29,
    change: -10.45,
    volatilityDay: 4.03,
    priceChart: <ProgressiveLineChart />,
    marketCap: 602.228,
    volume: 602.228,
    volumeVolatility: 1.03,
    potential: "AAA",
    reliability: "AAA",
    marketShare: 25.6,
    pairs: 515,
    launched: 5,
    rating: "BBB",
    progress: 60,
    funds: "Alameda Research",
    type: "Exchange",
    current_roi: 1000,
    ath_roi: 2000,
    investment: 128,
    funding: 7.2,
    typical_project: [
      <Image key="BTC" src='/images/Symbols/BTC.png' width={28} height={32} />,
      <Image key="BTC" src='/images/Symbols/BTC.png' width={28} height={32} />,
      <Image key="BTC" src='/images/Symbols/BTC.png' width={28} height={32} />,
    ],
    typical_category:
    {
      name: "Gamefi",
      value: 15
    },
    tier: 1
  }
];
