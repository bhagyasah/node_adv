const os = require('os');

console.log(os.arch());
console.log(os.constants);
console.log(os.cpus())
console.log(os.freemem() / (1024 * 1024 * 1024))
console.log(os.homedir());
console.log(os.hostname())
console.log(os.loadavg())
console.log(os.networkInterfaces())
console.log(os.tmpdir());
console.log(os.totalmem() / (1024 * 1024 * 1024))