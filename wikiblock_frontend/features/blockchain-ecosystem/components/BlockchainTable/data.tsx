/* eslint-disable jsx-a11y/alt-text */
import ProgressiveLineChart from "@components/ChartJs/ProgressiveLine";
import { IconStar } from "@components/Icons/IconStar";
import Image from "next/image";

export const dataTrendingCoin = [
  {
    key: "1",
    name: "Bitcoin",
    rank: 1,
    symbol: <Image src="/images/Symbols/BTC.png" width={32} height={32} />,
    priceChart: <ProgressiveLineChart />,
    founded: 2007,
    change: 0.85,
    stage: "Struggle",
    dapp: 694.228,
    volume: 60.228,
    volumeVolatility: -1.03,
    Volume24h: 60.228,
    backer: "TRY 7.1T",
    fundraising: "115.9M",
    marketShare: 22.6,
    pairs: 1115,
    launched: 1,
    vote: <IconStar />,
    progress: 60,
  },
  {
    key: "2",
    name: "Etherium",
    rank: 2,
    symbol: <Image src="/images/Symbols/ETH.png" width={32} height={32} />,
    founded: 2007,
    change: 1.03,
    stage: "Struggle",
    priceChart: <ProgressiveLineChart />,
    dapp: 102.228,
    volume: 702.22,
    volumeVolatility: 1.03,
    Volume24h: 104.231,
    backer: "TRY 7.1T",
    fundraising: "115.9M",
    marketShare: 25.6,
    pairs: 515,
    launched: 5,
    vote: <IconStar fill />,
    progress: 60,
  },
  {
    key: "3",
    name: "Etherium 2",
    rank: 3,
    symbol: <Image src="/images/Symbols/ETH.png" width={32} height={32} />,
    founded: 2007,
    change: 1.03,
    stage: "Struggle",
    priceChart: <ProgressiveLineChart />,
    dapp: 202.228,
    volume: 132.228,
    volumeVolatility: -1.03,
    backer: "TRY 7.1T",
    fundraising: "115.9M",
    marketShare: 25.6,
    pairs: 515,
    launched: 5,
    vote: <IconStar />,
    progress: 60,
  },
  {
    key: "4",
    name: "Binance Coin2",
    rank: 4,
    symbol: <Image src="/images/Symbols/BNB.png" width={32} height={32} />,
    founded: 2007,
    change: -10.45,
    stage: "Struggle",
    priceChart: <ProgressiveLineChart />,
    dapp: 602.228,
    volume: 602.228,
    volumeVolatility: 1.03,
    backer: "TRY 7.1T",
    fundraising: "115.9M",
    marketShare: 25.6,
    pairs: 515,
    launched: 5,
    vote: <IconStar fill />,
    progress: 60,
  },
  {
    key: "5",
    name: "Cardano",
    rank: 5,
    symbol: <Image src="/images/Symbols/ADA.png" width={32} height={32} />,
    founded: 2007,
    change: -9.23,
    stage: "Struggle",
    priceChart: <ProgressiveLineChart />,
    dapp: 602.228,
    volume: 602.228,
    volumeVolatility: -1.03,
    backer: "TRY 7.1T",
    fundraising: "115.9M",
    marketShare: 25.6,
    pairs: 515,
    launched: 5,
    vote: <IconStar />,
    progress: 60,
  },
  {
    key: "6",
    name: "Dogecoin",
    rank: 6,
    symbol: <Image src="/images/Symbols/DOGE.png" width={32} height={32} />,
    founded: 2007,
    change: -8.87,
    stage: "Struggle",
    priceChart: <ProgressiveLineChart />,
    dapp: 602.228,
    volume: 602.228,
    volumeVolatility: 1.03,
    backer: "TRY 7.1T",
    fundraising: "115.9M",
    marketShare: 25.6,
    pairs: 515,
    launched: 5,
    vote: <IconStar />,
    progress: 60,
  },
  {
    key: "7",
    name: "Tether",
    rank: 7,
    symbol: <Image src="/images/Symbols/USDT.png" width={32} height={32} />,
    founded: 2007,
    change: 0.34,
    stage: "Struggle",
    priceChart: <ProgressiveLineChart />,
    dapp: 602.228,
    volume: 602.228,
    volumeVolatility: -1.03,
    backer: "TRY 7.1T",
    fundraising: "115.9M",
    marketShare: 25.6,
    pairs: 515,
    launched: 5,
    vote: <IconStar />,
    progress: 60,
  },
  {
    key: "8",
    name: "Binance Coin2",
    rank: 8,
    symbol: <Image src="/images/Symbols/XRP.png" width={32} height={32} />,
    founded: 2007,
    change: 5.17,
    stage: "Struggle",
    priceChart: <ProgressiveLineChart />,
    dapp: 602.228,
    volume: 602.228,
    volumeVolatility: 1.03,
    backer: "TRY 7.1T",
    fundraising: "115.9M",
    marketShare: 25.6,
    pairs: 515,
    launched: 5,
    vote: <IconStar fill />,
    progress: 60,
  },
  {
    key: "9",
    name: "Polkadot",
    rank: 9,
    symbol: <Image src="/images/Symbols/DOT.png" width={32} height={32} />,
    founded: 2007,
    change: 3.2,
    stage: "Struggle",
    priceChart: <ProgressiveLineChart />,
    dapp: 602.228,
    volume: 602.228,
    volumeVolatility: -1.03,
    backer: "TRY 7.1T",
    fundraising: "115.9M",
    marketShare: 25.6,
    pairs: 515,
    launched: 5,
    vote: <IconStar />,
    progress: 60,
  },
  {
    key: "10",
    name: "Computer",
    rank: 10,
    symbol: <Image src="/images/Symbols/ICT.png" width={32} height={32} />,
    founded: 2007,
    change: -8.87,
    stage: "Struggle",
    priceChart: <ProgressiveLineChart />,
    dapp: 602.228,
    volume: 602.228,
    volumeVolatility: 1.03,
    backer: "TRY 7.1T",
    fundraising: "115.9M",
    marketShare: 25.6,
    pairs: 515,
    launched: 5,
    vote: <IconStar fill />,
    progress: 60,
  },
];
