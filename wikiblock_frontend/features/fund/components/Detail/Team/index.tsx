import { Typography } from '@components/Typography';
import { fundConfig } from '@features/fund/fund.config';
import { Fund } from '@features/fund/fund.type';
import { OrganzationList } from '@features/token/Profile/OrganizationList';
import { useTranslation } from 'react-i18next';
import { AiOutlineMedium, AiOutlineTwitter } from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';
import { IoIosPaperPlane } from 'react-icons/io';

export const Team = ({ fund: { name, partners } = {} }: { fund: Fund }) => {
  const { t } = useTranslation(fundConfig.i18nNamespaces);
  return (
    <div className="border-b-[1px] border-[#CACACA] py-4 pb-5">
      <div className="my-5">
        <Typography className="font-semibold text-[20px] sm:text-[16px]" color="primary">
          <div className="text-lg">{t('fund:detail_overview.partners', { name })}</div>
        </Typography>
      </div>
      <div className="flex flex-wrap">
        {(partners || [])?.map((partner) => {
          return (
            <div className=" w-64 flex flex-row items-center mb-8" key={partner.foreign_id}>
              <div className="text-center pr-4">
                <img src={partner.avatar || '/images/adam_levy.png'} alt="" />
              </div>
              <div className="flex flex-col">
                <div className="mb-2">
                  <h2 className="text-[13px] text-[#0F0F1B] font-normal">{partner.name}</h2>
                </div>
                <div className="flex bg-gray-200	space-x-1 px-2 ">
                  <a href={''}>
                    <AiOutlineTwitter key={'icon-twitter'} />
                  </a>
                  <a href={''}>
                    <IoIosPaperPlane key={'icon-plane'} />
                  </a>
                  <a href={''}>
                    <AiOutlineMedium key={'icon-medium'} />
                  </a>
                  <a href={''}>
                    <BsDiscord key={'icon-discord'} />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
