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

---

## Functional programming

### Higher order functions [Link to source code:](https://github.com/Sakkeh/JavaScript/blob/d3a28158fbb005d30c99e9246e71f444c3a6107f/higherorderfunctions.js)

In Javascript, functions can be assigned to variables in the same way that strings or arrays can. They can be passed into other functions as parameters or returned from them as well. A “higher-order function” is a function that accepts functions as parameters and/or returns a function.

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
