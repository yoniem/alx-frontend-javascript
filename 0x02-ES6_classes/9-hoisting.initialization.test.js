const { initialization } = require('./9-hoisting');

test('initialization should return "Hello World"', () => {
  expect(initialization()).toBe('Hello World');
});
