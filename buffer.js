const buf = Buffer.from('Hey');
console.log(buf[0]);
console.log(buf.toString());
console.log(buf.length);

const newBuf = Buffer.alloc(1);
newBuf.write('Hi');
const stringRes = newBuf.toString();
console.log('newBuf', stringRes)

let bufcopy = Buffer.alloc(4) //allocate 4 bytes
bufcopy.set(buf)
console.log('copy buff', bufcopy.toString())