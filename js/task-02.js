const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];



const ingredientsList = document.querySelector("#ingredients");
const ingredientsArr = ingredients.map(ingredient => {
  const ingAdd = document.createElement("li");
  ingAdd.textContent = ingredient;
  return ingAdd;
});
ingredientsList.append(...ingredientsArr);