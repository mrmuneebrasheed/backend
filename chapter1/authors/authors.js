const express = require("express");
const app = express();

const port = 8000;
app.listen(port, () => {
  console.log("Server is listening on " + port);
});

var authors = [
  {
    name: "Lawrence Nowell",
    nationality: "UK",
    books: ["Beowulf"],
  },
  {
    name: "William Shakespeare",
    nationality: "UK",
    books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"],
  },
  {
    name: "Charles Dickens",
    nationality: "US",
    books: ["Oliver Twist", "A Christmas Carol"],
  },
  {
    name: "Oscar Wilde",
    nationality: "UK",
    books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"],
  },
];

app.get("/", (req, res) => {
  res.send("Authors API");
});

app.get("/authors/:id/", (req, res) => {
  const id = req.params.id;
  res.send(`${authors[id - 1].name}, ${authors[id - 1].nationality}`);
});

app.get("/authors/:id/books/", (req, res) => {
  const id = req.params.id;
  let books = "";
  for (let i = 0; i < authors[id - 1].books.length; i++) {
    books = books.concat(`${authors[id - 1].books[i]}, `);
  }
  res.send(`${books}`);
});

app.get("/json/authors/:id/", (req, res) => {
  const id = req.params.id;
  const idObject = {
    name: authors[id - 1].name,
    nationality: authors[id - 1].nationality,
  };
  const jsonString = JSON.stringify(idObject);
  res.send(jsonString);
});

app.get("/json/authors/:id/books/", (req, res) => {
  const id = req.params.id;
  const idObject = {
    books: authors[id - 1].books,
  };
  const jsonString = JSON.stringify(idObject);
  res.send(jsonString);
});
