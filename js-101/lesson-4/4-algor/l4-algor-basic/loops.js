/* iterating over a string and priting each characte */

let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let counter = 0;

/* while loop */
while (counter < alphabet.length) {
  console.log(alphabet[counter]);
  counter += 1;
}

/* for loop  */
for (let counter = 0; counter < alphabet.length; counter++) {
  console.log(alphabet[counter]);
}

let string = 'a b c'; //ignore space

function ignoreSpace(str) {
  let newStr = '';
  for (let index = 0; index < str.length; index++) {
    if (str[index] === ' ') {
      continue;
    }
    newStr += str[index];
  }
  return newStr;
}

console.log(string.split(' ').join(''));

console.log(ignoreSpace('a b c'));

