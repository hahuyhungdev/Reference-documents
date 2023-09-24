import { News } from "@features/home/home.type";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

dayjs.extend(require("dayjs/plugin/relativeTime"));

interface Props {
  news: News;
}

const TopNews: FC<Props> = ({ news }) => {
  const dayjsFormat = dayjs as any;

  return (
    <div className="flex items-center gap-x-[15px] rounded border-[1px] border-gray-300 p-[10px]">
      <div className="flex-1">
        <Link href={`/news/${news.slug}`}>
          <a>
            <p className="text-[13px] mb-[5px]">{news.title}</p>
          </a>
        </Link>
        <div>
          <span className="mr-[10px] text-[12px] text-gray-300">
            {dayjsFormat(news.created_at).fromNow(true)}
          </span>
        </div>
      </div>
      {news.photos && news.photos.length && (
        <div className="flex-1 w-full h-full min-h-[50px] max-h-[80px] max-w-[120px] relative">
          <Image src={news.photos[0]} alt="a" layout="fill" objectFit="cover" />
        </div>
      )}
    </div>
  );
};

export default TopNews;
