const os = require('os');

const arch = os.arch();
console.log('arch',  arch);
const cpus = os.cpus();
console.log('cpus', cpus);
const endianness = os.endianness();
console.log('endianess', endianness);
const freemem = os.freemem();
console.log('freemem', freemem);
const hostName = os.hostname();
console.log('Hostname', hostName);
const loadavg = os.loadavg();
console.log('loadAvg', loadavg);
const networkInterface = os.networkInterfaces();
console.log('network interface', networkInterface);
const totalMem = os.totalmem();
console.log('totalmem', totalMem);