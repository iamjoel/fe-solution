import http from '@/utils/http'
import './staff.mock' // mock接口数据

export const fetchList = (current: number, searchQuery: Record<string, any>) => {
  return http.get('/api/pet/list', {
    params: {
      current,
      q: JSON.stringify(searchQuery)
    }
  })
}
