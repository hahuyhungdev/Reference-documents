import { Tooltip } from "antd";
import clsx from "clsx";
import { FC } from "react";
import { text } from "stream/consumers";

import s from "./index.module.css";
type typeProps = {
  dataProgress: Array<{
    name: string;
    value: number;
  }>;
  widthsize?: number | string;
  className?: string;
  colors: string[];
};
type dataWalletProps = {
  name: string;
  value: number;
}
export const dataWallet: Array<dataWalletProps> = [
  {
    name: "WETH",
    value: 38
  },
  {
    name: "COMP",
    value: 20,
  },
  {
    name: "KNC",
    value: 18.24,
  },
  {
    name: "SUSHI",
    value: 9.49,
  },
  {
    name: "Zeroca",
    value: 5.51,
  }
]

export const colorsProgress = ["#BF2065", "#22D398", "#FF8450", "#000000", "#D4E763"]
export const ProgressBarDynamic: FC<typeProps> = ({
  widthsize,
  dataProgress,
  colors
}) => {
  const remaining = 100 - dataProgress.reduce((a, b) => a + b.value, 0);
  return (
    <div className={clsx(s["progress"], widthsize)}>
      {
        dataProgress.map((item, index) => {
          return (
            <Tooltip key={index}
              title={`${item.name} : ${item.value}%`}
            >
              <div
                style={{ width: `${item.value}%`, backgroundColor: colors[index] }}
                className={clsx(s["progress-item"])}
              />
            </Tooltip>
          )
        })
      }
    </div>
  );
};
