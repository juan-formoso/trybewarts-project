const loginBtn = document.getElementById('login-btn');
// https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
function login() {
  const loginText = document.getElementById('login').value;
  const passwordText = document.getElementById('password').value;
  if (validateEmail(loginText) && passwordText !== '') {
    return alert('Olá, Tryber!');
  }
  return alert('Login ou senha inválidos.');
}
loginBtn.addEventListener('click', login);
const submitBtn = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
function activeBtn() {
  if (agreement.checked === true) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}
agreement.addEventListener('click', activeBtn);
