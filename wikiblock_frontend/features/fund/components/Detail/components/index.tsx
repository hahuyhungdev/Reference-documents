import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

import s from "../detail.module.css";

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
  const router = useRouter();
  return (
    <div
      className={clsx(
        s["child_menuleft"],
        "hover:bg-[#D9D9D9] px-[10px] h-8 rounded-sm border-b-[1px] border-[#E5E7EE] flex items-center",
        // isBackground ? "isBackground_color" : "" 
        isBackground ? "bg-[#D9D9D9]" : ""
      )}
    >
      <Link href={url}>
        <a className={clsx(
          isBackground ? "isBackground_color" : ""
        )}>{title}</a>
      </Link>
    </div>
  );
};
