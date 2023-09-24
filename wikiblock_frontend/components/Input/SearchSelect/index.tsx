import { IconSearch } from "@components/Icons";
import { Select } from 'antd';
import clsx from "clsx";
import React, { FC, forwardRef } from "react";

import inputStyles from "../Input.module.scss";

type SearchSelectProps = {
  className?: string;
  placeholder?: string;
  optionFilterProp?: string;
  disabled?: boolean;
  value?: string;
  [key: string]: any;
  isIcon?: boolean;
  options: Array<{
    value: string | number;
    label: string;
  }>;
}

const onChange = (value: any) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: any) => {
  console.log('search:', value);
};

export const SearchSelect: FC<SearchSelectProps> = ({ ...props }) => {
  const { Option } = Select;
  return (
    <Select
      clearIcon={<IconSearch />}
      className={props.className}
      disabled={props.disabled}
      showSearch
      placeholder={props.placeholder}
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={(input, option) => (option?.children as any).toLowerCase?.().includes(input.toLowerCase())}
    >
      {props.options.map(({ value, label }) => (
        <Option key={value} value={value}>
          {label}
        </Option>
      ))}
    </Select>
  );
}
