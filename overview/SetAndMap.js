const set = new Set();

set.add(1);
set.add({a: 1})
set.add({a: 1})
set.delete({a: 1})
console.log(set, set.has());

const map = new Map();

map.set('a', 1);
map.set('b',2);
map.set('c', 1);
map.set({}, 1);
map.set('b', 1);
map.delete('a')
console.log(map);