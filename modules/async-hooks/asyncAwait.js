// init async hook

const async_hooks = require('async_hooks');
const fs = require('fs');
const util = require('util');
const asyncHook = async_hooks.createHook({ init })
asyncHook.enable()

function debug(...args) {
  fs.writeFileSync(1, `${util.format(...args)}\n`, { flag: 'a' });
}

function init(asyncId, type, triggerAsyncId, resource) {
  debug(asyncId, type)
}

// two functions with async/await
const computeAnswer = async () => { 123 }
(async () => {
  await computeAnswer()
})()
