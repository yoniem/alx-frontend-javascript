const Building = require('./5-building');

test('evacuationWarningMessage should return correct message', () => {
  const building = new Building();
  expect(building.evacuationWarningMessage()).toBe('Evacuate immediately!');
});
