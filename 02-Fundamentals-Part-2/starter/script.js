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
console.log(calcAge3(2003));

const retirementPlan = (dob, surName) => {
    const age = 2037 - dob;
    const retiment = 60 - age;
    return `${surName} retires in ${retiment} years`;
}
console.log(retirementPlan(2000, 'Bob'));
console.log(retirementPlan(2005, 'Alyce'));

// Functions calling other functions
function cutPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor2(apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);
    return `A blend of ${orangePieces} orange slices and ${applePieces} apple slices.`;
}
console.log(fruitProcessor2(2, 3));
console.log();

/* Write your code below. Good luck! 🙂 */
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = calcAverage(25, 24, 26);
const scoreKoalas = calcAverage(50, 49, 51);

function checkWinner(avgDolphins, avgKoalas) {
    if ((avgDolphins / avgKoalas) >= 2) {
        return `Dolpins win (${avgDolphins} vs. ${avgKoalas})`;
    }
    else if ((avgKoalas / avgDolphins) >= 2) {
        return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
    }
    else if (((avgKoalas / avgDolphins) < 2) || ((avgDolphins / avgKoalas) < 2)) {
        return `no team wins...`;
    }
}
console.log(checkWinner(scoreDolphins, scoreKoalas));
console.log(checkWinner(150, 60));
console.log('');

// Arrays - a container of variables which can be referenced later
// An array can hold as many values of any data type
const buddies = ['Tonie', 'Toni', 'Tone', 'Simone']; // literal syntax for creating an array
console.log(buddies);

const years = new Array(2000, 2001, 2002, 2003, 2004); // a different way of creating an array
console.log(years);
console.log(buddies[0]); //logs the first element of the array
console.log(years.length); // logs the number of elements in the array
console.log(years[years.length - 1]); //logs the last element of the array. Any expression can be put within the []

buddies[1] = 'Nina'; //a const Array's elements can be mutated since an array isn't a primitive value. However the entire const Array cannot be mutated
//buddies = ['Salt','Pepa']; //Illegal
console.log(buddies);

const sirName = "Mackintosh";
const details = [sirName, "Peter", 1988 - 1945, buddies]; //a mix of different data types and expressions
console.log(details);

console.log(calAge1(years[0]), calAge1(years[2]), calAge1(years[years.length - 1])); //passing aray elements as arguments to a function

const ages2 = new Array(calAge1(years[0]), calAge1(years[2]), calAge1(years[years.length - 1]));
console.log(ages2);

const ages3 = [calAge1(years[0]), calAge1(years[2]), calAge1(years[years.length - 1])];
console.log(ages3)

// Array methods - array operations and functions
buddies.push('Master'); // Add element to the end of an array i.e calling the method/function push on the buddies array
console.log(buddies);
const newlength = buddies.push('Jam');// push function returns a value i.e. the length of the array
console.log(newlength);

buddies.unshift('Jay'); // adds elements to the beginning of the array. 'unshift' also returns the length of the array, just like 'push'
console.log(buddies);

buddies.pop(); //Remove last element of the array. No argument required. 'pop' method returns the removed element
console.log(buddies);
const poopd = buddies.pop();
console.log(poopd);

buddies.shift(); // remove first elemnt of the array . shift also returns the removed element
console.log(buddies);
const shifted = buddies.shift();
console.log(shifted);

console.log(buddies.indexOf("Tone")); // tells the position of an element in an array
console.log(buddies.indexOf("Bob")); // returns '-1' if an element does not extist

console.log(buddies.includes('Bob')); // 'includes' method returns boolean value if the element exists in the array or not 
console.log(buddies.includes('Tone'));
console.log(buddies.includes('tone')); // 'includes' uses strict equality comparison

buddies.push(23);
console.log(buddies.includes('23'));
console.log(buddies.includes(23));

if (buddies.includes('Nina')) { //'includes' method can be used to write conditionals
    console.log('Nina Simonne in the building!');
}







