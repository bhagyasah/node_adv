// const dns, { Resolver } = require('dns');
const dns = require('dns');

// const { Resolver } = dns;
// const resolver = new Resolver();
// resolver.setServers(['4.4.4.4']);

// // This request will use the server at 4.4.4.4, independent of global settings.
// resolver.resolve4('example.org', (err, addresses) => {
//   // ...
//   console.log(addresses)
// });

// dns.lookupService('127.0.0.1', 22, (err, hostname, service) => {
//   console.log(hostname, service);
//   // Prints: localhost ssh
// });

// dns.resolve('properclass.com', 'TXT', (err, record) => {
//   console.log(record)
// })

// dns.resolveAny('properclass.com', (err, record) => {
//   console.log(record)
// })

dns.resolveCname('www.properclass.com', (err, rec) => {
  console.log(rec);
})