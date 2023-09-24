// import { memo } from 'react';
import './style.scss'

import { Modal } from 'antd'
import { FooterModal, IconWarning } from 'components'

interface ModalAlertType {
  title: string
  content: string
  onFinish: () => void
  onCancel: () => void
  onOpen: boolean
}
export const ModalAlert = ({ title, content, onFinish, onOpen, onCancel }: ModalAlertType) => {
  return (
    <div className='antCustom'>
      <Modal
        open={onOpen}
        onOk={onFinish}
        onCancel={onCancel}
        closable={false}
        centered
        footer={[
          <FooterModal
            onReverse={true}
            textCanel='No'
            textFinish='Yes'
            key='footerCutom'
            onCancel={onCancel}
            onFinish={onFinish}
          />
        ]}
      >
        <div className='warningConfirm'>
          <IconWarning />
          <div className='containText'>
            <span className='titletModal'>{title}</span>
            <span className='contentModal'>{content}</span>
          </div>
        </div>
      </Modal>
    </div>
  )
}
