function greet(strings, name, nameLowerCase) {
  if (name === '') {
    console.log('Err1: Empty string supplied!');
    return false;
  }
  return `${strings[0]}${name}${strings[1]}${nameLowerCase}${strings[2]}`;
  // console.log(`${strings[0]}${name}${strings[1]}${nameLowerCase}${strings[2]}`);
  // console.log(`Hello, ${process.argv[2]}!
// Your name lowercased is "${process.argv[2].toLowerCase()}"`);
}

const msg = greet`Hello, ${process.argv[2]}!
Your name lowercased is "${process.argv[2].toLowerCase()}".`;

console.log(msg);

module.exports = greet;
