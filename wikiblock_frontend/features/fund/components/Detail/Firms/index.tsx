import { Typography } from '@components/Typography';
import { fundConfig } from '@features/fund/fund.config';
import { Fund } from '@features/fund/fund.type';
import { useTranslation } from 'react-i18next';

export const Firms = ({ fund: { firms, name } = {} }: { fund: Fund }) => {
  const { t } = useTranslation(fundConfig.i18nNamespaces);
  return (
    <div className="border-b-[1px] border-[#CACACA] pt-4 pb-5">
      <div className="my-5">
        <Typography className="font-semibold text-[20px] sm:text-[16px]" color="primary">
          <div className="text-lg">{t('fund:detail_overview.firmsOf', { name })}</div>
        </Typography>
      </div>
      <div className="flex flex-wrap">
        {(firms || [])?.map((firm) => {
          return (
            <div className=" w-64 flex flex-row items-center mb-8" key={firm.foreign_id}>
              <div className="text-center pr-4">
                <img className="w-12" src={firm.avatar || '/images/meta-logo.png'} alt="" />
              </div>
              <div className="flex flex-col">
                <div className="mb-2">
                  <h2 className="text-[13px] text-[#0F0F1B] font-normal font-bold">{firm.name}</h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
