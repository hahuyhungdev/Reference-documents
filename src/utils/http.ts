import axios, { AxiosInstance } from 'axios'

import { getAccessTokenFromLS } from './auth'

class Http {
  instance: AxiosInstance
  private accessToken: string
  constructor() {
    this.accessToken =
      getAccessTokenFromLS() ||
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlck5hbWUiOiJhZG1pbiIsImFsbG93X2FjY2VzcyI6MSwicm9sZSI6WyJhZG1pbiJdLCJpYXQiOjE2Nzg5NTc4ODgsImV4cCI6MTY3OTU2MjY4OH0.M6ufaqN7RQllAVUOavExIpJqKtjCd44CJDH0k5oLVw0'
    this.instance = axios.create({
      baseURL: 'http://192.168.1.164:3000/api/v1/',
      // baseURL: 'http://localhost:5000/',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.accessToken
      }
    })
    // add a request interceptor
    this.instance.interceptors.request.use(
      function (config) {
        // Do something before request is sent
        // console.log('config', config)
        return config
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error)
      }
    )
    // add a response interceptor
    this.instance.interceptors.response.use(
      function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response
      },
      function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance

export default http
