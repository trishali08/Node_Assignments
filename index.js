// for taking input from the user

var readline = require('readline');
var res = require('./module');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter value of a: ',(a) => {
  rl.question('Enter value of b: ',(b) => {
    console.log(res.add(a,b));
    console.log(res.sub(a,b));
    console.log(res.mul(a,b));
    console.log(res.div(a,b));
    console.log(res.mod(a,b));
    rl.close();
  });
});
