import fetchUserInfo from './index'

test('async fn fetch user data should ok', async () => {
  var userData = await fetchUserInfo()
  expect(typeof(userData) === 'object').toBeTruthy()
  expect(userData.name != undefined).toBeTruthy()
})

test('async fn error should can be caught', async () => {
  try {
    await fetchUserInfo(true)
  } catch(e) {
    expect(e).toEqual('fail')
  }
})

test('promise resolved should be ok', async () => {
  await expect(Promise.resolve('lemon')).resolves.toBe('lemon');
  await expect(Promise.resolve('lemon')).resolves.not.toBe('octopus');
})

test('promise reject should can be caught', async () => {
  await expect(Promise.reject(new Error('octopus'))).rejects.toThrow('octopus')
})


