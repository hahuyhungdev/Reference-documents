import Page from '@components/Pagination';
import { CryptoManyInsights } from '@components/Table';
import { useGetCategoriesByNameMutation } from '@features/categories/categories.service';
import { useGetAllCoinMutation } from '@features/coin/coin.service';
import { Coin } from '@features/coin/coin.type';
import Category from '@features/fund/components/Analysis/Category';
import DefaultLayout from '@features/layout/components/DefaultLayout';
import { useGetSidebarItems } from '@features/layout/hooks';
import { Pagination, Skeleton } from 'antd';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PAGINATION_PARAMS } from 'types/common';

import { cryptoAssetsConfig } from '../crypto-assets.config';

const AllCryptoAssetsPage = () => {
  const router = useRouter();
  const { t } = useTranslation(cryptoAssetsConfig.i18nNamespaces);
  const { menus, categories } = useGetSidebarItems();

  const DEFAULT_PARAMS = {
    sort_by: 'usd_market_cap',
    page: 1,
    per_page: 20,
  };
  const [params, setParams] = useState<PAGINATION_PARAMS>(DEFAULT_PARAMS);
  const [
    getAllCoin,
    {
      data: { items: coins = [], total_count = 0 } = {
        items: [],
        total_count: 0,
      },
      isLoading: isFetCoinLoading,
    },
  ] = useGetAllCoinMutation();

  useEffect(() => {
    const query = router.query;
    const { page = +DEFAULT_PARAMS.page, per_page = DEFAULT_PARAMS.per_page, sort_by = DEFAULT_PARAMS.sort_by } = query;
    if (query) {
      setParams({
        ...params,
        page: +page,
        per_page: +per_page,
        sort_by: sort_by as string,
      });
    }
  }, []);

  useEffect(() => {
    if (!params) return;
    getAllCoin(params);
  }, [params]);

  useEffect(() => {
    const {
      query: { sector: querySector = '', category: queryCategory = '', type },
    } = router;

    const category = categories.find((item: any) => item.name === queryCategory || item.name === querySector);
    setParams({
      ...params,
      'categories[]': [category?.id].filter(Boolean) as any,
    });
  }, [router]);

  return (
    <DefaultLayout withSidebar dataSidebar={menus}>
      <div className="w-full h-full pt-[24px] md:pt-[10px] pb-[50px] pl-[10px]">
        <div className="w-full h-[45px] bg-[#D5EBFF] mb-[23px]"></div>
        <div className="mb-3">
          <h2 className="text-[20px] font-medium text-[#4992D6]">{t('cryptoAssets:heading')}</h2>
          <p className="mt-[13px] mb-[18px] text-[13px] text-[#545454]">{t('cryptoAssets:description')}</p>
        </div>
        <Skeleton loading={isFetCoinLoading} active avatar>
          <CryptoManyInsights coins={coins} loading={isFetCoinLoading} />
          <div className="mt-[15px] w-full text-right">
            {!isFetCoinLoading && (
              <Pagination
                pageSize={params.per_page}
                current={params.page}
                total={total_count}
                onChange={(page, pageSize) => {
                  setParams({
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
    </DefaultLayout>
  );
};

export default AllCryptoAssetsPage;
