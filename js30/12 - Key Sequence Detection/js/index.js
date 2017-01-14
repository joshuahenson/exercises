let secret = 'joshua'
let secretCode = '';

function checkSecretCode(e) {
  secretCode += e.key
  secretCode = secretCode.substr(-secret.length)
  console.log(secretCode);
  if (secret === secretCode) {
    cornify_add()
  }
}
window.addEventListener('keyup', checkSecretCode);