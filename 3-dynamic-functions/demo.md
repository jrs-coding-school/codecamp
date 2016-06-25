# Lesson 3 - Demo

In this demo, we are going to implement a `sum` that can take 1 to many arguments
and return the total.

```
sum(1,2,3)
=> 6
```

<script src="https://embed.tonicdev.com" data-element-id="my-element"></script>
<div id="my-element">
const { equals } = require("notebook")("twilson63/tpp/1.0.1")
const { add } = require("notebook")("twilson63/mathfn/1.0.0")

function sum (...numbers) {
  return numbers.reduce(add, 0)
}

equals(sum(1,2,3), 6)
</div>

---

### Now you try

<script src="https://embed.tonicdev.com" data-element-id="youcandoit"></script>
<div id="youcandoit">
const { sum, equals } = require("notebook")("twilson63/tpp/1.0.1")
const { add } = require("notebook")("twilson63/mathfn/1.0.0")

function ___ (...numbers) {
  return ___
}

ok(sum)
equals(sum(3,4,5), 11)
</div>
