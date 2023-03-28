import './style.scss'

import { DatePicker } from 'antd'
import { SelectOption } from 'components/Dropdown'
import moment from 'moment'
import { getDevicesList } from 'pages/devices/devices.slice'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from 'reduxStore'

import ExcelExport from './excelExport'

const { RangePicker } = DatePicker

export const Report = () => {
  const [startDate, setStartDate] = useState<number>(0)
  const [endDate, setEndDate] = useState<number>(0)
  const [device, setDevice] = useState<string>('')

  const listDevices = useSelector((state: RootState) => state.devices.devicesList)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const promise = dispatch(getDevicesList())
    return () => {
      promise.abort()
    }
  }, [dispatch])
  const onOk = (data: any) => {
    if (!data) return
    const [start, end] = data
    const startTimestamp = moment(start).unix()
    const endTimestamp = moment(end).unix()
    setStartDate(startTimestamp)
    setEndDate(endTimestamp)
  }
  const optionsDevices = listDevices.map((item) => {
    return { value: item.deviceName, label: item.deviceName }
  })

  // func onChangeOptions
  const onChangeOptions = (value: any) => {
    // console.log(`selected ${value}`)
    setDevice(value)
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
        <SelectOption onChange={onChangeOptions} placeholder='Select devices' options={optionsDevices} />
      </div>
      <ExcelExport startDate={startDate} endDate={endDate} name={device} />
    </div>
  )
}

export default Report
