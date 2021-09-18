
// The following example shows a simple EventEmitter instance with a single listener. 
// The eventEmitter.on() method is used to register listeners, while the eventEmitter.emit()
//  method is used to trigger the event.

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', () => {
  console.log('an event occurred!');
});

// myEmitter.emit('event');

// Passing arguments and this to listeners

// const myEmitter = new MyEmitter();
myEmitter.on('event', function(a, b) {
  console.log(a, b, this, this === myEmitter);
  // Prints:
  //   a b MyEmitter {
  //     domain: null,
  //     _events: { event: [Function] },
  //     _eventsCount: 1,
  //     _maxListeners: undefined } true
});

//  Asynchronous vs. synchronous
myEmitter.on('event', (a, b) => {
  setImmediate(() => {
    console.log('this happens asynchronously');
  });
});

// Handling events only once
let m = 0;
myEmitter.once('event', () => {
  console.log(++m);
});

myEmitter.on('error', (err) => {
  console.error('whoops! there was an error', err);
});
// myEmitter.emit('error', new Error('whoops!'));

myEmitter.emit('event', 'a', 'b');
