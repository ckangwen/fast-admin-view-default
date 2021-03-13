import request from "@/utils/request";

/**
 *
 */
export function getCategoryList(data) {
  return request({
    url: "/admin/api/category/list/",
    method: "POST",
    data
  });
}
