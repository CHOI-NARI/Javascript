// Array (=리스트)
// 1.
const num = new Array(1, 3, 5, 7, 9);
console.log(num);
console.log(num[2]);

// 2.
const num1 = [1, 3, 5, 7, 9];
console.log(num1[4]);

num1.push(11); // 맨 뒤에 추가해줘
num1.pop(); // 맨뒤꺼 빼줘
num1.unshift(0); // 맨 앞에 추가해줘
num1.shift(); // 맨 앞에꺼 빼줘

// quiz.
// 과일리스트 = []

const fruit = ["apple", "orange", "kiwi", "grape"];
console.log(fruit[2]);
