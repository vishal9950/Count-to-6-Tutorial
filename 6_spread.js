function spread(args) {
  if (!args) {
    console.log('Err1: No args supplied');
    return undefined;
  } else if (args.length === 0) {
    console.log('Err2: Empty array supplied');
    return false;
  }
  const min = Math.min(...args);
  return `The minimum of [${args}] is ${min}`;
}

const input = process.argv.slice(2);
console.log(spread(input));

module.exports = spread;
