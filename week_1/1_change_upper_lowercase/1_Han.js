const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  str = input[0];
  let strA = [...str];

  for (let i in strA) {
    if (strA[i] === strA[i].toUpperCase()) {
      strA[i] = strA[i].toLowerCase();
    } else strA[i] = strA[i].toUpperCase();
  }
  console.log(strA.join(""));
});
