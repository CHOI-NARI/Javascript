const movies = [
  {
    name: "gladitor",
    genre: ["action", "drama"],
    grade: 19,
    runningTime: "148",
  },
  { name: "hear me", genre: ["drama"], grade: "all", runningTime: "109" },
  { name: "amazon", genre: ["comedy"], grade: "12", runningTime: "113" },
];

// 1. 영화 이름을 앞글자만 대문자화 시키고,
// 장르에 드라마가 있으면 추가 안하고, 없으면 추가하기
// 런닝타임을 시 분으로 바꾸기

//선생님 답1
// const a = movies.map((x) => {
//   x.name = x.name.toLocaleUpperCase()[0] + x.name.slice(1, x.name.length);
//   if (!x.genre.includes("drama")) x.genre.push("drama");
//   x.runningTime =
//     parseInt(Number(x.runningTime) / 60) +
//     "시" +
//     (Number(x.runningTime) % 60) +
//     "분";
//   return x;
// });

// console.log(a);

//선생님 답2

const capitalize = (x) => x.toLocaleUpperCase()[0] + x.slice(1, x.length);
const hasGenre = (list, addGenre) => {
  if (!list.includes(addGenre)) list.push(addGenre);
};

const timeChange = (time) =>
  parseInt(Number(time) / 60) + "시" + (Number(time) % 60) + 분;
const a = movies.map((x) => {
  x.name = capitalize(x.name);
  hasGenre(x.genre, "drama");
  x.runningTime = timeChange(x.runningTime);
  return x;
});
console.log(a);
