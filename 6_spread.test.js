const spread = require('./6_spread');

test('Shopuld not work for no args: ', () => {
  expect(spread()).toBe(undefined);
});

const arr1 = [18, 5, 7, 24];
test('Should work for [18,5,7,24]: ', () => {
  expect(spread(arr1)).toBe('The minimum of [18,5,7,24] is 5');
});

test('Should not work for empty array: ', () => {
  expect(spread([])).toBe(false);
});
