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
console.log()
console.log()
setTimeout(() => console.log('hello set timeout', 1000))
setImmediate(() => console.log('hlw setImmediate'))
const arr = [1];
  