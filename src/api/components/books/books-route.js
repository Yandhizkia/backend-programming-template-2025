const express = require('express');

const booksController = require('./books-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/books', route);

  // Get list of books
  route.get('/', booksController.getBooks);

  // Create a new book
  route.post('/', booksController.createBook);

  app.get('/books', (request, response) => {
    const offset = request.query.offset || 25;
    const limit = request.query.limit || 10;
    response.send(`Offset: ${offset}; Limit: ${limit}`);
});
  // TODO: Get a book by id

  // TODO: Update a book by id

  // TODO: Delete a book by id
};
