import Axios from 'axios';
const instance = Axios.create({

})
// 请求拦截
instance.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
// 相应拦截
instance.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error.response.status);
  }
)

export default instance;
