<script src="https://embed.tonicdev.com" data-element-id="my-element"></script>

### Demo Lesson 2 - Composing Functions

Using our add, subtract, multiply, divide, equals functions create these algerbra equations in code.

```
6 = 2n + 4

or

6 = 2 * n + 4
```

<div id="my-element">
// declare lib functions
const { equals } = require("notebook")("twilson63/tpp/1.0.1")
const { add, subtract, multiply, divide } = require("notebook")("twilson63/mathfn/1.0.0")

function calc (n) {
  return equals(
    add(
      multiply(2,n),
      4
    ),
    6,
    '6 = 2 * n + 4'
  )
}

calc(1)
</div>

---

#### Now you try

<script src="https://embed.tonicdev.com" data-element-id="youcandoit"></script>

<!-- anywhere else on your page -->
<div id="youcandoit">
const { equals } = require("notebook")("twilson63/tpp/1.0.1")
const { add, subtract, multiply, divide } = require("notebook")("twilson63/mathfn/1.0.0")

function ___ (/\** arguments \**/) {
  return ___
}

___(/\** ... \**/)

</div>

[Back](/lessons/2-composing-functions)
