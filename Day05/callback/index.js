const add = (a, b) => {
  return a + b;
};

const addFood = (list) => {
  list.push("짬뽕");
  return list;
};

// // 라면 레시피
const cook = (a) => {
  console.log("요리준비!");
  a();
  console.log("요리완성!");
};

const ramen = () => {
  console.log("물끓이기");
  console.log("스프넣기");
  console.log("라면넣기");
};

cook(ramen);

// // 짜파게티 레시피
// const cook2 = () => {
//   console.log("짜파게티 준비!");
//   a();
//   console.log("짜파게티 완성!");
// };

// const ramen2 = () => {
//   console.log("물끓이기");
//   console.log("면넣기");
//   console.log("물버리기");
//   console.log("스프넣기");
//   console.log("올리브유넣기");
// };

// cook2(ramen2);

// 다른함수 방법
const cook3 = (recipe) => {
  console.log("요리준비!");
  recipe();
  console.log("");
};
