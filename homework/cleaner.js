

let rlSync = require('readline-sync');

//gram values
const MOUSE_WEIGHT = 35;
const LETHAL_DOSAGE = 5;
const LETHAL_PROPORTION = LETHAL_DOSAGE / MOUSE_WEIGHT;

const SODA_WEIGHT = 350;
const SWEET_PERCENT = 0.001;
const SWEET_IN_SODA = SODA_WEIGHT * SWEET_PERCENT;

//program

function howMuchSoda(weight) {
  // let weightInGrams = (weight / 100) * 45359.2;
  let weightInGrams = (weight * 453.592);
  let lethalSweetForPerson = LETHAL_PROPORTION * weightInGrams;
  console.log(lethalSweetForPerson);
  return lethalSweetForPerson / SWEET_IN_SODA;
}

console.log(howMuchSoda(150));


