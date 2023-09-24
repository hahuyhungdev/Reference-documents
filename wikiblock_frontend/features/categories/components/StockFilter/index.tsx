import { SelectOptions } from "@components/select";
import React from "react";

const options = [
  {
    value: 1,
    label: "1",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 3,
    label: "3",
  },
];
type StockFilterProps = {
  onChange: (value: string) => void;
  value: string;
  options: Array<{
    value: string;
    label: string;
    url_Image?: string;
  }>;
};
const StockFilter = () => {
  return (
    <div className="flex items-center gap-x-[10px]">
      <SelectOptions options={options} placeholder="Other" />
      <SelectOptions options={options} placeholder="1D" />
    </div>
  );
};

export default StockFilter;
