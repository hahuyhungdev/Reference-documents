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
  const [valueType, setValueType] = useState('')
  const typeList = useSelector((state: RootState) => state.type.typesList)
  const dispatch = useAppDispatch()
  useEffect(() => {
    const promise = dispatch(getTypesList())
    return () => {
      promise.abort()
    }
  }, [dispatch])
  const onFilterChange = (value: string) => {
    // console.log(value)
    setValueType(value)
  }
  const dataSelect = [
    // { label: 'All', value: 'All' },
    ...typeList.map((item) => {
      return {
        label: item.name,
        value: item.name
      }
    })
  ]
  // const onFilterChange with equal with valueType
  // const dataFilter = devicesData?.filter((item) => {
  //   console.log(item.typeName, valueType)
  //   // if (valueType === '' || valueType === 'All') return true
  //   // return item.typeName.includes(valueType)
  //   return true
  // })

  return (
    <div className='tableVahicle'>
      {/* <Select options={dataSelect} placeholder='Sort by type' onChange={onFilterChange} /> */}
      <SelectOption ignore isIcon options={dataSelect} placeholder='Sort by type' onChange={onFilterChange} />
      {/* <Table
        rowKey={(record) => record.id}
        columns={columns}
        dataSource={dataFilter}
        pagination={false}
        scroll={{ y: onIsVisableLineTrace ? 150 : 270 }}
      /> */}
    </div>
  )
})
export default TableVehicle
