import http from '@/utils/http'
import './staff.mock' // mock接口数据

export const fetchList = (current: number) => {
  return http.get(`/api/pet/list?current=${current}`)
}
