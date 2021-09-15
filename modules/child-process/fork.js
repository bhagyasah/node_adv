const express = require('express');
const { fork } = require('child_process')

const app = express();

app.get('/one', (req, res) => {
const sum = longComp()
res.send({ sum: sum })
});

app.get('/two', async (req, res) => {
  const sum = await longCompPromise();
  res.send({sum: sum})
});

app.get('/three', (req, res) => {
  const child = fork('./longtask.js');
  child.send('start');
  child.on('message', (sum) => {
    res.send({ sum: sum })
  })
});

app.listen(3000, () => {
  console.log('all is listen on port 3000...')
})

function longComp() {
  let sum = 0;
  for (let i = 0; i < 1e9; i+= 1) {
    sum += i;
  }
  return sum;
}

function longCompPromise() {
  return new Promise((resolve, reject) => {
    let sum = 0;
    for (let i = 0; i < 1e9; i+= 1) {
      sum += 1;
    }
    resolve(sum)
  })
}