// 1.
// 유저에게 아메리카노 가격을 입력 받고
// 유저에게 아메리카노 갯수를 입력 받은뒤
// 알럿으로 아메리카노의 총 ~~ 갯수의 가격은 ~~ 입니다.
const coffee = prompt("아메리카노 가격 입력");
const num = prompt("아메리카노 갯수 입력");

alert(
  `아메리카노의 갯수는 ${num} 잔이고, 가격은 ${
    Number(coffee) * Number(num)
  }원입니다.`
);

// 2.
// 유저에게 정사각형의 한변의 길이를 입력받고
// 알럿으로 정사각형의 둘레와 넓이를 나타내기

const triangle = prompt("정삼각형의 한변의 길이");
const outline = triangle * 4;
const extent = (triangle * 0.5) / 2;

alert(`정사각형의 둘레는 ${outline} 이고, 넓이는 ${extent} 입니다.`);

// 3.
// 유저에게 정삼각형의 밑변과 높이를 입력받고
// 알럿으로 정삼각형의 둘레와 넓이 나타내기
const diagram = prompt("정삼각형의 밑변");
const height = prompt("정삼각형의 높이");
const line = diagram * 3;
const row = (diagram * height) / 2;

alert(`정삼각형의 둘레는 ${line} cm 이고, 넓이는 ${row} cm 입니다.`);

// 4.
// 유저에게 반지름의 길이를 입력받고
// 알럿으로 원의 둘레와 넓이를 나타내기

const half = prompt("반지름의 길이");
const circle = 2 * 3.14159 * half;
const area = half * half * 3.14;

alert(`원의 둘레는 ${circle} cm 이고, 넓이는 ${area} cm 입니다.`);
