import { CryptoManyInsights } from '@components/Table/CryptoManyInsights';
import { Coin } from '@features/coin/coin.type';
import { overviewConfig } from '@features/example/example.config';
import { Pagination, Skeleton } from 'antd';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { I18nActiveNamespaces } from 'types/i18n';

import s from './manyinsights.module.css';
export const MainLeft = ({ coins = [], loading = false }: { coins: Coin[]; loading: boolean }) => {
  const { t } = useTranslation<I18nActiveNamespaces<'common' | 'home'>>(overviewConfig.i18nNamespaces);
  return (
    <div
      className={clsx(
        'grid col-span-3 xl:col-span-4 overflow-hidden border-r-2 pr-[10px] boder-[#F5F5F5] xl:border-r-0 ',
        s['tabledata'],
      )}
    >
      <CryptoManyInsights coins={coins} loading={loading} />
    </div>
  );
};
