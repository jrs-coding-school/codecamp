# Composing Functions

Creating a functions and calling them are great, but sometimes you want to
nest functions or compose functions together like lego to create more complex
results.

The easiest way to demonstrate this concept is using math. For Example, you
may want to add a number to the result of the difference of another equation.

You also may have more complicated equations that you want to perform, but each
complicated equation is built on a group of simple equations.

In basic Math you may see equations like:

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
3 + 2t = 9
f/4 - 1 = 3


[Live Example](http://bl.ocks.org/twilson63/raw/630a2dc301e980f84e6fb20827e94fc7)

## Exercises

- [Exercise 1](http://bl.ocks.org/twilson63/raw/66bcfb3a722916eaa22730c9863612f5)
- [Exercise 2](http://bl.ocks.org/twilson63/raw/c98f67ae79da5469b7bec0c813f8bc37)
- [Exercise 3](http://bl.ocks.org/twilson63/raw/d52a28c4b723556ef7cd2e1e1c104d04)
- [Exercise 4](http://bl.ocks.org/twilson63/raw/2ddcbb0a9047ebed3540cf2e7770b0ee)
