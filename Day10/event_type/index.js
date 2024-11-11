// const btn = document.getElementById("btn");
// [1, 2, 3, 4].pam((v) => v + 1);
// btn.addEventListener("click", (e) => {
//   console.log(e);
// });

// const inputID = document.getElementById("inputID");
// inputID.addEventListener("input", (e) => {
//   console.log(e.target.value);
// });

// 1. 인풋안에 몇글자가 쳐졌는지 콘솔로 나타내기
// 2. 인풋 옆에 span 태그 만들고 현재 인풋에 몇글자인지 알려주기

// // HTML 내용 :
// <input id="inputID" type="text" />
// <span id="inputLength">0</span>

// const sentence = document.getElementById("inputID");
// const inputLength = document.getElementById("inputLength"); // 2번 퀴즈 추가
// InputID.addEventListener("input", (e) => {
//   console.log(e.target.value.length);
//   inputLength.innerText = e.target.value.length; // 2번 퀴즈 추가
// });

// 3. input 태그를 두개 만들고
// 확인 버튼 만들고
// 두 인풋의 벨류가 똑같으면 - 확인 버튼 누르면 "통과" 알럿
// 두 인풋의 벨류가 다르면 - 확인 버튼 누르면 "에러" 알럿

// const first = document.getElementById("first");
// const second = document.getElementById("second");
// const check = document.getElementById("check");

// check.addEventListener("click", () => {
//   const result = first.value == second.value ? "통과" : "에러";
//   alert("result");
// });

// 4. 인풋의 벨류가 4~12글자 사이이면
// 오른쪽 버튼 태그가 확인버튼 바뀌고
// 아니면 버튼 태그가 안됨버튼 바뀌기
// // HTML 내용 :
// <input id="inputId" type="text" />
// // <button id="btn">안됨</button>

// const inputId = document.getElementById("inputId");
// const btn = document.getElementById("btn");

// inputId.addEventListener("input", (e) => {
//   const isValid = 4 <= e.target.value.length && e.target.value.lebgth <= 12;
//   btn.innerText = isValid ? "확인" : "안됨";
// });

// 인풋의 밸류가 20글자가 넘지 못하도록 하기

const first = document.getElementById("first");
first.addEventListener("input", (e) => {
  if (e.target.value.length > 5) {
    e.target.value = e.target.value.slice(0, 5);
  }
});
