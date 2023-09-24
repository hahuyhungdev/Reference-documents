import { useGetAllCategoriesMutation, useGetCategoryByIdMutation } from '@features/events/event.service';
import { Category } from '@features/events/events.type';
import { explorationConfig } from '@features/exploration/exploration.config';
import { useGetAllNewsMutation } from '@features/home/home.service';
import DefaultLayout from '@features/layout/components/DefaultLayout';
import { Menu } from '@features/layout/layout.type';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { I18nActiveNamespaces } from 'types/i18n';

import Analysis from '../components/Analysis';
import { useGetSidebarItems } from '../data/sidebar';

const TYPE_CATEGORY = 'exploration';
const RANK_FILTER = 0;

export const getCategoryMenu = (categories: Array<Category>) => {
  return categories.map((category) => {
    if (category.sub_categories.length > 0) {
      return {
        title: category.title,
        children: category.sub_categories.map((subCategory) => {
          return {
            title: subCategory.title,
            url: `/exploration/${subCategory.name}`,
          };
        }),
      };
    } else {
      return {
        title: category.title,
        url: `/exploration/${category.name}`,
      };
    }
  });
};

export const getSubCategoryMenu = (category: Category) => {
  return category.sub_categories.map((cate) => ({
    title: cate.title,
    url: `/exploration/${category.name}/${cate.name}`,
  }));
};

const AllExplorationPage = () => {
  const { t } = useTranslation<I18nActiveNamespaces<'common' | 'exploration'>>(explorationConfig.i18nNamespaces);
  const router = useRouter();
  const [categoriesMenu, setCategoriesMenu] = useState<Array<Menu>>([]);
  const [categoriesMenuLevel3, setCategoriesMenuLevel3] = useState<Array<Menu>>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>();
  const [isSetPaginationSuccess, setIsSetPaginationSuccess] = useState(false);

  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });

  const [getAllCategories, { data: allCategoriesData }] = useGetAllCategoriesMutation();
  {
    console.log(allCategoriesData);
  }
  const [getCategoryById, { data: categoryDetail }] = useGetCategoryByIdMutation();
  const [getAllNews, { data: newsData }] = useGetAllNewsMutation();

  useEffect(() => {
    getAllCategories({ type: TYPE_CATEGORY, rank: RANK_FILTER });
  }, []);

  useEffect(() => {
    const { category } = router.query;
    if (category) {
      getCategoryById({ id: category as string });
    }
  }, [router.query]);

  useEffect(() => {
    if (router.query.page && pagination.current !== Number(router.query.page)) {
      setPagination({
        current: Number(router.query.page),
        pageSize: Number(router.query.pageSize || 10),
      });
    }
    setIsSetPaginationSuccess(true);
  }, [pagination, router.query]);

  useEffect(() => {
    if (allCategoriesData) {
      const categoriesMenu = getCategoryMenu(allCategoriesData.items);

      setCategoriesMenu(categoriesMenu);
    }
    if (allCategoriesData && !router.query.category) {
      const firstCategory = allCategoriesData.items[0];
      if (firstCategory.sub_categories.length > 0) {
        setSelectedCategoryId(firstCategory.sub_categories[0].id);
      } else {
        setSelectedCategoryId(firstCategory.id);
      }
    }
  }, [allCategoriesData, router.query.category]);

  useEffect(() => {
    if (categoryDetail) {
      // render sub category level3
      if (categoryDetail.sub_categories.length > 0) {
        const categoryMenuLevel3 = getSubCategoryMenu(categoryDetail);
        setCategoriesMenuLevel3(categoryMenuLevel3 || []);
      } else {
        setCategoriesMenuLevel3([]);
        setSelectedCategoryId(categoryDetail.id);
      }

      //  check if route is /exploration/:category/:subCategory
      //  if yes, set selectedCategoryId to subCategory
      //  if no, set selectedCategoryId to category
      if (!router.query.subcategory) {
        setSelectedCategoryId(categoryDetail.sub_categories[0]?.id ?? categoryDetail.id);
      } else {
        const subCategory = categoryDetail.sub_categories.find(
          (subCategory) => subCategory.name === router.query.subcategory,
        );
        setSelectedCategoryId(subCategory?.id);
      }
    }
  }, [categoryDetail, router.query.subcategory]);

  useEffect(() => {
    const lang = router.locale || router.locale === 'en' ? undefined : router.locale;
    if (selectedCategoryId && isSetPaginationSuccess) {
      getAllNews({
        category: selectedCategoryId,
        lang,
        page: pagination.current,
        per_page: pagination.pageSize,
      });
    }
  }, [selectedCategoryId, router.locale, isSetPaginationSuccess]);

  const onPageChange = (page: number, pageSize: number) => {
    setPagination({
      current: page,
      pageSize,
    });
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        page,
        pageSize,
      },
    });
  };
  const { dataExploration } = useGetSidebarItems();
  return (
    <DefaultLayout withSidebar dataSidebar={categoriesMenu}>
      <div className="">
        <Analysis
          newsData={newsData?.items ?? []}
          totalCount={newsData?.total_count ?? 0}
          pagination={pagination}
          onPageChange={onPageChange}
          categoryMenuLevel3={categoriesMenuLevel3}
        />
      </div>
    </DefaultLayout>
  );
};

export default AllExplorationPage;
