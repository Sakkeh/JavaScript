// Higher order functions

// Map

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
