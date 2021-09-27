const { clear } = require('console');
const process = require('process');


// process.on('warning', (warning) => {
//   console.warn(warning.name);    // 'Warning'
//   console.warn(warning.message); // 'Something happened!'
//   console.warn(warning.code);    // 'MY_WARNING'
//   console.warn(warning.stack);   // Stack trace
//   console.warn(warning.detail);  // 'This is some additional information'
// });


// Emit a warning with a code and additional detail.
process.emitWarning('Something happened!', {
  code: 'MY_WARNING',
  detail: 'This is some additional information'
});
// Emits:
// (node:56338) [MY_WARNING] Warning: Something happened!
// This is some additional information

// console.log(process.env)

// console.log(process.hrtime())

console.log(process.memoryUsage());

process.on('SIGHUP', () => {
  console.log('Got SIGHUP signal.');
});

setTimeout(() => {
  console.log('Exiting.');
  process.exit(0);
}, 100);

process.kill(process.pid, 'SIGHUP');
