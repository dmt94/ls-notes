

// let colors = ['stardust', 'salmon', 'wood', 'cerulean', 'forest'];

// let newA = colors.map(element => element.toUpperCase());


// console.log(newA);


// // let result = [1, 2, 3, 4, 5].map(num => num + 1);

// // console.log(result);


const obj = { a: 'able', b: 'baker', c: 'charley' };
let result = Object.values(obj).map(value => value.toUpperCase());
// => [ 'ABLE', 'BAKER', 'CHARLEY' ]

console.log(result);