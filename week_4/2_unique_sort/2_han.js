function solution(numlist, n) {
  var answer = [];
  let less = numlist.filter((value) => value < n);
  let more = numlist.filter((value) => value > n);
  less.sort((a, b) => b - a);
  more.sort((a, b) => a - b);

  numlist.sort((a, b) => {
    const [aGab, bGab] = [Math.abs(a - n), Math.abs(b - n)];
    // 거리가 같다면 더 큰 수를 우선 배치
    if (aGab === bGab) return b - a;
    // 다르다면 거리별 오름차순 정렬
    return aGab - bGab;
  });

  return numlist;

  //     if(numlist.includes(n)){
  //             answer.push(n)
  //     }
  //     console.log(less)
  //     console.log(more)
  //     let i, j = 0;
  // while(less.length  !== 0  || more.legnth !==0){
  //         if(n-less[i] > more[j]-n){
  //             answer.push(more[0]);
  //             more.shift()
  //         }
  //         else if(n-less[i] < more[j]-n){
  //             answer.push(less[i]);
  //             less.shift()
  //         }
  //         else if(n-less[i] == more[j]-n){
  //             answer.push(more[j]);
  //             answer.push(less[i]);
  //                      more.shift();
  //                      less.shift()
  //         }
  //     }
  //     if(less.length){
  //             answer.concat(more)
  //     }
  //     else if(more.length){
  //             answer.concat(less)
  //     }
}
