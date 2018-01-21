const arrow = require('./3_arrow');

test('Should not work for empty arrays: ', () => {
  expect(arrow('')).toBe(false);
});
