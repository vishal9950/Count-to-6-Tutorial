const spread = require('./6_spread');

test('Shopuld not work for no args: ', () => {
  expect(spread()).toBe(undefined);
});
