import { request } from "@/network/request";

export function getTypes() {
  return request({
    url: "/type",
  });
}

export function postType(type) {
  return request({
    url: "/type",
    method: "post",
    data: type,
  });
}
