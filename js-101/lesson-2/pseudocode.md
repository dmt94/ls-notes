#### Pseudocode

is for humans. Relaxed format. 

Step one is to load problem into our brain.
Absorbing the problem.

1. Absorb problem
2. Dissect problem 
3. Understand problem
4. Plan the path

**Pseudocode Example:**

Given a collection of numbers.

Iterate through the collection one by one.
  - save the first value as the starting value.
  - for each iteration, compare the saved value with the current value.
  - if the current number is greater
    - reassign the saved value as the current value
  - otherwise, if the current value smaller or equal
    - move to the next value in the collection

After iterating through the collection, return the saved value.
___

When solving a problem, there is the:
- logical aspect and the syntax involved

**2 layers of solving any problem:** 

1. Logical problem domain layer
2. Syntactical programming language layer

**Next Steps**

`Formalize pseudocode` by using keywords that helps translating to code more natural

Verify logic by `translating` it to program code. 

| Keyword   |   Meaning   |
|  -----    |    -----    |
|  START    |    `start` of the program    |
|  SET      |    `set` a variable that we can use later    |
|  GET      |    `retrieve` input from user    |
|  PRINT    |    `display` output to user    |
|  READ     |    `retrieve` a value from a variable    |
|  IF/ELSE  |    show `conditional` branches in logic    |
|  WHILE    |    show `looping` logic    |
|  END      |    `end` of program    |


##### Advantage of formal pseudocode #####

- gives more structure to pseudocode
- adds more detail to our process
- no requirement of using programming language syntax yet

```
# Given a collection of integers called "numbers"

SET iterator = 1
SET savedNumber = value within numbers collection at space 1

WHILE iterator <= length of numbers
  SET currentNumber = value within numbers collection at space "iterator"
  IF currentNumber > savedNumber
    savedNumber = currentNumber
  ELSE
    skip to the next iteration

  iterator = iterator + 1

PRINT savedNumber

END

```
___

##### Real Problems #####

We need to take a `piecemeal approach` when writing pseudocode: 

- write pseudocode 
- translate to JS to verify logic 
- move on to the next piece of the problem
- absorbing problem while verifying logic step-by-step