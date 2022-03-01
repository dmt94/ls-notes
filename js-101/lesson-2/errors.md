#### Errors ####

JS creates an `Error object` when it can't execute a program. Object will describe the problem and **stop the program**

When error occurs: 
- program `throws` an error

- `raise exceptions`
___

##### ReferenceError #####

- occurs when you attempt to use a **variable** or **function** that doesn't exist

```javascript
a;    // Referencing a variable that doesn't exist results in a ReferenceError.
a();  // The same is true of attempting to call a function that doesn't exist.
```

##### TypeError #####

Can occur when: 

- accessing a property on a value that doesn't have any properties, like `null` or `undefined`

- trying to call something that isn't a function 

- trying to reassign a `const` variable


```javascript
> let a;       // a is declared but is empty, as it has not been set to a value.
> typeof(a);
= "undefined"

> a.name;      // TypeError: Cannot read property 'name' of undefined

> a = 1;
> a();         // TypeError: Property 'a' is not a function

> const b = 42;
> b = 3.14;    // TypeError: Assignment to constant variable.
```

<br>

##### SyntaxError #####

Occurs immediately **after loading program** but **before it runs**.

JS detects `SyntaxError` solely from the `text` of the program

```javascript
function ( {}  // SyntaxError: Unexpected token (
```

<br>

`SyntaxError` can occur while a program is running: 

```javascript
JSON.parse('not really JSON');
```
___

##### Preventing Errors #####

Errors typically occur where `assumptions` are made in code

Assumption that argument will always have a non-zero length:

```javascript
function lowerInitial(word) {
  return word[0].toLowerCase();
}

lowerInitial('Dee'); // 'd'
lowerInitial('');    // TypeError: Cannot read property 'toLowerCase' of undefined
```

<br>

##### Guard Clause #####

Guarantees data meets certain preconditions before it gets used. 

For example, check whether word contains any characters: 

```
function lowerInitial(word) {
  if (word.length === 0) {       // If word contains an empty String,
    return '-';                  // return a dash instead of proceeding.
  }

  return word[0].toLowerCase();  // word is guaranteed to have at least
}                                // 1 character, so word[0] never evaluates
                                 // as undefined.
```

##### When To Use Guard Clause #####

- when the potential of an `invalid argument` exists in your program

<br>

##### Detecting Edge Cases #####

`edge cases` : often involve values at the extreme end of the range of possible values.

```javascript
function lowerInitial(word) {
  return word[0].toLowerCase();
}
```

In the function above, the shortest possible String ( '' ) is an edge case. 

<br>

**Identifying edge cases**

- Considering the code's inputs (arguments)

    - what potential values can violate expectations in your code? 

    - think about coercion, NaN, null, undefined, property access, etc.


**Planning Your Code**

- Test your function by writing out `common use cases` and check how your function handles them

```javascript
let countries = ['Australia', 'Cuba', 'Senegal'];

alphaInsert(countries, 'Brazil');

console.log(countries.join(', '));     // Logs "Australia, Brazil, Cuba, Senegal"

//common use cases:
alphaInsert([], 'Brazil');             // Inserting in an empty Array
alphaInsert(['Brazil'], 'Australia');  // At the beginning of an Array
alphaInsert(['Brazil'], 'Cuba');       // At the end of an Array
alphaInsert(['Brazil'], 'Brazil');     // Duplicate entry
```

Above checks `four major cases`, but more complex functions can have more.

___

#### Catching Errors ####

Although some built-in JS functions can throw exceptions, there is **no practical way to predict and avoid those errors**.

`JSON.parse`:
- takes a single `String` argument that contains some data in `JSON format` and **converts** it into an `Object`

```javascript
let data = 'not valid JSON'; // not in JSON format

JSON.parse(data);  // throws SyntaxError: Unexpected token i in JSON at position 0
```

##### What are JSON strings? #####

- look like JS `object literals`
- difference: "keys"   keys are double quoted 
- the literal values for JSON strings are inside a `string`:

```javascript
let object = { "name": "Ferdinand", "age": 13 };  // object literal
let json = '{ "name": "Ferdinand", "age": 13 }';  // JSON string
```

##### Throwing an error for `JSON.parse` #####

- let `JSON.parse` throw a `SyntaxError`
- `catch` error with a `try/catch/finally` block

```javascript
try {
  // Do something that might fail here and throw an exception.
} catch (error) {
  // This code only runs if something in the try clause throws an exception.
  // "error" contains the exception object.
} finally {
  // This code always runs even if the above code throws an exception.
}
```
___

**Using `try/catch/finally` to handle `JSON.parse` errors**

```javascript
function parseJSON(data) {
  let result;

  try {
    result = JSON.parse(data);  // Throws an exception if "data" is invalid
  } catch (e) {
    // We run this code if JSON.parse throws an exception
    // "e" contains an Error object that we can inspect and use.
    console.log('There was a', e.name, 'parsing JSON data:', e.message);
    result = null;
  } finally {
    // This code runs whether `JSON.parse` succeeds or fails.
    console.log('Finished parsing data.');
  }

  return result;
}

let data = 'not valid JSON';

parseJSON(data);    // Logs "There was a SyntaxError parsing JSON data:
                    //       Unexpected token i in JSON at position 0"
                    // Logs "Finished parsing data."
                    // Returns null
```

**When to Use Try/Catch**

When `both ` are `true`:
1. a built-in JS function or method CAN `throw an exception` and you need to handle or prevent that exception

2. can't use `guard clause` to prevent exceeption


