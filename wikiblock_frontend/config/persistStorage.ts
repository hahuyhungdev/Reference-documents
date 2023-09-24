/**
 * Fix issue: redux-persist failed to create sync storage. falling back to noop storage.
 *
 * @link https://github.com/vercel/next.js/discussions/15687
 */

import { isBrowser } from "@utils/common";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem(_key: string): Promise<string | null> {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: any): Promise<void> {
      return Promise.resolve(value);
    },
    removeItem(_key: string): Promise<void> {
      return Promise.resolve();
    },
  };
};

const storage = isBrowser() ? createWebStorage("local") : createNoopStorage();

export default storage;
