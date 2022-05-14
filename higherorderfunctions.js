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

// Filter functions broken down into separate functions

let isCar = function (vehicle) {
  return vehicle.type === 'car';
};
cars = vehicles.filter(isCar);

console.log(cars);

// We can use the same isCar function in another function
let isEveryVehicleACar = vehicles.every(isCar);

console.log(`Every vehicle is a car: ${isEveryVehicleACar}`);
