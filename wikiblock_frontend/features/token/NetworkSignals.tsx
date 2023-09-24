import { Button, SearchInput } from '@components';
import { CryptoManyInsights } from '@components/Table';
import { Typography } from '@components/Typography';
import { useTranslation } from 'react-i18next';
import { I18nActiveNamespaces } from 'types/i18n';

import { tokenConfig } from './token.config';
import s from './token.module.css';

export const NetworkSignals = () => {
  const { t } = useTranslation<I18nActiveNamespaces<'common' | 'home' | 'token'>>(tokenConfig.i18nNamespaces);
  return (
    <div className={s.network_signals}>
      <Typography className="font-semibold text-[20px] sm:text-[16px]" color="primary">
        {t('token:network_signals.title')}
      </Typography>
      <h2 className="mx-auto my-[20px]">Great things coming soon...</h2>
      <div className="flex mt-1 items-center gap-x-3 justify-center">
        <p className="text-[20px] font-medium">Subscribe</p>
        <SearchInput placeholder="Enter email address" />
        <Button className="text-black bg-transparent hover:bg-black hover:text-white rounded border-current border-[1px] h-[29px] min-h-[40px] w-auto x sm:h-[60%] px-2 py-[2px]">
          <span className="whitespace-nowrap px-2">LEARN MORE</span>
        </Button>
      </div>
    </div>
  );
};
