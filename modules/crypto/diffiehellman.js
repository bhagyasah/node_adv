const crypto = require('crypto');
const assert = require('assert');

// Generate Alice's keys...
const alice = crypto.createDiffieHellman(2048);
const aliceKey = alice.generateKeys();
console.log(aliceKey)
// Generate Bob's keys...
const bob = crypto.createDiffieHellman(alice.getPrime(), alice.getGenerator());
const bobKey = bob.generateKeys();
console.log(bobKey)
// Exchange and generate the secret...
const aliceSecret = alice.computeSecret(bobKey);
const bobSecret = bob.computeSecret(aliceKey);
console.log(aliceSecret, bobSecret)
// OK
const isEquesl = assert.strictEqual(aliceSecret.toString('hex'), bobSecret.toString('hex'));
console.log(isEquesl)