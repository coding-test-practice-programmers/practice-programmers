function solution(n) {
  let answer = [];
  let x = n;
  while (x > 0) {
    let a = x % 10;
    answer.push(a);
    x = Math.floor(x / 10);
  }
  return answer;
}
