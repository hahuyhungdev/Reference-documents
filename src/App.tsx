import { NotFound } from 'components'
import { Dashboard, Devices, Home, Layout, Report, Tags } from 'pages'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Dashboard />
        },
        {
          path: '/devices',
          element: <Devices />
        },
        {
          path: '/tags',
          element: <Tags />
        },
        {
          path: '/report',
          element: <Report />
        },
        {
          path: '/serial',
          element: <Home />
        }
      ]
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}
export default App
