import DefaultLayout from '@features/layout/components/DefaultLayout';
import { useGetSidebarItems } from '@features/layout/hooks';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { categoriesConfig } from '../categories.config';
import { useGetAllCategoriesMutation } from '../categories.service';
import { CATEGORY_TYPE } from '../categories.type';
import CircleChart from '../components/CircleChart';
import CryptoCategories from '../components/CryptoCategories';
import StockChart from '../components/StockChart';
import StockFilter from '../components/StockFilter';

const CategoriesPage = () => {
  const { t } = useTranslation(categoriesConfig.i18nNamespaces);
  const { menus } = useGetSidebarItems();
  return (
    <DefaultLayout withSidebar dataSidebar={menus}>
      <div className="w-full h-full pt-[24px] pb-[50px] pl-[10px]">
        <div className="w-full h-[45px] bg-[#D5EBFF] mb-[23px]"></div>
        <div>
          <h2 className="text-[20px] font-medium text-[#4992D6] uppercase">{t('categories:heading')}</h2>
          <p className="mt-[13px] mb-[18px] text-[13px] text-[#545454]">{t('categories:description')}</p>
          <h2 className="text-[20px] font-medium text-[#505050] uppercase">{t('categories:total_market_cap')}</h2>
          <div className="grid grid-cols-3">
            <div className="col-span-1 sm:col-span-3 flex sm:items-center justify-center flex-col sm:flex-row sm:mb-[30px]">
              <CircleChart />
            </div>
            <div className="col-span-2 sm:col-span-3">
              <StockChart />
            </div>
          </div>
          <div className="py-[26px] border-t-[1px] border-t-[#F5F5F5] flex items-center justify-between">
            <h2 className="text-[20px] text-[#505050] font-medium uppercase">
              {t('categories:popular_crypto_categories')}
            </h2>
            <StockFilter />
          </div>
          <CryptoCategories />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default CategoriesPage;
