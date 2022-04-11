function doubleOddIndex(arr) {
  arr.forEach(function(num, index) {
    if (index % 2 !== 0) {
      arr[index] = num * 2;
    }
  });
  return arr;
}

console.log(doubleOddIndex([0,2,1,4,7,9]));

// multiply with selection

let myNumbers = [1, 4, 3, 7, 2, 6];

function multiply(arr, specifiedValue) {
  return arr.map(num => num * specifiedValue);
}

console.log(multiply(myNumbers, 3));