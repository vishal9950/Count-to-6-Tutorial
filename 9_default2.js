module.exports = function makeImportant(str, count = `${str.length}`) {
  if (!str) {
    console.log('Err2: Empty string supplied');
    return false;
  }
  return str + '!'.repeat(count);
};
