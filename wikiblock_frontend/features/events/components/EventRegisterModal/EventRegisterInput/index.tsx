import { Input } from "antd";
import clsx from "clsx";
import React, { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";

import s from "./index.module.css";

interface Props {
  label: string;
  name: string;
  required?: boolean;
}

const EventRegisterInput: FC<Props> = ({ label, name, required = false }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <React.Fragment>
      <div>
        <div className="flex items-center justify-between">
          <h4
            className={clsx(
              "text-[15px] font-bold text-[#383838] whitespace-nowrap mb-0",
              s["input-label"]
            )}
          >
            {label}
            {required && <span className="text-[#e63946]">*</span>}:
          </h4>
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <Input
                className="max-w-[370px] event-register-input"
                {...field}
                style={{ borderColor: errors[name] && "#e63946" }}
                id={name}
              />
            )}
          />
        </div>
        {errors[name] && (
          <p className="text-[#e63946]">{errors[name]?.message}</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default EventRegisterInput;
