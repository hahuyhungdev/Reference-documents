import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";

import s from "../token.module.css";

export type SidebarProps = {
  className?: string;
  url: string;
  title: string;
  isBackground: boolean;
};
export const Sidebar: FC<SidebarProps> = ({
  className,
  url,
  title,
  isBackground,
}) => {
  return (
    <div
      className={clsx(
        s["child_menuleft"],
        "hover:bg-[#D9D9D9] px-[10px] h-8 rounded-sm border-b-[1px] border-[#E5E7EE] flex items-center",
        isBackground ? "bg-[#D9D9D9]" : "" + +" font-medium"
      )}
    >
      <Link href={url}>
        <a>{title}</a>
      </Link>
    </div>
  );
};
