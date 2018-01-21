const html = require('./10_taggedTemplateStrings');

const string = ['<b>', ' says</b>: "', '"'];
test('Should not work for empty args: ', () => {
  expect(html()).toBe(undefined);
});
