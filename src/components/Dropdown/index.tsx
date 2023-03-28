import { Select } from 'antd'
import { handleIcon } from 'components/Table/Devices'
import React from 'react'

const { Option } = Select

interface SelectOptionType {
  className?: string
  onChange?: (value: any) => void
  options: Array<{ value: string | number; label: string; Icon?: string | React.ReactNode }>
  placeholder?: string
  disabled?: boolean
  isIcon?: boolean
  defaultValue?: any
  ignore?: boolean
}
export const SelectOption = ({
  className = '',
  defaultValue,
  onChange,
  options = [],
  placeholder = '',
  disabled = false,
  isIcon = false,
  ignore = false,
  ...props
}: SelectOptionType) => {
  return (
    <Select
      defaultValue={defaultValue}
      className={className}
      onChange={onChange}
      // value={value}
      placeholder={placeholder}
      disabled={disabled}
      {...props}
    >
      {options?.map(({ value, label }, index) => (
        <Option key={index} value={value}>
          {isIcon ? (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
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
