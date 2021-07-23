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
const textarea = document.getElementById('textarea');
function count() {
  const textLength = textarea.value.length;
  const inputLength = textarea.maxLength;
  const count2 = document.getElementById('counter');

  count2.innerHTML = inputLength - textLength;
}

textarea.addEventListener('input', count);

const evaluationForm = document.getElementById('evaluation-form');
const formEmail = document.getElementById('input-email');

function collectName() {
  const lastName = document.getElementById('input-lastname').value;
  const firstName = document.getElementById('input-name').value;
  const fullName = `Nome: ${firstName} ${lastName}`;
  evaluationForm.innerHTML = '';
  const paragraph = document.createElement('p');
  const son = evaluationForm.appendChild(paragraph);
  son.innerText = fullName;
}

function collectEmail() {
  const email = `Email: ${formEmail.value}`;
  const paragraph = document.createElement('p');
  const son = evaluationForm.appendChild(paragraph);
  son.innerText = email;
}

const selectedHouse = document.getElementById('house');

function collectHouse() {
  const house = `Casa: ${selectedHouse.value}`;
  const paragraph = document.createElement('p');
  const son = evaluationForm.appendChild(paragraph);
  son.innerText = house;
}

const selectedFamily = document.querySelectorAll('.family');

function collectFamily() {
  const paragraph = document.createElement('p');
  const son = evaluationForm.appendChild(paragraph);
  for (let index = 0; index < selectedFamily.length; index += 1) {
    if (selectedFamily[index].checked) {
      const family = selectedFamily[index].value;
      son.innerText = `Família: ${family}`;
    }
  }
}

const selectedNotes = document.querySelectorAll('input[name="rate"]');

function collectNotes() {
  const paragraph = document.createElement('p');
  const son = evaluationForm.appendChild(paragraph);
  for (let index = 0; index < selectedNotes.length; index += 1) {
    if (selectedNotes[index].checked) {
      const Notes = selectedNotes[index].value;
      son.innerText = `Avaliação: ${Notes}`;
    }
  }
}

const selectedSubjects = document.querySelectorAll('.subject');

function collectSubjects() {
  const paragraph = document.createElement('p');
  const son = evaluationForm.appendChild(paragraph);
  son.innerText = 'Matérias: ';
  for (let index = 0; index < selectedSubjects.length; index += 1) {
    if (selectedSubjects[index].checked) {
      son.innerText += ` ${selectedSubjects[index].value},`;
    }
  }
}

const observations = document.getElementById('textarea');

function collectObservations() {
  const writtenObs = `Observações: ${observations.value}`;
  const paragraph = document.createElement('p');
  const son = evaluationForm.appendChild(paragraph);
  son.innerText = writtenObs;
}

function collectData(event) {
  event.preventDefault();
  collectName();
  collectEmail();
  collectHouse();
  collectFamily();
  collectNotes();
  collectSubjects();
  collectObservations();
}

submitBtn.addEventListener('click', collectData);
