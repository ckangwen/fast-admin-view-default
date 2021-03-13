import request from "@/utils/request";

/**
 *
 */
export function getFunction(data) {
  return request({
    url: "/yb/public/projectList",
    method: "POST",
    data,
  });
}
