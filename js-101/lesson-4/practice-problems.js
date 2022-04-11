
/* fill() destructive method */
let numArr = [10, 2, 3, 4, 5];

numArr.fill(1, 1);

console.log(numArr);

/*
What is the return value of map in the following code? Why?
*/

const animals = ['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
  return '';
});

console.log(animals); // [undefined, bear]

const animalsTwo = ['ant', 'bear'].filter(elem => elem.length > 3);

console.log(animalsTwo); // [undefined, bear]

/*

When a function doesn't explicitly return something,
it implicitly returns [undefined]. That's why we see
[undefined] as the first element of the returned array.

*/

////
/*
Write a program that uses this array to create an
object where the names are the keys
and the values are the positions in the array:

*/

let mysteryInc = ["Scooby", "Daphne", "Fred", "Velma", "Shaggy"];

let mysteryObj = {};
mysteryInc.forEach((char, index) => {
  mysteryObj[char] = index;
});

console.log(mysteryObj);

///
/*
Add up all of the ages from the Munster family object:
*/

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

console.log(Object.values(ages).reduce((prev, curr) => prev + curr));

///
/*
Pick out the minimum age from our current Munster family object
*/

let munsterPairs = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let munsterAges = Object.values(munsterPairs);
/*
We use the ... operator, called the spread operator,
to convert the array to a list of arguments.*/
console.log(Math.min(...munsterAges));


/*
Create an object that expresses the frequency
with which each letter occurs in this string:
*/

let statement = "The Flintstones Rock";

let counter = {};

let arr = statement.toLowerCase().split('');

arr.forEach(el => {
  if (el !== ' ') {
    counter[el] = (counter[el] || 0) + 1;
  }
});

console.log(counter);

/*
We're taking advantage of something called short-circuiting here.
What this means is that JavaScript first evaluates the left operand
(result[char]) of the || operator.

If it is truthy,
JavaScript doesn't evaluate the right operand;
it only evaluates the right operand when the left is falsy.

Thus, if a character doesn't exist as a key in our results object,
result[char] will return undefined — a falsy value — resulting
in the assignment of result[char] to 0.

If result[char] instead evaluates to a truthy value such as 1,
it'll simply reassign the current value to result[char].
*/

let charsInStatement = statement.split('').filter(char => char !== ' ');
let result = {};

charsInStatement.forEach(char => {
  if (Object.keys(result).includes(char)) {
    result[char] += 1;
  } else {
    result[char] = 1;
  }
});

let newSentence = 'The present moment is a gift';

function checkLetterCount(statement, char) {
  let countObj = {};
  let charList = statement.toLowerCase().split('');
  let result = '';

  if (!charList.includes(char)) {
    result += `Character not found.`;
    return result;
  }

  charList.forEach(char => {
    if (char !== ' ') {
      countObj[char] = (countObj[char] || 0) + 1;
    }
  });

  //outputs clean result using the complete object that matches
  //each character in the statement with their respective count
  for (let count in countObj) {
    if (count === char) {
      result += `There ${countObj[count] > 1 ? 'are' : 'is'} ${countObj[count]} "${char}" in: ${statement}.`;
    }
  }
  return result;
}

console.log(checkLetterCount(newSentence, 'g'));