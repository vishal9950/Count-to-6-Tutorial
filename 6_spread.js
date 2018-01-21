function spread(args) {
  if (!args) {
    return undefined;
  }
  const min = Math.min(...args);
  return `The minimum of [${args}] is ${min}`;
}

const input = process.argv.slice(2);
console.log(spread(input));

module.exports = spread;
