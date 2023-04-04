function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  body: document.querySelector('body'),
  span: document.querySelector('.color'),
  btn: document.querySelector('.change-color'),
};

refs.btn.addEventListener('click', () => {
  const hexColor = getRandomHexColor();
  refs.body.style.backgroundColor = hexColor;
  refs.span.textContent = hexColor;
  console.log(hexColor);
});
