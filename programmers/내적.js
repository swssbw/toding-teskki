// 프로그래머스 lv.1 내적
// https://programmers.co.kr/learn/courses/30/lessons/70128?language=javascript

function solution(a, b) {
  return a.reduce((prev, current, idx) => prev + current*b[idx], 0);
}