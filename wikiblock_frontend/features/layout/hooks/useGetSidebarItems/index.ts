import { useGetAllCategoriesMutation } from '@features/categories/categories.service';
import { CATEGORY_TYPE } from '@features/categories/categories.type';
import { layoutConfig } from '@features/layout/layout.config';
import { Menu } from '@features/layout/layout.type';
import { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export const useGetSidebarItems = () => {
  const { t } = useTranslation(layoutConfig.i18nNamespaces);
  const [
    getAllCryptoAssetsCategories,
    {
      data: { items: cryptoAssetCategories = [] } = {
        items: [],
      },
    },
  ] = useGetAllCategoriesMutation();
  const [
    getAllSectorsCategories,
    {
      data: { items: sectors = [] } = {
        items: [],
      },
    },
  ] = useGetAllCategoriesMutation();
  const [
    getAllBlockchainCategories,
    {
      data: { items: blockchainCategories = [] } = {
        items: [],
      },
    },
  ] = useGetAllCategoriesMutation();
  useEffect(() => {
    getAllCryptoAssetsCategories({
      page: 1,
      per_page: 99999,
      type: [CATEGORY_TYPE.CRYPTO_ASSET],
    });
    getAllSectorsCategories({
      page: 1,
      per_page: 99999,
      type: [CATEGORY_TYPE.CRYPTO],
    });
    getAllBlockchainCategories({
      page: 1,
      per_page: 99999,
      type: CATEGORY_TYPE.BLOCKCHAIN,
    });
  }, []);
  const categories = useMemo(
    () => [...cryptoAssetCategories, ...sectors, ...blockchainCategories],
    [cryptoAssetCategories, blockchainCategories, sectors],
  );
  const menus: Array<Menu> = useMemo(
    () => [
      {
        title: t('crypto_assets.sidebar.all_crypto_assets'),
        url: '/crypto-assets?type=all',
      },

      {
        title: t('crypto_assets.sidebar.assets_categories'),
        url: `/crypto-assets?type=${CATEGORY_TYPE.CRYPTO_ASSET}`,
        children: [...cryptoAssetCategories]
          .sort((a, b) => a.weight - b.weight)
          .map(({ title, name, weight }) => ({
            title,
            url: `/crypto-assets?type=${CATEGORY_TYPE.CRYPTO_ASSET}&category=${name}`,
          })) as any,
      },
      {
        title: t('crypto_assets.sidebar.assets_sectors'),
        url: `/crypto-assets?type=${CATEGORY_TYPE.CRYPTO}`,
        children: [...sectors]
          .sort((a, b) => a.weight - b.weight)
          .map(({ title, name, weight }) => ({
            title,
            url: `/crypto-assets?type=${CATEGORY_TYPE.CRYPTO}&sector=${name}`,
          })) as any,
      },
      {
        title: t('crypto_assets.sidebar.blockchain_ecosystem'),
        url: `/blockchain-ecosystem?type=${CATEGORY_TYPE.BLOCKCHAIN}`,
        children: [...blockchainCategories]
          .sort((a, b) => a.weight - b.weight)
          .map(({ title, name, weight }) => ({
            title,
            url: `/blockchain-ecosystem?type=${CATEGORY_TYPE.BLOCKCHAIN}&blockchain=${name}`,
          })) as any,
      },
    ],
    [t, cryptoAssetCategories, blockchainCategories, sectors],
  );
  return {
    menus,
    categories,
  };
};
