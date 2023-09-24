import { IconEye, IconEyeOff } from "@components/Icons";
import { IconLock } from "@components/Icons/IconLock";
import clsx from "clsx";
import React, { forwardRef, useMemo, useState } from "react";

import inputStyles from "../TextInput/TextInput.module.css";
import s from "./PasswordInput.module.css";

export interface PasswordInputProps
  extends React.ComponentPropsWithoutRef<"input"> {
  inputError?: string;
  icon?: string;
  sizeInput?: string;
}

const icons = {
  user: <IconLock className="scale-[1.3] m-y-[12px] ml-[12px]" />,
  lock: <IconLock className="scale-[1.3] m-y-[12px] ml-[12px]" />,
};
export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  function PasswordInput(
    { className, inputError, icon, sizeInput = "normal", ...restProps },
    ref
  ) {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const suffixIcon = useMemo(() => {
      if (showPassword) {
        return (
          <IconEye className={s.icon} onClick={() => setShowPassword(false)} />
        );
      }
      return (
        <IconEyeOff className={s.icon} onClick={() => setShowPassword(true)} />
      );
    }, [showPassword]);

    return (
      <div className={clsx(inputStyles.root, className)}>
        {/* Input */}
        <div
          className={clsx(inputStyles.inputWrapper, {
            [inputStyles.error]: Boolean(inputError),
            "h-[48px]": sizeInput === "large",
            "h-[40px]": sizeInput === "normal",
          })}
        >
          {icon && icons[icon as "user" | "lock"]}

          <input
            ref={ref}
            type={showPassword ? "text" : "password"}
            className={inputStyles.input}
            {...restProps}
          />
          <div className={s.suffixBox}>{suffixIcon}</div>
        </div>
        {/* Error */}
        {inputError && (
          <div className={inputStyles.inputError}>{inputError}</div>
        )}
      </div>
    );
  }
);
