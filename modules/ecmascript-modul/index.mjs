// const hiFunc = require('./m1');
// import hiFunc from './m1.mjs';

// hiFunc();

import { readFileSync } from 'fs';
const buffer = readFileSync(new URL('./m1.mjs', import.meta.url));
console.log(buffer.toString())


import { name } from './cjs.cjs';
console.log(name);
// Prints: 'exported'

import cjs from './cjs.cjs';
console.log(cjs);
// Prints: { name: 'exported' }

import * as m from './cjs.cjs';
console.log(m);