const form = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginMessage = document.getElementById('login-message');
const tipo_da_moeda = document.getElementById('tipo_moeda');
const valor_de_pagamento = document.getElementById('valor');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username === 'admin' && password === 'password') {
    loginMessage.textContent = 'Login successful!';
    loginMessage.style.color = 'green';
  } else {
    loginMessage.textContent = 'Invalid username or password';
    loginMessage.style.color = 'red';
  }
});