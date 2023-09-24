import clsx from "clsx";
import React, { FC } from "react";

import { TableOfContent as TableOfContentType } from "../../news.slice";

interface Props {
  items: Array<TableOfContentType>;
  active: string;
}

const TableOfContent: FC<Props> = ({ items, active }) => {
  return (
    <ul className="p-[10px] rounded border-[1px] border-gray-300 sticky top-[100px]">
      {items.map((item) => (
        <li
          key={item.id}
          className={clsx({
            // "list-disc": item.level > 2,
          })}
        >
          <a href={`#${item.id}`} className="text-black">
            <p
              style={{ marginLeft: (item.level - 2) * 10 + "px" }}
              className={clsx(
                "cursor-pointer hover:text-btn-primary mb-[8px]",
                {
                  "text-btn-primary font-bold": item.id === active,
                }
              )}
            >
              {item.content}
            </p>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default TableOfContent;
