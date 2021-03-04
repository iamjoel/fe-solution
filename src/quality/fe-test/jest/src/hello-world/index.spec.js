import sum  from './index'

test('result should be equal with the sum of the args', () => {
  expect(sum(2, 2)).toBe(4) // 整数
  expect(sum(0.1, 0.2)).toBeCloseTo(0.3) // 小数
  expect(sum(2, 0.1)).toBeCloseTo(2.1)
  expect(sum(0.1, 2)).toBeCloseTo(2.1)
})

test('pass not num type should throw error', () => {
  function main() {
    return sum('a', 2)
  }
  expect(main).toThrow('参数必须是数字')
})

// 深度比较
test('deep clone', () => {
  expect({
    a: 3
  }).toEqual({
    a: 3
  })
})