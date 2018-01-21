const makeImportant = require('./9_default2');

test('Should not work if str arg is empty: ', () => {
  expect(makeImportant(undefined, 5)).toBe(false);
});
