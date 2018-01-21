const midpoint = require('./8_default1');

test('Should work for no args: ', () => {
  expect(midpoint()).toBe(0.5);
});
