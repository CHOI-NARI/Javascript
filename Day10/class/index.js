// class : 변수들 + 함수들
// Student : [이름,성별,나이, 수강목록] + []

//변수
class Student {
  //   name = "전수효";
  //   age = 32;
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.major = "미대생";
  }

  //함수
  hello() {
    console.log(`안녕하세요 저는 ${this.name}이고, 나이는 ${this.age}이고, 전공은 ${this.major}입니다.`);
  }
  past() {
    console.log(`10년 전 저의 나이는 ${this.age - 10}살 입니다.`);
  }
}

// a = Student Type
const a = new Student("율미", 22);
// a.hello();
// a.past();

const b = new Student("나으리", 32, "로봇개발");
// b.hello();
// b.past();

//---------------------------------------------------

// 커피 클래스
// 변수 : 이름, 가격, 성분
// 함수 : 주문하기 : 주문하신 ~~ 커피 가격은 ~~ 입니다.\

class Coffee {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.ingredient = [];
  }

  result() {
    console.log(`주문하신 ${this.name} 커피 가격은 ${this.price}입니다.`);
  }

  plus(something) {
    this.ingredient.push(something);
  }
  info() {
    console.log(`들어간 성분은 ${this.ingredient}입니다.`);
  }
}

const c = new Coffee("아메리카노", 2000);
c.plus("🧊");
c.plus("🍋");
c.plus("고기");
c.info();

const d = new Coffee("민트모카", 3000);
d.plus("고수");
d.info();

// 피자 클래스
// 변수 : 이름, 가격, 토핑
// 함수 : 토핑 추가하기, 총 금액 알려주기
//  - 토핑 : 토핑이름, 토핑가격,
//  - 금액 : 토핑의 쓰인 종류와 총 가격을 알려주는 함수

class Pizza {
  constructor(name, price, topping) {
    this.name = name;
    this.price = 0;
    this.topping = [];
  }

  addTopping(name, price) {
    this.topping.push({ name: name, price: price });
  }
  info() {
    console.log(this.topping);
  }
}

const a1 = new Pizza("슈프림피자");
a1.addTopping("불고기", 3000);
a1.addTopping("올리브", 2000);
a1.addTopping("치즈크러스트", 3000);
a1.info();

// 영화관 theater
// 변수 : 영화 제목, 상영관, 현재 관람객 (기본값 0명)
// 함수 :
// 관람객 추가 : 관람객 n명 매개변수로 들어오면 늘어나는 함수
// 영화정보 : 영화 제목과 상영관 어디와 현재 총 관람객을 알려주는 함수
class Theater {
  constructor(name, place) {
    this.name = name;
    this.place = place;
    this.person = 0;
  }
  add(n) {
    this.person = this.person + n;
  }
  info() {
    console.log(this.name, this.place, this.person);
  }
}

const movie1 = new Theater("짱구는 못말려", "A관");
movie1.add(200);
movie1.info();
