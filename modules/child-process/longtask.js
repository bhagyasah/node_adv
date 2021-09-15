
function longComp() {
  let sum = 0;
  for (let i = 0; i < 1e9; i+= 1) {
    sum += i;
  }
  return sum;
}

process.on('message', (message) => {
  console.log('message in child process', message)
  if(message === 'start') {
    const sum = longComp();
    process.send(sum);
  }
})