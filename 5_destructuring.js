function destructure(input) {
  if (!input) {
    console.log('Err1: No args supplied');
    return undefined;
  }
  const [, uName, emailID] = input;
  const obj1 = {
    username: uName,
    email: emailID,
  };
  return obj1;
}

const userArray = process.argv.slice(2);
console.log(destructure(userArray));

module.exports = destructure;
