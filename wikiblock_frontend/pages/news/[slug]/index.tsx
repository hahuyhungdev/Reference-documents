import { News } from "@features/home/home.type";
import { newsConfig } from "@features/news/news.config";
import NewsDetailPage from "@features/news/pages/newsDetail.page";
import { fetchAPI } from "@utils/axiosBaseQuery";
import customStaticProps from "@utils/staticProps";
import React from "react";

const NewsDetail = ({ news }: { news: News }) => {
  return <NewsDetailPage news={news} />;
};

export default NewsDetail;

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps = customStaticProps(async (ctx) => {
  const slug = ctx?.params?.slug;
  const lang = ctx?.params?.lang;

  if (slug) {
    try {
      const res = await fetchAPI({
        url: `/news/${slug}${lang && lang !== "en" ? "?lang=" + lang : ""}`,
        method: "GET",
      });
      // console.log(JSON.stringify(res));
      return {
        props: {
          news: res.data,
        },
      };
    } catch (error) {
      return {
        notFound: true,
      };
    }
  }

  return {
    props: {},
  };
}, newsConfig.i18nNamespaces.slice());
