const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector('#ingredients');
console.log(listRef);

const ingridArr = ingredients.map(ingred => {
  const itemRef = document.createElement('li');
  itemRef.textContent = ingred;
  itemRef.classList.add('item');
  
  return itemRef
});

listRef.append(...ingridArr);