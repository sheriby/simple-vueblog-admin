import {request} from '@/network/request'

export function getTags() {
  return request({
    url: '/tag/tags'
  })
}
