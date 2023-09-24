import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { I18nActiveNamespaces } from 'types/i18n';

import { fundConfig } from '../fund.config';

type ulistkeyProps = {
  items: Array<{
    name: string;
    value?: string;
    value_color?: string;
    note?: string;
    note_color?: string;
    other?: string;
  }>;
};
export const useGetCommonItems = () => {
  const { t } = useTranslation<I18nActiveNamespaces<'common' | 'fund'>>(fundConfig.i18nNamespaces);

  const dataRadio: Array<{ [key: string]: string | number }> = useMemo(
    () => [
      {
        label: t('fund:create_chart.fund'),
        value: 1,
      },
      {
        label: t('fund:create_chart.project'),
        value: 2,
      },
    ],
    [t],
  );
  const dataOptionsCheckBox = useMemo(
    () => [
      {
        label: t('fund:create_chart.ath_roi'),
        value: 'ATH ROI',
      },
      {
        label: t('fund:create_chart.current_roi'),
        value: 'Current ROI',
      },
      {
        label: t('fund:create_chart.avg_market_cap'),
        value: 'Avg. Market Cap',
      },
      {
        label: t('fund:create_chart.investment'),
        value: 'Investment',
      },
      {
        label: t('fund:create_chart.number_of_funds'),
        value: 'Number of Funds',
      },
    ],
    [t],
  );
  const dataHighlights: Array<ulistkeyProps> = useMemo(
    () => [
      {
        items: [
          {
            name: t('fund:detail_overview.investment'),
          },
          {
            name: t('fund:detail_overview.projects'),
            value: '286',
            value_color: '#353535',
            note_color: '#353535',
          },
          {
            name: t('fund:detail_overview.funding'),
            value: '$2,1 ',
            note: 'B',
            value_color: '#353535',
            note_color: '#353535',
          },

          {
            name: t('fund:detail_overview.recent_investment_event') + ':',
            value: '$5,1M',
            note: '(26/011/2022)',
            value_color: '#000000',
          },
        ],
      },
      {
        items: [
          {
            name: t('fund:detail_overview.category'),
          },
          {
            name: '#1 AMM:',
            value: '75 projects',
            value_color: '#353535',
            note: '21B$',
            note_color: 'red',
          },
          {
            name: '#2 Gamefi:',
            value: '55 projects',
            value_color: '#353535',
            note: '21B$',
            note_color: 'red',
          },

          {
            name: '#3 Ecosystem:',
            value: '55 projects',
            value_color: '#353535',
            note: '21B$',
            note_color: 'red',
          },
        ],
      },
    ],
    [t],
  );
  return {
    dataRadio,
    dataOptionsCheckBox,
    dataHighlights,
  };
};
