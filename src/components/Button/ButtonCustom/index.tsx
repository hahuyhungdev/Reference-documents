import './style.scss'

import { Button } from 'antd'
interface ButtonCustomType {
  className?: string
  onClick?: () => void
  isIcon?: boolean
  icon?: any
  loading?: boolean
  children?: React.ReactNode
  disabled?: boolean
  style?: object
}

export const ButtonCustom = ({
  className = '',
  onClick = () => {},
  isIcon = false,
  icon = null,
  loading = false,
  children,
  disabled = false,
  ...restProps
}: ButtonCustomType) => {
  return (
    <div className='antCustom'>
      <Button onClick={onClick} className={className} disabled={disabled || loading} {...restProps}>
        {isIcon ? (
          <div style={{ display: 'flex', alignItems: 'center', columnGap: '10px', justifyContent: 'center' }}>
            {icon}
            <div>{children}</div>
          </div>
        ) : (
          <div>{children}</div>
        )}
      </Button>
    </div>
  )
}
