function solution(n) {
  let str = n.toString();
  var answer = [...str];
  let reverse = answer.reverse();
  answer = reverse.map(Number);
  return answer;
}
