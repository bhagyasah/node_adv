function *generator() {
  yield 1;
  yield 2;
}

const iterator = generator();
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

// infinite generator
function* infiniteMaker() {
  let i = 0;
  while(true) {
    yield i;
    i ++
  }
}

const infiniteItertor = infiniteMaker()
console.log(infiniteItertor.next())
console.log(infiniteItertor.next())