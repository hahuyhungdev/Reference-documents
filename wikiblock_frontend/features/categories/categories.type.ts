import { PAGINATION_PARAMS } from 'types/common';

export interface Category {
  id: string;
  // title
  title?: string;

  name?: string;

  sub_categories?: Category[];

  acronym?: string;
  // weight
  weight: number;
  // type
  type?: CATEGORY_TYPE;

  sub_type?: string;

  rank?: number;

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

  trans: {
    lang: string;
    title?: string;
    name?: string;
  }[];
}
export enum CATEGORY_TYPE {
  LISTENING = 'listening',
  WIKIBLOCK = 'wikiblock',
  EVENT = 'event',
  NEWS = 'news',
  RELATED_NEWS = 'related_news',
  BLOCKCHAIN = 'blockchain',
  APPLICATION = 'application',
  CONSENSUS = 'consensus',
  CRYPTO_ASSET = 'crypto_asset',
  PERSON = 'person',
  PRODUCT = 'product',
  COMPANY = 'company',
  CRYPTO = 'crypto',
  EXPLORATION = 'exploration',
  SUB_EXPLORATION = 'sub_exploration',
  INVESTOR = 'investor',
}
export interface categoriesParams extends PAGINATION_PARAMS {
  name?: string;
  slug?: string;
  type: CATEGORY_TYPE | CATEGORY_TYPE[];
}
