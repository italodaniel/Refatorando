const cards = document.querySelectorAll('.card');

for (let card of cards){
  card.addEventListener('click', function(){
    const recipeIndex = card.getAttribute("id");
    window.location.href = `/receitas/${recipeIndex}`;
  });
}


const info = document.querySelectorAll('.recipe-info')
const visibility = document.querySelectorAll('.visibility')

for(let i = 0; i <= 2; i++) {
  visibility[i].addEventListener('click', function(){
    if(info[i].classList.contains('hide')){
      info[i].classList.remove('hide')

      visibility[i].innerHTML = "ESCONDER"
    } else {
      info[i].classList.add('hide')
      
      visibility[i].innerHTML = "MOSTRAR"
    }
  })
}