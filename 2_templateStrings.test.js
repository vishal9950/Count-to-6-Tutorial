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

const nameArg1 = 'xYz';
test('Should greet if name is mixed case: ', () => {
  expect(greet(strings, nameArg1, nameArg1.toLowerCase())).toBe(`Hello, xYz!
Your name lowercased is "xyz"`);
});

const nameArg2 = 'xyz';
test('Should greet if name is small case: ', () => {
  expect(greet(strings, nameArg2, nameArg2.toLowerCase())).toBe(`Hello, xyz!
Your name lowercased is "xyz"`);
});
