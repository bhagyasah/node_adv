const punycode = require('punycode');

console.log(punycode.decode('maana-pta')); 
console.log(punycode.decode('--dqo34k'));

console.log(punycode.encode('mañana'));
console.log(punycode.encode('☃-⌘'))

console.log(punycode.toASCII('mañana.com'));
console.log(punycode.toASCII('☃-⌘.com'))

console.log(punycode.toUnicode('xn--maana-pta.com'))
console.log(punycode.toUnicode('xn----dqo34k.com'));
