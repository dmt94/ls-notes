### String Methods ###

collections of characters; they have some properties that one would associate with collections.


#### `String.prototype.charAt` ####

- The `charAt` method is nearly identical to using brackets on a string. It takes an index as an argument and **returns the character at that index in the given string**

**`charAt` and `[]` Difference**

when using indices for characters that don't exist:
**`charAt`** returns an **empty string** `('')`, while **[ ]** returns `undefined`:

```javascript 

> 'abc'[5]
undefined

> 'abc'.charAt(5)
''

> 'abc'[-2]
undefined

> 'abc'.charAt(-2)
''
```

#### `charCodeAt` ####

If you don't provide an index, charCodeAt assumes the index 0.

```javascript 
> 'abcdef'.charCodeAt()
97 // the character code for 'a'

// 'a' is at index 0 in its alling string
```

#### `String.fromCharCode` ####

The **`String.fromCharCode`** method does the opposite of **`String.prototype.charCodeAt`**. It takes a character code (Unicode code point) and returns the character represented by that character code.

```javascript 
> String.fromCharCode(97)
'a'
```

Note that **`fromCharCode`** is not a prototype method. It's instead what we call a **static method** or a function.