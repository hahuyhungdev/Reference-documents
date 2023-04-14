import './style.scss'

import { Select, Space, Table } from 'antd'
import { getTypesList } from 'apis/types.slice'
import { SelectOptions } from 'components'
import { IconStatus } from 'components/Icons'
import { memo, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from 'reduxStore'
import { DeviceType } from 'types/common.type'
import { useVT } from 'virtualizedtableforantd4'

const columns = [
  {
    title: <span className='whitespace-normal'>Name Device</span>,
    dataIndex: 'deviceName',
    key: 'deviceName',
    render: (text: string) => <span>{text}</span>,
    width: 120
  },
  {
    title: <div className='text-center'>Status</div>,
    dataIndex: 'status',
    key: 'status',
    defaultSortOrder: 'descend' as const,
    sorter: (a: { status: number }, b: { status: number }) => a.status - b.status,
    render: (_: any, record: { status: number }) => (
      <IconStatus className='mx-auto' fill={record.status === 1 ? '#C17115' : '#8C8C8C'} />
    )
  }
]
interface ITableVehicle {
  devicesData: DeviceType[]
  onIsVisableLineTrace: boolean
  sentCheckedRows: (selectedRow: DeviceType[]) => void
}

export const TableVehicle = memo(({ devicesData, onIsVisableLineTrace, sentCheckedRows }: ITableVehicle) => {
  const [valueType, setValueType] = useState('All')
  const [open, setOpen] = useState<boolean>(false)

  const typeList = useSelector((state: RootState) => state.type.typesList)
  const [vt, set_components] = useVT(() => ({ scroll: { y: 300 } }), [])

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
  const onSelectChange = (selectedRowKeys: React.Key[], selectedRows: DeviceType[]) => {
    // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
    sentCheckedRows(selectedRows)
  }
  const dataLength = dataFilter.length
  let scrollY: string | number = 'false'

  if (dataLength > 5) {
    if (onIsVisableLineTrace) {
      scrollY = 150
    } else {
      scrollY = 260
    }
  }

  return (
    <div className='tableVahicle'>
      <SelectOptions
        value={valueType}
        ignore
        isIcon
        options={dataSelect}
        placeholder='Select Type'
        onChange={onFilterChange}
      />
      <Table
        components={vt}
        scroll={{ y: scrollY }}
        rowSelection={{
          type: 'checkbox',
          onChange: onSelectChange,
          selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT]
        }}
        rowKey={(record) => record.id}
        columns={columns}
        dataSource={dataFilter}
        pagination={false}
      />
    </div>
  )
})
export default TableVehicle
