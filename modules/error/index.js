// try {
//   const m = 1;
//   const n = m + z;
// } catch (err) {
//   // Handle the error here.
//   console.error(err)
// }

// Errors generated in this way cannot be intercepted using try…catch as they are thrown after the calling code has already exited.
// try {
//   const EventEmitter = require('events');
//   const ee = new EventEmitter();
  
//   setImmediate(() => {
//     // This will crash the process because no 'error' event
//     // handler has been added.
//     ee.emit('error', new Error('This will crash'));
//   });
// } catch (e) {
// console.error(e)
// }


// THIS WILL NOT WORK:
// const fs = require('fs');

// try {
//   fs.readFile('test.txt', (err, data) => {
//     // Mistaken assumption: throwing here...
//     if (err) {
//       // console.error(err)
//       throw err;
//     }
//   });
// } catch (err) {
//   // This will not catch the throw!
//   console.error('catch block error', err);
// }

// const cheetahify = require('./native-binding.node');

// function makeFaster() {
//   // `cheetahify()` *synchronously* calls speedy.
//   cheetahify(function speedy() {
//     throw new Error('oh no!');
//   });
// }

// makeFaster();


const arr = [1,2]

console.log(arr[5])