#### Implicit Type Coercion ####

**When does it happen ?**

- When you perform an operation involving values of two different types and JS coerces the values to have the **same type**

**How do different values get coerced?**

- Depends on the **operation** and **operators** used like `==` non-strict equality operator and `+` operator

___

#### Implicit Coercion with `==` Operator

When its operands are of different value types, `==` will coerce one of its operands 

**Number and String**

```javascript
> '1' === 1 // strict equality
false
> '1' == 1  // non-strict equality
true
```

- `String` -> `Number`, then compare (`==`)

<br>

- `===` compares the two values directly, returning `false` since the two values have different types

- `==` coerces the string `'1'` into a number and then compares it with the `1` on the right-hand side


**Best practice to use strict equality `===` operator ! !**

<br>

**Number and Boolean**

```javascript
> 1 == true
true

> 3 == true
false

> 0 == false
true
```

- When comparing `boolean` with any value, `==` coerces `true` and `false` to their number **equivalents**:

    - `true` = `1`
    - `false` = `0`

<br>

**Boolean and String**

```javascript
'1' == true
true
```

- `boolean` converts to `1`
- comparison then becomes `'1' == 1`
- `String` -> `Number`, then compare (==):
  - `1 == 1` is `true`

<br>

**Undefined and Null**

```javascript 
undefined == null 
true
```
`==` considers `undefined` and `null` as equal

___

**Comparing Objects**

`==` will behave like `===`, they are only considered equal if they refer to the same object in memory 

```javascript
let arr = [];

console.log(arr == []);   // false 
console.log(arr == arr);  // true

let obj = {
  a: 'arrow',
  b: 'bees',
  c: 'courage',
  d: 'dedication'
}

let obj2 = {
  a: 'arrow',
  b: 'bees',
  c: 'courage',
  d: 'dedication'
}

let obj3 = obj; 

console.log(obj == obj2);  // false
console.log(obj == obj);   // true
console.log(obj == obj3);  // true
```

<br>

**Object and Primitive**

`object` -> `primitive` then compare (`==`)

```javascript
> '' == {}
false

> '[object Object]' == {}
true

> [] == ''
true
```

1. Plain object `{}` is coerced into string `[object Object]`, it does not equal to empty string 

2. Evaluates true, since object coerced to `[object Object]`, which is what it is being compared to (the first operand)

3. Empty array `[]` is coerced into an empty string `''`

Arrays will convert into a string.
If elements exist, it converts into string

```javascript
> [] == 0
true
```

1. Array is coerced into the string `''`

2. `''` compared with `0` 

    - `string` -> `number` : `'0'` -> `0`

3. Result becomes `0 == 0` -> `true`

<br>

```javascript
['5'] == 5 // true

['0'] == 0 // true

[] == 0    // true

['-0'] == -0    // true

-[] == -0    // true

'' == 0    // true


[true] == 1               // false : [true] -> 'true' !== 1

[true] == 'true'          // true 

['0'] == false            // true : false -> 0 == '0' (string '0' -> 0)


['example'] == 'example'  // true 

['5', '3', '2'] == '5,3,2'  // true

[5, 3, 2] == '5,3,2'     // true


undefined == null        // true

[undefined] == 0         // true

[null] == 0              // true

[undefined] == [null]    // false

[null] == 'null'         // false

[null] == null           // false

[undefined] == 'undefined' // false

['undefined', 'undefined'] == 'undefined,undefined'   // true ('undefined' are strings inside the array here)
```

<br>

#### Review for `==` ####

1. `Number` and `String` : 

    - `string` -> `number`

2. `Boolean` and `Any` : 

    - `boolean` -> `number`

    - `number` **==** `value`

3. `Object` and `Primitive` : 

    - `object` -> `primitive`

      = `array` -> `string` -> (depends)

      = `obj literal` -> `'[object Object]'` -> (depends)

    - `primitive` **==** `value`

4. `Undefined` and `Null` evaluate to `true` 

___

#### Implicit Coercion with the Binary `+` operator ####

`+` **unary operator** could coerce `strings` -> `numbers`, which is a form of **implicit type coercion**, BUT, some people can regard it as **explicit type coercion**

<br>

**BINARY `+` operator**

- when using the `+` operator as a binary operator--when it has 2 operands AND `one` of its operands is a `string`, the other operand is coerced to a `string` and `concatenated` with the string operand

```javascript 
> 'this whole thing is a string, even this -> ' + 100
= 'this whole thing is a string, even this -> 100'
```

<br>

**Combination of different value types**

```javascript
1 + true;       // 2 
1 + false;      // 1
true + false;   // 1
null + false;   // 0
null + null;    // 0
1 + undefined;  // NaN
```
- when both operands are a combination of number, boolean, null, or undefined values, they are converted to `numbers`

<br>

**One of the operands is an `object`**

```javascript
[1] + 2;        // "12"
[1] + '2';      // "12"
[1, 2] + 3;     // "1,23"
[] + 5;         // "5"
[] + true;      // "true"
42 + {};        // "42[object Object]"
```

- both operands are converted to `strings` and `concatenated` together with `+` operator

<br>

- `-` operator will coerce its operands and perform an arithmetic operation on them :

```javascript
[0] - true      // -1 : [0] -> '0' - 1 -> 0 - 1 = -1
[] - 5          // -5
[4] - '4'       // 0 : [4] => '4' - '4' , coerce to Number types
```

___

**Relational Operators**

- The relational operators `<`, `>`, `<=`, and `>=` are defined for **numbers** (numeric comparison) and **strings** ("lexicographic order")

```javascript 
> 1 < 2
true

> 'b' > 'a'
true
```

- if **both operands are strings**, JS compares them **`lexicographically`** otherwise converts both operands to `numbers` before comparing them

```javascript
11 > '9';       // true -- '9' is coerced to 9
'11' > 9;       // true -- '11' is coerced to 11
123 > 'a';      // false -- 'a' is coerced to NaN; any comparison with NaN is false
123 <= 'a';     // also false

true > null;    // true -- becomes 1 > 0
true > false;   // true -- also becomes 1 > 0
null <= false;  // true -- becomes 0 <= 0
undefined >= 1; // false -- becomes NaN >= 1
```