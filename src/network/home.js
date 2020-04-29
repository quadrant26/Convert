import {request} from "./request";

export function getUserInfo(data) {
  return request({
    url: '/api/user/user_info',
    method: 'post',
    data: data
  })
}

export function getPrivilegeList(data) {
  return request({
    url: '/api/user/user_privilege_list',
    method: 'post',
    data: data
  })
}
