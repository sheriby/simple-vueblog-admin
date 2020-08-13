import { request } from "@/network/request";

export function postBlog(blog) {
  return request({
    url: "/blog",
    method: "post",
    data: blog,
  });
}

export function getBlogPage(page) {
  return request({
    url: "/blog/page/" + page,
  });
}

export function searchBlogs(blog) {
  const params = new URLSearchParams();
  if (blog.title) {
    params.append("title", blog.title);
  }
  if (blog.tagId) {
    params.append("tagId", blog.tagId);
  }
  if (blog.typeId) {
    params.append("typeId", blog.typeId);
  }
  return request({
    url: "/blog/search",
    params,
  });
}

export function getBlogInfo(id) {
  return request({
    url: "/blog/bloginfo/" + id,
  });
}

export function deleteBlog(id) {
  return request({
    url: "/blog/" + id,
    method: "delete",
  });
}
