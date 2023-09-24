import { IconSearch } from "@components/Icons";
import clsx from "clsx";
import React, { forwardRef } from "react";

import inputStyles from "../Input.module.scss";

export interface SearchInputProps
  extends Omit<React.ComponentPropsWithoutRef<"input">, "size"> {
  size?: "x-large" | "large" | "medium";
  className?: string;
  placeholder?: string;
  value?: string;
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  function SearchInput({ className, size, ...restProps }, ref) {
    return (
      <div className={clsx(inputStyles.root, className)}>
        <div
          className={clsx(inputStyles.inputWrapper, {
            [inputStyles.sizeXLarge]: size === "x-large",
            [inputStyles.sizeLarge]: size === "large",
            [inputStyles.sizeMedium]: size === "medium",
          })}
        >
          <div className="pl-[10px] pr-[9px] mt-[3px] ">
            <IconSearch width={18} height={18} />
          </div>
          <input
            placeholder={restProps.placeholder}
            ref={ref}
            type="text"
            className={inputStyles.input}
            {...restProps}
          />
        </div>
      </div>
    );
  }
);
