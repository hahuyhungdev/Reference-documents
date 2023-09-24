import { IconRightArrow } from '@components/Icons';
import { Event } from '@features/events/events.type';
import { dataStories } from '@features/news/data/datastories';
import { newsConfig } from '@features/news/news.config';
import { formatDateTime } from '@utils/dateTIme';
import clsx from 'clsx';
import { omit, pick } from 'lodash';
import Link from 'next/link';
import React from 'react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { storiesProps } from 'types/common';
import { I18nActiveNamespaces } from 'types/i18n';

import { ButtonLoadMore } from '../component/Button';
import { Story } from '../component/Story';
import main from '../news.module.css';
import s from './sidebar.module.css';

export const Sidebar = ({ topNewsList = [], newsList = [], eventList = [] }) => {
  const { t } = useTranslation<I18nActiveNamespaces<'common' | 'events' | 'news'>>(newsConfig.i18nNamespaces);
  return (
    <div className={clsx(main['sidebar'], main['edge'], main['right'])}>
      <div className="float-right sticky z-10 top-[64px]">
        {/* section first */}
        <section className={clsx(s['widget'])}>
          <header>
            <h2 className={clsx(s['widget-title'])}>{t('news:featured_video')}</h2>
          </header>
          <div className={clsx(s['list-feed'])}>
            {newsList.slice(0, 1).map((item: storiesProps, index: number) => {
              return <Story key={index} classStyle={'featured-video'} news={item} />;
            })}
          </div>
        </section>
        {/* end  section first */}
        <section className={clsx(s['widget'])}>
          <header>
            <h2 className={clsx(s['widget-title'])}>{t('news:crypto_nft_events')}</h2>
          </header>
          <div className={clsx(s['list-feed'])}>
            {eventList.map((item: Event, index: number) => {
              return (
                // check whether the item is last-child ? if yes, add class "first-child" to the item
                <div key={index} className={clsx(s['posts'])}>
                  <div className={clsx(s['object'], s['list'])}>
                    <div className={clsx(s['post-number'], s['hentry'])}>
                      <Link href={`/events/${item.slug}`} passHref>
                        <a className={clsx(s['content'], s['clearfix'])}>
                          <img className={clsx(s['logo'])} src={item?.banners?.[0]} alt="news" />
                          <div className={clsx(s['title'])}>
                            <h4>{item.name}</h4>
                            <span className={clsx(s['meta'])}>
                              {formatDateTime(new Date(item.start_date as any), 'MMMM DD, yyyy')} • {item.country}
                            </span>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section className={clsx(s['widget'])}>
          <header>
            <h2 className={clsx(s['widget-title'])}>{t('news:top_news')}</h2>
          </header>
          <div className={clsx(s['list-feed'])}>
            {topNewsList.map((item: storiesProps, index: number) => {
              return <Story key={index} news={item} classStyle={'trending-news'} />;
            })}
          </div>
        </section>
        <section className={clsx(s['widget'])}>
          <header>
            <h2 className={clsx(s['widget-title'])}>{t('news:press_releases')}</h2>
          </header>
          <div className={clsx(s['list-feed'])}>
            {dataStories.slice(0, 4).map((item: storiesProps, index: number) => {
              return <Story key={index} {...omit(item, ['time_read'])} classStyle={'trending-news'} />;
            })}
          </div>
        </section>
        <div className={clsx(main['btn-container'])}>
          <ButtonLoadMore title={t('news:view_all_prs')} />
          <ButtonLoadMore title={t('news:submit_pr')} />
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
