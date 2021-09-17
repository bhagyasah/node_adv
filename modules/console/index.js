// const arr = [{id: 1, name: 'bhagya'}, { id: 2, name: 'rajiv'}]
// console.table(arr);
// const count = 5;
// console.log('count: %d', count);
// // Prints: count: 5, to stdout
// console.log('count:', count);

console.profile('MyLabel');
// Some code


console.time('100-elements');
for (let i = 0; i < 100; i++) {}
console.timeEnd('100-elements');
console.trace();

console.profileEnd('MyLabel');