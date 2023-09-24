import { Input } from "antd";
import React, { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";

interface Props {
  label: string;
  name: string;
  required?: boolean;
}

const { TextArea } = Input;

const EventRegisterTextArea: FC<Props> = ({
  label,
  name,
  required = false,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <h4 className="text-[15px] font-bold text-[#383838] whitespace-nowrap mb-[16px]">
        {label}
        {required && <span className="text-[#e63946]">*</span>}:
      </h4>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextArea
            rows={6}
            {...field}
            style={{ borderColor: errors[name] && "#e63946" }}
          />
        )}
      />
      {errors[name] && (
        <p className="text-[#e63946]">{errors[name]?.message}</p>
      )}
    </div>
  );
};

export default EventRegisterTextArea;
