import { dataStories } from '@features/news/data/datastories';
import { News } from '@features/news/new.type';
import { newsConfig } from '@features/news/news.config';
import { formatDateTime, getDiffFromNow, getHoursDiffBetweenDatesString } from '@utils/dateTIme';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { storiesProps } from 'types/common';
import { I18nActiveNamespaces } from 'types/i18n';

import s from './listFeed.module.css';
export const ListFeed = ({ newsList = [] }: { newsList: News[] | undefined }) => {
  const { t } = useTranslation<I18nActiveNamespaces<'common' | 'events' | 'news'>>(newsConfig.i18nNamespaces);
  return (
    <div className={clsx('', s['list-feed'])}>
      {newsList.map((item: News, index: number) => {
        return (
          <div key={item.id} className={s['list-post']}>
            <article className={clsx(s['post-number'])}>
              <Link href={`/news/${item.slug}`} passHref>
                <a className={clsx(s['clearfix'])}>
                  <div className={clsx(s['content'])}>
                    <h2>{item.title}</h2>
                    <div className={clsx(s['listpost_meta'])}>
                      <span className="post-author">{item.author.full_name}</span>
                      <span className="post-time">{getDiffFromNow(new Date(item.created_at as Date))}</span>
                      <span className="post-read">{item.minute_read ?? 0} minutes read</span>
                    </div>
                  </div>
                  <div className={clsx(s['excerpt'])}>
                    <p>{item.summary}</p>
                  </div>
                  <div className={clsx(s['cover'])}>
                    <img src={item?.photos?.[0] ?? '/images/news/feed1.jpg'} alt="news" />
                  </div>
                </a>
              </Link>
            </article>
          </div>
        );
      })}
    </div>
  );
};
export default ListFeed;
