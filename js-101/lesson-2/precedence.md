### Precedence ###

**OPERATOR PRECEDENCE** : 
- set of rules that dictate how JS determines which `operands` each `operator` takes

<br>

**OPERANDS** :
- values , the result of evaluating expressions (used by the operator)

- most operators have two operands, but `unary` and `ternary` operators exist (take one and three operands, respectively)

```javascript
!true  // (!)not operator is a unary operator
condition ? true : false  // ternary operator
```

ternary operator has `3 operands`:
( from left to right )
1. operand that contains the conditional statement 
2. operand evaluated if `first operand` has a `truthy` result
3. operand evaluated if `first operand` has a `falsy` result

___

#### Precedence determines the ***meaning*** of an expression! ####

- in an expression, `operators` with higher precedence are prioritized over those with lower precedence 

- which values get evaluated first can be determined by `precedence`

```javascript
let noPar = 3 + 5 * 7;     // 38
let withPar = (3 + 5) * 7; // 56
```

`Parentheses have a higher precedence over the + and * operators, they have the HIGHEST !`

___

#### Precedence controls the order of evaluation! ####

- when two operations involve operators of the `same precedence`, operations occur left-to-right (or right-to-left for some operators)

- precedence is a mechanism that determines `which operands get passed to each operator`

___

#### Operators need values to work with ####

```javascript
function value(n) {
  console.log(n);
  return n;
}

console.log(value(3) + value(5) * value(7));

/*
3
5
7
38
*/
```

**`function invocations`** like `value(3)` are **NOT VALUES**

- we cannot invoke the operators until we know what those functions `RETURN`

1. Expressions that can be evaluated are evaluated first from `left-to-right` **WITHOUT** calling any operators

<br>

2. The final result **WITH PRECEDENCE RULES** are re-evaluated afterwards.

___

- `right-to-left` evaluation occurs in: 

  - multiple assignments 

  - multiple `**` exponentiation operators

```javascript
> a = b = c = 3
> 5 ** 3 ** 2    // 1953125 (same as 5 ** (3 ** 2) = 5 ** 9)
```

___

#### Ternary Operator ( `? :` ) and short circuit operators `&&` and `||` ####

- the `subexpressions` of ternary operators and logical operators do not get evaluated unless it needs them

```javascript
> 3 ? 1 / 0 : 1 + 2  // Infinity
> 5 && 1 / 0         // Infinity
> null || 1 / 0      // Infinity
```

- If the expression is `truthy` or evaluates to a `truthy` value for `ternary operators`, the second operand is evaluated and executed, the third one does not get evaluated

<br>

- Expression will `short-circuit` as soon as JS runs into a `falsy` value when using logical operator `&&`. This value will be returned.

<br>

- Expression will `short-circuit` as soon as JS runs into a `truthy` value when using logical operator `||`. This value will be returned.

```javascript
> null ? 1 / 0 : 1 + 2  // 3
> null && 1 / 0         // null
> 5 || 1 / 0            // 5
```

- When using `&&` and `||` , the return value is always the value of the operand evaluated `LAST`

<br>

- In the case of `short-circuiting`, the expression or value that caused the short-circuiting (which is the last operand evaluated) is `returned`.