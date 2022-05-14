// Higher order functions

// Reduce

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
