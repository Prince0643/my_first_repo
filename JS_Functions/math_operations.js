// Task1
let item1 = 10;
let item2 = 20;
let item3 = 40;

let totalCost = item1 + item2 + item3;

console.log("The total cost of the items is: $" + totalCost);

// Task 2
let num1 = 10;
let num2 = 20;
let num3 = 30;

let average = (num1 + num2 + num3) / 3;

console.log("The average is: " + average);

// Task3
let number = 15;

if (number % 0) {
    console.log(number + " is an even number.");
} else {
    console.log(number + " is an odd number.");
}

// Task4
let price = 100;
let discount = 20;

let discountedPrice = (price * discount) / 100;
let calculatedPrice = price - discountedPrice;

console.log("The discounted price is: $" + calculatedPrice);

// Bonus
let finalPrice = 80;
let discountPercentage = 20;

let originalPrice = finalPrice / (1 - discountPercentage / 100);

console.log("The original price before the discount was: $" + originalPrice);

// Example
let car = {
    brand: "Ford",
    model: "Focus",
    year: 2018,
};


for (let key in car) {
    console.log(key + ": " + car[key]);
}