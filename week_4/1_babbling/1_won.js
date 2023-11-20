function solution(babbling) {
  let answer = 0;
  let tmp = "";
  for (const n of babbling) {
    for (const i in n) {
      tmp += n[i]
      if (tmp === "aya" || tmp === "ye" ||
        tmp === "woo" || tmp === "ma") {
        tmp = ""
      }
      if (i == n.length - 1 && tmp.length === 0) {
        answer++
      }
    }
    tmp = ""
  }
  return answer;
}