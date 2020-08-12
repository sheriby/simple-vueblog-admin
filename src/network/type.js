import {request} from '@/network/request'

export function getTypes() {
  return request({
    url: '/type'
  })
}