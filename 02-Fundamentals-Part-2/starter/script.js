'use strict'; //activates strict mode - Can also be activated for a specific block/function. Good practice is to activate for entire code
// Strict mode makes it easier for devs to avoid accidental errors
// Strict mode forbids certain things and also highlights certain errors in the console to help in debugging
// Strict mode lists reserved words for features that may be implemented to the language later 

let hasDL = false;
const passTest = true;
//const interface = "open"; reserved word

passTest ? hasDL = true : hasDL = false;
if (hasDL) console.log(`You can drive D`);

// functions - a piece of code that can be re-used
// DRY (dont repeat yourself) - functions are perfect for implenting DRY priciple
// not every function returns a value
// not every function has parameters and accepts arguments
function spitRhymes() {
    console.log(`Straight as an arrow`);
}

spitRhymes(); //calling/invoking/running a fucntion

function fruitProcessor(apples, oranges) { //function has parameters i.e. declared variables within the function
    return `A blend of ${oranges} oranges and ${apples} apples.`; //parameters are placeholders for the actual values
}

console.log(fruitProcessor(2, 3)); //arguments (actual values) passed to the function i.e. values for the paramenters when invoking the function

//Declarations vs Expressions
//Function declaration - functions can be called before they are declared i.e because of a process called hoisting
function calAge1(dob) {
    return 2037 - dob;
}
const age1 = calAge1(2000);

//Function expression - functions can be called before they are declared/initialized
const calcAge2 = function (dob) { //unamed/anonymous function
    return 2037 - dob;
}
const age2 = calcAge2(2001);

console.log(age1, age2);

// Arrow functions - Special form of function expression
// Return occurs implicitly for one-line expression i.e. without having to explicitly use the 'return' keyword
const calcAge3 = dob => 2037 - dob;
const age3 = calcAge3(2002);

console.log(age1, age2, age3);


