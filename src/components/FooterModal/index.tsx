import clsx from 'clsx'
import { ButtonCustom } from 'components'
import React from 'react'

interface FooterModalType {
  onCancel?: () => void
  textCanel?: string
  onFinish?: () => void
  textFinish?: string
  onReverse?: boolean
}
export const FooterModal = ({
  onCancel,
  textCanel = 'Cancel',
  onFinish,
  textFinish = 'Save',
  onReverse = false
}: FooterModalType) => {
  return (
    <div
      key='footerCutom'
      className={clsx('absolute right-0 top-[-3px] mr-3 flex justify-center', {
        'flex-row-reverse': onReverse
      })}
    >
      <button
        key={'back'}
        className='bg-initial mt-[10px] w-[90px] cursor-pointer border-none text-[#A85F0A]'
        onClick={onCancel}
      >
        {textCanel}
      </button>
      <ButtonCustom className='mt-[10px] w-[90px]' onClick={onFinish}>
        {textFinish}
      </ButtonCustom>
    </div>
  )
}
