import { News } from '@features/news/new.type';
import { newsConfig } from '@features/news/news.config';
import { getDiffFromNow } from '@utils/dateTIme';
import clsx from 'clsx';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { I18nActiveNamespaces } from 'types/i18n';

import s from './splitFeatured.module.css';
export const ListFeedMain: React.FC<{ news: News | undefined }> = ({ news = {} }) => {
  const { t } = useTranslation<I18nActiveNamespaces<'common' | 'events' | 'news'>>(newsConfig.i18nNamespaces);
  return (
    <div className={clsx('', s['list-feed-main'])} key={news?.id}>
      <h3 className={clsx(s['widget_title'])}>{new Date(news?.created_at as Date).toDateString()}</h3>
      <div className={clsx('border-b-0 mb-0 p-0', s['listpost'])}>
        <article className={clsx(s['post-number'])}>
          <div className={clsx(s['content'])}>
            <h2>
              <Link href="/news/1" passHref>
                <a className={clsx(s[''])}>{news?.title}</a>
              </Link>
            </h2>
            <div className={clsx(s['listpost_meta'])}>
              <span className="post-author">{news?.author?.full_name}</span>
              <span className="post-read">{getDiffFromNow(new Date(news?.created_at as Date))}</span>
              <span className="post-time">{news?.minute_read && news?.minute_read + 'read'} </span>
            </div>
          </div>
          <Link href="/news/demo" passHref>
            <div className={clsx(s['cover'])}>
              <img src={news?.photos?.[0]} alt="news" />
            </div>
          </Link>
        </article>
      </div>
    </div>
  );
};
