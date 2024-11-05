// 유저에게 영어문장을 입력받고
// 각 단어의 문자의 길이의 합을 구하기
// ex) i love you -> 1 4 3 => 8
// ex) my favorite sports -> 2 8 6 => 16

const sentence = prompt("영어문장을 입력하시오")
  .split("")
  .map((x) => x.length)
  .reduce((x, y) => x + y);

console.log(sentence);
