function solution(money) {
  var answer = [];
  let count = Math.floor(money / 5500);
  let leftover = Math.floor(money % 5500);
  console.log(leftover);
  return [count, leftover];
}
