const counterValue = document.querySelector('#value');
const handleDecrementBtn = document.querySelector('button[data-action="decrement"]');
const handleIncrementBtn = document.querySelector('button[data-action="increment"]');

let counter = 0;

const stepIncrement = Number(handleIncrementBtn.textContent);
const stepDecrement = Number(handleDecrementBtn.textContent);
console.log(stepDecrement);

handleIncrementBtn.addEventListener('click', () => {
  counter += stepIncrement;
  counterValue.textContent = counter;
});

handleDecrementBtn.addEventListener('click', () => {
  counter -= -stepDecrement;
  counterValue.textContent = counter;
});
