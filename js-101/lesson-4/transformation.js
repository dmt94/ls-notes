/*
Mutate argument
*/

let numArr = [1, 4, 3, 7, 2, 6];

function doubleNumbers(arr) {
  arr.forEach(function(num, index) {
    arr[index] = num * 2;
  });
  return arr;
}

console.log(doubleNumbers(numArr));