module.exports = function average(...args) {
  if (args.length === 0) {
    console.log('Err2: Empty array supplied');
    return false;
  }
  if (args[0] === undefined) {
    console.log('Err1: No args supplied');
    return false;
  }
  let sum = 0;
  args.forEach((value) => {
    sum += value;
  });
  return sum / args.length;
};
