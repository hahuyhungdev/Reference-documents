import { AUTH_REDUCER_API_KEY, authApi } from '@features/auth/auth.service';
import authReducer from '@features/auth/auth.slice';
import { CATEGORY_API_REDUCER_KEY, categoryApi } from '@features/categories/categories.service';
import { COIN_API_REDUCER_KEY, coinApi } from '@features/coin/coin.service';
import { COMPANY_API_REDUCER_KEY, companyApi } from '@features/company/company.service';
import { EVENT_API_REDUCER_KEY, eventApi } from '@features/events/event.service';
import { OVERVIEW_API_REDUCER_KEY, overviewApi } from '@features/example/example.service';
import companyReducer from '@features/example/example.slice';
import { FUND_API_REDUCER_KEY, fundApi } from '@features/fund/fund.service';
import fundReducer from '@features/fund/fund.slice';
import { HOME_API_REDUCER_KEY, homeApi } from '@features/home/home.service';
import commonReducer from '@features/layout/common.slice';
import { NEWS_API_REDUCER_KEY, newsApi } from '@features/news/news.service';
import newsDetailReducer from '@features/news/news.slice';
import { PERSON_API_REDUCER_KEY, personApi } from '@features/person/person.service';
import { PRODUCT_API_REDUCER_KEY, productApi } from '@features/product/product.service';
import { combineReducers, configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';

const rootReducer = combineReducers({
  companyReducer,
  authReducer,
  newsDetailReducer,
  commonReducer,
  fundReducer,
  [OVERVIEW_API_REDUCER_KEY]: overviewApi.reducer,
  [EVENT_API_REDUCER_KEY]: eventApi.reducer,
  [NEWS_API_REDUCER_KEY]: newsApi.reducer,
  [FUND_API_REDUCER_KEY]: fundApi.reducer,
  [AUTH_REDUCER_API_KEY]: authApi.reducer,
  [HOME_API_REDUCER_KEY]: homeApi.reducer,
  [COIN_API_REDUCER_KEY]: coinApi.reducer,
  [PRODUCT_API_REDUCER_KEY]: productApi.reducer,
  [PERSON_API_REDUCER_KEY]: personApi.reducer,
  [COMPANY_API_REDUCER_KEY]: companyApi.reducer,
  [CATEGORY_API_REDUCER_KEY]: categoryApi.reducer,
});

export const makeStore = (opts?: ConfigureStoreOptions['preloadedState']) => {
  return configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware: any) => {
      return getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat([]);
    },
    ...opts,
  });
};

export const store = makeStore();

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
