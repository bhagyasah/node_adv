
const process = require('process');

process.on('beforeExit', (code) => {
  console.log('Process beforeExit event with code: ', code);
});

process.on('exit', (code) => {
  console.log('Process exit event with code: ', code);
  setTimeout(() => {
    console.log('This will not run');
  }, 0);
});

// process.exit(9);

console.log('This message is displayed first.');
