// Program to demonstrate writable.cork() method
const stream = require('stream');

// Creating a data stream with writable
const writable = new stream.Writable({
   // Writing the data from stream
   write: function(chunk, encoding, next) {
      // Converting the data chunk to be displayed
      console.log(chunk.toString());
      next();
   }
});

// Writing data
writable.write('Hi - This data is printed');

// Calling the cork() function
writable.cork();

// Again writing some data
writable.write('Welcome to TutorialsPoint !');
writable.write('SIMPLY LEARNING ');
// writable.cork();
writable.write('This data will be corked in the memory');
console.log(writable.writableCorked);
// Flushing the data from buffered memory
writable.uncork()
// writable.uncork()