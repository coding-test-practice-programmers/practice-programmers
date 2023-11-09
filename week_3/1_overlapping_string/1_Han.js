function solution(my_string, overwrite_string, s) {
  var answer = "";
  let x = [...my_string];
  let y = [...overwrite_string];
  let a = [];
  for (let i = s + y.length; i < x.length; i++) {
    a.push(x[i]);
  }
  x.splice(s, y.length, y.join(""));

  return x.join("");
}
