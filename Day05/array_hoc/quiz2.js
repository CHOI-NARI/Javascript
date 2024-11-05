const list = [
  { name: "hot americano", price: 2000, shot: 2 },
  { name: "ice americano", price: 2500, shot: 2 },
  { name: "hot latte", price: 3000, shot: 2 },
  { name: "ice latte", price: 3500, shot: 2 },
  { name: "ice mocha", price: 3500, shot: 3 },
];

// 1. 리스트에서 이름을 모두 대문자화 시키기
// 나

// const sentence = (x) => x["name"].toUpperCase();
// const a = list.map(sentence);
// console.log(a);

//선생님
const a10 = (x) => {
  x.name = x.name.toUpperCase();
  return x;
};

const answer1 = list.map(a10);
console.log(answer1);

// 2. 리스트에서 가격을 인플레이션으로 10% 올리기

//나
// const inflation = (x) => x["price"] + x["price"] * 0.1;
// const b = list.map(inflation);
// console.log(b);

const inflation = (x) => {
  x.price = x.price * 1.1;
  return x;
};
const answer2 = list.map(inflation);
console.log(answer2);

// 3. 리스트에서 샷을 투샷 추가하기

const plusShot = (x) => {
  x.shot = x.shot + 2;
  return x;
};
const answer3 = list.map(plusShot);
console.log(answer3);

// 4. price를 엔화를 적용한 yenprice 추가하기

const yenprice = (x) => {
  x.yenprice = x.price * 0.11;
  return x;
};
const answer4 = list.map(yenprice);
console.log(answer4);