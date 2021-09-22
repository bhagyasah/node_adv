const { monitorEventLoopDelay } = require('perf_hooks');
const h = monitorEventLoopDelay({ resolution: 20 });
h.enable();
let sum = 0;
// Do something.
for (let i = 0; i<1000; i +=1) {
  sum = sum + i;
}

h.disable();
setTimeout(() => console.log('hi'), 2000)
console.log(sum)
console.log(h.min);
console.log(h.max);
console.log(h.mean);
console.log(h.stddev);
console.log(h.percentiles);
console.log(h.percentile(50));
console.log(h.percentile(99));