const average = require('./7_rest');

test('Should not work for no args: ', () => {
  expect(average()).toBe(undefined);
});
