#### LESSON 2 REFLECTIONS: ####

Better practices I've learned from debugging/coding/learning lesson 2 concepts and assignments.

___

1. Consistently named and `clear` functions is a **must**

- `Function` names should be clearly defined. It should represent what it is meant to do. Functions should be clear and simple -- the less complex the better. 

<br>

- `Functions` are pieces of a bigger complex puzzle it is attempting to create. About 10 lines should suffice.


2. Code should be **consistent** as much as possible. 


```javascript
node REPL

let n = 1; // returns undefined
n == '1';  // returns true
n === '1'; // returns false
n = '1';   // returns '1'

```

___

#### Don't beat yourself up for not getting high marks on the lesson quizzes! #### 

**Take every challenge as a LEARNING OPPORTUNITY**

## 😌 ❤️‍🔥 🙏🏼 🌱 ##

**Every tree was once a seed, then from a sprout it continues to grow 🌱 🌳**

1. On both `professional` and `personal` level, always **try** to adapt a **growth mindset**

  - Every lesson is an oppportunity to expand

  - Every perceived setback is an opportunity to re-build and gain more mastery (on any particular subject)

  - Every challenge shows you perspective and an angle that you can work with

<br>

#### The brain changes itself. Our mindset can expand with proper effort, balance, and recognition for what is our ultimate good! ####

<br>

2. We are always changing, it's up to you to decide your `path`. You **always** have a **choice** on how you want to `proceed`. 

<br>

3. Accept the frustrations and feelings of inadequacy that come from truly seeing the work you need to put **effort** in. Make an effort on what you know is `worth` it. Believe that you are able to accomplish your goals and don't be too hard on yourself for not always feeling your best. What matters is that you have the ability to pick yourself up no matter the challenge and **try!!**

<br>

#### The best gift we have ever received is the opportunity and skill to TRY ####

❤️‍🔥❤️‍🔥❤️‍🔥 **Set your heart and intention ablaze. Look straight ahead and don't take time for granted. Be present in everything that you do. Believe in the capability of the human spirit. Of YOUR spirit. You will achieve the skills necessary when you give your best self to any practice. Breathe in breathe out. You are the FIRE, AIR, WATER, and EARTH. Ground yourself while your focus, heart, and intention is set ablaze, as your movement and energy flow like the water that you're made of, and as you breath the air in every present moment given to you.** ❤️‍🔥❤️‍🔥❤️‍🔥

**" ENERGY SHIFTS BUT I REMAIN STILL "**
**" I REMAIN COMMITTED "**
**" I REMAIN GROUNDED "**
**" I GIVE MYSELF SELF COMPASSION TO MOVE FORWARD "**

___

**Lesson 2 Quiz: 19/26 (73.08%)**

I felt quite defeated by this quiz, because it showed me that truly some of the questions felt more challenging than the material actually given in lesson 2. There were some subtleties that I was unsure of. 

However, I am thankful to see my growth in understanding. The subtleties that I had trouble seeing is showing me what to focus on and is giving me a deeper understanding on the subject. I'm very satisfied about that. 

The explanations given for the questions that I got wrong clarifies the missing details and pieces of my understanding. I have deep gratitude for this.


<br>

### REVIEW ###

**Clarifications**

<br>

1. **pass-by-reference** is used when a function **`returns`** an `object` even when it used a pass-by-value when passing a primitive string as an argument

```javascript
function foo(obj) {
  return "def";
}

foo({ qux: "xyzzy" });
```

___

2. **pass-by-value** is also used when function **`returns`** a `primitive` value from the function. 

In this case, it also uses **pass-by-reference** when it passes an array argument to the function:

```javascript
function foo(a) {
  return 6;
}

foo([1, 2, 3]);
```

___

Learn how to carefully read the answers and not just assume that all of the answers are right, just because you see some potential pattern 

3. Help to **debug** problem:

- reproduce error
- determine boundaries of error
- trace code
- understand problem well
- test the fix

___

4. Best practices regarding **coercion** and **comparison**

- **avoid** implicit type coercion
- always use the **strict equality operator** (`===`) to compare values

___

5. When passing an **`object`** as an argument to a function:

- The parameter assigned to the object acts as a **pointer** to the original object.

- The function can mutate the original object.

- Re-assigning the parameter that corresponds to the object does not affect the original object.

**The function does NOT RECEIVE A COPY of that object--this is for primitive values passed**

___

6. Regarding `variable scope`:

- Scope describes where JavaScript looks for any variables used in an expression.

- `Functions` create **new scopes** in JavaScript.

- Variables declared with let and constants declared with const inside code blocks (code enclosed by curly braces {}) have local scope. Variables declared with either keyword inside a block aren't accessible outside the block.

- **Scopes exist even if there are no variables `defined` within that scope** (variable declaration is not necessary for scope to exist).

___

7. **Function declarations**

A function declaration nested within a function expression:

```javascript
let foo = function () {
  function bar() {};  
};
```

Function declaration syntax:

```javascript
function foo() {};
```

