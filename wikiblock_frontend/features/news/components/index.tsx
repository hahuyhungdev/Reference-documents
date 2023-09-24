import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { I18nActiveNamespaces } from 'types/i18n';

import { newsConfig } from '../news.config';
import s from './news.module.css';
import Newsfeed from './news-feed';
import Sidebar from './sidebar';

export const NewsList = ({ newsList = [] }) => {
  const { t } = useTranslation<I18nActiveNamespaces<'common' | 'events' | 'news'>>(newsConfig.i18nNamespaces);
  return (
    <div className={clsx(s['container'])}>
      <Newsfeed newsList={newsList} />
      <Sidebar />
    </div>
  );
};

export default NewsList;
