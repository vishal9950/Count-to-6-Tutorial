const makeImportant = require('./9_default2');

test('Should not work if str arg is not given: ', () => {
  expect(makeImportant(undefined, 5)).toBe(false);
});

test('Should work if only str supplied: ', () => {
  expect(makeImportant('Hello')).toBe('Hello!!!!!');
});

test('Should work if both args: ', () => {
  expect(makeImportant('Hello', 1)).toBe('Hello!');
});

test('Should work for empty string: ', () => {
  expect(makeImportant('', 2)).toBe('!!');
});
