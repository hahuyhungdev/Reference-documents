import './style.scss'

import { UploadOutlined } from '@ant-design/icons'
import { DatePicker, RadioChangeEvent, Switch } from 'antd'
import { getMap, uploadMap } from 'apis/map.slice'
import { ButtonCustom, ButtonGroup, handleIcon, PopupMap } from 'components'
import { HeatMap } from 'components'
import { IconForklift, IconGroup, IconPerson, IconStatus, IconUnion } from 'components/Icons'
import moment from 'moment'
import { getDeviceHistoryById, getDevicesList } from 'pages/devices/devices.slice'
import { useContext, useEffect, useMemo, useRef, useState } from 'react'
import React from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { FixedSizeList as List } from 'react-window'
import { RootState, useAppDispatch } from 'reduxStore'
import { dataHeatmap, DeviceHistoryType, DeviceType } from 'types/common.type'
import { IotSocketContext } from 'utils/IotContext'

import { TableVehicle } from './components'
import { setSwitchAnchorView, setSwitchGridView, setSwitchHistorical } from './stateSwitch.slice'

type typeIcons = {
  x: number
  y: number
  image: any
}
export const Dashboard = () => {
  const [isModalMap, setIsModalMap] = useState(false)
  const [icons, setIcons] = useState<typeIcons[]>([])
  const startDate = useMemo(() => moment().unix(), [])
  const endDate = useMemo(() => 0, [])
  const [dates, setDates] = useState([startDate, endDate])
  const [isVisableHistorical, setIsVisableHistorical] = useState(false)

  const dispatch = useAppDispatch()

  const { locationData, socket } = useContext(IotSocketContext)
  const devicesData = useSelector((state: RootState) => state.devices.devicesList)
  const deviceHistory = useSelector((state: RootState) => state.devices.deviceHistory)
  const [onDataRows, setOnDataRows] = useState<DeviceType[]>([])
  const { switchGridView, switchAnchorView, switchHistorical } = useSelector((state: RootState) => state.stateSwitch)

  // use effect handle log startdate changed
  const dataRecived = {
    position: [
      { x: 90, y: 80, value: 100 },
      { x: 100, y: 80, value: 100 },
      { x: 200, y: 60, value: 100 }
    ],
    id_tag: 'rz3_8'
  }
  // const matchingImages = onDataRows.map((data) => handleIcon(data.typeName))
  function findDataByTagId({
    dataRecived,
    deviceTypes
  }: {
    dataRecived: DeviceHistoryType
    deviceTypes: DeviceType[]
  }) {
    const deviceType = deviceTypes.find((d) => d.id_tag === dataRecived.id_tag)
    if (deviceType) {
      return dataRecived
    }
    return null
  }
  const result = findDataByTagId({
    dataRecived: dataRecived,
    deviceTypes: onDataRows
  })

  // Format data for heatmap
  const convertData = result?.position.map(({ x, y, value }: dataHeatmap) => ({ x, y, value })) || []

  // dispatch get devices list
  useEffect(() => {
    const promise = dispatch(getDevicesList())
    return () => {
      promise.abort()
    }
  }, [dispatch])

  useEffect(() => {
    if (isVisableHistorical && socket) {
      //socket.close()
    } else if (!isVisableHistorical && socket) {
      //  socket.emit('connect_mqtt', { id: 'hungban' })
    }
  }, [isVisableHistorical, socket])
  useEffect(() => {
    if (switchHistorical) {
      setDates([startDate, moment().unix()])
    }
  }, [startDate, switchHistorical])

  useEffect(() => {
    if (isVisableHistorical) {
      if (onDataRows[0]?.id_tag === undefined) return
      dispatch(
        getDeviceHistoryById({ id_tag: onDataRows[0]?.id_tag, start: startDate * 1000, end: moment().unix() * 1000 })
      )
    }
  }, [dates, dispatch, isVisableHistorical, onDataRows, startDate])
  useEffect(() => {
    if (dates[0] !== 0 && dates[1] !== 0) {
      dispatch(getDeviceHistoryById({ id_tag: onDataRows[0]?.id_tag, start: dates[0] * 1000, end: dates[1] * 1000 }))
    }
  }, [dates, dispatch, onDataRows])
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
    if (e.target.value === 'linetrace' || e.target.value === 'heatmap') {
      setIsVisableHistorical(true)
    } else {
      setIsVisableHistorical(false)
    }
  }

  const handleSwitchGrid = (checked: boolean) => {
    dispatch(setSwitchGridView(checked))
  }

  const handleSwitchHistorical = (checked: boolean) => {
    dispatch(setSwitchHistorical(checked))
  }

  const handleSwitchAnchor = (checked: boolean) => {
    dispatch(setSwitchAnchorView(checked))
  }

  // onChange date picker
  const onChangePicker = (date: any, dateString: string, type: string) => {
    if (date === null || date === undefined) {
      setDates([0, 0])
      return
    }

    if (type === 'from') {
      setDates([date.unix(), dates[1]])
    } else if (type === 'to') {
      setDates([dates[0], date.unix()])
    } else {
      setDates([0, 0])
    }
  }
  // handle submit upload
  const handleSubmitUpload = (data: any) => {
    setIsModalMap(false)

    dispatch(uploadMap(data))
      .unwrap()
      .then((res: any) => {
        toast.success('Upload map success')
      })
      .catch((err: any) => {
        toast.error('Upload map fail')
      })
  }
  // function handle setOnDataRows
  const handleSetOnDataRows = (data: any) => {
    setOnDataRows(data)
  }
  const generateRandomIcon = () => `https://picsum.photos/id/${Math.floor(Math.random() * 500)}/5/5`
  const generateRandomCoordinates = () => ({
    x: Math.floor(Math.random() * 500), // Assumes canvas width is 800
    y: Math.floor(Math.random() * 500)
  })
  useEffect(() => {
    const generateFakeData = (count: number) =>
      Array.from({ length: count }, () => ({
        ...generateRandomCoordinates(),
        image: generateRandomIcon()
      }))
    const data = generateFakeData(50)
    setIcons(data)
  }, [])
  return (
    <div className='dashboard'>
      <div className='flex-grow'>
        <HeatMap onData={convertData} icons={icons} />
        {/* <HeatMap /> */}
      </div>

      <div className='toolDasdboard w-[280px] flex-shrink-0 bg-white p-5'>
        <div className='configuration'>
          <div className='titleTool'>MAP CONFIGURATION</div>
          <ButtonGroup
            defaultValue='off'
            options={dataButtonGroup}
            onChange={onChangeButtonGroup}
            optionType='button'
          />
          <>
            {isVisableHistorical && (
              <div className='lineTrace'>
                <div className='historical'>
                  <span>Historical Data</span>
                  <Switch defaultChecked={switchHistorical} onChange={handleSwitchHistorical} />
                </div>
                <div className='selectDays'>
                  {switchHistorical && (
                    <DatePicker
                      placeholder='From'
                      showTime
                      value={moment.unix(dates[0])}
                      onChange={(date, dateString) => onChangePicker(date, dateString, 'from')}
                      format='DD-MM-YYYY HH:mm'
                      disabledDate={(current) => current && current > moment().endOf('day')}
                    />
                  )}
                  <DatePicker
                    disabled={!switchHistorical}
                    placeholder='To'
                    showTime
                    value={switchHistorical ? moment.unix(dates[1]) : moment()}
                    onChange={(date, dateString) => onChangePicker(date, dateString, 'to')}
                    format='DD-MM-YYYY HH:mm'
                    // disabledDate={(current) => {
                    //   return (
                    //     current &&
                    //     (current < moment(switchHistorical ? dates[0] : moment().unix()).endOf('day') ||
                    //       current > moment().endOf('day'))
                    //   )
                    // }}
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
              Finish={handleSubmitUpload}
            />
          )}
        </div>
        <div className='vehicleList'>
          <div className='titleVehicle'>VEHICLE LIST</div>
          <TableVehicle
            devicesData={devicesData}
            onIsVisableLineTrace={isVisableHistorical}
            sentCheckedRows={handleSetOnDataRows}
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
