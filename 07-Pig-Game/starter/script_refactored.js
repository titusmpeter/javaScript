'use strict';

// selection and defining the relevant elements to be manipulated throughout the application, to avoid selecting multiple times (DRY principle)
const score0El = document.getElementById('score--0'); // select id (no selector) instead of query selector. Faster esp when selecting thousands of elements at once  large
const score1El = document.querySelector('#score--1'); // Select id (# selector). Works the same, but a bit slower in large selections
const diceEl = document.querySelector('.dice'); //select class (. selector)
const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0'); //current score for player 1
const current1El = document.getElementById('current--1'); //current score for player 2
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let scores, currentScore, activePlayer, playing; //declare empty vars - scoping

//set initial conditions
const init = () => {
  //assign/reset values for internal state variables to their initial state
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  //reset visible UI values to the initial score
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden'); //adding 'hidden' class (CSS) to 'dice' class (html) and by extention the html element containing 'dice' class

  //remove winner class
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');

  //remove player active class and add class to player 0
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

  diceEl.classList.add('hidden'); //hidding dice image
};
init(); //call initialization function

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0; //set score for current palyer to 0
  currentScore = 0; // set current score to 0
  activePlayer = activePlayer === 0 ? 1 : 0; //Switch user

  //toggle class (removes if it exists, adds if it doesn't)
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Rolling dice event handler
btnRoll.addEventListener('click', () => {
  //while playing is true
  if (playing) {
    // 1. generate a random dice roll (1 to 6)
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice image based on dice rolled value
    diceEl.classList.remove('hidden'); //un-hide dice element
    diceEl.src = `dice-${dice}.png`; //dynamically load one of the dice images depending on the rolled dice

    // 3. Check if dice value is a 1
    if (dice !== 1) {
      //add dice value to current score
      currentScore += dice;
      //display score for current player
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

//hold btn event handler
btnHold.addEventListener('click', () => {
  //while playing is true
  if (playing) {
    scores[activePlayer] += currentScore; // add current score to active player's score i.e. scores[0] = scores[0]+currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer]; //display cummulative score

    // check if current players score is >=50?
    if (scores[activePlayer] >= 50) {
      playing = false; //set playing to false
      diceEl.classList.add('hidden'); //hide dice by adding hidden class

      //assign player winner class and remove player active class
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

//reset the initial conditions of the game - factoring the order
btnNewGame.addEventListener('click', init); //pass the init function as as argument
