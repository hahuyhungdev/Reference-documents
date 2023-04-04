import './style.scss'

import { Form, Input, Modal, Space } from 'antd'
import { FooterModal, SelectOptions } from 'components'
import { memo } from 'react'
import { toast } from 'react-toastify'
import { dataOptions, DeviceType } from 'types/common.type'

interface PopupDeviceType {
  title: string
  onOpen: boolean
  onFinish: (values: any) => void
  onCancel: () => void
  optionsTypes: dataOptions[]
  optionsTags: dataOptions[]
  onInitialValues?: DeviceType
  messageError?: string
  validateStatus?: 'success' | 'warning' | 'error' | 'validating' | undefined
}

export const PopupDevice = ({
  title,
  optionsTypes,
  onCancel,
  onOpen,
  onInitialValues,
  onFinish,
  optionsTags,
  messageError,
  validateStatus = 'success'
}: PopupDeviceType) => {
  const [form] = Form.useForm()

  return (
    <div className='antCustom'>
      <Modal
        maskClosable={false}
        closable={false}
        title={title}
        open={onOpen}
        centered
        className={'modalDevice'}
        onOk={form.submit}
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
            name: onInitialValues?.deviceName,
            typeId: onInitialValues?.typeId,
            tagId: onInitialValues?.tagId,
            description: onInitialValues?.description
          }}
        >
          <Space>
            <Form.Item
              hasFeedback
              label='Name device'
              name={'name'}
              rules={[{ required: true, message: 'Name is required' }]}
            >
              <Input style={{ width: 230 }} placeholder='Please input' />
            </Form.Item>
            <Form.Item label='Type' name={'typeId'} rules={[{ required: true, message: 'Icon is required' }]}>
              <SelectOptions isIcon options={optionsTypes} placeholder='Select Type' />
            </Form.Item>
          </Space>
          <Form.Item
            validateStatus={messageError ? 'error' : validateStatus}
            help={messageError ? messageError : ''}
            label='Tag'
            name={'tagId'}
            rules={[{ required: true, message: 'Tag is required' }]}
          >
            <SelectOptions options={optionsTags} placeholder='Select Tag' />
          </Form.Item>
          <Form.Item label='Description' name={'description'}>
            <Input.TextArea showCount maxLength={100} placeholder='Autosize height based on content lines' />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default memo(PopupDevice)
