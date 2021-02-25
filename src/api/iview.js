import request from "@/utils/request";

export function getIviewList(data) {
  return request({
    url: "/public/list/list",
    method: "POST",
    data,
  });
}

export function addIview(data) {
  return request({
    url: "/public/list/add",
    method: "POST",
    data,
  });
}

export function editIview(data) {
  return request({
    url: "/public/list/edit",
    method: "POST",
    data,
  });
}

export function deleteIview(data) {
  return request({
    url: "/public/list/del",
    method: "POST",
    data,
  });
}
