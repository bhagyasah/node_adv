const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // rl.on('line', (input) => {
// //   // console.log(input);
// //   rl.question('Tell me something else ?', (answer) => {
// //     console.log('You just said', answer)
// //   });
// // });

// rl.on('pause', () => {
//   console.log('Readline paused.');
// });

// rl.on('resume', () => {
//   console.log('Readline resumed.');
// });

// rl.on('SIGCONT', () => {
//   // `prompt` will automatically resume the stream
//   console.log('SIGCONT')
//   rl.prompt();
// });

// rl.on('SIGINT', () => {
//   rl.question('Are you sure you want to exit? ', (answer) => {
//     if (answer.match(/^y(es)?$/i)) rl.pause();
//   });
// });

// rl.on('SIGTSTP', () => {
//   // This will override SIGTSTP and prevent the program from going to the
//   // background.
//   console.log('Caught SIGTSTP.');
// });

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);
//   // rl.pause();
// });

// rl.write('Delete this! 1');
// rl.write(' \n Delete this! 2');
// rl.write(null, { ctrl: true, name: 'u' });

// rl.getPrompt()
// console.log('this is after redline code')
