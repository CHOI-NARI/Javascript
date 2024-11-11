// id 인풋 태그 만들기

// 1. id 인풋의 길이가 4~16가 아니면
// 밑에 빨간색 경고문구로 4글자 이하 : id 길이가 짧습니다.
// 밑에 빨간색 경고문구로 16글자 이상 : id 길이가 너무 깁니다

// 2. 특수문자 !, @, #, * 중에 하나라도 없으면
// 밑에 빨간색 경고 문구로 :  !, @, #, *  특수문자를 꼭 포함해야 합니다

// 3. 위에 모두 통과되면 밑에 파란색 통과 문구로 : 해당 아이디는 유효합니다

const first = document.getElementById("first");
const btn = document.getElementById("btn");

first.addEventListener("input", (e) => {
  const result = 4 <= e.target.value.length && e.target.value.length <= 16;
  btn.innerText = result ? "id 길이가 짧습니다" : "id 길이가 너무 깁니다";

  btn.style.color = "red";
});
