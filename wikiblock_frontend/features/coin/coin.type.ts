import { Category } from '@features/events/events.type';

export interface Coin {
  id?: string;
  name?: string;
  token_id?: string;
  about?: string;
  categories?: Array<Category>;
  avatar?: string;
  slug?: string;
  market_data?: MarketData;
}

export interface MarketData {
  [key: string]: {
    last_updated?: Date;
    list_price?: Array<Price>;
    market_cap?: number;
    market_cap_dominance?: number;
    percent_change_1h?: number;
    percent_change_24h?: number;
    percent_change_30d?: number;
    percent_change_60d?: number;
    percent_change_7d?: number;
    percent_change_90d?: number;
    price?: number;
    tvl?: number;
    volume_24h?: number;
    volume_change_24h?: number;
  };
}

export type Price = {
  value: string;
  date: Date;
};
