import { Checkbox } from 'antd';
import clsx from "clsx";
import { FC } from "react";

import s from "../index.module.css";
interface Props {
  isMobile: boolean;
  dataOptions: any
}


const CreatChartCheckbox: FC<Props> = ({ isMobile, dataOptions }) => {
  return (
    <div
      className={clsx("font-normal",
        isMobile && s["blockchain-filter-date-wrapper"]
      )}
    >
      <Checkbox.Group options={dataOptions} />
    </div>
  );
};

export default CreatChartCheckbox;
