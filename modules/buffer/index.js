// const buf = Buffer.from("Hey");
// console.log(buf)
// console.log(buf[0])
// console.log()

// const buf1 = Buffer.from('buffer');
// const buf2 = Buffer.from(buf1);

// buf1[0] = 0x61;

// console.log(buf1.toString());
// // Prints: auffer
// console.log(buf2.toString());
// // Prints: buffer

// const buf = Buffer.from(new String('this is a test'));
// console.log(buf);
// class Foo {
//   [Symbol.toPrimitive]() {
//     return 'this is a test';
//   }
// }

// const buf1 = Buffer.from(new Foo(), 'utf8');
// console.log(buf1)
// const buf1 = Buffer.from('this is a tést');
// const buf2 = Buffer.from('7468697320697320612074c3a97374', 'hex');

// console.log(buf1.toString());
// // Prints: this is a tést
// console.log(buf2.toString());
// // Prints: this is a tést
// console.log(buf1.toString('latin1'));
// // Prints: this is a tÃ©st

const str = 'Node.js';
const buf = Buffer.allocUnsafe(str.length);
console.log(str.charCodeAt())
for (let i = 0; i < str.length; i++) {
  buf[i] = str.charCodeAt(i);
}

console.log(buf.toString());
// Prints: Node.js