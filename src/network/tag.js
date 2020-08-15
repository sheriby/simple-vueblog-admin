import {request} from '@/network/request'

export function getTags() {
  return request({
    url: '/tag/tags'
  })
}

export function postTag(tag) {
  return request({
    url: '/tag',
    method: 'post',
    data: tag
  })
}
