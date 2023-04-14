import { Select } from 'antd'
import { SelectProps } from 'antd'
import { handleIcon } from 'components/Table/Devices'
import React from 'react'

const { Option } = Select

export interface SelectOptionType extends SelectProps {
  className?: string
  onChange?: (value: any) => void
  options: Array<{ value: string | number; label: string; Icon?: string | React.ReactNode }>
  isIcon?: boolean
  defaultValue?: any
  ignore?: boolean
}

export const SelectOptions = ({
  className = '',
  defaultValue,
  onChange,
  options = [],
  isIcon = false,
  ignore = false,
  value,
  ...props
}: SelectOptionType) => {
  return (
    <Select
      placeholder={props.placeholder || 'Select...'}
      defaultValue={defaultValue}
      className={className}
      onChange={onChange}
      value={value}
      {...props}
    >
      {options?.map(({ value, label }, index) => (
        <Option key={index} value={value}>
          {isIcon ? (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '5px' }}>
              <span>{ignore && index === 0 ? null : handleIcon(label)}</span>
              <span>{label}</span>
            </div>
          ) : (
            label
          )}
        </Option>
      ))}
    </Select>
  )
}
