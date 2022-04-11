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

  .p {
    color: pink;
    font-weight: bold;
  }
  .y {
    color: yellow;
    font-weight: bold;
  }
</style>

### Sort method ###

**Array of numbers**

```javascript
> [2, 11, 9, 4, 107, 21, 1].sort()
[ 1, 107, 11, 2, 21, 4, 9 ]
```
converts all the numbers to strings and compares them by their <span class="p">Unicode character codes</span>. Thus, all the numbers that begin with 1 move to the beginning of the array, then all the numbers that begin with 2 come next, and so on. The numbers are compared digit by digit, so 1 comes before 107 which comes before 11, which comes before 2. 

___

**`Sort`** called without arguments
- JS will **coerce** all the array elements 
except those that are **undefined** to their string
equivalents, then **`sort`** them using string comparisons

```javascript
> [null, 'a', true, 1].sort()
[ 1, 'a', null, true ]
```

<p class="hl-pink"><span class="b">undefined</span> values are a special case, they are always placed at the <span class="b">end</span> of the array no matter what the other values are. </p>

```javascript
> [undefined, 11, 'z', 'x', 'y', undefined].sort()
[ 11, 'x', 'y', 'z', undefined, undefined ]
```

<br>

#### Sorting Arrays of String Alphabetically ####

Calling <span class="p">sort</span> on an array of characters returns an array of characters, ordered alphabetically.

```javascript
> ['arc', 'bat', 'cape', 'ants', 'cap'].sort()
[ 'ants', 'arc', 'bat', 'cap', 'cape' ]
```

When working with `strings` that have multiple characters, sort compares them character by character, so the strings beginning with a come before those beginning with b; if both characters are the same, then the next character in each string is compared, and so on. 

___

**`Array.prototype.sort`** is an example of a function/method that has a side effect and returns a meaningful value at the same time, contrary to our advice to not mix side effects with meaningful return values. 

You can argue that that's a little deceptive; returning the sorted array might lead one to believe that it doesn't mutate the original. You'll often see such design inconsistencies in programming languages, especially JavaScript. That doesn't mean that you should emulate them -- leave breaking the rules to the experts.

___

**UTF-16**

Operators work with string by determining a character's code point in the **UTF-16 encoding**.

UTF-16 is the **code point** that determines the result when we compare one character with another using **relational operators**


If we want to compare the UTF-16 character `+` with the UTF-16 character `3`, we need to know the code point for both characters. 

We can use `String.prototype.charCodeAt` to determine that value

```javascript 
> '+'.charCodeAt()
43
> '3'.charCodeAt()
51
> '+' < '3'
true // since 43 < 51
```

<p class="p">You may sometimes see people talk about ASCII characters when talking about JavaScript's strings (and sort in particular). In fact, it uses <span class="y">UTF-16</span></p>


```javascript 
> 'A' < 'a'         // 65 < 97
true
> 'Z' < 'a'         // 90 < 97
true
> '!' < 'A'         // 33 < 65
true
```

("coming before" here, also mean numerically, their value is less than)

- Uppercase letters come before lowercase letters (sometimes called ASCIIbetical order, but that is imprecise when talking about UTF-16 code points).

- Digits and most punctuation come before letters.

- There are several punctuation characters between the uppercase and lowercase letters, and several more that come after all of the letters.

- There is an extended ASCII table that contains accented and other characters - this comes after the main ASCII table.

- All other UTF-16 characters come after the extended ASCII table and have a code point of at least 256.

___

### Generic Sorting ###

`sort` takes an optional callback argument. The return value of that callback determines the final sequence produced by the sort:

**Ascending order**

```javascript 
[2, 11, 9, 4, 107, 21, 1].sort((a, b) => a - b);
```

**number is less than, so it goes BEFORE**

1. If the callback returns a number less than 0, place a before b.

<br>

2. If the callback returns a number greater than 0 place b before a.

<br>

3. If the callback returns 0, leave the relative positions of a and b unchanged.

<br>

**Descending order**

flip the **logic** of the callback
where:

```javascript
[2, 11, 9, 4, 107, 21, 1].sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
}); // => [ 107, 21, 11, 9, 4, 2, 1 ]
```

**number is less than, so it goes AFTER**

(more succinct version)
```javascript 
[2, 11, 9, 4, 107, 21, 1].sort((a, b) => b - a);
```

b - a : 11 - 2 => positive
since **positive** return will place
`b` before `a` (which is what we want for descending order), 

the greater number will always be placed BEFORE the lesser than number





