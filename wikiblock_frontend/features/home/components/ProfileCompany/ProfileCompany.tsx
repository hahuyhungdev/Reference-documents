/* eslint-disable @next/next/no-img-element */
import { Button } from '@components/Button';
import { IconAdd } from '@components/Icons';
import { Typography } from '@components/Typography';
import { Company } from '@features/company/company.type';
import { Person } from '@features/events/events.type';
import { Product } from '@features/product/product.type';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineMedium,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { MdRssFeed } from 'react-icons/md';
import { I18nActiveNamespaces } from 'types/i18n';

import { homeConfig } from '../../home.config';
import { ProfileList } from '../ProfileList/ProfileList';
import s from './index.module.css';
const mybtns = [
  {
    name: 'Funds',
    url: '/funds',
  },
  {
    name: 'Exchanges',
    url: '/exchanges',
  },
  {
    name: 'Companies',
    url: '/companies',
  },
  {
    name: 'People',
    url: '/people',
  },
  {
    name: 'Products',
    url: '/products',
  },
];

const myPeopleList = [
  {
    image: '/images/abdalla.png',
    title: 'Abdalla Kablan',
    description: 'Executive Chairman @',
    icons: [
      <AiOutlineTwitter key={'icon-twitter'} />,
      <AiFillLinkedin key={'icon-linkedin'} />,
      <AiOutlineMedium key={'icon-medium'} />,
    ],
  },
  {
    image: '/images/akon.png',
    title: 'Akon',
    description: 'Creator @ Akoin',
    icons: [
      <AiOutlineTwitter key={'icon-twitter'} />,
      <AiFillFacebook key={'icon-facebook'} />,
      <AiFillYoutube key={'icon-youtube'} />,
      <AiOutlineInstagram key={'icon-instagram'} />,
    ],
  },
  {
    image: '/images/alexMashinsky.png',
    title: 'Alex Mashinsky',
    description: 'CEO @ Celsius Network',
    icons: [
      <AiOutlineTwitter key={'icon-twitter'} />,
      <AiFillLinkedin key={'icon-linkedin'} />,
      <AiOutlineMedium key={'icon-medium'} />,
      <MdRssFeed key={'icon-feed'} />,
      <AiFillFacebook key={'icon-facebook'} />,
      <AiOutlineInstagram key={'icon-instagram'} />,
    ],
  },
  {
    image: '/images/abdalla.png',
    title: 'Abdalla Kablan',
    description: 'Executive Chairman @',
    icons: [
      <AiOutlineTwitter key={'icon-twitter'} />,
      <AiFillLinkedin key={'icon-linkedin'} />,
      <AiOutlineMedium key={'icon-medium'} />,
    ],
  },
  {
    image: '/images/akon.png',
    title: 'Akon',
    description: 'Creator @ Akoin',
    icons: [
      <AiOutlineTwitter key={'icon-twitter'} />,
      <AiFillFacebook key={'icon-facebook'} />,
      <AiFillYoutube key={'icon-youtube'} />,
      <AiOutlineInstagram key={'icon-instagram'} />,
    ],
  },
  {
    image: '/images/alexMashinsky.png',
    title: 'Alex Mashinsky',
    description: 'CEO @ Celsius Network',
    icons: [
      <AiOutlineTwitter key={'icon-twitter'} />,
      <AiFillLinkedin key={'icon-linkedin'} />,
      <AiOutlineMedium key={'icon-medium'} />,
      <MdRssFeed key={'icon-feed'} />,
      <AiFillFacebook key={'icon-facebook'} />,
      <AiOutlineInstagram key={'icon-instagram'} />,
    ],
  },
];

export const ProfileCompany: FC<any> = ({
  companyList = [],
  personList = [],
  productList = [],
}: {
  companyList: Company[];
  personList: Person[];
  productList: Product[];
}) => {
  const { t } = useTranslation<I18nActiveNamespaces<'common' | 'home'>>(homeConfig.i18nNamespaces);
  const myProfileList = [
    {
      image: '/images/blockchain.png',
      title: 'Blockchain Capital',
      description: 'Blockchain and crypto venture capital firm',
      name: 'View All Company Verticals',
    },
    {
      image: '/images/coinme.png',
      title: 'Coinme',
      description: 'Bitcoin ATM operator & crypto financial services provider',
    },
    {
      image: '/images/digital.png',
      title: 'Digital Asset Management',
      description: 'Digital asset management firm',
    },
    {
      image: '/images/goldman.png',
      title: 'Goldman Sachs',
      description: 'Investment banking company',
    },
    {
      image: '/images/nchain.png',
      title: 'nChain',
      description: 'A blockchain research and development firm',
    },
    {
      image: '/images/tzero.png',
      title: 'tZERO',
      description: 'A leader for capital markets',
    },
    {
      image: '/images/tzero.png',
      title: 'tZERO',
      description: 'A leader for capital markets',
    },
  ];
  const myProductList = [
    {
      image: '/images/enjinWallet.png',
      title: 'Enjin Wallet',
      description: 'Wallet',
    },
    {
      image: '/images/status.png',
      title: 'Status',
      description: 'Communication · DApp Browser · Wallet',
    },
    {
      image: '/images/binanceApp.png',
      title: 'Binance App',
      description: 'Trading App · Wallet',
    },
    {
      image: '/images/wallet.png',
      description: 'Wallet',
    },
    {
      image: '/images/hardWallet1.png',
      description: t('home:profile.hard_wallets'),
    },
    {
      image: '/images/hardWallet2.png',
      description: t('home:profile.hard_wallets'),
    },
    {
      image: '/images/hardWallet3.png',
      description: t('home:profile.hard_wallets'),
    },
    {
      image: '/images/hardWallet4.png',
      description: t('home:profile.hard_wallets'),
    },
    {
      image: '/images/hardWallet3.png',
      description: t('home:profile.hard_wallets'),
    },
    {
      image: '/images/hardWallet4.png',
      description: t('home:profile.hard_wallets'),
    },
  ];
  useEffect(() => {
    console.log({
      companyList,
      personList,
      productList,
    });
  }),
    [companyList, personList, productList];
  return (
    <div>
      <div className={clsx(s['main'])}>
        <div className={clsx(s['mainLeft'])}>
          <div>
            <Typography className="font-medium text-xl sm:text-base" color="primary">
              {t('home:profile.profile_a_company')}
            </Typography>
            <p className="text-[14px] text-[#000000] font-nomal">{t('home:profile.description')}</p>
          </div>
          <div className="flex items-center gap-[13px] sm:grid sm:grid-cols-2 my-[23px] md:mb-[15px] md:justify-center">
            {mybtns.map((item: any, index: number) => (
              <Button
                key={index}
                className="bg-[#EFF0F4] active:bg-[#f4ac20] h-[30px] px-[10px] not-italic font-normal sm:col-span-1 "
              >
                <Link href={item.url}>
                  <a className="text-[#010000] sm:truncate">{item.name}</a>
                </Link>
              </Button>
            ))}
          </div>
          <div className={clsx(s['container_colums'])}>
            <div className={clsx('', s['colums'])}>
              <ProfileList
                title={t('home:profile.company_verticals')}
                items={companyList.map(({ name, avatar, about }) => ({
                  name,
                  avatar,
                  about,
                }))}
              />
            </div>
            <div className={clsx(s['colums'])}>
              <ProfileList
                title={t('home:profile.people_directory')}
                items={personList.map(({ name, avatar, about }) => ({
                  name,
                  avatar,
                  about,
                }))}
              />
            </div>
            <div className={clsx('col-span-1 sm:col-span-6 ', s[''])}>
              <ProfileList
                title={t('home:profile.product_directory')}
                items={productList.map(({ name, avatar, about }) => ({
                  name,
                  avatar,
                  about,
                }))}
              />
            </div>
          </div>
        </div>
        <div className={clsx(s['mainRight'])}>
          <div className="h-full">
            <img className="h-full w-full" src="images/withBitcoin.jpg" alt="image"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
