import { InputNumber } from 'antd';
import clsx from "clsx";
import { forwardRef } from "react";

import inputStyles from "../InputValue.module.scss";
import { SearchInputProps } from "../SearchInput";

export const SearchInputValue = forwardRef<HTMLInputElement, SearchInputProps>(
  function SearchInputValue({ className, size, placeholder, ...restProps }, ref) {
    return (
      <div className={clsx(className, inputStyles.inputWrapper)}>
        <InputNumber className={clsx(inputStyles.input, inputStyles.inputNumber)} placeholder={placeholder} />
        <div className={clsx(inputStyles.lastInput)}>%</div>
      </div>
    );
  }
);
