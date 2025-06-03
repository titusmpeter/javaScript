'use strict';

// selection and defining the relevant elements to manipulate throughout the application, to avoid selecting multiple times (DRY principle)
const score0El = document.getElementById('score--0'); // select id (no selector) instead of query selector. Faster esp when selecting thousands of elements at once  large
const score1El = document.querySelector('#score--1'); // Select id (# selector). Works the same, but a bit slower in large selections
const diceEl = document.querySelector('.dice'); //select class (. selector)
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0'); //current score for player 1
const current1El = document.getElementById('current--1'); //current score for player 2

// initial conditions
score0El.textContent = 0; //setting default score display to 0 (from 43)
score1El.textContent = 0; //setting default score display to 0 (from 24)
diceEl.classList.add('hidden'); //adding 'hidden' class (CSS) to 'dice' class (html) and by extention the html element containing 'dice' class

let currentScore = 0;

//Rolling dice fucntionality
btnRoll.addEventListener('click', () => {
  // 1. generate a random dice roll (1 to 6)
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // 2. Display dice image based on dice rolled value
  diceEl.classList.remove('hidden'); //un-hide dice element
  diceEl.src = `dice-${dice}.png`; //dynamically load one of the dice images depending on the rolled dice

  // 3. Check if dice value is a 1
  if (dice !== 1) {
    //add dice value to current score
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
    //Swicth user
  }
});
