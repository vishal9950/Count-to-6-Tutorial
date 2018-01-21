const html = require('./10_taggedTemplateStrings');

// const string = ['<b>', ' says</b>: "', '"'];
test('Should not work for empty args: ', () => {
  expect(html()).toBe(undefined);
});

const username = 'Daniel';
const comment = '2 < 3';
test('Should work for <b>Daniel says</b>: "2 < 3"', () => {
  expect(html`<b>${username} says</b>: "${comment}"`).toBe('<b>Daniel says</b>: "2 &lt; 3"');
});
