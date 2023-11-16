function solution(sizes) {
  var answer = 0;
  // let sorted = []
  //switch
  let a1 = [];
  let a2 = [];
  for (let i in sizes) {
    // if(sizes[i][0]<sizes[i][1]){
    //     let temp = sizes[i][0];
    //     sizes[i][0]=sizes[i][1];
    //     sizes[i][1] =temp;
    // }
    // sorted[i] = [ Math.min(sizes[i][0],sizes[i][1]), Math.max(sizes[i][0],sizes[i][1])]
    a1.push(Math.max(sizes[i][0], sizes[i][1]));
    a2.push(Math.min(sizes[i][0], sizes[i][1]));
  }
  // let max1 = 0
  // let max2 = 0
  // for(let i in  sizes){
  //     if(sorted[i][0] > max1){
  //         max1 = sorted[i][0]
  //     }
  //     if(sorted[i][1] > max2){
  //         max2 = sorted[i][1]
  //     }
  // }
  answer = Math.max.apply(Math, a1) * Math.max.apply(Math, a2);
  //answer = Math.max(...a1)*Math.max(...a2)
  return answer;
}
