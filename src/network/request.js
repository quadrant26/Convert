import axios from 'axios'
import qs from 'qs'

export function request(config){
  // 1. 创建 axios 实例
  const instance = axios.create({
    // baseURL: 'http://123.207.32.32:8000/',
    baseURL: 'http://127.0.0.1:4000',
    timeout: 5000,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })

  // 2. axios 拦截器
  // 2.1 请求拦截的作用
  instance.interceptors.request.use( config => {
    // consolg.log(config)

    // 1. 比如 config 中的一些信息不符合服务器的要求

    // 2. 比如每次发送网络请求时，都希望在界面中显示一个请求的图标

    // 3. 某些网络请求（比如登录 token ）， 必须携带一些特殊的信息
    config.data = qs.stringify(config.data)

    return config;
  }, err => {
    // console.log(err)
  })

  // 2.2 响应拦截
  instance.interceptors.response.use( res => {
    return res.data
  }, err => {
    console.log(err)
  })

  // 3. 发送真正的网络请求
  return instance(config);
}
