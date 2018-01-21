const destructure = require('./5_destructuring');

test('Should not work if no args: ', () => {
  expect(destructure()).toBe(undefined);
});

const arr1 = [1, 'jdoe', 'jdoe@example.com', 'John', 'Doe'];
const obj1 = { username: 'jdoe', email: 'jdoe@example.com' };
test('Should work for [1, "jdoe", "jdoe@example.com", "John", "Doe"]: ', () => {
  expect(destructure(arr1)).toEqual(obj1);
});

const arr2 = [1, '', 'jdoe@example.com', 'John', 'Doe'];
const obj2 = { username: '', email: 'jdoe@example.com' };
test('Should work for [1, " ", "jdoe@example.com", "John", "Doe]: ', () => {
  expect(destructure(arr2)).toEqual(obj2);
});

const arr3 = [1, 'jdoe', '', 'John', 'Doe'];
const obj3 = { username: 'jdoe', email: '' };
test('Should work for [1, "jdoe", "", "John", "Doe"]: ', () => {
  expect(destructure(arr3)).toEqual(obj3);
});

const arr4 = [1, '', '', 'John', 'Doe'];
const obj4 = { username: '', email: '' };
test('Should work for [1, "", "", "John", "Doe"]: ', () => {
  expect(destructure(arr4)).toEqual(obj4);
});
