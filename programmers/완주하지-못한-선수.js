// 프로그래머스 lv.1 완주하지 못한 선수
// https://programmers.co.kr/learn/courses/30/lessons/42576?language=javascript
function solution(participant, completion) {
  participant = participant.sort();
  completion = completion.sort();

  for (let i = 0; i < completion.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
  
  return participant[participant.length - 1];
}