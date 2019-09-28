const $setLogin = $('#login');
const $setSignUp = $('#sign-up');
const $submitButton = $('#submit');
const $emailInput = $('#email');
const $passwordInput = $('#password');
const $message = $('#message');

let authSetting = 'login';

function setAuth(setting) {
  authSetting = setting;

  if (authSetting === 'login') {
    $setLogin.addClass('active');
    $setSignUp.removeClass('active');
    $submitButton.text('Login');
  } else {
    $setLogin.removeClass('active');
    $setSignUp.addClass('active');
    $submitButton.text('Sign Up');
  }
}

function handleFormSubmit(event) {
  event.preventDefault();

  let email = $emailInput.val().trim();
  let password = $passwordInput.val().trim();

  if (!email || !password) {
    displayMessage('Please supply a valid email and password.', 'danger');
    return;
  }

  console.log(
    `Email: ${email} || Password: ${password} || Auth Settings: ${authSetting}`
  );
}

function displayMessage(message, type) {
  $message.text(message).attr('class', type);
}

$setLogin.on('click', setAuth.bind(null, 'login'));
$setSignUp.on('click', setAuth.bind(null, 'signup'));
$submitButton.on('click', handleFormSubmit);
