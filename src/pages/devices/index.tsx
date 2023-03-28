import './style.scss'

import { SearchOutlined } from '@ant-design/icons'
import { AutoComplete, Input } from 'antd'
import { getTypesList } from 'apis/types.slice'
import nodata from 'assets/images/nodata.png'
import { HttpStatusCode } from 'axios'
import { ModalAlert } from 'components'
import { ButtonCustom } from 'components/Button'
import { IconUnion } from 'components/Icons'
import { PopupDevice } from 'components/Popup'
import DevicesTable from 'components/Table/Devices'
import { debounce } from 'lodash'
import { getTagListUnused } from 'pages/tags/tags.slice'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { RootState, useAppDispatch } from 'reduxStore'
import { CreateUpdateDeviceType, dataOptions } from 'types/common.type'

import { addDevice, deleteManyDevices, getDevicesList, searchDeviceByName } from './devices.slice'

export const Devices = () => {
  const [isModalCreatVisible, setIsModalCreatVisible] = useState(false)
  const [isCheckUseData, setIsCheckUseData] = useState(false)
  const [formError, setFormError] = useState(null)
  const [optionsSearch, setoptionsSearch] = useState<{ label: string; value: string }[]>([])

  const [optionsTags, setOptionsTag] = useState<dataOptions[]>([])
  const [optionsTypes, setOptionsType] = useState<dataOptions[]>([])
  const [listIds, setListIds] = useState<number[]>([])
  const [isModalConfirm, setIsModalConfirm] = useState(false)

  const dispatch = useAppDispatch()

  const { devicesList, devicesListSearch } = useSelector((state: RootState) => state.devices)
  const tagListUnused = useSelector((state: RootState) => state.tags.tagListUnused)
  const typeList = useSelector((state: RootState) => state.type.typesList)

  useEffect(() => {
    const promise = dispatch(getTagListUnused())
    return () => {
      promise.abort()
    }
  }, [dispatch])
  useEffect(() => {
    const promise = dispatch(getTypesList())
    return () => {
      promise.abort()
    }
  }, [dispatch])
  useEffect(() => {
    const promise = dispatch(getDevicesList())
    return () => {
      promise.abort()
    }
  }, [dispatch])

  useEffect(() => {
    console.log('devicesListSearch', devicesListSearch)
  }, [devicesListSearch])

  // handle options tags
  useEffect(() => {
    setOptionsTag(
      tagListUnused.map((item) => {
        return {
          value: item.id,
          label: item.name
        }
      })
    )
  }, [tagListUnused])

  // handle options types
  useEffect(() => {
    const options = typeList.map((item) => {
      return {
        value: item.id,
        label: item.name
      }
    })
    setOptionsType(options)
  }, [typeList])

  //  convert devicesList to optionsSearch with label and value
  useEffect(() => {
    const options = devicesList.map((item) => {
      return {
        value: item.deviceName,
        label: item.deviceName
      }
    })
    setoptionsSearch(options)
  }, [devicesList])

  const showCreatePopup = () => {
    setIsModalCreatVisible(true)
  }
  // handle create
  const handleCreate = (values: CreateUpdateDeviceType) => {
    console.log('values', values)
    dispatch(
      addDevice({
        ...values
      })
    )
      .unwrap()
      .then((res) => {
        toast.success(res.message)
        setIsModalCreatVisible(false)
      })
      .catch((err) => {
        console.log('err', err)
        setFormError(err)
        console.log('formError', formError)
      })
  }

  // receive list id table devices
  const receiveIds = (values: number[]) => {
    setListIds(values)
  }

  // deleteManyDevices
  const handleDeleteMany = () => {
    console.log('listIds', listIds)
    dispatch(deleteManyDevices(listIds))
      .unwrap()
      .then((res) => {
        toast.success(res.message)
        setIsCheckUseData(false)
        setIsModalConfirm(false)
      })
      .catch((err) => {
        console.log('err', err)
        if (err.response.status === HttpStatusCode.BadRequest) {
          toast.error(err.response.data.message)
        }
      })
  }
  // cancel deleteManyDevices
  const handleCancelDeleteMany = () => {
    setIsModalConfirm(false)
  }

  // here, we use debounce to delay the onChange event
  const onChangeSearch = debounce((value: string) => {
    console.log('onSelectSearch', value)
    if (value === '') {
      dispatch(getDevicesList())
      setIsCheckUseData(false)
    } else {
      dispatch(searchDeviceByName(value.trim()))
      setIsCheckUseData(true)
    }
  }, 500) // 500ms delay

  return (
    <div className='mainDevices'>
      {devicesList?.length === 0 ? (
        <>
          <h3>Objects List</h3>
          <div className='empty'>
            <img src={nodata} alt='nodata' />
            <h3>No data</h3>
            <ButtonCustom isIcon icon={<IconUnion />} onClick={showCreatePopup}>
              Create new
            </ButtonCustom>
            {isModalCreatVisible && (
              <PopupDevice
                onFinish={handleCreate}
                title='Create Object'
                optionsTypes={optionsTypes}
                optionsTags={optionsTags}
                onCancel={() => setIsModalCreatVisible(false)}
                onOpen={isModalCreatVisible}
              />
            )}
          </div>
        </>
      ) : (
        <>
          <header>
            <div className='flex flex-col gap-y-2'>
              <title>Objects List</title>
            </div>
            <div className='toolbar'>
              <AutoComplete
                open={false}
                options={optionsSearch}
                style={{ width: 200 }}
                filterOption={true}
                placeholder='Search'
                onChange={onChangeSearch}
              >
                <Input suffix={<SearchOutlined />} />
              </AutoComplete>
              <ButtonCustom isIcon icon={<IconUnion />} onClick={showCreatePopup}>
                Create
              </ButtonCustom>
              {listIds.length > 1 && (
                <ButtonCustom
                  className='bg-red-500'
                  onClick={() => {
                    setIsModalConfirm(true)
                  }}
                >
                  Delete All
                </ButtonCustom>
              )}

              {isModalConfirm && (
                <ModalAlert
                  onFinish={handleDeleteMany}
                  onCancel={handleCancelDeleteMany}
                  title='Are you sure delete all devices?'
                  content='You can’t undo this action'
                  onOpen={isModalConfirm}
                />
              )}
            </div>
          </header>
          {isModalCreatVisible && (
            <PopupDevice
              onFinish={handleCreate}
              title='Create Object'
              optionsTypes={optionsTypes}
              optionsTags={optionsTags}
              onCancel={() => setIsModalCreatVisible(false)}
              onOpen={isModalCreatVisible}
            />
          )}
          <DevicesTable
            dataDevice={isCheckUseData ? devicesListSearch : devicesList}
            optionsTypes={optionsTypes}
            optionsTags={optionsTags}
            deviceIds={receiveIds}
          />
        </>
      )}
    </div>
  )
}

export default Devices
