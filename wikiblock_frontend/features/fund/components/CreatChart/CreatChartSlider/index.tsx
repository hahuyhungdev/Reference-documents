import { SelectOptions } from "@components/select";
import { Slider } from "antd";
import type { SliderMarks } from "antd/es/slider";
import React, { FC } from "react";

interface Props {
  isMobile: boolean;
  marks: SliderMarks;
  onSliderChange: any
  options: Array<{
    value: string;
    label: string;
    url_Image?: string;
  }>;
  range?: any;
  defaultValue?: any;
}

const ChartFilterSlider: FC<Props> = ({
  isMobile,
  marks,
  onSliderChange,
  options,
  range,
}) => {
  return !isMobile ? (
    <Slider
      range={range}
      marks={marks}
      step={25}
      defaultValue={[25, 50]}
      tipFormatter={null}
      onChange={onSliderChange}
      className="blockchain-select-slider font-normal"
    />
  ) : (
    <SelectOptions
      options={options}
      placeholder="Select Eco Market"
      className="w-full select-coin"
      bordered={false}
    />
  );
};

export default ChartFilterSlider;
