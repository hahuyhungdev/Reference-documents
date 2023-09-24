import { Category } from "@features/events/events.type";
import { PAGINATION_PARAMS } from "types/common";

export type News = {
  id: string;
  slug: string;
  categories?: Array<Category>;
  author: {
    full_name: string;
    avatar?: string;
    id: string;
  };
  created_at: Date;
  title: string;
  lang: string;
  heading: Array<string>;
  summary: string;
  coin_tags?: Array<string>;
  company_tags?: Array<string>;
  keywords?: Array<string>;
  number_relate_article?: number;
  photos?: Array<string>;
  views?: number;
  updated_at?: Date;
  content: string;
};

export interface NewsParams extends PAGINATION_PARAMS {
  lang?: string;
  slug?: string;
  category?: string;
}
