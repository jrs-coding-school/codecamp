# Functions

Functions are the core building blocks in javascript.

Functions allow you to name a block of statements or instructions and all them
again and again in your program.  Functions also enable you to pass them some
arguments or inputs to process and will return an output as a result.

```
Input -> Processing -> Output
 ^                        |
 |------------------------|
```

All programs have this flow, some input is gathered and processed and some output is returned. In order to manage this flow with JavaScript we use functions.

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

[Live Example](http://bl.ocks.org/twilson63/raw/8279f91a12c8b3091dbbcc3e455533ef)

> So we created a function called `add` which returns the sum of 2 numbers

## Exercises

- [Exercise 1](http://bl.ocks.org/twilson63/raw/bd49b86a71d36abcd69a8afe8d195d31/)
- [Exercise 2](http://bl.ocks.org/twilson63/raw/a76418e78c99e9af5ae276677818bb87/)
- [Exercise 3](http://bl.ocks.org/twilson63/raw/3cdfe7d3384b74336d4706d75da8691e/)
