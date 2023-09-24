/**
 * Types augmentation for translation keys to allow to typecheck
 * and suggesting keys to the t function. In case it's too slow
 * you can opt out by commenting the following code.
 * @link https://react.i18next.com/latest/typescript
 */
import "react-i18next";

import type blockchain from "@public/locales/vi/blockchain.json";
import type categories from "@public/locales/vi/categories.json";
import type common from "@public/locales/vi/common.json";
import type cryptoAssets from "@public/locales/vi/cryptoAssets.json";
import type events from "@public/locales/vi/events.json";
import type exploration from "@public/locales/vi/exploration.json";
import type fund from "@public/locales/vi/fund.json";
import type home from "@public/locales/vi/home.json";
import type news from "@public/locales/vi/news.json";
import type token from "@public/locales/vi/token.json";
declare module "react-i18next" {
  // eslint-disable-next-line no-unused-vars
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: {
      common: typeof common;
      home: typeof home;
      events: typeof events;
      categories: typeof categories;
      cryptoAssets: typeof cryptoAssets;
      blockchain: typeof blockchain;
      token: typeof token;
      news: typeof news;
      exploration: typeof exploration;
      fund: typeof fund;
    };
  }
}
