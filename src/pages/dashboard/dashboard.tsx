import './style.scss'

import { useState } from 'react'

import { SidebarLeft, SidebarRight } from './components'

export const Dashboard = () => {
  const [datesFromChild, setDatesFromChild] = useState([0, 0])

  const handleDatesFromChild = (dates: number[]) => {
    setDatesFromChild(dates)
  }

  return (
    <div className='dashboard'>
      <SidebarLeft onDates={datesFromChild} />
      <SidebarRight sendDates={handleDatesFromChild} />
    </div>
  )
}

export default Dashboard
