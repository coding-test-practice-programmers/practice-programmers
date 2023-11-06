function solution(number, n, m) {
  var answer = 0;
  //배수는 다르게 말하면 나눠지는 수이기도 함. ㅋ
  if (number % n == 0 && number % m == 0) {
    answer = 1;
  }
  return answer;
}