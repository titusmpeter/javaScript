// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = '';

const calcAge = yob => 2050 - yob;
console.log(calcAge(1990));
console.warn(calcAge(1990));
console.error(calcAge(1990));
