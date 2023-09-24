import { BasicBar } from '@components/ChartJs';
import { SelectOptions } from '@components/select';
import { Typography } from '@components/Typography';
import { isShowChartSelector, isWidthSidebarSelector } from '@features/layout/common.selector';
import { setIsWidthSidebar } from '@features/layout/common.slice';
import DefaultLayout from '@features/layout/components/DefaultLayout';
import { useAppDispatch, useAppSelector } from '@hooks/app';
import { useCheckMobileScreen } from '@hooks/useCheckMobileScreen';
import clsx from 'clsx';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineExport, AiOutlineFullscreenExit } from 'react-icons/ai';
import { BiExpand } from 'react-icons/bi';
import { BsShareFill } from 'react-icons/bs';
import { MdArrowDropDown } from 'react-icons/md';
import { I18nActiveNamespaces } from 'types/i18n';

import { dataTier, dataType } from '../data/overview';
import { useGetSidebarItems } from '../data/sidebar';
import { fundConfig } from '../fund.config';

type CategoryItemProps = {
  label: string;
  data: any;
};

export const CategoryItem: FC<CategoryItemProps> = ({ label, data }) => {
  const { t } = useTranslation<I18nActiveNamespaces<'common' | 'fund'>>(fundConfig.i18nNamespaces);

  return (
    <div className="flex flex-col">
      <span className="text-center opacity-[0.5]">{label}</span>
      <SelectOptions
        className={clsx('rounded-[5px] select-coin sm:min-w-initial')}
        suffixIcon={<MdArrowDropDown size={20} color="black" />}
        bordered={false}
        options={data}
        disabled={false}
        placeholder={t('fund:filter.all')}
      />
    </div>
  );
};
const CreateChartPage = () => {
  const { t } = useTranslation<I18nActiveNamespaces<'common' | 'fund'>>(fundConfig.i18nNamespaces);
  const { windowDimensions } = useCheckMobileScreen();
  const { dataFund } = useGetSidebarItems();
  const dispatch = useAppDispatch();
  const isWidthSidebar = useAppSelector(isWidthSidebarSelector);
  const isShowChart = useAppSelector(isShowChartSelector);
  const handleClickShowSidebar = () => {
    dispatch(setIsWidthSidebar(!isWidthSidebar));
  };
  type selectValueProps = {
    label: string;
    data: Array<{
      label: string;
      value: string;
    }>;
  };
  const selectValue: Array<selectValueProps> = [
    {
      label: t('fund:filter.type'),
      data: dataType,
    },
    {
      label: t('fund:filter.category'),
      data: dataType,
    },
    {
      label: t('fund:filter.tier'),
      data: dataTier,
    },
    {
      label: t('fund:filter.top'),
      data: dataType,
    },
  ];

  return (
    <DefaultLayout withSidebar dataSidebar={dataFund as any}>
      <div className="flex sm:flex-col justify-between items-center my-5">
        <div className="sm:mb-4">
          <Typography className="font-semibold text-[20px] uppercase" color="primary">
            {t('fund:create_chart.give_this_chart_a_name')}
          </Typography>
          <p className="text-[#000000] text-[14px] font-nomal">Số liệu được tổng hợp và cập nhật liên tục bởi abcxyz</p>
        </div>
        <div className="flex gap-x-6">
          <div className="flex gap-x-2 cursor-pointer">
            <AiOutlineExport size={25} />
            <h3 className="opacity-50">{t('fund:create_chart.export')}</h3>
          </div>
          <div className="flex gap-x-2 cursor-pointer">
            <BsShareFill size={25} />
            <h3>{t('fund:create_chart.share')}</h3>
          </div>
          <div className="flex gap-x-2 cursor-pointer" onClick={handleClickShowSidebar}>
            {isWidthSidebar ? (
              <>
                <BiExpand size={25} />
                <h3>{t('fund:create_chart.full')}</h3>
              </>
            ) : (
              <>
                <AiOutlineFullscreenExit size={25} />
                <h3>{t('fund:create_chart.exit')}</h3>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="content">
        {windowDimensions.width > 639 ? (
          <div className="flex max-w-[55%] sm:max-w-full bg-[#EFF0F4] justify-around mb-2 rounded-[30px]">
            {selectValue.map((item, index) => (
              <CategoryItem key={index} label={item.label} data={item.data} />
            ))}
          </div>
        ) : (
          <div>
            <div className="flex max-w-full bg-[#EFF0F4] justify-around mb-2 rounded-[30px]">
              <CategoryItem label={selectValue[0].label} data={selectValue[0].data} />
              <CategoryItem label={selectValue[1].label} data={selectValue[1].data} />
            </div>
            <div className="flex max-w-full bg-[#EFF0F4] justify-around mb-2 rounded-[30px]">
              <CategoryItem label={selectValue[2].label} data={selectValue[2].data} />
              <CategoryItem label={selectValue[3].label} data={selectValue[3].data} />
            </div>
          </div>
        )}
        {isShowChart && (
          <div className="mt-4">
            <BasicBar />
          </div>
        )}
      </div>
    </DefaultLayout>
  );
};

export default CreateChartPage;
