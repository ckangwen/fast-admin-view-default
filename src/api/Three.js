import request from "@/utils/request";

/**
 *
 */
export function projectList(data) {
  return request({
    url: "/yb/public/projectList",
    method: "POST",
    data,
  });
}
