const v8 = require('v8');

console.log(v8.getHeapCodeStatistics());


// const stream = v8.getHeapSnapshot();
// stream.pipe(process.stdout);

console.log(v8.getHeapStatistics())
