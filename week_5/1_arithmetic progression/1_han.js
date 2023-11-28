function solution(a, d, included) {
  var answer = 0;
  for (let i in included) {
    if (included[i] === true) {
      answer += a + d * i;
      console.log(i);
    }
  }
  return answer;
}
