const path = require('path');

const notes = './helloExpress.js';

path.dirname(notes) // /users/joe
path.basename(notes) // notes.txt
path.extname(notes) // .txt

const name = 'joe'
const joinPath = path.join('/', 'users', name, 'notes.txt') //'/users/joe/notes.txt'
console.log('joinPath', joinPath);
const res1 = path.resolve('helloExpress.js');
console.log('res1', res1);
const res2 = path.resolve('tmp', 'joe.txt') //'/Users/joe/tmp/joe.txt' if run from my home folder
console.log('res2',res2);
const res3 = path.resolve('/etc', 'joe.txt') //'/etc/joe.txt'
console.log('res3', res3);
const res4 = path.normalize('/users/joe/..//test.txt') //'/users/test.txt'
console.log('res4', res4);
console.log(path.dirname(notes),path.basename(notes),path.extname(notes), path.basename(notes, path.extname(notes)))