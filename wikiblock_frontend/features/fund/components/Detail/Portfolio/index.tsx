import { RecentInvestment } from '@components/Table/RecentInvestment';
import { ResearchPortfolio } from '@components/Table/ResearchPortfolio';
import { Typography } from '@components/Typography';
import CircleChart from '@features/categories/components/CircleChart';
import { fundConfig } from '@features/fund/fund.config';
import { Fund } from '@features/fund/fund.type';
import { useTranslation } from 'react-i18next';

import s from '../detail.module.css';

export const Portfolio = ({ fund = {} }: { fund: Fund }) => {
  const { t } = useTranslation(fundConfig.i18nNamespaces);
  return (
    <div className="mt-[26px] sm:mt-3 border-b-[1px] border-[#CACACA] pt-4 pb-7">
      <Typography className="font-semibold text-[20px] sm:text-[16px]" color="primary">
        {t('fund:portfolio.portfolio_structure', { name: fund.name })}
      </Typography>
      <div className="mt-[26px]">
        <div className="showchart flex sm:block justify-around">
          <div className={s['center-CircleChart']}>
            <CircleChart />
          </div>
          <div className={s['center-CircleChart']}>
            <CircleChart />
          </div>
        </div>
        <ResearchPortfolio />
        {/* Recent Investment */}
        <div className="mt-[26px]">
          <div className="my-8">
            <Typography className="font-semibold text-[20px] sm:text-[16px]" color="primary">
              {t('fund:portfolio.recent_investment', { name: fund.name })}
            </Typography>
            <h3>Trong 10 dự án gần nhất, mảng… chiếm .. dự án, mảng… có … dự án</h3>
          </div>
          <RecentInvestment />
        </div>
        {/* End Recent Investment */}
      </div>
    </div>
  );
};
