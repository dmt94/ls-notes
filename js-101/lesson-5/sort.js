console.log([2, 11, 9, 4, 107, 1111, 21, 1].sort());
/* [
  1, 107, 11, 1111,
  2,  21,  4,    9
]

JS converted the numbers to strings and compared them by their
Unicode character codes
*/

[15, 11, 9, 4, 107, 21, 1].sort((a, b) => {
  console.log(`a is ${a} and b is ${b}`);
  return a - b;
});

/*
a is 11 and b is 15 => bc 15 - 11 = positive,
                      so '11' comes before 15; 'b' is sorted before 'a'
a is 9 and b is 11
a is 4 and b is 9
a is 107 and b is 4
a is 21 and b is 107
a is 1 and b is 21
*/