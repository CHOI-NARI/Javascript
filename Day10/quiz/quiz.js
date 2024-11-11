// 1. 인풋 안에 글자를 입력했을 때, 글자수를 오른쪽에 숫자로 나타내기

// const inputBox = document.getElementById("inputBox");
// const num = document.getElementById("num");

// inputBox.addEventListener("input", (e) => {
//   console.log(e.target.value.length);
//   num.innerText = e.target.value.length;
// });

// 2. 인풋 안에 글자를 입력했을 때, 글자수가 4~16글자면 통과 (파랑색) / 아니면 불합격 (빨강색)
// HTMl 내용 :
// <input id="inputBox" type="text" />
// <span id="num"></span>

// const inputBox = document.getElementById("inputBox");
// const num = document.getElementById("num");

// inputBox.addEventListener("input", (e) => {
//   const limits = 4 <= e.target.value.length && e.target.value.length <= 16;
//   num.innerText = limits ? "통과" : "불합격";
//   if (4 <= e.target.value.length && e.target.value.length <= 16) {
//     num.style.color = "blue";
//   } else {
//     num.style.color = "red";
//   }
// });

// 인풋 입력글자가 6 ~ 10 사이 ! 느낌표가 꼭 들어가야 함. 통과

const inputBox = document.getElementById("inputBox");
const num = document.getElementById("num");

inputBox.addEventListener("input", (e) => {
  const limits = 6 <= e.target.value.length && e.target.value.length <= 10;
  const hasMark = e.target.value.includes("!");
  num.innerText = limits && hasMark ? "통과" : "불합격";
});
