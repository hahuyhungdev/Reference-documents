import { Radio, Space } from 'antd';
import clsx from "clsx";
import { FC, useState } from "react";

import s from "../index.module.css";

interface Props {
  isMobile: boolean;
  dataRadio: Array<{ [key: string]: string | number }>
}

const CreatChartRadio: FC<Props> = ({ isMobile, dataRadio }) => {
  const [value, setValue] = useState(1);
  const onChange = (e: any) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <div
      className={clsx(
        "flex items-center gap-x-[10px] font-normal",
        isMobile && s["blockchain-filter-date-wrapper"]
      )}
    >
      <Radio.Group value={value} onChange={onChange}>
        <Space direction="vertical">
          {
            dataRadio.map((item, index) => {
              return (
                <Radio value={item.value} key={index}>{item.label}</Radio>
              )
            })
          }
        </Space>
      </Radio.Group>
    </div>
  );
};

export default CreatChartRadio;
