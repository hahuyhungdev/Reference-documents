import clsx from "clsx";
import { FC } from "react";

import s from "./Alert.module.css";

export type AlertProps = {
  /** Type of Alert styles */
  type: "success" | "error";
  /** Content of Alert */
  message?: string;
};

export const Alert: FC<AlertProps> = ({ type, message }) => {
  return (
    <div
      className={clsx(s.root, {
        [s.success]: type === "success",
        [s.error]: type === "error",
      })}
    >
      <div className={s.message}>{message}</div>
    </div>
  );
};

export default Alert;
