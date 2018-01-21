const greet = require('./2_templateStrings');

const strings = ['Hello, ', '!\nYour name lowercased is "', '"'];

test('Should not log if name not provided: ', () => {
  expect(greet(strings, '', '')).toBe(false);
});
