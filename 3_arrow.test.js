const arrow = require('./3_arrow');

test('Should not work for empty arrays: ', () => {
  expect(arrow([])).toBe(false);
});

const arr1 = ['Hello', 'this', 'is', 'ES6'];
test('Should work for string array: ', () => {
  expect(arrow(arr1)).toBe(`[${arr1}] becomes "HtiE"`);
});
