let phrase = "JS is fun";
//alert(phrase);
let addition = 45 + 4 - 30;
console.log(addition);
console.log("obrigado");
console.log("");

//Variables
//Naming allows only words, numbers, underscore, dollar sign
//let illegal = 5Times;
//let illegal£& = 2;
// let 5illegal = 5 * 5;
let legal5 = 5 * 5;
let $legal = 1;

//Conventions
//Variable names to be descriptive
//Variables declared in camel case 
//Variable not starting with caps
//Constants declared in all caps
const PI = 22 / 7;

//Data types
//i) Object e.g. JSON objects ii) Primitive i.e. everything else that's nt an opject
//Primitive data types: string, number (applies for both int and float), boolean, undefined, null, symbol, BigInt
//Dynamic typing enables JS to define datatypes automatically based on the value stored in a var. 
// In JS, it is the value that has a type, not the var. A new value with a different datatype can be reassigned to the var
let age = "very old";
let lastName = "Smith";
let isMale = true;
let birthDate = {};
let birthPlace = null;
let dob;

isMale = false;
age = 35; //change value and data type. Var previously declared so no need to declare
console.log(age);
console.log(typeof age);
console.log(typeof lastName);
console.log(typeof isMale);
console.log(typeof birthDate);
console.log(typeof birthPlace); //returns type as object. Bug in JS, not fixed for legacy reasons
console.log(typeof dob);
console.log(dob);
console.log("");

//Let, Const, Var
//let - used for variables whose value can change later i.e. mutating variables
//const - used for non-mutating variables i.e. immutable variables, can't be reassigned
//const declarations cannot be null/empty. Must be initialized
//Good practice requires you have as few var mutations as possible. Changing vars introduces a potential to create bugs
//PI = 3.142;
//const PIE;
//var - old way of declaring variables prior to ES6

//Basic Operators - allows the transformation or combining of values
//Examples include: assignment, mathematical, logical, comparison operators etc.
const person1 = "Bob";
const person2 = "Cathy";
const today = 2030;
const dobBob = 1994;
const dobCathy = 1995;
console.log(person1 + "'s age is", today - dobBob, "while", person2 + "'s age is", today - dobCathy);
console.log(person1, person2);
console.log(person1 + " " + person2);
console.log("");

let x = 10;
x += x; //x=xtx
x *= x; //x=xtx
x--; //x=x-1
console.log(x);

const ageBob = today - dobBob;
const ageCathy = today - dobCathy;
const legalAge = 18;
const isEligible = ageCathy >= 18;
console.log(ageCathy > ageBob);
console.log(ageBob >= legalAge);
console.log(isEligible);

//Operator precedence
//grouping in () takes the highest precedence. All math operators are executed b4 comparison opeators
//Documented here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
let a, b;
b = a = 10 - 1 - 2;
console.log(b, a);

const averageAge1 = ageBob + ageCathy / 2;
const averageAge2 = (ageBob + ageCathy) / 2;
console.log(averageAge1, averageAge2);

//Strings and template literals i.e ``
// No need for concatenation when using template literals
const occupation = "teacher";
console.log(`I'm ${person1}, a ${today - dobBob} year old ${occupation}`);

console.log("Multiple line \n\
string \n\
end");

console.log(`multi line
string
end`);
console.log(`😊`);

//Conditions
const yob = 2101;
let century;

if (yob >= 1900 && yob < 2000) {
    century = "twentieth";
} else
    if (yob >= 2000 && yob < 2100) {
        century = "twenty first";
    } else {
        century = "time traveller";
    }

console.log(`${century} century👌`);
console.log('');

//Type convertion - exclusively converting a datatype to another
const inputYear = '2000'; //data type - string
console.log(Number(inputYear) + 15); //converts string into a number type and adds 15
console.log(inputYear, Number(inputYear)); //declared data type does not change

console.log(Number('Jones')); //invalid conversion i.e. NaN - not a number
console.log(typeof Number('Jones')); //number (invalid)

console.log(String(yob), yob); //number conversion to string

//Type coersion - JS automatic behind the scenes type conversion - occurs implicitly
//Happens whenever an operator is dealing with two values of different data types
console.log('I am ' + 23 + 'years old'); //type coersion by joining strings and an integer
console.log('I am ' + String(23) + 'years old');  //situation if type coersion wasn't supported in JS
console.log('20' - '10' - 2); //-,*,/ operators trigger type coersion
console.log('20' + '10' + 2); //plus operator does not, in concatenates
console.log(2 + 3 + 4 + '5'); //95
console.log('10' - '4' - 3 + '5'); //35
console.log('');


//Truthy and falsy values
//Falsy values are values that are not exaclty false but will become false when converted into boolean type
//Five falsy values: 0, null, undefined, '', NaN (of course false itself is a falsy value but not included)
//Trythy values will become true when converted into boolean type
//Trythy values is everything else that is not a falsy value e.g. any no that is not 0, or any string that is not empty
console.log(Boolean(''));
console.log(Boolean({}));
console.log(Boolean('test'));
console.log(Boolean(0));
console.log(Boolean(5));

const cash = 0;
if (cash) {
    console.log('Save for rainny days');
} else {
    console.log('Get a JOB!');
}

let height = 0;
if (height) {
    console.log('Defined');
} else {
    console.log('Not defined!');
}

console.log("");

// Equality operators
// === strict equality operator - striclty equal - compares the exact values & does perform type coersion
// == loose equality opertor - loosely equal - compares values, and type coerses during comparison
//General rule for clean code, avoid the == loose equality operator as much as you can. Prone to errors
// !==, != Different operator (not equal). Strict and loose, respectively

const newAge = 18;
console.log(newAge === '18');//false - no type coersion
console.log(newAge == '18'); //true - '18' type coersed to 18 for comparison
console.log(newAge === 18); //true compares exact value i.e. two numbers

let newNo = prompt('What is your fav number? '); //default input type string
console.log(typeof newNo);

newNo = Number(prompt('Re-enter to confirm ')); //value type converted at input - good practice
console.log(typeof newNo);
console.log("");

// Logical Operators
const isOld = true;
const isFit = true;
const isRetired = false;

console.log(isOld && isFit);
console.log(isOld && !isFit);
console.log(isOld || isFit);
console.log(isOld || !isFit);
console.log(!isOld, isFit);
console.log('');

//Swicth statement
//Compares in a strict equality way i.e. ===
let dayLight = 'Sunday';

switch (dayLight) {
    case 'Wednesday': // daylight === "Wednesday"
        console.log('WFH day I');
        break;
    case 'Thursday':
        console.log('WFH day II');
        console.log('Last day WFH!');
        break;
    case 'Friday':
        console.log('TGIF');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('R n R 😊');
        break;
    default:
        console.log('Normal work day');
}

// Statements and expressions
// To be discussed

// The conditional/ternary operator
// Allows to write an if-else condition equivalent but in one line
// Not a replacement of an if-else statement as it cannot be used on boger comparisons
console.log('');
dayLight === "Sunday" ? console.log("They not like us") : console.log("Overtime");
newAge <= 18 ? console.log("Teetotaller") : console.log("Knock yourself out");

const op = newAge < 18 ? "Teetotaller" : "Knock yourself out";
console.log(op);

console.log(newAge <= 18 ? "Teetotaller" : "Knock yourself out");
console.log(`I am ${newAge < 18 ? "an illegal drinker" : "a legal drinker"}`);