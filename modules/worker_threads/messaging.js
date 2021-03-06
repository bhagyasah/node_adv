const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) {
  const worker = new Worker(__filename);
  worker.once('message', (message) => {
    console.log(message);  // Prints 'Hello, world!'.
  });
  worker.postMessage('Hello child');
} else {
  // When a message from the parent thread is received, send it back:
  parentPort.once('message', (message) => {
    console.log(message);
    parentPort.postMessage('Hi parent ');
  });
}