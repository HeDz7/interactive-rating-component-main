const submit = document.querySelector('#submit');
const card1 = document.querySelector('.card');
const card2 = document.querySelector('.card2');

const botoes = document.querySelector('.buttons')

const rBtn = document.querySelectorAll('.rating-btn');

const textRating = document.querySelector('.rating')

const btnSelected = document.querySelector('.rating-btn.selected')

submit.addEventListener('click', onSubmit);

rBtn.forEach((botao) => {
    botao.addEventListener('click', () => {
      rBtn.forEach((element) => element.classList.remove("selected"));
    const selectBtn = botao.attributes.number.value 
    
    textRating.textContent = `You selected ${selectBtn} out of 5`

    btnSelected.classList.remove('selected')
    botao.classList.add('selected')
  })
})



function onSubmit() {
  card1.classList.add('hide');

  card2.classList.remove('hide');
}


