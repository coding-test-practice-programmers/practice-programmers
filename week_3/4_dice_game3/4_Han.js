function bst() {
  let p = [0, 0.14, 0.1, 0.05, 0.25];
  let q = [0.09, 0.05, 0.04, 0.08, 0.2];
  let w = [[]];
  let c = [[]];
  let answer = [];
  let x = 0;
  for (let i = 0; i < 5; i++) {
    w[(i, i)] = q[i];
    c[(i, i)] = 0;
  }
  for (let L = 1; L < 5; L++) {
    for (let i = 0; i < 5 - L; i++) {
      let j = i + L;
      w[(i, j)] = w[(i, j - 1)] + p[j] + q[j];
      let result;
      for (let k = i + 1; k <= j; k++) {
        if (k == i + 1) {
          result = c[(i, k - 1)] + c[(k, j)] + w[(i, j)];
        } else if (result > c[(i, k - 1)] + c[(k, j)] + w[(i, j)]) {
          result = c[(i, k - 1)] + c[(k, j)] + w[(i, j)];
          c[(i, j)] = result;
          x = k;
        }
        // console.log(i + " " + j + " " + L + " " + k + " ");
      }
      answer.push(x);
    }
  }
  console.log(c);
}

bst();
