
const EventEmitter  = require('events');

// const eventEmitter = new EventEmitter();

// eventEmitter.on('ready', function(){
//     console.log('Inside the on calling event Emitter function..!');
// });

// eventEmitter.emit('ready');


// eventEmitter.on('start', (arg1,arg2) => {
//     console.log(`Started function called..! Argument is ${arg1} Another Argument is ${arg2}`);
// });

// eventEmitter.on('start', (arg1,arg2) => {
//     console.log(`Started function called..! Argument is ${arg1} Another Argument is ${arg2}`);
// });

// eventEmitter.emit('start',25,50);

class BookStore extends EventEmitter{
    checkAvailability(isbn){
        console.log(`Book with ${isbn} is available`);
    }

    notifyCustomers(msg){
        console.log(`Dear Customers, we have a message for you...! ${msg}`);
        this.emit('available',['2-7588-331-99','9-2345-876-10']);
    }
}

module.exports = BookStore;