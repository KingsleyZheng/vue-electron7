import axios from 'axios'
// import store from '@/store/index'
// import router from '@/router'
import domain from './domain'

const instance = axios.create()

instance.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded;charset=UTF-8'

instance.defaults.timeout = 60000

instance.interceptors.request.use(
  config => {
    // const token = store.state.token
    // token && (config.headers.Authorization = token)
    return config
  },
  error => {
    return Promise.error(error)
  }
)
instance.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response && response.data)
    } else {
      return Promise.reject(response && response.data)
    }
  },
  error => {
    const { response } = error
    if (response) {
      return Promise.reject(response)
    } else return Promise.reject(error)
  }
)

export default instance
