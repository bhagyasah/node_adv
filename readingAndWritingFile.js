const fs = require('fs')
// *************** Readin file sync and async way
// fs.readFile('test.txt', 'utf8' , (err, data) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log(data)
// })
// Alternatively, you can use the synchronous version fs.readFileSync()

// try {
//   const data = fs.readFileSync('test.txt', 'utf8')
//   console.log(data)
// } catch (err) {
//   console.error(err)
// }

const content = 'Some content!'

// fs.writeFile('test.txt', content, err => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   //file written successfully
// })

fs.writeFile('test.txt', content, { flag: 'a+' }, err => {})
