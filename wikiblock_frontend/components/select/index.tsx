import "antd/dist/antd.css";

import { Select } from "antd";
import Image from "next/image";
import { FC, MouseEventHandler } from "react";

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
  onClick?: MouseEventHandler<HTMLDivElement>;
};

export const SelectOptions: FC<SelectProps> = ({
  className,
  onChange,
  onClick,
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
      dropdownMatchSelectWidth={false}
      className={className}
      onChange={onChange}
      onClick={onClick}
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
