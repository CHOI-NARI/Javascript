// // 유저에게 태어난 년도를 물어보고
// // 무슨띠인지 알려주기
// // 2012년 -> 용띠
// // 1989년 -> 뱀띠
// // 2005년 -> 닭띠

// const year = Number(prompt("태어난 년도를 입력하세요"));

// const total = {
//   animal1: "쥐",
//   animal2: "소",
//   animal3: "호랑이",
//   animal4: "토끼",
//   animal5: "용",
//   animal6: "뱀",
//   animal7: "말",
//   animal8: "양",
//   animal9: "원숭이",
//   animal10: "닭",
//   animal11: "개",
//   animal12: "돼지",
// };

// 2024 % 12;

const animal = {
  0: "원숭이띠",
  1: "닭띠",
  2: "개띠",
  3: "돼지띠",
  4: "쥐띠",
  5: "소띠",
  6: "호랑이띠",
  7: "토끼띠",
  8: "용띠",
  9: "뱀띠",
  10: "말띠",
  11: "양띠",
};

const year1 = Number(prompt("몇년생이세요?)"));

alert(`당신은 ${animal[year % 12]} 네요!`);
