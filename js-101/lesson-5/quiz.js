const ARR = [
  { one: '1', two: 2 },
  [ { four: 5, three: 6 }, 'three' ],
  'three',
  { '2': 'two', '3': 'three' }
];

console.log(ARR[1][0]['three']);
console.log(ARR[1][0].three);

//

let todoLists = [
  {
    id: 1,
    listName: 'Groceries',
    todos: [
      { id: 1, name: 'Bread', completed: false },
      { id: 2, name: 'Milk', completed: false },
      { id: 3, name: 'Apple Juice', completed: false }
    ]
  }
];

// todoLists[0]['todos'][2]['name'] = 'Orange Juice';
todoLists[0]['todos'][2].name = 'Orange Juice';

console.log(todoLists[0]);

function evenValues(array) {
  let evens = [];

  array.forEach(value => {
    if (value % 2 === 0) {
      evens.push(value);
    }
    array.shift();
  });

  return evens;
}

console.log(evenValues([1, 3, 4, 2, 4, 6, 5, 7, 9, 10, 12]));