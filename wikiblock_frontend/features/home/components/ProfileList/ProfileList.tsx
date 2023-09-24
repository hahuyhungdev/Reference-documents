import { homeConfig } from '@features/home/home.config';
import { useCheckMobileScreen } from '@hooks';
import clsx from 'clsx';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { I18nActiveNamespaces } from 'types/i18n';

import style from './index.module.css';

export type Item = {
  avatar?: string;
  name?: string;
  about?: string;
  icons?: JSX.Element[];
};
export type Props = {
  item: Item;
};

export const ProfileItem: FC<Props> = ({ item: { avatar = '', name, about = '', icons } = {} }) => {
  const summaryAbout = about.length > 100 ? `${about?.slice(0, 100)}...` : about;
  const [summary, setSummary] = useState(summaryAbout);
  const [toggleAbout, setToggleAbout] = useState(false);
  useEffect(() => {
    setSummary(toggleAbout ? about : summaryAbout);
  }, [toggleAbout]);

  return (
    <div className="flex border-b-2 border-[#E5E7EF] pt-[23px] pl-[18px] px-3">
      <div className="w-1/5 text-center">
        <Image src={avatar || '/images/hardWallet2.png'} width="40px" height="40px" alt={name} />
      </div>
      <div className="pl-[19px] w-4/5">
        <h2 className="text-[13px] text-[#0F0F1B] font-normal">{name}</h2>
        <p
          className="text-[#565656] text-[11px] font-normal"
          onClick={() => {
            setToggleAbout(!toggleAbout);
          }}
        >
          {summary}
        </p>
        {icons && (
          <div className="flex bg-[#EEF0F6] rounded-tl-[3px] p-[5px] mb-0.5 float-right">
            {icons.map((icon, index) => (
              <div key={index} className="pl-0.5">
                {icon}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export type PropProfileList = {
  title: string;
  items: Array<Item>;
};
export const ProfileList: FC<PropProfileList> = ({ title, items }) => {
  const { t } = useTranslation<I18nActiveNamespaces<'common' | 'home'>>(homeConfig.i18nNamespaces);
  const { windowDimensions } = useCheckMobileScreen();
  return (
    <div>
      <div>
        <div className={clsx('text-[16px] text-[#505050] font-semibold pb-[19px]', style['texttitle'])}>
          <span>{title}</span>
        </div>
        <div className="bg-[#F9F9F9]">
          <div className={clsx('h-[600px] sm:h-full overflow-y-auto', style['scroll-list'])}>
            {windowDimensions.width > 550
              ? items.map((item, index) => {
                  return <ProfileItem item={item} key={index} />;
                })
              : items.slice(0, 3).map((item, index) => {
                  return <ProfileItem item={item} key={index} />;
                })}
          </div>
          <div className="px-6 py-5">
            <div className="bg-[#4992D6] hover:bg-blue-400 text-white rounded-sm text-center py-4 font-nomal text-[13px]">
              <button>{t('home:profile.view_all_company_verticals')}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
