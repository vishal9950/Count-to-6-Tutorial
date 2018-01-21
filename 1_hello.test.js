const fn = require('./1_hello.js');

test('Should log the string HELLO ES6: ', () => {
  expect(fn()).toBe('HELLO ES6');
});
