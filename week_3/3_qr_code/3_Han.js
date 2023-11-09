function solution(q, r, code) {
  let a = [...code];
  let b = [];
  for (let i = 0; i < a.length; i++) {
    if (i % q == r) {
      b.push(a[i]);
    }
  }
  return b.join("");
}
