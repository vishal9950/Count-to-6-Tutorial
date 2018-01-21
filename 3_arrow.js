function arrow(inputs) {
  if (inputs.length === 0) {
    console.log('Err1: Empty array suppied!');
    return false;
  }
  const result = inputs.map(firstLetter => firstLetter.substring(0, 1));

  const reducedResult = result.reduce((preVal, elem) => preVal + elem, '');

  return `[${inputs}] becomes "${reducedResult}"`;
}

const inputs = process.argv.slice(2);

console.log(arrow(inputs));

module.exports = arrow;
