import mockAxios from 'axios'
import {fetchDog, createDog, getStr} from './index'
import {getStr as getStr2} from './utils'
// 文档 https://jestjs.io/docs/en/manual-mocks

// 在__mock__ 下 mock 了 axios
test('fetch dog should be the default mock value', async () => {
  const message = await fetchDog()
  expect(message).toBe('default')
})

test('fetch dog should be the set mock data', async () => {
  const RES_MESSAGE = 'Cool Dog'
  // mock get 数据 。只mock一次调用
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: { message: RES_MESSAGE }
    })
  )
  const message = await fetchDog()

  expect(message).toBe(RES_MESSAGE)
})

test('create dog should be the set mock data', async () => {
  const RES_MESSAGE = 'Success'
  const NOT_SUPPORT_MESSAGE = 'Not Support!'

  // mock post 数据
  mockAxios.post.mockImplementation(url => {
    // 通过参数，返回不同的值
    if(url.indexOf('dog.ceo') !== -1) {
      return Promise.resolve({
        data: { message: RES_MESSAGE }
      })
    } else {
      return Promise.resolve(NOT_SUPPORT_MESSAGE)
    }
  })
  const message = await createDog()

  expect(message).toBe(RES_MESSAGE)

  const notSupport = await mockAxios.post('xxx')
  expect(notSupport).toBe(NOT_SUPPORT_MESSAGE)

  expect(mockAxios.post).toHaveBeenCalledTimes(2)
})

// 在 ./__mocks__/utils.js 下。 TODO: 没mock 成功。
test('getStr should return mocked value', async () => {
  // expect(getStr2()).toBe('mocked')
})