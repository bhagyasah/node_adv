const {
  performance,
  PerformanceObserver
} = require('perf_hooks');

const obs = new PerformanceObserver((list, observer) => {
  console.log(list.getEntries());
  console.log(list.getEntriesByName('meow'));
  observer.disconnect();
});

obs.observe({ entryTypes: ['mark'], buffered: true });

for (let n = 0; n < 3; n++)

performance.mark(`test ${n}`);
performance.mark('test');
performance.mark('meow');
