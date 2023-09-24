import { NeedLoginModal } from '@components';
import { userSelector } from '@features/auth/auth.selector';
import { setFollowings } from '@features/auth/auth.slice';
import { useGetAllCoinMutation } from '@features/coin/coin.service';
import { useGetAllCompaniesMutation } from '@features/company/company.service';
import { useGetAllCategoriesMutation } from '@features/events/event.service';
import { CATEGORIES_PARAMS, Category } from '@features/events/events.type';
import DefaultLayout from '@features/layout/components/DefaultLayout';
import { PER_PAGE } from '@features/news/new.contant';
import { useGetAllPersonsMutation } from '@features/person/person.service';
import { useGetAllProductsMutation } from '@features/product/product.service';
import { useAppDispatch, useAppSelector } from '@hooks/app';
import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PAGINATION_PARAMS } from 'types/common';
import { boolean } from 'yup';

import CategoriesModal from '../components/CategoriesModal';
import { ImportantNews } from '../components/ImportantNews';
import { LookUpRecords } from '../components/LookUpRecords';
import { LookUpRecordsByRoi } from '../components/LookUpRecordsByRoi';
import { ManyInsights } from '../components/ManyInsights';
import { ProfileCompany } from '../components/ProfileCompany/ProfileCompany';
import { RealTime } from '../components/RealTimeReports';
import { homeConfig } from '../home.config';
import {
  useFollowTopicMutation,
  useGetAllNewsMutation,
  useGetImportantNewsMutation,
  useGetRelatedNewsMutation,
} from '../home.service';

const CATEGORY_PER_PAGE = 40;
const LIMIT_NEWS = 3;
export const ManyInsightContext = React.createContext({ coins: [], isLoading: boolean });
export const HomePage: FC = () => {
  const { t } = useTranslation(homeConfig.i18nNamespaces);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { locale } = router;
  const [categories, setCategories] = useState<Array<Category>>([]);
  const [categoriesParams, setCategoriesParams] = useState<CATEGORIES_PARAMS>({
    type: 'news',
    per_page: CATEGORY_PER_PAGE,
  });
  const DEFAULT_PARAMS = {
    sort_by: 'usd_market_cap',
    page: 1,
    per_page: 10,
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
  const user = useAppSelector(userSelector);

  const [isShowCategoryModal, setIsShowCategoryModal] = useState(false);
  const [isShowNeedLoginModal, setIsShowNeedLoginModal] = useState(false);

  const [getAllNews, { data: allNewsData }] = useGetAllNewsMutation();
  const [getImportantNews, { data: importantNewsData, isLoading: importantNewsLoading }] =
    useGetImportantNewsMutation();
  const [getRelatedNews, { data: relatedNewsData, isLoading: relatedNewsLoading }] = useGetRelatedNewsMutation();
  const [getAllCategory, { data: categoriesData }] = useGetAllCategoriesMutation();
  const [followTopic, { isSuccess: isFollowTopicSuccess, data: followingData }] = useFollowTopicMutation();

  const [
    getAllProducts,
    {
      data: { items: productList = [], total_count: totalProduct } = {
        items: [],
        total_count: 0,
      },
    },
  ] = useGetAllProductsMutation() as any;
  const [
    getAllPersons,
    {
      data: { items: personsList = [], total_count: totalPerson } = {
        items: [],
        total_count: 0,
      },
    },
  ] = useGetAllPersonsMutation() as any;
  const [
    getAllCompanies,
    {
      data: { items: companyList = [], total_count: totalCompany } = {
        items: [],
        total_count: 0,
      },
    },
  ] = useGetAllCompaniesMutation() as any;
  // console.log({ productList, personsList, companyList });
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
    const location = !locale || locale === 'en' ? undefined : locale;
    getAllNews({ lang: location, per_page: LIMIT_NEWS });
    getImportantNews({ lang: location, per_page: LIMIT_NEWS });
    getRelatedNews({ lang: location, per_page: LIMIT_NEWS });
    getAllProducts({ lang: location, per_page: PER_PAGE });
    getAllPersons({ lang: location, per_page: PER_PAGE });
    getAllCompanies({ lang: location, per_page: PER_PAGE });
  }, [locale]);

  useEffect(() => {
    getAllCategory(categoriesParams);
  }, [categoriesParams]);

  useEffect(() => {
    if (categoriesData) setCategories([...categoriesData.items].sort((a, b) => b.weight - a.weight));
  }, [categoriesData]);

  const handleClickCategory = (id: string) => {
    if (!user) {
      setIsShowNeedLoginModal(true);
      return;
    }
    followTopic({ topicId: id });
  };

  useEffect(() => {
    if (followingData) dispatch(setFollowings(followingData.followings));
  }, [followingData]);

  return (
    <React.Fragment>
      <DefaultLayout headProps={{ seoTitle: 'HOME' }}>
        <div className="">
          <ImportantNews
            title="IMPORTANT NEWS AFFECTING CRYPTOCURRENCY PRICES"
            importantNews={importantNewsData?.items || []}
            relatedNews={relatedNewsData?.items || []}
            categories={categories}
            onClickCategory={handleClickCategory}
            handleShowModalCategory={() => {
              setIsShowCategoryModal(true);
            }}
            importantNewsLoading={importantNewsLoading}
            relatedNewsLoading={relatedNewsLoading}
          />
          <RealTime />
          <ManyInsights
            coins={coins}
            loading={isFetCoinLoading}
            params={params}
            setParams={setParams}
            total_count={total_count}
          />
          <LookUpRecords />
          <LookUpRecordsByRoi />
          <ProfileCompany productList={productList} personList={personsList} companyList={companyList} />
        </div>
      </DefaultLayout>
      <CategoriesModal
        isModalVisible={isShowCategoryModal}
        title={t('home:modal.follow_category')}
        onClickCategory={handleClickCategory}
        categories={categories}
        onCloseModal={() => setIsShowCategoryModal(false)}
      />
      <NeedLoginModal visible={isShowNeedLoginModal} onClose={() => setIsShowNeedLoginModal(false)} />
    </React.Fragment>
  );
};
