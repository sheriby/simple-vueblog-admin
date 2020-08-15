import { request } from './request'

export function login(user) {
  return request({
    url: '/user/login',
    method: 'post',
    data: user
  })
}

export function verifyToken(token) {
  var params = new URLSearchParams()
  params.append('token', token)
  return request({
    url: '/user/token',
    params
  })
}
