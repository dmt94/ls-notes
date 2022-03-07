#### Pass by Reference vs Pass by Value ####

**Pass-by-Value?**

- when you use a variable to pass an `argument` to a function, the function can't do anything that sets the original variable to a different value.

```javascript
function changeName(name) {
  name = "kirei"; // does this reassignment change the variable outside the function?
}

function anotherFunction() {
  let name = "daevah";
  changeName(name);
  console.log(name); // => logs 'daevah'
}

anotherFunction();

```

- Two different `name` variables, no direct relationship with each other. 

- When `name` from `anotherFunction` is used as an argument to `changeName`, we are **passing it by value** since re-assigning the variable does NOT affect the variable inside `anotherFunction`

<br>

**Pass-by-Reference?**

- Depending on the operation used on a mutable object (passed as a function's argument), we can refer to it as **pass-by-reference** or **pass-by-value**


```javascript
function capitalize(names) {
  for (let index = 0; index < names.length; index++) {
    names[index] = names[index][0].toUpperCase() + names[index].slice(1);
  }
}

let names = ["chris", "kevin", "naveed"];
capitalize(names);
console.log(names); // => ['Chris', 'Kevin', 'Naveed']
```

- Above is **pass-by-reference** since the function affected the original object (in its argument)

<br>

```javascript 
function capitalize(names) {
  return names.map(name => name[0].toUpperCase() + name.slice(1));
}

let names = ["chris", "kevin", "naveed"];
capitalize(names); // returns ['Chris', 'Kevin', 'Naveed']
console.log(names); // => ['chris', 'kevin', 'naveed']
```

- Above is **pass-by-value** because the function did not affect the original object. Since the `map` function returns a **new array** and therefore **not** a destructive method, the original object passed as the function's argument is not mutated. 

___

#### Primitive Values ####

- When you pass **primitive values** to functions, you can treat JavaScript like pass-by-value. 

- No operation performed on a **primitive value** can permanently **alter** the value. 

- When you pass a `primitive value` to a function, it won't affect the value of the argument passed to the function.

```javascript 
function cap(name) {
  name.toUpperCase();
}

let myName = "naveed";
cap(myName);
console.log(myName); // => 'naveed'

```
___

#### **Objects** ####

- JS exhibits a combination of behaviors from both **pass-by-reference** as well as **pass-by-value** called:
<br>

    > "**pass-by-value-of-the-reference**"

    > "**call-by-sharing**"


**IMPORTANT FACT :**

- When an operation within the function mutates its argument, it affects the original object.


**WHICH OPERATIONS MUTATE THE CALLER?:**

- `Functions` and `methods` that **mutate** their callers are called **destructive functions** or **methods**.

- Reassignment is not necessarily destructive operation, as can be seen in this code:


**Non-destructive**

`concat` returns a new array

```javascript
function addName(arr, name) {
  arr = arr.concat([name]);
}

let names = ["bob", "kim"];
addName(names, "jim");
console.log(names); // => [ 'bob', 'kim', ]
```


**Destructive**

`push` mutates the original caller array

```javascript
function addNames(arr, name) {
  arr = arr.push(name);
}

let names = ["bob", "kim"];
addNames(names, "jim");
console.log(names); // => [ 'bob', 'kim', 'jim' ]
```

___

#### Return Values ####

- when a `primitive` is passed into a function, that function receives a **COPY** of the original value. It then **`returns`** the value of the argument it received, which is **ANOTHER VALUE**

> **All operations on primitive values evaluate as new values**

```javascript 
function foo(number) {
  return number;
}

let number = 1;
let newNumber = foo(number);
console.log(number);    // 1
console.log(newNumber); // 1

number = 3;
console.log(number);    // 3
console.log(newNumber); // 1
```

`number` and `newNumber` have a value of 1, but the two variables are **NOT** linked in any way -- the values are different numbers that just happen to be equal. 

They do not reference the same value as the `return` value shows.

<br>

```javascript
function bar(array) {
  return array;
}

let array = [1, 2, 3];
let newArray = bar(array);
console.log(array === newArray); // true (they are same object)

array.push(4);
console.log(array);    // [ 1, 2, 3, 4 ]
console.log(newArray); // [ 1, 2, 3, 4 ]

```

As with other arrays and objects, `bar` receives a **pointer** (a reference) to the array. 

It then returns another reference to the **same array** to the calling code. When all is done, both `array` and `newArray` point to the **same array** in memory.

___

**Assignments and Functions**

- Similarity between `assignment` and `functions` is a useful mental model. However, it's incorrect to speak of assignment in terms of **pass-by-value** or **pass-by-reference**. In JavaScript, those terms **only apply when calling and returning from functions**, not assignments.