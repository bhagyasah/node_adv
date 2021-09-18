const EventEmitter = require('events')
class MyEmitter extends EventEmitter {}

const ee = new MyEmitter();
function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
ee.emit('ping')