import axios, { type Method } from 'axios'
// import type { CategoryList } from '@/types'

// todo 创建axios实例
const instance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net/',
  timeout: 50000
})

// todo 请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// todo 响应拦截器
instance.interceptors.response.use(
  function (response) {
    // return response.data
    return response
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

/**
 * @param method 请求类型
 * @param url 请求地址
 * @param obj 对象类型，提交数据
 */
export const http = <T>(method: Method, url: string, obj?: object) => {
  return instance<{
    code: string
    msg: string
    result: T
  }>({
    method,
    url,
    [method.toUpperCase() === 'GET' ? 'params' : 'data']: obj
  })
}

export default instance
