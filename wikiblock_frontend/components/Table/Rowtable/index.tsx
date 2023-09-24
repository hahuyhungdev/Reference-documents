import TwoLine from '@components/ChartJs/ProgressiveLine/TwoLine';
import { IconFilterWhite, IconInfo } from '@components/Icons';
import { Tooltip } from 'antd';
import clsx from 'clsx';
import { FC } from 'react';

import s from './rowtable.module.css';
type typeRow = {
  title: string;
  name1?: string | number | undefined;
  name2?: string | number | undefined;
  openIconFilter?: boolean;
  openIconInfo?: boolean;
  openTwoLine?: boolean;
  className?: string;
  colorName1?: any;
  colorName2?: any;
  tooltip?: string;
};

export const Rowtable: FC<typeRow> = ({
  title,
  tooltip,
  name1,
  name2,
  openIconFilter,
  openIconInfo,
  openTwoLine,
  className,
  ...restProps
}) => {
  return (
    <div className="grid grid-cols-3 sm:flex border-b-[1px] border-[#E5E7EE] ">
      <div className="col-span-1 sm:w-[40%] flex items-center gap-x-[12px] h-[40px]">
        <h3 className="mb-0 font-normal text-sm">{title}</h3>
        {openIconFilter && <IconFilterWhite />}
        {openIconInfo && (
          <Tooltip title={tooltip} className="ml-auto mr-[20px]">
            <div>
              <IconInfo />
            </div>
          </Tooltip>
        )}
      </div>
      {openTwoLine ? (
        <div className="max-h-[80px] sm:w-[60%] w-full col-span-2 mb-0 justify-center flex items-center font-normal text-sm">
          <div className="max-w-[250px]">
            <TwoLine />
          </div>
        </div>
      ) : (
        <div className={clsx(className, 'sm:w-[60%]', s['rowtable_vale'])}>
          <div style={{ color: restProps.colorName1 }} className={clsx(className, s['rowtable_name'])}>
            {name1}
          </div>
          <div style={{ color: restProps.colorName2 }} className={clsx(className, s['rowtable_name'])}>
            {name2}
          </div>
        </div>
      )}
    </div>
  );
};
