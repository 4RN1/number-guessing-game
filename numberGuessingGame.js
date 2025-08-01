const start = document.querySelector('.play');
const submit = document.querySelector('.submit');
const startingContainer = document.querySelector('.st-container');
const pickingContainer = document.querySelector('.pick-container');
const winningContainer = document.querySelector('.win-container');
const losingContainer = document.querySelector('.lose-container');
const playAgainBtn =  document.querySelectorAll('.playagain');



    startingContainer.style.display = 'flex';
    pickingContainer.style.display = 'none';
    winningContainer.style.display = 'none';
    losingContainer.style.display = 'none';



start.addEventListener ('click', function startGame(){
  startingContainer.style.display = 'none';
  pickingContainer.style.display = 'flex';
})

let randomNum = Math.floor(Math.random() * 10) + 1;



submit.addEventListener('click', function result(){
  let playerNum = Number(document.querySelector('.num').value);


  if (randomNum === playerNum) {
      pickingContainer.style.display = 'none';
      winningContainer.style.display = 'flex';
      document.querySelector('.num-win').textContent = randomNum;


      


  } else {
    pickingContainer.style.display = 'none';
    losingContainer.style.display = 'flex';
    document.querySelector('.num-lose').textContent = randomNum;

    

      

  }

})

playAgainBtn.forEach(function (button) {
  

button.addEventListener('click' , function playAgainBtn() {
    randomNum = Math.floor(Math.random() * 10) + 1;
    startingContainer.style.display = 'flex';
    pickingContainer.style.display = 'none';
    winningContainer.style.display = 'none';
    losingContainer.style.display = 'none';

});
});