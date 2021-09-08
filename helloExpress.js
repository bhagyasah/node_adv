const express = require('express');
const dotEnv = require('dotenv');

dotEnv.config();

const app = express();

app.get('/',(req, res) => {
  res.send('Hi from express');
});

// accessig env variables
console.log('ENV value', process.env.USER_ID, process.env.USER_KEY, process.env.NODE_ENV);

// reading args variables 
// *** use minimist npm for more formated way of using argv and send argv
console.log('all args variables', process.argv);
const server = app.listen(3000, () => console.log('server is ready in port', 3000))

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated')
  })
})