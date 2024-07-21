const { fullStudentDescription } = require('./9-hoisting');

test('fullStudentDescription should return correct string', () => {
  expect(fullStudentDescription('John', 25)).toBe('John is 25 years old.');
});
