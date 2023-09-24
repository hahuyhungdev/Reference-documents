import { News } from '@features/news/new.type';
import { newsConfig } from '@features/news/news.config';
import clsx from 'clsx';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { I18nActiveNamespaces } from 'types/i18n';

import { ListFeedMain } from './ListFeedMain';
import { ListFeedStories } from './ListFeedStories';
import s from './splitFeatured.module.css';
export const SplitFeatured = ({
  _mainNews,
  _storiesNews = [],
}: {
  _mainNews: News | undefined;
  _storiesNews: News[];
}) => {
  const { t } = useTranslation<I18nActiveNamespaces<'common' | 'events' | 'news'>>(newsConfig.i18nNamespaces);
  console.log({
    _mainNews,
    _storiesNews,
  });
  const [mainNews, setMainNews] = React.useState<News | undefined>(_mainNews);
  const [storiesNews, setStoriesNews] = React.useState<News[]>(_storiesNews);
  useEffect(() => {
    _mainNews && setMainNews(_mainNews);
    _storiesNews && setStoriesNews(_storiesNews);
  }, [_mainNews, _storiesNews]);
  return (
    <div className={clsx(s['split_feature'])}>
      <ListFeedMain news={mainNews} key={mainNews?.id} />
      <ListFeedStories newsList={storiesNews} />
    </div>
  );
};
export default SplitFeatured;
