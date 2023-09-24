import { BaseInformation, PAGINATION_PARAMS, WorkType } from 'types/common';

export interface EVENTS_PARAMS extends PAGINATION_PARAMS {
  q?: string;
  category?: string;
  type?: EVENT_TYPE;
  hashtag?: Array<string>;
  country?: string;
}

export interface Event {
  id?: string;
  type: EVENT_TYPE;
  slug?: string;
  name?: string;
  email?: string;
  website?: string;
  introduction?: string;
  agendas?: Array<Agenda>;
  location?: string;
  start_date?: string;
  end_date?: string;
  categories?: Array<Category>;
  country?: string;
  speakers?: Array<Person>;
  sponsors?: Array<Person>;
  tel?: string;
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
  blog?: string;
  reddit?: string;
  banners?: string;
}

export interface EventForm extends Omit<Event, 'speakers' | 'sponsors' | 'categories'> {
  speakers?: Array<string>;
  sponsors?: Array<string>;
  categories?: Array<string>;
}

export enum EVENT_TYPE {
  ONLINE = 'online',
  OFFLINE = 'offline',
  VIRTUAL = 'virtual',
}

export type Agenda = {
  time: Date;
  description: string;
};

export type Category = {
  id: string;
  title: string;
  type?: string;
  weight: number;
  name?: string;
  trans: Array<any>;
  created_at?: Date;
  created_by?: string;
  acronym?: string;
  sub_categories: Array<Category>;
};

export interface Person extends BaseInformation {
  name: string;

  categories?: Array<string>;

  position?: Array<PersonPosition>;

  works?: Array<PersonWork>;

  educations?: Array<PersonEducation>;
}

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

export interface CATEGORIES_PARAMS extends PAGINATION_PARAMS {
  type: string;
  rank?: number;
}
