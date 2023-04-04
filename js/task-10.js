function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector('input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  divBoxes: document.querySelector('#boxes'),
};

refs.createBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', () => {
  return (refs.divBoxes.innerHTML = '');
});

function createBoxes() {
  const array = [];

  let size = 30;

  for (let i = 1; i <= refs.input.value; i++) {
    const color = getRandomHexColor();
    size = i > 1 ? size + 10 : size;
    array.push(`<div style="width:${size}px; height:${size}px; background-color:${color}"></div>`);
  }
  console.log();

  const markup = array.join('');
  return refs.divBoxes.insertAdjacentHTML('beforeend', markup);
}
