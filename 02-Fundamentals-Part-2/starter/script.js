'use strict'; //activates strict mode - Can also be activated for a specific block/function. Good practice is to activate for entire piece of code
// Strict mode make it easier for devs to avoid accidental errors
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

function fruitProcessor(apples, oranges) {
    return `A blend of ${oranges} oranges and ${apples} apples.`;
}

console.log(fruitProcessor(2, 3));

// Deaclations vs Expressions