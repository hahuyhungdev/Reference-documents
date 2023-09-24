import { IconLock } from "@components/Icons/IconLock";
import { IconUser } from "@components/Icons/IconUserLight";
import clsx from "clsx";
import React, { FC, forwardRef } from "react";

import s from "./TextInput.module.css";

export interface TextInputProps
  extends React.ComponentPropsWithoutRef<"input"> {
  inputError?: string;
  icon?: string;
  sizeInput?: string;
  ref?: any;
}
const icons = {
  user: <IconUser className="scale-[1.3] m-y-[12px] ml-[12px]" />,
  lock: <IconLock className="scale-[1.3] m-y-[12px] ml-[12px]" />,
};
export const TextInput: FC<TextInputProps> = forwardRef<
  HTMLInputElement,
  TextInputProps
>(function TextInput(
  { className, inputError, icon, sizeInput = "normal", ...restProps },
  ref
) {
  return (
    <div className={clsx(className, { [s.root]: icon })}>
      {/* Input */}
      <div
        className={clsx(s.inputWrapper, {
          [s.error]: Boolean(inputError),
          "h-[48px] text-[16px]": sizeInput === "large",
          "h-[40px] text-[14px]": sizeInput === "normal",
          "h-[32px] text-[14px]": sizeInput === "small",
        })}
      >
        {icon && icons[icon as "user" | "lock"]}
        <input ref={ref} type="text" className={s.input} {...restProps} />
      </div>
      {/* Error */}
      {inputError && <div className={s.inputError}>{inputError}</div>}
    </div>
  );
});
