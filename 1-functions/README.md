# Functions

Functions are the core building blocks in javascript.

Functions allow you to name a block of statements or instructions and call the function by name again and again in your program.  Functions also enable you to pass them some
arguments or inputs to process and will return an output as a result.

```
Input -> Processing -> Output
 ^                        |
 |------------------------|
```

All programs have this flow, some input is gathered and processed and some output is returned. In order, to manage this flow with JavaScript we use functions.

A function uses the keyword `function` which is then followed by a list of arguments, then a `{` curly bracket, this is the starting point of the statement block.  The statement block holds the statements or instructions to be processed when the function is called. In
  the statement list there should be a keyword `return` to pass `output` back to the
  caller.

Lets look at a simple example:

```
function add (a, b) {
  return a + b
}

add(1,2)
```

[Live Example](/labs/1-functions/demo)

> So we created a function called `add` which returns the sum of 2 numbers

## Exercises

- [Exercise 1](/labs/1-functions/1)
- [Exercise 2](/labs/1-functions/2)
- [Exercise 3](/labs/1-functions/3)

[Home](/) | [Next](/lessons/2-nesting-functions)
