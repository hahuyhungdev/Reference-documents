import './style.scss'

import { Table } from 'antd'
import nodata from 'assets/images/nodata.png'
import { HttpStatusCode } from 'axios'
import { ButtonCustom } from 'components/Button'
import { IconForklift, IconGroup, IconPerson, IconStatus, IconUnion } from 'components/Icons'
import { ModalAlert } from 'components/Modal'
import { PopupDevice } from 'components/Popup'
import moment from 'moment'
import { deleteDeviceById, updateDeviceById } from 'pages/devices/devices.slice'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useAppDispatch } from 'reduxStore'
import { CreateUpdateDeviceType, dataOptions, DeviceType } from 'types/common.type'

// handle Icon mapping with type of icon device
export const handleIcon = (type: string) => {
  switch (type) {
    case 'Forklift':
      return <IconForklift />
    case 'Group':
      return <IconGroup />
    case 'Person':
      return <IconPerson />
    case 'Union':
      return <IconUnion />
    default:
      return <IconForklift />
  }
}
interface DevicesTableProps {
  dataDevice: DeviceType[]
  optionsTypes: dataOptions[]
  optionsTags: dataOptions[]
  deviceIds: (values: number[]) => void
  // sentListId: (id: number[]) => void
}
export const initialDataRows: DeviceType = {
  id: 0,
  deviceName: '',
  description: null,
  createdDate: null,
  updatedDate: null,
  tagName: '',
  status: 1,
  typeName: '',
  tagId: 1,
  typeId: undefined
}
const DevicesTable = ({ dataDevice, optionsTypes, optionsTags, deviceIds }: DevicesTableProps) => {
  const [dataSource, setDataSources] = useState<DeviceType[]>([])
  const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([])
  const [dataRows, setDataRows] = useState<DeviceType>(initialDataRows)
  const [ErrorForm, setErrorsForm] = useState(undefined) //

  const [isModalEdit, setIsModalEdit] = useState(false)
  const [isModalConfirm, setIsModalConfirm] = useState(false)
  const [length, setLength] = useState(0)

  const dispatch = useAppDispatch()
  useEffect(() => {
    setDataSources(dataDevice)
  }, [dataDevice])
  useEffect(() => {
    setLength(optionsTags.length)
  }, [optionsTags])

  const handleCancel = () => {
    console.log('Cancel')
    setIsModalConfirm(false)
    setIsModalEdit(false)
    console.log('lengt', 'onoptionsTags', length, optionsTags.length)
    if (length !== optionsTags.length) optionsTags.shift()
  }

  // func handle delete
  const handleDelete = () => {
    console.log('dataRows', dataRows)
    dispatch(deleteDeviceById(dataRows.id))
    setIsModalConfirm(false)
    toast.success('Delete success')
  }
  // func handle edit
  const handleEdit = (values: CreateUpdateDeviceType) => {
    dispatch(
      updateDeviceById({
        deviceId: dataRows.id,
        body: {
          ...values
        }
      })
    )
      .unwrap()
      .then((res) => {
        setIsModalEdit(false)
        toast.success('Edit success')
        setErrorsForm(undefined)
      })
      .catch((err) => {
        if (err.response?.status !== HttpStatusCode.UnprocessableEntity) {
          console.log('err', err.message)
          setErrorsForm(err.message)
        }
      })

    if (length !== optionsTags.length) optionsTags.shift()
  }

  // console.log('handleoptionsTags', optionsTags, handleoptionsTags)
  // console.log('optionsTags', optionsTags)
  const columns = [
    {
      title: 'Icon',
      dataIndex: 'typeName',
      key: 'typeName',
      render: (record: string) => <div className='icon'>{handleIcon(record)}</div>
      // width: 60
    },
    {
      title: 'Name device',
      dataIndex: 'deviceName',
      key: 'deviceName',
      render: (text: string) => <span>{text}</span>
      // width: 150
    },
    {
      title: 'Tag',
      dataIndex: 'tagName',
      key: 'tagName',
      render: (text: string) => <span>{text}</span>
      // width: 100
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (_: any, record: { status: boolean }) => (
        <div
          style={{
            textAlign: 'center'
          }}
        >
          <IconStatus fill={record?.status ? '#C17115' : '#8C8C8C'} />
        </div>
      )
      // width: 75
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      render: (text: string) => <span>{text}</span>
    },
    {
      title: 'Created Date',
      dataIndex: 'createdDate',
      key: 'createdDate',
      render: (text: string) => {
        return (
          <span>{text === null ? <span>{text}</span> : <span>{moment(text).format('DD-MM-YYYY HH:mm:ss')}</span>}</span>
        )
      }
      // width: 170
    },
    {
      title: 'Updated At',
      dataIndex: 'updatedDate',
      key: 'updatedDate',
      render: (text: string) => {
        return (
          <span>{text === null ? <span>{text}</span> : <span>{moment(text).format('DD-MM-YYYY HH:mm:ss')}</span>}</span>
        )
      }
      // width: 170
    },
    {
      title: 'Action',
      dataIndex: 'Action',
      key: 'Action',
      render: (_: any, record: DeviceType) => (
        <div className='action' style={{ display: 'flex', justifyContent: 'center', columnGap: '16px' }}>
          <span
            onClick={() => {
              // Check if the tag is already present in the optionsTags array
              const tagExists = optionsTags.some((tag) => {
                return tag.label === record.tagName && tag.value === record.tagId
              })
              if (!tagExists) {
                optionsTags.unshift({
                  label: record.tagName,
                  value: record.tagId
                })
              }
              setIsModalEdit(true)
              setDataRows(record)
            }}
          >
            Edit
          </span>
          <span
            onClick={() => {
              setIsModalConfirm(true)
              setDataRows(record)
            }}
          >
            Delete
          </span>
        </div>
      ),

      width: 120
    }
  ]
  const onSelectChange = (newSelectedRowKeys: number[]) => {
    setSelectedRowKeys(newSelectedRowKeys)
    deviceIds(newSelectedRowKeys)

    // sentListId(newSelectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT]
  }

  return (
    <div className='DevicesTable'>
      {isModalConfirm && (
        <ModalAlert
          onFinish={handleDelete}
          onCancel={handleCancel}
          title='Are you sure delete this device?'
          content='You can’t undo this action'
          onOpen={isModalConfirm}
        />
      )}
      {isModalEdit && (
        <PopupDevice
          onFinish={handleEdit}
          onInitialValues={dataRows}
          title='Edit Object'
          optionsTypes={optionsTypes}
          optionsTags={optionsTags}
          onCancel={handleCancel}
          onOpen={isModalEdit}
          messageError={ErrorForm}
        />
      )}
      <Table
        locale={{
          emptyText: (
            <div className='empty'>
              <img src={nodata} alt='nodata' />
              <h3>No data</h3>
              <ButtonCustom isIcon icon={<IconUnion />}>
                Create new
              </ButtonCustom>
            </div>
          )
        }}
        rowKey='id'
        rowSelection={rowSelection as any | undefined}
        columns={columns as any}
        dataSource={dataSource}
        scroll={{ y: 430 }}
        pagination={{
          position: ['bottomRight'],
          showTotal: (total, range) => {
            return `${range[0]}-${range[1]} of ${total} items`
          },
          pageSize: 10
        }}
      />
    </div>
  )
}
export default DevicesTable
