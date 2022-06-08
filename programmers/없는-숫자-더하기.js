// 프로그래머스 lv.1 없는 숫자 더하기
// https://programmers.co.kr/learn/courses/30/lessons/86051
function solution(numbers) {
  const int = [0,1,2,3,4,5,6,7,8,9];
  let diff = int.filter(x => !numbers.includes(x));
  
  let answer = diff.reduce(function add(sum, currValue) {
    return sum + currValue;
  }, 0);
  
  return answer;
}