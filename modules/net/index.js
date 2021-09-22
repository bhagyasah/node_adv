const net = require('net');


const server = net.createServer((socket) => {
  socket.end('Hi this is a net module server\n');
}).on('error', (err) => {
  // Handle errors here.
  throw err;
});

// Grab an arbitrary unused port.
server.listen({
  host: 'localhost',
  port: 80,
  exclusive: true
},() => {
  console.log('opened server on', server.address());
});

server.on('connection', (...args) => console.log('client conenected'))

const client = net.createConnection({ port: 80, host: 'localhost' }, () => {
  // 'connect' listener.
  console.log('connected to server!');
  client.write('world!\r\n');
});
client.on('data', (data) => {
  console.log(data.toString());
  client.end();
});
client.on('end', () => {
  console.log('disconnected from server');
});