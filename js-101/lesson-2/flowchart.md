#### Flowchart ####

Helps map out the `logical sequence` of a possible solution in a `visual` way
___

[flowchart](/lesson-2/flowchart_components.jpg)

`Start`

`Processing Step`: 
- variable declarations
- reassignment
- action

`Input / Output`: 
- user input 
- function input 
- return values 

`Decision`:
- Based on input 
- Should only have `2` branches.
    - If `3+` branches, use separate diamonds for each branch

`Connector`:
- Inevitable point/links between `processing` and `decisions`

___

**Imperative / Procedural Problem Solving**
- Mapping out (manually) a step-by-step logic to solve a problem
- helpful in understanding logic better
- can help with `debugging logical errors`
- ex. working with `flowcharts`


**Declarative Problem Solving**
- steps encapsulated into a simpler method
- ex. using `forEach` to iterate over an array

___

#### High Level Pseudocode and Sub-Process ####

**Example of a high-level pseudocode :**

```
while the user wants to keep going
  - ask the user for a collection of numbers
  - extract the largest one from that collection and save it
  - ask the user if they want to input another collection

return the saved list of numbers
```

`extract the largest one from that collection and save it` is a `sub-process` (which contains its own steps/logic)
- we can turn this `sub-process into a function`

<br>

**Including the sub-process logic :**

```
while the user wants to keep going
  - ask the user for a collection of numbers

  - iterate through the collection one by one.
    - save the first value as the starting value.
    - for each iteration, compare the saved value with the current value.
    - if the saved value is greater than or equal to the current number
      - move to the next value in the collection
    - otherwise, if the current value is greater than the saved value
      - reassign the saved value as the current value

  - after iterating through the collection, save the largest value into the list.
  - ask the user if they want to input another collection

return the saved list of numbers
```

Problem:
- longer pseudocode = less trust in accuracy of logic

Solution:
- extract a `logical grouping` into a `sub-process` by tackling the various pieces `separately`

___

**Example of a high-level formal pseudocode :**

```
START

SET largeNumbers = []
SET keepGoing = true

WHILE keepGoing === true
  GET "enter a collection"
  SET collection
  SET largestNumber = SUBPROCESS "extract the largest one from that collection"
  largeNumbers.push(largestNumber)
  GET "enter another collection?"
  IF "yes"
    keepGoing = true
  ELSE
    keepGoing = false

PRINT largeNumbers

END
```
`SUBPROCESS` keyword simplifies the process 

- allows us to focus on a narrow-scope for clarity and organization

[flowchart with subprocess](/lesson-2/flowchart_large_numbers.png)


- thinking about how detailed the chart and words in a flowchart and pseudocode should be, as well as `what you can extract to sub-processes` are details to think about when designing the solution to a problem

#### Where To Start ####

1. Start at high level using declarative syntax to write `pseudocode`

<br>

2. `Imperative pseudocode` to outline specifics

    - Depending on how challenging the problem is, take it ***step-by-step*** and check logic (absorb problem while verifying logic step-by-step)

<br>

3. If necessary, outline a `flowchart`, using `declarative syntax` for potential `sub-processes`

<br>

4. When ready, create `imperative pseudocode` and `flowcharts` for each `sub-processes`