import axios, { AxiosInstance, HttpStatusCode } from 'axios'
import { toast } from 'react-toastify'
import { AuthResponse } from 'types/auth.type'

import { getAccessTokenFromLS, setAccessTokenToLS } from './auth'

class Http {
  instance: AxiosInstance
  private accessToken: string
  constructor() {
    this.accessToken = getAccessTokenFromLS()
    this.instance = axios.create({
      baseURL: 'http://192.168.1.164:3000/api/v1/',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.accessToken
      }
    })
    // add a request interceptor
    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken && config.headers) {
          config.headers.Authorization = 'Bearer ' + this.accessToken
          return config
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
    // add a response interceptor
    this.instance.interceptors.response.use(
      (response) => {
        // console.log('response', response)
        const dataResponse = response.data as AuthResponse
        let tokenHeader
        const TokenAuth: any | undefined = response.config.headers.Authorization
        if (TokenAuth && TokenAuth.startsWith('Bearer ')) {
          tokenHeader = TokenAuth.split(' ')[1]
        }
        // console.log('tokenHeader', tokenHeader)
        this.accessToken = dataResponse.data.accessToken || tokenHeader
        setAccessTokenToLS(this.accessToken)
        return response
      },
      function (error) {
        if (error.response?.status !== HttpStatusCode.UnprocessableEntity && error.code !== 'ERR_CANCELED') {
          const data: any | undefined = error.response?.data
          const message = data?.message || error.message
          console.log('error', data?.message, error.message)
          toast.error(message)
        }
        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance

export default http
