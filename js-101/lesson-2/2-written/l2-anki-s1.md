#### Anki Answers ####

**Practice**: Written answers to ANKI questions without real time-restrictions. The idea here is to get comfortable articulating certain details and mastery in understanding core concepts. **It is possible !!**

**Focus**: 

- articulate concepts clearly and in correct detail 

- save certain answers if need be (in another file), but this practice is really designed to train real knowledge of fundamentals

___

1. **What is short-circuiting? How does it short-circuit in logical operators && vs | | ? Give an example.**

Short-circuiting is a behavior found in logical expressions, where certain sub-expressions do not get evaluated once JavaScript can determine the final value. In logical operator `&&`, short-circuiting will occur once a sub-expression is determined to evaluate to a `falsy` or `false value`. This value is returned and the other sub-expression is never evaluated.

```javascript
console.log(0 && arr.undefined); // returns 0
```
In the case of **logical *OR*** operator `||`, short-circuiting will occur once JS encounters the first sub-expression that can be evaluated to `true` or a `truthy value`. This value evaluated will also be returned. The other sub-expression is never evaluated.

```javascript
console.log(4 > 3 || undefined); // returns boolean true
```

___

2. **What are operators used for? What are some types?**

Operators can be used to evaluate logical expressions, comparison expressions, arithmetic expressions, and also assignment expressions. Assignmet operator `=` is a type, as well as comparison operators like `>`, `<`, `>=`, `===`, `!==`, arithmetic operators like `*`, `%`, `-`, and string operator `+` can be used to convert other data types to strings and also concatenate strings. There are unary operators that take operand like `typeof` operator. And ternary operator `? :` is used in ternary expressions, taking on three operands.


___

3. **What are logical operators? What is their return value? Which types are logical operators? What do they do?**

logical operators typically have operands that contain sub-expressions, which can be evaluated to a truthy, true, falsy, or false values. Logical AND `&&` and logical OR `||` operators return the value of the last sub-expression evaluated or a boolean value depending on its sub-expressions. Logical AND `&&` returns `true` if both of its sub-expressions evaluate to boolean `true`, and `false` if not. Logical OR `||` returns `true` if at least one of its sub-expressions evaluate to boolean `true`, and false if neither of its operands evaluate to `true`. 

```javascript 
console.log('chocolate' && 1);   // returns 1
console.log(4 > 3 && undefined); // returns undefined
console.log(4 > 3 && 3 === 3);   // returns true

console.log(1 !== 1 || null);   // returns null
console.log(4 < 3 || 5 < 3);    // returns false
console.log((2 === 2 && 1 !== 0) || false);   // returns true
```

Logical NOT `!` is a unary operator that can convert its falsy or truthy operand into a boolean value. Truthy values are converted to boolean true and falsy values are converted to boolean false. Logical NOT will return the negation of its operand's boolean value. If its operand is `true`, it will return `false` and vice versa.


```javascript
console.log(!true);   // returns false
console.log(!'false');   // returns false, string values are truthy values, so they convert to 'true' and logical NOT in this case, returns the negation of true, which is false
```
