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
spitRhymes(); //calling/invoking/running a function

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

console.log(calAge1(years[0]), calAge1(years[2]), calAge1(years[years.length - 1])); //passing array elements as arguments to a function

const ages2 = new Array(calAge1(years[0]), calAge1(years[2]), calAge1(years[years.length - 1]));
console.log(ages2);

const ages3 = [calAge1(years[0]), calAge1(years[2]), calAge1(years[years.length - 1])];
console.log(ages3)

// Array methods - array operations and functions
buddies.push('Master'); // Add element to the end of an array i.e calling the method/function push on the buddies array
console.log(buddies);
const newlength = buddies.push('Jam'); // push function returns a value i.e. the length of the array
console.log(newlength);

buddies.unshift('Jay'); // adds elements to the beginning of the array. 'unshift' also returns the length of the array, just like 'push'
console.log(buddies);

buddies.pop(); //Remove last element of the array. No argument required. 'pop' method returns the removed element
console.log(buddies);
const poopd = buddies.pop();
console.log(poopd);

buddies.shift(); // remove first element of the array. shift also returns the removed element
console.log(buddies);
const shifted = buddies.shift();
console.log(shifted);

console.log(buddies.indexOf("Tone")); // tells the position of an element in an array
console.log(buddies.indexOf("Bob")); // returns '-1' if an element does not exist

console.log(buddies.includes('Bob')); // 'includes' method returns boolean value if the element exists in the array or not 
console.log(buddies.includes('Tone'));
console.log(buddies.includes('tone')); // 'includes' uses strict equality comparison

buddies.push(23);
console.log(buddies.includes('23'));
console.log(buddies.includes(23));

if (buddies.includes('Nina')) { //'includes' method can be used to write conditionals
    console.log('Nina Simonne in the building!');
}

/* Write your code below. Good luck! 🙂 */
// const calcTip = bill >= 50 && bill <= 300? bill*0.15: bill*0.2;
function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

/*let tip;
function calcTip (bill) {
    if (bill >= 50 && bill <=300) {
        tip = 0.15 * bill;
    } else {
        tip = 0.2 * bill;
    }
    return tip;
} */
const bills = new Array(125, 555, 44); //Good practice - give arrays plural names e.g. tips, bills, etc. since they contain multiple elements
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = new Array(calcTip(bills[0])+bills[0], calcTip(bills[1])+bills[1], calcTip(bills[2])+bills[2]);
const totals = new Array(tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]);
console.log(tips);
console.log(totals);
console.log('');

// Objects - introduction
// Defines key-value pairs. Keys are also defined as properties e.g. An object has five properties ()
// There are multiple ways of creating objects. Using the {} is the easiest - the object literal syntax
// Objects should be used for more unstructured data, while arrays should be used for more structured/ordered data
// The order in which items are stored in the object does not matter during retrieval, unlike in arrays
const guerilla = {
    sirName: 'Kifefe',
    firstName: 'Kizza',
    occupation: 'Physician',
    dob: 1957,
    age: 2037 - 1957,
    spouse: 'Winnie Karagwa',
    foe: ['M7', 'Muhoonzi', 'NRM']
}
console.log(guerilla.spouse); //dot notation
console.log(guerilla['spouse']); //bracket notation. Accepts any expression
console.log(guerilla.foe[0]);
console.log(guerilla.foe[guerilla.foe.length - 1]);
const nameKey = `Name`;
console.log(guerilla['first' + nameKey] + ' ' + guerilla['sir' + nameKey]);

const interestIn = prompt('Enter what are you looking for i.e. occupation, dob, age, spouse');
if (guerilla[interestIn]) { //looking for a truthy value i.e. the value entered exists in the as a key in the object
    console.log(guerilla[interestIn]);
} else { //falsy if entered value does not exist as a key in the object
    console.log('Wrong entry. Choose btwn occupation, dob, age, spouse');
}

//Adding new elements to the object
guerilla.mainResidence = 'Prison'; //new key-value pair
guerilla['otherResidence'] = 'Bush'; //new key-value pair
guerilla.foe.push('Bobby'); //new array element 
console.log(guerilla.foe);
console.log(guerilla['mainResidence'], guerilla['otherResidence']);

// Object methods
// Method - any function that is attached to an object i.e. an object property that holds a function value
const soldier = {
    sirName: 'Avenger',
    firstName: 'Muhoozi',
    occupation: 'CDF',
    dob: 1973,
    hasIQ: false,
    parent: 'M7',
    comrades: ['none', 'nada', 0],

    calcAge: function (dob) { //Function as an expression. A declaration wont work i.e. function calcAge (dob) {}
        return (2037 - dob); // the expression produces the value. calcAge = key
    },

    calcNewAge: function () {
        //console.log(this); //using this keyword to point to the current object. 'this' = current object
        return (2037 - this.dob); //using this keyword to point to 'soldier' object
    },

    calcNewAge2: function () {
        this.ages = (2037 - this.dob); //create a new object property 'ages' i.e. ages : 2037 - 1973
        return this.ages; //return the new property value
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcNewAge2()}-year old ${this.occupation}, and he has ${this.hasIQ ? "high" : "low"} IQ`;
    }
};
console.log(soldier.calcAge(2000)); //dot notation
console.log(soldier['calcAge'](2001)); //bracket notation
console.log(soldier.calcNewAge());
console.log(soldier.calcNewAge2()); // 'calcNewAge2' function has to be called for the new property 'ages' to be available, otherwise it is 'undefined'
console.log(soldier.ages); //'calcNewAge2' function had to be called for the new property 'ages' to be available
console.log(soldier.getSummary());
console.log('');

/* Write your code below. Good luck! 🙂 */
//'use strict';
const john = {
    fullName: "Mark Miller",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
}

const mark = {
    fullName: "John Smith",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
}
// john.calcBMI(); // Call the  function first before accessing the new element therein, otherwise it'll be undefined
// mark.calcBMI();
console.log(john.calcBMI() > mark.calcBMI() ? `${john.fullName}'s BMI (${john.bmi}) is greater that ${mark.fullName}'s BMI (${mark.bmi})!`
    : `${mark.fullName}'s BMI (${mark.bmi}) is greater that ${john.fullName}'s BMI (${john.bmi})!`);

// Loops
// allows automation of repititive tasks
// for-loop - a loop with a counter. Keeps running while the condition is TRUE
for (let rep = 1; rep <= 5; rep++) { //created 'rep' var and initialize the counter at 1, run the loop and increment var until the condition is FALSE
    console.log(`Keep pushing rep no. ${rep}`);
}
console.log(``);

// Looping through Objects
const buddies2 = ['Tonie', 'Toni', 'Tone', 'Simone'];
const details2 = [sirName, "Peter", 1988 - 1945, buddies2, Boolean(0), Number(buddies2[1]), Boolean(buddies2[2])];

for (let i = 0; i <= buddies2.length - 1; i++) {
    console.log(buddies2[i]);
}

for (let i = 0; i < details2.length; i++) {
    console.log(`array pos: ${i}, element: ${details2[i]}, type: ${typeof details2[i]}`); //o/p position of i, element, and datatype
}

let typeElement = [];
for (let j = details2.length - 1; j >= 0; j--) {
    //typeElement[j] == (typeof details2[j]);
    typeElement.push(typeof details2[j]);
}
console.log('---loop backwards---');
console.log(typeElement);

let typeElement2 = [];
for (let j = 0; j < details2.length; j++) {
    //typeElement[j] == (typeof details2[j]);
    typeElement2.push(typeof details2[j]);
}
console.log(typeElement2);

//Continue and Break
//Continue - exits the current iteration of the loop and continues to the next iteration
//Break - completely terminates the entire loop
let typeElement3 = [];
for (let j = 0; j < details2.length; j++) {
    if (typeof details2[j] !== 'number') {
        continue;
    }
    else {
        typeElement3.push(typeof details2[j]);
    }
}
console.log(`---numbers only---`)
console.log(typeElement3);

let element4 = [];
for (let j = 0; j < details2.length; j++) {
    if (typeof details2[j] === 'number') {
        continue;
    }
    else {
        element4.push(details2[j]);
    }
}
console.log(`---no numbers---`)
console.log(element4);

let element5 = [];
for (let j = 0; j < details2.length; j++) {
    if (typeof details2[j] === 'number' || typeof details2[j] === 'string') continue;
    element5.push(details2[j]);
}
console.log(`---no numbers & strings---`)
console.log(element5);

let element6 = [];
for (let j = 0; j < details2.length; j++) {
    if (typeof details2[j] === 'object') break;
    element6.push(details2[j]);
}
console.log(`---break loop---`)
console.log(element6);

console.log('---loop within a loop---');
for (let excercise = 1; excercise <= 2; excercise++) {
    console.log(`For: starting workout: ${excercise} `);
    for (let rep = 1; rep <= 3; rep++) {
        console.log(`rep: ${rep}, workout: ${excercise}  `);
    }
}
//While loop - more versatile as compared to for-loop
//Requires only the condition to remain true for it to keep working
//It does not need a counter in many specific usecases
console.log('---while loop---');
let excercise = 1;
while (excercise <= 2) {
    console.log(`While: starting workout: ${excercise} `);
        let rep = 3
        while (rep > 0) {
            console.log(`rep: ${rep}, workout: ${excercise}  `);
            rep--;
        }
    excercise++;
}

let dice = Math.trunc((Math.random() * 6) + 1); //random number btw 1&6
while (dice !== 6) {
    console.log(`you rolled a ${dice}`);
    //dice === 6 ? console.log(`end of loop`) : console.log(`you rolled a ${dice}`);
    dice = Math.trunc((Math.random() * 6) + 1);
    if (dice === 6) console.log(`end of loop`);
}

/////////////////////////////////////////////////////////
const calcTip2 = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

/* Write your code below. Good luck! 🙂 */
const bills2 = new Array(22, 295, 176, 440, 37, 105, 10, 1100, 86, 52);
const tips2 = [];
const totals2 = [];

for (let i = 0; i < bills2.length; i++) {
    // tips2.push(calcTip2(bills2[i]));
    tips2[i] = calcTip2(bills2[i]);
    totals2[i] = tips2[i] + bills2[i];
    // totals2.push(tips2[i] + bills2[i]);
}
console.log(tips2, bills2, totals2);

function calcAverage2(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage2(totals2)); 
