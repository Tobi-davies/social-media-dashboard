const btn = document.querySelector('button');
const btnBall = document.querySelector('.roller-btn');
const body = document.querySelector('body');
const texts = document.querySelectorAll('.tab-number');
const main = document.querySelector('main');
const cards = document.querySelectorAll('.card');
const grey = document.querySelectorAll('.small');
// const place = document.getElementsByClassName('.card')

btn.addEventListener('click', function(){
  
  btn.classList.toggle('show-btn');
  body.classList.toggle('change-body');
  btnBall.classList.toggle('change-roller');
  main.classList.toggle('bg-change');
  
  cards.forEach(card => {
    card.classList.toggle('card-change');
  });

  texts.forEach(text => {
    text.classList.toggle('change-text');
  })
  grey.forEach(x => {
    x.classList.toggle('change-small');
  })
  // place.classList.toggle('card-change');
  // card.style.display = 'none';
  // heading.style.color = 'white';
})