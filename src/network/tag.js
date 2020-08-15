import { request } from "@/network/request";

export function getTags() {
  return request({
    url: "/tag/tags",
  });
}

export function postTag(tag) {
  return request({
    url: "/tag",
    method: "post",
    data: tag,
  });
}

export function putTag(tag) {
  return request({
    url: "/tag",
    method: "put",
    data: tag,
  });
}
