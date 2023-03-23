import './index.css'
import 'antd/dist/antd.min.css'
import 'react-toastify/dist/ReactToastify.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { store } from 'reduxStore'
import IotSocketContextProvider from 'utils/IotContext'

import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <IotSocketContextProvider>
        <App />
        <ToastContainer position='bottom-right' autoClose={2000} />
      </IotSocketContextProvider>
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
