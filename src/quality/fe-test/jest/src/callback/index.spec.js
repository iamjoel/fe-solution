import toCallback from './index'
import sinon from 'sinon'

test('callback should be called times as passed into', () => {
  // 被调用1次 toHaveBeenCalled
  const callbackOnce = jest.fn()
  toCallback(callbackOnce, 1)
  expect(callbackOnce).toHaveBeenCalled()
  // 用 sinon 做一样的事
  const callback = sinon.spy()
  toCallback(callback, 1)
  expect(callback.called).toBe(true)

  // 被调用多次 toHaveBeenCalledTimes
  const callback5Th = jest.fn()
  toCallback(callback5Th, 5)
  expect(callback5Th).toHaveBeenCalledTimes(5)

  // 未被调用 toHaveBeenCalledTimes(0)
  const callbackNotCalled = jest.fn()
  toCallback(callbackNotCalled, 0)
  expect(callbackNotCalled).toHaveBeenCalledTimes(0)
})

test('callback args should be equal as passed into', () => {
  let arg
  const callback = (value => arg = value)
  toCallback(callback, 1, 'aaa')
  expect(arg).toBe('aaa')

  // jest 写法
  const fn = jest.fn()
  toCallback(fn, 1, 'bbb')
  expect(fn).toHaveBeenNthCalledWith(1, 'bbb')
})