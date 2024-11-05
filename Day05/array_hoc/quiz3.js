// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // 1. 짝수만 살리기
// const even = (x) => x % 2 == 0;
// list.filter(even);

// // 2. 5보다 크면 살리기
// const five = (x) => x >= 5;
// list.filter(five);

// // 3. 각 수를 제곱을 한 다음에 50보다 작으면 살리기

// const square = (x) => x ** 2;
// const underFifty = (x) => x <= 50;
// list.filter(square).filter(underFifty);

// --------------------------------------

const fruits = ["apple", "banana", "kiwi", "melon", "watermelon", "grape"];

// 1. 문자의 길이가 5글자보다 큰 과일들만 살리기
const fiveAs = (x) => x.length > 5;
fruits.filter(fiveAs);

// 2. 알파벳 i가 들어간 과일만 살리기
const alphabet = (x) => x.includes("i");
fruits.filter(alphabet);

// 3. melon이 들어간 과일만 살리기
const basket = (x) => x.includes("melon");
fruits.filter(basket);
