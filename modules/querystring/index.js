const qeurystring = require('querystring');

console.log(qeurystring.parse('https://nodejs.org/dist/latest-v14.x/docs/api/querystring.html'))
console.log(qeurystring.parse('country=Nepal&searchKey=&industry=&skill='))

console.log(qeurystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' }))