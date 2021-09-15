const express = require('express');
const cluster = require('cluster');
const os = require('os');

const app = express();
const numCpu = os.cpus().length;
console.log(numCpu)
app.get('/', (req, res) => {
// const sum = longComp()
res.send(`Ok ...${process.pid}`)
// cluster.worker.kill();
});

cluster.on('listening', (worker, address) => {
  console.log(address,
    `A worker is now connected to ${address.address}:${address.port}`);
})

cluster.on('online', (worker) => {
  console.log('Yay, the worker responded after it was forked');
});

console.log(cluster.settings)

if (cluster.isMaster) {
  // console.log('current process is master');
  for(let i = 0; i < numCpu; i++) {
    cluster.fork()
  }
  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`)
    cluster.fork();
  })
} else {
  // console.log('this child process');
  app.listen(3000, () => {
    console.log(`server ${process.pid} is listen on port 3000...`)
  })
}
// app.listen(3000, () => {
//   console.log(`server ${process.pid} is listen on port 3000...`)
// })
function longComp() {
  let sum = 0;
  for (let i = 0; i < 1e9; i+= 1) {
    sum += i;
  }
  return sum;
}

// function longCompPromise() {
//   return new Promise((resolve, reject) => {
//     let sum = 0;
//     for (let i = 0; i < 1e9; i+= 1) {
//       sum += 1;
//     }
//     resolve(sum)
//   })
// }