import Axios from 'axios'

export function request(config) {
  const instance = Axios.create({
    baseURL: 'http://localhost:8081',
    timeout: 5000,
    async: true,
    crossDomain: true
  })

  instance.interceptors.request.use(
    config => {
      config.headers['Authorization'] = localStorage.getItem('token')
      return config
    },
    error => {
      console.log(error)
    }
  )

  instance.interceptors.response.use(
    res => {
      return res.data
    },
    error => {
      console.log(error)
    }
  )

  return instance(config)
}
