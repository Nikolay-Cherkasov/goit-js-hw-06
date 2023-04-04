const input = document.querySelector('#validation-input');
const dataInput = Number(input.dataset.length);
console.log(typeof dataInput);

input.addEventListener('blur', () => {
  if (input.value.length === dataInput) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
});
