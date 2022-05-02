# JavaScript

---

## Data Types

### Number (integer or floating-point)

- The number type is used for integer and floating-point numbers.
- JavaScript numbers are always 64-bit floating-point, where the number is stored in bits 0 to 51, the exponent in bits 52 to 62, and the sign-in bit 63.

### String (represent textual data)

### BigInt (large integers)

### Boolean (true or false)

### undefined (not initialized value)

### null (denotes an empty value)

---

### Unary operators

### Automatic type conversion

## Hoisting - var

Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration.

Variable declarations using **var** are treated as if they’re at the top of the function (or in the global scope, if declared outside of a function) regardless of where the actual declaration occurs; this is called hoisting.

```
// using test before declaring
console.log(test);   // undefined
var test;

```

The above program works and the output will be undefined. The above program behaves as

```
// using test before declaring
var test;
console.log(test); // undefined

```
