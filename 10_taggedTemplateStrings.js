function html(string, username, comment) {
  if (string === undefined || username === undefined || comment === undefined) {
    console.log('Err1: insufficient arguments');
    return undefined;
  }
  let result = comment.replace(/&/g, '&amp;');
  result = result.replace(/"/g, '&quot;');
  result = result.replace(/</g, '&lt;');
  result = result.replace(/>/g, '&gt;');
  result = result.replace(/'/g, '&apos;');

  let result1 = username.replace(/&/g, '&amp;');
  result1 = result1.replace(/"/g, '&quot;');
  result1 = result1.replace(/</g, '&lt;');
  result1 = result1.replace(/>/g, '&gt;');
  result1 = result1.replace(/'/g, '&apos;');
  return `${string[0]}${result1}${string[1]}${result}${string[2]}`;
}

console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

module.exports = html;
