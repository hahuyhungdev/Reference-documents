import "antd/dist/antd.css";

import { Select } from "antd";
import Image from "next/image";
import { FC } from "react";

const { Option } = Select;
type SelectProps = {
  className?: string;
  onChange?: (value: string) => void;
  options: Array<{
    value: string | number;
    label: any;
    url_Image?: any;
  }>;
  placeholder: any;
  disabled?: boolean;
  value?: string;
  [key: string]: any;
  isIcon?: boolean;
  url_Image?: any;
};

export const SelectOptions: FC<SelectProps> = ({
  className,
  onChange,
  value,
  options,
  placeholder,
  key,
  disabled,
  isIcon,
  url_Image,
  ...props
}) => {
  return (
    <Select
      className={className}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      {...props}
    >
      {options.map(({ value, label, url_Image }) => (
        <Option key={value} value={value}>
          {isIcon ? (
            <div className="flex gap-x-[2px] items-center custom_center_selectOptions">
              <Image width={23} height={16} src={url_Image} alt={url_Image} />
              {label}
            </div>
          ) : (
            label
          )}
        </Option>
      ))}
    </Select>
  );
};
