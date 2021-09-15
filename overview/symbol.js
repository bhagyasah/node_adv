const sym1 = Symbol('cat');
const sym2 = Symbol('cat');
console.log(sym1 === sym2)
console.log(sym1, sym2);
const idSym = Symbol('id');

let user = {
  id: 993,
  name: 'bhagya',
  city: 'ktm',
  age: 59,
  [idSym]: 8431028
}

console.log(Object.getOwnPropertyNames(user));
console.log(Object.getOwnPropertySymbols(user));

const symf1 = Symbol.for('cat');
const symf2 = Symbol.for('cat');
console.log(symf1 === symf2)