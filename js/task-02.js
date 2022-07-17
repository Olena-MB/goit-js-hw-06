const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const allIngredients = ingredients.map(ingredient => {
    const newTag = document.createElement('li');
    newTag.textContent = ingredient;
return newTag;
});
const newElement = document.querySelector('#ingredients')
newElement.append(...allIngredients);
console.log(newElement);