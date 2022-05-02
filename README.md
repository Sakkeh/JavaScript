# JavaScript

---

## Hoisting - var

Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration.

Variable declarations using **var** are treated as if they’re at the top of the function (or in the global scope, if declared outside of a function) regardless of where the actual declaration occurs; this is called hoisting.

```
// using test before declaring
console.log(test);   // undefined
var test;

```
