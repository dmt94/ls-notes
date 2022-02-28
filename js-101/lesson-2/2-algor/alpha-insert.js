let countries = ['Australia', 'Cuba', 'Senegal'];

function alphaInsert(arr, country) {
  if (arr.length > 0) {
    for (let count of arr) {
      if (country[0] > count[0] && arr.indexOf(count) === (arr.length - 1)) {
        arr.push(country);
        return arr;
      } else if (country[0] <= count[0]) {
        arr.splice(arr.indexOf(count), 0, country);
        return arr;
      }
    }
  }
  return arr;
}//end


console.log(alphaInsert(countries, 'Thailand'));

// console.log(alphaInsert(countries, 'Taiwan'));
// console.log(alphaInsert(countries, 'Canada'));
// console.log(alphaInsert(countries, 'Zimbabwe'));

