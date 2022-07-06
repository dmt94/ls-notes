/*
diet soda pop - death in lab mice

GOAL:
HOW MUCH DIET SODA POP IT IS POSSIBLE TO DRINK WITHOUT DYING? 

inputs:
- amount of artificial sweetener needed to kill a mouse (use 5 g)
- mass of mouse (35 g)
- weight of dieter (100 lbs = 45359.2 g)

info:
- lethal dose for a mouse is proportional to lethal dose for human (?)
- single soda pop = 350 g (mass)
- diet coke contains 1/10th of 1% artificial sweetener
  (conversion = const)
  (% => float 0.001)

rules:
- use 7 character or less variable names (short names)
- use only size integer variables required
- use only float data type 
- request goal weight


goal:
- input users weight
- output # of cans of soda the user can consume [before] they hit the "death" quantity
  (safe)
*/

// const lethal = 35 / 5; // 7 


let rlSync = require('readline-sync');

// const mouseWeight = 35;
// const lethalSweetMouse = 5;
// let personWeight = 150; 

// //convert lbs to grams
// const lbsToG = ((personWeight / 100) * 45359.2).toFixed(2); // convert lbs to gram. use float decimal
// const lethalM = lethalSweetMouse / mouseWeight;

// //soda
// const sodaWeight = 350;
// const sweetPercent =  0.001;
// const sweetInSoda = sodaWeight * sweetPercent; // in grams, how much sweetener in soda

// const lethalSweetSoda = lethalM * lbsToG; //amount of lethal sweetener for person
// const lethalSodaCans = lethalSweetSoda / sweetInSoda;


// console.log(lethalSweetSoda.toFixed(2)); //checking amount
// console.log(lethalSodaCans.toFixed(2)); //checking amount


//gram values
const MOUSE_WEIGHT = 35;
const LETHAL_DOSAGE = 5;
const LETHAL_PROPORTION = LETHAL_DOSAGE / MOUSE_WEIGHT;

const SODA_WEIGHT = 350;
const SWEET_PERCENT = 0.001;
const SWEET_IN_SODA = SODA_WEIGHT * SWEET_PERCENT;

//program

const getPersonWeight = () => {
  let weight = rlSync.question("What is your goal weight? (in lbs)\n");
  while (Number.isNaN(Number(weight))) {
    console.log("Input valid weight.");
    return getPersonWeight();
  }
  return (((weight) / 100) * 45359.2); //returns person weight in grams
}

function howMuchSoda(weight) {
  let lethalSweetForPerson = LETHAL_PROPORTION * Number(weight);
  console.log(`Drink ${Math.floor(((lethalSweetForPerson / SWEET_IN_SODA)))} cans`);
}

const askAnother = () => {
  let playAgain = rlSync.question("Do you want to input another weight? (y/n)\n");
  if (playAgain === 'yes' || playAgain === 'y') {
    return true;
  } return false;
}

while (true) {
  howMuchSoda(getPersonWeight());
  if (askAnother() === false) {
    return false;
  }
}