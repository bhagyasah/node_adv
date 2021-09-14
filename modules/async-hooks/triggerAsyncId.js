const { fd } = process.stdout;
const net = require('net')
const async_hooks = require('async_hooks')
const fs = require('fs');

async_hooks.createHook({
  init(asyncId, type, triggerAsyncId) {
    const eid = async_hooks.executionAsyncId();
    fs.writeSync(
      fd,
      `${type}(${asyncId}): trigger: ${triggerAsyncId} execution: ${eid}\n`);
  }
}).enable();

net.createServer((conn) => {}).listen(8080);