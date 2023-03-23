import './style.scss'

import clsx from 'clsx'
import { IconDashboard, IconDevices, IconReport, IconTag } from 'components/Icons'
import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const dataNavigation = [
  {
    path: '/',
    name: 'Monitoring Dashboard',
    icon: (color: string) => <IconDashboard fill={color} />
  },
  {
    path: '/devices',
    name: 'Devices Management',
    icon: (color: string) => <IconDevices fill={color} />
  },
  {
    path: '/tags',
    name: 'Tags Management',
    icon: (color: string) => <IconTag fill={color} />
  },
  {
    path: '/report',
    name: 'Report',
    icon: (color: string) => <IconReport fill={color} />
  },
  {
    path: '/example',
    name: 'Example',
    icon: (color: string) => <IconDevices fill={color} />
  },
  {
    path: '/home',
    name: 'Ha Huy Hung',
    icon: (color: string) => <IconDashboard fill={color} />
  }
]

export const Layout = () => {
  const location = useLocation()
  return (
    <div className='mainHome'>
      <header className='header'>
        <title>{dataNavigation.find((item) => item.path === location.pathname)?.name}</title>
        <h1 className='rtls '>RTLS SYSTEM</h1>
      </header>
      <div className='flex'>
        <div className='sideBar shrink-0'>
          {dataNavigation.map((item) => (
            <Link className={clsx('item', { active: item.path === location.pathname })} to={item.path} key={item.path}>
              <div>{item.icon(item.path === location.pathname ? '#A85F0A' : '')}</div>
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
        <div className='content flex-grow overflow-hidden'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout
