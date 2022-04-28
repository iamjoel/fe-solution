import http from '@/utils/http'
import './staff.mock' // mock接口数据

export const fetchList = () => {
  return http.get('/api/pet/list')
}
