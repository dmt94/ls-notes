#### Variable Scope ####

**A variable's scope is determined by where it is declared**

1. `global scope`

- variables that are available across your program. You can use them anywhere in the program, either globally or from inside a function or a block.

2. `local scope`

A `variable's scope` is the part of the program that can **access** that `variable` by `name`

___

#### Local Scope ###

#### `function scope` ####

- `Functions` define a new scope for **local variables**

- `Nested functions` define **nested scopes**

<br>

**Rule 1** : outer scope variables can be accessed by the inner scope

- can change variables from an inner scope and have that change affect the outer scope

- can reassign variables from an inner scope (variables that are declared with `let`)

__

**Rule 2** : inner scope variables cannot be accessed in outer scope

- if it is **declared** within an inner scope

<br>

**LOCAL VARIABLES** only come into existence when you `call` that function. Defining a function doesn't create any variables. 

<br>

**Function declaration** DEFINE the **`scope`** of the variables. Function body defines where a variable (when created via function invocation) **will be accessible !!**

<br>

**Function invocation**  allows for variables to be created and initialized with their values. Variables are immediately **discarded** once the function finishes execution and control `returns` to the main flow of the program.

<br>

```javascript
function aFunc() {
  let foo = 1;
}
```

- since `aFunc` is never invoked, the variable `foo` is never created. BUT we `foo` is still within the scope of `aFunc` and can be referred to as such.

__

**Rule 3** : peer scopes don't conflict. Two variables that share the same name that have **different local scopes** would be independent from each other.

__

**Rule 4** : nested functions have their own variable scope. We can define functions within other functions in JS. 

__

**Rule 5** : inner scope variables can **shadow** outer scope variables

- `parameters` are local variables and scoping rules apply to them 

- when an inner scope uses the same variable name as an outer scope, **`variable shadowing`** occurs. This prevents access to the **outer scope** local variable.

```javascript 
let number = 10;

[1, 2, 3].forEach(number => {
  console.log(number);
});
```

- The console.log(`number`) will use the **parameter** number and **discard** the outer scoped local variable. Variable shadowing also prevents us from making changes to the outer scoped `number`.

- variables in the innermost scope will shadow variables in the outer scope having the same name.

<br>

- Most names -- variables, parameters, function names, or class names -- can shadow names from the outer scope. The only names that don't get involved in shadowing are **property names for objects**.

___

#### `block scope` ####

- blocks are segments of one or more statements and expressions grouped by {} (opening and closing curly braces)

- `if/else` statements and the `for` and `while` loops **define** new block scopes

<br>

Rules are identical to **function scopes**

1. **Outer blocks cannot access** variables from inner scopes.

2. **Inner blocks can access** variables from outer scopes.

3. Variables defined in an inner block can **shadow** variables from outer scopes.

___

#### Not all code between curly braces is a block! #####

The code inside a **function definition** is not technically a block, but is, instead, called the **`function body`**.

Although **blocks** and **function bodies** are very similar, there are subtle differences that you will encounter in a later course. 

There are also other types of things between curly braces that are not considered blocks: 
- class definitions (introduced in a later course) and object literals are not blocks. The differences are clearer.