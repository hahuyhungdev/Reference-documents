import {
  useGetAllNewsMutation,
  useGetImportantNewsMutation,
  useGetRelatedNewsMutation,
} from '@features/home/home.service';
import { News } from '@features/home/home.type';
import DefaultLayout from '@features/layout/components/DefaultLayout';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import NewsDetail from '../components/NewDetail/newsDetail';

const LIMIT_RELATED_NEWS = 3;

const NewsDetailPage = ({ news }: { news: News }) => {
  const router = useRouter();
  const [getNews, { data: relatedNews }] = useGetAllNewsMutation();
  const [getImportantNews, { data: topNews }] = useGetImportantNewsMutation();

  useEffect(() => {
    const relatedCategory = news.categories && news.categories.length > 0 ? news.categories[0].id : undefined;

    const locale = router.locale && router.locale !== 'en' ? router.locale : undefined;

    getNews({
      per_page: LIMIT_RELATED_NEWS,
      category: relatedCategory,
      lang: locale,
    });

    getImportantNews({
      per_page: LIMIT_RELATED_NEWS,
      lang: locale,
    });
  }, [news, router.locale]);
  return (
    <DefaultLayout includeProgressBar headProps={{ seoTitle: 'wikiblock - ' + news.slug }}>
      <NewsDetail news={news} relatedNews={relatedNews?.items} topNews={topNews?.items} />
    </DefaultLayout>
  );
};

export default NewsDetailPage;
