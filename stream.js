const http = require('http')
const fs = require('fs')

// const server = http.createServer(function(req, res) {
//   console.time('res')
//   // fs.readFile(__dirname + '/sample.txt', (err, data) => {
//   //   res.end(data)
//   const stream = fs.createReadStream(__dirname + '/sample.txt')
//   stream.pipe(res)
//     console.timeEnd('res');
//   // })
//   // console.timeLog('res');
// })
// server.listen(3000, () => {
//   console.log('server started 3000 port')
// })

const myReadStream = fs.createReadStream(__dirname + '/sample.txt', 'utf8');
const myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt')

// myReadStream.on('data', function(chunk) {
//   console.log('NEW CHUNK RECV');
//   myWriteStream.write(chunk);
// })
myReadStream.pipe(myWriteStream)
