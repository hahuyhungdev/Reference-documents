import Link from "next/link";
import { FC } from "react";

export interface BreadCrumbProps {
  data: Array<{ name: string; href?: string }>;
}
export const BreadCrumb: FC<BreadCrumbProps> = ({ data }) => {
  return (
    <div className="flex gap-x-[16px]  text-[#000]">
      {data.map((item) =>
        item.href ? (
          <div className="flex gap-x-[16px] " key={item.name}>
            <Link href={item.href}>
              <a
                className={
                  "font-normal opacity-[0.45] hover:opacity-[0.65] hover:text-[black]"
                }
              >
                {item.name}
              </a>
            </Link>
            <span className="opacity-[0.45]">/</span>
          </div>
        ) : (
          <div key={item.name} className={"font-normal opacity-[0.65]"}>
            {item.name}
          </div>
        )
      )}
    </div>
  );
};
