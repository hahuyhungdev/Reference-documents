import './style.scss'

import { DatePicker } from 'antd'
import { SelectOption } from 'components/Dropdown'
import moment from 'moment'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'reduxStore'

import ExcelExport from './excelExport'

const { RangePicker } = DatePicker

export const Report = () => {
  const dataHeatmap = useSelector((state: RootState) => state.heatmap.data)
  const [dates, setDates] = useState([0, 0])
  const onOk = (data: any) => {
    if (!data) return
    const [start, end] = data
    const startTimestamp = moment(start).unix()
    const endTimestamp = moment(end).unix()
    setDates([startTimestamp, endTimestamp])
  }
  console.log('dates', dates)
  const filterDate = dataHeatmap.filter((item) => {
    return item.date >= dates[0] && item.date <= dates[1]
  })
  const flatData = filterDate.map((item) => {
    const date = moment.unix(item.date).format('YYYY-MM-DD HH:mm')
    return item.logs.map((log) => {
      return {
        date,
        x: log.x,
        y: log.y,
        value: log.value
      }
    })
  })
  console.log('flatData', flatData.flat())

  // func onChangeOptions
  const onChangeOptions = (value: any) => {
    // console.log(`selected ${value}`)
  }
  return (
    <div className='mainReport'>
      <div className='datetime'>
        <div className='span'>Date time</div>
        <RangePicker
          showTime={{ format: 'HH:mm' }}
          format='YYYY-MM-DD HH:mm'
          disabledDate={(current) => current && current > moment().endOf('day')}
          onOk={onOk}
        />
      </div>
      <div className='Devices'>
        <div className='span'>Devices</div>
        <SelectOption
          onChange={onChangeOptions}
          placeholder='Select devices'
          options={[{ value: 'dataFake Device 1', label: 'Device 1' }]}
        />
      </div>
      <ExcelExport excelData={flatData.flat()} />
    </div>
  )
}

export default Report
