// import { memo } from 'react';
import './style.scss'

import { UploadOutlined } from '@ant-design/icons'
import { Form, Modal, Upload } from 'antd'
import { ButtonCustom, FooterModal } from 'components'
import { useState } from 'react'

interface PopupMapType {
  onOpen: boolean
  Finish: (values: any) => void
  onCancel: () => void
}

export const PopupMap = ({ Finish, onOpen, onCancel }: PopupMapType) => {
  const [file, setFile] = useState<File>()

  const [form] = Form.useForm()

  const handleSubmit = () => {
    console.log('file', file)
    if (file) {
      const form = new FormData()
      form.append('image', file)
      Finish(form)
    }
  }
  // custom handle request upload
  const customRequest = ({ file, onSuccess }: any) => {
    console.log('file', file)
    onSuccess('ok')
    setFile(file)
  }

  return (
    <div className='antCustom'>
      <Modal
        closable={false}
        title='Upload Map'
        open={onOpen}
        centered
        footer={[<FooterModal key='footerCutom' onCancel={onCancel} onFinish={form.submit} />]}
      >
        <Form
          form={form}
          autoComplete='off'
          onFinish={handleSubmit}
          onFinishFailed={(error) => console.log(error)}
          colon={false}
        >
          <Form.Item label='Upload Map' name={'upload'} rules={[{ required: true, message: 'Please upload file' }]}>
            <Upload
              accept='.png, .jpg, .jpeg'
              maxCount={1}
              listType='picture'
              showUploadList={true}
              customRequest={customRequest}
            >
              <ButtonCustom style={{ width: '100%' }} icon={<UploadOutlined />}>
                Click to Upload
              </ButtonCustom>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}
