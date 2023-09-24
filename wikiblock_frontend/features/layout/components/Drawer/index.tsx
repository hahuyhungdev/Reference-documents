import { SearchInput } from '@components';
import { SelectOptions } from '@components/select';
import { layoutConfig } from '@features/layout/layout.config';
import { useCheckMobileScreen } from '@hooks';
import { Drawer, Menu } from 'antd';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { MdArrowDropDown } from 'react-icons/md';

import s from './index.module.css';

interface Props {
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const DrawerComponent: FC<Props> = ({ isShow, setIsShow }) => {
  const { t } = useTranslation(layoutConfig.i18nNamespaces);
  const menuItems: any = useMemo(
    () => [
      {
        title: t('navbar.crypto_assets'),
        url: '/crypto-assets',
        submenu: [
          {
            title: t('crypto_assets.sidebar.all_crypto_assets'),
            url: '/crypto-assets',
          },
          {
            title: t('navbar.categories'),
            url: '/categories/?type=all',
            submenu: [
              {
                title: t('crypto_assets.sidebar.all_crypto_assets'),
                url: '/categories?type=all',
              },
              {
                title: 'DeFi',
                url: '/categories?type=deFi',
              },
              {
                title: 'NFTs',
                url: '/categories?type=nfts',
              },
              {
                title: 'Stablecoins',
                url: '/categories?type=stablecoins',
              },

              {
                title: 'Dex',
                url: '/categories?type=dex',
              },
              {
                title: 'CEX',
                url: '/categories?type=cex',
              },
              {
                title: 'AMM',
                url: '/categories?type=amm',
              },
              {
                title: 'Smart Contracts',
                url: '/categories?type=smart-contracts',
              },
              {
                title: 'Oracle',
                url: '/categories?type=oracle',
              },
              {
                title: 'Yeild Farming',
                url: '/categories?type=yeild-farming',
              },
              {
                title: t('crypto_assets.sidebar.leveraged_tokens'),
                url: '/categories?type=leveraged-tokens',
              },
              {
                title: 'Interoperability Coins',
                url: '/categories?type=interoperability-coins',
              },
              {
                title: 'Privacy',
                url: '/categories?type=privacy',
              },
              {
                title: 'POW',
                url: '/categories?type=pow',
              },
              {
                title: 'POS',
                url: '/categories?type=pos',
              },
              {
                title: 'dPOS',
                url: '/categories?type=dpos',
              },
              {
                title: 'Masternodes',
                url: '/categories?type=masternodes',
              },
            ],
          },
          {
            title: t('navbar.sector.title'),
            url: '/sectors/?type=all',
            submenu: [
              {
                title: t('navbar.sector.all'),
                url: '/sectors/?type=all',
              },
              {
                title: t('navbar.sector.business_service'),
                url: '/sectors?type=business-service',
              },
              {
                title: t('navbar.sector.gaming'),
                url: '/sectors?type=gaming',
              },
              {
                title: t('navbar.sector.marketplace'),
                url: '/sectors?type=marketplace',
              },

              {
                title: t('navbar.sector.exchange'),
                url: '/sectors?type=exchange',
              },

              {
                title: t('navbar.sector.social'),
                url: '/sectors?type=social',
              },
              {
                title: t('navbar.sector.entertainment'),
                url: '/sectors?type=/entertainment',
              },
              {
                title: t('navbar.sector.computing'),
                url: '/sectors?type=computing',
              },
              {
                title: t('navbar.sector.governance'),
                url: '/sectors?type=governance',
              },

              {
                title: t('navbar.sector.virtual_reality'),
                url: '/sectors?type=virtual-reality',
              },
              {
                title: t('navbar.sector.metaverse'),
                url: '/sectors?type=metaverse',
              },

              {
                title: t('navbar.sector.fan_tokens'),
                url: '/sectors?type=fan-tokens',
              },
              {
                title: t('navbar.sector.lending'),
                url: '/sectors?type=lending-borrowing',
              },
              {
                title: t('navbar.sector.meme'),
                url: '/sectors?type=meme',
              },
              {
                title: t('navbar.sector.iot'),
                url: '/sectors?type=iot',
              },
              {
                title: t('navbar.sector.content_creation'),
                url: '/sectors?type=content-creation',
              },
            ],
          },
          {
            title: t('navbar.blockchain_ecosystem'),
            url: '/blockchains',
          },
        ],
      },
      { title: t('navbar.realtime_report'), url: '/realtime-report' },
      { title: t('navbar.fund'), url: '/fund' },
      { title: t('navbar.exchange'), url: '/exchange' },
      { title: t('navbar.directory'), url: '/directory' },
      { title: t('navbar.signals'), url: '/signals' },
      { title: t('navbar.news'), url: '/news' },
      { title: t('navbar.events'), url: '/events' },
      { title: t('navbar.exploration'), url: '/guides' },
      { title: t('navbar.account'), url: '/account' },
    ],
    [t],
  );
  const { windowDimensions } = useCheckMobileScreen();
  const getItem = (item: any) => {
    if (!item.submenu) {
      return {
        label: (
          <Link href={item.url} passHref>
            <span>{item.title}</span>
          </Link>
        ),
        key: item.href,
        type: 'link',
      };
    } else {
      return {
        label: item.title,
        key: item.href,
        children: item.submenu.map((item: any) => getItem(item)),
        type: 'sub',
      };
    }
  };
  const items = menuItems.map((item: any) => getItem(item));
  const router: any = useRouter();
  const { pathname, asPath, query } = router;
  const options = [
    {
      value: 'en',
      label: 'English',
      url_Image: '/images/usa.png',
    },
    {
      value: 'vi',
      label: 'Vietnamese',
      url_Image: '/images/vn.png',
    },
  ];
  return (
    <Drawer
      placement={'left'}
      closable={true}
      onClose={() => setIsShow(false)}
      visible={isShow && windowDimensions.width <= 1280}
      key={'left'}
      bodyStyle={{ paddingLeft: '0', paddingRight: '0' }}
      width={windowDimensions.width <= 639 ? '70%' : '40%'}
    >
      <div
        className={clsx('flex justify-center items-center bg-white ml-[24px] w-[212px] h-10 mb-2', s['search-mobile'])}
      >
        <SearchInput />
      </div>
      <div className="relative my-2 custom_center_selectOptions">
        <SelectOptions
          className="ml-[13px]"
          options={options}
          isIcon={true}
          defaultValue={router.locale || 'vi'}
          size="large"
          bordered={false}
          suffixIcon={<MdArrowDropDown size={20} color="black" />}
          onChange={(v: any) => {
            router.push({ pathname, query }, asPath, { locale: v });
          }}
          placeholder={options.find((item) => item.value === router.locale)?.label}
        />
      </div>
      <Menu items={items} mode="inline" style={{ border: 'none' }} />
    </Drawer>
  );
};

export default DrawerComponent;
