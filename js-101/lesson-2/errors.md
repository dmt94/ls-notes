#### Errors ####

JS creates an `Error object` when it can't execute a program. Object will describe the problem and **stop the program**

When error occurs: 
- program `throws` an error

- `raise exceptions`
___

##### ReferenceError #####

- occurs when you attempt to use a **variable** or **function** that doesn't exist

```
a;    // Referencing a variable that doesn't exist results in a ReferenceError.
a();  // The same is true of attempting to call a function that doesn't exist.
```

##### TypeError #####

Can occur when: 

- accessing a property on a value that doesn't have any properties, like `null` or `undefined`

- trying to call something that isn't a function 

- trying to reassign a `const` variable


```
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

```
function ( {}  // SyntaxError: Unexpected token (
```

<br>

`SyntaxError` can occur while a program is running: 

```
JSON.parse('not really JSON');
```
___

##### Preventing Errors #####

Errors typically occur where `assumptions` are made in code

Assumption that argument will always have a non-zero length:

```
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

```
function lowerInitial(word) {
  return word[0].toLowerCase();
}
```

In the function above, the shortest possible String ( '' ) is an edge case. 

<br>

**Identifying edge cases**

- Considering the code's inputs (arguments)

    - what potential values can violation expectations in your code? 

    - think about coercion, NaN, null, undefined, property access, etc.


**Planning Your Code**

- Test your function by writing out `common use cases` and check how your function handles them

```
let countries = ['Australia', 'Cuba', 'Senegal'];

alphaInsert(countries, 'Brazil');

console.log(countries.join(', '));     // Logs "Australia, Brazil, Cuba, Senegal"


alphaInsert([], 'Brazil');             // Inserting in an empty Array
alphaInsert(['Brazil'], 'Australia');  // At the beginning of an Array
alphaInsert(['Brazil'], 'Cuba');       // At the end of an Array
alphaInsert(['Brazil'], 'Brazil');     // Duplicate entry
```

Above checks `four major cases`, but more complex functions can have more.