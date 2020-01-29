const form = document.getElementById ('form');
const username = document.getElementById ('username');
const email = document.getElementById ('email');
const password = document.getElementById ('password');
const password2 = document.getElementById ('password2');

function showError (input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector ('small');
  small.innerText = message;
}

function showSuccess (input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function checkEmail (email) {
  const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$'/;
  return re.test (String (email.value.trim ()).toLowerCase ());
}

function checkRequired (...inputAttr) {
  inputAttr.forEach (function (input) {
    if (input.value.trim () === '') {
      showError (input, `${getFieldName (input)} is required`);
    } else {
      showSuccess (input);
    }
  });
}

function checkPasswordsMatch (input1, input2) {
  if (input1.value.trim ().length != input2.value.trim.length) {
    showError (input2, "Passwords don't match");
  }
}

function checkLength (input, min, max) {
  if (input.value.trim ().length < min || input.value.trim ().length < min) {
    showError (input, `${getFieldName (input)} must be less than ${max}`);
  }
}

function getFieldName (input) {
  return input.id.charAt (0).toUpperCase () + input.id.slice (1);
}

// Event listeners
form.addEventListener ('submit', function (e) {
  e.preventDefault ();

  checkRequired (username, email, password, password2);
  checkLength (username, 3, 5);
  checkLength (password, 3, 10);
  checkEmail (email);
  checkPasswordsMatch (password, password2);
});

username.addEventListener ('input', function () {
  const formControl = this.parentElement;
  formControl.className = 'form-control';
});

email.addEventListener ('input', function () {
  const formControl = this.parentElement;
  formControl.className = 'form-control';
});

password.addEventListener ('input', function () {
  const formControl = this.parentElement;
  formControl.className = 'form-control';
});

password2.addEventListener ('input', function () {
  const formControl = this.parentElement;
  formControl.className = 'form-control';
});
