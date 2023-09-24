import { IconRightArrow } from '@components/Icons';
import { SEOHeadProps } from '@components/SEOHead';
import { dataFunds } from '@components/Table/data/dataFunds';
import { fundConfig } from '@features/fund/fund.config';
import { Fund } from '@features/fund/fund.type';
import { numberToPercent } from '@utils/number';
import { Avatar } from 'antd';
import clsx from 'clsx';
import _, { merge, pick } from 'lodash';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import s from './detail.module.css';
import { MainLeft } from './MainLeft';
import { MainRight } from './MainRight';

export type LayoutProps = {
  headProps?: SEOHeadProps;
  hideFooter?: boolean;
  loading?: boolean;
  withSidebar?: boolean;
  fund?: Fund;
};
type InformationItemProps = {
  title: string;
  value: any;
  avatar?: any;
  className?: string;
};
export const Detail: FC<LayoutProps> = ({ headProps, children, fund }) => {
  const data = dataFunds[0];
  const { t } = useTranslation(fundConfig.i18nNamespaces);
  const InfoRenderKey = { rating: 0, tier: 1, current_roi: 2, ath_roi: 3, typical_project: 4, recent_investment: 5 };
  const defaultInfo = {
    rating: 0,
    tier: 0,
    current_roi: 0,
    ath_roi: 0,
    typical_project: 'N/A',
    recent_investment: 'N/A',
  };
  const _fund = _.merge(defaultInfo, fund);
  return (
    <>
      <div className={clsx(s['asset-information'])}>
        <div className="flex gap-x-2 items-center">
          <h1>Fund</h1>
          <div className="scale-[1.1] mb-[2px]">
            <IconRightArrow />
          </div>
          <h1>{_fund?.name}</h1>
        </div>
        <div className={clsx(s['header'])}>
          <div className={clsx(s['header-name-logo'])}>
            <div className={clsx(s['logo-container'])}>
              <img className={clsx(s['header-logo'])} src={_fund?.avatar} alt="" />
            </div>
            <div>
              <h3 className="font-bold text-4xl sm:text-2xl">{_fund?.name}</h3>
              <div className="text-xl">{_fund?.type}</div>
            </div>
          </div>
          <div className={clsx(s['stack-items'])}>
            <div className={clsx(s['header-item'])}>
              <span className={clsx(s['header-small'])}>{t(`fund:overview:rating` as any)}</span>
              <div className={clsx(s['header-item-value'])}> {_fund?.rating}</div>
            </div>
            <div className={clsx(s['header-item'])}>
              <span className={clsx(s['header-small'])}>{t(`fund:overview:tier` as any)}</span>
              <div className={clsx(s['header-item-value'])}> {_fund?.tier}</div>
            </div>
            <div className={clsx(s['header-item'])}>
              <span className={clsx(s['header-small'])}>{t(`fund:overview:current_roi` as any)}</span>
              <div className={clsx(s['header-item-value'])}> {numberToPercent(_fund?.current_roi)}</div>
            </div>
            <div className={clsx(s['header-item'])}>
              <span className={clsx(s['header-small'])}>{t(`fund:overview:ath_roi` as any)}</span>
              <div className={clsx(s['header-item-value'])}> {numberToPercent(_fund?.ath_roi)}</div>
            </div>
            <div className={clsx(s['header-item'])}>
              <span className={clsx(s['header-small'])}>{t(`fund:overview:typical_project` as any)}</span>
              <div className={clsx(s['header-item-value'])}> {_fund?.typical_project}</div>
            </div>
            <div className={clsx(s['header-item'])}>
              <span className={clsx(s['header-small'])}>{t(`fund:overview:recent_investment` as any)}</span>
              <div className={clsx(s['header-item-value'])}> {_fund?.recent_investment}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={clsx(s['main'])}>
        <div className={clsx('col-span-1', s['mainLeft'])}>
          <MainLeft />
        </div>
        <div className={clsx('col-span-3', s['mainContent'])}>{children}</div>
        <div className={clsx('col-span-1', s['mainRight'])}>
          <MainRight fund={fund} />
        </div>
      </div>
    </>
  );
};
