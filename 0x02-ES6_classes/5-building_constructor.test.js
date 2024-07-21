const Building = require('./5-building');

test('Building should be instantiated correctly', () => {
  const building = new Building();
  expect(building).toBeInstanceOf(Building);
});
