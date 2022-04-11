
/* we want to select ALL OF THE ELEMENTS (each object inside array)
where every KEY matches the first letter of its value pair

know that:
- if not all the keys === value[0] match, then that object will not be returned
*/

[{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => {
  return Object.keys(object).every(key => object[key][0] === key);
});

// => [ { c: 'cat', d: 'dog' } ]

/*
Object.keys(object) => returns array of that object's keys
array.every(key => )
 - every() method checks for every element in that array:
 does that element equal to the first letter of its value pair?

 key => object[key][0] === key

 - using the key to find its value pair: object[key]

 - specifying our target,
 which is the first letter of its value pair: object[key][0]

 -  key => object[key][0] === key
 asks does every key match?

-------
if some() is used,
then [{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }]
would be returned since in the first object, there is at least
one a: 'ant' pair that matches condition.
*/