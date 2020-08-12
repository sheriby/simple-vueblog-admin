import {request} from '@/network/request'

export function postBlog(blog) {
  return request({
    url: '/blog',
    method: 'post',
    data: blog
  })
}