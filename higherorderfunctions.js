const vehicles = [
  { name: 'Ferrari', type: 'car' },
  { name: 'ChrisCraft', type: 'boat' },
  { name: 'Saab', type: 'car' },
  { name: 'Skoda', type: 'car' },
  { name: 'Cessna', type: 'aeroplane' },
];

// Old way (for loop)

let cars = [];

for (let i = 0; i < vehicles.length; i++) {
  if (vehicles[i].type === 'car') cars.push(vehicles[i]);
}

console.log(cars);

// Using filter function

cars = vehicles.filter(function (vehicle) {
  return vehicle.type === 'car';
});

console.log(cars);
