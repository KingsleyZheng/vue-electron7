import axios from './service'
import QS from 'qs'

const configFile = {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
}

// const configJSON = {
//   headers: {
//     'Content-Type': 'application/json;charset=UTF-8'
//   }
// }


// 普通get post可以用封好的方法，想要定制化就自己写

function get(url, params = {}) {
  return axios.get(url, { params })
}

function post(url, params = {}) {
  return axios.post(url, QS.stringify(params))
}


function postFile(url, formData) {
  return axios.post(url, formData, configFile)
}


export default {
  get,
  post,
  postFile,
}
