import { SelectOptions } from "@components/select";
import { Slider } from "antd";
import type { SliderMarks } from "antd/es/slider";
import React, { FC } from "react";

interface Props {
  isMobile: boolean;
  marks: SliderMarks;
  onSliderChange: (value: number) => void;
  options: Array<{
    value: string;
    label: string;
    url_Image?: string;
  }>;
  onOptionChange?: (value: string) => void;
}

const BlockchainFilterSlider: FC<Props> = ({
  isMobile,
  marks,
  onSliderChange,
  options,
  onOptionChange,
}) => {
  return !isMobile ? (
    <Slider
      marks={marks}
      step={14.25}
      defaultValue={71.25}
      tipFormatter={null}
      onChange={onSliderChange}
      className="blockchain-select-slider"
    />
  ) : (
    <SelectOptions
      options={options}
      placeholder="Select Eco Market"
      className="w-full"
    />
  );
};

export default BlockchainFilterSlider;
