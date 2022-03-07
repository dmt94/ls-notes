#### Explicit Type Coercion ####

**Type coercion** : conversion of one type of value to another type. 

1. **Explicit type coercion**

<br>

2. **Implicit type coercion**
___

Explicit type coercion happens when the programmer `intentionally` uses one of the many built-in functions and operators to `coerce` one type of value to another. 

<br>

#### Coercing values to numbers ####

```javascript
> let one = Number('1')
> one
1
> typeof one
"number"
```

```javascript

Number('')              // 0
Number(null)            // 0
Number([])              // 0

Number(['3'])           // 3 (single element that can be coerced into a number)
Number([3])             // 3 (single element number)

Number([3, 2])          // NaN (multiple elements)
Number([undefined])     // 0 (single element 'undefined' in array)
Number([null])          // 0 (single element 'null' in array)
Number(['no'])          // NaN (single element with a string that can't be coerced into a number)

Number('food')          // NaN
Number(undefined)       // NaN
Number({})              // NaN

Number(true)            // 1
Number(false)           // 0
```

`NaN` stands for `Not a Number`, it is a `number type`. 
It represents a number that cannot be represented.

___

**`parseInt` and `parseFloat`**

***Operate on strings only***

- `parseInt` : converts string -> integers 


- `parseFloat` : converts strings -> floating point numbers

<br>

**`parseInt`**

- takes a string as an argument and tries to `parse` an integer number from it 

```javascript
parseInt(`12.52`)       // 12
parseInt(`+22mg`)       // 22
parseInt(`-10F`)        // -10
parseInt(`12.ignored`)  // 12
```
- `parseInt` argument can contain non-numeric characters as strings (will get ignored) as long as string begins with a digit, even if it is preceded by `+` or `-`

```javascript
parseInt('11000100', 2) // 196

//binary numbering system is base 2
```

- `parseInt` has a second argument `radix` that represents the base of the number contained in string.

<br>

**`parseFloat`**

- parses the numeric part of the string, and stops parsing once it finds a character that can't be part of a number, like `parseInt`

- accepts decimal string arguments

- `parseFloat` includes the **first** `.` period character that is part of a decimal

```javascript
parseFloat('12 grams') // 12, stopped parsing after running into ' ' character
parseFloat('22.11 mg') // 22.11
```

<br>


**`+ operator`**

- they can act as either a `unary operator` or `binary operator`:

- unary operator `+` attempts to `coerce` a value to a `number` (allows integers and decimals) : 

```javascript

+""    //empty string 
= 0

+'1'   //string '1'
= 1

+'2.3' //string '2.3'
= 2.3

+[]   //empty array 
= 0

+'not a number'  //string that doesn't represent a number
= NaN
```

- unary operator `-` can act as a binary operator or unary operator :


```javascript 
5 - 3 // '-' acts as a binary operator that subtracts 3 from 5

-4    // '-' acts as a unary operator, to obtain the negative of the number 4
```

- unary operator `-` also attempts to `coerce` a value to a `number` :


```javascript

-[]
= -0

-'100.002'
= -100.002

-['5']
= -5

-[undefined]
= -0

-['undefined']
= NaN

```
___

#### Coercing values to strings ####

**`toString`**

- can use the `toString` method on all JS data types except `null` and `undefined`

- `toString` returns a string representation of the value

***Number => String***

```javascript
> let number = 27
> number.toString()
'27'

> null.toString() 
TypeError: Cannot read properties of null

> undefined.toString()
TypeError: Cannot read properties of undefined

```

- we first assign `27` to a variable before we call `toString()` because `.` is interpreted to be part of a `floating point number`.

```javascript
console.log(27.toString()) // SyntaxError: Invalid or unexpected token
```

**Alternatives**

- can wrap literal numeric value with parenthesis

```javascript
console.log((27).toString()) // '27'
```

<br>

***Boolean => String***

```javascript
console.log(true.toString())   // 'true'
console.log(false.toString())  // 'false'
```

<br>

***Array => String***

- converts every element of an array to a string, then `concatenates` them all with a `,` between each string

```javascript
console.log([12, 22, 32].toString())   // '12,22,32'
```

- `Array.prototype.toString` treats `null` and `undefined` elements as `empty values`

```javascript 
console.log([1, null, 2, undefined, 3].toString())   // '1,,2,,3'
```


<br>

***Object => String***

- `default` behavior: returns `[object Object]`

- can be override with `custom objects` (later)

___

**The `String` Function**

```javascript 
> String(42)
'42'
> String([1, 2, 3])
'1,2,3'
> String({ a: 'foo', b: 'bar' })
'[object Object]'


> String(undefined)
'undefined'
> String(null)
'null'
```

`String` can coerce `null` and `undefined` into strings, **unlike** `toString()`. Useful to use if dealing with possible `undefined` or `null` values

___

**Template Literals**

- JS `IMPLICITLY` coerces interpolation expressions like `${evaluate}` to **string values**

```javascript
console.log(`3 * 3 is equal to ${3 * 3}.`); // '3 * 3 is equal to 9.' : value 9 is a string, like the rest of string
```