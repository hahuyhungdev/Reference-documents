/* eslint-disable jsx-a11y/alt-text */
import ProgressiveLineChart from "@components/ChartJs/ProgressiveLine";
import Image from "next/image";
import { type } from "os";
export interface TableFundsProps {
  key: string;
  name: string;
  symbol: any;
  timeming: string;
  round: string;
  price: number;
  amount: number;
  current_roi?: number;
  lookup: string;
  category: string;
  raised?: number;
  funding_date?: number;
  description?: string;
  project: string

}
export const dataResearchPortfolio: TableFundsProps[] = [
  {
    key: "1",
    name: "Bitcoin",
    symbol: <Image src="/images/Symbols/BTC.png" width={32} height={32} />,
    timeming: "Q3 2022",
    round: "Round A",
    price: 37552.63,
    amount: 0.01,
    current_roi: 0.01,
    lookup: "BTC",
    category: "Crypto",
    project: "Crypto",
    raised: 0.01,
    funding_date: 0.01,
    description: "blala",
  },
  {
    key: "2",
    name: "ETH",
    symbol: <Image src="/images/Symbols/ETH.png" width={32} height={32} />,
    timeming: "Q3 2022",
    round: "Round A",
    price: 37552.63,
    amount: 0.01,
    current_roi: 0.01,
    lookup: "BTC",
    category: "Crypto",
    project: "Crypto",
    raised: 0.01,
    funding_date: 0.01,
    description: "blala",
  },
  {
    key: "3",
    name: "ETH",
    symbol: <Image src="/images/Symbols/ETH.png" width={32} height={32} />,
    timeming: "Q3 2022",
    round: "Round A",
    price: 37552.63,
    amount: 0.01,
    current_roi: 0.01,
    lookup: "BTC",
    category: "Crypto",
    project: "Crypto",
    raised: 0.01,
    funding_date: 0.01,
    description: "blala",
  },
  {
    key: "4",
    name: "ETH",
    symbol: <Image src="/images/Symbols/ETH.png" width={32} height={32} />,
    timeming: "Q3 2022",
    round: "Round A",
    price: 37552.63,
    amount: 0.01,
    current_roi: 0.01,
    lookup: "BTC",
    category: "Crypto",
    project: "Crypto",
    raised: 0.01,
    funding_date: 0.01,
    description: "blala",
  },
];
