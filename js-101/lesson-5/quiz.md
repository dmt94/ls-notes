<style>
  .hl-pink {
    background-color: pink;
    color: black;
    font-weight: bold;
    text-align: center;
  }
  .p {
    color: pink;
    font-weight: bolder;
  }
  .y {
    color: yellow;
  }
</style>

### First-class functions ###

A
First-class functions in JavaScript must accept another function as an argument or return a function.

<span class="p">B
All JavaScript functions are first-class functions.</span>

C
Exactly one function can be passed to a JavaScript first-class function as an argument.

<span class="p">D
A first-class function can return a first-class function.</span>

___

There is no limit to the number of functions that can be passed as arguments to a first-class function.

First-class functions can be passed to or returned by any other first-class function.

___

### Higher-order functions ###

<span class="p">A
Higher-order functions must accept another function as an argument or return a function.</span>

B
JavaScript does not support higher-order functions.

C
Higher-order functions are functions that have function definitions nested within their body.

<span class="p">D
Higher-order functions can return higher-order functions.</span>

___

By definition, higher-order functions must accept a function as an argument or return a function. They can do both, of course, but they must do one of these.

JavaScript does support higher-order functions.

<span class="y">Functions that have nested function definitions are called nested functions.</span>

<strong>A higher-order function can return any function, including a function that is itself another higher-order function.</strong>
___

- <span class="p">Callback fn are first-class functions</span>
<br>
- <span class="p">Callback fn are passed as arguments to higher-order functions</span>

There is <span class="p">no limit</span> to the number of callback functions that can be passed to another function, provided that function is prepared to deal with those callbacks.