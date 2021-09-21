const { dir } = require('console');
const fs = require('fs');

// fs.rename('hello', 'world', (err) => {
//   if (err) throw err;
//   console.log('renamed complete');
// });
// fs.stat('hello', (err, stats) => {
//   if (err) throw err;
//   console.log(`stats: ${JSON.stringify(stats)}`);
// });

// fs.open('./hello/test.txt', 'r', (err, fd) => {
//   if (err) throw err;
//   console.log(fd)
//   fs.close(fd, (err) => {
//     if (err) throw err;
//   });
// });

// fs.open('./hello/test.txt', 'r', (err, fd) => {
//   if (err) throw err;
//   fs.fstat(fd, (err, stat) => {
//     if (err) throw err;
//     // use stat
//     console.log(stat);
//     // always close the file descriptor!
//     fs.close(fd, (err) => {
//       if (err) throw err;
//     });
//   });
// });

// async function print(path) {
//   const dir = await fs.promises.opendir(path);
//   for await (const dirent of dir) {
//     console.log(dirent.name);
//   }
// }
// print('./').catch(console.error);

const watcher = fs.watch('test.txt', { encoding: 'buffer' }, (eventType, filename) => {
  if (filename) {
    console.log(eventType,filename.toString());
    // Prints: <Buffer ...>
  }
});
setTimeout(() => {
  watcher.close()
}, 5000)