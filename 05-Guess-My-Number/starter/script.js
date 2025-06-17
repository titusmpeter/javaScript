// Document Object Model - DOM
// Structured representation of HTML documents
// A concept in web dev that defines the hierarchical structure of a web page
// Allows the use of JS to access HTML elements (HTML attributes) and styles (CSS styles) in order to manipulate them
// A DOM can be viewed as aconnection point btw HTML documnets and JS code
// The DOM is automatcally created by the browser as soon as the HMTL code page loads
// The DOM is a complete representation of a HTML documwnt as a tree-like structure, ...
// with each element on the page being a node in the tree.
// Everything that is in the HTML documnet has to be in the DOM; including comments
// The DOM is not part of JS language. DOM-related stuff is not part of JS
// JS is a nothing but a dialect of the ECMA script specification. DOM related stuff is not part of ECMA
// The DOM, its methods and properties are part of a larger collection of Web APIs
// Web APIs are libraries that browsers implement and can be accessed using JS code
// Browsers implement an officoal DOM specifiction; thus the reason DOM manipulation works the same in all browsers
/*
console.log(document.querySelector('.message').textContent); //display the value of class item in console
document.getElementsByClassName('message').textContent;
document.querySelector('.message').textContent = 'Correct'; //assigning new value to the class item
document.querySelector('.guess').value = 13; //
console.log(document.querySelector('.guess').value); //read the value of the class item 
*/
// Select check button using query selector
// Create an event listener for click action and attach an event handler (function) -
// event listener receives two arguments - event listened for (click) and the event handler function
// function expression can be configured to perform any desired activity
// JS engine calls the function as soon as the event (click) happens

'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1; //random integer btw 1-20. trunc to remove fractions/decimals
let score = 20; //initial score
let highScore = 0;

//Event listener for click action on element with 'check' class and event handler function for handling input
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //convert str i/p to number and store

  //check for falsy value - no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';

    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🙌 Correct guess 🙌';
    document.querySelector('.number').textContent = secretNumber; //display the secret number after guessing right
    document.querySelector('body').style.backgroundColor = '#60b347'; //change backgrond color to the given RGB code
    document.querySelector('.number').style.width = '30rem'; //change width of element with class name 'number'

    //update high score if current score is > highest score achieved
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;

      //retain high score if current score is < highest score achieved
    } else if (score < highScore) {
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //When guess !== secret number
  if (guess !== secretNumber) {
    //while score is not 0
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too high' : '📉 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //score is decremented upto 0, then game is lost
      document.querySelector('.message').textContent = ' 🤢 You lost the game!';
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  }
});

//Event listener for click action on element with 'again' class and event handler function to restore initial values
document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1; //generate a new random value
  score = 20; //restore score to 20
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?'; //display the secret number after guessing right
  document.querySelector('body').style.backgroundColor = '#222'; //change backgrond color to the given RGB code
  document.querySelector('.number').style.width = '15rem'; //change width of element with class name 'number'
});
