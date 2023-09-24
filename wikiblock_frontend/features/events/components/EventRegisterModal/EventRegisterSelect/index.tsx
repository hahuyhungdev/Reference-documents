import { eventsConfig } from "@features/events/events.config";
import { Select } from "antd";
import clsx from "clsx";
import React, { FC, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

import s from "./index.module.css";

interface Props {
  label: string;
  name: string;
  required?: boolean;
}

const { Option } = Select;

const EventRegisterSelect: FC<Props> = ({ label, name, required }) => {
  const { t } = useTranslation(eventsConfig.i18nNamespaces);
  const [localValue, setLocalValue] = useState<string | undefined>(undefined);
  const {
    formState: { errors },
    setValue,
    getValues,
  } = useFormContext();
  const value = getValues(name);
  const selectOptions = [
    {
      value: "< 6 months",
      label: `< 6 ${t("events:form.mon")}`,
    },
    {
      value: "< 12 months",
      label: `< 12 ${t("events:form.mon")}`,
    },
    {
      value: "< 2 years",
      label: `< 2 ${t("events:form.year")}`,
    },
    {
      value: "> 2 years",
      label: `> 2 ${t("events:form.year")}`,
    },
  ];

  const onChange = (value: string) => {
    setValue(name, value);
    setLocalValue(value);
  };

  useEffect(() => {
    if (value) setLocalValue(value);
  }, [value]);

  return (
    <div>
      <h4
        className={clsx(
          "text-[15px] font-bold text-[#383838] whitespace-nowrap mb-[25px]",
          s["select-label"]
        )}
      >
        {label}
        {required && <span className="text-[#e63946]">*</span>}:
      </h4>
      {errors[name] && (
        <p className="text-[#e63946] mt-[-20px] mb-[30px]">
          {errors[name]?.message}
        </p>
      )}
      <div
        className={clsx(
          "relative w-full border-[1px] border-[#828282]",
          s["select-desktop"]
        )}
      >
        <div className="absolute w-full flex items-center justify-around left-0 bottom-[-10px] translate-y-2/4">
          {selectOptions.map((option) => (
            <div
              className="flex flex-col gap-x-[4px] items-center"
              key={`desktop-${option.value}`}
              onClick={() => onChange(option.value)}
            >
              <div
                className={clsx(
                  "w-[29px] h-[29px] rounded-full hover:bg-btn-primary cursor-pointer transition-all"
                )}
                style={{
                  backgroundColor:
                    option.value === localValue ? "#F4AC20" : "#D4CDCD",
                }}
              ></div>
              <span className="text-[15px] text-[#383838] font-bold">
                {option.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className={clsx("w-full hidden", s["select-mobile"])}>
        <Select
          defaultValue={
            localValue && localValue!.length > 0
              ? localValue
              : selectOptions[0].value
          }
          style={{ width: "100%" }}
          placeholder={label}
          onChange={(e) => onChange(e)}
        >
          {selectOptions.map((option) => (
            <Option key={`mobile-${option.value}`} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default EventRegisterSelect;
