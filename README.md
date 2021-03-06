# JavaScript

---

## Reserved Words

The following words are reserved for use by the JavaScript language and cannot
be used to name variables, function parameters or object properties.

```
abstract, await, boolean, break, byte, case, catch, char,
class, const, continue, debugger, default, delete, do,
double, else, enum, export, extends, false, final, finally,
float, for, function, goto, if, implements, import, in,
instanceof, int, interface, let, long, native, new, null,
package, private, protected, public, return, short, static,
super, switch, synchronized, this, throw, throws, transient,
true, try, typeof, var, volatile, void, while, with, yield
```

These words should also be treated as reserved words as they are an important part of the language:

```
undefined, NaN, Infinity
```

## Comments

In JavaScript there are two types of comments:

Single line comments starting with // and finishing at the end of the line:

```
// this is a short comment
```

Multi-line comments starting with /_ and finishing with _/:

```
/* This is a longer comment
anything here will be ignored
*/
```

## Variables

From ES6 onwards, JavaScript uses the keywords **const** and **let** to declare variables. The keyword **const** is used when the variable will not be reassigned to another value, whereas **let** is used if the variable might be reassigned later in the program.

```
const car = 'Ford'; // This won't be assigned to another variable

let dynamic = 0; // This may change during the program

```

## Data Types

### Number (integer or floating-point)

The number type is used for integer and floating-point numbers.

JavaScript numbers are always 64-bit floating-point, where the number is stored in bits 0 to 51, the exponent in bits 52 to 62, and the sign-in bit 63.

### String (represent textual data)

The JavaScript type for representing text is the string. A string is an
immutable ordered sequence of 16-bit values, each of which typically
represents a Unicode character.

Strings are written by enclosing their content in quotes.

To include a string in a JavaScript program, simply enclose the
characters of the string within a matched pair of single or double
quotes or backticks (' or " or `).

Strings delimited with **backticks** are a feature of ES6, and allow
JavaScript expressions to be embedded within the string literal.

String examples:

```
"" // An empty string: with zero characters
'testing'
"3.14"
'name="myform"'
"Wouldn't you prefer O'Reilly's book?"
"?? is the ratio of a circle's circumference to its radius"
`"She said 'hi'", he said.`

// Example of embedded JavaScript expression in string literal using backticks
let name = "Jack";
let greeting = `Hello ${ name }.`;

// greeting == "Hello Jack."

```

### BigInt (large integers)

One of the newest features of JavaScript, defined in ES2020, is a new
numeric type known as **BigInt**.

BigInt is a numeric type whose values are integers. The type was added to
JavaScript mainly to allow the representation of 64-bit integers.

### Boolean (true or false)

The primitive type **boolean** comprises two values - false and true:

### undefined (not initialized value)

**undefined** means "not initialized" (e.g., a variable) or "not existing" (e.g., a property of an object).

### null (denotes an empty value)

**null** means "the intentional absence of any object value"

---

## Expressions and Operators

### Primary expressions

Primary expressions in JavaScript are constant or literal values, certain
language keywords, and variable references.

```
"howdy" // A string literal
3.55 // A number literal

```

### Primary expressions

Object and array initializers are expressions whose value is a newly
created object or array.

These initializer expressions are sometimes called **object literals** and **array literals**.

```
[] // An empty array: no expressions inside brackets means no elements

[2+2,5+4] // A 2-element array. First element is 4, second is 9

```

**Undefined elements** can be included in an array literal by omitting a value between commas.

```
let sparseArray = [1,,,,5];

```

**Object initializer expressions** are like array initializer expressions, but
the square brackets are replaced by curly brackets, and each
subexpression is prefixed with a property name and a colon:

```
let c = { x: 2.2, y: -1.7 }; // An object with 2 properties
let u = {}; // An empty object with no properties
u.x = 2.2; u.y = -1.7; // Now u has the same properties as p
```

In ES6, object literals have a much more feature-rich syntax (you can
find details in ??6.10). Object literals can be nested. For example:

let rectangle = {
upperLeft: { x: 2, y: 2 },
lowerRight: { x: 4, y: 5 }
};

---

## Hoisting - var

Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration.

Variable declarations using **var** are treated as if they???re at the top of the function (or in the global scope, if declared outside of a function) regardless of where the actual declaration occurs; this is called hoisting.

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

---

## Functional programming

### Higher order functions

[Link to source code](https://github.com/Sakkeh/JavaScript/blob/d3a28158fbb005d30c99e9246e71f444c3a6107f/higherorderfunctions.js)

In Javascript, functions can be assigned to variables in the same way that strings or arrays can. They can be passed into other functions as parameters or returned from them as well. A ???higher-order function??? is a function that accepts functions as parameters and/or returns a function.

Higher order functions: filter, map...

### Filter

The filter() method creates a new array with all elements that pass the test implemented by the provided function.

**Example: filtering an array**

**Old way using for loop**

```
const vehicles = [
  { name: 'Ferrari', type: 'car' },
  { name: 'ChrisCraft', type: 'boat' },
  { name: 'Saab', type: 'car' },
  { name: 'Skoda', type: 'car' },
  { name: 'Cessna', type: 'aeroplane' },
];

let cars = [];

for (let i = 0; i < vehicles.length; i++) {
  if (vehicles[i].type === 'car') cars.push(vehicles[i]);
}

console.log(cars);

OUTPUT:

[
  { name: 'Ferrari', type: 'car' },
  { name: 'Saab', type: 'car' },
  { name: 'Skoda', type: 'car' }
]
```

**Using a filter function (higher order function)**

```
const vehicles = [
  { name: 'Ferrari', type: 'car' },
  { name: 'ChrisCraft', type: 'boat' },
  { name: 'Saab', type: 'car' },
  { name: 'Skoda', type: 'car' },
  { name: 'Cessna', type: 'aeroplane' },
];

let cars = vehicles.filter(function(vehicle) {
    return vehicle.type === 'car';
});

console.log(cars);

OUTPUT:

[
  { name: 'Ferrari', type: 'car' },
  { name: 'Saab', type: 'car' },
  { name: 'Skoda', type: 'car' }
]
```

**Using a filter function (broken down into separate functions)**

```
const vehicles = [
  { name: 'Ferrari', type: 'car' },
  { name: 'ChrisCraft', type: 'boat' },
  { name: 'Saab', type: 'car' },
  { name: 'Skoda', type: 'car' },
  { name: 'Cessna', type: 'aeroplane' },
];

let isCar = function(vehicle) {
    return vehicle.type === 'car';
}
let cars = vehicles.filter(isCar);

console.log(cars);

OUTPUT:

[
  { name: 'Ferrari', type: 'car' },
  { name: 'Saab', type: 'car' },
  { name: 'Skoda', type: 'car' }
]
```

**We can use the decoupled isCar function in another function**

```
const vehicles = [
  { name: 'Ferrari', type: 'car' },
  { name: 'ChrisCraft', type: 'boat' },
  { name: 'Saab', type: 'car' },
  { name: 'Skoda', type: 'car' },
  { name: 'Cessna', type: 'aeroplane' },
];

let isCar = function(vehicle) {
    return vehicle.type === 'car';
}

// We can use the same isCar function in another function
let isEveryVehicleACar = vehicles.every(isCar);

console.log(`Every vehicle is a car: ${isEveryVehicleACar}`);

OUTPUT:

Every vehicle is a car: false

```

### Map

The map() method creates a **new array** populated with the results of calling a provided function on every element in the calling array.

**Example: Get all names of the vehicles in the vehicles array**

```
const vehicles = [
{ name: 'Ferrari', type: 'car' },
{ name: 'ChrisCraft', type: 'boat' },
{ name: 'Saab', type: 'car' },
{ name: 'Skoda', type: 'car' },
{ name: 'Cessna', type: 'aeroplane' },
];

// Old way (for loop)
let names = [];
for (let i = 0; i < vehicles.length; i++) {
  names.push(vehicles[i].name);
}
console.log(names);

// Using map (create a subset of an object)
names = vehicles.map(function (vehicle) {
  return vehicle.name;
});

console.log(names);

// Using map (crate a new object)
names = vehicles.map(function (vehicle) {
  return vehicle.name + ' is a ' + vehicle.type;
});

console.log(names);

// Using map with arrow functions (ES6)
names = vehicles.map((vehicle) => {
  return vehicle.name;
});

console.log(names);

// Using map with arrow functions (shortening code)
// Get rid of curly brackets & return word when function logic fits on one line
names = vehicles.map((vehicle) => vehicle.name);

console.log(names);

// Using map with arrow functions (shortening code)
// Replace variable names with x
names = vehicles.map((x) => x.name);

console.log(names);

```

### Reduce

The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

Reduce is the multitool of list transformations. It can be used to express any list transformation.

**Example: Calculate the sum of prices in the array**

Old way (for loop)

```
const shoppinCart = [
{ price: 40 },
{ price: 600 },
{ price: 202 },
{ price: 200 },
{ price: 930 },
{ price: 230 },
];

let totalAmount = 0;
for (let i = 0; i < shoppinCart.length; i++) {
  totalAmount += shoppinCart[i].price;
}
console.log(totalAmount);

OUTPUT: 2202
```

Using reduce

```
const shoppinCart = [
{ price: 40 },
{ price: 600 },
{ price: 202 },
{ price: 200 },
{ price: 930 },
{ price: 230 },
];

totalAmount = shoppinCart.reduce(function (sum, shoppingCartItem) {
  console.log('iteration', sum, shoppingCartItem);
  return sum + shoppingCartItem.price;
}, 0);
console.log(totalAmount);
// The zero valued second argument after the callback function is the starting value of the sum.
// The sum will be passed to the next iteration until all items
// have been processed.

OUTPUT:
iteration 0 { price: 40 }
iteration 40 { price: 600 }
iteration 640 { price: 202 }
iteration 842 { price: 200 }
iteration 1042 { price: 930 }
iteration 1972 { price: 230 }
2202

```

Using reduce (ES6 arrow function to shorten code)

```
totalAmount = shoppinCart.reduce((sum, shoppingCartItem) => sum + shoppingCartItem.price, 0);
console.log(totalAmount);

OUTPUT: 2202
```

**Example: xxx**
