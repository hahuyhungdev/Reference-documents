import { News } from "@features/home/home.type";
import DefaultLayout from "@features/layout/components/DefaultLayout";
import { newsConfig } from "@features/news/news.config";
import { activeSelector, tableSelector } from "@features/news/news.selector";
import {
  addNewsItemToTableOfContent,
  setActive,
} from "@features/news/news.slice";
import { useAppDispatch, useAppSelector } from "@hooks/app";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

import NewsBanner from "../NewsBanner";
import SubArticle from "../SubArticle";
import TableOfContent from "../TableOfContent";
import TopNews from "../TopNews";

const HeadingLevel1 = styled.h2`
  font-size: 1.75rem;
  :hover {
    color: #f4ac20;
  }
`;

const HeadingLevel2 = styled.h2`
  font-size: 1.5rem;
  :hover {
    color: #f4ac20;
  }
`;

const HeadingLevel3 = styled.h3`
  font-size: 1.2rem;
  :hover {
    color: #f4ac20;
  }
`;

const HeadingLevel4 = styled.h4`
  font-size: 1.1rem;
  :hover {
    color: #f4ac20;
  }
`;

const Paragraph = styled.p`
  white-space: unset;
  font-size: 1rem;
`;

const Heading = ({
  level,
  id,
  content,
}: {
  level: number;
  id: string;
  content: string;
}) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (level > 3) return;
    dispatch(addNewsItemToTableOfContent({ id, level, content }));
  }, []);

  useEffect(() => {
    if (inView) dispatch(setActive(id));
  }, [inView, id]);

  switch (level) {
    case 1:
      return (
        <a href={`#${id}`}>
          <HeadingLevel1 ref={ref} id={id}>
            {content}
          </HeadingLevel1>
        </a>
      );
    case 2:
      return (
        <a href={`#${id}`}>
          <HeadingLevel2 ref={ref} id={id}>
            {content}
          </HeadingLevel2>
        </a>
      );

    case 3:
      return (
        <a href={`#${id}`}>
          <HeadingLevel3 ref={ref} id={id}>
            {content}
          </HeadingLevel3>
        </a>
      );

    case 4:
      return (
        <a href={`#${id}`}>
          <HeadingLevel4 ref={ref} id={id}>
            {content}
          </HeadingLevel4>
        </a>
      );
    default:
      return null;
  }
};

const renderHeading = (props: any) => {
  const { children, level } = props;
  const shapedString = children?.[0]
    .toLowerCase()
    .replace(/^[0-9]\./g, "")
    .replace(/[-.,?!@#$%^&*()+`~;:"/<>]/g, "")
    .trim();
  const headingId = shapedString.split(" ").join("-");

  return <Heading id={headingId} level={level} content={children?.[0] || ""} />;
};

const renderContent = (props: any) => {
  const { children } = props;

  return <Paragraph>{children?.map((child: any) => child)}</Paragraph>;
};

const CustomComponents = {
  // img: () => <span>img</span>,
  p: renderContent,
  h1: renderHeading,
  h2: renderHeading,
  h3: renderHeading,
  h4: renderHeading,
};

interface Props {
  news: News;
  relatedNews?: Array<News>;
  topNews?: Array<News>;
}

const NewsDetail: FC<Props> = ({ news, relatedNews, topNews }) => {
  const active = useAppSelector(activeSelector);
  const table = useAppSelector(tableSelector);
  const { t } = useTranslation(newsConfig.i18nNamespaces);

  return (
    <div className="w-full h-full py-[20px]">
      <NewsBanner
        item={{
          heading: news.title,
          description: news.summary,
          image: news.photos && news.photos[0],
          author: {
            name: news.author.full_name,
          },
          createdAt: news.created_at,
          updatedAt: news.updated_at,
        }}
      />
      <div className="w-full h-[5px] bg-gray-300 my-[20px]"></div>
      <div className="grid grid-cols-4 gap-[30px]">
        <div className="col-span-1 block md:hidden">
          <TableOfContent items={table} active={active} />
        </div>
        <div className="col-span-2 lg:col-span-3 md:col-span-4">
          <ReactMarkdown components={CustomComponents}>
            {news.content}
          </ReactMarkdown>
        </div>
        <div className="col-span-1 lg:col-span-4 p-[10px] flex flex-col gap-y-[15px] ">
          <div className="uppercase p-[5px] bg-gray-200 w-fit text-[12px] font-bold">
            {t("news:related_news")}
          </div>
          <div className="flex flex-col gap-[15px] lg:flex-row md:flex-col">
            {relatedNews &&
              relatedNews.map((news) => (
                <SubArticle key={news.id} news={news} />
              ))}
          </div>
          <div className="uppercase p-[5px] bg-gray-200 w-fit text-[12px] font-bold">
            {t("news:top_news")}
          </div>
          <div className="flex flex-col gap-[15px] lg:flex-row md:flex-col">
            {topNews &&
              topNews.map((news) => (
                <>
                  <TopNews key={news.id} news={news} />
                  <div className="w-full h-[1px] bg-gray-100 block lg:hidden"></div>
                </>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
