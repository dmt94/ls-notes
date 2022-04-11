
### JS Collections ###

String values in JavaScript generally aren't regarded as collections since `strings` are a `primitive` data type, but they do exhibit some properties of collections; for example, you can extract a character or a substring from a larger string. That is why we'll cover them here with the other collections.


### Collections ###

Collections are made up of individual elements. 

___

### Element Reference ###

- Strings use an integer-based index that represents each character in the string.

- Index starts counting at zero and increments by one for the remaining index values.  You can reference a specific character using this index.

**Referencing more than one character**

`slice` method

1. `first argument` specifies the index at which to start the extraction 

<br>

2. `second argument` specifies the index where you want to end the extraction. the element in this index is not included in the return value

```javascript 
let str = 'abcdefghi';
str[2]; // => 'c'

str.slice(2, 5); // =>'cde'
```


`slice` without arguments = return copy of original string

```javascript 
'abcdefghi'.slice(); // => 'abcdefghi'
```

`slice` with negative integer arguments 

```javascript 
'abcdefghi'.slice(-4, -2); // => 'fg'
```

- slice treats them as **`string length + index`**

```javascript
-4 ==> 9 + (-4) = 5 (start)
-2 ==> 9 + (-2) = 7 (end)
```

___

### Substring vs Slice ###

1. When the start index is greater than the end index, substring swaps the two arguments while slice returns an empty string:

```javascript
'abcdef'.substring(3, 1); // => 'bc'
'abcdef'.slice(3, 1);     // => ''
```

2. When either argument is negative, `substring` treats them as 0, while, as we saw above, `slice` treats them as length + index:

```javascript 
'abcdef'.substring(-2); // => 'abcdef'
'abcdef'.slice(-2);     // => 'ef'
```

`String.prototype.slice` is preferred. Its behavior is more natural and **predictable** when dealing with these edge cases.

___

### Arrays ###

Arrays, like strings, are also ordered, zero-indexed collections.

Arrays are **lists of elements** that are ordered by index, where each element can be any value. Arrays use an integer-based index to maintain the order of its elements. A specific element can be referenced using its index.

### Important Note ###

It is important to note that **`Array.prototype.slice`** and **`String.prototype.slice`** are not the same method, even though they have the same name. Similar functionality, but separate implementation.

**Distinction:**

`String.prototype.slice` returns a **new string**
`Array.prototype.slice` returns a **new array**

___

### `slice` ###

- returns a **shallow copy** of the array 

-  This becomes important when the copied array contains objects and other arrays as elements. How would you verify that in the node console?

```javascript 
> let nestedArr = [1, [2, 3], { foo: 4 } ]
> let nestedCopy = nestedArr.slice()

> nestedCopy.push(5)
4
> nestedCopy[1].push(6)
3
> nestedCopy[2].bar = 7;
7

> nestedArr
[ 1, [ 2, 3, 6 ], { foo: 4, bar: 7 } ]
> nestedCopy
[ 1, [ 2, 3, 6 ], { foo: 4, bar: 7 }, 5 ]

```

Notice that we mutated both the **`nested array`** and the **`nested object`** using the **`nestedCopy`** variable, but those **mutations also showed up in nestedArr**. 

However, when we just added a **single element to nestedCopy, it had `no effect` on nestedArr**.

___

### `Object` ###

- Objects are another common collection data structure that, instead of using an integer-based index, **uses key-value pairs**, where the key is a string and the value can be any JavaScript value. That allows for a more expansive and descriptive collection of elements. `Object keys are also called properties`.

**Overwritten**

When initializing an object, the keys/property names must be **unique**. 

```javascript 
> let obj = { fruit: 'apple', vegetable: 'carrot', fruit: 'pear' }

> obj
{ fruit: 'pear', vegetable: 'carrot' }
```

Our object ends up with only two key-value pairs. **The first one is overwritten by the third** as they have identical keys.

___

### Element Reference Gotchas ###

There are a few things that can catch you off guard when **referencing** elements in a collection, so you need to be aware of these to avoid unintended behavior in your code.

**Out of Bounds Indices**

```javascript 
string[5]; // => undefined
array[5];  // => undefined
```

Index less than 0 also returns undefined in JavaScript

```javascript 
string[-1]; // => undefined
array[-1];  // => undefined
```

**Invalid Object Keys**

```javascript 
let obj = {a: 'foo', b: 'bar'};
obj['c']; // => undefined
```

Sometimes, though, an object contains properties with undefined values on purpose. In that case, how would we differentiate between a non-existent property vs. a property that has undefined as its value?

**`Object.prototype.hasOwnProperty`** 
```javascript 
let obj = { a: 'foo', b: 'bar', c: undefined};
obj.hasOwnProperty('c'); // => true
obj.hasOwnProperty('d'); // => false
```

___

### Difference between Arrays and Objects ###

-  Arrays uses non-negative integers as its **primary keys**.

- adding elements to the array increases the value of its length property

- changing the **`value`** of the length property causes the number of elements to change.


### Adding additional properties to arrays ###

```javascript
let arr = ['foo', 'bar', 'qux'];
arr['boo'] = 'hoo';
arr[-1] = 374;
arr;               // => [ 'foo', 'bar', 'qux', boo: 'hoo', '-1': 374 ]
arr.length;        // => 3 (not 5!)
arr.forEach(element => console.log(element)); // prints: foo, bar, qux
Object.keys(arr);  // => [ '0', '1', '2', 'boo', '-1' ]
```

Note that `arr[-1] = 374` looks like we're creating an element at index position -1. 

**In fact, the '-1' property is not really an element of the array, but is an ordinary property of the object.**

You can see this in the return value from line 4 where the property is shown as `'-1': 374.` By the same token, `arr['boo']` isn't an element of the array, but a **property** of the object.

```javascript 
arr;     => [ 'foo', 'bar', 'qux', boo: 'hoo', '-1': 374 ]
```


### Value of the length property does not change after we add non-element properties to the array. ###

Furthermore, those properties are ignored by array methods like forEach, map, and filter.

___

### Conversion ###

The fact that **`strings`** and **`arrays`** share similarities makes it intuitive to convert from one to the other, which is quite common in JavaScript code. There are a few methods that facilitate this type of conversion including String.prototype.split and Array.prototype.join.


#### `split()` ####

```javascript 
'this is a string'.split(); // => ['this is a string']
```

- when called without any arguments, returns an array with the string as its only element


```javascript 
'this is a string'.split(''); // => ['a', 'b', 'c', 'd', 'e', 'f']
```

- when called with empty string, returns characters of its calling string

Any other string provided to split as the argument will be used to separate the string using the argument as the delimiter:

```javascript 
'apple,orange,mango'.split(','); // => ['apple', 'orange', 'mango']
```

How would you join the characters in the array into a string without delimiting each character with a comma? 

```javascript 
let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
arr.join(); // => 'a,b,c,d,e,f'

arr.join(''); // => 'abcdef'
```

___

### Element Assignment ###

*Array Element Assignment*

We can use the element assignment notation of arrays to change the value of a specific element within an array by referring to its index. Say, for example, that we wanted to increment the first element of an array of numbers by 1, we could do this in the following way.

```javascript 
let numbers = [1, 2, 3, 4];
numbers[0] = numbers[0] + 1;  // => 2
numbers;                      // => [ 2, 2, 3, 4 ]
```

Modifying the array in this way is `destructive`, which
causes the array to be **mutated**

___

### Object Key Assignment ###

Object element assignment is similar. The object key is used instead of assigning a value using an index.

```javascript 
> let obj = { apple: 'Produce', carrot: 'Produce', pear: 'Produce', broccoli: 'Produce' }
> obj['apple'] = 'Fruit'
> obj.carrot = 'Vegetable'
> obj
{ apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Produce',
  broccoli: 'Produce' }
```
___

### String Character Assignment ###

 JavaScript strings are immutable and, hence, cannot be altered permanently. You can try to use the array element assignment syntax with strings without getting any errors, but it does not affect the string:

```javascript 
let str = 'bob';
str[0] = 'B'; // => 'B'
str; // => 'bob'
```

One question you might ask is why JavaScript lets you do the reassignment if it doesn't affect the original string. We'll talk about why that is in a later course.

how can one make changes to a string? Well, just create a new string with the desired changes. 

For example, we can **reassign** the str value to a new string and reassign the variable to the new value:

```javascript 
str = 'B' + str.slice(1);
str; // => 'Bob'
```


