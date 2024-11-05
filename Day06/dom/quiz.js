// 김밥, 참치김밥, 멸추김밥, 소고기김밥
// 돈까스김밥, 제육김밥, 오뎅김밥, 치즈김밥

// 위의 글이 담긴 8개 버튼 태그를 만들고
// 색깔도 flatui에서 8개 가져와서 배경색 입히고
// 화면에 나타내기 (단 코드 20줄 넘기지 말기)

//선생님 답1
// const makeKimbab = (x, y) => {
//   const btn = document.createElement("button");
//   btn.innerHTML = x;
//   btn.style.backgroundColor = y;
//   document.body.appendChild(btn);
// };

// makeKimbab("김밥", "#e74c3c");
// makeKimbab("참치김밥", "#f39c12");
// makeKimbab("멸추김밥", "#f1c40f");
// makeKimbab("소고기김밥", "#2ecc71");

//선생님 답2
const makeKimbabList = [
  { name: "김밥", color: "#e74c3c" },
  { name: "참치김밥", color: "#f39c12" },
  { name: "멸추김밥", color: "#f1c40f" },
  { name: "소고기김밥", color: "#2ecc71" },
  { name: "돈까스김밥", color: "#3498db" },
  { name: "제육김밥", color: "#34495e" },
  { name: "오뎅김밥", color: "#9b59b6" },
  { name: "치즈김밥", color: "#ecf0f1" },
];

const makeKimbab = (x, y) => {
  const btn = document.createElement("button");
  btn.innerHTML = x;
  btn.style.backgroundColor = y;
  document.body.appendChild(btn);
};

makeKimbabList.forEach((x) => makeKimbab(x.name, x.color));
