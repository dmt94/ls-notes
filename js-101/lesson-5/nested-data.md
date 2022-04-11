<style>
  .hl-pink {
    background-color: pink;
    color: black;
    font-weight: bold;
    text-align: center;
  }
  .b {
    color: blue;
    font-weight: bold;
  }

  .p {
    color: pink;
    font-weight: bold;
  }
  .y {
    color: yellow;
    font-weight: bold;
  }

  .o {
    color: orange;
    font-weight: bold;
  }
</style>

### Nested Data Structures ###

**Referencing collecting elements**

```javascript
let arr = [[1, 3], [2]];
```

#### Updating collection elements ####

Recall that JavaScript gives us a very convenient way 
to update array elements.

```javascript
let arr = [[1, 3], [2]];
arr[1] = 'hi there';
arr; // => [ [1, 3 ], 'hi there' ]
```

Inserting additional elements into inner arrays 

```javascript
let arr = [[1], [2]];

arr[0].push(3);
arr; // => [ [ 1, 3 ], [ 2 ] ]


//can also add another array instead of an integer
let arr = [[1], [2]];

arr[0].push([3]);
arr; // => [ [ 1, [ 3 ] ], [ 2 ] ]
```

`arr[0].push([3])` leaves us with a 3-layer nested data structure

___

### Other nested structures ###

```javascript
let arr = [{ a: 'ant' }, { b: 'bear' }];

arr[0]['c'] = 'cat';
arr[0].d = 'dog';
arr; // => [{ a: 'ant', c: 'cat', d: 'dog' }, { b: 'bear' }]
```

Can use bracket notation and dot notation to add additional key-value pairs to objects

___

### Variable reference for nested collections ###

A common confusing aspect when working with nested collections occurs when variables reference inner collections. Let's study some code.

```javascript
let a = [1, 3];
let b = [2];
let arr = [a, b];
arr // => [ [ 1, 3 ], [ 2 ] ]
```

The variables a and b are pointing to Array objects. When we create an array that uses these variables to specify elements, the result looks as if we've actually added the arrays to the array.

<span class="p">However, we've only added <i>references</i> to those arrays.</span>

This allows `arr` an opening to modify the arrays also referenced by `a` and `b`.

___

#### Shallow Copy ####

Sometimes, you may find that you need to copy an entire collection, perhaps to save the original collection before performing some modifications. 

There are different ways to copy different kinds of collections. In this section, we'll discuss how to **shallow copy objects** and arrays.

#### `slice()` method ####

```javascript
let arr = ['a', 'b', 'c'];
let copyOfArr = arr.slice();
copyOfArr; // => [ 'a', 'b', 'c' ];
```

<br>

#### `spread syntax` method ####

expands an array to a list of values

```javascript
let arr = ['a', 'b', 'c'];
let copyOfArr = [...arr];

copyOfArr.push('d');

arr;       // => [ 'a', 'b', 'c' ]
copyOfArr; // => [ 'a', 'b', 'c', 'd' ]
```

<p class="p">Both techniques create a shallow copy of an array: only the top level array is copied.</p> 

<p class="y">When the array contains other objects, like a nested array, then those objects are <u>shared, not copied</u>. That has major ramifications for nested collections</y> 

```javascript
let arr = [['a'], ['b'], ['c']];
let copyOfArr = arr.slice();

copyOfArr[1].push('d');

arr;       // => [ [ 'a' ], [ 'b', 'd' ], [ 'c' ] ]
copyOfArr; // => [ [ 'a' ], [ 'b', 'd' ], [ 'c' ] ]
```

When you mutate a shared object in an array or other collection, it is the shared object you are affecting rather than the collection.


The critical thing to be aware of is <span class="y">what level you're working at, especially when working with nested collections and using variables as pointers</span>. 

___

#### Shallow Copying Objects ####

`Object.assign` can be used to copy properties of one or more objects into another

```javascript
let obj1 = { a: 'foo' };
let obj2 = { b: 'bar' };

Object.assign(obj1, obj2); // => { a: 'foo', b: 'bar' }
obj1;                      // => { a: 'foo', b: 'bar' }
```

As you can see, Object.assign copies over the properties from obj2 into obj1 and returns obj1. You might be able to see that we can use Object.assign to create a copy of an object by providing an empty object as the first argument:

```javascript
let emptyO = {};

let obj1 = { a: 'foo' };
let obj2 = { b: 'bar' };

Object.assign(emptyO, obj1, obj2);
// => { a: 'foo', b: 'bar' }
```

<p class="y">Note that Object.assign only creates a <u>shallow copy</u> of the object. That is, changes to nested objects within the copy will be reflected in the original</p>

___

### Deep Copy ###

JavaScript doesn't have an explicit method or function for deep copying objects, but there is an indirect way to do it. However, <span class='y'>it only works with nested arrays and plain objects.</span> 

Objects that have methods and complex objects like dates or custom objects cannot be deep-cloned with this technique. 

<span class='p'>Most use cases of deep copying objects involve only plain objects and arrays, so this technique is useful to learn</span>

<br>

```javascript
let arr = [{ b: 'foo' }, ['bar']];
let serializedArr = JSON.stringify(arr);
let deepCopiedArr = JSON.parse(serializedArr);
```

### `JSON.stringify()` ###

- serializes any object, including arrays, that **ONLY HAVE PRIMITIVES, ARRAYS, AND PLAIN OBJECTS AS ELEMENTS**


### `JSON.parse()` ###
The JSON.parse method performs that conversion from a string back to an object.

To verify that this is indeed a deep copy, we'll modify the second element of the `deepCopiedArr` array, which itself is an array. 

If the modification doesn't show in the original arr, we can conclude that it's a deep copy:

```javascript
deepCopiedArr[1].push('baz');
deepCopiedArr; // => [ { b: 'foo' }, [ 'bar', 'baz' ] ]
arr;           // => [ { b: 'foo' }, [ 'bar' ] ]
```

Sure enough, modifying the nested array within **`deepCopiedArr`** doesn't modify the nested array inside arr.

___

### `Freezing Objects` ###

Another example of an operation not affecting objects nested within objects is the operation of freezing objects. 

What is freezing? In JavaScript, objects can be frozen using the <span class='y'>Object.freeze method</span> The method prevents objects (including arrays) from being modified.

In each case, we can't modify the object once it's frozen. 

Trying to use a method to mutate a frozen object raises an exception.

If we try to use assignment, the assignment fails silently.

<br>

Check whether an object is frozen with the 
<span class="y">Object.isFrozen</span> method:

```javascript
Object.isFrozen('abc'); // => true
```

What, exactly, does Object.freeze freeze? 

- It only freezes the object that is passed to it. 

<br>

- If the object passed to it contains other objects, those objects won't be frozen. For example, if we have a nested array, the nested objects can still be modified after passing it to Object.freeze.

<br>

- similar to a shallow copy, Object.freeze works in one level

<span class="y">In JavaScript, there's no built-in function or an easy workaround to deep-freeze objects</span>.

___

### Nested elements with different data types ###

```javascript
[[8, 13, 27], ['apple', 'banana', 'cantaloupe']].map(arr => {
  return arr.filter(item => {
    if (typeof item === 'number') {    // if it's a number
      return item > 13;
    } else {
      return item.length < 6;
    }
  });
});
// => [ [ 27 ], [ 'apple' ] ]
```

One of the main reasons that we use map in this example is not only to iterate over the array and access the nested arrays but to `return` a new array that contains the selected values. 

If we used `forEach` instead, we wouldn't have a useful return value since forEach always returns undefined. We would need to collect the desired results to an extra variable.

___

### Uneven nested elements ###

```javascript
[[[1, 2], [3, 4]], [5, 6]].map(arr => {
  return arr.map(elem => {
    if (typeof elem === 'number') { // it's a number
      return elem + 1;
    } else {                  // it's an array
      return elem.map(number => number + 1);
    }
  });
});
```

<span class="y">if / else statement</span> structure shows that:

if it encounters <span class="y">another nested array</span>, then map returns another map, which goes through the array and makes the necessary transformations.

If a <span class="y">number</span> is encountered,
then the appropriate transformation is implemented

___

<span class="o">Don't mutate the collection that you're iterating through</span> that includes selection and transformation, as well as any other iterative method provided by JavaScript arrays.

Don't make life more difficult by introducing mutating method calls in the middle of an iteration.

___

<h3 class="hl-pink">Remember</h3>

- If, at first, the code appears opaque or complex, take the time to break it down step by step.
<br>
- If necessary, use a systematic approach, such as the tabular method outlined in this assignment.
<br>
- <span class='p'>Figure out what is happening at each step</span>, paying particular attention to:
  - The return value
  <br>
  - Side effects
<br>
- Pay attention to the return values of all expressions in your code, especially where implicit return values are used.
<br>
- Make sure you have a clear understanding of the underlying concepts such as data structures, loops, iterative methods, and the callback functions passed to them.
<br>
- Be clear about the implementation of the iterative method(s) being used, particularly:
  - What values are passed to the callback?
  - What does the method do with the return value of the callback?
<br>
- If you're unclear about how a method works, a good first step is to refer to the MDN Docs.

