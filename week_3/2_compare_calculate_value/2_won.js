function solution(a, b) {
  //자바스크립트의 문제점이용. 문자 + 숫자, 또는 숫자 + 문자는 붙은 문자열로 변환됨.
  var answer = 0;
  let sum1 = a.toString() + Number(b);
  let multiply = 2 * a * b;
  if (sum1 > multiply) {
    answer = Number(sum1);
  }
  else {
    answer = multiply;
  }
  return answer;
}