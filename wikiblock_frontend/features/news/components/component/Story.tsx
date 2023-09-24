import { News } from '@features/news/new.type';
import { getDiffFromNow } from '@utils/dateTIme';
import clsx from 'clsx';
import Link from 'next/link';
import React, { FC } from 'react';
import { storiesProps } from 'types/common';

import s from '../split-featured/splitFeatured.module.css';

export const Story: FC<News | any> = ({ classStyle, news }: { classStyle?: string; news: News }) => {
  return (
    <div className={clsx(s[`${classStyle}`], s['li_post_excerpst'])}>
      <article className={clsx('', s['post_number'])}>
        <Link href={`/news/${news?.slug}`} passHref>
          <a className={clsx(s[`${classStyle}`], s['listpost-stories'])}>
            <div className={clsx(s['content'])}>
              <h2>{news?.title}</h2>
              <div className={clsx(s['listpost_meta'])}>
                {news?.author && <span className="post-author">{news?.author.full_name}</span>}
                {news?.created_at && (
                  <span className="post-date">{getDiffFromNow(new Date(news?.created_at as Date))}</span>
                )}
                {news?.minute_read && <span className="post-time">{news?.minute_read} min read</span>}
              </div>
            </div>
            <div className={clsx(s['cover'])}>
              <img src={news?.photos?.[0]} alt="news" />
            </div>
          </a>
        </Link>
      </article>
    </div>
  );
};
