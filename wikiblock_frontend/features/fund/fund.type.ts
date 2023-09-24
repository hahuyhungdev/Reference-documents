import { BaseQueryParams, LANG_CODE, PAGINATION_PARAMS } from 'types/common';

export interface Fund {
  name?: string;

  about?: string;

  type?: FUND_TYPE;

  avatars?: string[];

  launched?: string;

  posts?: string[];

  cryptocurrencies?: string[];

  total_amount?: number;

  fundraising_rounds?: FundraisingRoundDetail[];

  partners?: ForeignReLationship[];

  firms?: ForeignReLationship[];

  recent_investments?: ForeignReLationship[];

  current_roi?: number;

  ath_roi?: number;

  total_investments?: number;

  investments?: ForeignReLationship[];

  funding?: number;

  typical_project?: string;

  typical_category?: string;

  tier?: number;

  rating?: number;

  assets_allocation?: string;

  trans?: {
    lang: string;
    about?: string;
    short_description?: string;
  }[];
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

  author?: {
    full_name: string;
    id: string;
  };
  tel?: string;

  email?: string;

  avatar?: string;

  short_description?: string;

  twitter?: string;

  telegram?: string;

  facebook?: string;

  instagram?: string;

  linkedin?: string;

  github?: string;

  medium?: string;

  discord?: string;

  youtube?: string;

  website?: string;

  websites?: string[];

  blog?: string;

  reddit?: string;

  gitter?: string;

  bitcoin_talk?: string;

  rocket_chat?: string;

  video?: string;

  explorer?: string;

  recent_tweets?: any[];
}
export enum FUND_TYPE {
  NA = 'N/A',
  CRYPTO_VENTURE = 'Crypto Venture',
  EXCHANGE_FUND = 'Exchange Fund',
  DEVELOPER_SUPPORT = 'Developer Support',
  MARKETING_SUPPORT = 'Marketing Support',
  SECURITY_SUPPORT = 'Security Support',
  PROJECT_BASED = 'Project Based',
  NON_CRYPTO_CAPITAL = 'Non-Crypto Capital',
}
export type FundraisingRoundDetail = {
  round_name: string;
  valuation?: string;
  description?: string;
  announcement?: string;
  amount?: number;
  anum?: string;
  number_of_rounds?: string;
  record_id?: string;
  stage: FundraisingRound | string;
  posts?: string[];
  date: Date;
};
export enum FundraisingRound {
  UNKNOWN = 'Unknown',
  PRE_SEED = 'Pre-Seed',
  SEED = 'Seed',
  ANGEL = 'Angel',
  INVESTORS = 'Investors',
  BRIDGE = 'Bridge',
  MEZZABINE = 'Mezzanine',
  PRE_PUBLIC = 'Pre-Public',
  PUBLIC = 'Public',
  SERIES_A = 'Series A',
  SERIES_B = 'Series B',
  SERIES_C = 'Series C',
  SERIES_D = 'Series D',
  SERIES_E = 'Series E',
  SERIES_F = 'Series F',
}
export type ForeignReLationship = {
  name?: string;
  foreign_id: string;
  type?: string;
  [key: string]: any;
};
export interface FundQueryParams extends BaseQueryParams {
  slug: string;
}
