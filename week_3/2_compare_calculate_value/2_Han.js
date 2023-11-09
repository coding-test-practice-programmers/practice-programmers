function solution(a, b) {
  var answer = 0;
  let x = [a, b].join("");
  if (x == 2 * a * b) {
    return x;
  } else return Math.max([a, b].join(""), 2 * a * b);
}
