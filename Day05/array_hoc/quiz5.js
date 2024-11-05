const fruits = ["apple", "banana", "kiwi", "pineapple", "mango"];

// 과일리스트에서 과일 단어에 알파벳 k, p, m이 하나라도 들어가면 살리기

// // 나
// const data = (x) => x.includes("k") || x.includes("p") || x.includes("m");
// fruits.filter(data);

//선생님1
// const hasKPM = (x) => {
//   return ["k", "p", "m"].some((y) => y == x);
// };

// fruits.filter();

//선생님2
fruits.filter((x) => ["k", "p", "m"].some((y) => x.includes(y)));
