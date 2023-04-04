const liItem = document.querySelectorAll('.item');
console.log(`Number of categories: ${liItem.length}`);

liItem.forEach((el) => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`);
});
