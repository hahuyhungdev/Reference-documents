import clsx from "clsx";
import React, { ComponentPropsWithoutRef, FC } from "react";

interface Props extends ComponentPropsWithoutRef<"button"> {
  title: string;
  prefixIcon?: JSX.Element;
  size?: "large" | "medium" | "small";
}

export const SocialButton: FC<Props> = ({
  title,
  size = "medium",
  prefixIcon,
}) => {
  return (
    <button
      className={clsx(
        "w-full flex items-center justify-center bg-white rounded-[2px] border-[1px] border-gray-300 transition-all hover:bg-gray-100",
        {
          "min-h-[50px]": size === "large",
          "min-h-[40px]": size === "medium",
          "min-h-[30px]": size === "small",
        }
      )}
    >
      <div className="flex items-center">
        {prefixIcon && <div className="mr-[10px]">{prefixIcon}</div>}
        <span className="text-[15px] font-medium">{title}</span>
      </div>
    </button>
  );
};
