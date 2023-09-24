import clsx from "clsx";
import React from "react";
import { FC } from "react";

export type Props = {
  size?: "small" | "medium" | "large" | "extra_small";
  color?:
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "dark_green"
  | "dark_blue";

  children?: JSX.Element | string;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "div";
  className?: string;
};

export const Typography: FC<Props> = ({
  size,
  children,
  color,
  variant = "div",
  className,
  ...props
}) => {
  return React.createElement(
    variant,
    {
      ...props,
      className: clsx(className, {
      }, {
        "text-[#4992D6]": color === "primary",
        "text-[#343434]": color === "secondary",
        "text-[#3ACC8A]": color === "success",
        "text-[#DF5F67]": color === "danger",
        "text-[#587088]": color === "dark_green",
        "text-[#113353]": color === "dark_blue",
        "text-[14px]": size === "small",
        "text-[16px]": size === "medium",
        "text-[20px]": size === "large",
        "text-[13px]": size === "extra_small",
      }),
    },
    children
  );
};
