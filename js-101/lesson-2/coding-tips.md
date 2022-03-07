#### Feel The Burn 🔥🔥🔥 ####

Spending time on a problem/ debugging for hours can be taxing, but we retain information best when a situation/problem gets burned into long term memory. 

**Embrace your burns and remember their lessons!**

(In programming and in life!)

> If you are serious about programming and you want to do it for years and maybe decades from today, then the **hours** you put into **debugging** little things are going to help you retain knowledge for the long haul.

**You're more likely to remember things that took you a long time to solve or that caused you some embarrassment.**
___

##### Naming Things #####

- choose descriptive names

- variables names should describe the content of the variable

- be mindful of uncertainty for the value--it could change later

**IDIOMATIC NAMES** : 

- names that follow the naming convention in the Naming Conventions section of the JS Book are referred to as **idiomatic names**

- whether a name is idiomatic or not depends on what kind of **name** we're describing

___

##### Avoid Magic Numbers #####

**MAGIC NUMBERS** are numbers (or other simple value) that appears in your program ***WITHOUT ANY INFORMATION*** that describes what that number **represents**

**AVOID BY**:
- using `const` set at the **TOP LEVEL** of program

```javascript
const NUMBER_CARDS_IN_HAND = 5;

function dealHand() {
  let hand = [];
  for (let cardNumber = 0; cardNumber < NUMBER_CARDS_IN_HAND; ++cardNumber) {
    hand.push(dealCard());
  }

  return hand;
}
```

**UNCLEAR**:

```javascript
const FIRST_CHARACTER_CODE = 97;
const LAST_CHARACTER_CODE = 122;
```

**CLEAR**:
```javascript
const FIRST_CHARACTER_CODE = 'a'.charCodeAt();
const LAST_CHARACTER_CODE = 'z'.charCodeAt(); //empty argument defaults to 0 index
```
- [`.charCodeAt()`](https://github.com/dmt94/methods-properties-guide/blob/main/string/str-char-code.md) returns the Unicode code point of the character in its calling string whose index value is in its argument. No argument defaults to 0 index.

____

##### FORMATTING #####

- When indenting code, we will always use two space characters. We never use tab characters.

**CURLY BRACES**

```javascript
if (myObject.myNumber > 26) {
  console.log('Number is greater than 26');
} else {
  console.log('Number is less than or equal to 26');
}
```

**NO SEMICOLON**

Sees the next statement or expression as part of the previous line, which leads to undesired behavior

```javascript
function foo() {
  // ... some code here
  return
    42
}
```

- JS will assume that we want to `return`, but not `return 42`


**MUTATING CONSTANTS** 

- `const` declares a variable that **can't be reassigned**. This DOES NOT MEAN that the value can't be **mutated**.

- At best, mutating a value assigned to `const` variable should be generally avoided.

**`Object.freeze()`** 

- freezes an object so that its value **can't** be changed in any way

- good practice to use on constants that should never be modified 

- `Object.freeze` only works one level deep

```javascript 
const CARDS = Object.freeze([1, 2, 3]);
CARDS.push(4); // TypeError: Cannot add property 3, object is not extensible
```
____

##### Function Guidelines #####

- `Functions` should be short and limited (`10 lines or less`)

- `15 lines+` should be split 

**SIDE EFFECTS**

A function has side effects if it does **any** of the following: 

1. `Reassigns` any `non-local variable`. 

  - Reassigning a variable in the **outer scope** would be a side effect

<br>

2. `Mutates` the value of any object referenced by a non-local variable

  - Mutating an array or object argument, for instance, would be a side effect 

<br>

3. `Reads from or writes` to a file, network connection, browser, or the system hardware 

  - Side effects include writing to the **`console log`** and reading input from the terminal

<br>

4. `Raises exception without handling it`

<br>

5. `Calls another function that has side effects`

<br>

**Functions that have side effects** :

```javascript 
// side effect: logs output to the console
// returns: undefined

function displayTotal(num1, num2) {
  console.log(num1 + num2);
}

// side effect: mutates the passed-in array
// returns: updated array

function append(targetArr, valueToAppend) {
  targetArr.push(valueToAppend);
  return targetArr;
}
```

- `append function above` both returns a `useful value` **and** has a `side effect`

**Function with NO side effects** :

```javascript 
// side effect: none
// returns: a new number

function computeTotal(num1, num2) {
  return num1 + num2;
}
```

**Generally**

- Most functions should return a useful value or they should have a side effect, but **not both**.

- A function that returns an arbitrary value or that always returns the same value (such as undefined) is not usually returning a useful value.

**Exceptions to mixing side effects and return values**

- `reading from a database` -> need to `return` a value

reading `input` from the user's keyboard would usually correspond to:
- displaying a prompt 
- reading the input from terminal
- `return` a value

**accessing** a database and `reading` and `writing` **from the terminal** are **`side effects`**, but you may still **need** a `return` value

___

**`Function names`** should reflect whether **`side effects`** may occur, like:

- `displayTotal` (as name of a function that displays a total on the console)

    - "`display`" implies that you're going to do some output -- side effect -- (display on console)

- `computeTotal`
    - "`compute`" implies that you're going to `return` the value of a computation

___

**Functions should return a useful value**

`useful value` = has meaning to the **calling code**


`computeTotal` should return a number that contains the **result** of adding some numbers together

**Non useful values**

- returns arbitrary values 

- always returns the same value (ex. `undefined`)

___

##### Functions should be at the same level of abstraction #####

- Should be able to c/p function into the **REPL** and test it 

- mentally extract the function from the program and work with it in **isolation**

- function should take **input** and produce **output**

**COMPARTMENTALIZE ! !**

- goal is to build simple and good code where the functions are all at the **same layer of abstraction**

**ORGANIZE YOUR FUNCTIONS**

- simplify function names where they specify "what" to do, but leave the extra details to the actual function:

    - `deal()`
    - `hit()`
    - `stay()`

<br>

**Function Names Should Reflect What They Do**

- reflect possible side effects

```javascript
function updateTotal(total, cards) {
  // ... some code here
}
```

- "`update`" assumes that function can mutate something -- could be one of its arguments or something else in the program

  - we won't expect there to really be a `return` value 

- Use naming conventions to signify which types of functions mutate vs. which functions return values.

  - If not, it makes debugging and using the function difficult.

- Also good to avoid functions that print to the console **and** return a useful value

  > **Exception**: `function` that requests some `input` from the user and then `returns` that input. Ex. `question` function from `readline-sync`

___

#### Goal with Functions ####

- Functions should be stand-alone pieces of functionality (like LEGO blocks) that you can use to piece together larger structures.

- Large programs **combine hundreds or thousands of small functions**. 

(Later, we'll talk about organizing functions into classes and objects).

**Complex Logic**

- convoluted functions are inevitable, but level of understanding it also grows. Learn to refactor your code to reflect increased clarity.

___

#### Displaying Output ####

Some functions only display information

```javascript 
function printGreeting() {
  console.log('welcome');
}
```

- remember to prefix functions that output values with words that reflect what it does: 
    - `print`
    - `say`
    - `display`

- minimize the scope of your function's actions. 

- `Functions` should be self-contained, you should know what they do without looking at the implementation

___

#### Misc Tips ####

- watch your **indentation** `2 spaces`

  - Some JavaScript style guides recommend 4 spaces, but we use 2 spaces at Launch School.

- name your functions through the eyes of its future reader, make it readable and simple

- know when to use a regular `while` loop vs a generic `while (true) loop`

<br>

**Permissible**

1. `answer` is declared before the `while` statement

```javascript 
let answer = '';
while (answer.toLowerCase() !== 'n') {
  console.log('Continue? (y/n)');
  let answer = readline.question();
}
```

2. `break` (I prefer this)

```javascript 
while (true) {
  console.log('Continue? (y/n)');
  let answer = readline.question();
  if (answer.toLowerCase() === 'n') break;
}
```

**CLARITY > TERSNESS**

___

 You'll likely revisit JS (and its frameworks) topics over and over, and, through experience, the most important information will get burned into your long term memory.

 The first time you encounter a topic, it can be daunting. However, the more often you see it, the easier it becomes to understand and use it. 