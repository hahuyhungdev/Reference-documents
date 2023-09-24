import { PAGINATION_PARAMS } from 'types/common';

export type Product = {
  contract_addresses: ContractAddress[];
  cryptocurrencies?: string[];
  features?: string[];
  apps: App[];
  supports: Support[];
  galleries: string[];
  information: ProductInformation[];
  team: TeamPerson[];
  parent_company: string;
  team_location: string;
  trans: {
    lang: string;
    about?: string;
  }[];
  id?: string;

  name?: string;

  slug?: string;
  // location?: string;

  about?: string;

  categories?: string[];

  verified?: boolean;

  sponsored?: boolean;

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
type ContractAddress = {
  owner: string;
  address?: string;
  url?: string;
};
type TeamPerson = {
  name: string;
  position: string;
  contacts?: Array<{
    name: string;
    url: string;
  }>;
};
type App = {
  name: string;
  url: string;
};
type Support = {
  name: string;
  url: string;
};
type ProductInformation = {
  parent_company?: string;
  team_location?: string;
  blockchain?: string;
  token?: string;
  release?: string;
  software_license?: string;
};
export interface productParams extends PAGINATION_PARAMS {
  lang?: string;
  slug?: string;
  categories?: string[];
}
