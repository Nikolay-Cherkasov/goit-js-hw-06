const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', (event) => {
  event.preventDefault();
  const { email, password } = formRef.elements;

  if (email.value === '' || password.value === '') {
    return alert('Усі поля мають бути заповнені');
  }
  const submitForm = {
    email: email.value,
    password: password.value,
  };

  console.log(submitForm);
  formRef.reset();
});
