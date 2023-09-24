import { News } from "@features/home/home.type";
import { Avatar } from "antd";
import dayjs from "dayjs";
import Link from "next/link";
import React, { FC } from "react";

dayjs.extend(require("dayjs/plugin/relativeTime"));

interface Props {
  news: News;
}

const SubArticle: FC<Props> = ({ news }) => {
  const dayjsFormat = dayjs as any;
  return (
    <div className="rounded border-[1px] border-gray-300 p-[10px]">
      <div className="flex items-center gap-x-[10px]">
        <Avatar src={news.author.avatar}>
          {!news.author.avatar &&
            news.author.full_name.charAt(0).toLocaleUpperCase()}
        </Avatar>
        <div className="">
          <h4 className="text-[14px]">{news.author.full_name}</h4>
          <p className="mb-0 text-[11px] text-gray-600">
            {dayjsFormat(news.created_at).fromNow(true)}
          </p>
        </div>
      </div>
      <Link href={`/news/${news.slug}`}>
        <a>
          <p className="text-[12px] mb-0 mt-[5px]">{news.title}</p>
        </a>
      </Link>
    </div>
  );
};

export default SubArticle;
