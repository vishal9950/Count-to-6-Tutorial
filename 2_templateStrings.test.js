const greet = require('./2_templateStrings');

const strings = ['Hello, ', '!\nYour name lowercased is "', '"'];

// testcases
test('Should not log if name not provided: ', () => {
  expect(greet(strings, '', '')).toBe(false);
});

const nameArg = 'XYZ';
test('Should greet if name is all CAPS: ', () => {
  expect(greet(strings, nameArg, nameArg.toLowerCase())).toBe(`Hello, XYZ!
Your name lowercased is "xyz"`);
});
