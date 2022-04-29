import Mock from 'mockjs'
import qs from 'query-string'

const Random = Mock.Random
const staffList: any[] = []
const total = Random.integer(1, 100)
for (let i = 1; i <= total; i++) {
  staffList.push({
    id: i,
    gender: Random.boolean(),
    name: Random.cname(),
    age: Random.integer(10, 100),
    address: Random.county(true),
    describe: Random.csentence(),
    createTime: Random.date('yyyy-MM-dd')
  })
}

Mock.mock(/\/pet\/list/, ({ url }: any) => {
  console.log(url)
  const { current } = qs.parse(url) // 解析问题
  console.log(current)
  const start = (parseInt(current as string || '1', 10) - 1) * 10
  const end = start + 10// 10条数据
  return {
    list: staffList.slice(start, end),
    total
  }
})
