// import axios from 'axios'
import axios, { type Method } from 'axios'
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
    return response
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

/**
 * axios 二次封装，整合 TS 类型
 * @param method  请求类型
 * @param url  请求地址
 * @param submitData  对象类型，提交数据
 */
export const http = <T>(method: Method, url: string, submitData?: object) => {
  return instance.request<{
    code: string
    msg: string
    // 不能写死，因为每个请求返回的数据类型都不一样
    result: T
  }>({
    url,
    method,

    // get 方式，使用字段是 params
    // params: submitObj,
    // 其他方式，使用字段是 data
    // data: submitObj,
    [method.toUpperCase() === 'GET' ? 'params' : 'data']: submitData
  })
}
export default instance
