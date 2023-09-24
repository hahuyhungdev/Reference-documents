import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  loading?: boolean;
  fullWidth?: boolean;
  children?: React.ReactNode;
  size?: 'large' | 'normal' | 'small';
  variant?: 'text' | 'contained' | 'outlined';
  color?: string;
  className?: string;
  url?: string;
  key?: string | number;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    className,
    loading = false,
    fullWidth = false,
    size,
    variant = 'contained',
    color,
    children,
    disabled = false,
    ...restProps
  },
  ref,
) {
  return (
    <button
      onClick={restProps.onClick}
      ref={ref}
      className={clsx(
        'relative text-center active:bg-[#f4ac20] rounded-[3px] leading-4 transition',
        {
          'bg-[#E5E7EE]': color === 'default',
          'w-full': fullWidth,
          'text-base h-[45px] px-[24px] rounded-[4px] ': size === 'large',
          'h-[30px] px-[5px] w-[128px] ': size === 'normal',
          'h-[25px] px-[5px]': size === 'small',
          'bg-btn-primary bg-[#E5E7EE] text-white': color === 'primary' && variant !== 'outlined',
          'bg-btn-secondary hover:bg-orange-300 border border-[#FDE8D9]': color === 'secondary',
          'bg-transparent hover:bg-white/[.1] border-none': variant === 'text',
          'bg-transparent hover:bg-gray-100 border border-[#D9D9D9] font-light text-[rgba(0,0,0,0.65)]':
            variant === 'outlined',
          'pointer-events-none': loading,
          'cursor-not-allowed opacity-[0.5]': disabled || loading,
        },
        className,
      )}
      disabled={disabled || loading}
      {...restProps}
    >
      {loading ? (
        <div className="flex items-center justify-center absolute w-full h-full top-0 left-0">
          <div className="animate-spin">
            <AiOutlineLoading3Quarters size={20} />
          </div>
        </div>
      ) : (
        <div>{children}</div>
      )}
    </button>
  );
});
