function solution(id_pw, db) {
  var answer = "";
  let count = 0;
  for (let i in db) {
    if (id_pw[0] == db[i][0]) {
      if (id_pw[1] == db[i][1]) {
        return "login";
      } else answer = "wrong pw";
      count++;
    }
  }
  return count == 0 ? "fail" : answer;
}
