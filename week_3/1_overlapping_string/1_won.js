function solution(my_string, overwrite_string, s) {
  //정수 s는 시작 인덱스.
  //my_string의 s인덱스부터 overwirte_string으로 교체
  //마지막 인덱스가 오는 경우 고려 (1번 문제)
  var answer = '';
  let substr = my_string.substring(s, overwrite_string);
  let lastIndex = my_string.substring(s + overwrite_string.length);

  answer = substr + overwrite_string + lastIndex;
  return answer;
}