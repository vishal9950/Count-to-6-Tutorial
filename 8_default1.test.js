const midpoint = require('./8_default1');

test('Should work for no args: ', () => {
  expect(midpoint()).toBe(0.5);
});

test('Should work for 1 arg: ', () => {
  expect(midpoint(undefined, 2)).toBe(1);
});
