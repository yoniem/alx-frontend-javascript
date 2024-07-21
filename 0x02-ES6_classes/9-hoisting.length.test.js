const { listOfStudents } = require('./9-hoisting');

test('listOfStudents should have length 3', () => {
  expect(listOfStudents.length).toBe(3);
});
