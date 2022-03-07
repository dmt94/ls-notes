console.log(-[undefined] == 0); //true : -0 and 0
console.log(-[undefined] === 0); //true : -0 and 0

console.log(Object.is(-[undefined], -0)); //true
console.log(Object.is(-[undefined], 0));  //false

console.log([null] == null); //false 
console.log([null] == 0); //true

console.log(null == 0); //


console.log([undefined] == undefined); //false 