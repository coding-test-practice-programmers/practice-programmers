function solution(n) {
  var answer = '수박';

  // for(let i = 0; i < n; i++){
  //      answer = '' 일때, 작동하는 코드
  //     if(i %  2 == 0){
  //         answer += '수';
  //     }
  //     else{
  //         answer += '박';
  //     }
  // }

  return answer.repeat(n).substring(0, n);
}