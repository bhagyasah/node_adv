const EventEmitter = require('events')
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
// Only do this once so we don't loop forever
myEmitter.once('newListener', (event, listener) => {
  console.log(event)
  if (event === 'event') {
    // Insert a new listener in front
    myEmitter.on('event', () => {
      console.log('B', event);
    });
  }
});

myEmitter.on('event', () => {
  console.log('A');
});

myEmitter.on('bhagya', () =>{
  console.log('hlw bhagya')
})

myEmitter.removeListener('bhagya', () => {
  console.log('bhagya lister is removed')
})

console.log(myEmitter.listeners('event'))
console.log(myEmitter.eventNames())
console.log(myEmitter.getMaxListeners())

// myEmitter.removeAllListeners('bhagya')
myEmitter.emit('bhagya');


myEmitter.emit('event');
// Prints:
//   B
//   A