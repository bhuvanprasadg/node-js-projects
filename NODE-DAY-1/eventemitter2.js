const BookStore = require('./event');

const bookStore = new BookStore();

bookStore.on('available', (availableBooks) => {

    console.log('The Following isbns are available:');

    console.log(availableBooks);
});

bookStore.notifyCustomers('Hello');