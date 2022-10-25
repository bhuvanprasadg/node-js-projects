const express = require("express");
const PORT = 3030;
const app = express();
const booksRouter = require("./routes/books");
const borrowRouter = require("./routes/borrow-books");
const returnRouter = require("./routes/return");
const authRouter = require("./routes/auth");
const studentRouter = require("./routes/students");

app.use('/books', booksRouter);
app.use('/students', studentRouter);
app.use('/borrow-books', borrowRouter);
app.use('/return-books', returnRouter);
app.use('/login', authRouter);
app.listen(PORT, () => {
  console.log("Lirary api is up now");
});