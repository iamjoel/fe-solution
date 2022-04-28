import Mock from 'mockjs'

Mock.mock(/\/pet\/list/, {
  'list|0-10': [{
    'id|+1': 1,
    name: '@cname'
  }]
})
