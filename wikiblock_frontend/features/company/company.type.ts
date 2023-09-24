import { PAGINATION_PARAMS } from 'types/common';

export type Company = {
  name: string;
  headquarter?: string;
  location?: string;
  services?: string[];
  clients?: string[];
  products?: string[];
  galleries?: string[];
  portfolios?: string[];
  video?: string;
  supports?: Support[];
  team?: TeamPerson[];
  research_papers?: ResearchPaper[];
  explorer: string;
  stack_exchange: string;
  whitepaper: string;
  short_description: string;
  cryptocurrencies: string[];
  country?: string;
  year_founded?: Date;
  total_amount?: string;
  firms?: any[];
  fundraising_rounds: FundraisingRoundDetail[];
  investors?: any[];
  _sync?: any[];
  trans?: {
    lang: string;
    about?: string;
    short_description?: string;
  }[];
  id?: string;

  slug?: string;
  // location?: string;

  about: string;

  categories?: string[];

  verified?: boolean;

  sponsored?: boolean;

  tel?: string;

  email?: string;

  avatar: string;

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

  recent_tweets?: any[];

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
};
type Support = {
  name: string;
  url: string;
};
type TeamPerson = {
  name: string;
  position: string;
  contacts?: Array<{
    name: string;
    url: string;
  }>;
};
type ResearchPaper = {
  title: string;
  url: string;
};
type FundraisingRoundDetail = {
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
enum FundraisingRound {
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
export interface companyParams extends PAGINATION_PARAMS {
  lang?: string;
  slug?: string;
  categories?: string[];
}
