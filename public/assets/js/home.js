const $setLogin = $('#login');
const $setSignUp = $('#sign-up');
const $submitButton = $('#submit');

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

$setLogin.on('click', setAuth.bind(null, 'login'));
$setSignUp.on('click', setAuth.bind(null, 'signup'));
