/* eslint-disable no-unused-vars */
import './style.scss'

import { Form, Input, Modal } from 'antd'
import { FooterModal } from 'components'
import { memo } from 'react'
import { toast } from 'react-toastify'
import { TagType } from 'types/common.type'

interface formTagType {
  id_tag: string
  name: string
  status?: number
  description: string
}

interface PopupTagType {
  title: string
  onOpen: boolean
  onFinish: (values: TagType) => void
  onCancel: () => void
  onInitialValues?: formTagType
}
export const PopupTag = ({
  title,
  onOpen,
  onFinish,
  onCancel,
  onInitialValues = {
    name: '',
    description: '',
    id_tag: ''
  }
}: PopupTagType) => {
  const [form] = Form.useForm()
  // console.log('onInitialValues', onInitialValues)

  return (
    <div className='modalTag justify-items-start'>
      <Modal
        title={title}
        open={onOpen}
        centered
        className={'modalTag justify-items-start'}
        onCancel={onCancel}
        footer={[<FooterModal key='footerCutom' onCancel={onCancel} onFinish={form.submit} />]}
      >
        <Form
          form={form}
          autoComplete='off'
          onFinish={onFinish}
          onFinishFailed={(error) => {
            toast.error(error.errorFields[0].errors[0])
          }}
          colon={false}
          initialValues={{
            name: onInitialValues.name,
            description: onInitialValues.description,
            id_tag: onInitialValues.id_tag
          }}
        >
          <Form.Item label='Name Tag' name={'name'} rules={[{ required: true, message: 'Tag is required' }]}>
            <Input placeholder='Tag' />
          </Form.Item>
          <Form.Item label='Tag id device' name={'id_tag'} rules={[{ required: true, message: 'Tag is required' }]}>
            <Input placeholder='Tag id device' />
          </Form.Item>
          <Form.Item label='Description' name={'description'}>
            <Input.TextArea showCount maxLength={100} placeholder='Autosize height based on content lines' />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default memo(PopupTag)
