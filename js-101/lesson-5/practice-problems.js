/*
1. How would you order the following
array of number strings by descending numeric value
(largest number value to smallest)?
*/

const { colors } = require("prompt");

let arr = ['10', '11', '9', '7', '8'];

arr.sort((a, b) => Number(b) - Number(a));

console.log(arr);

/*
2. How would you order the following array of objects based on the
[year] of publication of each book, from the [earliest] to the [latest]?

- ascending order
(for each object within array):
- array of objects, our target is the published and its year pair

array.sort((a, b) => a - b)
*/

let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

books.sort((a, b) => {
  return Number(a.published) - Number(b.published);
});

console.log(books);

/*
3. For each of these collection objects,
demonstrate how you would access the letter [g].
*/

let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];

let g1 = arr1[2][1][3];

//

let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];

let g2 = arr2[1]['third'][0];

//

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];

let g3 = arr3[2]['third'][0][0];

//

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };

let g4 = obj1['b'][1];

//

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};

let g5 = Object.keys(obj2['third'])[0];

console.log(g5); //'g'

/*
4. For each of these collection objects,
demonstrate how you would change the value 3 to 4.
*/

let arr11 = [1, [2, 3], 4];

arr11[1][1] = 4;

let arr22 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];

arr22[2] = 4;

let obj11 = { first: [1, 2, [3]] };

obj11.first[2][0] = 4;

console.log(obj11);

let obj22 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };

obj22['a']['a'][2] = 4;

console.log(obj22);

/*
5. Compute and display the total age of the [male] members of the family.
*/

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let munstersAge = [];
for (let name in munsters) {
  if (munsters[name]['gender'] === 'male') {
    munstersAge.push(munsters[name]['age']);
  }
}
console.log(munstersAge.reduce((prev, curr) => prev + curr, 0)); //444

//version 2 - better version
let totalMaleAge = 0;
for (let member in munsters) {
  if (munsters[member]['gender'] === 'male') {
    totalMaleAge += munsters[member].age;
  }
}

console.log(totalMaleAge); //444

/*
6. "string substitution," where we take a hard-coded string and
modify it with various parameters from our program.

use munsters object above

(Name) is a (age)-year-old (male or female).
*/

for (let member in munsters) {
  console.log(`${member} is a ${munsters[member]['age']}-year-old ${munsters[member]['gender']}`);
}

// more organized solution
Object.entries(munsters).forEach(entry => {
  let name = entry[0];
  let age = entry[1]['age'];
  let gender = entry[1].gender;

  console.log(`${name} is a ${age}-year-old ${gender}.`);
});

/*
7. What will the final values of a and b be?
Try to answer without running the code.
*/

let a = 2;
let b = [5, 8];
let arr222 = [a, b];

arr222[0] += 2;
arr222[1][0] -= a;

// final value for arr222 is => [4, [3, 8]]
// final value for (a) => 2
// final value for (b) => [3, 8]

/*
8. Using the forEach method, write some code to output all [vowels]
from the strings in the arrays.

Don't use a for or while loop.
*/

let sentenceObj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

console.log(Object.values(sentenceObj));

let vowels = ['a', 'e', 'i', 'o', 'u'];

Object.values(sentenceObj).forEach(arr => arr.forEach(string => {
  string.split('').forEach(char => {
    if (vowels.includes(char)) {
      console.log(char);
    }
  });
}));

/*
9. return a new array with the same structure,
 but with the values in each subarray ordered
 -- alphabetically or numerically as appropriate -- in ascending order.
*/

let unorganizedA = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let copyA = unorganizedA.slice();

copyA.forEach(arr => {
  if (arr.every(el => typeof el === 'string')) {
    arr.sort();
  } else if (arr.every(el => typeof el === 'number')) {
    arr.sort((a, b) => a - b);
  }
});

console.log(copyA);

/*
10. sort the elements above in descending order.
*/

let copyB = unorganizedA.slice();

copyB.forEach(arr => {
  if (arr.every(el => typeof el === 'string')) {
    arr.sort().reverse();
  } else if (arr.every(el => typeof el === 'number')) {
    arr.sort((a, b) => b - a);
  }
});

console.log(copyB);

/*
11. use the map method to return a new array identical
in structure to the original but,
with each number incremented by 1.

Do not modify the original data structure.
*/

let numA = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let serializedArr = JSON.stringify(numA);
let numACopy = JSON.parse(serializedArr); // deep copy of numA
// slice() is a shallow copy, so won't work for nested obj/arrays

let copy = numACopy.map(obj => {
  for (let key in obj) {
    obj[key] += 1;
  }
  return obj;
});

console.log(numA);
console.log(copy);

// clever way, creates empty obj, copy using for/in
// each element is an object

let cleverCopy = numA.map(obj => {
  let incrementedObj = {};

  for (let key in obj) {
    incrementedObj[key] = obj[key] + 1;
  }

  return incrementedObj;
});

/*
12.  use a combination of methods, including filter,
to return a new array[ identical in structure] to the original,
but containing only the numbers that are multiples of 3.
*/

let beforeMultiples = [[2], [3, 5, 7], [9], [11, 15, 18]];

let multOf3 = beforeMultiples.map(arr => arr.filter(num => {
  return num % 3 === 0;
}));

console.log(multOf3.flat(2)); // returns all multiples of 3 in one array
console.log(multOf3);
//returns identical structure as original, but with only mult of 3

/*
13. sort the array so that the sub-arrays
are ordered based on the [sum of the odd numbers]
that they contain.

- add odd inner array
- sort outer array based on (ascending)
*/

let beforeOdd = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

beforeOdd.sort((a, b) => {
  let oddSumA = a.filter(num => num % 2 === 1)
    .reduce((sum, next) => sum + next);
  let oddSumB = b.filter(num => num % 2 === 1)
    .reduce((sum, next) => sum + next);
  return oddSumA - oddSumB;
});

console.log(beforeOdd);
//[ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]

/*
14. Given the following data structure write some code
to return an array containing the
[colors] of the fruits and the
[sizes] of the vegetables.
The sizes should be uppercase, and the colors should be capitalized.

[["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]
*/

let groceryList = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let colorOrSize = [];

for (let produce in groceryList) {
  if (groceryList[produce]['type'] === 'fruit') {
    let colors = groceryList[produce]['colors'].map(color => color[0].toUpperCase() + color.slice(1));
    colorOrSize.push(colors);
  } else if (groceryList[produce]['type'] === 'vegetable') {
    colorOrSize.push(groceryList[produce]['size'].toUpperCase());
  }
}

console.log(colorOrSize);

/*
15. Write some code to return an array which contains only the objects
where [all] the numbers are even.
*/

let beforeEven = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let evenOnly = beforeEven.filter(obj => {
  console.log(Object.values(obj));
  //this makes the num array values go inside another array -- it becomes nested
  // in this nested array, every() is used to check inner array,
  // where another every() is used to finally check if numbers
  // inside are all even.
  return Object.values(obj).every(subArr => { //makes sense to put all arrays together
    return subArr.every(num => num % 2 === 0);
  });
});

// having 2 every() makes sure every array in each nested array has all even

// => [ { e: [ 8 ], f: [ 6, 10 ] } ]
console.log(evenOnly);

//////////////////////////////////////////

/*
16. write some code that returns an object where the
key is the first item in each subarray,
and the value is the second.

reverse of the entries method (basically)
*/

let entryArr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

let entryObj = {};

entryArr.forEach(arr => {
  entryObj[arr[0]] = arr[1];
});

console.log(entryObj);

// fromEntries!

let easyEntryObj = Object.fromEntries(entryArr);

console.log(easyEntryObj);

//////////////////////////////////////////

/*
17. Write a function that takes no arguments and
returns a string that contains a UUID.

UUID = identifier
- 32 hexadecimal char
digits:
(0 - 9)
letters:
(a - f)

value is broken down into 5 sections in pattern:
8-4-4-4-12 pattern
*/

function uuid() {
  const digOrAlph = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    'a','b','c','d','e','f'];

  let uuidArr = [];

  for (let count = 0; count < 32; count++) {
    let digitOrRandomIndex = Math.floor(Math.random() * digOrAlph.length);
    let randDigOrAlph = digOrAlph[digitOrRandomIndex];
    uuidArr.push(randDigOrAlph);
  }

  let first = uuidArr.slice(0, 8).join('');
  let second = uuidArr.slice(8, 12).join('');
  let third = uuidArr.slice(12, 16).join('');
  let fourth = uuidArr.slice(16, 20).join('');
  let fifth = uuidArr.slice(20).join('');

  console.log(`${first}-${second}-${third}-${fourth}-${fifth}`);
}

uuid();

//LS version

function generateUUID() {
  let characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  let sections = [8, 4, 4, 4, 12];

  let uuid = '';
  sections.forEach((section, sectionIndex) => {
    for (let index = 1; index <= section; index++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      uuid += characters[randomIndex];
    }

    if (sectionIndex < sections.length - 1) {
      uuid += '-';
    }
  });

  return uuid;
}

generateUUID();
generateUUID();
generateUUID();