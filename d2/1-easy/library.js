const express = require("express");
const res = require("express/lib/response");
const books = require("./models/books");

const app = express();

// Add a GET handler on the "/books" route that responds with the collection of
// books in an `application/json` response body.

app.get("/:books", (req,res) => {
    
})

// Add a GET handler on the "/books/:isbn" route that responds with a single
// book in an `application/json` response body. If the book is not found,
// respond with the Not Found status.

module.exports = app;
