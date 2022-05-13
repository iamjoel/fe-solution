import http from '@/utils/http'
import type { sortType } from '@/define/list.d'

import './staff.mock' // mock接口数据

export const fetchList = (current: number, searchQuery: Record<string, any>, sortParams?: {key: string, value: sortType}) => {
  return http.get('/pet/list', {
    params: {
      current,
      q: JSON.stringify(searchQuery),
      sort: sortParams
    }
  })
}

export const edit = (id: number, data: Record<string, any>) => {
  console.log(`edit: ${JSON.stringify(data)}`)
  return http.patch(`/pet/${id}`, data)
}

export const create = (data: Record<string, any>) => {
  console.log(`create: ${JSON.stringify(data)}`)
  return http.put('/pet', data)
}

export const remove = (id: number, data: Record<string, any>) => {
  return http.delete(`/pet/${id}`, data)
}
