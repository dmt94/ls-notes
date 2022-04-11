
```javascript
let [ key, value ] = keyValue;
```

This code demonstrates what we call array **`destructuring assignment`**. 

In an array destructuring assignment, we can assign `elements` of the array to `multiple variables` by wrapping the variable names in brackets. 

The first element gets assigned to the first variable, the second element gets assigned to the second variable, and so on

<br>

```javascript
let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

let produceKeyValues = Object.entries(produce);
let onlyVegetables = {};

produceKeyValues.forEach(keyValue => {
  let [ key, value ] = keyValue;
  if (value === 'Vegetable') {
    onlyVegetables[key] = value;
  }
});

onlyVegetables; // => {carrot: 'Vegetable', broccoli: 'Vegetable'}
```