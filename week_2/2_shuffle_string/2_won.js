function solution(str1, str2) {

  var answer = '';

  for (let i in str1) {
    answer += str1[i] + str2[i]; //복합할당 연산자로 현재값에 값을 더한 후 다시 할당을 반복.
  }
  return answer;
}