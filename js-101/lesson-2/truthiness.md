#### Truthiness

Terms:

**`boolean`** : object whose only purpose is to convey whether it is `true` or `false`

```
let a = Boolean('Hi');
console.log(a);    // true
```

It is recommended to use the `Boolean()` function to convert a value of a different type to a `Boolean type`


**`boolean primitive type`** : primitive type that has two values `true` or `false`
___

##### Real Code

You would evaluate an expression that should evaluate as either `true` or `false` in a conditional expression.

```
let num = 5;

if (num < 10) { // same as `if ((num < 10) === true)`
  console.log("small number");
} else {
  console.log("large number");
}
```
`num < 10` evalues to `true`

##### Short-Circuit Operators

Logical operators **`&&`** and **`||`** exhibit `short-circuiting`: 

- JS stops evaluating sub-expressions once it can determine the final value

**`&&`** : 

- once JS encounters a **false** sub-expression

**`||`** : 

- once JS encounters a **true** sub-expression

---

#### Truthiness

**VALUES THAT EVALUATE AS `false`** :

- `false` 
- `undefined`
- `null`
- `0`
- `""` (empty string)
- `NaN`


Essentially, `truthiness` means that we can use any `condition` or `logical expression` 

JS considers any non-zero (and non NaN) number to be `truthy`. `This does not mean that it equals to boolean value true`