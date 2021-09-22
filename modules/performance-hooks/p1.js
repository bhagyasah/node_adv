const {
  performance,
  PerformanceObserver
} = require('perf_hooks');

function someFunction() {
  let sum = 0;
  for (let i = 0; i < 1000000; i += 1) {
    sum += i;
  }
  console.log('sum', sum)
}

const wrapped = performance.timerify(someFunction);

const obs = new PerformanceObserver((list) => {
  console.log(list.getEntries()[0].duration);
  obs.disconnect();
});

obs.observe({ entryTypes: ['function'] });

// A performance timeline entry will be created
wrapped();

