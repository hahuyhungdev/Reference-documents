import { Avatar } from "antd";
import dayjs from "dayjs";
import Image from "next/image";
import React, { FC } from "react";

export type Banner = {
  heading: string;
  description: string;
  image?: string;
  author: {
    name: string;
    image?: string;
  };
  createdAt: Date;
  updatedAt?: Date;
};
interface Props {
  item: Banner;
}

const NewsBanner: FC<Props> = ({ item }) => {
  return (
    <div className="flex gap-x-[50px] gap-y-[20px] flex-row lg:flex-col">
      <div className="flex-1">
        <h2 className="text-[#333] text-[32px] leading-tight mb-[10px] md:text-[26px]">
          {item.heading}
        </h2>
        <p className="text-[18px] text-[#5b5e5c] leading-[1.3]">
          {item.description}
        </p>
        <div className="my-[10px] w-full h-[1px] border-t-[1px] border-gray-300"></div>
        <div className="flex items-center">
          <div className="flex-1 flex gap-x-[10px] items-center pr-[10px] border-r-[1px] border-r-gray-300 border-r-dotted">
            <Avatar src={item.author?.image} size={40}>
              {item.author.name.charAt(0).toLocaleUpperCase()}
            </Avatar>
            <div>
              <h3 className="mb-0 text-[13px] text-[#797f84] cursor-pointer hover:text-btn-primary">
                {item.author.name}
              </h3>
              <p className="mb-0 text-[12px] text-[#747474]">
                {dayjs(item.createdAt).format("HH:mm DD/MM/YYYY")}
              </p>
            </div>
          </div>
          {item.updatedAt && (
            <div className="flex-1 pl-[10px] mb:hidden block">
              <p className="text-[12px] text-[#747474] font-semibold">
                Updated:{" "}
                <span className="font-normal text-gray-500">
                  {item.updatedAt}
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
      {item.image && (
        <div className="flex-1">
          <div className="relative w-full h-full min-h-[200px] lg:min-h-[350px] mb:min-h-[150px]">
            <Image src={item.image} alt="a" layout="fill" />
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsBanner;
