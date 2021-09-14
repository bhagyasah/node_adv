const thing = [
  new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, "one");
  }),
  new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "two")
  }),
  new Promise((resolve, reject) => setTimeout(resolve, 3000, "Three"))
];

(async function() {
  for await (let a of thing) {
    console.log("itteration", a)
    console.log(a);
  }
})()