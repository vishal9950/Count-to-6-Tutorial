const midpoint = require('./8_default1');

test('Should work for no args: ', () => {
  expect(midpoint()).toBe(0.5);
});

test('Should work for 1 arg: ', () => {
  expect(midpoint(undefined, 2)).toBe(1);
});

test('Should work for 1 arg(2): ', () => {
  expect(midpoint(-1, undefined)).toBe(0);
});

test('Should work for both args (3,7): ', () => {
  expect(midpoint(3, 7)).toBe(5);
});
