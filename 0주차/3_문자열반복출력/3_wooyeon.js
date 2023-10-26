const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  str = input[0];
  n = Number(input[1]);
  let con = str.repeat(n); //repeat 메소드는 숫자만큼 문자열을 반복.
  console.log(con);
});