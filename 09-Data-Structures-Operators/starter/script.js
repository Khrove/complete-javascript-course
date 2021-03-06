'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function({ starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}.`);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// Spread Operator
const arr = [7,8,9];
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Spread operator use cases

// Copy array
const mainMenuCopy = [...restaurant.mainMenu]

// merge arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables: Arrays, strings, maps, sets. NOT objects
const str = 'Josh';
const letters = [...str, ' ', 'J.'];
console.log(letters);

// const ingredients = [prompt('Ingredient 1:'), prompt('Ingredient 2:'), prompt('Ingredient 3:')];
// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy);

// restaurant.orderDelivery({
//   time: "22:30",
//   address: "5 Spring Head Court, Apt. B",
//   mainIndex: 2,
//   starterIndex: 2,
// });
//
// restaurant.orderDelivery({
//   address: "Bleep Bloop",
//   starterIndex: 1
// });

// Destructuring objects
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
//
// const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
// console.log(restaurantName, hours, tags);
//
// // Default values
// const { menu = [], starterMenu: starters = []} = restaurant;
// console.log(menu, starters);
//
// // Mutating Objects
// let a = 111;
// let b = 999;
// const obj = {a: 23, b: 7, c: 14};
//
// ({a, b} = obj);
// console.log(a, b);
//
// // nested objects
// const { fri: {open: o, close: c} } = openingHours;
// console.log(o, c);

// const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
//
// const [x,y,z] = arr;
// console.log(x,y,z);
//
// let [main, ,secondary] = restaurant.categories;
// console.log(main, secondary);
//
// [main, secondary] = [secondary, main];
// console.log(main, secondary);
//
// // Receive 2 return values from a function
// const [starter, main2] = restaurant.order(2, 0);
// console.log(starter, main2);
//
// // Nested Destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, ,j] = nested;
// // console.log(i, j);
// const [i, ,[j, k]] = nested;
// console.log(i,j,k);
//
// // Default Values
// const [p=1, q=1, r=1] = [8, 9];
// console.log(p, q, r);