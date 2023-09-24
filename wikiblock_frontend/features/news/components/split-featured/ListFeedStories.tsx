import { dataStories } from '@features/news/data/datastories';
import { News } from '@features/news/new.type';
import { newsConfig } from '@features/news/news.config';
import clsx from 'clsx';
import { omit } from 'lodash';
import { useTranslation } from 'react-i18next';
import { storiesProps } from 'types/common';
import { I18nActiveNamespaces } from 'types/i18n';

import { Story } from '../component/Story';
import s from './splitFeatured.module.css';

export const ListFeedStories = ({ newsList = [] }: { newsList: News[] }) => {
  const { t } = useTranslation<I18nActiveNamespaces<'common' | 'events' | 'news'>>(newsConfig.i18nNamespaces);
  return (
    <div className={clsx(s['list-feed-stories'])}>
      <h3 className={clsx(s['widget-title'])}>{t('news:featured_stories')}</h3>
      <div className={clsx(s['post'])}>
        {newsList.map((item: News, index: number) => {
          return (
            <Story key={item.id} news={item as any} classStyle={index === newsList.length - 1 ? 'last-child' : ''} />
          );
        })}
      </div>
    </div>
  );
};
