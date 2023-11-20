function solution(id_pw, db) {
  var answer = '';
  const userData = db.find(([el]) => el == id_pw[0])
  if (userData) {
    return userData[1] == id_pw[1] ? "login" : "wrong pw"
  }
  else return "fail"
  return answer;
}