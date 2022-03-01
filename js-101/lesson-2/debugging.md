#### Debugging ####

Temperament is important. Dealing with frustration is a critical aspect of learning to program (and in life).

**Key to debugging:**

- logical mind
- patient temperament
- focus on details
- systematic approach

**Responding to problem:** 

- anticipate next error
- alternative paths 
- alternative methods

___

#### Stack Trace ####

**Online Resources**

**1. Search Engine**

After identification of error:

- study error message 

  - how did the program arrive at error condition?

- data

  - what data types were used? 

  - missing or incorrect data possibility? 

- use `search engine` to look up the error message

  - for example, search : `TypeError: Cannot read property 'filter' of undefined`

**2. Stack Overflow**

- Extremely helpful

**3. Documentation**

- MDN documentation best for core JS

___

#### Steps to Debugging ####

1. Reproduce the Error


2. Determine Boundaries of Error

- tweak data that caused the error

- how does modifying data affect the program behavior?

  - expected error or new error?

- main idea: get scope of error and determine **boundaries** of the problem


3. Trace the Code

- trace the code backwards
- check what is passed as arguments to functions
- `trapping the error`: 
    - identify the area where an error **originates**


4. Understand the Problem Well

- `inspect` values at each step at the area `where error originates`


5. Implement a Fix

- `try/catch error`
    - if you are using a library or code that you CAN'T modify, you can attempt to do implement a `try/catch error`


6. Test the Fix

- Verify code is fixed by implementing more tests

- Later, add an `automated test` to prevent `regression`

___

#### Techniques for Debugging ####

1. **Line by line**

- read code line-by-line, word-by-word, char-by-char

- details!!

2. **Rubber Duck**

- articulating problem in **detail** can often lead to the root of the problem

- walking through the code and noticing small details reveal deeper problems

3. **Walking Away**

- load problem in your brain
- take some time to process by walking away or resting for a few minutes

4. **Inspecting with a Debugger**

- `debugger` part of Node.js :

    - pauses program during execution to perform various actions from that **point** in the program execution, like: 

        - inspecting **values**

    <br>

    - `node inspect fileName.js`

    ```
    Break on start in check.js:1
    > 1 let counter = 1;
      2 
      3 while (counter <= 5) {
    ```

    means that program `execution` stopped on line 1:

    `debugger` pauses program execution at **`first`** expression or function call that it encounters in code

    `>` indicates line where execution is paused

    <br>

    - access value of any variables in scope: `exec variableName`

      - `exec counter` (point in program execution) will return `undefined` since expression has not been evaluated yet

    <br>

    - `next` or `n` from current point will continue execution and pause at the **start** of the `while` loop on line 3.

      - `exec counter` will return `1`

    <br>

    - `cont` or `c` "un-pauses" program execution and **continue** to the end (or until error)

    <br>

    - `run` or `restart` start execution again from the beginning

    <br>

    - `.exit` or `CTRL+D` exit debugger

___

**`c` with `debugger` statement**

**debugger statement** :

invokes any available debugging functionality, such as setting a `breakpoint`. No available = no effect.

```
1  let counter = 1;
2 
3  while (counter <= 5) {
4    console.log(counter);
5    debugger;
6    counter += 1;
7  }
```

Note: `debugger` on line `5`

***What does this do?***

- running `node inspect debug.js` will pause at line 1 as before, but after hitting `c` will pause execution at `debugger` statement. 

- There is a "break" at this point. 

<br>

- setting a `debugger statement` = `breakpoint`

- we can keep using `c` to pause on the `debugger statement` for each iteration of the while loop.

<br>

***How is this useful?***

- if you want to check how certain values change on each iteration of that loop

___

5. **Advanced Debugging**

- Other features of `node debugger` includes stepping into functions and more systematically step through the code (later)