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
  description: '',
  createdDate: '',
  updatedDate: '',
  tagName: '',
  status: 1,
  typeName: '',
  tagId: 1,
  typeId: undefined
}
const DevicesTable = ({ dataDevice, optionsTypes, optionsTags, deviceIds }: DevicesTableProps) => {
  const [dataRows, setDataRows] = useState<DeviceType>(initialDataRows)
  const [ErrorForm, setErrorsForm] = useState(undefined)

  const [isModalEdit, setIsModalEdit] = useState(false)
  const [isModalConfirm, setIsModalConfirm] = useState(false)
  const [length, setLength] = useState(0)

  const dispatch = useAppDispatch()
  useEffect(() => {
    setLength(optionsTags.length)
  }, [optionsTags])

  const handleCancel = () => {
    setIsModalConfirm(false)
    setIsModalEdit(false)
    if (length !== optionsTags.length) optionsTags.shift()
  }

  // func handle delete
  const handleDelete = () => {
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

  const handleEditDevice = (record: DeviceType) => {
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
  }
  const columns = [
    {
      title: 'Icon',
      dataIndex: 'typeName',
      key: 'typeName',
      render: (type: string) => <div className='icon'>{handleIcon(type)}</div>,
      // filter icons
      filters: [
        {
          text: <span className='icon'>{handleIcon('Forklift')}</span>,
          value: 'Forklift'
        },
        {
          text: <span className='icon'>{handleIcon('Group')}</span>,
          value: 'Group'
        },
        {
          text: <span className='icon'>{handleIcon('Person')}</span>,
          value: 'Person'
        }
      ],
      onFilter: (value: string, record: { typeName: string }) => record.typeName.indexOf(value) === 0,
      width: 80
    },
    {
      title: 'Name device',
      dataIndex: 'deviceName',
      key: 'deviceName',
      render: (text: string) => <span>{text}</span>,
      width: 150
    },
    {
      title: 'Tag',
      dataIndex: 'tagName',
      key: 'tagName',
      render: (text: string) => <span>{text}</span>,
      width: 120
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      filters: [
        {
          text: 'On',
          value: 1
        },
        {
          text: 'Off',
          value: 0
        }
      ],
      onFilter: (value: number, record: { status: number }) => record.status === value,
      render: (_: any, record: { status: number }) => (
        <div>
          <IconStatus fill={record.status === 1 ? '#C17115' : '#8C8C8C'} />
        </div>
      ),
      width: 100
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      render: (text: string) => <span>{text}</span>,
      width: 200
    },
    {
      title: 'Created Date',
      dataIndex: 'createdDate',
      key: 'createdDate',
      defaultSortOrder: 'descend',
      sorter: (a: { createdDate: moment.MomentInput }, b: { createdDate: moment.MomentInput }) => {
        return moment(a.createdDate).unix() - moment(b.createdDate).unix()
      },
      render: (text: string) => {
        return (
          <span>{text === null ? <span>{text}</span> : <span>{moment(text).format('DD-MM-YYYY HH:mm:ss')}</span>}</span>
        )
      },
      width: 120
    },
    {
      title: 'Updated At',
      dataIndex: 'updatedDate',
      key: 'updatedDate',
      defaultSortOrder: 'descend',
      sorter: (a: { updatedDate: moment.MomentInput }, b: { updatedDate: moment.MomentInput }) => {
        return moment(a.updatedDate).unix() - moment(b.updatedDate).unix()
      },
      render: (text: number) => {
        return (
          <span>{text === null ? <span>{text}</span> : <span>{moment(text).format('DD-MM-YYYY HH:mm:ss')}</span>}</span>
        )
      },
      width: 120
    },
    {
      title: <div className='text-center'>Action</div>,
      dataIndex: 'Action',
      key: 'Action',
      render: (_: any, record: DeviceType) => (
        <div className='action' style={{ display: 'flex', justifyContent: 'center', columnGap: '16px' }}>
          <span onClick={() => handleEditDevice(record)}>
            <div className='w-10 p-2'>Edit</div>
          </span>
          <span
            onClick={() => {
              setIsModalConfirm(true)
              setDataRows(record)
            }}
          >
            <div className='w-15 p-2'>Delete</div>
          </span>
        </div>
      ),
      width: 150
    }
  ]
  const onSelectChange = (selectedRowKeys: React.Key[], selectedRows: DeviceType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
    deviceIds(selectedRowKeys as number[])
    // sentListId(newSelectedRowKeys)
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
        // rowSelection={rowSelection as any | undefined}
        rowSelection={{
          type: 'checkbox',
          onChange: onSelectChange,
          selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT]
        }}
        columns={columns as any}
        dataSource={dataDevice}
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
