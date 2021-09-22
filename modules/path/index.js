const path = require('path');

console.log(path.basename('./test-folder/test.txt'))
console.log(path.basename('./test-folder/test.txt', '.txt'))
console.log(process.env.PATH);
console.log(process.env.PATH.split(path.delimiter));
console.log(path.dirname('./test-folder/test.txt'));
console.log(path.extname('./index.js'))
console.log(path.format({
  root: '/ignored',
  dir: '/home/user/dir',
  base: 'file.txt'
}))
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'))
console.log(path.normalize('/foo/bar//baz/asdf//quux//../'))
console.log(path.parse('/home/user/dir/file.txt'))
console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'))
console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'))
