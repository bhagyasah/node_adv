import { pathToFileURL } from 'url';

new URL('/foo#1', 'file:');           // Incorrect: file:///foo#1
console.log(pathToFileURL('/foo#1'));              // Correct:   file:///foo%231 (POSIX)

new URL('/some/path%.c', 'file:');    // Incorrect: file:///some/path%.c
console.log(pathToFileURL('/some/path%.c'));   

const url = require('url');
url.format({
  protocol: 'https',
  hostname: 'example.com',
  pathname: '/some/path',
  query: {
    page: 1,
    format: 'json'
  }
});

console.log(url)