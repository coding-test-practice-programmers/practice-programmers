function solution(arr) {
  var answer = [];
  let a = arr.length;
  let x = 0;
  if (a == 1) {
    return arr;
  }
  for (let i = 0; i < a; i++) {
    x = 2 ** i;
    if (a == x) {
      return arr;
    } else if (x > a) {
      break;
    }
  }
  let n = x - a;

  for (let j = 0; j < n; j++) {
    arr.push(0);
  }
  return arr;
}
