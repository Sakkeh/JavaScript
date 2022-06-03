const fs = require('fs');
const { listeners } = require('process');

// Higher order functions

// Reduce

// Example: Calculate the sum of prices in the array

const shoppinCart = [{ price: 40 }, { price: 600 }, { price: 202 }, { price: 200 }, { price: 930 }, { price: 230 }];

// Old way (for loop)
let totalAmount = 0;
for (let i = 0; i < shoppinCart.length; i++) {
  totalAmount += shoppinCart[i].price;
}
console.log(totalAmount);

// Using reduce
totalAmount = shoppinCart.reduce(function (sum, shoppingCartItem) {
  console.log('iteration', sum, shoppingCartItem);
  return sum + shoppingCartItem.price;
}, 0);
console.log(totalAmount);
// The zero valued second argument after the callback function is the
// starting value of the sum.

// The sum will be passed to the next iteration until all items
// have been processed.

// Using reduce (ES6 arrow function to shorten code)
totalAmount = shoppinCart.reduce((sum, shoppingCartItem) => sum + shoppingCartItem.price, 0);
console.log(totalAmount);

// Reduce Andvanced

// Example:

// Read file
const output = fs.readFileSync('data.txt', 'utf-8');
console.log(output);

/* OUTPUT:
    Jason Bourne;carrots;483;9
    Jason Bourne;cucumber;100;2
    Jason Bourne;strawberries;96;7
    Docker Jenkins;knife;452;2
    Docker Jenkins;plate;67;6
    Docker Jenkins;spoon;34;12
*/

// Split file into an array
const array = output.trim().split('\n');
console.log(array);

/*
  Output:
    [
      'Jason Bourne;carrots;483;9',
      'Jason Bourne;cucumber;100;2',
      'Jason Bourne;strawberries;96;7',
      'Docker Jenkins;knife;452;2',
      'Docker Jenkins;plate;67;6',
      'Docker Jenkins;spoon;34;12'
    ]
*/

// Split array lines with ; character
const arrayOfArrays = array.map((line) => line.split(';'));
console.log(arrayOfArrays);

/* 
  Output (array of arrays):
  [
    [ 'Jason Bourne', 'carrots', '483', '9' ],
    [ 'Jason Bourne', 'cucumber', '100', '2' ],
    [ 'Jason Bourne', 'strawberries', '96', '7' ],
    [ 'Docker Jenkins', 'knife', '452', '2' ],
    [ 'Docker Jenkins', 'plate', '67', '6' ],
    [ 'Docker Jenkins', 'spoon', '34', '12' ]
  ]
*/

const out = arrayOfArrays.reduce((customers, line) => {
  customers[line[0]] = customers[line[0]] || [];
  customers[line[0]].push({
    name: line[1],
    price: line[2],
    quantity: line[3],
  });
  return customers;
}, {});
console.log('output:', JSON.stringify(out, null, 2));

/* Output

    {
      "Jason Bourne": [
        {
          "name": "carrots",
          "price": "483",
          "quantity": "9"
        },
        {
          "name": "cucumber",
          "price": "100",
          "quantity": "2"
        },
        {
          "name": "strawberries",
          "price": "96",
          "quantity": "7"
        }
      ],
      "Docker Jenkins": [
        {
          "name": "knife",
          "price": "452",
          "quantity": "2"
        },
        {
          "name": "plate",
          "price": "67",
          "quantity": "6"
        },
        {
          "name": "spoon",
          "price": "34",
          "quantity": "12"
        }
      ]
    }

*/
