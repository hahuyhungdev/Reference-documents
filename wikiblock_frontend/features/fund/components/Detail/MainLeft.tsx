import { fundConfig } from '@features/fund/fund.config';
import { SidebarContext } from '@features/fund/page/detail.page';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { I18nActiveNamespaces } from 'types/i18n';

import { Sidebar } from './components';
import s from './detail.module.css';

export const MainLeft = () => {
  const { t } = useTranslation<I18nActiveNamespaces<'common' | 'fund'>>(fundConfig.i18nNamespaces);
  const menuItems = [
    {
      key: 'overview',
      title: t('fund:detail_overview.overview'),
      url: '#overview',
    },
    {
      key: 'portfolio',
      title: t('fund:detail_overview.portfolio'),
      url: '#portfolio',
    },
    {
      key: 'wallet-activity',
      title: t('fund:detail_overview.wallet_activity'),
      url: '#wallet-activity',
    },
    {
      key: 'team',
      title: t('fund:detail_overview.team'),
      url: '#team',
    },
    {
      key: 'firms',
      title: t('fund:detail_overview.firms'),
      url: '#firms',
    },
    {
      key: 'similar-company',
      title: t('fund:detail_overview.similar_companies'),
      url: '#similar-company',
    },
    {
      key: 'recent-tweets',
      title: t('fund:detail_overview.recent_tweets'),
      url: '#recent-tweets',
    },
  ];
  return (
    <SidebarContext.Consumer>
      {({ selected }) => {
        return (
          <div className={clsx('main-layout', s['menuleft'])}>
            {menuItems.map((item) => {
              return <Sidebar key={item.key} url={item.url} title={item.title} isBackground={item.key === selected} />;
            })}
          </div>
        );
      }}
    </SidebarContext.Consumer>
  );
};
