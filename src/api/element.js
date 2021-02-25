import request from '@/utils/request'

export function getElementList(data) {
  return request({
    url: '/public/element/list',
    method: 'POST',
    data
  })
}

export function addElement(data) {
  return request({
    url: '/public/element/add',
    method: 'POST',
    data
  })
}

export function editElement(data) {
  return request({
    url: '/public/element/edty',
    method: 'POST',
    data
  })
}

export function deleteElement(data) {
  return request({
    url: '/public/element/del',
    method: 'POST',
    data
  })
}
