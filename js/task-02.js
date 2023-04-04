const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsList = document.querySelector('#ingredients');

ingredients.forEach((element) => {
  const liItem = document.createElement('li');
  liItem.textContent = element;
  liItem.classList.add('item');
  ingredientsList.append(liItem);

  // console.log(liItem);
});

console.log(ingredientsList);
