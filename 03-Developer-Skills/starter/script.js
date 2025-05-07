// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = '';

const calcAge = yob => 2050 - yob;
console.log(calcAge(1990));
console.warn(calcAge(1990));
console.error(calcAge(1990));

// Calculate temp amplitude in an array of given temperature values
//1. Understanding the problem
// Temp amplitude - the difference btw highest and lowest temp
// How to compute max and min temp values
// How to handle sensor errors
// 2. Breaking the problem into smaller problems
// How to ignore errors
// Find max value in array
// find min value in array
// subtract min from max and return the value (amplitude)
//
const calcTempAmplitude1 = function (temps) {
  let maxTemp = temps[0];
  let minTemp = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof temps[i] !== 'number') continue;
    if (maxTemp < currentTemp) maxTemp = currentTemp;
    if (minTemp > currentTemp) minTemp = currentTemp;
  }
  return maxTemp - minTemp;
};
console.log(calcTempAmplitude1([8, 1, 4, 'error', null, 6, -1, 0, 10, 5, 12]));

// Function to receive two arrays of temperature values
// 1. Understanding the problem
// Should we implement funtionality twice? - NO
// Should we merge two arrays?
// 2. Breaking down the problem
// Merge two arrays
const calcTempAmplitude2 = function (temps1, temps2) {
  const temps = temps1.concat(temps2);
  let maxTemp = temps[0];
  let minTemp = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof temps[i] !== 'number') continue;
    if (maxTemp < currentTemp) maxTemp = currentTemp;
    if (minTemp > currentTemp) minTemp = currentTemp;
  }
  return maxTemp - minTemp;
};
console.log(calcTempAmplitude2([6, -1, 10, 5, 12], [8, 1, 4, 'error']));

// Debugging
const degreeToKelvin = function () {
  const measurements = {
    type: 'temp',
    unit: 'celcius',
    value: Number(prompt('Degrees in celcius: ')),
  };
  console.table(measurements);
  return measurements.value + 273;
};
console.log(degreeToKelvin());
