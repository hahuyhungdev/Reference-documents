export interface PAGINATION_PARAMS {
  page?: number;
  per_page?: number;
  sort_by?: string;
  sort_order?: string;
  'categories[]'?: string[];
}
export interface BaseQueryParams extends PAGINATION_PARAMS {
  q?: string;
  category?: string;
  lang?: LANG_CODE;
}

export interface TableColumn {
  key: string;
  name: string;
  symbol: any;
  rank?: number;
  price: number;
  shorten: string;
  change: number;
  volatilityDay?: number;
  priceChart?: any;
  marketCap?: number;
  volume?: number;
  volumeVolatility?: number;
  Volume24h?: number;
  potential?: string;
  reliability?: string;
  marketShare?: number;
  pairs?: number;
  launched?: number;
  rating?: string;
  progress?: number;
  fund: string;
}

export interface Pagination<T> {
  items: Array<T>;
  total_count: number;
}
export interface PARAMS {
  id: string;
}

export type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

export type TablePagination = {
  current: number;
  total: number;
  pageSize: number;
};

export interface BaseInformation {
  id?: string;

  verified?: boolean;

  tel?: string;

  email?: string;

  avatar?: string;

  about?: string;

  twitter?: string;

  telegram?: string;

  facebook?: string;

  instagram?: string;

  linkedin?: string;

  github?: string;

  medium?: string;

  youtube?: string;

  website?: string;

  blog?: string;
  reddit?: string;

  created_by?: string;

  updated_by?: string;

  deleted_by?: string;

  deleted_at?: Date;

  deleted?: boolean;

  created_at?: Date;
  updated_at?: Date;
}
export type storiesProps = {
  title: string;
  author?: string;
  time_post?: number;
  time_read?: number;
  image: string;
  url?: string | undefined;
  description?: string;
  className?: string;
  classStyle?: string;
};

export enum WorkType {
  CURRENT = 'current',
  PREVIOUS = 'previous',
}
export enum LANG_CODE {
  VI = 'vi',
  // EN = 'en',
  FR = 'fr',
  DE = 'de',
  CN = 'cn',
  JP = 'jp',
}
