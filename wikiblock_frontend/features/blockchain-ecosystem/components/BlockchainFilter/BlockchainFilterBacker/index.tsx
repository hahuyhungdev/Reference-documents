import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import clsx from "clsx";
import React, { FC } from "react";

import s from "../index.module.css";

interface Props {
  isMobile: boolean;
  onChange: (e: CheckboxChangeEvent) => void;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const BlockchainFilterBacker: FC<Props> = ({ isMobile, onChange, options }) => {
  return (
    <div
      className={clsx(
        "grid grid-cols-4 gap-[10px]",
        isMobile && s["blockchain-filter-stage-wrapper"]
      )}
    >
      {options.map((option, index) => (
        <Checkbox
          onChange={onChange}
          key={`backer-${index}`}
          className="blockchain-filter-select-stage"
        >
          {option.label}
        </Checkbox>
      ))}
    </div>
  );
};

export default BlockchainFilterBacker;
