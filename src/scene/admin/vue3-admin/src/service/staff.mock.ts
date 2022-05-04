import Mock from 'mockjs'
import qs from 'query-string'

const Random = Mock.Random
const staffList: any[] = []
const total = Random.integer(1, 100)
for (let i = 1; i <= total; i++) {
  staffList.push({
    id: i,
    gender: Random.integer(0, 1),
    name: Random.cname(),
    age: Random.integer(10, 100),
    address: Random.county(true),
    describe: Random.csentence(),
    createTime: Random.date('yyyy-MM-dd')
  })
}

Mock.mock(/\/pet\/list/, ({ url }: any) => {
  const { current, q } = qs.parse(url.split('?')[1])
  const start = (parseInt(current as string || '1', 10) - 1) * 10
  const end = start + 10// 10条数据
  const filteredList = staffList.filter((item: any) => {
    const { name, age, address, describe } = JSON.parse(q as string)
    return (name ? item.name.includes(name) : true) && (age ? item.age === parseInt(age as string, 10) : true) && (address ? item.address.includes(address) : true) && (describe ? item.describe.includes(describe) : true)
  })
  return {
    list: filteredList.slice(start, end),
    total: filteredList.length
  }
})
