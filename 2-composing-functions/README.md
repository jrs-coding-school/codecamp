# Composing Functions

Creating a functions and calling them are great, but sometimes you want to
nest functions or compose functions together like legos.

The ability to nest functions together gives you the power to combine simple functions
and create complex functions.

The easiest way to demonstrate this concept is using algebra math.

For Example:

In basic algebra you may see equations like:

```
3q - 2 = 4

or

3 * q - 2 = 4
```

In programming, you can combine or compose functions together to create similar
formulas.

> In the previous lesson, we created add, subtract, multiply, and divide, we will be using them here.

```
function calc(q) {
  equals(
    subtract(
      multiply(3,q),
      2
    ),
    4,
    '3 * q - 2 = 4'
  )
}
```

Now we can call our calc function passing in numbers and it should tell us,
which is the right number.

```
calc(1) // wrong
calc(2) // right
```

[Live Example](/labs/2-composing-functions/demo)

## Exercises

- [Exercise 1](/labs/2-composing-functions/1)
- [Exercise 2](/labs/2-composing-functions/2)
- [Exercise 3](/labs/2-composing-functions/3)
- [Exercise 4](/labs/2-composing-functions/4)

[Home](/) | [Prev](/lessons/1-functions) | [Next](/lessons/3)
