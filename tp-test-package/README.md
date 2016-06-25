# tpp 

A simple testing library that is used for live testing during training sessions

## How to use

`npm i tpp`

``` js
const { ok, equals } = require('tpp')

ok(true, 'should be valid')
equals(1,1, '1 === 1')

```

When you call these methods they simply return a string that is passed in with a 'success' or 'error' at the end of the return string.

This provides the user with a visual response so they can determine if their exercise was successful or not.


