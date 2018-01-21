const destructure = require('./5_destructuring');

test('Should not work if no args: ', () => {
  expect(destructure()).toBe(undefined);
});
