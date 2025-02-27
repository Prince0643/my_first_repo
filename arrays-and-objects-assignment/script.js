// Task 1
let book = {
    title: "The End",
    author: "Syak",
    pages: 5,
    isReload: false,
};

console.log(book.title);
console.log(book["title"]);

console.log(book.author);
console.log(book["author"]);

console.log(book.pages);
console.log(book["pages"]);

book.isReload = true;
book.genre = "Comedy";

console.log(book);


// Task2
let movies = [
    {
        title: "Ako",
        director: "Syak",
        year: 2021
    },
    {
        title: "Ikaw",
        director: "Sika",
        year: 2022,
    },
    {
        title: "Tayo",
        director: "Sita",
        year: 2019,
    }
];

console.log(movies[1].title);
movies.push({
    title: "Sila",
    director: "Suda",
    year: 2020
});
movies[0].year = 2023;

console.log(movies);


// Task3
let student = {
    name: "Prince",
    age: 22,
    subjects: ["Math", "Science", "History"]
};

console.log(student.subjects[0]);
student.subjects.push("Filipino");

console.log(student);


// Task4
let recipe = {
    name: "Salad",
    ingredients: [
        {
            name: "Lettuce",
            quantity: 1
        }
    ],
    isVegetarian: false
};

recipe.ingredients.push({
    name: "Okra",
    quantity: 2
});

console.log(recipe.ingredients[1]);
console.log(recipe);

let isLoggedIn = false;
let isAdmin = false;

if (isLoggedIn) {
    console.log("Welcome back, user!");
} else if (isAdmin) {
    console.log("Welcome, Admin!");
} else {
    console.log("Please log in.");
}