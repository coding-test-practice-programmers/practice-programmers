function solution(n, m) {
  var answer = [];
  let a;
  let b = 0;
  let x = true;
  for (let i = 0; i < Math.max(n, m); i++) {
    if (n % i == 0 && m % i == 0) {
      a = i;
      b += i;
    }
  }

  return [a, (n * m) / a];
}
