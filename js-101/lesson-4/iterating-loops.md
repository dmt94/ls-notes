### Iterating with for and while Loop ###


Using while loop to mutate 
an array using reassignment

```javascript 
let numbers = [1, 2, 3, 4];
let idx = 0;

while (idx < numbers.length) {
  numbers[idx] += 1;
  idx += 1;
}

console.log(numbers); // => [2, 3, 4, 5]
```

**REVIEW:** 

We can use the element assignment notation of arrays to change the value of a specific element within an array by referring to its index. 

```javascript 
let numbers = [1, 2, 3, 4];
numbers[0] = numbers[0] + 1;  // => 2
numbers;                      // => [ 2, 2, 3, 4 ]
```

___

### Generic Loops ###

In JavaScript, the most basic kind of loop uses the while statement with a conditional expression that is always true:

```javascript 
while (true) {
  // some code here
}
```

Let's add a **`break`** statement after the console.log call. When we do, the loop iterates just once since break causes JavaScript to exit the nearest loop:

```javascript 
while (true) {
  console.log('Hello!');
  break;
}
```

If we want the loop to iterate more than once, we can use a conditional statement with break so it only breaks out of the loop when a specific condition occurs. 

```javascript 
while (true) {
  let number = Math.floor(10 * Math.random());
  console.log(number);

  if (number === 5) {
    console.log('Exiting...');
    break;
  }
}
```

___

## Iterating Over Collections ##

#### Strings ####

A loop that iterates over a string and prints each character

**`while` loop**

```javascript 
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let counter = 0;

while (counter < alphabet.length) {
  console.log(alphabet[counter]);
  counter += 1;
}
```

<br>

**`for` loop**

```javascript 
let alphabet = 'abcdefghijklmnopqrstuvwxyz';

for (let counter = 0; counter < alphabet.length; counter++) {
  console.log(alphabet[counter]);
}
```

The **`for loop`** is a little more succinct as it puts the counter declaration and initialization, the looping condition, and the counter incrementing statement on a single line. 

The **`for loop`** is the preferred approach of the two when it comes to iterating over collections.

To print each `character` in the string, we need to iterate over the entire string and use string references to retrieve each `letter` based on its **`index`**.

___

#### Objects ####

We have to create an array containing all of the **keys** in the object. 
We can do this by using **`Object.keys`**, which returns an array containing all of the keys in the object. We can then use the new array of keys to iterate over the object.

```javascript 
let numberOfPets = {
  dogs: 2,
  cats: 4,
  fish: 1
};

let pets = Object.keys(numberOfPets);
let counter = 0;

while (counter < pets.length)  {
  let currentPet = pets[counter];
  let currentPetNumber = numberOfPets[currentPet];
  console.log(`I have ${currentPetNumber} ${currentPet}!`);
  counter += 1;
}
```

First, we're iterating over the array of keys, pets, and saving each **key** into the `currentPet` variable. We then use the `currentPet` key to retrieve the appropriate value from the `numberOfPets` object.

#### for/in ####

```javascript 
let numberOfPets = {
  dogs: 2,
  cats: 4,
  fish: 1
};

for (let currentPet in numberOfPets) {
  let currentPetNumber = numberOfPets[currentPet];
  console.log(`I have ${currentPetNumber} ${currentPet}!`);
}
```

Note that we can use the break statement in any while, do/while, or for loop; you aren't restricted to using it only in while (true) loops.

___

#### `continue` and `Guard Clauses` ####

The break statement lets us terminate a loop at any time. The continue statement provides a similar service, but, instead of terminating the loop, it terminates the current iteration and returns to the top of the loop.


Use a **`guard clause`** for easier readability of your code. 

- A **`guard clause`** is a **conditional statement** that protects the body of a loop or function from having to deal with values it doesn't need to handle. 

**Example:**

```javascript 
1 let numbers = [ 1, 4, 3, 7, 6, 5, 2, 1 ];
2 
3 for (let index = 0; index < numbers.length; index += 1) {
4   if (numbers[index] % 2 === 1) continue;
5 
6   let square = numbers[index] * numbers[index];
7   console.log(square);
8 }
```

We don't want the main body of our loop (lines 6 and 7) to handle odd numbers, so we use a guard clause at the top of the loop to end the current iteration of the loop and resume with the next.

Above, we use the **`continue`** statement to terminate the current iteration of the loop and perform the next. The guard clause also clearly shows that we have no further interest in odd numbers.

___

#### Note that `continue` doesn't restart the loop. ####

Guard clauses **`always`** include a **`continue`**, **`break`**, or **`return`** statement in the body of the **`if`**, depending on need. Most shouldn't do anything else, but that's not a strict rule.

Note that we used a single-line version of the if statement when writing our guard clause, contrary to the general rule that you should always use blocks with braces. 

### It's common practice to use the single-line version of the `if statement` with guard clauses, but it isn't required ###

-  the multi-line form is adequate for longer functions, especially if you have multiple guard clauses.

___

It's often tempting to go "method hunting" to search for a method to iterate over a collection, but, **if you master the basics of looping, you'll find that you can perform nearly any operation you need with the simple techniques in this assignment**. Methods can be useful, but they shouldn't be used as a crutch.

