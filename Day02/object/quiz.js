// 1. 점심메뉴 오브젝트 만들기
// name : "",
// price : "",
// kcal : "",
// restaurant : {1:,2:,3:}

const lunch = {
  name: "떡볶이",
  price: 20000,
  kcal: 50000,
  restaurant: {
    1: "동대문 엽기 떡볶이",
    2: "신전 떡볶이",
    3: "우리 할매 떡볶이",
  },
};

console.log(lunch);

// 2. 후식메뉴 오브젝트 만들기
// name, price, kcal는 유저에게 prompt로 각각 입력받고
// 콘솔로 나타내기

// 내꺼
// const dessert1 = prompt("name");
// const dessert2 = prompt("price");
// const dessert3 = prompt("kcal");

// console.log(["name"]["price"]["kcal"]);

// 선생님답
const dessert = {};
const name = prompt("후식이름");
dessert.name = name;
const price = prompt("후식가격");
dessert.price = price;
const kcal = prompt("후식칼로리");
dessert.kcal = kcal;

console.log(dessert);
