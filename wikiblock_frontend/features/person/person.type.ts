import { PAGINATION_PARAMS } from "types/common";

export type Person = {
  name: string;

  first_name?: string;

  last_name?: string;

  position?: PersonPosition[];

  works?: PersonWork[];

  educations?: PersonEducation[];

  trans: {
    lang: string;
    about: string;
    short_description: string;
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
export type PersonPosition = {
  title?: string;
  description?: string;
};
export type PersonWork = {
  title?: string;
  description?: string;
  company?: string;
  position?: string;
  date_start?: Date;
  date_end?: Date;
  type?: WorkType;
};
export type PersonEducation = {
  title?: string;
  description?: string;
};
enum WorkType {
  CURRENT = 'current',
  PREVIOUS = 'previous',
}
export interface personParams extends PAGINATION_PARAMS {
  lang?: string;
  slug?: string;
  categories?: string[];
}
