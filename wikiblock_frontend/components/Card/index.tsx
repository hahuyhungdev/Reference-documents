import clsx from "clsx";
import { FC } from "react";

export type CardProps = {
  className?: string;
  [key: string]: any;
};

export const Card: FC<CardProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={clsx(className, "px-[32px] py-[18px] bg-[white]")}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
