import axios, { AxiosInstance, HttpStatusCode } from 'axios'
import { toast } from 'react-toastify'

class Http {
  instance: AxiosInstance

  constructor() {
    this.instance = axios.create({
      baseURL: ' http://localhost:5000',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    // add a request interceptor
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
    // add a response interceptor
    this.instance.interceptors.response.use(
      (response) => {
        return response
      },
      function (error) {
        if (error.response?.status !== HttpStatusCode.UnprocessableEntity && error.code !== 'ERR_CANCELED') {
          const data: any | undefined = error.response?.data
          const message = data?.message || error.message
          // console.log('error', data?.message, error.message)
          toast.error(message)
        }
        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance

export default http
