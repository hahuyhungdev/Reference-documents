import '../../style.scss'

import Background from 'assets/images/bg.png'
import { HeatMap } from 'components'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'reduxStore'

// import Map from './Map'
// type dataInitialFilter
interface DataPoint {
  x: number
  y: number
  value: number
}
interface dataInitialFilterType {
  logs: DataPoint[]
  date: number
}
type typeIcons = {
  x: number
  y: number
  image: string
}
export const SidebarLeft = ({ onDates }: { onDates: number[] }) => {
  const [filterData, setFilterData] = useState<dataInitialFilterType[]>([])
  const [startDate, setStartDate] = useState(6)
  const [icons, setIcons] = useState<typeIcons[]>([])

  const usersData = useSelector((state: RootState) => state.heatmap.data)

  useEffect(() => {
    if (onDates[0] === 0 && onDates[1] === 0) {
      setStartDate(moment().subtract(6, 'hours').unix())
    } else {
      setStartDate(onDates[0])
    }
  }, [onDates])
  // use effect handle log startdate changed
  useEffect(() => {
    if (onDates[0] === 0 && onDates[1] === 0) {
      // console.log(usersData.map((item) => item.logs).flat())
      setFilterData(usersData.filter((item) => item.date > startDate))
    } else {
      setFilterData(usersData.filter((item) => item.date > startDate && item.date < onDates[1]))
    }
  }, [startDate, usersData, onDates])
  const generateRandomIcon = () => `https://picsum.photos/id/${Math.floor(Math.random() * 500)}/5/5`

  const generateRandomCoordinates = () => ({
    x: Math.floor(Math.random() * 500), // Assumes canvas width is 800
    y: Math.floor(Math.random() * 500) // Assumes canvas height is 600
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
    <div className='flex-grow'>
      {/* <button
        className='h-8 w-[3.3rem] cursor-pointer rounded-sm bg-red-400 p-1'
        onClick={() => {
          setIcons(generateFakeData(50))
        }}
      >
        change
      </button> */}
      <HeatMap icons={icons} onData={filterData} />
    </div>
  )
}

export default SidebarLeft
