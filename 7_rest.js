module.exports = function average(...args) {
  if (args[0] === undefined) {
    console.log('Err1: No args supplied/ Empty array supplied');
    return false;
  }
  let sum = 0;
  args.forEach((value) => {
    sum += value;
  });
  return sum / args.length;
};
