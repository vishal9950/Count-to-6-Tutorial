function html(string, username, comment) {
  if (string === undefined || username === undefined || comment === undefined) {
    console.log('Err1: insufficient arguments');
    return undefined;
  }
  let result = comment.replace('&', '&amp;');
  result = result.replace('"', '&quot;');
  result = result.replace('<', '&lt;');
  result = result.replace('>', '&gt;');
  result = result.replace('\'', '&apos;');

  let result1 = username.replace('&', '&amp;');
  result1 = result1.replace('"', '&quot;');
  result1 = result1.replace('<', '&lt;');
  result1 = result1.replace('>', '&gt;');
  result1 = result1.replace('\'', '&apos;');
  return `${string[0]}${result1}${string[1]}${result}${string[2]}`;
}

console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

module.exports = html;
