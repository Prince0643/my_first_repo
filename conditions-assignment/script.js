// Task1
let score = 78;

if (score >= 90 && score <= 100) {
    console.log("GRADE A");
} else if (score >= 80 && score <= 89) {
    console.log("GRADE B");
} else if (score >= 70 && score <= 79) {
    console.log("GRADE C");
} else if (score >= 60 && score <= 69) {
    console.log("GRADE D");
} else {
    console.log("GRADE F");
}

// Task2
let temperature = 15;

if (temperature < 0) {
    console.log("It's freezing outside! Bundle up!");
} else if (temperature >= 0 && temperature <= 15) {
    console.log("It's cold outside. Wear a jacket.");
} else if (temperature >= 16 && temperature <= 30) {
    console.log("The weather is nice. Enjoy your day!");
} else {
    console.log("It's hot outside. Stay hydrated!");
}

// Task3
let age = 19;

if (age < 13) {
    console.log("You are too young for this activity.");
} else if (age >= 13 && age <= 17) {
    console.log("You need parental permission.");
} else {
    console.log("You are eligible for this activity.");
}

// Task4
let _age = 12;
let isMember = false;
let ticketPrice = ["free", "$10", "$15"];

if (_age < 12) {
    console.log(ticketPrice[0]);
} else if (_age >= 12 && isMember == true) {
    console.log(ticketPrice[1]);
} else if (_age >= 12 && isMember == false) {
    console.log(ticketPrice[2]);
}

// Challenge
let year = 2023;

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

let result = isLeapYear(year);
console.log(result);