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
</style>

<h3 class=""></span>
<span class=""></span>


### Higher Order Functions ###

- functions that return other functions

- focus on **array methods** that take functions as arguments

Examples:

`.forEach` is a higher order function -- we can pass another function (the callback) to `forEach` as an argument

<h3 class="p">callback functions / callbacks</h3>

- functions that we pass to other functions

___

<h3 class="y">Functions as First-Class Objects and Higher Order Functions</h3>

<span class="p">first-class value or first-class object</span> is used to describe values that meet the following conditions:

- they can be <span class="y">assigned to a variable</span> or an element of a data structure (such as an array or object)
<br>

- they can be <span class="y">passed</span> as an <span class="y">argument</span> to a function
<br>

- they can be <span class="y">returned as the return value</span> of a function
<br>


primitive values, arrays, and objects all meet this criteria. 

So do functions.

Not only can you invoke functions, but you can also pass them around your program like any other value. 

If JavaScript is your first language, this might not be a big revelation. However, if you have prior experience with some other languages, it may come as a surprise. Since <span class="y">functions can be treated as values</span>, we can create functions that can take other functions as arguments and return other functions. <span class="y">That, in turn, allows for a more declarative and expressive style of programming.</span>

___

<h3 class="p">Imperative approach</h3>

- It's called imperative since you're telling the interpreter what to do each step of the way:

```javascript
// for loop transformation
let numbers = [1, 2, 3, 4, 5];
let transformedNumbers = [];

for (let index = 0; index < numbers.length; index += 1) {
  let currentNum = numbers[index];
  let squaredNum = currentNum * currentNum;

  transformedNumbers.push(squaredNum);
}

transformedNumbers; // => [ 1, 4, 9, 16, 25 ]
```

<br>

<h3 class="p">Declarative approach</h3>

`Array.prototype.map`

```javascript
// map transformation
let numbers = [1, 2, 3, 4, 5];
let transformedNumbers = numbers.map(currentNum => currentNum * currentNum);

transformedNumbers; // => [ 1, 4, 9, 16, 25 ]
```

We're declaring what we need to do with the numbers array by saying "We want to map each element of the array to the return value of passing that element to the given callback function."

<span class="y">This declarative style of programming is possible only because we can treat functions as values.</span> 

The map method takes a function as an argument and calls it for each element of the array used to call map.

___

Functions that take other functions as arguments are called Higher Order Functions, as are functions that return other functions. In this assignment, we'll focus on array methods that take functions as arguments. 

<span class="y">Functions that we pass to other functions are often called callback functions or, more simply, callbacks.</span>

___

```javascript
[[1, 2], [3, 4]].forEach(arr => console.log(arr[0]));
// 1
// 3
// => undefined

arr => console.log(arr[0]) 
```
We are calling forEach() with a callback function, meaning that forEach() is a higher order function

<span class="hl-pink">We can pass another function (the callback) to forEach as an argument</span>

___

you should be able perform some sort of analysis that helps you understand the code.

___

<h3 class="y">Evaluating code Questions</h3>

When evaluating code , ask the following questions:

- What type of action is being performed? Method call? Callback? Conditional? Something else?
<br>

- On what value is that action performed?
<br>
- What is the side-effect of that action (e.g., output or destructive action)?
<br>
- What is the return value of that action?
<br>
- Is the return value used by whatever instigated the action?
<br>

___

```javascript
[[1, 2], [3, 4]].map(arr => {
  console.log(arr[0]);
  return arr[0];
});

logs:
1
3

returns => [1, 3]
```

**`method call (console.log)`**: 

- outputs string <span class="p">representation</span> of a Number
<br>

**`return`** value of the callback: 

- we're explicitly returning the first element of each subarray with return. 
<br>
- The callback's return value is then used by `map` to perform the <span class="p">transformation, replacing the inner array with a number.</span> 
<br>
- Finally, map returns a new array with two numbers in it.
<br>

___

<h3 class="y">Explicit return needed when using curly braces</h3>

```javascript
[[1, 2], [3, 4]].map(arr => {
  console.log(arr[0]);
  arr[0];
});

// 1
// 3
// => [undefined, undefined]
```

We removed the explicit return from the last line in the callback function. 

When using callbacks with curly braces, we must explicitly return values. 
