const average = require('./7_rest');

test('Should not work for no args: ', () => {
  expect(average()).toBe(false);
});

test('Should work for [1, 2, 3]: ', () => {
  expect(average(1, 2, 3)).toBe(2);
});

test('Should not work for empty array: ', () => {
  expect(average([])).toBe(false || 0);
});
