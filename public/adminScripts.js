/*-- ADMIN PAGES --*/
function addPreparation() {
  const preparations = document.querySelector('#preparations');
  const fieldContainer = document.querySelectorAll('.preparation');

  const newField = fieldContainer[fieldContainer.length -1].cloneNode(true);

  if(newField.children[0].value == "") return false;

  newField.children[0].value = "";
  preparations.appendChild(newField);
}

function addIngredient() {
  const ingredients = document.querySelector('#ingredients');
  const fieldContainer = document.querySelectorAll('.ingredient');

  const newField = fieldContainer[fieldContainer.length -1].cloneNode(true);

  if(newField.children[0].value == "") return false;

  newField.children[0].value = "";
  ingredients.appendChild(newField);
}

document
  .querySelector('.add-ingredient')
  .addEventListener('click', addIngredient);
  
document
  .querySelector('.add-prepare')
  .addEventListener('click', addPreparation);



function confirmation(){ 
  var deleteRecipe = confirm("Deseja realmente deletar essa receita?")

  if(deleteRecipe == true){
    window.location.href = "/admin/recipes"
  }
}



















  // function addPreparation() {
//   const preparations = document.querySelector('#preparations');
//   const fieldContainer = document.querySelectorAll('.preparation');

//   const newField = fieldContainer[fieldContainer.length -1].cloneNode(true);

//   if(newField.children[0].value == "") return false;

//   newField.children[0].value = "";
//   preparations.appendChild(newField);
// }