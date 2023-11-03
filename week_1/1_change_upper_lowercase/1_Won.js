const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input = [line];
}).on('close', function () {

  str = input[0];
  let upper = str.toUpperCase();
  let lower = str.toLowerCase();
  let finalCase = [];

  for (let i in str) {
    str[i] != upper[i] ? finalCase += upper[i] : finalCase += lower[i];
  }
  //         for(let i = 0; i < str.length; i++){


  //         if(str[i] != upper[i]){
  //             finalCase += upper[i];
  //         }
  //         else{
  //             finalCase += lower[i];
  //         }
  //     }
  console.log(finalCase);

});