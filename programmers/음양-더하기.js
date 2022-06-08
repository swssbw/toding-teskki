// 프로그래머스 lv.1 음양 더하기
// https://programmers.co.kr/learn/courses/30/lessons/76501?language=javascript
function solution(absolutes, signs) {
  return absolutes.reduce((acc, value, index) => acc + value * (signs[index] ? 1 : -1) , 0);
}