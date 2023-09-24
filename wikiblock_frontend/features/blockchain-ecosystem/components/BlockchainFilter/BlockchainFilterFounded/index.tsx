import { DatePicker } from "antd";
import clsx from "clsx";
import React, { FC } from "react";

import s from "../index.module.css";

interface Props {
  isMobile: boolean;
  onChange:
    | ((value: moment.Moment | null, dateString: string) => void)
    | undefined;
}

const BlockchainFilterFounded: FC<Props> = ({ isMobile, onChange }) => {
  return (
    <div
      className={clsx(
        "flex items-center gap-x-[10px]",
        isMobile && s["blockchain-filter-date-wrapper"]
      )}
    >
      <DatePicker
        onChange={onChange}
        suffixIcon={null}
        placeholder="From"
        className="blockchain-filter-select-date"
      />
      <DatePicker
        onChange={onChange}
        suffixIcon={null}
        placeholder="To"
        className="blockchain-filter-select-date"
      />
    </div>
  );
};

export default BlockchainFilterFounded;
