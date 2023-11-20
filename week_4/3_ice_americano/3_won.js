function solution(money) {
  var answer = [];
  let price = 5500;
  let coffee = Math.floor(money / price);
  let change = money % price;

  answer.push(coffee);
  answer.push(change);

  return answer;
}