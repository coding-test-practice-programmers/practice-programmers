function solution(babbling) {
  let answer = 0;
  for (let i = 0; i < babbling.length; i++) {
    let s = babbling[i];
    s = s.replaceAll("aya", " ");
    s = s.replaceAll("ye", " ");
    s = s.replaceAll("woo", " ");
    s = s.replaceAll("ma", " ");
    s = s.replaceAll(" ", "");
    if (s == "") answer += 1;
  }

  return answer;
}
