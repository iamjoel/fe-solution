export default {
  get: jest.fn(() => Promise.resolve({ data: {message: 'default'} })),
  post: jest.fn(() => Promise.resolve({ data: {} })),
}