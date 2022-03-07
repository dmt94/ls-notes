#### Coding Tips 2 ####

**Blank Lines**

Good readability 

```javascript

const readline = require('readline-sync');

console.log('Enter your name');
let name = readline.question();

while (name.trim() === '') {
  console.log("That's an invalid name. Try again:");
  name = readline.question();
}

console.log(`Welcome ${name}!`);
console.log("What would you like to do?");
```

Use some blank lines to separate the different concerns in the code.

**Functions**

Don't mix up concerns. Don't write a function that does more than one of these strings:

- mutate a value 

- output something

- return a meaningful value

Keep scope of functions small.

**Don't mutate caller during iteration**

- you can mutate the individual elements within that collection, just not the collection itself.

```javascript 
let pairs = [[6, 'scooby'], [2, 'do'], [2, 'on'], [7, 'channel'], [3, 'two']];

pairs.forEach(pair => {
  pair.shift();
});

console.log(pairs); // logs [['scooby'], ['do'], ['on'], ['channel'], ['two']];
```

<br>

**Variable shadowing**

- Variable shadowing occurs when a local variable in an inner scope that shares the same name as a variable in an outer scope.


- Will prevent access to the **outer scope variable** from an inner scope.

```javascript
//SHADOWING:

let name = 'daevah';

['maries', 'kristoffer', 'kirei'].forEach(name => {
  // uh-oh, we cannot access the outer scoped "name"!
  console.log(`${name} ${name}`); 
});

/*
logs:
'maries maries'
'kristoffer kristoffer'
'kirei kirei'
*/


//NO SHADOWING:

let userName = 'daevah';
['maries', 'kristoffer', 'kirei'].forEach(name => {
  // uh-oh, we cannot access the outer scoped "name"!
  console.log(`${userName} ${name}`); 
});

/*
logs:
'daevah maries'
'daevah kristoffer'
'daevah kirei'
*/
```
ESLint can catch shadowing errors

<br>

**Don't use assignments `=` in conditional**

- While it can work, its intentions might be difficult to read. 

- If you really have to use it, **wrap assignment in parentheses**. This indicates it is intentional.

```javascript
let numbers = [1, 2, 3, 4, 5];
let num;

while ((num = numbers.shift())) {
  console.log(num);
}

console.log(numbers); // []
```

<br>

**Use underscore `_` for unused callback parameters**

If we don't particularly care for the elements and iterating serves to perhaps check something, etc., can use `_` as a parameter:

```javascript

let names = ['kim', 'joe', 'sam'];
names.forEach(_ => {
  console.log('Got a name!')
});

```

Also applicable to use as a placeholder for a parameter that you do not need, but still have to include.

Below, `forEach` method allows the use of the `second` parameter to indicate `index`. Still need the first parameter to reach second, so `_` is used.

First parameter is not really needed, as index is the focus of this iteration:

```javascript

let names = ['kim', 'joe', 'sam'];
names.forEach((_, index) => {
  console.log(`${index + 1}: got a name!`);
});

// logs
// => 1: Got a name!
// => 2: Got a name!
// => 3: Got a name!

```

___

#### Words of Encouragement ####

- Don't fear violating rules or be afraid to make mistakes. However, keep an eye out for improvements. 

- Coding is like writing -- there are syntactical rules, but there are also **creative ways of expression**.


##### SPEND TIME PROGRAMMING #####

- Learn to `debug` problems, 

- `struggle` with them, 

- `search` for the right terms, 

- `experiment` with the code

You'll be able to transform into a professional developer!

Believe that you **can**

