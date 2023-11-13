function solution(a, b, c, d) {
  var answer = 0;
  let list = [a, b, c, d].sort();
  let L = list.length;
  let x = new Set(list);
  let setlist = [...x];
  let four = 10 * setlist[1] + setlist[0];
  let left = 0;

  switch (x.size) {
    case 1:
      return a * 1111;

    case 2:
      if (list[1] === list[2]) {
        if (list[1] === setlist[0]) {
          return Math.pow(10 * setlist[0] + setlist[1], 2);
        } else if (list[1] === setlist[1]) {
          return Math.pow(10 * setlist[1] + setlist[0], 2);
        }
      } else return (list[0] + list[3]) * (list[3] - list[0]);
    case 3:
      let j = 0;
      for (let i = 0; i < L; i++) {
        if (list[i] !== setlist[i]) {
          left = list[i];
          console.log(left);
          x.delete(left);
          let temp = [...x];
          return temp[0] * temp[1];
        }
      }
    case 4:
      return list[0];
  }

  return answer;
}
