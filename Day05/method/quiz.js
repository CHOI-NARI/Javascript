// // 1. 유저에게 영어로 좋아하는 커피를 입력받고 콘솔로 대문자화 해서 보여주기
// const coffee = prompt("좋아하는 커피를 영어로 입력하세요");
// console.log(coffee.toUpperCase());

// // 2. 유저에게 영어 한 문장을 입력받고, 반복 횟수를 n을 물어보고,
// // n번의 문장이 나오도록 콘솔로 만들기

// const sentence = prompt("영문장 입력");
// const count = Number(prompt("반복 횟수 입력"));
// console.log(sentence.repeat(count));

// 유저에게 비밀번호 설정을 물어보기

// 1. 비밀번호가 알파벳 IT로 시작안하면 -> 콘솔에 "비밀번호가 IT로 시작안합니다" 표기
// 2. 비밀번호가 #,@,! 문자가 안들어가면 -> "비밀번호에 특수문자가 없습니다" 표기
// 3. 비밀번호의 문자 길이가 4~12글자 사이가 아니면 -> "비밀번호의 길이가 짧거나 깁니다"
// 4. 위의 조건이 다 되면 비밀번호 설정완료

// const password = prompt("비밀번호를 입력하세요");
// if (!password.startsWith("IT")) {
//   console.log("비밀번호가 IT로 시작 안합니다");
// } else if (
//   !password.includes("#") &&
//   !password.includes("@") &&
//   !password.includes("!")
// ) {
//   console.log("비밀번호에 특수문자가 없습니다");
// } else if (password.length < 4 || 12 < password.length) {
//   console.log("비밀번호의 길이가 짧거나 깁니다");
// } else {
//   console.log("비밀번호 설정완료");
// }

const password = prompt("비밀번호를 입력하세요");
const isStarWithIT = password.startsWith("IT");
const hassSpecialChar =
  password.includes("#") || password.includes("!") || password.includes("@");
const isLowerThan4 = password.length < 4;
const isOverThan12 = password.length > 12;

if (!isStarWithIT) {
  console.log("비밀번호가 IT로 시작 안합니다!");
} else if (!hassSpecialChar) {
  console.log("비밀번호에 특수문자가 없습니다");
} else if (isLowerThan4 || isOverThan12) {
  console.log("비밀번호의 길이가 짧거나 깁니다");
} else {
  console.log("비밀번호 설정완료");
}
