import EventsFilter from '@features/events/components/EventsFilter';
import { useGetAllCategoriesMutation } from '@features/events/event.service';
import { useGetTrendingEventsMutation } from '@features/events/event.service';
import { CATEGORIES_PARAMS, EVENTS_PARAMS } from '@features/events/events.type';
import DefaultLayout from '@features/layout/components/DefaultLayout';
import Item from 'antd/lib/list/Item';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import InfiniteScroll from 'react-infinite-scroll-component';
import { I18nActiveNamespaces } from 'types/i18n';

import s from '../../news/components/news.module.css';
import { Footer } from '../components/footer';
import Newsfeed from '../components/news-feed';
import Sidebar from '../components/sidebar';
import { NUM_EVENTS, NUM_TOP_NEWS, PER_PAGE } from '../new.contant';
import { newsConfig } from '../news.config';
import { useGetAllNewsMutation, useGetTopNewsMutation } from '../news.service';
const AllNewsPage = () => {
  const { t } = useTranslation<I18nActiveNamespaces<'common' | 'events' | 'news'>>(newsConfig.i18nNamespaces);

  const [getAllCategories, { data: categoriesData }] = useGetAllCategoriesMutation();
  const router = useRouter();
  const [hasMore, setHasMore] = useState(true);

  const {
    page = 1,
    per_page = PER_PAGE,
  }: {
    page: number;
    per_page: number;
  } = router.query as any;
  const [params, setParams] = useState<EVENTS_PARAMS>({ page: +page, per_page: +per_page });

  const [
    getAllNews,
    {
      data: { items: newsList = [], total_count: ToTalNews } = {
        items: [],
        total_count: 0,
      },
    },
  ] = useGetAllNewsMutation() as any;

  const [
    getTopNews,
    {
      data: { items: topNewsList = [] } = {
        items: [],
      },
    },
  ] = useGetTopNewsMutation() as any;

  const [
    getTrendingEvent,
    {
      data: { items: trendingEventsList = [] } = {
        items: [],
      },
    },
  ] = useGetTrendingEventsMutation() as any;
  const [categoriesParams, setCategoriesParams] = useState<CATEGORIES_PARAMS>({
    type: 'event',
    per_page: 9,
  });
  useEffect(() => {
    getAllCategories(categoriesParams);
  }, [categoriesParams]);

  useEffect(() => {
    getTrendingEvent({ per_page: NUM_EVENTS });
    getAllNews({ page: params.page, per_page: params.per_page });
    getTopNews({ per_page: NUM_TOP_NEWS });
  }, []);
  useEffect(() => {
    if (!hasMore) return;
    getAllNews({ page: 1, per_page: params.per_page });
  }, [params]);
  useEffect(() => {
    const {
      page = 1,
      per_page = PER_PAGE,
    }: {
      page: number;
      per_page: number;
    } = router.query as any;
    setParams({ page: +page, per_page: +per_page });
  }, [router.query]);

  useEffect(() => {
    if (ToTalNews && newsList.length == ToTalNews) {
      setHasMore(false);
    }
  }, [newsList]);
  return (
    <DefaultLayout>
      <div className="pb-[30px]">
        <EventsFilter
          items={[...(categoriesData?.items || [])]
            .sort((a, b) => b.weight - a.weight)
            .map((item) => ({ value: item.id, label: item.title }))}
          params={params}
        />
        <div className={clsx(s['container'])}>
          <InfiniteScroll
            dataLength={newsList?.length || 0}
            scrollThreshold={0.9}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
            next={() => {
              setParams({ ...params, per_page: PER_PAGE * ((params.per_page ?? PER_PAGE) / PER_PAGE + 1) });
            }}
            // pullDownToRefresh={true}
            hasMore={hasMore}
            loader={<div></div>}
          >
            <Newsfeed
              onLoadMore={setParams}
              loadMoreParams={{ ...params, per_page: PER_PAGE * ((params.per_page ?? PER_PAGE) / PER_PAGE + 1) }}
              newsList={newsList}
              page={page}
              per_page={per_page}
              showLoadMore={hasMore}
            />
          </InfiniteScroll>

          <Sidebar topNewsList={topNewsList} eventList={trendingEventsList} />
        </div>
        <Footer />
      </div>
    </DefaultLayout>
  );
};

export default AllNewsPage;
