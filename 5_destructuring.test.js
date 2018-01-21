const destructure = require('./5_destructuring');

test('Should not work if no args: ', () => {
  expect(destructure()).toBe(undefined);
});

const arr1 = [1, 'jdoe', 'jdoe@example.com', 'John', 'Doe'];
const obj1 = { username: 'jdoe', email: 'jdoe@example.com' };
test('Should work for [1, "jdoe", "jdoe@example.com", "John", "Doe"]: ', () => {
  expect(destructure(arr1)).toEqual(obj1);
});
