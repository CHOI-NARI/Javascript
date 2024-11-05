// 첫번째 퀴즈 ------------------------------------

const list = [1, 3, 5, 7, 9];

// 1. 각각 요소를 3배 해서 콘솔로 나타내기
// return : 값을 적용해서 돌려준다

const multiply = (x) => x * 3;
const a = list.map(multiply);
console.log(a);

// 2. 각각 요소를 더하기 100 해서 콘솔로 나타내기

const plus = (x) => x + 100;
const b = list.map(plus);
console.log(b);

// 3. 각각 요소를 6보다 작으면 두배, 크면 세배해서 콘솔로 나타내기

const smallBig = (x) => (x < 6 ? x * 2 : x * 3);
const c = list.map(smallBig);
console.log(c);

// 4. 각각 요소를 3의 배수가 아니면 +10, 맞으면 두배해서 콘솔로 나타내기

const isThree = (x) => (x % 3 != 0 ? x + 10 : x * 3);
const d = list.map(isThree);
console.log(d);

// 두번째 퀴즈 ------------------------------------

const list1 = [10, 20, 30, 40, 50];

// 1. 30보다 작으면 각 요소를 두배, 아니면 그냥 그대로
const thirty = (x) => (x < 30 ? x * 2 : x);
const e = list1.map(thirty);
console.log(e);

// 2. 30이면 "🍔"로 바꾸고, 아니면 "🍕"로 바꾸기

const lotteria = (x) => (x == 30 ? "🍔" : "🍕");
const f = list1.map(lotteria);
console.log(f);
