import { Button } from '@components/Button';
import { IconRightArrowButton, IconView } from '@components/Icons';
import { Typography } from '@components/Typography';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import s from './newlist.module.css';
export type Item = {
  image: string;
  title: string;
  view: number;
  time: string;
  author: string;
  url: string;
};
export type Props = {
  item: Item;
};
export const NewItem: FC<Props> = ({ item }) => {
  return (
    <div className="flex">
      <div className="h-full">
        <Image src={item.image} width="115px" height="115x" layout="fixed" alt={item.title} />
      </div>
      <div className="pl-[22px] sm:pl-3">
        <Typography className="font-[400]" size="medium" color="secondary">
          {/* {item.title} */}
          <Link href={item.url}>
            <a>{item.title}</a>
          </Link>
        </Typography>
        <div className="flex flex-wrap sm:gap-x-[2px] gap-x-4 italic text-[13px] font-nomal xl:space-x-1.5 items-center">
          <div className="flex items-center gap-x-1">
            <p className="mb-0">{item.view}</p>
            <IconView />
          </div>
          <p className="mb-0">{item.time}</p>
          <p className="mb-0">{item.author}</p>
        </div>
        <div
          className={clsx(
            'mt-[10px] lg:mt-0 flex items-center justify-center gap-x-1 bg-[#E5E7EE] w-[100px] h-[25px] rounded-[30px]',
            s['custombutton'],
          )}
        >
          <Link href={item.url}>
            <a className={clsx('text-[#696969] text-[12px]', s['alink'])}>Xem thêm</a>
          </Link>
          <IconRightArrowButton />
        </div>
      </div>
    </div>
  );
};

export type PropNewsLists = {
  newItems: Array<Item>;
};
export const Token: FC<PropNewsLists> = ({ newItems }) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
      {newItems.map((item, index) => {
        return <NewItem item={item} key={index} />;
      })}
    </div>
  );
};
