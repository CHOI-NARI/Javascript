// 0 이하로 안떨어지도록 수정하기
// 0~9 검은색 숫자
// 10 이상이 되면 빨간색으로 숫자 바뀌기

// plus.addEventListener("click", () => {
//   const number = Number(num.innerText);
//   num.innerText = number + 1; // 9-> 10
//   if (number + 1 < 10) {
//     num.style.color = "black";
//   } else {
//     num.style.color = "red";
//   }
// });

// minus.addEventListener("click", () => {
//   const number = Number(num.innerText);
//   if (number > 0) {
//     num.innerText = number - 1;
//   }
//   if (number - 1 < 10) {
//     num.style.color = "black"; // 10 -> 9
//   } else {
//     num.style.color = "red";
//   }
// });

const minus = document.getElementById("minus");
const num = document.getElementById("num");
const plus = document.getElementById("plus");

minus.addEventListener("click", () => {
  num.innerText = Number(num.innerText) - 1;
});

plus.addEventListener("click", () => {
  num.innerText = Number(num.innerText) + 1;
});
