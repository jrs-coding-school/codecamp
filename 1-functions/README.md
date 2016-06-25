# Functions

Functions are the building blocks in javascript, this is the most important concept to understand.

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

[Live Example](http://bl.ocks.org/twilson63/8279f91a12c8b3091dbbcc3e455533ef)
