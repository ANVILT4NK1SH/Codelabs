"use strict";
;
const book1 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
};
console.log(book1);
function logBookDetails(book) {
    console.log(`${book.title} by ${book.author} was published in ${book.year}`);
}
;
logBookDetails(book1);
function calculateArea(width, height) {
    return width * height;
}
const area = calculateArea(5, 10);
console.log(area);
let favoriteMovies = [
    {
        title: "Inception",
        year: 2010
    },
    {
        title: "The Matrix",
        year: 1999
    }
];
function addMovie(movie) {
    favoriteMovies.push(movie);
}
addMovie({ title: "Interstellar", year: 2014 });
favoriteMovies.forEach((movie) => {
    console.log(`${movie.title} ${movie.year}`);
});
function formatMessage(input) {
    return typeof input === "number" ? `The number is: ${input}` : `The string is: ${input}`;
}
console.log(formatMessage(42));
console.log(formatMessage("Hello, TypeScript!"));
function wrapInObject(value) {
    return { data: value };
}
console.log(wrapInObject("TypeScript is fun!"));
console.log(wrapInObject(100));
