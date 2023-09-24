import { SidebarProps } from "@features/token/components";
import Link from "next/link";
import { FC } from 'react';

type DropmenuProps = {
  title: string;
  url: string;
  children?: Array<SidebarProps>;
};
export const Dropmenu: FC<DropmenuProps> = ({ title, url, children }) => {
  return (
    <div className="border-b-[2px] border-[#E5E7EE] my-1 last:border-b-0">
      <Link href={url} passHref>
        <a>
          <span className="hover:text-[#f4ac20] my-1 menu-items menu-sub-item text-[#3a3939] inline-block font-[500]">
            {title}
          </span>
        </a>
      </Link>
      {
        children &&
        <div className="ml-auto mr-[15px]">
          {children.map((children: any, index: number) => (
            <Link key={index} href={children.url} passHref>
              <a className="menu-items menu-sub-item">
                {children.title}
              </a>
            </Link>
          ))}

        </div>
      }
    </div>
  );
};

