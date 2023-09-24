import { IconRightArrow } from '@components/Icons';
import { PER_PAGE } from '@features/news/new.contant';
import { News } from '@features/news/new.type';
import { newsConfig } from '@features/news/news.config';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { I18nActiveNamespaces } from 'types/i18n';

import main from '../news.module.css';
import { ListFeedMain } from '../split-featured/ListFeedMain';
import { ListFeedStories } from '../split-featured/ListFeedStories';
import s from '../split-featured/splitFeatured.module.css';
import ListFeed from './list-feed';

export const Newsfeed = ({
  newsList = [],
  page = 1,
  per_page = PER_PAGE,
  showLoadMore = true,
  onLoadMore,
  loadMoreParams,
}: {
  newsList: News[];
  page?: number;
  per_page?: number;
  showLoadMore?: Boolean;
  onLoadMore?: (params: any) => void;
  loadMoreParams?: {
    page?: number;
    per_page: number;
  };
}) => {
  const { t } = useTranslation<I18nActiveNamespaces<'common' | 'events' | 'news'>>(newsConfig.i18nNamespaces);
  console.log({ newsList });
  const [_mainNews, ..._storiesNews] = newsList.slice(0, 6);
  const __otherNews = newsList.slice(6) || [];
  const [mainNews, setMainNews] = React.useState<News>(_mainNews);
  const [storiesNews, setStoriesNews] = React.useState<News[]>(_storiesNews ?? []);
  const [otherNews, setOtherNews] = React.useState<News[]>(__otherNews ?? []);
  // debugger;
  useEffect(() => {
    if (newsList) {
      const [_mainNews, ..._storiesNews] = newsList.slice(0, 6);
      const __otherNews = newsList.slice(6) || [];
      _mainNews && setMainNews({ ..._mainNews });
      _storiesNews && setStoriesNews([..._storiesNews]);
      __otherNews && setOtherNews(__otherNews);
    }
  }, [newsList]);

  return (
    <div className={clsx(main['news-feed'])}>
      <div className={clsx(s['split_feature'])}>
        <ListFeedMain news={mainNews} key={mainNews?.id} />
        <ListFeedStories newsList={storiesNews} />
      </div>
      mainNews
      {showLoadMore && (
        <div
          onClick={() => {
            onLoadMore && onLoadMore.call(null, loadMoreParams);
          }}
          className={clsx(main['btn-container'])}
        >
          <a className={clsx(main['load-more'])}>
            <div className="flex justify-center items-center gap-1 cursor-pointer">
              <span className="cursor-pointer">{t('news:read_more_news')}</span>
              <div className="mb-1">
                <IconRightArrow />
              </div>
            </div>
          </a>
        </div>
      )}
    </div>
  );
};
export default Newsfeed;
