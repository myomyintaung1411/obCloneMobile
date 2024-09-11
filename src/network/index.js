// http/index.js
import axios from 'axios'
import store from '@/store/index.js';
import {computed} from 'vue'
// 创建axios的一个实例

let BaseUrl = ''
let token = computed(()=> store.getters["app/LToken"])

if (process.env.NODE_ENV == 'development') {
  BaseUrl = '/api'
} else {
  //BaseUrl = 'http://103.246.113.24:8818/'
  BaseUrl = '/api'
}

const instance = axios.create({
  baseURL: BaseUrl, // 接口统一域名
  timeout: 6000, // 设置超时
  withCredentials: true
  // headers: {
  //   'Content-Type': 'application/json;'
  // }
})
// const $loading = useLoading()
let loading
let message = ''
// 正在请求的数量
let requestCount = 0

// 请求拦截器
instance.interceptors.request.use((config) => {
   //showLoading()
  // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
  //const token = window.localStorage.getItem('t')
   config.headers.Authorization = `Bearer ${token.value}`;
  //config.headers.token = token.value
  // 若请求方式为post，则将data参数转为JSON字符串
  const lang = 'zh_cn'
  if (!config.params) {
    config.params = {}
  }
  config.params['lang'] = lang
  if (config.method === 'POST') {
    config.data = JSON.stringify(config.data)
  }
  // let cd = config?.data ? JSON.parse(JSON.stringify(config.data)) : {}
  // let cd_enc = AES.encrypt(JSON.stringify(cd));
  //let decryptedData = JSON.parse(AES.decrypt(cd_enc));
   //config.data = { data: cd_enc };
  return config
}, (error) => {
  //hideLoading()
  // 对请求错误做些什么
  Promise.reject(error)
}
)

// 响应拦截器
instance.interceptors.response.use((response) => {
 // hideLoading()
  // 响应成功
  // let cd_enc = response.data; 
  // let decryptedData = JSON.parse(AES.decrypt(cd_enc));
  // response.data = decryptedData;
  return response
}, (error) => {
  //hideLoading()
 // console.log(error)
  //NoticeMsg.Message(error.toString(),"warning")
  // 响应错误
  if (error.response && error.response.status) {
    // hideLoading()
    const status = error.response.status
    switch (status) {
      case 400:
        message = '请求错误'
        break
      case 401:
        message = '请求错误'
        break
      case 404:
        message = '请求地址出错'
        break
      case 408:
        message = '请求超时'
        break
      case 500:
        message = '服务器内部错误!'
        break
      case 501:
        message = '服务未实现!'
        break
      case 502:
        message = '网关错误!'
        break
      case 503:
        message = '服务不可用!'
        break
      case 504:
        message = '网关超时!'
        break
      case 505:
        message = 'HTTP版本不受支持'
        break
      default:
        message = '请求失败'
        
    }
    console.log(message + "error ============>");
    //NoticeMsg.Message(message,"error")
    // ElMessage.error(message)
  //  Swal.fire({
  //     title: message,
  //     text: message,
  //     //title:"HTTP版本不受支持",
  //     //title:"HTTP版本不受支持",
  //     icon: 'error',
  //     showCancelButton: false,
  //     allowOutsideClick: false,
  //     confirmButtonText: 'Ok!'
  //   })
    return Promise.reject(error)
  }
  return Promise.reject(error)
})

export default instance
