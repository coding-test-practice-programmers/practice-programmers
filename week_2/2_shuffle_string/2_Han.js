function solution(str1, str2) {
  var answer = "";
  let a = [...str1];
  let b = [...str2];
  let c = [];
  for (let i in a) {
    c.push(a[i]);
    c.push(b[i]);
  }
  // return answer;

  let x = c.join("");
  return x;
}
