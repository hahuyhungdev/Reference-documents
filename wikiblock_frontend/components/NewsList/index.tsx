import { IconStar } from '@components/Icons/IconStar';
import { IconWarning } from '@components/Icons/IconWarning';
import Skeleton from '@components/Skeleton';
import { Typography } from '@components/Typography';
import { News } from '@features/home/home.type';
import dayjs from 'dayjs';
import { take } from 'lodash';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { HiChevronDoubleRight } from 'react-icons/hi';

// export type Item = {
//   image: string;
//   title: string;
//   time: string;
//   tag: Array<String>;
//   star?: Number;
// };
const renderTags = (item: News): Array<JSX.Element> => {
  let maxRender = 3;
  const arrayElement: Array<JSX.Element> = [];

  {
    item.coin_tags &&
      take(item.coin_tags, maxRender).forEach((coin, index) => {
        maxRender = maxRender - 1;
        arrayElement.push(
          <Link href="/" key={`${item.id}-coin-${index}`}>
            <a className="lg:ml-0 lg:pr-1 text-[#4992d6]">#{coin}</a>
          </Link>,
        );
      });
  }

  {
    maxRender > 0 &&
      item.company_tags &&
      take(item.company_tags, maxRender).map((company, index) => {
        maxRender = maxRender - 1;
        arrayElement.push(
          <Link href="/" key={`${item.id}-company-${index}`}>
            <a className="lg:ml-0 lg:pr-1 text-[#4992d6]">#{company}</a>
          </Link>,
        );
      });
  }

  {
    maxRender > 0 &&
      item.categories &&
      take(item.categories, maxRender).map((category, index) => {
        maxRender = maxRender - 1;
        arrayElement.push(
          <Link href="/" key={`${item.id}-category-${index}`}>
            <a className="lg:ml-0 lg:pr-1 text-[#4992d6]">#{category}</a>
          </Link>,
        );
      });
  }

  return arrayElement;
};

export type Props = {
  item: News;
};
export const NewItem: FC<Props> = ({ item }) => {
  return (
    <div className="flex">
      <div className="w-[110px] h-[110px]">
        {item.photos && <Image src={item.photos[0]} width="100%" height="100vw" layout="fixed" alt={item.title} />}
      </div>
      <div className="pl-7">
        <Link href={`/news/${item.slug}`}>
          <a>
            <Typography className="font-[600] cursor-pointer hover:text-btn-primary" size="medium" color="secondary">
              {item.title}
            </Typography>
          </a>
        </Link>
        <div className="flex gap-x-2 italic text-[13px] font-nomal xl:space-x-1.5">
          <p className="lg:mb-0">{dayjs(item.created_at).format('DD MMM YYYY')}</p>
          {renderTags(item)}
        </div>
        {/* {typeof item.star == "undefined" ? (
          ""
        ) : (
          <div className="flex space-x-1.5 items-center">
            <IconWarning />
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((number) => {
                if (item.star !== undefined && number <= item.star) {
                  return <IconStar key={number} fill />;
                } else {
                  return <IconStar key={number} />;
                }
              })}
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export type PropNewsLists = {
  title: string;
  newItems: Array<News>;
  loading?: boolean;
};

const MAX_SHOW_SKELETON = 3;
export const NewsList: FC<PropNewsLists> = ({ title, newItems, loading = false }) => {
  const { t } = useTranslation(['common']);
  return (
    <div>
      <Typography size="medium" className="font-[600] pb-5 text-xl text-[#505050]">
        <div className="flex items-center space-x-[8px] uppercase sm:whitespace-nowrap sm:text-xl">
          <span className="uppercase">{title}</span>
          <a className="text-[extra_small] inline-block">
            <HiChevronDoubleRight />
          </a>
        </div>
      </Typography>
      {!loading
        ? newItems.map((item, index) => {
          return <NewItem item={item} key={item.id} />;
        })
        : new Array(MAX_SHOW_SKELETON).fill(0).map((_, index) => {
          return <Skeleton.News key={`news-${Math.random()}`}></Skeleton.News>;
        })}
      <Link href={`/news`}>
        <a className="block w-fit ml-auto mr-3">
          <span className="text-[14px]">{t('common:buttons.view_more')}</span>
        </a>
      </Link>
    </div>
  );
};
