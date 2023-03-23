// @ts-nocheck
import './style.scss'

import { Radio } from 'antd'
import { FC } from 'react'

interface ButtonGroupType {
  className?: string
  onChange?: (e: RadioChangeEvent) => void
  options?: { label: string; value: string }[]
  disabled?: boolean
  defaultValue?: string
  optionType?: 'default' | 'button'
  size?: 'small' | 'middle' | 'large'
  buttonStyle?: 'solid' | 'outline'
}

export const ButtonGroup: FC<ButtonGroupType> = ({
  className = '',
  onChange = () => {},
  options = [],
  disabled = false,
  defaultValue = '',
  optionType = 'default',
  size = 'middle',
  buttonStyle = 'solid',
  ...restProps
}) => {
  return (
    <div className='buttonGroupCustom'>
      <Radio.Group
        className={className}
        onChange={onChange}
        defaultValue={defaultValue}
        optionType={optionType}
        size={size}
        buttonStyle={buttonStyle}
        {...restProps}
      >
        {options.map((item, index) => {
          return (
            <Radio.Button key={index} value={item.value} disabled={disabled}>
              {item.label}
            </Radio.Button>
          )
        })}
      </Radio.Group>
    </div>
  )
}
