const process = require('process');
const fs = require('fs');

 function MyMonitoringTool(err, origin, from) {
  fs.writeSync(
    process.stderr.fd,
    `\n Caught exception from ${from}: ${err}\n` +
    ` \n Exception origin from ${from}: ${origin}`
  );
}

process.on('uncaughtException', (err, origin) => {
  MyMonitoringTool(err, origin, 'uncoughtException')
});

process.on('uncaughtExceptionMonitor', (err, origin) => {
  MyMonitoringTool(err, origin, 'monitor');
});

process.on('unhandledRejection', (reason, promise) => {
  console.log(' \n Unhandled Rejection at:', promise, ' \n reason:', reason);
  // Application specific logging, throwing an error, or other logic here
});

setTimeout(() => {
  console.log(' \n This will still run.');
}, 500);


// setInterval(() => console.log('set interval calling'), 1000);


  function SomeResource() {
    // Initially set the loaded status to a rejected promise
    this.loaded = Promise.reject(new Error('Resource not yet loaded!'));
  }

  const resource = new SomeResource();



nonexistentFunc();
// Intentionally cause an exception, but don't catch it.

console.log('This will not run.');