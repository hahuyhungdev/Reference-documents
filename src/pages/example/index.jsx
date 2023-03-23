import './style.scss'

import { Button, Pagination, Space } from 'antd'
import { ButtonCustom, ModalAlert, Page } from 'components'
import { PopupDevice, PopupMap, PopupTag } from 'components/Popup'
import { dataOptions } from 'pages/devices'
import { useState } from 'react'

export const Example = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isModaTag, setIsModalTag] = useState(false)
  const [isModalEdit, setIsModalEdit] = useState(false)
  const [isModalConfirm, setIsModalConfirm] = useState(false)
  const [isModalMap, setIsModalMap] = useState(false)
  const [count, setCount] = useState(0)
  // const { id } = useParams();
  // get location path name from url
  // const location = useLocation();
  // console.log(location);
  const showPopup = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
    setIsModalConfirm(false)
    setIsModalEdit(false)
    setIsModalMap(false)
    setIsModalTag(false)
  }

  const increaseCount = () => {
    console.log('increaseCount')
    setCount(count + 1)
  }

  return (
    <div className='example'>
      <title>Example</title>
      {/* <div
        style={{
          textAlign: 'center',
          marginTop: '10px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}
      >
        <ButtonCustom onClick={increaseCount}>Increase</ButtonCustom>
        <div className='sectionDevice' style={{ backgroundColor: 'pink' }}>
          <h1>Devices Management</h1>
          <ButtonCustom
            onClick={() => {
              setIsModalMap(true)
            }}
          >
            Select file
          </ButtonCustom>
          {isModalMap && <PopupMap title='Upload Map' onCancel={handleCancel} onOpen={isModalMap} />}
          {isModalConfirm && (
            <ModalAlert
              onCancel={handleCancel}
              title='Are you sure delete this device?'
              content='You can’t undo this action'
              onOpen={isModalConfirm}
            />
          )}
          <br />
          <ButtonCustom onClick={() => setIsModalConfirm(true)}>confirm</ButtonCustom>
          {isModalConfirm && (
            <ModalAlert
              onCancel={handleCancel}
              title='Are you sure delete this device?'
              content='You can’t undo this action'
              onOpen={isModalConfirm}
            />
          )}
          <span> bấm zô đây để create popup</span>
          <ButtonCustom onClick={showPopup}>create</ButtonCustom>
          {isModalVisible && (
            <PopupDevice title='Create Object' options={dataOptions} onCancel={handleCancel} onOpen={isModalVisible} />
          )}
          <br />
          <span> bấm zô đây để edit popup</span>
          <ButtonCustom
            style={{
              backgroundColor: '#e66363'
            }}
            onClick={() => {
              setIsModalEdit(true)
            }}
          >
            edit
          </ButtonCustom>
          {isModalEdit && (
            <PopupDevice title='Edit Object' options={dataOptions} onCancel={handleCancel} onOpen={isModalEdit} />
          )}
        </div>
        <div className='Tag' style={{ marginTop: '10px', background: '#ff9090' }}>
          <h1>Tags Management</h1>
          <span> bấm zô đây để create Tags</span>
          <ButtonCustom onClick={() => setIsModalTag(true)}>create</ButtonCustom>
          {isModaTag && <PopupTag title='Create Tag' onCancel={handleCancel} onOpen={isModaTag} />}
          <br />
        </div>
        <ButtonCustom> test</ButtonCustom>
        <Page total={500} current={6} />
        <br />
        <Pagination defaultCurrent={6} total={500} />
        <h1>Hello world!</h1>
        <Space wrap>
          <Button type='primary' danger onClick={increaseCount}>
            Primary
          </Button>
          <Button danger>Default</Button>
          <Button type='dashed' danger>
            Dashed
          </Button>
          <Button type='text' danger>
            Text
          </Button>
          <Button type='link' danger>
            Link
          </Button>
        </Space>
      </div> */}
    </div>
  )
}
