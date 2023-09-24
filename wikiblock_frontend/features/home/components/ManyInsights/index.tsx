import { Button } from '@components';
import { CryptoManyInsights } from '@components/Table/CryptoManyInsights';
import { Typography } from '@components/Typography';
import { Coin } from '@features/coin/coin.type';
import { homeConfig } from '@features/home/home.config';
import { useGetMenuItems } from '@features/layout/hooks';
import { Pagination, Skeleton } from 'antd';
import clsx from 'clsx';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { I18nActiveNamespaces } from 'types/i18n';

import { MainLeft } from './MainLeft';
import { MainRight } from './MainRight';
import s from './manyinsights.module.css';

export const ManyInsights = ({
  coins = [],
  loading = false,
  setParams,
  params = {
    page: 1,
    per_page: 10,
    sort_by: 'usd_market_cap',
  },
  total_count = 0,
}: {
  coins: Coin[];
  loading: boolean;
  setParams: (params: any) => void;
  params: any;
  total_count: number;
}) => {
  const { t } = useTranslation<I18nActiveNamespaces<'common' | 'home' | 'token'>>(homeConfig.i18nNamespaces);
  const { menuItems } = useGetMenuItems();

  return (
    <div className="Crypto-Library-Contains-Many-Insights py-[27px] border-t-2 boder-[#F5F5F5]">
      <Typography className="font-semibold text-[20px] uppercase mb-[10px]" color="primary">
        {t('home:reportother.many_insights')}
      </Typography>
      <p className="text-[#000000] text-[14px] font-nomal">{t('home:realtimereports.description')}</p>
      <div className="select-crypto flex items-center gap-[13px] sm:flex sm:flex-wrap my-[23px] md:justify-center ">
        {menuItems.map((item: any, index: number) => (
          <Button
            key={index}
            className="bg-[#EFF0F4] active:bg-[#f4ac20] h-[30px] px-[10px] sm:truncate not-italic font-normal sm:col-span-1 "
          >
            <Link href={`/${item.url}`}>
              <a className="text-[#010000]">{item.title}</a>
            </Link>
          </Button>
        ))}
      </div>
      {/* <div className="main grid grid-cols-4 gap-1 overflow-hidden"> */}
      <div className={clsx(s['main'])}>
        <div
          className={clsx(
            'grid col-span-3 xl:col-span-4 overflow-hidden border-r-2 pr-[10px] boder-[#F5F5F5] xl:border-r-0 ',
            s['tabledata'],
          )}
        >
          <Skeleton loading={loading} active avatar>
            <CryptoManyInsights coins={coins} loading={loading} />
            <div className="mt-[15px] w-full text-right">
              {!loading && (
                <Pagination
                  pageSize={params.per_page}
                  current={params.page}
                  total={total_count}
                  onChange={(page, pageSize) => {
                    setParams.call(this, {
                      ...params,
                      page,
                      per_page: pageSize,
                    } as any);
                  }}
                />
              )}
            </div>
          </Skeleton>
        </div>
        <MainRight />
      </div>
    </div>
  );
};
