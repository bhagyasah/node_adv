const fs = require('fs')

const folderName = 'test1'

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName)
  }
} catch (err) {
  console.error(err)
}

// reaading content of dir
const folderPath = '/home/bhagya/workspace/advance-node-concept'
const res1 = fs.accessSync(folderName);
console.log('res1', res1);
const data = fs.readdirSync(folderPath)
console.log('data', data);
// renaming the folder
fs.renameSync('test1', 'bhagya')

// removing the dir 
fs.rm('bhagya', { recursive: true, force: true }, (err) => {
  if (err) {
    throw err;
  }

  console.log(`bhagya is deleted!`)
});

