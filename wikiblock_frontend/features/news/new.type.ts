import { LANG_CODE, PAGINATION_PARAMS } from 'types/common';

export interface News {
  id: string;

  slug: string;

  title: string;

  status: NewsStatus;

  summary: string;

  content: string;

  headings: string[];

  photos: string[];

  categories: string[];

  source: string;

  views: number;

  minute_read: number;

  keywords: string[];

  company_tags: string[];

  coin_tags: string[];

  product_tags: string[];

  person_tags: string[];

  event_tags: string[];

  stars: number;

  number_relate_article?: number;

  trans: Array<{
    lang: string;
    title: string;
    slug: string;
    summary: string;
    content: string;
    headings: string[];
  }>;
  _id?: string;

  foreign_id?: string;

  record_id?: string;

  metadata?: {
    _admin_note?: string;
    storage?: string;
  };

  need_review?: boolean;

  review_status?: string;

  reviewed?: boolean;

  updated_by?: string;

  updated_at?: Date;

  created_by?: string;

  created_at?: Date;

  deleted_by?: string;

  deleted_at?: Date;

  deleted?: boolean;

  author: {
    full_name: string;
    id: string;
  };
}
export enum NewsStatus {
  DRAFT = 'draft',
  PENDING = 'pending',
  APPROVE = 'approve',
  PROCESSING = 'processing',
  PUBLISHED = 'published',
}

export interface NewQueryParams extends PAGINATION_PARAMS {
  q?: string;
  category?: string;
  status?: NewsStatus;
  lang?: LANG_CODE;
}

export interface NewQueryTopParams extends NewQueryParams {
  date_range: TopNewsDateRange;
}
export enum TopNewsDateRange {
  '1d' = '1',
  '7d' = '7',
  '30d' = '30',
  '90d' = '90',
  '180d' = '180',
}
