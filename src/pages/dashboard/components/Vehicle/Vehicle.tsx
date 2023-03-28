import './style.scss'

import { Select, Space, Table } from 'antd'
import { getTypesList } from 'apis/types.slice'
import { SelectOption } from 'components'
import { IconStatus } from 'components/Icons'
import { memo, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from 'reduxStore'
import { DeviceType } from 'types/common.type'

const columns = [
  {
    title: 'Name Device',
    dataIndex: 'deviceName',
    key: 'deviceName',
    render: (text: string) => <span>{text}</span>
  },
  {
    title: <div style={{ textAlign: 'right' }}>Status</div>,
    dataIndex: 'status',
    key: 'status',
    render: (_: any, record: { status: any }) => (
      <Space size='middle'>
        <IconStatus fill={record.status ? '#C17115' : '#8C8C8C'} />
      </Space>
    ),
    width: 75
  }
]
interface ITableVehicle {
  devicesData: DeviceType[]
  onIsVisableLineTrace: boolean
}

export const TableVehicle = memo(({ devicesData, onIsVisableLineTrace }: ITableVehicle) => {
  const [valueType, setValueType] = useState('All')
  const typeList = useSelector((state: RootState) => state.type.typesList)
  const dispatch = useAppDispatch()
  useEffect(() => {
    const promise = dispatch(getTypesList())
    return () => {
      promise.abort()
    }
  }, [dispatch])
  const onFilterChange = (value: any) => {
    console.log(value)
    setValueType(value)
  }
  const dataSelect = [
    { label: 'All', value: 'All' },
    ...typeList.map((item) => {
      return {
        label: item.name,
        value: item.id
      }
    })
  ]

  // const onFilterChange with equal with valueType
  const dataFilter = devicesData?.filter((item) => {
    if (valueType === 'All') return true
    return item.typeId?.toString() === valueType.toString()
  })

  return (
    <div className='tableVahicle'>
      {/* <Select options={dataSelect} placeholder='Sort by type' onChange={onFilterChange} /> */}
      <SelectOption
        defaultValue={valueType}
        ignore
        isIcon
        options={dataSelect}
        placeholder='Select Type'
        onChange={onFilterChange}
      />
      <Table
        rowKey={(record) => record.id}
        columns={columns}
        dataSource={dataFilter}
        pagination={false}
        scroll={{ y: onIsVisableLineTrace ? 150 : 270 }}
      />
    </div>
  )
})
export default TableVehicle
