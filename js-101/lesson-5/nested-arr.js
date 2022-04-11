let a = [1, 3];
let b = [4];

let ab = [a, b];

console.log(ab);
console.log(a);
console.log(b);

a.push(4);

console.log(ab);

ab[0][0] = 0; //since this is targeting the "a" territory, this would change it

console.log(a);
console.log(b);