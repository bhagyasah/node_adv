const process = require('process');

Promise.resolve().then(() => console.log(2));
queueMicrotask(() => console.log(3));
process.nextTick(() => console.log(1));

console.log(process.resourceUsage())

// process.stdin.pipe(process.stdout);
console.log(process.title)