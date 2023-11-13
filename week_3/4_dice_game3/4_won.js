function solution(a, b, c, d) {
  let result = [a, b, c, d].reduce((accu, curr) => {
    accu.set(curr, (accu.get(curr) || 0) + 1);
    return accu;
  }, new Map());

  result = [...result].sort((a, b) => b[1] - a[1])
  for (let [key, val] of result) {
    if (val === 4) {
      return 1111 * key
    }
    if (val === 3) {
      let q = result[1][0]
      return (10 * key + q) * (10 * key + q)
    }
    if (val === 2 && result.length === 2) {
      let q = result[1][0]
      return (key + q) * Math.abs(key - q)
    }
    if (val === 2 && result.length === 3) {
      let q = result[1][0]
      let r = result[2][0]
      return q * r
    }
    if (val === 1 && result.length === 4) {
      return Math.min(a, b, c, d)
    }
  }
}