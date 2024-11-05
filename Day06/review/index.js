const list = [3, 10, 23, 77, 99];

// 1. list 에서 50 이하만 살리기
//나
const num1 = (x) => x <= 50;
list.filter(num1);
//선생님 답
list.filter((x) => x <= 50);

// 2. list 에서 제곱하고 더하기 10하기
// 나
const num2 = (x) => x ** 2 + 10;
list.map(num2);
//선생님 답
list.map((x) => x ** 2 + 10);

// 3. list에서 십의 자리와 일의 자리가 같은
// 숫자만 살리기
//선생님 답
list.filter((x) => String(x)[0] == String(x)[1]);
