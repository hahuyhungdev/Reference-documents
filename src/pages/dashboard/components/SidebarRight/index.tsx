import '../../style.scss'

import { UploadOutlined } from '@ant-design/icons'
import { DatePicker, RadioChangeEvent, Switch } from 'antd'
import { ButtonCustom, ButtonGroup, PopupMap } from 'components'
import moment from 'moment'
import { getDevicesList } from 'pages/devices/devices.slice'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from 'reduxStore'

import { setSwitchAnchorView, setSwitchGridView, setSwitchHistorical } from '../../stateSwitch.slice'
import { TableVehicle } from '../Vehicle'

type sidebarRightProps = {
  sendDates: (dates: number[]) => void
}

export const SidebarRight = ({ sendDates }: sidebarRightProps) => {
  const [isModalMap, setIsModalMap] = useState(false)
  const [fromDate, setFromDate] = useState(null)
  const [dates, setDates] = useState([0, 0])
  const [isVisableLineTrace, setIsVisableLineTrace] = useState(false)

  const dispatch = useAppDispatch()

  const devicesData = useSelector((state: RootState) => state.devices.devicesList)
  const { switchGridView, switchAnchorView, switchHistorical } = useSelector((state: RootState) => state.stateSwitch)
  useEffect(() => {
    const promise = dispatch(getDevicesList())
    return () => {
      promise.abort()
    }
  }, [dispatch])

  // handle send dates to parent
  useEffect(() => {
    sendDates(dates)
  }, [dates, sendDates])

  const dataButtonGroup = [
    {
      value: 'off',
      label: 'Off'
    },
    {
      value: 'linetrace',
      label: 'Line trace'
    },
    {
      value: 'heatmap',
      label: 'Heatmap'
    }
  ]

  // handle switch button group
  const onChangeButtonGroup = (e: RadioChangeEvent) => {
    if (e.target.value === 'linetrace') {
      setIsVisableLineTrace(true)
    } else {
      setIsVisableLineTrace(false)
    }
  }

  const handleSwitchGrid = (checked: boolean) => {
    dispatch(setSwitchGridView(checked))
    console.log(`switch to ${checked}`)
  }

  const handleSwitchHistorical = (checked: boolean) => {
    dispatch(setSwitchHistorical(checked))
    console.log(`switch to ${checked}`)
  }

  const handleSwitchAnchor = (checked: boolean) => {
    dispatch(setSwitchAnchorView(checked))
    console.log(`switch to ${checked}`)
  }

  // onChange date picker
  const onChangePicker = (date: any, dateString: string, type: string) => {
    if (date === null || date === undefined) {
      setFromDate(null)
      setDates([0, 0])
      return
    }

    if (type === 'from') {
      setFromDate(date)
      setDates([date.unix(), dates[1]])
    } else {
      setDates([dates[0], date.unix()])
    }
  }

  return (
    <div className='toolDasdboard'>
      <div className='configuration'>
        <div className='titleTool'>MAP CONFIGURATION</div>

        <ButtonGroup defaultValue='off' options={dataButtonGroup} onChange={onChangeButtonGroup} optionType='button' />
        <>
          {isVisableLineTrace && (
            <div className='lineTrace'>
              <div className='historical'>
                <span>Historical Data</span>
                <Switch defaultChecked={switchHistorical} onChange={handleSwitchHistorical} />
              </div>
              <div className='selectDays'>
                <DatePicker
                  placeholder='From'
                  showTime
                  value={fromDate}
                  onChange={(date, dateString) => onChangePicker(date, dateString, 'from')}
                  format='YYYY-MM-DD HH:mm'
                  disabledDate={(current) => current && current > moment().endOf('day')}
                />
                <DatePicker
                  placeholder='To'
                  showTime
                  onChange={(date, dateString) => onChangePicker(date, dateString, 'to')}
                  format='YYYY-MM-DD HH:mm'
                  disabledDate={(current) => {
                    return current && (current < moment(fromDate).endOf('day') || current > moment().endOf('day'))
                  }}
                />
              </div>
            </div>
          )}
        </>
        <div className='gridView'>
          <span>Grid view</span>
          <Switch defaultChecked={switchGridView} onChange={handleSwitchGrid} />
        </div>
        <div className='anchorView'>
          <span>Anchor View</span>
          <Switch defaultChecked={switchAnchorView} onChange={handleSwitchAnchor} />
        </div>
        <ButtonCustom
          onClick={() => {
            setIsModalMap(true)
          }}
          style={{ width: '100%' }}
          icon={<UploadOutlined />}
        >
          Click to Upload
        </ButtonCustom>
        {isModalMap && (
          <PopupMap
            onCancel={() => {
              setIsModalMap(false)
            }}
            onOpen={isModalMap}
            onFinish={() => {
              setIsModalMap(false)
            }}
          />
        )}
      </div>

      <div className='vehicleList'>
        <div className='titleVehicle'>VEHICLE LIST</div>
        <TableVehicle devicesData={devicesData} onIsVisableLineTrace={isVisableLineTrace} />
      </div>
    </div>
  )
}

export default SidebarRight
