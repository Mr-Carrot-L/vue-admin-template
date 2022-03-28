import store from '@/store'
import axios from 'axios'
import router from '@/router'
import { Message } from 'element-ui'
import { getTimeStamp, setTimeStamp } from './auth'

const TimeOut = 3600

function IsCheckTimeOut() {
  var currentTime = Date.now()
  var timeStamp = getTimeStamp()

  return (currentTime - timeStamp) / 1000 > TimeOut
}

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.request.use(config => {
  if (store.getters.token) {
    if (IsCheckTimeOut()) {
      store.dispatch('user/logout')
      router.push('/login')

      return Promise.reject(new Error('token超时了'))
    } else {
      setTimeStamp()
    }
  }

  return config
}, error => {
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  const { success, message, data } = response.data

  if (success) {
    return data
  } else {
    Message.error(message)
    return Promise.reject(new Error(message))
  }
}, error => {
  if (error.response && error.respone.data && error.respone.data.code === 10002) {
    store.dispatch('user/logout')
    router.push('/login')
  } else {
    Message.error(error.message)
    return Promise.reject(error)
  }
})

export default service
