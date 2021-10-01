const util = require('util');
const setImmediatePromise = util.promisify(setImmediate);

const ac = new AbortController();
const signal = ac.signal;

setImmediatePromise('foobar', { signal })
  .then(console.log)
  .catch((err) => {
    if (err.name === 'AbortError')
      console.log('The immediate was aborted');
  });

ac.abort();