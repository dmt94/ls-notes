/*
1. How would you order the following
array of number strings by descending numeric value
(largest number value to smallest)?
*/

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