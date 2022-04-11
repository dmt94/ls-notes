
/* exit loop once a number is hit */
while (true) {
  let number = Math.floor(10 * Math.random());
  if (number === 5) {
    console.log('Exiting...');
    break;
  }

  console.log(number);
}

/* filtering through first character in each element/name in an array */
let names = ['Pete', 'Naveed', 'Chris', 'Elizabeth', 'Wendy', 'Kim'];
let index = 0;

while (index < names.length) {
  if (names[index][0] === 'E') {
    break;
  }

  console.log(names[index]);
  index += 1;
}