// 기본 타입 : String, Number, Boolean, Undefined(초기화안함), Null(없음)
// 참조 타입 : object

// Object[key-value]형태
// key:string, 정수
// value: 아무거나 가능하다

// 1. 생성자 사용
const car = new Object();
car.name = "캐스퍼";
car.maxSpeed = 300;
car.company = "현대";

// coffee 오브젝트 만들기
// 이름 : 아메리카노, 샷갯수 : 2, 칼로리 : 5, 가격 : 2500, 원두 : " 콜롬비안"

const coffee = new Object();
coffee.name = "아메리카노";
coffee.shot = 2;
coffee.calorie = 5;
coffee.price = 2500;
coffee.beans = "콜롬비안";
console.log(coffee);

const coffee1 = {
  name: "라떼",
  shot: 2,
  calorie: 5,
  price: 2500,
  beans: "베트남",
  isDecaffein: false,
  recipe: {
    1: "로스팅하기",
    2: "컵에 얼음 담고 우유넣기",
    3: "샷 넣기",
    4: "뚜껑닫고 손놈한테 나왔다고 소리치기",
  },
};

console.log(coffee1.beans); // 점연산자
console.log(coffee1["calorie"]); // 괄호 연산자
console.log(coffee1["recipe"][3]);
console.log(coffee1.maker); // undefined

coffee1.maker = "미스터 백";
console.log(coffee1.maker); // 미스터 백
